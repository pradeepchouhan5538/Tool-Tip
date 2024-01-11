import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import "./styles.css";

export  function App() {

  
  return (
    <>
       <h1>Tool_Tip</h1>
       <div class="tooltip">
      <Tippy content="Tooltip_TOP" interactive={true} interactiveBorder={20} delay={100} placement= 'top'>
      <button id="t1" class="btn tippy" >hover here</button>
        </Tippy></div>
      
    	<div class="tooltip">
      <Tippy content="Tooltip_BOTTOM" interactive={true} interactiveBorder={20} delay={100} placement= 'bottom'>
      <button id="t2" class="btn tippy" >hover here</button></Tippy></div>

    	<div class="tooltip">
      <Tippy content="Tooltip_RIGHT" interactive={true} interactiveBorder={20} delay={100} placement= 'right'>
      <button id="t3" class="btn tippy" >hover here</button></Tippy></div>

    	<div class="tooltip">
      <Tippy content="Tooltip_LEFT" interactive={true} interactiveBorder={20} delay={100} placement= 'left'>
      <button id="t4" class="btn tippy" >hover here</button></Tippy></div>
      

    </>
   );
}

export default App;
