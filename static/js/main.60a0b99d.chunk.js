(this["webpackJsonpwall-gallery"]=this["webpackJsonpwall-gallery"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),i=(n(14),n(3)),o=n.n(i),l=n(5),u=n(6),d=n(7),h=n(9),f=n(8),g=n(0),j=function(t){return Object(g.jsx)("img",{src:t.source,alt:t.alter},t.keyUnique)},m=(n(17),n(18),function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={loading:!0,images:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0",t.next=3,fetch("https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0",{crossDomain:!0,mode:"cors"});case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,this.setState({images:n,loading:!1}),console.log(this.state.images);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)("div",{className:"gallery",children:this.state.loading||!this.state.images?Object(g.jsx)("div",{children:"loading..."}):Object(g.jsx)("div",{children:this.state.images.map((function(t,e){return Object(g.jsx)(j,{source:t.urls.small,alter:t.alt_description},t.id)}))})})}}]),n}(a.Component)),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(m,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.60a0b99d.chunk.js.map