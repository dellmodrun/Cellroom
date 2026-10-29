document.addEventListener("DOMContentLoaded", () => {
  const brandHome = document.getElementById("brandHome");
  const exitApp = document.getElementById("exitApp");
  const homepage = document.getElementById("top");

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
});
