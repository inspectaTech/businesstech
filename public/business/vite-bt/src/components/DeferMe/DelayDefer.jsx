import React from 'react'

// import "../../../lib/js/jquery-3.5.1.min.js";
// import "../../../lib/js/jquery-migrate-3.0.0.min.js";
// import "../../../lib/js/modernizr-2.6.2.min.js";
// require("../../../lib/js/modernizr-2.6.2.min.js");
// import "../../../lib/js/pace.js";
// import "../../../lib/js/popper.min.js";
// require("../../../lib/js/popper.min.js");

// import "../../../lib/js/bootstrap.min.js";
// require("../../../lib/js/bootstrap.min.js");

// import "../../../lib/js/scrollIt.min.js";
// import "../../../lib/js/jquery.waypoints.min.js";
// import "../../../lib/js/owl.carousel.min.js";
// import "../../../lib/js/jquery.stellar.min.js";
// require("../../../lib/js/jquery.stellar.min.js");

// import "../../../lib/js/jquery.magnific-popup.js";
// import "../../../lib/js/YouTubePopUp.js";
// import "../../../lib/js/custom.js";
// import "../../../lib/js/";

{/* <script src="abds/lib/js/jquery-3.5.1.min.js"></script>
  <script src="abds/lib/js/jquery-migrate-3.0.0.min.js"></script>
  <script src="abds/lib/js/modernizr-2.6.2.min.js"></script>
  <script src="abds/lib/js/pace.js"></script>
  <script src="abds/lib/js/popper.min.js"></script>
  <script src="abds/lib/js/bootstrap.min.js"></script>
  <script src="abds/lib/js/scrollIt.min.js"></script>
  <script src="abds/lib/js/jquery.waypoints.min.js"></script>
  <script src="abds/lib/js/owl.carousel.min.js"></script>
  <script src="abds/lib/js/jquery.stellar.min.js"></script>
  <script src="abds/lib/js/jquery.magnific-popup.js"></script>
  <script src="abds/lib/js/YouTubePopUp.js"></script>
  <script src="abds/lib/js/custom.js"></script> */}
// import "../../../../icomoon/d3po.scss";
// import "../../../../icomoon/style.scss";



const DelayDefer = () => {
  console.group("Vite");
  console.log(`[DelayDefer] accessed`)
  console.groupEnd();
  return <span>What</span>;
}

export default DelayDefer;

// NOTE: works for deferring the loading of a group of js and css files after page loads
// helps projects avoid conflicts in page loading since all the files aren't stored in a single bundle.js/css file
// these files only load when triggered by an event or by the loading of a specific element using a useEffect/Suspend trigger
