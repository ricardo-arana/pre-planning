(this["webpackJsonppre-planning"]=this["webpackJsonppre-planning"]||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),r=n(23),c=n.n(r),a=(n(76),n(77),n(15)),o=n(14),u=(n(78),n(3));function l(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"navbar",children:Object(u.jsx)("div",{className:"navbar__title",children:"Pre plannig generator"})})})}n(80);var j,d,b,h,f,O,p=n(34),g=n(36),v=n(37),m=n(18),x=n(19),y=function(){function e(t,n,s,i){Object(m.a)(this,e),this.id=t,this.key=n,this.summary=s,this.type=i}return Object(x.a)(e,[{key:"url",get:function(){return"https://jira.lima.bcp.com.pe/browse/".concat(this.key)}},{key:"icon",get:function(){return"/images/".concat(S[this.type])}}]),e}(),S={Tarea:"tarea.svg","Test Execution":"test-execution.png",Historia:"story.svg",Congelamiento:"tarea.svg","Ratificaci\xf3n":"tarea.svg","Business Story":"business-story.svg",Error:"error.svg","Error en producci\xf3n":"error.svg",Spike:"spike.svg",Riesgo:"riesgo.svg",Incidente:"incidente.svg",Request:"request.svg",Feature:"request.svg",Test:"test.png","Test Set":"test-set.png","Pre-Condition":"pre-condition.png","Test Plan":"test-plan.png"},T=function(){function e(t,n){Object(m.a)(this,e),this.id=t,this.name=n,this.issues=[]}return Object(x.a)(e,[{key:"addIssue",value:function(e){this.issues.push(e)}},{key:"getIssues",value:function(){return this.issues}}]),e}();!function(e){e.Customfield10023="customfield_10023"}(j||(j={})),function(e){e.Media="Media"}(d||(d={})),function(e){e.EnProgreso="En Progreso",e.Finalizado="Finalizado",e.NoIniciado="No Iniciado",e.ReadyForTest="Ready for Test",e.Test="Test"}(b||(b={})),function(e){e.BlueGray="blue-gray",e.Green="green",e.Yellow="yellow"}(h||(h={})),function(e){e.Done="done",e.Indeterminate="indeterminate",e.New="new"}(f||(f={})),function(e){e.Error="Error",e.Historia="Historia",e.Mejora="Mejora",e.Tarea="Tarea"}(O||(O={}));var k=function(){function e(){Object(m.a)(this,e)}return Object(x.a)(e,null,[{key:"transfor",value:function(e){try{var t=[];return e.sprints.forEach((function(n){var s=n.id,i=n.name,r=n.issuesIds,c=new T(s,i);e.issues.filter((function(e){return r.includes(e.id)})).forEach((function(e){var t=new y(e.id,e.key,e.summary,e.typeName);c.addIssue(t)})),t.push(c)})),t}catch(n){throw n}}}]),e}();function I(e){var t=e.onChange,n=Object(s.useState)(""),i=Object(o.a)(n,2),r=i[0],c=i[1],a=Object(s.useState)(""),l=Object(o.a)(a,2),j=l[0],d=l[1];return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)(p.e,{mb:"15px",children:"Ingrese el json de jira:"}),Object(u.jsx)(g.a,{isInvalid:!!j,placeholder:"Ingresa aqui tu json",rows:10,value:r,onChange:function(e){var t=e.target.value;c(t)}}),Object(u.jsx)(v.a,{colorScheme:"blue",size:"lg",style:{marginTop:20},onClick:function(){try{var e=JSON.parse(r),n=k.transfor(e);t(n)}catch(s){d("El json ingresado no es valido")}},children:"Continuar"}),j&&Object(u.jsx)(p.e,{color:"red",children:j})]})}var C=n(41);function N(e){var t=e.sprints,n=e.onSelect;return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)(p.e,{mb:"15px",children:"Selecione el sprint"}),Object(u.jsx)(p.b,{spacing:3,children:t.map((function(e){return Object(u.jsxs)(p.d,{children:[Object(u.jsx)(p.c,{as:C.a,color:"green.500"}),Object(u.jsx)(p.a,{onClick:function(){return n(e)},children:e.name})]},e.id)}))})]})}var w,E=n(38),F=n(39);function P(e){var t=e.issues,n=e.sprints,i=Object(s.useState)(t),r=Object(o.a)(i,2),c=r[0],a=r[1];return Object(u.jsxs)("div",{className:"table",children:[Object(u.jsx)("div",{style:{width:200},children:Object(u.jsx)(E.a,{placeholder:"cambiar de sprint",onChangeCapture:function(e){var t,s=+e.target.value,i=(null===(t=n.find((function(e){return e.id===s})))||void 0===t?void 0:t.getIssues())||[];a(i)},children:n.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(u.jsx)(p.e,{mb:"15px",children:"Historias del sprint"}),Object(u.jsxs)(p.e,{mb:"8px",children:["Total de HU: ",c.length]}),Object(u.jsxs)(F.a,{variant:"simple",id:"table",children:[Object(u.jsx)(F.e,{children:Object(u.jsxs)(F.f,{children:[Object(u.jsx)(F.d,{children:"Tipo"}),Object(u.jsx)(F.d,{children:"Historia"}),Object(u.jsx)(F.d,{children:"Descripci\xf3n"})]})}),Object(u.jsx)(F.b,{children:c.map((function(e){return Object(u.jsxs)(F.f,{children:[Object(u.jsx)(F.c,{children:Object(u.jsx)(p.a,{href:e.url,children:Object(u.jsx)("img",{src:e.icon,alt:e.type})})}),Object(u.jsx)(F.c,{children:Object(u.jsx)(p.a,{href:e.url,children:e.key})}),Object(u.jsx)(F.c,{children:e.summary})]},e.id)}))})]})]})}function _(){var e=Object(s.useState)(w.form),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)([]),c=Object(o.a)(r,2),a=c[0],j=c[1],d=Object(s.useState)([]),b=Object(o.a)(d,2),h=b[0],f=b[1];return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("div",{className:"home__navbar",children:Object(u.jsx)(l,{})}),Object(u.jsx)("div",{className:"home__content",children:n===w.form&&Object(u.jsx)(I,{onChange:function(e){j(e),i(w.selectSprint)}})||n===w.selectSprint&&Object(u.jsx)(N,{sprints:a,onSelect:function(e){f(e.getIssues()),i(w.table)}})||n===w.table&&Object(u.jsx)(P,{issues:h,sprints:a})})]})}!function(e){e[e.form=0]="form",e[e.selectSprint=1]="selectSprint",e[e.table=2]="table"}(w||(w={}));var H=function(){return Object(u.jsx)(a.a,{children:Object(u.jsx)(_,{})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root")),M()}},[[86,1,2]]]);
//# sourceMappingURL=main.d4bd3a80.chunk.js.map