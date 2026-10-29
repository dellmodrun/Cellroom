import{o as e}from"./rolldown-runtime-DLMaRju-.js";import{n as t,t as n}from"./jsx-runtime-B_Ca-Pay.js";import{p as r}from"./storage-Ufl800Ne-BpSFgdB8.js";import{c as i}from"./Loader-UAZqxsnw-BdSPKbBX.js";import{a,c as o,d as s,f as c,g as l,h as u,i as d,o as f,p,r as m,s as h,t as g,u as ee,y as te}from"./floating-ui.react-BPMXv_UE.js";import{t as _}from"./createLucideIcon-CDXOoBGn.js";import{t as v}from"./check-DfChRzfz.js";import{t as y}from"./chevron-down-BLPBtsxd.js";import{t as b}from"./hourglass-BS42EE2r.js";import{t as x}from"./triangle-alert-sd56SllT.js";import{a as S}from"./ModalFooter-wxyiVBus-D_PPZVKe.js";import{t as C}from"./ScreenLayout--i2oHiBU-DpeOEEAE.js";import{_ as w,a as T,b as E,g as D,h as O,n as k,s as A,t as ne,v as j,y as M}from"./styles-_GOCr4l3-AA73NvTg.js";import{n as N}from"./CopyableText-CQapvaMr-B5KhJkTt.js";import{t as P}from"./QrCode-La2F-fNp-BW5Z0fIL.js";var F=_(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),I=_(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),L=_(`qr-code`,[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]),R=e(t(),1),z=n(),B=class extends R.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){this.props.onError(e)}componentDidUpdate(e){e.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}};function V(e,t,n){let r=Number(e);return!Number.isFinite(r)||r===0?`1 ${t} ≈ ${e} ${n}`:r>=.01?`1 ${t} ≈ ${H(r)} ${n}`:`${H(1/r)} ${t} ≈ 1 ${n}`}function H(e){return e>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(e):new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(e)}function U(e,t){let n=Number(e);if(!Number.isFinite(n)||n===0)return e;let r=t==null?n:n/10**t;return r>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(r):r>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(r):r>=1e-4?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:6}).format(r):new Intl.NumberFormat(`en-US`,{maximumSignificantDigits:4}).format(r)}function W({address:e,caip2:t,config:n}){for(let r of n.currencies){let n=r.chains.find((n=>n.caip2===t&&n.address.toLowerCase()===e.toLowerCase()));if(n)return{symbol:r.symbol.toUpperCase(),decimals:n.decimals}}return{symbol:e,decimals:void 0}}function G(e,t){let n=t[e];return n?.displayName??n?.display_name??e}function K(e,t){return e.chains.filter((e=>!0===e.can_be_relay_deposit_source)).map((e=>{let n=t.chains[e.caip2];return n?{caip2:e.caip2,displayName:n.displayName,iconUrl:n.iconUrl,vmType:n.vmType,currencyAddress:e.address,currencyDecimals:e.decimals}:null})).filter((e=>e!==null))}function q(e,t){if(!e.chains[t.destinationChain])return`Unsupported destination chain: "${t.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let n=t.destinationCurrency.toLowerCase();return e.currencies.some((e=>e.chains.some((e=>e.caip2===t.destinationChain&&e.address.toLowerCase()===n))))?null:`Unsupported destination currency "${t.destinationCurrency}" on chain "${t.destinationChain}". Check that this token address is supported on the specified chain.`}var J=new Set([`ROUTE_UNAVAILABLE`,`UNEXPECTED_STATE`,`TIMEOUT_WAITING_FOR_NEXT_ORDER`,`TIMEOUT_ORDER_COMPLETION`,`DEPOSIT_FAILED`,`DEPOSIT_REFUNDED`,`USER_EXITED`,`AMOUNT_TOO_LOW`,`INSUFFICIENT_LIQUIDITY`,`UNSUPPORTED_CHAIN`,`UNSUPPORTED_CURRENCY`,`UNSUPPORTED_ROUTE`,`NO_SWAP_ROUTES_FOUND`,`NO_INTERNAL_SWAP_ROUTES_FOUND`,`NO_QUOTES`,`SANCTIONED_WALLET_ADDRESS`,`REFUND_WALLET_CREATION_FAILED`,`DEPOSIT_ADDRESSES_NOT_ENABLED`,`NOT_AUTHENTICATED`]);function Y(e){return J.has(e)}function X(e){return Y(e)?e:`UNKNOWN_ERROR`}var Z=({trackingUrl:e,onViewBlockExplorer:t,onClose:n})=>{let r=e&&t?()=>{t(),window.open(e,`_blank`,`noopener,noreferrer`)}:void 0;return(0,z.jsx)(C,{icon:b,iconVariant:`subtle`,title:`Transfer in progress`,subtitle:`Your deposit was received and the transfer is now processing.`,showClose:!0,onClose:n,secondaryCta:r?{label:`View on block explorer ↗`,onClick:r}:void 0,watermark:!1,children:(0,z.jsxs)(w,{children:[(0,z.jsxs)(T,{children:[(0,z.jsx)(D,{$status:`done`,children:(0,z.jsx)(v,{size:14,color:`var(--privy-color-icon-success)`,strokeWidth:2})}),(0,z.jsx)(k,{children:`Deposit received`})]}),(0,z.jsx)(A,{}),(0,z.jsxs)(T,{children:[(0,z.jsx)(D,{$status:`active`,children:(0,z.jsx)(re,{})}),(0,z.jsx)(k,{children:`Bridging`})]}),(0,z.jsx)(A,{}),(0,z.jsxs)(T,{children:[(0,z.jsx)(D,{$status:`pending`}),(0,z.jsx)(k,{children:`Funds arrived`})]})]})})},re=i.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function ie({address:e,onClick:t}){let[n,r]=(0,R.useState)(!1);return(0,z.jsx)(z.Fragment,{children:n?(0,z.jsx)(ae,{onClick:()=>r(!1),style:{marginTop:`1.5rem`},children:(0,z.jsx)(P,{url:e,size:312,hideLogo:!0})}):(0,z.jsxs)(oe,{title:`Click to copy address`,onClick:t,style:{marginTop:`1.5rem`},children:[(0,z.jsxs)(se,{children:[(0,z.jsx)(ce,{children:`Deposit address`}),(0,z.jsx)(le,{children:e})]}),(0,z.jsx)(ue,{children:(0,z.jsx)(de,{type:`button`,onClick:e=>{e.stopPropagation(),r(!0)},children:(0,z.jsx)(L,{size:16,color:`var(--privy-color-icon-muted)`})})})]})})}var ae=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,oe=i.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,se=i.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,ce=i.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,le=i.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,ue=i.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,de=i.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,Q=e=>/^0x/i.test(e)||e.length>16;function fe({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:i,destinationChainName:a,destinationAsset:o}){let[s,c]=(0,R.useState)(!1),l=t.symbol.toUpperCase(),u=n.displayName,d=(0,R.useRef)(null);return(0,z.jsxs)(pe,{children:[(0,z.jsxs)(me,{onClick:(0,R.useCallback)((()=>{let e=document.getElementById(`privy-modal-content`);e&&(d.current&&clearTimeout(d.current),e.style.transition=`none`,d.current=setTimeout((()=>{e.style.transition=``,d.current=null}),160)),c((e=>!e))}),[]),children:[(0,z.jsxs)(he,{children:[t.logoURI&&(0,z.jsx)(ne,{src:t.logoURI,alt:l,style:{width:`2rem`,height:`2rem`}}),n.iconUrl&&(0,z.jsx)(ge,{src:n.iconUrl,alt:u})]}),(0,z.jsxs)(_e,{children:[(0,z.jsx)(ve,{children:`You send`}),(0,z.jsxs)(ye,{children:[l,` on `,u]})]}),(0,z.jsx)(be,{children:(0,z.jsx)(s?F:y,{size:16})})]}),(0,z.jsx)(Ce,{$expanded:s,children:(0,z.jsx)(we,{children:(0,z.jsxs)($,{children:[e.indicative_rate&&(0,z.jsxs)(E,{children:[(0,z.jsx)(M,{children:`Conversion rate`}),(0,z.jsxs)(j,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[V(e.indicative_rate,l,i.toUpperCase()),(0,z.jsx)(Te,{content:`Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing.`})]})]}),(0,z.jsxs)(E,{children:[(0,z.jsx)(M,{children:`Receive`}),(0,z.jsxs)(j,{children:[i&&!Q(i)?i.toUpperCase():Q(o)?r(o):o.toUpperCase(),a?` on ${a}`:``]})]}),e.slippage_bps!=null&&(0,z.jsxs)(E,{children:[(0,z.jsx)(M,{children:`Max slippage`}),(0,z.jsxs)(j,{children:[(e.slippage_bps/100).toFixed(1),`%`]})]}),e.refund_address&&(0,z.jsxs)(E,{children:[(0,z.jsx)(M,{children:`Refund address`}),(0,z.jsx)(j,{children:(0,z.jsx)(N,{value:e.refund_address,iconOnly:!0,iconSize:11,children:r(e.refund_address,4,4)})})]})]})})}),(0,z.jsxs)(xe,{children:[(0,z.jsx)(x,{size:16,color:`var(--privy-color-icon-muted)`,style:{flexShrink:0}}),(0,z.jsxs)(Se,{children:[`Only send `,(0,z.jsx)(`strong`,{children:l}),` on `,(0,z.jsx)(`strong`,{children:u}),`. Other assets may be lost.`]})]})]})}var pe=i.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,me=i.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,he=i.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,ge=i(O)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid var(--privy-color-background);
    background-color: var(--privy-color-background);
  }
`,_e=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ve=i.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,ye=i.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,be=i.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked);
  color: var(--privy-color-foreground-3);
