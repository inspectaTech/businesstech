import {useEffect, useRef, useState, Suspense} from 'react';
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import getDeferMe from './getDeferMe';
const display_console = false;

/**
 * @docs DOCS: the imports were loading before page finished loading so some of the functions which were designed to detect
 * html elements and alter their classnames was runnning before the elements existed.  using this component i was 
 * able to delay the loading of the import scripts until after all the page elements are loaded.
 * @returns 
 */

const DeferMe = (props) => {

  let {
    compName,
    delay,
    callback,
    src = "class",
    home = "deferMe",
  } = props;

  

  const getDelayHome = () => { 
    
    if(src == "tag"){
      return document.querySelector(home);
    }else{
      
      let export_str = (home.includes(".")) ? home : `.${home}`;
      
      return document.querySelector(export_str);
    }
  }// getDelayHome

  const delayHome = useRef(getDelayHome());

  const run_defer = async () => { 

    let MyDefer = await getDeferMe[`${compName}`];

    // debugger

    // ReactDOM.hydrateRoot(
    // // ROOT.render(
    //   //document.querySelector('.deferMe'),
    //   <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} >
    //     <MyDefer />
    //   </Suspense>
    // );

    // ReactDOM.unstable_createPortal(
    //   <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} >
    //     <MyDefer />
    //   </Suspense>,
    //   delayHome.current,
    // );

    delay_ref.current = (
      <>
        {/* <div>running delay</div> */}
        <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} >
          <MyDefer {...{callback}} />
        </Suspense>
      </>
    );
    forceUpdate();
   }

  const init_ref = useRef(0);
  const delay_ref = useRef(<div>DeferMe</div>);
  const [val, setVal] = useState(0); // integer state
  const forceUpdate = () => {
    setVal(val => ++val); // update the state to force render
  }// forceUpdate

  const delay_count = useRef(0);
  
  useEffect(() => {
    if(display_console || 1){
      console.group("Vite");
      console.log(`[DeferMe] accessed`)
      console.groupEnd();
    }// if
    
    if(typeof delay != "undefined"){
      if(delay_count.current < delay && init_ref.current == 0){
        delay_count.current = delay_count.current + 1;
        if(display_console || 1) console.warn(`[DeferMe] ${delay_count.current} delay. Ah, Ah, Ah`);
        forceUpdate();
      }else if(delay_count.current == delay && init_ref.current == 0){
        if(display_console || 1) console.warn(`[DeferMe] right away with no delay!!!`);
        init_ref.current = 1;
        if (compName) {
          // if it gives a component name - load the component
          run_defer();
        } else {
          // if not and if there is a callback - run the callback
          if(callback) callback();
        }// else
      }// else if
    }// if
  },[delay_count.current]);
  
  // debugger

  return ReactDOM.createPortal(
    <>
      {delay_ref.current}
    </>
    ,delayHome.current
  );
}

export default DeferMe