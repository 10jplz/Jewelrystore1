(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(11),i=a(1),m=a(9);a(34);var u=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var s=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},d=a(10),E=a.n(d),f={getItems:function(){return E.a.get("/api/items")},getItem:function(e){return E.a.get("/api/items/"+e)},deleteItem:function(e){return E.a.delete("/api/items/"+e)},saveItem:function(e){return E.a.post("/api/items/",e)}};function p(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function v(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function h(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(53);function g(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function b(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var N=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),i=Object(m.a)(l,2);function d(){f.getItems().then(function(e){return c(e.data)}).catch(function(e){return console.log(e)})}return i[0],i[1],Object(n.useEffect)(function(){d()},[]),r.a.createElement(p,{fluid:!0},r.a.createElement(v,null,r.a.createElement(h,{size:"md-6 sm-12"},r.a.createElement(s,null,r.a.createElement("h1",null,"Items Available")),a.length?r.a.createElement(g,null,a.map(function(e){return r.a.createElement(b,{key:e._id},r.a.createElement(o.b,{to:"/items/"+e._id},r.a.createElement("strong",null,e.name," $",e.price,".00")),r.a.createElement(u,{onClick:function(){return t=e._id,void f.deleteItem(t).then(function(e){return d()}).catch(function(e){return console.log(e)});var t}}))})):r.a.createElement("h3",null,"No Results to Display"))))};var j=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Admin Inventory Control"),r.a.createElement("a",{className:"navbar-brand",href:"/addItem"},"Add New Items"))},y=a(12),I=a(28);function O(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function w(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("select",Object.assign({className:"form-control"},e)))}function C(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("file",Object.assign({className:"form-control-file"},e)))}function k(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var x=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1];function l(e){var t=e.target,n=t.name,r=t.value;c(Object(I.a)({},a,Object(y.a)({},n,r)))}return r.a.createElement(p,{fluid:!0},r.a.createElement(v,null,r.a.createElement(h,{size:"md-9"},r.a.createElement(s,null,r.a.createElement("h1",null,"Add Product")),r.a.createElement("form",null,r.a.createElement(w,{onChange:l,name:"category"},r.a.createElement("option",null),r.a.createElement("option",{value:"rings"},"Rings"),r.a.createElement("option",{value:"chains"},"Chains"),r.a.createElement("option",{value:"necklaces"},"Necklaces"),r.a.createElement("option",{value:"earrings"},"Earrings"),r.a.createElement("option",{value:"bracelets"},"Bracelets"),r.a.createElement("option",{value:"watches"},"Watches")),r.a.createElement(C,{onChange:l,name:"photo",placeholder:"Select a Photo"}),r.a.createElement(O,{onChange:l,name:"name",placeholder:"Name (required)"}),r.a.createElement(O,{onChange:l,name:"price",placeholder:"Price"}),r.a.createElement(O,{onChange:l,name:"description",placeholder:"Description"}),r.a.createElement(O,{onChange:l,name:"quantity",placeholder:"Quantity"}),r.a.createElement(k,{onClick:function(e){e.preventDefault(),a.name&&a.description&&a.category&&f.saveItem({category:a.category,name:a.name,description:a.description,price:a.price,quantity:a.quantity,photo:a.photo}).then(function(e){return a.name="Name required"}).catch(function(e){return console.log(e)})}},"Save Item")))))};var q=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/","/items"]},r.a.createElement(N,null)),r.a.createElement(i.a,{exact:!0,path:"/addItem",component:x}))))};l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8239477c.chunk.js.map