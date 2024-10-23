"use strict";(self.webpackChunkopenaifrontend=self.webpackChunkopenaifrontend||[]).push([[365],{365:(e,r,o)=>{o.r(r),o.d(r,{default:()=>A});var t=o(43),n=o(464),i=o(204),a=o(494),s=o(215),d=o(926),l=o(995),c=o(640),p=o(579);const m=n.i7`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`,x=n.Ay.div`
  display: flex;
  gap: 6px; /* Reduced gap between dots */
  margin-top: 4px; /* Reduced margin-top */

  div {
    width: 8px; /* Adjusted size of dots */
    height: 8px; /* Adjusted size of dots */
    background-color: #667eea; /* Color of dots */
    border-radius: 50%;
    animation: ${m} 1.5s infinite; /* Animation duration */
  }

  div:nth-child(2) {
    animation-delay: 0.3s; /* Animation delay */
  }

  div:nth-child(3) {
    animation-delay: 0.6s; /* Animation delay */
  }
`,g=()=>(0,p.jsxs)(x,{children:[(0,p.jsx)("div",{}),(0,p.jsx)("div",{}),(0,p.jsx)("div",{})]}),h=t.memo(g);d.A.registerLanguage("javascript",l.A);const u=n.i7`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,b=n.Ay.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  max-width: ${e=>{let{$sender:r}=e;return"user"===r?"100%":"80%"}};
  flex-direction: ${e=>{let{$sender:r}=e;return"user"===r?"row-reverse":"row"}};
  align-self: ${e=>{let{$sender:r}=e;return"user"===r?"flex-end":"flex-start"}};
  
  @media (max-width: 600px) {
    max-width: ${e=>{let{$sender:r}=e;return"user"===r?"95%":"90%"}};
  }
`,f=n.Ay.div`
  margin-right: ${e=>{let{$sender:r}=e;return"user"===r?"0":"8px"}};
  margin-left: ${e=>{let{$sender:r}=e;return"user"===r?"8px":"0"}};
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`,y=n.Ay.div`
  padding: 12px 20px;
  border-radius: 20px;
  background: ${e=>{let{$sender:r,theme:o}=e;return"user"===r?o.messageUser:"openai"===r?o.messageOpenAI:o.messageError}};
  color: ${e=>{let{theme:r}=e;return r.textColor}}; /* Dynamic text color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${u} 0.3s ease-out;
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
`,k=n.Ay.span`
  display: block;
  font-size: 0.75rem;
  color: #ccc;
  margin-top: 5px;
  text-align: ${e=>{let{$sender:r}=e;return"user"===r?"right":"left"}};
`,w=e=>{let{message:r}=e;const{sender:o,text:t,timestamp:n}=r;return console.log(t),(0,p.jsxs)(b,{$sender:o,children:[(0,p.jsxs)(f,{$sender:o,children:["openai"===o&&(0,p.jsx)(i.y8Q,{size:24,color:"error"===o?"#dc3545":void 0}),"user"===o&&(0,p.jsx)(i.NBi,{size:24}),"system"===o&&(0,p.jsx)(i.Pcn,{size:24}),"error"===o&&(0,p.jsx)(i.y8Q,{size:24,color:"#dc3545"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(y,{$sender:o,children:"openai"===o&&"Typing..."===t?(0,p.jsx)(h,{}):(0,p.jsx)(a.o,{remarkPlugins:[s.A],components:{code(e){let{node:r,inline:o,className:t,children:n,...i}=e;const a=/language-(\w+)/.exec(t||"");return!o&&a?(0,p.jsx)(d.A,{style:c.A,language:a[1],PreTag:"div",...i,children:String(n).replace(/\n$/,"")}):(0,p.jsx)("code",{className:t,style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:"3px",fontFamily:"Source Code Pro, monospace"},...i,children:n})},a:e=>{let{node:r,href:o,children:t,...n}=e;return(0,p.jsx)("a",{href:o,style:{color:"#667eea",textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer","aria-label":t&&t.length>0&&"string"===typeof t[0]?t[0]:"Link",...n,children:t})}},children:t})}),(0,p.jsx)(k,{$sender:o,children:"Typing..."===t?"Typing...":n})]})]})},$=t.memo(w),v=n.Ay.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px; /* Reduced padding */
  border-radius: 15px;
  overflow-y: auto; /* Enable vertical scrolling */
  margin-bottom: 20px;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.3);
  max-height: calc(100vh - 160px); /* Set maximum height to fit within the viewport */

  @media (max-width: 600px) {
    height: 250px;
  }

  transition: background 0.3s;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${e=>{let{theme:r}=e;return r.scrollbarThumb}}; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Rounded corners for the scrollbar thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: ${e=>{let{theme:r}=e;return r.scrollbarTrack}}; /* Color of the scrollbar track */
  }
`,j=e=>{let{chatLog:r,theme:o}=e;return(0,p.jsx)(v,{children:r.map(((e,r)=>(0,p.jsx)($,{message:e,theme:o},r)))})},A=t.memo(j)}}]);
//# sourceMappingURL=365.f23164e5.chunk.js.map