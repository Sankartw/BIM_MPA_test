/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
let bimobjallCtm;
const bimobjUrl = "https://www.handbim.com/bimvr/";
if (location.hostname === "localhost") {
  //   var lhost = 'www.handbim.com'
  // bimobjUrl = 'https://' + lhost + bimobjUrl;
}
let loadScriptCount = 0;
const loadScript = function(a, d, c) {
  loadScriptCount += 1;
  typeof c === "undefined" && (c = "script");
  if (c !== "script" && c !== "css") return !1;
  c === "css" && (c = "link");
  const b = document.createElement(c);
  b.readyState
    ? (b.onreadystatechange = function() {
        if (b.readyState === "loaded" || b.readyState === "complete") {
          (b.onreadystatechange = null), --loadScriptCount, d && d();
        }
      })
    : (b.onload = function() {
        --loadScriptCount;
        d && d();
      });
  c === "script"
    ? ((b.type = "text/javascript"), (b.src = a))
    : c === "link" && ((b.rel = "stylesheet"), (b.href = a));
  document.getElementsByTagName("head")[0].appendChild(b);
};
getUrlParam = function(a) {
  a = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
  a = window.location.search.substr(1).match(a);
  return a !== null ? unescape(a[2]) : null;
};
const UrParam = function() {
  const a = window.location.search.substring(1).split("&");
  const d = {};
  let c;
  for (c in a) {
    if (a[c] !== "") {
      const b = a[c].split("=");
      d[decodeURIComponent(b[0])] = decodeURIComponent(b[1]);
    }
  }
  return d;
};
let objPar = {};
function bZ() {
  loadScript(
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    function() {},
    "css"
  );
  loadScript(
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css",
    function() {},
    "css"
  );
  loadScript(
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js",
    function() {
      console.log("bootstrap loaded");
    }
  );
  loadScript(
    "https://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css",
    null,
    "css"
  );
  loadScript("https://jqueryui.com/resources/demos/style.css", null, "css");
  loadScript("https://code.jquery.com/ui/1.10.4/jquery-ui.js", function() {
    loadScript(bimobjUrl + "./bimobjall-gui-opt.js");
  });
  loadScript(bimobjUrl + "js/jquery.pagination.js");
  loadScript(bimobjUrl + "js/knockout-3.4.2.debug.js");
  loadScript(bimobjUrl + "./bimobjall-ctm-C.css", null, "css");
  loadScript(bimobjUrl + "./bimobjall-ctm-C-opt.js", function() {});
}
typeof jQuery === "undefined"
  ? loadScript(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
      function() {
        console.log("jquery loaded");
        bZ();
      }
    )
  : bZ();
function dk() {
  loadScript(bimobjUrl + "js/examples/js/controls/OrbitControls.js");
  loadScript(bimobjUrl + "js/examples/js/loaders/DDSLoader.js");
  loadScript(bimobjUrl + "js/examples/js/loaders/MTLLoader.js");
  loadScript(bimobjUrl + "js/examples/js/loaders/OBJLoader.js");
  loadScript(bimobjUrl + "js/examples/js/libs/stats.min.js");
  loadScript(bimobjUrl + "js/examples/js/utils/GeometryUtils.js");
  loadScript(bimobjUrl + "js/examples/js/libs/opentype.min.js");
  loadScript(bimobjUrl + "js/examples/js/loaders/TTFLoader.js");
  loadScript(bimobjUrl + "js/examples/js/libs/dat.gui.min.js");
  loadScript(bimobjUrl + "./bimobj-design-opt.js");
  loadScript(bimobjUrl + "js/core.js");
  loadScript(bimobjUrl + "js/sweetalert2.all.min.js");
  loadScript(bimobjUrl + "js/sweetalert2.css", null, "css");
  loadScript(bimobjUrl + "js/sweetalert2.js");
  loadScript(bimobjUrl + "js/examples/js/loaders/DRACOLoader.js");
  loadScript(bimobjUrl + "js/examples/js/loaders/GLTFLoader.js", function() {
    loadScript(bimobjUrl + "./bimobjall-ctm.css", null, "css");
    loadScript(bimobjUrl + "./bimobjall-ctm-opt.js", function() {});
  });
}
typeof THREE === "undefined"
  ? loadScript(bimobjUrl + "js/build/three.js", function() {
      dk();
    })
  : dk();
$.fn.BimObjCtm = function(a) {
  bimobjallCtm = this;
  setTimeout(function() {
    var d = window.setInterval(function() {
      loadScriptCount === 0 &&
        (window.clearInterval(d),(objPar = a), void 0 !== objPar && (dm(), dw()));
    }, 1e3);
  }, 500);
};
