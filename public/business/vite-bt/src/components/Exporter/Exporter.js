// import {useEffect, useRef, useState} from 'react';
const {useEffect, useRef, useState} = React;
// import ReactDOM from 'react-dom'
const display_console = false;

//
/**
 * @desc this was created to portal react elements to external DOM element locations without losing
 * its connection to its parent's state
 * @module Exporter
 * @param {object} props
 */

const Exporter = (props) => {

  let {
    home,
    delay = 0,
    src = "class",
    callback
  } = props;
  
  const getExportHome = () => { 
    
    if(src == "tag"){
      return document.querySelector(home);
    }else{
      
      let export_str = (home.includes(".")) ? home : `.${home}`;
      
      return document.querySelector(export_str);
    }
  }// getExportHome
  
  const exportHome = useRef(getExportHome());

  const [val, setVal] = useState(0); // integer state
  const forceUpdate = () => {
    setVal(val => ++val); // update the state to force render
  }// forceUpdate

  const delay_count = useRef(0);
  useEffect(() => {
    
      if(delay_count.current < delay){
        delay_count.current = delay_count.current + 1;
        if(display_console || false) console.warn(`[Exporter] ${delay_count.current} delay. Ah, Ah, Ah`);
        forceUpdate();
      }else if(delay_count.current == delay && callback){
        //
        callback();
      }

  },[delay_count.current]);


  if(delay_count.current < delay) return null;

  
  return ReactDOM.createPortal(
    <>
      {props.children}
    </>
    ,exportHome.current
  );
}

export default Exporter;
