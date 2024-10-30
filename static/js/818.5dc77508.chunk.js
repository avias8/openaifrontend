"use strict";(self.webpackChunkopenaifrontend=self.webpackChunkopenaifrontend||[]).push([[818],{818:(e,r,o)=>{o.r(r),o.d(r,{default:()=>E});var t=o(43),n=o(464),a=o(204),i=o(494),s=o(215),l=o(476),d=o(579);const c=n.Ay.div`
  position: relative;
  background-color: ${e=>{let{theme:r}=e;return r.inputBackground}};
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
`,p=n.Ay.pre`
  overflow-x: auto; /* Ensures horizontal scrolling */
  white-space: nowrap; /* Prevents wrapping */
  font-family: 'Source Code Pro', monospace;
  background-color: ${e=>{let{theme:r}=e;return r.inputBackground}};
  padding: 10px;
  border-radius: 5px;

  /* Custom white scrollbar styles */
  &::-webkit-scrollbar {
    height: 8px; /* Horizontal scrollbar height */
  }

  &::-webkit-scrollbar-thumb {
    background-color: white; /* White scrollbar thumb */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${e=>{let{theme:r}=e;return r.inputBackground}}; /* Same background as code */
  }
`,h=n.Ay.code`
  white-space: nowrap; /* Ensures no wrapping in code */
  display: inline-block; /* Required to respect white-space and overflow */
`,u=n.Ay.button`
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
`,m=e=>{let{code:r}=e;return(0,d.jsxs)(c,{children:[(0,d.jsx)(l.CopyToClipboard,{text:r,children:(0,d.jsx)(u,{"aria-label":"Copy to clipboard",children:(0,d.jsx)(a.Y4c,{})})}),(0,d.jsx)(p,{children:(0,d.jsx)(h,{children:r})})]})},x=n.i7`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`,g=n.Ay.div`
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
`,b=()=>(0,d.jsxs)(g,{children:[(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{})]}),w=t.memo(b),f=n.i7`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,y=n.Ay.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  max-width: ${e=>{let{$sender:r}=e;return"user"===r?"100%":"80%"}};
  flex-direction: ${e=>{let{$sender:r}=e;return"user"===r?"row-reverse":"row"}};
  align-self: ${e=>{let{$sender:r}=e;return"user"===r?"flex-end":"flex-start"}};
`,k=n.Ay.div`
  display: flex;
  align-items: center;

  img {
    width: ${e=>{let{$sender:r}=e;return"system"===r?"48px":"24px"}};
    height: ${e=>{let{$sender:r}=e;return"system"===r?"48px":"24px"}};
    border-radius: 50%;
  }
`,v=n.Ay.div`
  padding: 10px 15px;
  border-radius: 20px;
  background: ${e=>{let{$sender:r,theme:o}=e;return"user"===r?o.messageUser:"openai"===r?o.messageOpenAI:"system"===r?o.messageSystem:o.messageError}};
  color: ${e=>{let{theme:r}=e;return r.textColor}};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${f} 0.3s ease-out;
  transition: background 0.3s, color 0.3s;
  word-wrap: normal; /* Ensure words only wrap at word boundaries */
  white-space: normal; /* Wrap text but don't break words */
  max-width: 100%; /* Default max-width for messages on larger screens */
  width: fit-content; /* Prevent message bubbles from stretching unnecessarily */
  margin: 10px; /* Ensure no extra margin */
  flex: 1;

  @media (max-width: 480px) {
    max-width: 60vw;
  }

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
    white-space: pre-wrap; /* Ensure code wraps properly */
  }

  /* Table styling */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
    background-color: ${e=>{let{theme:r}=e;return r.tableBackground}};
  }

  th, td {
    border: 1px solid ${e=>{let{theme:r}=e;return r.tableBorderColor}};
    padding: 8px;
  }

  th {
    background-color: ${e=>{let{theme:r}=e;return r.textColor}};
    color: ${e=>{let{theme:r}=e;return r.background}};
    font-weight: bold;
  }
`,$=n.Ay.span`
  display: block;
  font-size: 0.75rem;
  color: #ccc;
  margin-top: 5px;
  text-align: ${e=>{let{$sender:r}=e;return"user"===r?"right":"left"}};
`,j=e=>{let{message:r}=e;const{sender:o,text:t,timestamp:n}=r;return(0,d.jsxs)(y,{$sender:o,children:[(0,d.jsxs)(k,{$sender:o,children:["openai"===o&&(0,d.jsx)(a.y8Q,{size:24,color:"error"===o?"#dc3545":void 0}),"user"===o&&(0,d.jsx)(a.NBi,{size:24}),"system"===o&&(0,d.jsx)("img",{src:"https://avivarma.ca/images/avivarma.jpeg",alt:"Avi"}),"error"===o&&(0,d.jsx)(a.y8Q,{size:24,color:"#dc3545"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(v,{$sender:o,children:"openai"===o&&"Typing..."===t?(0,d.jsx)(w,{}):(0,d.jsx)(i.o,{remarkPlugins:[s.A],components:{code(e){let{node:r,inline:o,className:t,children:n,...a}=e;const i=/language-(\w+)/.exec(t||"");return!o&&i?(0,d.jsx)(m,{code:String(n).replace(/\n$/,"")}):(0,d.jsx)("code",{className:t,style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:"3px",fontFamily:"Source Code Pro, monospace"},...a,children:n})},a:e=>{let{node:r,href:o,children:t,...n}=e;return(0,d.jsx)("a",{href:o,style:{color:"#667eea",textDecoration:"underline"},target:"_blank",rel:"noopener noreferrer","aria-label":t&&t.length>0&&"string"===typeof t[0]?t[0]:"Link",...n,children:t})}},children:t})}),(0,d.jsx)($,{$sender:o,children:"Typing..."===t?"Typing...":n})]})]})},A=t.memo(j),C=n.Ay.div`
  flex: 1;
  width: 100%; /* Ensure full width of parent container */
  max-width: 100%; /* Prevent overflow beyond parent width */
  background: rgba(255, 255, 255, 0.05);
  padding: 15px; /* Adjusted padding for spacing */
  box-sizing: border-box; /* Include padding in width/height calculation */
  border-radius: 15px;
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal overflow */
  margin: 5px auto; /* Remove bottom margin to fit parent width */
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
`,z=e=>{let{chatLog:r,theme:o,chatEndRef:t}=e;return(0,d.jsxs)(C,{children:[r.map(((e,r)=>(0,d.jsx)(A,{message:e,theme:o},r))),(0,d.jsx)("div",{ref:t})," "]})},E=t.memo(z)}}]);
//# sourceMappingURL=818.5dc77508.chunk.js.map