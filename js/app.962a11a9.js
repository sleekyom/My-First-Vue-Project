(function(t){function e(e){for(var r,n,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/My-First-Vue-Project/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0016":function(t,e,a){},"00f2":function(t,e,a){},"08e7":function(t,e,a){},"09ef":function(t,e,a){},"21a8":function(t,e,a){"use strict";var r=a("7b14"),o=a.n(r);o.a},"2b2e":function(t,e,a){},"362e":function(t,e,a){"use strict";var r=a("09ef"),o=a.n(r);o.a},"3de2":function(t,e,a){},4417:function(t,e,a){"use strict";var r=a("08e7"),o=a.n(r);o.a},"481a":function(t,e,a){},"4e35":function(t,e,a){"use strict";var r=a("b3c0"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-container",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("Header")],1)],1),a("b-row",[a("b-col",{staticClass:"cat-menu",attrs:{cols:"3"}},[a("CategoriesMenu")],1),a("b-col",{staticClass:"main-page",attrs:{cols:"9"}},[a("router-view",{key:t.$route.fullPath})],1)],1),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("Footer")],1)],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{staticClass:"logo",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-md fa-american-sign-language-interpreting"}),t._v(" Shopgrad")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{to:"/cart"}},[a("i",{staticClass:"fas fa-shopping-cart"},[t._v(" Cart")])]),a("b-nav-item",{attrs:{to:"/orderlisting"}},[t._v("My order")]),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("em",[t._v("User")])]},proxy:!0}])},[a("b-dropdown-item",{attrs:{to:"/profile"}},[t._v("Profile")])],1)],1)],1)],1)],1)},i=[],c={name:"Header"},u=c,l=(a("362e"),a("2877")),d=Object(l["a"])(u,n,i,!1,null,"b9787c8c",null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-menu"},[a("b-nav",{attrs:{vertical:""}},t._l(t.categories,(function(e){return a("b-nav-item",{key:e.alias,staticClass:"item",attrs:{to:"/categories/"+e.alias}},[t._v(t._s(e.title))])})),1)],1)},h=[],v=a("bc3a"),m=a.n(v),_={name:"CategoriesMenu",data:function(){return{categories:[]}},mounted:function(){var t=this;m.a.get("https://euas.person.ee/categories").then((function(e){t.categories=e.data}))}},b=_,g=(a("5e9a"),Object(l["a"])(b,f,h,!1,null,"255596b8",null)),y=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("div",{staticClass:"icon-container"},[a("i",{staticClass:"fab fa-facebook-f fa-lg"}),a("i",{staticClass:"fab fa-instagram fa-lg"}),a("i",{staticClass:"fab fa-twitter fa-lg"}),a("p",[t._v("© Copyright 2020 Shopgrad Studio")])])])}],w={name:"Footer",components:{}},P=w,k=(a("a799"),Object(l["a"])(P,C,$,!1,null,"3aef9f9c",null)),x=k.exports,O={name:"App",components:{Header:p,CategoriesMenu:y,Footer:x}},A=O,S=(a("4417"),Object(l["a"])(A,o,s,!1,null,"6edd32a6",null)),I=S.exports,j=a("5f5b"),q=(a("f9e3"),a("2dd8"),a("8c4f")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-page"},[a("ProductPanel",{attrs:{title:"Recommended",section:"recommended"}}),a("ProductPanel",{attrs:{title:"BuyNow",section:"buynow"}}),a("ProductPanel",{attrs:{title:"TopSelling",section:"topselling"}}),a("router-view")],1)},T=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-panel"},[a("h3",[t._v(t._s(t.title))]),a("b-alert",{attrs:{variant:"info",show:t.showConfirmation}},[a("h4",{staticClass:"alert-heading"},[t._v("Well")]),a("p",[t._v("Item successfully added to cart")]),a("p",[a("b-button",{staticClass:"mr-2",attrs:{variant:"success",to:"/cart"}},[t._v("Checkout")]),a("b-button",{attrs:{variant:"info",to:"/"},on:{click:t.closeAlert}},[t._v("Continue Shopping")])],1)]),a("b-card-group",{attrs:{deck:""}},t._l(t.products,(function(e){return a("ProductCard",{key:e.id,attrs:{product:e},on:{notify:t.showAlert}})})),1)],1)},F=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"mb-2 product-card",staticStyle:{"max-width":"20rem"},attrs:{title:t.product.title,"img-src":t.product.image,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v(" "+t._s(t.product.description)+" ")]),a("b-button",{attrs:{to:"/products/"+t.product.id,size:"sm"}},[t._v("More details")]),a("span",{staticClass:"ml-2"},[a("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){return t.addToCart()}}},[t._v("Buy now")])],1)],1)},N=[],B={name:"ProductCard",props:{product:Object},methods:{addToCart:function(){this.$root.$data.cart.items||(this.$root.$data.cart.items=[]),this.$root.$data.cart.items.push({productId:this.product.id,qty:1,optionCode:this.product.options[0].code,optionImage:this.product.options[0].image,price:this.product.options[0].price,total:this.product.options[0].price}),this.$root.$data.saveCart(),this.$emit("notify")}}},D=B,H=(a("e449"),Object(l["a"])(D,z,N,!1,null,"556d636a",null)),Q=H.exports,U={name:"ProductPanel",props:{title:String,categoryAlias:String,section:String},components:{ProductCard:Q},data:function(){return{products:[],showConfirmation:!1}},methods:{showAlert:function(){this.showConfirmation=!0},closeAlert:function(){this.showConfirmation=!1}},mounted:function(){var t=this;this.categoryAlias?m.a.get("https://euas.person.ee/categories/"+this.categoryAlias+"/products").then((function(e){t.products=e.data})):m.a.get("https://euas.person.ee/products/tags/"+this.section).then((function(e){t.products=e.data}))}},J=U,L=(a("5f99"),Object(l["a"])(J,M,F,!1,null,"22d4e41b",null)),V=L.exports,Y={name:"MainPage",components:{ProductPanel:V}},R=Y,G=(a("cfec"),Object(l["a"])(R,E,T,!1,null,"793dd2a7",null)),W=G.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-page"},[a("h2",[t._v(" "+t._s(this.$route.params.categoryAlias)+" category")]),a("ProductPanel",{attrs:{categoryAlias:this.$route.params.categoryAlias}})],1)},X=[],Z={name:"CategoryPage",components:{ProductPanel:V}},tt=Z,et=(a("21a8"),Object(l["a"])(tt,K,X,!1,null,"1b3766c7",null)),at=et.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-page"},[a("h3",[t._v(t._s(t.product.title))]),a("b-row",[a("b-col",{attrs:{cols:"5"}},[t.selected.image?a("img",{staticClass:"product-image",attrs:{src:t.selected.image}}):a("img",{staticClass:"product-image",attrs:{src:t.product.image}})]),a("b-col",{attrs:{cols:"7"}},[a("p",[t._v(t._s(t.product.description))]),a("p",[t._v("Select Option")]),this.qty>this.selected.qty?a("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("You can't select more than "+t._s(t.selected.qty)+" items available in stock.")]):t._e(),a("b-form-select",{staticClass:"dropdown",attrs:{options:t.options,size:"sm"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),a("p",[t._v("Option selected: "+t._s(t.selected.title))]),a("p",[t._v("Available in stock: "+t._s(t.selected.qty))]),a("p",[t._v("Cost per Unit: €"+t._s(t.selected.price))]),a("p",[t._v("Total Cost of Items Selected: €"+t._s(t.totalPrice.toFixed(2)))]),a("p",[t._v("Qty selected: "+t._s(t.qty))]),a("div",{staticClass:"mt-2 d-flex"},[a("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"dark"},on:{click:function(e){return t.decreaseCount()}}},[t._v("-")]),a("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){return t.increaseCount()}}},[t._v("+")])],1),a("div",{staticClass:"mt-2"},[a("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){return t.addToCart()}}},[t._v("Add to Cart")])],1),a("div",{staticClass:"mt-2"},[a("b-alert",{attrs:{show:t.showConfirmation,variant:"info"}},[a("h4",{staticClass:"alert-heading"},[t._v("Thanks")]),a("p",[t._v("Item successfully added to cart")]),a("p",[a("b-button",{attrs:{to:"/cart"}},[t._v("Checkout")]),a("b-button",{attrs:{variant:"info"},on:{click:t.closeAlert}},[t._v("Continue Shopping")])],1)])],1)],1)],1)],1)},ot=[],st=(a("4160"),a("159b"),a("5530")),nt=function(t){var e=[];return t.forEach((function(t){var a={value:Object(st["a"])({},t),text:t.title};e.push(a)})),e},it={name:"ProductPage",data:function(){return{product:{},options:[],selected:{title:"",price:"",image:""},qty:0,totalPrice:0,showConfirmation:!1}},mounted:function(){var t=this;m.a.get("https://euas.person.ee/products/"+this.$route.params.productId).then((function(e){t.product=e.data,t.options=nt(e.data.options)})).catch((function(t){return console.log(t)}))},methods:{increaseCount:function(){this.qty=this.qty+1,this.totalPrice=this.selected.price*this.qty},decreaseCount:function(){0!==this.qty?(this.qty=this.qty-1,this.totalPrice=this.selected.price*this.qty):this.totalPrice=0},addToCart:function(){this.$root.$data.cart.items||(this.$root.$data.cart.items=[]),this.$root.$data.cart.items.push({productId:this.product.id,qty:this.qty,optionCode:this.selected.code,optionImage:this.selected.image,price:this.selected.price,total:this.selected.price*this.qty}),this.$root.$data.saveCart(),this.showConfirmation=!0},closeAlert:function(){this.showConfirmation=!1}}},ct=it,ut=(a("84ff"),Object(l["a"])(ct,rt,ot,!1,null,"43de8cde",null)),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shopping-cart"},[a("h2",[t._v("Shopping Cart")]),t.items.length?t._e():a("div",[t._v("Your shopping cart is empty! Please add some items to your shopping cart")]),t.items.length?a("table",{staticClass:"table"},[t._m(0),t._l(this.$root.$data.cart.items,(function(e,r){return a("tr",{key:e.productId+"-"+r},[a("td",[a("b-link",{attrs:{to:"/products/"+e.productId}},[a("img",{staticClass:"option-image",attrs:{src:e.optionImage}})])],1),a("td",[t._v("€ "+t._s(e.price))]),a("td",[t._v(t._s(e.qty))]),a("td",[t._v("€ "+t._s(e.total.toFixed(2)))]),a("td",[a("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.removeItem(r)}}},[a("i",{staticClass:"fas fa-trash-alt"})])],1)])})),a("tr",[a("td",[t._v("Total:")]),a("td"),a("td"),a("td",[t._v("€ "+t._s(t.total))]),a("td")])],2):t._e(),this.items.length?a("b-button",{attrs:{variant:"success"},on:{click:t.orderNow}},[t._v("Order Now")]):t._e()],1)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Product")]),a("th",[t._v("Price")]),a("th",[t._v("Quantity")]),a("th",[t._v("Amount")]),a("th",[t._v("Actions")])])}],ft=(a("a4d3"),a("e01a"),a("d28b"),a("a434"),a("b680"),a("d3b7"),a("3ca3"),a("ddb0"),{name:"shoppingCart",computed:{items:function(){return this.$root.$data.cart.items||[]},total:function(){var t=0,e=!0,a=!1,r=void 0;try{for(var o,s=this.items[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var n=o.value;t+=n.total}}catch(i){a=!0,r=i}finally{try{e||null==s.return||s.return()}finally{if(a)throw r}}return t.toFixed(2)}},methods:{removeItem:function(t){this.$root.$data.cart.items||(this.$root.$data.cart.items=[]),this.$root.$data.cart.items.splice(t,1),this.$root.$data.saveCart()},orderNow:function(){var t=this.$root.$data,e=this.$router;m.a.post("https://euas.person.ee/user/carts/"+this.$root.$data.cart.id+"/orders",this.$root.$data.cart).then((function(){e.push("/orderdetails/"+t.cart.id+"?success=true"),t.reinitCart()}))}}}),ht=ft,vt=(a("7357"),Object(l["a"])(ht,dt,pt,!1,null,"170fb92f",null)),mt=vt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orderListing"},[a("h3",[t._v("List Of All Orders")]),a("table",{staticClass:"table"},[t._m(0),t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.items&&e.items.length)+" item(s)")]),a("td",[t._v("€ "+t._s(t.orderAmount(e)))]),a("td",[a("b-link",{attrs:{to:"/orderdetails/"+e.id}},[a("b-button",[t._v("Order details")])],1)],1)])}))],2)])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Order ID")]),a("th",[t._v("Items")]),a("th",[t._v("Total Amount")]),a("th",[t._v("Actions")])])}],gt={name:"orderListing",data:function(){return{orders:{}}},mounted:function(){var t=this;m.a.get("https://euas.person.ee/user/orders").then((function(e){t.orders=e.data})).catch((function(t){console.log(t)}))},methods:{orderAmount:function(t){var e=0,a=!0,r=!1,o=void 0;try{for(var s,n=t.items[Symbol.iterator]();!(a=(s=n.next()).done);a=!0){var i=s.value;e+=i.total}}catch(c){r=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(r)throw o}}return e}}},yt=gt,Ct=(a("952c"),Object(l["a"])(yt,_t,bt,!1,null,"1c4ed0f5",null)),$t=Ct.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orderDetails"},[a("h2",[t._v("My Order Details")]),this.$route.query.success?a("b-alert",{attrs:{show:"",variant:"success"}},[t._v("Thank you for submitting your order. It will be shipped within 7 working days")]):t._e(),a("table",{staticClass:"table"},[t._m(0),t._l(t.order.items,(function(e,r){return a("tr",{key:e.productId+"-"+r},[a("td",[a("b-link",{attrs:{to:"/products/"+e.productId}},[a("img",{staticClass:"option-image",attrs:{src:e.optionImage}})])],1),a("td",[t._v("€ "+t._s(e.price))]),a("td",[t._v(t._s(e.qty))]),a("td",[t._v("€ "+t._s(e.total))]),a("td",[a("b-link",{attrs:{to:"/products/"+e.productId}},[a("b-button",[t._v("Product details")])],1)],1)])})),t.order.items?a("tr",{attrs:{id:"total"}},[a("td",[t._v("Total:")]),a("td"),a("td"),a("td",[t._v("€ "+t._s(t.total))]),a("td")]):t._e()],2)],1)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Product")]),a("th",[t._v("Price")]),a("th",[t._v("Quantity")]),a("th",[t._v("Amount")]),a("th",[t._v("Actions")])])}],kt={name:"orderDetails",computed:{total:function(){var t=0,e=!0,a=!1,r=void 0;try{for(var o,s=this.order.items[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var n=o.value;t+=n.total}}catch(i){a=!0,r=i}finally{try{e||null==s.return||s.return()}finally{if(a)throw r}}return t}},data:function(){return{order:{}}},mounted:function(){var t=this;console.log(this.$route.query.success),m.a.get("https://euas.person.ee/user/orders/"+this.$route.params.orderId).then((function(e){t.order=e.data})).catch((function(t){console.log(t)}))}},xt=kt,Ot=(a("4e35"),Object(l["a"])(xt,wt,Pt,!1,null,"16c91ab8",null)),At=Ot.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"profile"}},[a("h2",{staticClass:"profile-title"},[t._v("Profile Page")]),a("div",[a("b-avatar",{attrs:{size:"172px"}},[a("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfQw0oMc5VexnvSFnM474y6Uoy8cAss5Fwqs8YS74uFkbFVyv9&usqp=CAU"}})]),a("p",[t._v("Name: James Bond")]),a("p",[t._v("Shipping Address: Harju County, Tallinn Estonia")]),a("p",[t._v("Phone Number: +372 333 8888")]),a("p",[t._v("Email: xyz2020@yahoo.com")])],1)])},It=[],jt={name:"Profile",components:{}},qt=jt,Et=(a("ff26"),Object(l["a"])(qt,St,It,!1,null,"fb4d570a",null)),Tt=Et.exports;r["default"].config.productionTip=!1,r["default"].use(j["a"]),r["default"].use(q["a"]);var Mt=new q["a"]({routes:[{path:"/",component:W},{path:"/categories/:categoryAlias",component:at},{path:"/products/:productId",component:lt},{path:"/cart",component:mt},{path:"/profile",component:Tt},{path:"/orderlisting",component:$t},{path:"/orderdetails/:orderId",component:At}],mode:"history"});m.a.defaults.headers.common["Authorization"]="Bearer amdas72@gmail.com",localStorage.cartId?m.a.get("https://euas.person.ee/user/carts/"+localStorage.cartId).then((function(t){new r["default"]({render:function(t){return t(I)},router:Mt,data:{cart:t.data,saveCart:function(){m.a.put("https://euas.person.ee/user/carts/"+this.cart.id,this.cart)},reinitCart:function(){var t=this;m.a.post("https://euas.person.ee/user/carts").then((function(e){localStorage.cartId=e.data.id,t.cart=e.data}))}}}).$mount("#app")})):m.a.post("https://euas.person.ee/user/carts").then((function(t){localStorage.cartId=t.data.id,new r["default"]({render:function(t){return t(I)},router:Mt,data:{cart:t.data,saveCart:function(){m.a.put("https://euas.person.ee/user/carts/"+this.cart.id,this.cart)},reinitCard:function(){var t=this;m.a.post("https://euas.person.ee/user/carts").then((function(e){localStorage.cartId=e.data.id,t.cart=e.data}))}}}).$mount("#app")}))},5733:function(t,e,a){},"5e9a":function(t,e,a){"use strict";var r=a("5733"),o=a.n(r);o.a},"5f99":function(t,e,a){"use strict";var r=a("2b2e"),o=a.n(r);o.a},7357:function(t,e,a){"use strict";var r=a("3de2"),o=a.n(r);o.a},"735c":function(t,e,a){},"7b14":function(t,e,a){},"7bbc":function(t,e,a){},"84ff":function(t,e,a){"use strict";var r=a("735c"),o=a.n(r);o.a},"952c":function(t,e,a){"use strict";var r=a("f432"),o=a.n(r);o.a},a799:function(t,e,a){"use strict";var r=a("7bbc"),o=a.n(r);o.a},b3c0:function(t,e,a){},cfec:function(t,e,a){"use strict";var r=a("00f2"),o=a.n(r);o.a},e449:function(t,e,a){"use strict";var r=a("481a"),o=a.n(r);o.a},f432:function(t,e,a){},ff26:function(t,e,a){"use strict";var r=a("0016"),o=a.n(r);o.a}});
//# sourceMappingURL=app.962a11a9.js.map