(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[240],{7198:function(e,s,n){Promise.resolve().then(n.bind(n,1430))},7907:function(e,s,n){"use strict";var t=n(5313);n.o(t,"redirect")&&n.d(s,{redirect:function(){return t.redirect}}),n.o(t,"useParams")&&n.d(s,{useParams:function(){return t.useParams}}),n.o(t,"usePathname")&&n.d(s,{usePathname:function(){return t.usePathname}})},1644:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var t=n(7437),a=n(8792);n(8403);var r=n(7907);function i(e){let{isAdmin:s}=e,n=(0,r.usePathname)();return console.log(n),(0,t.jsxs)("div",{className:"mb-[3rem] flex mx-auto max-[768px]:gap-5 gap-2 tabs justify-center",children:[(0,t.jsx)(a.default,{className:"/Profile"===n?"active":"",href:"/Profile",children:"Profile"}),s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{className:n.includes("menu-items")?"active":"",href:"/menu-items",children:"Menu Items"}),(0,t.jsx)(a.default,{className:n.includes("users")?"active":"",href:"/users",children:"Users"})]})]})}},3119:function(e,s,n){"use strict";n.d(s,{U:function(){return a}});var t=n(2265);function a(){let[e,s]=(0,t.useState)(!1),[n,a]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{a(!0),fetch("/api/profile").then(e=>{e.json().then(e=>{s(e),a(!1)})})},[]),{Loading:n,data:e}}},1430:function(e,s,n){"use strict";n.r(s);var t=n(7437),a=n(2265),r=n(1644),i=n(3119),c=n(8792);s.default=()=>{let{loading:e,data:s}=(0,i.U)(),[n,u]=(0,a.useState)([]);return((0,a.useEffect)(()=>{fetch("/api/users").then(e=>{e.json().then(e=>{u(e)})})},[]),e)?"loading user info...":s.admin?(0,t.jsxs)("div",{className:"max-w-2xl mx-auto mt-8",children:[(0,t.jsx)(r.Z,{isAdmin:!0}),(0,t.jsx)("div",{children:(null==n?void 0:n.length)>0&&n.map(e=>(0,t.jsxs)("div",{className:"bg-gray-100 rounded-lg mb-2 items-center flex justify-between px-4 p-1",children:[(0,t.jsxs)("div",{className:"gap-4 grid grid-cols-2 max-[768px]:grid-cols-1 md:grid-cols-2",children:[(0,t.jsx)("div",{className:"text-gray-700",children:e.name?(0,t.jsx)("span",{children:e.name}):(0,t.jsx)("span",{className:"italic",children:"No Name"})}),(0,t.jsx)("span",{className:"text-gray-400",children:e.email})]}),(0,t.jsx)("div",{className:"max-w-md",children:(0,t.jsx)(c.default,{href:"/users/"+e._id,className:"btn px-4 py-2 ",children:"Edit"})})]},e._id))})]}):"Not an Admin.."}},8403:function(){}},function(e){e.O(0,[792,971,69,744],function(){return e(e.s=7198)}),_N_E=e.O()}]);