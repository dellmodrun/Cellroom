import{o as e}from"./rolldown-runtime-DLMaRju-.js";import{n as t,t as n}from"./jsx-runtime-B_Ca-Pay.js";import{$ as r,D as i,i as a,r as o}from"./privy-context-CGYR5ey7-CyGGjUdE.js";import{t as s}from"./lib-_kl1qebo.js";import{s as c,t as l}from"./errors-BQ3N-RVt-CZPAWCgC.js";import{c as u,t as d}from"./Loader-UAZqxsnw-BdSPKbBX.js";import{n as f}from"./modal-context-BPfZIWOm-3zgkTt9H.js";import{t as p}from"./check-DfChRzfz.js";import{t as m}from"./copy-eu1Z4e1H.js";import{o as h}from"./ModalFooter-wxyiVBus-D_PPZVKe.js";import{t as g}from"./ScreenLayout--i2oHiBU-DpeOEEAE.js";import{t as _}from"./shouldProceedtoEmbeddedWalletCreationFlow-CJUugdYd-CP0ca9kG.js";import{t as v}from"./QrCode-La2F-fNp-BW5Z0fIL.js";import{t as y}from"./farcaster-DPlSjvF5-WcHYyKA7.js";import{t as b}from"./LabelXs-oqZNqbm_-CikjSqiD.js";import{t as x}from"./OpenLink-CUpJ1mOr-DJr8b3Yl.js";var S=n(),C=e(t(),1),w=e(s(),1),T=u.div`
  width: 100%;
`,E=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${e=>e.$disabled?`var(--privy-color-background-2)`:`var(--privy-color-background)`};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${e=>e.$disabled?`var(--privy-color-foreground-4)`:`var(--privy-color-foreground-3)`};
  }
`,D=u.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,O=u.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.$disabled?`var(--privy-color-foreground-2)`:`var(--privy-color-foreground)`};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,k=u(O)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,A=u(b)`
  margin-bottom: 0.5rem;
