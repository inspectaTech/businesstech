import React, {useEffect} from 'react'

import '../../../../js/foundation.min.js';
import '../../../../js/app.js';
import '../../../../js/action.js';

const DefaultJsDefer = ({
  callback
}) => {

  useEffect(() => {
    
    if(0){
      console.group("Vite");
      console.log(`[DefaultJSDefer] accessed`)
      console.groupEnd();
    }
    
    if(callback) callback();
  
    return () => {
      
    }
  }, [])

  // return (
  //   <div>MegaOneJsDefer</div>
  // )
  return null;
}

export default DefaultJsDefer