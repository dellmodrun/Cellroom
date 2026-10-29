import{o as e}from"./rolldown-runtime-DLMaRju-.js";import{n as t,t as n}from"./jsx-runtime-B_Ca-Pay.js";import{$ as r,a as i,i as a}from"./privy-context-CGYR5ey7-CyGGjUdE.js";import{p as o}from"./errors-BQ3N-RVt-CZPAWCgC.js";import{S as s}from"./index-BbTBi4U5-DuMA0FW5.js";import{c,s as l}from"./Loader-UAZqxsnw-BdSPKbBX.js";import{n as u}from"./modal-context-BPfZIWOm-3zgkTt9H.js";import{a as d}from"./ModalFooter-wxyiVBus-D_PPZVKe.js";import{t as f}from"./Screen-DmdSrbMD-DHFUZprV.js";import{a as p,h as m,i as h,p as g,s as _}from"./shared-DB6PJ3Cb-CWA38er-.js";import{t as v}from"./ShieldCheckIcon-DFfvQvv3.js";import{a as y}from"./Layouts-BMRfo5hw-D6Y9P_e2.js";var b=n(),x=e(t(),1),S={component:()=>{let[e,t]=(0,x.useState)(!0),{authenticated:n,user:c}=a(),{walletProxy:l,closePrivyModal:d,createAnalyticsEvent:S,client:E}=r(),{navigate:D,data:O,onUserCloseViaDialogOrKeybindRef:k}=u(),[A,j]=(0,x.useState)(void 0),[M,N]=(0,x.useState)(``),[P,F]=(0,x.useState)(!1),{entropyId:I,entropyIdVerifier:L,onCompleteNavigateTo:R,onSuccess:z,onFailure:B}=O.recoverWallet,V=(e=`User exited before their wallet could be recovered`)=>{d({shouldCallAuthOnSuccess:!1}),B(typeof e==`string`?new o(e):e)};return k.current=V,(0,x.useEffect)((()=>{if(!n)return V(`User must be authenticated and have a Privy wallet before it can be recovered`)}),[n]),(0,b.jsxs)(f,{children:[(0,b.jsx)(f.Header,{icon:v,title:`Enter your password`,subtitle:`Please provision your account on this new device. To continue, enter your recovery password.`,showClose:!0,onClose:V}),(0,b.jsx)(f.Body,{children:(0,b.jsx)(C,{children:(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(h,{children:[(0,b.jsx)(p,{type:e?`password`:`text`,onChange:e=>(e=>{e&&j(e)})(e.target.value),disabled:P,style:{paddingRight:`2.3rem`}}),(0,b.jsx)(m,{style:{right:`0.75rem`},children:e?(0,b.jsx)(g,{onClick:()=>t(!1)}):(0,b.jsx)(_,{onClick:()=>t(!0)})})]}),!!M&&(0,b.jsx)(w,{children:M})]})})}),(0,b.jsxs)(f.Footer,{children:[(0,b.jsx)(f.HelpText,{children:(0,b.jsxs)(y,{children:[(0,b.jsx)(`h4`,{children:`Why is this necessary?`}),(0,b.jsx)(`p`,{children:`You previously set a password for this wallet. This helps ensure only you can access it`})]})}),(0,b.jsx)(f.Actions,{children:(0,b.jsx)(T,{loading:P||!l,disabled:!A,onClick:async()=>{F(!0);let e=await E.getAccessToken(),t=i(c,I);if(!e||!t||A===null)return V(`User must be authenticated and have a Privy wallet before it can be recovered`);try{S({eventName:`embedded_wallet_recovery_started`,payload:{walletAddress:t.address}}),await l?.recover({accessToken:e,entropyId:I,entropyIdVerifier:L,recoveryPassword:A}),N(``),R?D(R):d({shouldCallAuthOnSuccess:!1}),z?.(t),S({eventName:`embedded_wallet_recovery_completed`,payload:{walletAddress:t.address}})}catch(e){s(e)?N(`Invalid recovery password, please try again.`):N(`An error has occurred, please try again.`)}finally{F(!1)}},$hideAnimations:!I&&P,children:`Recover your account`})}),(0,b.jsx)(f.Watermark,{})]})]})}},C=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,w=c.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,T=c(d)`
  ${({$hideAnimations:e})=>e&&l`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{S as PasswordRecoveryScreen,S as default};