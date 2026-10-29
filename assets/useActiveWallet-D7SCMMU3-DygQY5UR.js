import{o as e}from"./rolldown-runtime-DLMaRju-.js";import{n as t,t as n}from"./jsx-runtime-B_Ca-Pay.js";import{$ as r,D as i,c as a}from"./privy-context-CGYR5ey7-CyGGjUdE.js";import{On as o}from"./call-BvXtgyK8.js";import{t as s}from"./react-DlFwa5rU.js";import{b as c,t as l}from"./storage-Ufl800Ne-BpSFgdB8.js";import{t as u}from"./logger-CsXm3oIv-B0UYpNFI.js";import{c as d,s as f}from"./Loader-UAZqxsnw-BdSPKbBX.js";import{n as p}from"./use-unlink-wallet-DR2U_RNq-D7hAUoct.js";var m=e(t(),1),h=n(),g=e=>{let[t,n]=(0,m.useState)(`auto`);return(0,m.useEffect)((()=>{let t=new ResizeObserver((e=>{n(e[0]?.contentRect.height??`auto`)}));return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[e.current]),t},_=d.div`
  text-align: left;
  flex-grow: 1;
`,v=d.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,y=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,b=d(y)`
  ${e=>e.$colorScheme===`light`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;`:e.$colorScheme===`dark`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;`:void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 3px;
`,x=f`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    min-height: 56px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--privy-color-foreground);

    padding: 10px 12px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-md);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }
  }
`,S=d.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,C=d.button.attrs({className:`login-method-button`})`
  ${x}
`;d.a`
  ${x}
`;var w=d.div`
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.$fullSize?`0`:`4px`};
  background: ${e=>e.$fullSize?`transparent`:`var(--privy-color-background-2)`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: ${e=>e.$fullSize?`32px`:`18px`};
    height: ${e=>e.$fullSize?`32px`:`18px`};
    color: ${e=>e.$fullSize?`inherit`:`var(--privy-color-icon-muted)`};
  }
`,T=d.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${e=>e.$if?`display: none;`:``}
`,E=d.div`
  width: 100%;
  height: 100%;
  padding: ${e=>e.$withPadding?`64px 0px`:`0px`};
`,D=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;async function O(e,t,n){if(!t.shouldEnforceDefaultChainOnConnect)return;let r=Number(e.chainId.replace(`eip155:`,``));if(!t.chains.find((e=>e.id===r))&&(e.connectorType!==`wallet_connect_v2`||e.walletClientType!==`metamask`)){n?.();try{await e.switchChain(t.defaultChain.id),e.chainId=c(o(t.defaultChain.id))}catch{u.warn(`Unable to switch to default chain after connect`,{chainId:t.defaultChain.id})}}}var k=(0,m.createContext)({}),A=({children:e})=>{let t=i(),[n,r]=(0,m.useState)({});return p(`login`,{onComplete:({loginAccount:e})=>{e&&e.type!==`passkey`&&e.type!==`cross_app`&&(e.type!==`wallet`||e.walletClientType!==`privy`)&&(l.put(j(t.id),e.type),e.type===`wallet`?(l.put(M(t.id),e.walletClientType),l.put(N(t.id),e.chainType),r({accountType:e.type,walletClientType:e.walletClientType,chainType:e.chainType})):(l.del(M(t.id)),l.del(N(t.id)),r({accountType:e.type})))}}),(0,m.useEffect)((()=>{if(!t.id)return;let e=l.get(j(t.id)),n=l.get(M(t.id)),i=l.get(N(t.id));e&&r(e===`wallet`?{accountType:e,walletClientType:n,chainType:i}:{accountType:e})}),[t.id]),(0,h.jsx)(k.Provider,{value:n,children:e})},j=e=>`privy:${e}:recent-login-method`,M=e=>`privy:${e}:recent-login-wallet-client`,N=e=>`privy:${e}:recent-login-chain-type`,P=()=>(0,m.useContext)(k),F=e=>{p(`fundWallet`,e);let{fundWallet:t}=r();return{fundWallet:({address:e,options:n})=>t(e,n)}};function I(e){let{logout:t}=(0,m.useContext)(a);return p(`logout`,e),{logout:t}}var L=s((()=>({isModalOpen:!1,resolvers:null})));s((()=>({})));var R=({address:e,client:t,appId:n})=>{let r=`${t}:${e}`;n&&l.put(z(n),r),L.setState({wallet:r})},z=e=>`privy:${e}:active-wallet-connection`;export{S as _,F as a,D as c,A as d,v as f,g,R as h,E as i,T as l,w as m,b as n,I as o,y as p,P as r,C as s,_ as t,O as u};