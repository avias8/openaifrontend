"use strict";(self.webpackChunkopenaifrontend=self.webpackChunkopenaifrontend||[]).push([[4],{4:(e,r,o)=>{o.r(r),o.d(r,{default:()=>u});var t=o(43),n=o(464),a=o(204),s=o(579);const d=n.Ay.div`
  display: flex;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 12px;
  background: ${e=>{let{theme:r}=e;return r.inputContainerBackground}}; /* New background color for the input area */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px 0; /* Additional spacing for the container */
`,i=n.Ay.textarea.attrs({"aria-label":"Type your message"})`
  flex: 1;
  padding: 15px 20px;
  border-radius: 12px;
  background: ${e=>{let{theme:r}=e;return r.inputBackground}};
  border: none;
  color: ${e=>{let{theme:r}=e;return r.textColor}};
  resize: none;
  font-size: 1rem;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, box-shadow 0.3s, color 0.3s;

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.placeholderColor}};
    opacity: 1; /* Ensure placeholder is fully opaque */
  }

  &:focus {
    background: ${e=>{let{theme:r}=e;return r.inputFocusBackground}};
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.15);
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 0.9rem;
  }
`,l=n.Ay.button.attrs({"aria-label":"Send message"})`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${e=>{let{theme:r}=e;return r.sendButtonBackground}};
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, border 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Adding a subtle border */
  border: 2px solid transparent; /* Start with a transparent border */
  
  /* Change border color on hover */
  &:hover {
    background: ${e=>{let{theme:r}=e;return r.sendButtonHoverBackground}};
    border-color: ${e=>{let{theme:r}=e;return r.borderHoverColor}}; /* Custom border color on hover */
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${e=>{let{theme:r}=e;return r.messageUser}};
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
`,p=e=>{let{prompt:r,setPrompt:o,handleGenerateText:t}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(i,{placeholder:"Type your message...",value:r,onChange:e=>o(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),t(),o(""))},rows:2}),(0,s.jsxs)(l,{onClick:()=>{t(),o("")},children:[(0,s.jsx)(a.Cer,{})," "]})]})},u=t.memo(p)}}]);
//# sourceMappingURL=4.58e3bcf9.chunk.js.map