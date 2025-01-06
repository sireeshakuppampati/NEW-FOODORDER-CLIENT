(()=>{var e={};e.id=240,e.ids=[240],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3446:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>l});var s=r(7096),d=r(6132),n=r(7284),i=r.n(n),o=r(2564),a={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>o[e]);r.d(t,a);let l=["",{children:["users",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5622)),"/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/users/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9113)),"/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/users/page.js"],p="/users/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:d.x.APP_PAGE,page:"/users/page",pathname:"/users",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},2256:(e,t,r)=>{Promise.resolve().then(r.bind(r,5143))},5143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(784),d=r(9885);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,d.useState)([]),[r,n]=(0,d.useState)(!0),[i,o]=(0,d.useState)(null),[a,l]=(0,d.useState)("");(0,d.useEffect)(()=>{let fetchUsers=async()=>{try{let e=await fetch("http://localhost:8080/New-FoodOrdering/users/all");if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);let r=await e.json();t(r)}catch(e){console.error("Error fetching users:",e.message),o("Failed to fetch users. Please try again later.")}finally{n(!1)}};fetchUsers()},[]);let handleDelete=async r=>{try{let s=await fetch(`http://localhost:8080/New-FoodOrdering/users/delete/${r}`,{method:"DELETE"});if(!s.ok)throw Error(`HTTP error! Status: ${s.status}`);l("User deleted successfully!"),t(e.filter(e=>e.id!==r))}catch(e){console.error("Error deleting user:",e.message),l("Failed to delete user. Please try again.")}};return r?s.jsx("p",{children:"Loading..."}):i?s.jsx("p",{style:{color:"red"},children:i}):(0,s.jsxs)("div",{style:{padding:"20px"},children:[s.jsx("h3",{children:"Customers"}),a&&s.jsx("p",{children:a}),(0,s.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid #ddd",textAlign:"left"},children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Customer ID"}),s.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Name"}),s.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Email"}),s.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Phone Number"}),s.jsx("th",{style:{border:"1px solid #ddd",padding:"8px"},children:"Actions"})]})}),s.jsx("tbody",{children:e.map(e=>(0,s.jsxs)("tr",{children:[s.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},children:e.id}),s.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},children:e.name}),s.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},children:e.email}),s.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},children:e.phoneNumber}),s.jsx("td",{style:{border:"1px solid #ddd",padding:"8px"},children:s.jsx("button",{onClick:()=>handleDelete(e.id),style:{color:"red"},children:"Delete"})})]},e.id))})]})]})}},5622:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>a});var s=r(5153);let d=(0,s.createProxy)(String.raw`/Users/keyinstudent/Documents/SEMESTER4/FINALSPRINT-SDAT/new-foodorder-client/src/app/users/page.js`),{__esModule:n,$$typeof:i}=d,o=d.default,a=o},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},784:(e,t,r)=>{"use strict";e.exports=r(316).vendored["react-ssr"].ReactJsxRuntime}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[570,323,26],()=>__webpack_exec__(3446));module.exports=r})();