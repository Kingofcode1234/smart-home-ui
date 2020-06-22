(this["webpackJsonpsmart-home-ui"]=this["webpackJsonpsmart-home-ui"]||[]).push([[0],{26:function(e,t,n){e.exports=n(40)},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(20),o=(n(31),n(11)),l=n(9),u=n(4),s=n(5),d=n(8),m=n(7),h={items:[{name:"Home",to:"/",id:"header-landing-link-id"},{name:"Weather",to:"/weather",id:"header-weather-link-id"},{name:"Light",to:"/light",id:"header-light-link-id"},{name:"Blind",to:"/blind",id:"header-blind-link-id"}]},f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderHelperCreateMenu",value:function(){return h.items.map((function(e){return r.createElement("li",{className:"Header__menu-item",key:e.id},r.createElement(o.b,{to:e.to,id:e.id,exact:!0,className:"Header__link",activeClassName:"Header__link Header__link--selected"},e.name))}))}},{key:"render",value:function(){return r.createElement("header",{className:"Header"},r.createElement("nav",{className:"Header__menu"},r.createElement("ul",{className:"Header__menu-list"},this.renderHelperCreateMenu())),r.createElement("div",{className:"Header__decoration"}))}}]),n}(r.Component),p=n(12),E=n.n(p),v=n(14),b=n(24),k=function(){function e(){Object(u.a)(this,e),this.defaultHeader={Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}return Object(s.a)(e,[{key:"_makeRequest",value:function(){var e=Object(v.a)(E.a.mark((function e(t,n,a,r){var c,i,o,l=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=this._addHeader(r),e.prev=1,e.next=4,this.timeoutWrapper(this.getTimeout(),fetch(t,{headers:c,body:JSON.stringify(a),method:n}));case 4:if((i=e.sent).ok){e.next=10;break}return e.next=8,i.json();case 8:throw o=e.sent,new Error(o);case 10:return e.abrupt("return",i.json().then((function(e){return l.checkForErrorData(e)})));case 13:throw e.prev=13,e.t0=e.catch(1),console.log(e.t0),new Error(e.t0);case 17:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"getTimeout",value:function(){return 5e4}},{key:"checkForErrorData",value:function(e){return e.errors?Promise.reject(new Error(e.errors)):e}},{key:"_addHeader",value:function(e){var t=this.defaultHeader;return e&&Object.keys(e).forEach((function(n){return t[n]=e[n]})),t}},{key:"timeoutWrapper",value:function(e,t){return new Promise((function(n,a){var r=setTimeout((function(){a(new Error("Error"))}),e);t.then((function(e){clearTimeout(r),n(e)}),(function(e){clearTimeout(r),a(e)}))}))}}]),e}();!function(e){e.POST="POST",e.PUT="PUT",e.GET="GET",e.DELETE="DELETE",e.PATCH="PATCH"}(a||(a={}));var O=new(function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"fetchBlinds",value:function(){return this.getBlinds()}},{key:"getBlinds",value:function(){return console.log("Bin Hier"),this._makeRequest("/blind/all/position",a.GET)}}]),n}(k)),_=function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=(t[0],t[1]);Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.fetchBlinds();case 2:t=e.sent,console.log(t),n(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.createElement("div",null,"Hello from Blind ")},g=function(){return r.createElement("div",null," Hello from Weather ")},j=function(){return r.createElement("div",null," Hello from Light ")},y=n(25),w=n(23),A=n.n(w),T=function(e){var t=e.icon,n=Object(y.a)(e,["icon"]);return r.createElement(A.a,Object.assign({cacheRequests:!0,src:"/icons/"+t+".svg"},n))},H=function(e){return e.filter((function(e){return e})).join(" ")},C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.accordionItemRef=c.a.createRef(),e.handleAccordionOnClick=function(){e.setState((function(e){return{open:!e.open}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.name,r=t.allowMultipleOpen,i=t.activeTab,o=t.icon,l=t.index,u=t.handleAccordionOnClick,s=t.title,d=t.titleDescription,m=t.errorMessage,h=r?this.state.open:i===l,f=["Accordion__button"];h&&f.push("Accordion__button--open");var p=c.a.createElement("button",{className:H(f),"aria-expanded":h,"aria-controls":"".concat(a,"-accordion-dd-").concat(l,"-id"),onClick:r?function(){return e.handleAccordionOnClick()}:function(){return u(l)}},c.a.createElement("span",{className:"Accordion__button-title"},o&&c.a.createElement(T,{className:"Accordion__icon--optional",icon:o}),c.a.createElement("span",null,d&&c.a.createElement("strong",{className:"Accordion__button-title-header"},d),s,m&&c.a.createElement("span",{className:"Accordion__error-message"},c.a.createElement("strong",null,"Achtung"),": ",m.title)),c.a.createElement(T,{icon:h?"minus":"plus"})),h&&m&&c.a.createElement("span",{className:"Accordion__error-description"},m.description));return c.a.createElement("div",{className:"Accordion__item",key:"".concat(a,"-").concat(l),ref:this.accordionItemRef},c.a.createElement("dt",{className:"Accordion__item-header"},p),c.a.createElement("dd",{id:"".concat(a,"-accordion-dd-").concat(l,"-id"),className:H(["Accordion__item-content"]),hidden:!h},n))}}]),n}(r.Component),N=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:-1},e.handleAccordionOnClick=function(t){e.setState((function(e){return{activeTab:e.activeTab===t?-1:t}}),(function(){e["accordionItem".concat(t)].scrollIntoView()}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&this.setState({activeTab:-1})}},{key:"createDiv",value:function(){var e=this,t=this.props,n=t.id,a=t.children,c=t.allowMultipleOpen,i=t.activeTab,o=t.onActiveTabChange;return r.Children.map(a,(function(t,a){return Object(r.cloneElement)(t,{index:a,name:n,key:a,activeTab:o?i:e.state.activeTab,allowMultipleOpen:c,handleAccordionOnClick:o||e.handleAccordionOnClick.bind(e,a),ref:function(t){e["accordionItem".concat(a)]=t}})}))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className;return c.a.createElement("dl",{id:"".concat(t,"-accordion-id"),className:"Accordion ".concat(n||"")},this.createDiv())}}]),n}(r.Component),x=function(){return r.createElement("div",null,r.createElement(N,{id:"home-page",name:"Lights",allowMultipleOpen:!0,heading:"Hello"},r.createElement(C,{name:"Light 1",title:"Light Title",icon:"rental-object-flat"},r.createElement("p",null,"Hello Light item 1")),r.createElement(C,{name:"\xf6ffne mich",title:"Center"},r.createElement("p",null,"Hello Accordion Item 2")),r.createElement(C,{name:"\xf6ffne mich",title:"End"},r.createElement("p",null,"Hello Accordion Item 2"))))};var B=function(){return r.createElement(o.a,null,r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement("main",{id:"app-main-id"},r.createElement(l.a,{exact:!0,key:"route-1",path:"/"},r.createElement(x,null)),r.createElement(l.a,{exact:!0,key:"route-2",path:"/weather"},r.createElement(g,null)),r.createElement(l.a,{exact:!0,key:"route-3",path:"/blind"},r.createElement(_,null)),r.createElement(l.a,{exact:!0,key:"route-4",path:"/light"},r.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.render(r.createElement(o.a,null,r.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8d98a270.chunk.js.map