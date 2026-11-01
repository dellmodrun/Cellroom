document.addEventListener("DOMContentLoaded", () => {
  const brandHome = document.getElementById("brandHome");
  const exitApp = document.getElementById("exitApp");
  const homepage = document.getElementById("top");
  const walletButton = document.getElementById("signIn");
  const walletDialog = document.getElementById("walletDialog");
  const walletClose = document.getElementById("walletClose");
  const walletOptions = document.getElementById("walletOptions");
  const walletConnected = document.getElementById("walletConnected");
  const walletName = document.getElementById("walletName");
  const walletAddress = document.getElementById("walletAddress");
  const walletStatus = document.getElementById("walletStatus");
  const walletCopy = document.getElementById("walletCopy");
  const walletDisconnect = document.getElementById("walletDisconnect");
  const preferredWalletKey = "cellroom-solana-wallet";
  let activeProvider = null;
  let activeWallet = null;
  let activeAddress = "";

  const walletDefinitions = {
    phantom: {
      name: "Phantom",
      install: "https://phantom.com/",
      provider: () => window.phantom?.solana?.isPhantom
        ? window.phantom.solana
        : null,
    },
    solflare: {
      name: "Solflare",
      install: "https://solflare.com/",
      provider: () => window.solflare?.isSolflare ? window.solflare : null,
    },
  };

  const publicKeyText = (value) => {
    const publicKey = value?.publicKey ?? value;
    return publicKey?.toBase58?.() ?? publicKey?.toString?.() ?? "";
  };

  const shortAddress = (address) => address
    ? `${address.slice(0, 4)}…${address.slice(-4)}`
    : "Connect wallet";

  const renderWallet = () => {
    const connected = Boolean(activeProvider && activeAddress);
    const expectedLabel = connected
      ? shortAddress(activeAddress)
      : "Connect wallet";

    if (walletButton && walletButton.textContent !== expectedLabel) {
      walletButton.textContent = expectedLabel;
    }
    walletButton?.setAttribute("data-wallet-connected", String(connected));
    if (walletButton) {
      walletButton.title = connected ? activeAddress : "Connect a Solana wallet";
    }
    if (walletOptions) walletOptions.hidden = connected;
    if (walletConnected) walletConnected.hidden = !connected;
    if (walletName) {
      walletName.textContent = connected
        ? `${walletDefinitions[activeWallet]?.name ?? "Solana wallet"} connected`
        : "Wallet connected";
    }
    if (walletAddress) walletAddress.textContent = activeAddress;
  };

  const setStatus = (message) => {
    if (walletStatus) walletStatus.textContent = message;
  };

  const clearWallet = () => {
    activeProvider = null;
    activeWallet = null;
    activeAddress = "";
    localStorage.removeItem(preferredWalletKey);
    renderWallet();
    setStatus("Choose a Solana wallet to continue.");
  };

  const attachProviderEvents = (provider) => {
    if (!provider?.on || provider.__cellroomBound) return;
    try {
      Object.defineProperty(provider, "__cellroomBound", { value: true });
    } catch {}
    provider.on("disconnect", clearWallet);
    provider.on("accountChanged", (publicKey) => {
      const nextAddress = publicKeyText(publicKey);
      if (!nextAddress) return clearWallet();
      activeAddress = nextAddress;
      renderWallet();
      setStatus("Account changed successfully.");
    });
  };

  const connectWallet = async (walletId, options) => {
    const definition = walletDefinitions[walletId];
    const provider = definition?.provider();
    if (!definition) return;
    if (!provider) {
      setStatus(`${definition.name} is not installed. Opening its official site…`);
      window.open(definition.install, "_blank", "noopener,noreferrer");
      return;
    }

    setStatus(`Waiting for ${definition.name}…`);
    try {
      const response = await provider.connect(options);
      const address = publicKeyText(response) || publicKeyText(provider.publicKey);
      if (!address) throw new Error("The wallet did not return an address.");
      activeProvider = provider;
      activeWallet = walletId;
      activeAddress = address;
      localStorage.setItem(preferredWalletKey, walletId);
      attachProviderEvents(provider);
      renderWallet();
      setStatus("Wallet connected.");
    } catch (error) {
      if (options?.onlyIfTrusted) return;
      setStatus(error?.code === 4001
        ? "Connection request cancelled."
        : error?.message || "Wallet connection failed. Please try again.");
    }
  };

  brandHome?.addEventListener("click", (event) => {
    if (!document.body.classList.contains("app-open")) return;

    event.preventDefault();
    exitApp?.click();
    history.replaceState(null, "", `${location.pathname}${location.search}#top`);
    homepage?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  });

  walletButton?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    renderWallet();
    walletDialog?.showModal();
  }, { capture: true });

  walletClose?.addEventListener("click", () => walletDialog?.close());
  walletDialog?.addEventListener("click", (event) => {
    if (event.target === walletDialog) walletDialog.close();
  });

  walletOptions?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-wallet]");
    if (option) connectWallet(option.dataset.wallet);
  });

  walletCopy?.addEventListener("click", async () => {
    if (!activeAddress) return;
    try {
      await navigator.clipboard.writeText(activeAddress);
      setStatus("Wallet address copied.");
    } catch {
      setStatus("Copy failed. Select the address and copy it manually.");
    }
  });

  walletDisconnect?.addEventListener("click", async () => {
    try {
      await activeProvider?.disconnect?.();
    } catch {}
    clearWallet();
  });

  new MutationObserver(renderWallet).observe(walletButton, {
    childList: true,
    characterData: true,
    subtree: true,
  });

  renderWallet();
  const preferredWallet = localStorage.getItem(preferredWalletKey);
  if (preferredWallet === "phantom") {
    connectWallet("phantom", { onlyIfTrusted: true });
  } else if (preferredWallet === "solflare") {
    const provider = walletDefinitions.solflare.provider();
    if (provider?.isConnected && provider.publicKey) {
      activeProvider = provider;
      activeWallet = "solflare";
      activeAddress = publicKeyText(provider.publicKey);
      attachProviderEvents(provider);
      renderWallet();
    }
  }
});
