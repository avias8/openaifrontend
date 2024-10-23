"use strict";(self.webpackChunkopenaifrontend=self.webpackChunkopenaifrontend||[]).push([[818],{818:(e,r,o)=>{o.r(r),o.d(r,{default:()=>A});var t=o(43),n=o(464),i=o(204),a=o(494),s=o(215),d=o(476),l=o(579);const c=n.Ay.div`
  position: relative;
  background-color: ${e=>{let{theme:r}=e;return r.inputBackground}};
  padding: 10px;
  border-radius: 5px;
  overflow: auto;
  font-family: 'Source Code Pro', monospace;
  color: inherit;
  margin: 10px 0;
`,p=n.Ay.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${e=>{let{theme:r}=e;return r.textColor}};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.messageUser}};
  }
`,m=e=>{let{code:r}=e;return(0,l.jsxs)(c,{children:[(0,l.jsx)(d.CopyToClipboard,{text:r,children:(0,l.jsx)(p,{"aria-label":"Copy to clipboard",children:(0,l.jsx)(i.Y4c,{})})}),(0,l.jsx)("pre",{children:r})]})},x=n.i7`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`,u=n.Ay.div`
  display: flex;
  gap: 6px; /* Reduced gap between dots */
  margin-top: 4px; /* Reduced margin-top */

  div {
    width: 8px; /* Adjusted size of dots */
    height: 8px; /* Adjusted size of dots */
    background-color: #667eea; /* Color of dots */
    border-radius: 50%;
    animation: ${x} 1.5s infinite; /* Animation duration */
  }

  div:nth-child(2) {
    animation-delay: 0.3s; /* Animation delay */
  }

  div:nth-child(3) {
    animation-delay: 0.6s; /* Animation delay */
  }
`,h=()=>(0,l.jsxs)(u,{children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]}),g=t.memo(h),b=n.i7`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,f=n.Ay.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  max-width: ${e=>{let{$sender:r}=e;return"user"===r?"100%":"80%"}};
  flex-direction: ${e=>{let{$sender:r}=e;return"user"===r?"row-reverse":"row"}};
  align-self: ${e=>{let{$sender:r}=e;return"user"===r?"flex-end":"flex-start"}};

  @media (max-width: 600px) {
    max-width: ${e=>{let{$sender:r}=e;return"user"===r?"95%":"90%"}};
  }
`,y=n.Ay.div`
  margin-right: ${e=>{let{$sender:r}=e;return"user"===r?"0":"8px"}};
  margin-left: ${e=>{let{$sender:r}=e;return"user"===r?"8px":"0"}};
  display: flex;
  align-items: center;

  img {
    width: ${e=>{let{$sender:r}=e;return"system"===r?"48px":"24px"}};
    height: ${e=>{let{$sender:r}=e;return"system"===r?"48px":"24px"}};
    border-radius: 50%;
  }
`,$=n.Ay.div`
  padding: 10px 15px;
  border-radius: 20px;
  background: ${e=>{let{$sender:r,theme:o}=e;return"user"===r?o.messageUser:"openai"===r?o.messageOpenAI:"system"===r?o.messageSystem:o.messageError}};
  color: ${e=>{let{theme:r}=e;return r.textColor}};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${b} 0.3s ease-out;
  transition: background 0.3s, color 0.3s;
  word-wrap: break-word;
  flex: 1;
  white-space: pre-wrap;

  h1, h2, h3, h4, h5, h6 {
    margin: 5px 0;
  }

  p {
    margin: 5px 0;
  }

  ul, ol {
    padding-left: 15px;
    margin: 5px 0;
  }

  strong {
    font-weight: bold;
  }

  code {
    background-color: rgba(27, 31, 35, 0.05);
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 3px;
    font-family: 'Source Code Pro', monospace;
    color: inherit;
  }

  /* Table styling */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
    background-color: ${e=>{let{theme:r}=e;return r.tableBackground}}; /* Ensure a background for visibility */
  }

  th, td {
    border: 1px solid ${e=>{let{theme:r}=e;return r.tableBorderColor}}; /* Ensures border visibility */
    padding: 8px;
  }

  th {
    background-color: ${e=>{let{theme:r}=e;return r.textColor}};
    color: ${e=>{let{theme:r}=e;return r.background}};
    font-weight: bold;
  }
`,k=n.Ay.span`
  display: block;
  font-size: 0.75rem;
  color: #ccc;
  margin-top: 5px;
  text-align: ${e=>{let{$sender:r}=e;return"user"===r?"right":"left"}};
`,v=e=>{let{message:r}=e;const{sender:o,text:t,timestamp:n}=r;return(0,l.jsxs)(f,{$sender:o,children:[(0,l.jsxs)(y,{$sender:o,children:["openai"===o&&(0,l.jsx)(i.y8Q,{size:24,color:"error"===o?"#dc3545":void 0}),"user"===o&&(0,l.jsx)(i.NBi,{size:24}),"system"===o&&(0,l.jsx)("img",{src:"https://avivarma.ca/images/avivarma.jpeg",alt:"Avi"}),"error"===o&&(0,l.jsx)(i.y8Q,{size:24,color:"#dc3545"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)($,{$sender:o,children:"openai"===o&&"Typing..."===t?(0,l.jsx)(g,{}):(0,l.jsx)(a.o,{remarkPlugins:[s.A],components:{code(e){let{node:r,inline:o,className:t,children:n,...i}=e;const a=/language-(\w+)/.exec(t||"");return!o&&a?(0,l.jsx)(m,{code:String(n).replace(/\n$/,"")}):(0,l.jsx)("code",{className:t,style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:"3px",fontFamily:"Source Code Pro, monospace"},...i,children:n})},a:e=>{let{node:r,href:o,children:t,...n}=e;return(0,l.jsx)("a",{href:o,style:{color:"#667eea",textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer","aria-label":t&&t.length>0&&"string"===typeof t[0]?t[0]:"Link",...n,children:t})}},children:t})}),(0,l.jsx)(k,{$sender:o,children:"Typing..."===t?"Typing...":n})]})]})},w=t.memo(v),j=n.Ay.div`
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
`,C=e=>{let{chatLog:r,theme:o,chatEndRef:t}=e;return(0,l.jsxs)(j,{children:[r.map(((e,r)=>(0,l.jsx)(w,{message:e,theme:o},r))),(0,l.jsx)("div",{ref:t})," "]})},A=t.memo(C)}}]);
//# sourceMappingURL=818.c7d8f30d.chunk.js.map