(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),o=s(17),r=s.n(o),a=s(14),l=s(6),i="LOGIN",d="GET_PRODUCT",u="GET_ITEM",j="ADD_PRODUCT",b="ADD_ITEM",m="UPDATE_PRODUCT",p="UPDATE_ITEM",g="DELETE_PRODUCT",h="DELETE_ITEM",x="DELETE_BULK_ITEM",f="CHANGE_TOTAL_PRODUCT",O="https://agit-hando.herokuapp.com",v=s(19),y=s(5),w=s(1);var N=function(e){return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})};var k=function(e){return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})};var C=function(e){return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,viewBox:"0 0 20 20",fill:"currentColor",children:Object(w.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})};var E=function(e){return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})};var L=function(e){return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})};var S=function(e){return Object(w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})};var T=function(e){return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})};var I=function(e){return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.class,viewBox:"0 0 20 20",fill:"currentColor",children:Object(w.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})},P=s.p+"static/media/cbr-1.4460d53f.jpg",B=s.p+"static/media/cbr-2.5267a349.jpg",R=s.p+"static/media/cbr-3.4cc58de9.jpg";var _=function(){return Object(c.useEffect)((function(){var e=document.getElementsByClassName("carousel-item"),t=e.length,s=0,c=document.getElementsByClassName("button-prev"),n=document.getElementsByClassName("button-next");if(e&&c&&n){var o=function(){for(var t=0;t<e.length;t++)e[t].classList.remove("carousel-item-visible"),e[t].classList.add("carousel-item-hidden");e[s].classList.add("carousel-item-visible")};c[0].addEventListener("click",(function(){s===t-1?s=0:s++,o()})),n[0].addEventListener("click",(function(){0===s?s=t-1:s--,o()}))}}),[]),Object(w.jsxs)("div",{className:"w-full overflow-hidden hide-scroll relative group",id:"banner",children:[Object(w.jsx)("div",{className:"carousel-item carousel-item-visible",children:Object(w.jsx)("img",{src:P,className:"h-screen object-cover",alt:"banner 1"})}),Object(w.jsx)("div",{className:"carousel-item",children:Object(w.jsx)("img",{src:B,className:"h-screen object-cover",alt:"banner 2"})}),Object(w.jsx)("div",{className:"carousel-item",children:Object(w.jsx)("img",{src:R,className:"h-screen object-cover",alt:"banner 3"})}),Object(w.jsxs)("div",{style:{textShadow:"0 0 8px #11182777"},className:"flex w-full justify-between absolute top-1/2 transform -translate-y-1/2",children:[Object(w.jsx)(E,{class:"button-prev transform duration-200 ml-3 sm:-ml-3 group-hover:ml-2 rotate-90"}),Object(w.jsx)(E,{class:"button-next transform duration-200 mr-3 sm:-mr-3 group-hover:mr-2 -rotate-90"})]})]})},M=s(2),q=s(9),D=s.n(q);function H(){return function(e){D()({method:"get",url:"".concat(O,"/user/items"),headers:{access_token:localStorage.access_token}}).then((function(t){var s=t.data;e({type:u,payload:s})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}}function A(e){return function(t){D()({method:"PATCH",url:"".concat(O,"/user/item/").concat(e.id),headers:{access_token:localStorage.access_token},data:e}).then((function(s){t({type:p,payload:{id:e.id,total:e.total}}),t({type:f,payload:e})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}}var F=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")};var U=function(e){var t=e.data,s=Object(y.b)(),n=Object(y.c)((function(e){return e.user.user})),o=Object(y.c)((function(e){return e.item.items})),r=Object(c.useState)(!1),a=Object(M.a)(r,2),l=a[0],i=a[1],d=Object(c.useState)(),u=Object(M.a)(d,2),j=u[0],b=u[1];return Object(w.jsx)(w.Fragment,{children:t&&Object(w.jsxs)("div",{style:{height:"25vw",minHeight:"300px",minWidth:"200px"},className:"group m-auto mb-8 lg:w-5/6 relative rounded flex flex-col bg-white",children:[Object(w.jsx)("div",{className:"h-2/3 rounded-t duration-300",children:Object(w.jsx)("img",{src:t.image,className:"object-cover h-full",alt:"card"})}),Object(w.jsx)("div",{className:"absolute rounded duration-500 sm:group-hover:opacity-0 bg-gradient-to-t from-transparent to-gray-500 opacity-30 w-full h-full"}),Object(w.jsx)("div",{className:"absolute rounded duration-300 opacity-0 sm:group-hover:opacity-40 bg-gray-600 w-full h-full"}),Object(w.jsxs)("div",{className:"font-open-sans text-gray-700 p-3 bg-white rounded-b",children:[Object(w.jsx)("div",{className:"font-bold text-red-600 text-lg",children:t.name}),Object(w.jsx)("div",{className:"text-xs",children:"sparepart"!==t.category||"accessories"!==t.category?"motor ".concat(t.category):t.category}),Object(w.jsx)("div",{}),Object(w.jsxs)("div",{className:"font-roboto-slab mt-3",children:["Rp ",F(t.price)]})]}),Object(w.jsx)("div",{onClick:function(){if(n.name){var e=o.filter((function(e){return e.ProductId===t.id}));if(0===e.length)s((r={ProductId:t.id,total:1},function(e){return new Promise((function(e,t){D()({method:"post",url:"".concat(O,"/user/item"),headers:{access_token:localStorage.access_token},data:r}).then((function(t){e()})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}))})).then((function(){return s(H())}));else{var c=e[0].total+1;s(A({total:c,change:1,symbol:"+",id:e[0].id,ProductId:t.id})),b("already create"),i(!0),setTimeout((function(){i(!1)}),1e3)}}else i(!0),b("not login");var r},className:"cursor-pointer",children:Object(w.jsx)(C,{class:"h-8 w-8 p-1 rounded-full bg-gray-500 sm:bg-gray-600 text-white sm:hover:bg-gray-500\n            absolute top-3 right-2 duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"})}),Object(w.jsxs)(re,{isOpen:l,setIsOpen:function(e){return i(e)},children:["not login"===j&&Object(w.jsx)("div",{className:"font-roboto-slab text-gray-700 my-2",children:"Anda Belum Login"}),"already create"===j&&Object(w.jsx)("div",{className:"font-roboto-slab text-gray-700 my-2",children:"Jumlah Barang Bertambah"})]})]})})},W=s.p+"static/media/cbr-150.a1426d86.png",z=s.p+"static/media/vario-150.97071715.png",V=s.p+"static/media/supra-gtr-150.1b16d8b1.png",G=s.p+"static/media/shockbreaker.ab354c37.png";var J=function(){var e=Object(l.g)(),t=[{name:"sport",img:W},{name:"matic",img:z},{name:"CUB",img:V},{name:"sparepart",img:G}],s=function(t){var s=t.category;return Object(w.jsxs)("div",{onClick:function(){return e.push("/category/".concat(s.name))},className:"m-auto relative group cursor-pointer",children:[Object(w.jsx)("img",{src:s.img,alt:s.name,className:"bg-gray-100 group-hover:bg-gray-700 group-hover:bg-opacity-30 transform duration-300"}),Object(w.jsx)("div",{className:"w-full font-bold mt-4 mb-8 flex justify-center font-open-sans uppercase text-gray-700 text-lg",children:s.name})]})};return Object(w.jsxs)("div",{className:"w-full px-6 sm:px-10 lg:px-14",children:[Object(w.jsx)("div",{className:"text-center font-roboto-slab text-lg font-bold text-red-600 pt-20 pb-12",children:"SHOP BY CATEGORY"}),Object(w.jsx)("div",{className:"grid grid-cols-1 gap-20 lg:gap-16 sm:grid-cols-2 lg:grid-cols-4",children:t.map((function(e){return Object(w.jsx)(s,{category:e})}))})]})},K=s.p+"static/media/honda-logo.4d6d1660.png",Q=s.p+"static/media/honda-logo1.2d3223ea.png";var Y=function(){var e=Object(l.g)(),t=Object(y.c)((function(e){return e.item.items}));return Object(w.jsxs)("div",{onClick:function(){return e.push("/cart")},className:"relative mr-4 sm:mr-6 md:mr-8 cursor-pointer group",children:[Object(w.jsx)(C,{class:"h-8 w-8 p-1 text-white rounded-full bg-red-600 group-hover:bg-red-400 duration-200"}),Object(w.jsx)("div",{className:"w-4 h-4 text-white rounded-full bg-green-500 group-hover:bg-green-400 text-center font-open-sans\n        absolute right-0 top-0 text-xs transform translate-x-1 -translate-y-1 duration-200",children:t.length})]})},$=s(7);var X=function(e){var t=e.buttons,s=e.clicked,c=function(e){return Object(w.jsx)("div",{onClick:function(){return s(e.title)},className:"py-2 px-4 w-52 duration-300 group hover:bg-red-600 font-roboto-slab flex justify-between items-center cursor-pointer",children:Object(w.jsx)("div",{className:"text-red-600 group-hover:text-gray-50",children:e.title})})};return Object(w.jsx)($.b,{as:"div",className:"relative",children:function(e){var s=e.open;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)($.b.Button,{className:"flex items-center group focus:outline-none",children:[Object(w.jsx)(I,{class:"h-8 w-8 p-1 text-gray-50 rounded-full bg-red-600 group-hover:bg-red-400 duration-200"}),Object(w.jsx)(E,{class:"".concat(s?"-rotate-180 transform":null,"text-red-600 h-4 w-4 transform duration-200")})]}),Object(w.jsx)($.c,{show:s,enter:"transition-opacity duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(w.jsx)($.b.Items,{static:!0,className:"absolute right-0 mt-3 origin-top-right border border-gray-300 bg-gray-50 focus:outline-none",children:t.map((function(e,t){return Object(w.jsx)($.b.Item,{children:Object(w.jsx)(c,{title:e})},t)}))})})]})}})};var Z=function(e){var t=e.buttons,s=e.clicked,c=function(e){return Object(w.jsx)("div",{onClick:function(){return s(e.title)},className:"py-2 px-4 w-52 duration-300 group hover:bg-red-600 font-roboto-slab flex justify-between items-center cursor-pointer",children:Object(w.jsx)("div",{className:"text-red-600 group-hover:text-gray-50",children:e.title})})};return Object(w.jsx)($.b,{as:"div",className:"relative",children:function(e){var s=e.open;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)($.b.Button,{className:"flex items-center group focus:outline-none",children:Object(w.jsx)(k,{class:"h-8 w-8 block lg:hidden mr-4 sm:mr-6 md:mr-8 hover:text-red-400"})}),Object(w.jsx)($.c,{show:s,enter:"transition-opacity duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(w.jsx)($.b.Items,{static:!0,className:"absolute right-0 mt-3 origin-top-right border border-gray-300 bg-gray-50 focus:outline-none",children:t.map((function(e,t){return Object(w.jsx)($.b.Item,{children:Object(w.jsx)(c,{title:e})},t)}))})})]})}})};var ee=function(){var e=Object(l.g)(),t=Object(y.b)(),s=["sport","matic","cub","sparepart","accessories"],n=Object(c.useState)(""),o=Object(M.a)(n,2),r=o[0],a=o[1],d=Object(y.c)((function(e){return e.user.user}));return Object(c.useEffect)((function(){"Logout"===r?(localStorage.clear(),t({type:i,payload:{}})):"Register"===r||"Login"===r?e.push("/".concat(r.toLowerCase())):"sport"!==r&&"matic"!==r&&"cub"!==r&&"sparepart"!==r&&"accessories"!==r||e.push("/category/".concat(r))}),[r]),Object(c.useEffect)((function(){var e=document.getElementById("banner"),t=document.getElementById("category-banner"),s=document.getElementById("navbar");if(s&&e){window.addEventListener("scroll",(function(){e.getBoundingClientRect().top<0?(s.classList.add("-translate-y-40","bg-opacity-30"),s.classList.remove("bg-opacity-50")):setTimeout((function(){s.classList.remove("-translate-y-40","bg-opacity-30"),s.classList.add("bg-opacity-50")}),400),e.getBoundingClientRect().bottom<window.innerHeight&&setTimeout((function(){s.classList.remove("-translate-y-40")}),400)}))}if(s&&t){window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(s.classList.add("-translate-y-40","bg-opacity-30"),s.classList.remove("bg-opacity-50")):setTimeout((function(){s.classList.remove("-translate-y-40","bg-opacity-30"),s.classList.add("bg-opacity-50")}),400),t.getBoundingClientRect().bottom<window.innerHeight&&setTimeout((function(){s.classList.remove("-translate-y-40")}),400)}))}}),[]),Object(w.jsxs)("div",{id:"navbar",className:"bg-white text-red-600 flex fixed w-full backdrop-filter bg-opacity-50\n      backdrop-blur transform duration-300 z-20 top-0 items-center py-2 sm:py-4 px-6 sm:px-10 lg:px-14",children:[Object(w.jsxs)("div",{onClick:function(){return e.push("/")},className:"cursor-pointer",children:[Object(w.jsx)("img",{src:K,alt:"logo honda",className:"w-12 h-auto block sm:hidden"}),Object(w.jsx)("img",{src:Q,alt:"logo honda",className:"w-48 h-auto hidden sm:block transform -translate-y-1"})]}),Object(w.jsx)("ul",{className:"font-open-sans font-bold ml-12 hidden w-96 lg:flex justify-between",children:s.map((function(t,s){return Object(w.jsx)("li",{onClick:function(){return e.push("/category/".concat(t))},className:"hover:text-red-400 font-open-sans cursor-pointer uppercase",children:t},s)}))}),Object(w.jsxs)("div",{className:"flex items-center ml-auto",children:[Object(w.jsx)(Z,{buttons:s,clicked:function(e){return a(e)}}),Object(w.jsx)(Y,{}),Object(w.jsx)(X,{buttons:d.name?["Logout"]:["Register","Login"],clicked:function(e){return a(e)}})]})]})};var te=function(){return Object(w.jsxs)("div",{className:"flex justify-center mt-24 mb-4",children:[Object(w.jsx)("div",{className:"text-red-500 font-montserrat mr-2",children:"\xa9 2021"}),Object(w.jsx)("div",{className:"text-red-500 font-montserrat font-semibold",children:"Hando Motor"})]})};var se=function(e){var t=e.dark,s=e.title,n=Object(y.c)((function(e){return e.product.products})),o=Object(c.useState)([]),r=Object(M.a)(o,2),a=r[0],l=r[1];return Object(c.useEffect)((function(){if("product"!==s){var e=n.filter((function(e){return e.category===s.split(" ")[0]}));l(e)}else if(n.length>0){for(var t=n.length-1,c=[],o=t;o>t-8;o--)c.push(n[o]);l(c)}}),[s,n]),Object(w.jsxs)("div",{className:"".concat(t?"bg-gray-100":"bg-white"," px-6 sm:px-10 lg:px-14"),children:[Object(w.jsx)("div",{className:"text-center font-roboto-slab text-lg font-bold text-red-600 mt-16 pt-8 pb-12",children:"".concat(s.toUpperCase())}),Object(w.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:a.length>0&&a.map((function(e,t){return Object(w.jsx)(U,{data:e},t)}))})]})},ce=s.p+"static/media/visor.20e651ac.jpg",ne=s.p+"static/media/cart.8d8861fa.jpg";var oe=function(){var e=Object(l.h)().category;return Object(w.jsxs)("div",{className:"w-full overflow-hidden hide-scroll relative",id:"category-banner",children:[Object(w.jsx)("div",{className:"flex justify-center",children:Object(w.jsx)("img",{src:"sport"===e?W:"matic"===e?z:"cub"===e?V:"sparepart"===e?G:"accessories"===e?ce:ne,className:"h-screen object-cover",alt:"banner 1"})}),Object(w.jsx)("div",{className:"absolute top-1/2 transform -translate-y-1/2 flex w-full justify-center",children:Object(w.jsx)("p",{style:{textShadow:"0 0 8px #11182777",letterSpacing:"1rem"},className:"font-roboto-slab text-white text-2xl sm:text-5xl",children:e?"sparepart"===e||"accessories"===e?"".concat(e):"Motor ".concat(e):"Cart"})})]})};var re=function(e){var t=e.setIsOpen,s=e.isOpen;function n(){t(!1)}return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)($.c,{appear:!0,show:s,as:c.Fragment,children:Object(w.jsx)($.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:n,open:!0,children:Object(w.jsxs)("div",{className:"min-h-screen px-4 text-center bg-gray-900 bg-opacity-70",children:[Object(w.jsx)($.c.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(w.jsx)($.a.Overlay,{className:"fixed inset-0"})}),Object(w.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(w.jsx)($.c.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(w.jsxs)("div",{style:{minWidth:"320px"},className:"inline-block bg-gray-100 w-full max-w-max p-6 my-8 text-left align-middle transition-all transform shadow-xl rounded-sm",children:[Object(w.jsx)("div",{className:"absolute right-0 top-0 cursor-pointer transform",onClick:n,children:Object(w.jsx)(L,{class:"h-7 w-7 p-0.5 transform bg-pink-700 hover:bg-pink-600 text-gray-100 m-0.5 rounded"})}),e.children,Object(w.jsx)("button",{className:"absolute"})]})})]})})})})};var ae=function(e){var t=e.data,s=Object(y.b)(),n=Object(c.useState)(!1),o=Object(M.a)(n,2),r=o[0],a=o[1];return Object(w.jsxs)("div",{className:"border-b-2 mt-8 border-red-600 w-full relative text-sm sm:text-base",children:[Object(w.jsx)("div",{onClick:function(){return a(!0)},children:Object(w.jsx)(L,{class:"h-4 w-4 sm:h-6 sm:w-6 absolute top-0 right-0 cursor-pointer"})}),Object(w.jsxs)("div",{className:"grid grid-cols-4 items-center",children:[Object(w.jsx)("img",{src:t&&t.Product.image,className:"w-24 m-auto",alt:"cart"}),Object(w.jsxs)("div",{className:"m-auto",children:[Object(w.jsx)("div",{className:"md:text-lg",children:t.Product.name}),Object(w.jsxs)("div",{className:"font-roboto-slab",children:["Rp ",F(t.Product.price)]})]}),Object(w.jsxs)("div",{className:"flex justify-center items-center",children:[Object(w.jsx)("div",{onClick:function(){s(A({total:t.total-1,change:1,symbol:"-",id:t.id,ProductId:t.ProductId}))},className:"mr-2 md:mr-4 text-lg cursor-pointer",children:"-"}),Object(w.jsx)("div",{children:t.total}),Object(w.jsx)("div",{onClick:function(){s(A({total:t.total+1,change:1,symbol:"+",id:t.id,ProductId:t.ProductId}))},className:"ml-2 md:ml-4 text-lg cursor-pointer",children:"+"})]}),Object(w.jsxs)("div",{className:"m-auto",children:["Rp ",F(t.Product.price*t.total)]})]}),Object(w.jsxs)(re,{isOpen:r,setIsOpen:function(e){return a(e)},children:[Object(w.jsxs)("div",{className:"text-gray-800 font-roboto-slab my-4",children:["Hapus ",Object(w.jsx)("b",{children:t.Product.name}),"?"]}),Object(w.jsx)("div",{className:"w-full flex justify-end",children:Object(w.jsx)("div",{onClick:function(){var e;s((e=t.id,function(t){D()({method:"DELETE",url:"".concat(O,"/user/item/").concat(e),headers:{access_token:localStorage.getItem("access_token")}}).then((function(s){t({type:h,payload:{id:e}})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))})),a(!1)},className:"ml-auto flex py-2 px-4 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none cursor-pointer",children:Object(w.jsx)("div",{children:"Delete"})})})]})]})};var le=function(){return Object(w.jsxs)("div",{id:"dashboard",children:[Object(w.jsx)(ee,{}),Object(w.jsx)(_,{}),Object(w.jsx)(J,{}),Object(w.jsx)(se,{dark:!0,title:"product"}),Object(w.jsx)(te,{})]})},ie=s(37);var de=function(){var e=Object(y.c)((function(e){return e.item.items})),t=Object(c.useState)(!1),s=Object(M.a)(t,2),n=s[0],o=s[1],r=Object(y.b)(),a=Object(c.useMemo)((function(){var t,s=0,c=Object(ie.a)(e);try{for(c.s();!(t=c.n()).done;){var n=t.value;s+=n.Product.price*n.total}}catch(o){c.e(o)}finally{c.f()}return s}),[e]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(ee,{}),Object(w.jsx)(oe,{}),Object(w.jsxs)("div",{className:"grid grid-cols-3 gap-12 px-6 sm:px-10 lg:px-14 font-roboto-slab text-red-600",children:[Object(w.jsxs)("div",{className:"col-span-3 lg:col-span-2 w-full",children:[Object(w.jsx)("div",{className:"text-lg font-bold mt-16 pt-8 pb-12",children:"SHOPPING CART"}),Object(w.jsxs)("div",{className:"w-full",children:[Object(w.jsxs)("div",{className:"grid grid-cols-4 text-center text-sm sm:text-base",children:[Object(w.jsx)("div",{children:"Item"}),Object(w.jsx)("div",{children:"Description"}),Object(w.jsx)("div",{children:"Quantity"}),Object(w.jsx)("div",{children:"Total"})]}),e.length>0&&e.map((function(e,t){return Object(w.jsx)(ae,{data:e},t)}))]})]}),Object(w.jsxs)("div",{className:"col-span-3 lg:col-span-1",children:[Object(w.jsx)("div",{className:"text-lg font-bold sm:mt-16 pt-8 pb-12",children:"ORDER SUMMARY"}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"grid grid-cols-5 text-center text-sm sm:text-base",children:[Object(w.jsx)("div",{className:"col-span-2",children:"Item"}),Object(w.jsx)("div",{className:"col-span-1",children:"Quantity"}),Object(w.jsx)("div",{className:"col-span-2",children:"Total"})]}),Object(w.jsx)("div",{style:{minHeight:"320px"},children:e.map((function(e){return Object(w.jsx)("div",{className:"mt-12 w-full",children:Object(w.jsxs)("div",{className:"w-full grid grid-cols-5 text-center",children:[Object(w.jsxs)("div",{className:"col-span-2 text-left m-auto",children:[Object(w.jsx)("div",{children:e.Product.name}),Object(w.jsxs)("div",{children:["Rp ",F(e.Product.price)]})]}),Object(w.jsxs)("div",{className:"col-span-1",children:["x",e.total]}),Object(w.jsxs)("div",{className:"col-span-2",children:["Rp ",F(e.Product.price*e.total)]})]})})}))}),Object(w.jsxs)("div",{className:"border-t-2 border-red-600 grid grid-cols-5 text-center",children:[Object(w.jsx)("div",{className:"col-span-3 text-left m-6",children:"Total"}),Object(w.jsxs)("div",{className:"col-span-2 mt-6",children:["Rp ",F(a)]})]})]}),Object(w.jsx)("div",{className:"w-full flex mt-12",children:Object(w.jsx)("button",{onClick:function(){o(!0)},className:"ml-auto bg-red-600 hover:bg-red-500 text-white focus:outline-none transform duration-200 py-2 w-24 rounded",children:"Beli"})})]})]}),Object(w.jsx)(te,{}),Object(w.jsx)(re,{isOpen:n,setIsOpen:function(e){return o(e)},children:Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"text-gray-800 font-roboto-slab my-4",children:"Beli semua barang?"}),Object(w.jsx)("div",{className:"flex w-full justify-end",children:Object(w.jsx)("div",{onClick:function(){r((function(e){D()({method:"DELETE",url:"".concat(O,"/user/items"),headers:{access_token:localStorage.getItem("access_token")}}).then((function(t){e({type:x,payload:null})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))})),o(!1)},className:"ml-auto flex py-2 px-4 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none cursor-pointer",children:"Buy"})})]})})]})};var ue=function(e){var t=e.type,s=e.placeholder,n=e.value,o=e.setValue,r=e.style,a=e.label,l=Object(c.useState)("password"),i=Object(M.a)(l,2),d=i[0],u=i[1];return Object(w.jsxs)("div",{className:"flex flex-col mt-2 w-full",children:["enter"!==r&&Object(w.jsx)("label",{className:"text-gray-700 font-sans mb-1",children:a}),Object(w.jsxs)("div",{className:"".concat("enter"===r?"bg-gray-500 bg-opacity-60":"bg-white"," flex items-center rounded-md"),children:[Object(w.jsx)("input",{type:"password"===t?d:t,value:n,className:"".concat("password"!==t?"w-full":"w-11/12"," focus:outline-none p-4 font-open-sans \n          ").concat("enter"===r?"text-gray-50 placeholder-gray-300":"text-gray-700 placeholder-gray-500"," \n          font-light text-sm rounded-md bg-transparent mt-1"),placeholder:s,onChange:function(e){o&&o(e.target.value)}}),"password"===t&&Object(w.jsx)("div",{className:"cursor-pointer w-1/12",onClick:function(){u("password"===d?"text":"password")},children:"password"===d?Object(w.jsx)(S,{class:"h-5 w-5 text-white text-opacity-90"}):Object(w.jsx)(T,{class:"h-5 w-5 text-white text-opacity-90"})})]})]})};var je=function(e){var t=Object(l.g)(),s=Object(y.b)(),n=Object(c.useState)(!1),o=Object(M.a)(n,2),r=o[0],a=o[1],d=Object(c.useState)(!1),u=Object(M.a)(d,2),j=u[0],b=u[1],m=Object(c.useState)(),p=Object(M.a)(m,2),g=p[0],h=p[1],x=Object(c.useState)(),f=Object(M.a)(x,2),N=f[0],k=f[1],C=Object(c.useState)(),E=Object(M.a)(C,2),L=E[0],S=E[1],T=e.title;return Object(w.jsxs)("div",{className:"w-full h-screen flex justify-center",children:[Object(w.jsx)("img",{src:R,alt:"cover",className:"h-screen object-cover"}),Object(w.jsx)("div",{className:"absolute top-0 opacity-20 bg-gray-900 w-full h-full"}),Object(w.jsx)("div",{className:"absolute top-0 bg-gradient-to-t from-transparent to-gray-500 opacity-30 w-full h-full"}),Object(w.jsx)("div",{className:"absolute top-3 right-1 sm:top-8 sm:right-8",children:"Login"===T&&Object(w.jsx)(X,{buttons:["Admin","User"],clicked:function(e){a("Admin"===e)}})}),Object(w.jsxs)("div",{className:"absolute top-1/2 transform -translate-y-1/2 w-80",children:[Object(w.jsxs)("div",{className:"text-white text-opacity-90 font-roboto-slab text-3xl mb-6",children:[T," ","Register"!==T?r?"Admin":"User":null]}),"Register"===T&&Object(w.jsx)(ue,{placeholder:"your username",type:"text",value:g,setValue:function(e){return h(e)},style:"enter"}),Object(w.jsx)(ue,{placeholder:"your email address",type:"email",value:N,setValue:function(e){return k(e)},style:"enter"}),Object(w.jsx)(ue,{placeholder:"your password",type:"password",value:L,setValue:function(e){return S(e)},style:"enter"}),Object(w.jsx)("div",{className:"w-full flex justify-end mt-4",children:Object(w.jsx)("button",{onClick:function(){if("Login"===T){var e={name:g,email:N,password:L,role:""};e.role=r?"admin":"user",s((c=e,function(e){return new Promise((function(t,s){D()({method:"POST",url:"".concat(O,"/").concat(c.role,"/login"),data:c}).then((function(s){var c=s.data;localStorage.setItem("access_token",c);var n=Object(v.a)(c);e({type:i,payload:n}),t()})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config),s()}))}))})).then((function(e){t.push("/".concat(r?"admin":"")),s(H())}))}else{s(function(e){return function(t){return new Promise((function(t,s){D()({method:"POST",url:"".concat(O,"/user/register"),data:e}).then((function(e){t()})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config),s()}))}))}}({name:g,email:N,password:L})).then((function(e){b(!0)}))}var c},className:"bg-red-600 hover:bg-gray-50 text-white hover:text-red-600\n            w-32 py-2 rounded duration-200 font-open-sans focus:outline-none",children:"".concat("Login"===T?"Masuk":"Daftar")})}),Object(w.jsx)("div",{className:"w-full flex justify-center mt-2 text-white",children:Object(w.jsxs)("p",{children:["".concat("Login"===T?"Belum memiliki akun? silahkan daftar ":"Sudah memiliki akun? silahkan masuk "),Object(w.jsx)("span",{onClick:function(){return t.push("/".concat("Login"===T?"register":"login"))},className:"text-indigo-400 cursor-pointer",children:"disini"})]})})]}),Object(w.jsx)(re,{isOpen:j,setIsOpen:function(e){return b(e)},children:Object(w.jsx)("div",{className:"flex w-full justify-center",children:Object(w.jsxs)("div",{className:"my-4 w-72",children:["Registrasi anda telah berhasil, silahkan login"," ",Object(w.jsx)("span",{onClick:function(){return t.push("/login")},className:"cursor-pointer text-indigo-600",children:"disini"})]})})})]})};var be=function(e){var t=e.label,s=e.options,c=e.value,n=e.setValue;return Object(w.jsxs)("div",{className:"flex flex-col mt-2 w-full",children:[Object(w.jsx)("label",{className:"text-gray-700 font-sans mb-1",children:t}),Object(w.jsxs)("select",{className:"focus:outline-none py-3 px-2 font-roboto-slab font-light text-sm rounded-md bg-gray-50 mt-1",value:c,onChange:function(e){n(e.target.value)},children:[Object(w.jsxs)("option",{value:null,children:["--",t,"--"]}),s.map((function(e,t){return Object(w.jsx)("option",{className:"text-gray-800 font-roboto-slab font-light text-sm",value:e,children:e},t)}))]})]})};var me=function(){return Object(w.jsx)(je,{title:"Login"})};var pe=function(){return Object(w.jsx)(je,{title:"Register"})};var ge=function(){var e=Object(l.h)().category;return Object(w.jsxs)("div",{children:[Object(w.jsx)(ee,{}),Object(w.jsx)(oe,{}),Object(w.jsx)(se,{dark:!1,title:"".concat(e," products")}),Object(w.jsx)(te,{})]})},he=s(38),xe=s.n(he);function fe(){return function(e){D()({method:"get",url:"".concat(O,"/user/products")}).then((function(t){var s=t.data;e({type:d,payload:s.products})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}}var Oe=function(){var e=Object(y.c)((function(e){return e.product.products})),t=Object(y.b)(),s=Object(c.useState)(!1),n=Object(M.a)(s,2),o=n[0],r=n[1],a=Object(c.useState)(),d=Object(M.a)(a,2),u=d[0],b=d[1],p=Object(c.useState)(),h=Object(M.a)(p,2),x=h[0],f=h[1],v=Object(c.useState)(),k=Object(M.a)(v,2),C=k[0],E=k[1],L=Object(c.useState)(),S=Object(M.a)(L,2),T=S[0],I=S[1],P=Object(c.useState)(),B=Object(M.a)(P,2),R=B[0],_=B[1],q=Object(c.useState)(),H=Object(M.a)(q,2),A=H[0],F=H[1],U=Object(c.useState)(),W=Object(M.a)(U,2),z=W[0],V=W[1],G=Object(l.g)();Object(c.useEffect)((function(){t(fe())}),[]),Object(c.useEffect)((function(){u&&(f(u.name),_(u.price),E(u.image),F(u.total),I(u.category))}),[u]);var J=[{name:"Id",selector:"id",minWidth:"70px",wrap:!0,sortable:!0},{name:"Nama",selector:"name",minWidth:"200px",wrap:!0,sortable:!0},{name:"Harga",selector:"price",minWidth:"150px",wrap:!0,sortable:!0},{name:"Kategori",selector:"category",minWidth:"150px",wrap:!0,sortable:!0},{name:"Kuantitas",selector:"total",minWidth:"70px",wrap:!0,sortable:!0},{name:"Aksi",allowOverflow:!0,width:"200px",button:!0,cell:function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("button",{onClick:function(){b(e),r(!0)},className:"py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none mr-4",children:"Edit"}),Object(w.jsx)("button",{onClick:function(){V(e),r(!0)},className:"py-2 px-4 rounded bg-pink-600 text-white hover:bg-pink-700 focus:outline-none",children:"Hapus"})]})}}];return Object(w.jsxs)("div",{className:"w-full flex flex-col justify-center items-center",children:[Object(w.jsx)("div",{className:"w-4/5 flex justify-end mt-8",children:Object(w.jsx)("button",{onClick:function(){localStorage.clear(),t({type:i,payload:{}}),G.push("/")},className:"bg-red-600 hover:text-gray-50 text-white hover:bg-red-500\n        w-32 py-2 rounded duration-200 font-open-sans focus:outline-none",children:"Logout"})}),Object(w.jsxs)("div",{className:"w-4/5",children:[Object(w.jsx)("div",{className:"flex w-full justify-end my-8",children:Object(w.jsxs)("div",{onClick:function(){b(),V(),r(!0)},className:"ml-auto flex py-2 pr-2 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none cursor-pointer",children:[Object(w.jsx)(N,{class:"h-6 w-6"}),Object(w.jsx)("div",{children:"Produk"})]})}),Object(w.jsx)(xe.a,{noHeader:!0,columns:J,data:e,customStyles:{rows:{style:{minHeight:"56px"}},headCells:{style:{fontSize:"14px",color:"#E5E7EB",backgroundColor:"#374151",fontFamily:"'Roboto Slab', serif",textTransform:"uppercase"}},cells:{style:{fontSize:"14px",color:"#374151",backgroundColor:"#E5E7EB",fontFamily:"'Roboto Slab', serif"}},pagination:{style:{marginTop:"1rem",color:"#374151",backgroundColor:"#E5E7EB"}}},pagination:!0})]}),Object(w.jsx)(te,{}),Object(w.jsxs)(re,{isOpen:o,setIsOpen:function(e){return r(e)},children:[z?Object(w.jsxs)("div",{className:"text-gray-800 font-roboto-slab",children:["Hapus ",z.name,"?"]}):Object(w.jsxs)("div",{children:[Object(w.jsx)(ue,{type:"text",label:"Name",placeholder:"product name",value:x,setValue:function(e){return f(e)}}),Object(w.jsx)(ue,{type:"text",label:"Image URL",placeholder:"product image url",value:C,setValue:function(e){return E(e)}}),Object(w.jsx)(ue,{type:"number",label:"Price",placeholder:"product price",value:R,setValue:function(e){return _(e)}}),Object(w.jsx)(ue,{type:"number",label:"Quantity",placeholder:"product quantity",value:A,setValue:function(e){return F(e)}}),Object(w.jsx)(be,{label:"Category",options:["sport","matic","cub","sparepart","accessories"],value:T,setValue:function(e){return I(e)}})]}),Object(w.jsx)("div",{className:"flex w-full justify-end mt-4",children:Object(w.jsx)("div",{onClick:function(){var e;u?(t((e={name:x,price:R,category:T,total:A,image:C,id:u.id},function(t){D()({method:"PUT",url:"".concat(O,"/admin/product/").concat(e.id),headers:{access_token:localStorage.access_token},data:e}).then((function(e){var s=e.data;t({type:m,payload:s})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))})),b()):z?(t(function(e){return function(t){D()({method:"DELETE",url:"".concat(O,"/admin/product/").concat(e),headers:{access_token:localStorage.access_token}}).then((function(s){t({type:g,payload:{id:e}})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}}(z.id)),V()):t(function(e){return function(t){D()({method:"post",url:"".concat(O,"/admin/product"),headers:{access_token:localStorage.access_token},data:e}).then((function(e){var s=e.data;t({type:j,payload:s})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))}}({name:x,price:R,category:T,total:A,image:C})),f(),_(),F(),I(),E(),r(!1)},className:"ml-auto flex py-2 px-4 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none cursor-pointer",children:Object(w.jsx)("div",{children:u?"Update":z?"Delete":"Create"})})})]})]})};var ve=function(){var e=[{path:"/login",Component:me},{path:"/register",Component:pe}],t=[{path:"/category/:category",Component:ge},{path:"/cart",Component:de},{path:"/admin",Component:Oe},{path:"/",Component:le}],s=Object(y.b)(),n=Object(y.c)((function(e){return e.user.user}));return Object(c.useEffect)((function(){if(localStorage.access_token){var e=Object(v.a)(localStorage.access_token);s({type:i,payload:e})}s(fe()),s(H())}),[]),Object(w.jsx)(a.a,{basename:"/client",children:Object(w.jsxs)(l.d,{children:[e.map((function(e,t){var s=e.path,c=e.Component;return Object(w.jsx)(l.b,{exact:!0,path:s,render:function(){return n.name?Object(w.jsx)(l.a,{to:"/"}):Object(w.jsx)(c,{})}},t)})),t.map((function(e,t){var s=e.path,c=e.Component;return Object(w.jsx)(l.b,{exact:!0,path:s,render:function(){return"admin"===n.role?"/admin"!==s?Object(w.jsx)(l.a,{to:"/admin"}):Object(w.jsx)(c,{}):"/cart"===s?n.name?Object(w.jsx)(c,{}):Object(w.jsx)(l.a,{to:"/"}):"/admin"===s?Object(w.jsx)(l.a,{to:"/"}):Object(w.jsx)(c,{})}},t)}))]})})},ye=s(21),we=s(4),Ne={items:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var s=Object(we.a)(Object(we.a)({},e),{},{items:t.payload.items});return s;case b:var c=Object(we.a)(Object(we.a)({},e),{},{items:e.items.concat(t.payload)});return c;case p:var n=Object(we.a)({},e),o=n.items,r=function(e){return e.id===t.payload.id},a=function(e){return e.id!==t.payload.id},l=o.findIndex(r);o[l].total=t.payload.total;var i=Object(we.a)(Object(we.a)({},e),{},{items:e.items.filter(a).concat(o[l])});return i;case h:var d=function(e){return e.id!==t.payload.id},j=Object(we.a)(Object(we.a)({},e),{},{items:e.items.filter(d)});return j;case x:var m=Object(we.a)(Object(we.a)({},e),{},{items:[]});return m;default:return e}},Ce={products:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var s=Object(we.a)(Object(we.a)({},e),{},{products:t.payload});return s;case j:var c=Object(we.a)(Object(we.a)({},e),{},{products:e.products.concat(t.payload)});return c;case m:var n=Object(we.a)({},e),o=n.products,r=function(e){return e.id===t.payload.id},a=function(e){return e.id!==t.payload.id},l=o.findIndex(r);o[l]=t.payload;var i=Object(we.a)(Object(we.a)({},e),{},{products:e.products.filter(a).concat(o[l])});return i;case g:var u=function(e){return e.id!==t.payload.id},b=Object(we.a)(Object(we.a)({},e),{},{products:e.products.filter(u)});return b;case f:var p=Object(we.a)({},e),h=p.products,x=function(e){return e.id===t.payload.id},O=function(e){return e.id!==t.payload.id},v=h.findIndex(x);h[v].total=h[v].total-t.payload;var y=Object(we.a)(Object(we.a)({},e),{},{products:e.products.filter(O).concat(h[v])});return y;default:return e}},Le={user:{}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(we.a)(Object(we.a)({},e),{},{user:t.payload});default:return e}},Te=s(42),Ie=Object(ye.b)({item:ke,product:Ee,user:Se}),Pe=Object(ye.c)(Ie,Object(ye.a)(Te.a));var Be=function(){return Object(w.jsx)(y.a,{store:Pe,children:Object(w.jsx)(ve,{})})};s(70);r.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(Be,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.cf651473.chunk.js.map