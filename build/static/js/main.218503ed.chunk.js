(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),m=a(2),n=a.n(m),o=(a(13),a(3)),i=a(4),s=a(7),c=a(6),u=a(5),d=a.n(u);a(14);var p,E,g,y=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group list-group-horizontal"},r.a.createElement("li",{className:"list-group-item col-2"},r.a.createElement("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove"},"\ud835\ude05"),"  ",e.first),r.a.createElement("li",{className:"list-group-item col-2"},e.last),r.a.createElement("li",{className:"list-group-item col-2"},e.dob),r.a.createElement("li",{className:"list-group-item col-2"},e.email),r.a.createElement("li",{className:"list-group-item col-2"},e.phone),r.a.createElement("li",{className:"list-group-item col-2"},e.address)))};if(null==JSON.parse(localStorage.getItem("employeeData"))||"[]"===localStorage.getItem("employeeData"))E=[],p=0,g="hide",console.log("is null");else{console.log("not null"),E=JSON.parse(localStorage.getItem("employeeData"));for(var f=0;f<E.length;f++)p===E[f].id?p++:p+1===E[f].id?p+=2:p=E.length+1;g=""}console.log("id",p);var h=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var l=arguments.length,r=new Array(l),m=0;m<l;m++)r[m]=arguments[m];return(e=t.call.apply(t,[this].concat(r))).state={employees:E},e.removeEmployee=function(t){E=e.state.employees.filter((function(e){return e.id!==t})),e.setState({employees:E}),localStorage.setItem("employeeData",JSON.stringify(E)),0===E.length&&(g="hide")},e.handleFormSubmit=function(t){console.log(E),t.preventDefault(),""!==document.getElementById("first").value.trim()&&""!==document.getElementById("last").value.trim()&&""!==document.getElementById("dob").value.trim()&&""!==document.getElementById("email").value.trim()&&""!==document.getElementById("phone").value.trim()&&""!==document.getElementById("address").value.trim()?(E.push({id:p+1,first:document.getElementById("first").value,last:document.getElementById("last").value,dob:document.getElementById("dob").value,email:document.getElementById("email").value,phone:document.getElementById("phone").value,address:document.getElementById("address").value}),document.getElementById("first").value="",document.getElementById("last").value="",document.getElementById("dob").value="",document.getElementById("email").value="",document.getElementById("phone").value="",document.getElementById("address").value="",console.log("emploi",E),p++,localStorage.setItem("employeeData",JSON.stringify(E)),e.setState({employees:E}),g=""):alert("Please fill out all fields.")},e.alphabeticalFilterFirst=function(){E=E.sort((function(e,t){return e.first.localeCompare(t.first)})),localStorage.setItem("employeeData",JSON.stringify(E)),e.setState({employees:E})},e.alphabeticalFilterLast=function(){E=E.sort((function(e,t){return e.last.localeCompare(t.last)})),localStorage.setItem("employeeData",JSON.stringify(E)),e.setState({employees:E})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log(E),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("br",null),r.a.createElement("a",{href:"#rows",id:g,className:"btn btn-primary directory"},"View Directory"),r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{id:"main"},r.a.createElement("form",{id:"left"},r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"First Name"),r.a.createElement("input",{type:"firstname",className:"form-control",id:"first"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Last Name"),r.a.createElement("input",{type:"lastname",className:"form-control",id:"last"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"DOB"),r.a.createElement("input",{type:"firstname",className:"form-control",id:"dob",placeholder:"(MM/DD/YYYY)"})))),r.a.createElement("form",{id:"right"},r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",id:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Phone"),r.a.createElement("input",{type:"phone",className:"form-control",id:"phone"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Address"),r.a.createElement("input",{type:"address",className:"form-control",id:"address"})))),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleFormSubmit},"Submit"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary",id:g,onClick:this.alphabeticalFilterFirst},"Filter by First Name"),r.a.createElement("span",{id:g}," || "),r.a.createElement("button",{type:"submit",className:"btn btn-primary",id:g,onClick:this.alphabeticalFilterLast},"Filter by Last Name")),r.a.createElement("br",null)),r.a.createElement("ul",{className:"list-group list-group-horizontal",id:g},r.a.createElement("li",{className:"list-group-item list-group-item-dark col-2"},"First Name"),r.a.createElement("li",{className:"list-group-item list-group-item-dark col-2"},"Last Name"),r.a.createElement("li",{className:"list-group-item list-group-item-dark col-2"},"DOB"),r.a.createElement("li",{className:"list-group-item list-group-item-dark col-2"},"Email"),r.a.createElement("li",{className:"list-group-item list-group-item-dark col-2"},"Phone"),r.a.createElement("li",{className:"list-group-item list-group-item-dark col-2"},"Address")),r.a.createElement("div",{id:"rows"},this.state.employees.map((function(t){return r.a.createElement(y,{removeEmployee:e.removeEmployee,id:t.id,first:t.first,last:t.last,dob:t.dob,email:t.email,phone:t.phone,address:t.address})}))))}}]),a}(l.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,l=t.getFID,r=t.getFCP,m=t.getLCP,n=t.getTTFB;a(e),l(e),r(e),m(e),n(e)}))};a(15);n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),b()}],[[8,1,2]]]);
//# sourceMappingURL=main.218503ed.chunk.js.map