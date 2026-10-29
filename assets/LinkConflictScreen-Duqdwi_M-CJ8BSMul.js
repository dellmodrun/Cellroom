import{o as e}from"./rolldown-runtime-DLMaRju-.js";import{n as t,t as n}from"./jsx-runtime-B_Ca-Pay.js";import{$ as r,D as i}from"./privy-context-CGYR5ey7-CyGGjUdE.js";import{c as a}from"./Loader-UAZqxsnw-BdSPKbBX.js";import{n as o}from"./modal-context-BPfZIWOm-3zgkTt9H.js";import{a as s,i as c,o as l,t as u}from"./ModalFooter-wxyiVBus-D_PPZVKe.js";import{t as d}from"./ExclamationCircleIcon-CFsG8vx8.js";import{t as f}from"./ExclamationTriangleIcon-afNXCxv1.js";import{t as p}from"./WalletIcon-Dk5EYaKs.js";import{t as m}from"./Address-BWcW3kMM-D42GRkju.js";import{t as h}from"./StackedContainer-B2vaEl56-itZHRjkR.js";import{t as g}from"./capitalizeFirstLetter-DmLYqXsO-DtOXx-2n.js";var _=n(),v=e(t());function y({title:e,titleId:t,...n},r){return v.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?v.createElement(`title`,{id:t},e):null,v.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6`}))}var b=v.forwardRef(y),x=a.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??`var(--privy-color-accent)`};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }
`;function S(e){return(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,...e,children:[(0,_.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,_.jsx)(`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`}),(0,_.jsx)(`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`})]})}var C=({onTransfer:e,isTransferring:t,transferSuccess:n})=>(0,_.jsx)(s,{...n?{success:!0,children:`Success!`}:{warn:!0,loading:t,onClick:e,children:`Transfer and delete account`}}),w=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`,T=a.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`,E=a.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`,D=a(d)`
  position: relative;
  width: ${({$iconSize:e})=>`${e}px`};
  height: ${({$iconSize:e})=>`${e}px`};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,O=a(b)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,k=a.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`,A=a.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`,j=a.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,M=()=>(0,_.jsx)(j,{children:(0,_.jsx)(D,{$iconSize:60})}),N=({address:e,onClose:t,onRetry:n,onTransfer:r,isTransferring:a,transferSuccess:o})=>{let{defaultChain:s}=i(),l=s.blockExplorers?.default.url??`https://etherscan.io`;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c,{onClose:t,backFn:n}),(0,_.jsxs)(w,{children:[(0,_.jsx)(M,{}),(0,_.jsxs)(T,{children:[(0,_.jsx)(`h3`,{children:`Check account assets before transferring`}),(0,_.jsx)(`p`,{children:`Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost.`}),(0,_.jsxs)(k,{children:[(0,_.jsx)(`p`,{children:` To check your balance, you can:`}),(0,_.jsx)(A,{children:`Log out and log back into the other account, or `}),(0,_.jsxs)(A,{children:[`Copy your wallet address and use a`,` `,(0,_.jsx)(`u`,{children:(0,_.jsx)(`a`,{target:`_blank`,href:l,children:`block explorer`})}),` `,`to see if the account holds any assets.`]})]}),(0,_.jsxs)(E,{onClick:()=>navigator.clipboard.writeText(e).catch(console.error),children:[(0,_.jsx)(p,{color:`var(--privy-color-foreground)`,strokeWidth:2,height:`28px`,width:`28px`}),(0,_.jsx)(m,{address:e,showCopyIcon:!1}),(0,_.jsx)(O,{})]}),(0,_.jsx)(C,{onTransfer:r,isTransferring:a,transferSuccess:o})]})]}),(0,_.jsx)(u,{})]})},P={component:()=>{let{initiateAccountTransfer:e,closePrivyModal:t}=r(),{data:n,navigate:i,lastScreen:a,setModalData:s}=o(),[c,l]=(0,v.useState)(void 0),[u,d]=(0,v.useState)(!1),[f,p]=(0,v.useState)(!1),m=async()=>{try{if(!n?.accountTransfer?.nonce||!n?.accountTransfer?.account)throw Error(`missing account transfer inputs`);p(!0),await e({nonce:n?.accountTransfer?.nonce,account:n?.accountTransfer?.account,accountType:n?.accountTransfer?.linkMethod,externalWalletMetadata:n?.accountTransfer?.externalWalletMetadata,telegramWebAppData:n?.accountTransfer?.telegramWebAppData,telegramAuthResult:n?.accountTransfer?.telegramAuthResult,farcasterEmbeddedAddress:n?.accountTransfer?.farcasterEmbeddedAddress,oAuthUserInfo:n?.accountTransfer?.oAuthUserInfo}),d(!0),p(!1),setTimeout(t,1e3)}catch(e){s({errorModalData:{error:e,previousScreen:a||`LinkConflictScreen`}}),i(`ErrorScreen`,!0)}};return c?(0,_.jsx)(N,{address:c,onClose:t,onRetry:()=>l(void 0),onTransfer:m,isTransferring:f,transferSuccess:u}):(0,_.jsx)(F,{onClose:t,onInfo:()=>l(n?.accountTransfer?.embeddedWalletAddress),onContinue:()=>l(n?.accountTransfer?.embeddedWalletAddress),onTransfer:m,isTransferring:f,transferSuccess:u,data:n})}},F=({onClose:e,onContinue:t,onInfo:n,onTransfer:r,transferSuccess:i,isTransferring:a,data:o})=>{if(!o?.accountTransfer?.linkMethod||!o?.accountTransfer?.displayName)return;let d={method:o?.accountTransfer?.linkMethod,handle:o?.accountTransfer?.displayName,disclosedAccount:o?.accountTransfer?.embeddedWalletAddress?{type:`wallet`,handle:o?.accountTransfer?.embeddedWalletAddress}:void 0};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c,{closeable:!0}),(0,_.jsxs)(w,{children:[(0,_.jsx)(h,{children:(0,_.jsxs)(`div`,{children:[(0,_.jsx)(x,{color:`var(--privy-color-error)`}),(0,_.jsx)(f,{height:38,width:38,stroke:`var(--privy-color-error)`})]})}),(0,_.jsxs)(T,{children:[(0,_.jsxs)(`h3`,{children:[function(e){switch(e){case`sms`:return`Phone number`;case`email`:return`Email address`;case`siwe`:return`Wallet address`;case`siws`:return`Solana wallet address`;case`linkedin`:return`LinkedIn profile`;case`google`:case`apple`:case`discord`:case`github`:case`instagram`:case`spotify`:case`tiktok`:case`line`:case`twitch`:case`twitter`:case`telegram`:case`farcaster`:return`${g(e.replace(`_oauth`,``))} profile`;default:return e.startsWith(`privy:`)?`Cross-app account`:e}}(d.method),` is associated with another account`]}),(0,_.jsxs)(`p`,{children:[`Do you want to transfer`,(0,_.jsx)(`b`,{children:d.handle?` ${d.handle}`:``}),` to this account instead? This will delete your other account.`]}),(0,_.jsx)(I,{onClick:n,disclosedAccount:d.disclosedAccount})]}),(0,_.jsxs)(T,{style:{gap:12,marginTop:12},children:[o?.accountTransfer?.embeddedWalletAddress?(0,_.jsx)(s,{onClick:t,children:`Continue`}):(0,_.jsx)(C,{onTransfer:r,transferSuccess:i,isTransferring:a}),(0,_.jsx)(l,{onClick:e,children:`No thanks`})]})]}),(0,_.jsx)(u,{})]})};function I({disclosedAccount:e,onClick:t}){return e?(0,_.jsxs)(E,{onClick:t,children:[(0,_.jsx)(p,{color:`var(--privy-color-foreground)`,strokeWidth:2,height:`28px`,width:`28px`}),(0,_.jsx)(m,{address:e.handle,showCopyIcon:!1}),(0,_.jsx)(S,{width:15,height:15,color:`var(--privy-color-foreground-3)`,style:{marginLeft:`auto`}})]}):null}export{P as LinkConflictScreen,P as default,F as LinkConflictScreenView};