`,j=u(h)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`,M=({value:e,title:t,placeholder:n,className:r,showCopyButton:i=!0,truncate:a,maxLength:o=40,disabled:s=!1})=>{let[c,l]=(0,C.useState)(!1),u=a&&e?((e,t,n)=>{if((e=e.startsWith(`https://`)?e.slice(8):e).length<=n)return e;if(t===`middle`){let t=Math.ceil(n/2)-2,r=Math.floor(n/2)-1;return`${e.slice(0,t)}...${e.slice(-r)}`}return`${e.slice(0,n-3)}...`})(e,a,o):e;return(0,C.useEffect)((()=>{if(c){let e=setTimeout((()=>l(!1)),3e3);return()=>clearTimeout(e)}}),[c]),(0,S.jsxs)(T,{className:r,children:[t&&(0,S.jsx)(A,{children:t}),(0,S.jsxs)(E,{$disabled:s,children:[(0,S.jsx)(D,{children:e?(0,S.jsx)(O,{$disabled:s,title:e,children:u}):(0,S.jsx)(k,{$disabled:s,children:n||`No value`})}),i&&e&&(0,S.jsx)(j,{onClick:function(t){t.stopPropagation(),navigator.clipboard.writeText(e).then((()=>l(!0))).catch(console.error)},size:`sm`,children:(0,S.jsxs)(S.Fragment,c?{children:[`Copied`,(0,S.jsx)(p,{size:14})]}:{children:[`Copy`,(0,S.jsx)(m,{size:14})]})})]})]})},N=({connectUri:e,loading:t,success:n,errorMessage:r,onBack:i,onClose:a,onOpenFarcaster:o})=>(0,S.jsx)(g,w.isMobile||t?w.isIOS?{title:r?r.message:`Sign in with Farcaster`,subtitle:r?r.detail:`To sign in with Farcaster, please open the Farcaster app.`,icon:y,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},primaryCta:e&&o?{label:`Open Farcaster app`,onClick:o}:void 0,onBack:i,onClose:a,watermark:!0}:{title:r?r.message:`Signing in with Farcaster`,subtitle:r?r.detail:`This should only take a moment`,icon:y,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},onBack:i,onClose:a,watermark:!0,children:e&&w.isMobile&&(0,S.jsx)(F,{children:(0,S.jsx)(x,{text:`Take me to Farcaster`,url:e,color:`#8a63d2`})})}:{title:`Sign in with Farcaster`,subtitle:`Scan with your phone's camera to continue.`,onBack:i,onClose:a,watermark:!0,children:(0,S.jsxs)(I,{children:[(0,S.jsx)(L,{children:e?(0,S.jsx)(v,{url:e,size:275,squareLogoElement:y}):(0,S.jsx)(B,{children:(0,S.jsx)(d,{})})}),(0,S.jsxs)(R,{children:[(0,S.jsx)(z,{children:`Or copy this link and paste it into a phone browser to open the Farcaster app.`}),e&&(0,S.jsx)(M,{value:e,truncate:`end`,maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),P={component:()=>{let{authenticated:e,logout:t,ready:n,user:s}=a(),{lastScreen:u,navigate:d,navigateBack:p,setModalData:m}=f(),h=i(),{getAuthFlow:g,loginWithFarcaster:v,closePrivyModal:y,createAnalyticsEvent:b}=r(),[x,w]=(0,C.useState)(void 0),[T,E]=(0,C.useState)(!1),[D,O]=(0,C.useState)(!1),k=(0,C.useRef)([]),A=g(),j=A?.meta.connectUri;return(0,C.useEffect)((()=>{let e=Date.now(),t=setInterval((async()=>{let n=await A.pollForReady.execute(),r=Date.now()-e;if(n){clearInterval(t),E(!0);try{await v(),O(!0)}catch(e){let t={retryable:!1,message:`Authentication failed`};if(e?.privyErrorCode===c.ALLOWLIST_REJECTED)return void d(`AllowlistRejectionScreen`);if(e?.privyErrorCode===c.USER_LIMIT_REACHED)return console.error(new l(e).toString()),void d(`UserLimitReachedScreen`);if(e?.privyErrorCode===c.USER_DOES_NOT_EXIST)return void d(`AccountNotFoundScreen`);if(e?.privyErrorCode===c.LINKED_TO_ANOTHER_USER)t.detail=e.message??`This account has already been linked to another user.`;else{if(e?.privyErrorCode===c.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return m({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:`farcaster`,embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:e.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void d(`LinkConflictScreen`);e?.privyErrorCode===c.INVALID_CREDENTIALS?(t.retryable=!0,t.detail=`Something went wrong. Try again.`):e?.privyErrorCode===c.TOO_MANY_REQUESTS&&(t.detail=`Too many requests. Please wait before trying again.`)}w(t)}}else r>12e4&&(clearInterval(t),w({retryable:!0,message:`Authentication failed`,detail:`The request timed out. Try again.`}))}),2e3);return()=>{clearInterval(t),k.current.forEach((e=>clearTimeout(e)))}}),[]),(0,C.useEffect)((()=>{if(n&&e&&D&&s){if(h?.legal.requireUsersAcceptTerms&&!s.hasAcceptedTerms){let e=setTimeout((()=>{d(`AffirmativeConsentScreen`)}),o);return()=>clearTimeout(e)}D&&(_(s,h.embeddedWallets)?k.current.push(setTimeout((()=>{m({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),b({eventName:`embedded_wallet_creation_failure_logout`,payload:{error:e,screen:`FarcasterConnectStatusScreen`}}),t()},callAuthOnSuccessOnClose:!0}}),d(`EmbeddedWalletOnAccountCreateScreen`)}),1400)):k.current.push(setTimeout((()=>y({shouldCallAuthOnSuccess:!0,isSuccess:!0})),1400)))}}),[D,n,e,s]),(0,S.jsx)(N,{connectUri:j,loading:T,success:D,errorMessage:x,onBack:u?p:void 0,onClose:y,onOpenFarcaster:()=>{j&&(window.location.href=j)}})}},F=u.div`
  margin-top: 24px;
`,I=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,R=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,z=u.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,B=u.div`
  position: relative;
  width: 82px;
  height: 82px;
`;export{P as FarcasterConnectStatusScreen,P as default,N as FarcasterConnectStatusView};