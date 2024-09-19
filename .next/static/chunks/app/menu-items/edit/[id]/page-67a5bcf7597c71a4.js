(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{5788:function(e,t,n){Promise.resolve().then(n.bind(n,4329))},7907:function(e,t,n){"use strict";var a=n(5313);n.o(a,"redirect")&&n.d(t,{redirect:function(){return a.redirect}}),n.o(a,"useParams")&&n.d(t,{useParams:function(){return a.useParams}}),n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}})},6953:function(e,t,n){"use strict";var a=n(7437),r=n(2265);t.Z=e=>{let{label:t,onDelete:n}=e,[s,l]=(0,r.useState)(!1);return s?(0,a.jsx)("div",{className:"fixed bg-black/80 inset-0 flex items-center h-full justify-center",children:(0,a.jsxs)("div",{className:"bg-white p-4 rounded-lg",children:[(0,a.jsx)("div",{children:"Are you sure you want to delete?.."}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("button",{onClick:()=>l(!1),className:"btn",children:"Cancel"}),(0,a.jsx)("button",{className:"text-white btn1 bg-[red]",onClick:n,children:"Yes\xa0Delete!"})]})]})}):(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>l(!0),className:"btn",type:"button",children:t})})}},4246:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7437),r=n(8009),s=n(703);function l(e){let{link:t,setLink:n}=e;async function l(e){let t=e.target.files;if((null==t?void 0:t.length)===1){let e=new FormData;e.set("file",t[0]);let a=fetch("/api/upload",{method:"POST",body:e}).then(async e=>{if(e.ok)return e.json().then(e=>{n(e)});throw Error("Something went wrong")});await r.default.promise(a,{loading:"Uploading...",success:"Upload complete",error:"Upload error"})}}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"text-center",children:!t&&(0,a.jsx)("div",{children:"No Image"})}),t&&(0,a.jsx)(s.default,{className:"rounded-lg mx-auto  mb-1",src:t,width:100,height:100,alt:"avatar"}),(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"file",className:"hidden",onChange:l}),(0,a.jsx)("span",{className:" w-[60px] mx-auto block border border-gray-300 rounded-lg p-2 text-center cursor-pointer mt-[3rem]",children:"Edit"})]})]})}},3173:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7437),r=n(2265),s=n(4246),l=n(8792);function i(e){let{onSubmit:t,menuItem:n}=e,[i,c]=(0,r.useState)(),[u,o]=(0,r.useState)(),[d,m]=(0,r.useState)(),[h,f]=(0,r.useState)(),[x,b]=(0,r.useState)(""),[g,p]=(0,r.useState)("");(0,r.useEffect)(()=>{c((null==n?void 0:n.image)||""),o((null==n?void 0:n.Name)||""),m((null==n?void 0:n.Baseprice)||"0"),f((null==n?void 0:n.DiscountPrice)||"0"),b((null==n?void 0:n.PercentageOFF)||"0%"),p((null==n?void 0:n.TotalQuantity)||"0")},[n]);let j=(e,t,n)=>{let a=parseFloat(e)||0,r=parseFloat(t);isNaN(a)||isNaN(r)||isNaN(n)?(f("0"),b("0%"),p("0")):a>0&&t>0?b("".concat(Math.floor((a-t)/a*100))):b("0%")};return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.Z,{link:i,setLink:c})}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)(l.default,{className:"max-w-md mx-auto block border border-gray-300 rounded-lg p-2 text-center cursor-pointer mt-[3rem]",href:"/menu-items",children:"Show all Menu item"})}),(0,a.jsx)("form",{className:"mt-8",onSubmit:e=>t(e,{image:i,Name:u,Baseprice:d,DiscountPrice:h,PercentageOFF:x,TotalQuantity:g}),children:(0,a.jsx)("div",{className:"gap-2 items-end",children:(0,a.jsxs)("div",{className:"grow",children:[(0,a.jsx)("label",{children:"Item Name"}),(0,a.jsx)("input",{className:"block w-full rounded-xl mb-2 p-2 border border-gray-300 bg-gray-200",value:u,onChange:e=>o(e.target.value),type:"text"}),(0,a.jsx)("label",{children:"Base Price"}),(0,a.jsx)("input",{className:"block w-full rounded-xl mb-2 p-2 border border-gray-300 bg-gray-200",value:d,onChange:e=>{let t=parseFloat(e.target.value);m(t),j(t,h)},type:"text"}),(0,a.jsx)("label",{children:"Discount Price"}),(0,a.jsx)("input",{className:"block w-full rounded-xl mb-2 p-2 border border-gray-300 bg-gray-200",value:h,onChange:e=>{let t=parseFloat(e.target.value);f(t),j(d,t,g)},type:"text"}),(0,a.jsx)("label",{children:"%Percentage OFF"}),(0,a.jsx)("input",{className:"block w-full rounded-xl mb-2 p-2 border border-gray-300 bg-gray-400",disabled:!0,value:x,type:"text"}),(0,a.jsx)("label",{children:"Set Quantity"}),(0,a.jsx)("input",{className:"block w-full rounded-xl mb-2 p-2 border border-gray-300 bg-gray-200",value:g,onChange:e=>p(Math.max(0,parseInt(e.target.value,10))),type:"number"}),(0,a.jsx)("div",{className:"pt-[0.8rem]",children:(0,a.jsx)("button",{type:"submit",className:"btn create-btn rounded-xl",children:"Save"})})]})})})]})}},1644:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7437),r=n(8792);n(8403);var s=n(7907);function l(e){let{isAdmin:t}=e,n=(0,s.usePathname)();return console.log(n),(0,a.jsxs)("div",{className:"mb-[3rem] flex mx-auto max-[768px]:gap-5 gap-2 tabs justify-center",children:[(0,a.jsx)(r.default,{className:"/Profile"===n?"active":"",href:"/Profile",children:"Profile"}),t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{className:n.includes("menu-items")?"active":"",href:"/menu-items",children:"Menu Items"}),(0,a.jsx)(r.default,{className:n.includes("users")?"active":"",href:"/users",children:"Users"})]})]})}},7613:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});var a=n(2265);function r(){let[e,t]=(0,a.useState)([]),n=async()=>{try{let e=await fetch("/api/cart-items"),n=await e.json();t(n)}catch(e){console.error(e)}};return(0,a.useEffect)(()=>{n()},[]),{data:e,refreshCart:async()=>{await n()}}}},4329:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(7437),r=n(3173),s=n(2265),l=n(8009),i=n(7907),c=n(1644),u=n(6953),o=n(7613);function d(){let{refreshCart:e}=(0,o.j)(),[t,n]=(0,s.useState)(!1),[d,m]=(0,s.useState)(null);console.log(d);let{id:h}=(0,i.useParams)();async function f(t,a){t.preventDefault(),a={...a,_id:h};let r=new Promise(async(e,t)=>{(await fetch("/api/menu-items",{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}})).ok?e():t()});await l.default.promise(r,{loading:"Saving this drink",success:"Saved",error:"Error"}),n(!0),await e()}async function x(){let e=new Promise(async(e,t)=>{(await fetch("/api/menu-items?_id="+h,{method:"DELETE"})).ok?e():t()});await l.default.promise(e,{loading:"Deleting...",success:"Deleted",error:"Error"}),n(!0)}return(console.log({id:h}),(0,s.useEffect)(()=>{fetch("/api/menu-items").then(e=>{e.json().then(e=>{m(e.find(e=>e._id===h))})})},[]),t)?(0,i.redirect)("/menu-items"):(0,a.jsx)("div",{children:(0,a.jsxs)("section",{className:"mt-8 max-w-lg mx-auto",children:[(0,a.jsx)(c.Z,{isAdmin:!0}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Z,{menuItem:d,onSubmit:f})}),(0,a.jsx)("div",{className:"mt-[10px]",children:(0,a.jsx)(u.Z,{label:"Delete this menu Item",onDelete:x})})]})})}},8403:function(){}},function(e){e.O(0,[792,9,703,971,69,744],function(){return e(e.s=5788)}),_N_E=e.O()}]);