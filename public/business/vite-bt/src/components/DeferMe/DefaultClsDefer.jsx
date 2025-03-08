import React, {useEffect} from 'react';

// import './style.css';
// import './agency.css';// NOTE: also controls loader - needs to run earlier if possible
// import './Articles.scss';
// Bundle
import '../../../vendor/css/bundle.min.css';
// Plugin Css
import '../../../vendor/css/revolution-settings.min.css';
import '../../../vendor/css/owl.carousel.min.css';
import '../../../vendor/css/swiper.min.css';
import '../../../vendor/css/LineIcons.min.css';
// Style Sheet
import '../../../creative-piling/css/jquery.pagepiling.css';
import '../../../creative-piling/css/pagepiling.css';
import '../../../creative-piling/css/style.css';

const DefaultClsDefer = ({
  callback
}) => {

  useEffect(() => {
    
    if(0){
      console.group("Vite");
      console.log(`[DefaultClsDefer] accessed`)
      console.groupEnd();
    }
    
    if(callback) callback();
  
    return () => {
      
    }
  }, [])
  
  return null;
}

export default DefaultClsDefer;