(()=>{var e={};e.id=84,e.ids=[84],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3009:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>_,tree:()=>l});var s=r(7096),n=r(6132),a=r(7284),o=r.n(a),i=r(2564),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let l=["",{children:["test-fetch",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8271)),"/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/test-fetch/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9113)),"/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/test-fetch/page.js"],u="/test-fetch/page",p={require:r,loadChunk:()=>Promise.resolve()},_=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/test-fetch/page",pathname:"/test-fetch",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5094:(e,t,r)=>{Promise.resolve().then(r.bind(r,7179))},7179:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(784),n=r(9885);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,n.useState)(null),[r,a]=(0,n.useState)(null);return((0,n.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("http://ec2-18-234-125-13.compute-1.amazonaws.com:8080/New-FoodOrdering/users/all");if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let r=await e.json();t(r)}catch(e){a(e.message)}};fetchData()},[]),r)?(0,s.jsxs)("p",{style:{color:"red"},children:["Error: ",r]}):e?(0,s.jsxs)("div",{children:[s.jsx("h3",{children:"Fetched Data"}),s.jsx("pre",{style:{background:"#f4f4f4",padding:"10px",borderRadius:"5px"},children:JSON.stringify(e,null,2)})]}):s.jsx("p",{children:"Loading..."})}},8271:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>c});var s=r(5153);let n=(0,s.createProxy)(String.raw`/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/test-fetch/page.js`),{__esModule:a,$$typeof:o}=n,i=n.default,c=i},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},784:(e,t,r)=>{"use strict";e.exports=r(316).vendored["react-ssr"].ReactJsxRuntime}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[570,323,26],()=>__webpack_exec__(3009));module.exports=r})();