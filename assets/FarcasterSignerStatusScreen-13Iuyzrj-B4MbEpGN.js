import{o as e}from"./rolldown-runtime-DLMaRju-.js";import{n as t,t as n}from"./jsx-runtime-B_Ca-Pay.js";import{$ as r,D as i,r as a}from"./privy-context-CGYR5ey7-CyGGjUdE.js";import{t as o}from"./lib-_kl1qebo.js";import{c as s,t as c}from"./Loader-UAZqxsnw-BdSPKbBX.js";import{n as l}from"./modal-context-BPfZIWOm-3zgkTt9H.js";import{t as u}from"./ScreenLayout--i2oHiBU-DpeOEEAE.js";import{t as d}from"./QrCode-La2F-fNp-BW5Z0fIL.js";import{t as f}from"./farcaster-DPlSjvF5-WcHYyKA7.js";import{t as p}from"./OpenLink-CUpJ1mOr-DJr8b3Yl.js";import{t as m}from"./CopyToClipboard-i_OQSBJr-D-Xxj-C_.js";var h=n(),g=e(t(),1),_=e(o(),1),v=`#8a63d2`,y=({appName:e,loading:t,success:n,errorMessage:r,connectUri:i,onBack:a,onClose:o,onOpenFarcaster:s})=>(0,h.jsx)(u,_.isMobile||t?_.isIOS?{title:r?r.message:`Add a signer to Farcaster`,subtitle:r?r.detail:`This will allow ${e} to add casts, likes, follows, and more on your behalf.`,icon:f,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},primaryCta:i&&s?{label:`Open Farcaster app`,onClick:s}:void 0,onBack:a,onClose:o,watermark:!0}:{title:r?r.message:`Requesting signer from Farcaster`,subtitle:r?r.detail:`This should only take a moment`,icon:f,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},onBack:a,onClose:o,watermark:!0,children:i&&_.isMobile&&(0,h.jsx)(b,{children:(0,h.jsx)(p,{text:`Take me to Farcaster`,url:i,color:v})})}:{title:`Add a signer to Farcaster`,subtitle:`This will allow ${e} to add casts, likes, follows, and more on your behalf.`,onBack:a,onClose:o,watermark:!0,children:(0,h.jsxs)(x,{children:[(0,h.jsx)(S,{children:i?(0,h.jsx)(d,{url:i,size:275,squareLogoElement:f}):(0,h.jsx)(T,{children:(0,h.jsx)(c,{})})}),(0,h.jsxs)(C,{children:[(0,h.jsx)(w,{children:`Or copy this link and paste it into a phone browser to open the Farcaster app.`}),i&&(0,h.jsx)(m,{text:i,itemName:`link`,color:v})]})]})}),b=s.div`
  margin-top: 24px;
`,x=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,S=s.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,C=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,w=s.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,T=s.div`
  position: relative;
  width: 82px;
  height: 82px;
`,E={component:()=>{let{lastScreen:e,navigateBack:t,data:n}=l(),o=i(),{requestFarcasterSignerStatus:s,closePrivyModal:c}=r(),[u,d]=(0,g.useState)(void 0),[f,p]=(0,g.useState)(!1),[m,_]=(0,g.useState)(!1),v=(0,g.useRef)([]),b=n?.farcasterSigner;(0,g.useEffect)((()=>{let e=Date.now(),t=setInterval((async()=>{if(!b?.public_key)return clearInterval(t),void d({retryable:!0,message:`Connect failed`,detail:`Something went wrong. Please try again.`});b.status===`approved`&&(clearInterval(t),p(!1),_(!0),v.current.push(setTimeout((()=>c({shouldCallAuthOnSuccess:!1,isSuccess:!0})),1400)));let n=await s(b?.public_key),r=Date.now()-e;n.status===`approved`?(clearInterval(t),p(!1),_(!0),v.current.push(setTimeout((()=>c({shouldCallAuthOnSuccess:!1,isSuccess:!0})),a))):r>3e5?(clearInterval(t),d({retryable:!0,message:`Connect failed`,detail:`The request timed out. Try again.`})):n.status===`revoked`&&(clearInterval(t),d({retryable:!0,message:`Request rejected`,detail:`The request was rejected. Please try again.`}))}),2e3);return()=>{clearInterval(t),v.current.forEach((e=>clearTimeout(e)))}}),[]);let x=b?.status===`pending_approval`?b.signer_approval_url:void 0;return(0,h.jsx)(y,{appName:o.name,loading:f,success:m,errorMessage:u,connectUri:x,onBack:e?t:void 0,onClose:c,onOpenFarcaster:()=>{x&&(window.location.href=x)}})}};export{E as FarcasterSignerStatusScreen,E as default,y as FarcasterSignerStatusView};