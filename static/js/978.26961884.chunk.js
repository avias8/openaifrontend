"use strict";(self.webpackChunkopenaifrontend=self.webpackChunkopenaifrontend||[]).push([[978],{978:(e,r,n)=>{n.r(r),n.d(r,{default:()=>w});var o=n(43),t=n(464),i=n(204),a=n(494),s=n(215),d=n(926),l=n(995),c=n(640),p=n(579);d.A.registerLanguage("javascript",l.A);const x=t.i7`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,g=t.i7`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`,m=t.Ay.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  max-width: ${e=>{let{sender:r}=e;return"user"===r?"100%":"80%"}};
  flex-direction: ${e=>{let{sender:r}=e;return"user"===r?"row-reverse":"row"}};
  align-self: ${e=>{let{sender:r}=e;return"user"===r?"flex-end":"flex-start"}};
  
  @media (max-width: 600px) {
    max-width: ${e=>{let{sender:r}=e;return"user"===r?"95%":"90%"}};
  }
`,u=t.Ay.div`
  margin-right: ${e=>{let{sender:r}=e;return"user"===r?"0":"8px"}};
  margin-left: ${e=>{let{sender:r}=e;return"user"===r?"8px":"0"}};
  display: flex;
  align-items: center;
`,h=t.Ay.div`
  padding: 12px 20px;
  border-radius: 20px;
  background: ${e=>{let{sender:r,theme:n}=e;return"user"===r?n.messageUser:"openai"===r?n.messageOpenAI:n.messageError}};
  color: ${e=>{let{theme:r}=e;return r.textColor}}; /* Dynamic text color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${x} 0.3s ease-out;
  transition: background 0.3s, color 0.3s;
  word-wrap: break-word;
  flex: 1;

  /* Optional: Style Markdown elements */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    padding-left: 20px;
    margin: 5px 0;
  }

  strong {
    font-weight: bold;
  }

  code {
    background-color: rgba(27,31,35,0.05);
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 3px;
    font-family: 'Source Code Pro', monospace; /* Use a monospace font for code */
    color: inherit; /* Inherit color to prevent overriding text color */
  }

  pre {
    background-color: ${e=>{let{theme:r}=e;return r.inputBackground}};
    padding: 10px;
    border-radius: 5px;
    overflow: auto;
    font-family: 'Source Code Pro', monospace; /* Monospace font for code blocks */
    color: inherit; /* Inherit color to prevent overriding text color */
  }
`,f=t.Ay.span`
  display: block;
  font-size: 0.75rem;
  color: #ccc;
  margin-top: 5px;
  text-align: ${e=>{let{sender:r}=e;return"user"===r?"right":"left"}};
`,y=t.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 5px;

  div {
    width: 6px;
    height: 6px;
    background-color: ${e=>{let{theme:r}=e;return r.textColor}};
    border-radius: 50%;
    animation: ${g} 1s infinite;
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }

  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`,b=e=>{let{message:r}=e;const{sender:n,text:o,timestamp:t}=r;return(0,p.jsxs)(m,{sender:n,children:[(0,p.jsxs)(u,{sender:n,children:["openai"===n&&(0,p.jsx)(i.y8Q,{size:24,color:"error"===n?"#dc3545":void 0}),"user"===n&&(0,p.jsx)(i.NBi,{size:24}),"error"===n&&(0,p.jsx)(i.y8Q,{size:24,color:"#dc3545"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{sender:n,children:"openai"===n&&"Typing..."===o?(0,p.jsxs)(y,{children:[(0,p.jsx)("div",{}),(0,p.jsx)("div",{}),(0,p.jsx)("div",{})]}):(0,p.jsx)(a.o,{remarkPlugins:[s.A],components:{code(e){let{node:r,inline:n,className:o,children:t,...i}=e;const a=/language-(\w+)/.exec(o||"");return!n&&a?(0,p.jsx)(d.A,{style:c.A,language:a[1],PreTag:"div",...i,children:String(t).replace(/\n$/,"")}):(0,p.jsx)("code",{className:o,style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:"3px",fontFamily:"Source Code Pro, monospace"},...i,children:t})},a:e=>{let{node:r,href:n,children:o,...t}=e;return(0,p.jsx)("a",{href:n,style:{color:"#667eea",textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer","aria-label":o&&o.length>0&&"string"===typeof o[0]?o[0]:"Link",...t,children:o})}},children:o})}),(0,p.jsx)(f,{sender:n,children:"Typing..."===o?"Typing...":t})]})]})},v=o.memo(b),k=t.Ay.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px; /* Reduced padding */
  border-radius: 15px;
  overflow-y: auto;
  margin-bottom: 20px;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    height: 250px;
  }

  transition: background 0.3s;
`,j=e=>{let{chatLog:r,theme:n}=e;return(0,p.jsx)(k,{children:r.map(((e,r)=>(0,p.jsx)(v,{message:e,theme:n},r)))})},w=o.memo(j)}}]);
//# sourceMappingURL=978.26961884.chunk.js.map