import React, { useState, useEffect, Suspense } from 'react'

import Handlebars from 'handlebars'

import htmlContent from './vite-index.html?raw';
import Exporter from './components/Exporter/Exporter.jsx'
import DeferMe from './components/DeferMe'

import '../../css/style.css';
import '../../css/foundation.min.css';
// import '../../js/foundation.min.js';
// import '../../';
// import '../../css/app.css';

import './App.css';

const local = 0;

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

    if(0){
      /**
       * test to see if html is present
       * replace .root with html class you want to check
       */
      let html_el = document.querySelector(".root");// 
      debugger
    }
    
    return () => {
      debugger
    }
  },[])

  
  let use_img = local ? "." : "https://cdn.jsdelivr.net/gh/inspectaTech/businesstech@main/public"

  const data = {
    title: 'digital business',
    items: ['Item 1', 'Item 2', 'Item 3'],
    img: use_img
  };// WORKS

  const compiledTemplate = Handlebars.compile(htmlContent);
  const h_cont = compiledTemplate(data);

  const useHtml = (
    <>
      <div dangerouslySetInnerHTML={{ __html: h_cont }} className={`html_comp plax-bg`}  />
    </>
  );
  
  return (
    <>
      <Exporter {...{home: "body", src: "tag", delay: 0}} >
        {useHtml}
      </Exporter>
      {/* <DeferMe compName="DefaultClsDefer" delay={0} /> */}
      <DeferMe compName="DefaultJsDefer" delay={2} />
    </>
  );
}

export default App   
