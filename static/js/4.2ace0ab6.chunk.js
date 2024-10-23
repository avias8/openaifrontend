"use strict";(self.webpackChunkopenaifrontend=self.webpackChunkopenaifrontend||[]).push([[4],{4:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var o=t(43),n=t(464),a=t(579);const s=n.Ay.div`
  display: flex;
  gap: 10px;
`,d=n.Ay.textarea.attrs({"aria-label":"Type your message"})`
  flex: 1;
  padding: 15px 20px;
  border-radius: 12px;
  background: ${e=>{let{theme:r}=e;return r.inputBackground}};
  border: none;
  color: ${e=>{let{theme:r}=e;return r.textColor}};
  resize: none;
  font-size: 1rem;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: background 0.3s, box-shadow 0.3s, color 0.3s;

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.placeholderColor}};
    opacity: 1; /* Ensure placeholder is fully opaque */
  }

  &:focus {
    background: ${e=>{let{theme:r}=e;return r.inputFocusBackground}};
    box-shadow: inset 0 4px 10px
      ${e=>{let{theme:r}=e;return"dark"===r.mode?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.3)"}};
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 0.9rem;
  }
`,l=n.Ay.button.attrs({"aria-label":"Send message"})`
  padding: 15px 25px;
  border: none;
  border-radius: 12px;
  background: ${e=>{let{theme:r}=e;return r.sendButtonBackground}};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: ${e=>{let{theme:r}=e;return r.sendButtonHoverBackground}};
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
    padding: 12px 20px;
    font-size: 0.9rem;
  }
`,p=e=>{let{prompt:r,setPrompt:t,handleGenerateText:o}=e;return(0,a.jsxs)(s,{children:[(0,a.jsx)(d,{placeholder:"Type your message...",value:r,onChange:e=>t(e.target.value),rows:2}),(0,a.jsx)(l,{onClick:o,children:"Send"})]})},u=o.memo(p)}}]);
//# sourceMappingURL=4.2ace0ab6.chunk.js.map