`,$=i.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,xe=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: var(--privy-color-background-2);
`,Se=i.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,Ce=i.div`
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 150ms ease-out;
`,we=i.div`
  overflow: hidden;
`;function Te({content:e}){let[t,n]=(0,R.useState)(!1),{refs:r,floatingStyles:i,context:_}=f({open:t,onOpenChange:n,placement:`top`,whileElementsMounted:te,middleware:[u(6),p(),l({padding:8})]}),v=o(_,{move:!1,handleClose:m()}),y=h(_),{getReferenceProps:b,getFloatingProps:x}=ee([v,y,d(_),a(_),s(_,{role:`tooltip`})]),{isMounted:S,styles:C}=c(_,{duration:150});return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`button`,{ref:r.setReference,type:`button`,"aria-label":`More information about conversion rate`,style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,padding:0,border:`none`,background:`none`,color:`var(--privy-color-icon-muted)`,cursor:`pointer`},...b(),children:(0,z.jsx)(I,{size:14})}),S&&(0,z.jsx)(g,{root:document.getElementById(`privy-modal-content`)??void 0,children:(0,z.jsx)(Ee,{ref:r.setFloating,style:{...i,...C},...x(),children:e})})]})}var Ee=i.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`,De=({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r,destinationChainName:i,destinationAsset:a,onBack:o,onClose:s})=>{let[c,l]=(0,R.useState)(!1),u=t?.symbol?.toUpperCase()??`funds`,d=n?.displayName??``,f=async()=>{c||(await navigator.clipboard.writeText(e.deposit_address),l(!0),setTimeout((()=>l(!1)),2e3))};return(0,z.jsxs)(C,{title:`Send ${u}${d?` on ${d}`:``}`,subtitle:`Send funds to the address below. Conversion and routing handled by Relay.`,showBack:!0,onBack:o,showClose:!0,onClose:s,watermark:!1,children:[(0,z.jsx)(fe,{quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r,destinationChainName:i,destinationAsset:a}),(0,z.jsx)(ie,{address:e.deposit_address,onClick:f}),(0,z.jsx)(S,{style:{marginTop:`1rem`,marginBottom:`0.5rem`,...c?{backgroundColor:`var(--privy-color-icon-success)`,borderColor:`var(--privy-color-icon-success)`}:{}},onClick:f,children:c?(0,z.jsxs)(z.Fragment,{children:[`Copied `,(0,z.jsx)(v,{size:16,style:{marginLeft:`0.25rem`}})]}):`Copy address`}),(0,z.jsx)(Oe,{children:`Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes.`})]})},Oe=i.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;export{De as a,X as c,B as i,Z as l,W as n,U as o,G as r,K as s,q as t,L as u};