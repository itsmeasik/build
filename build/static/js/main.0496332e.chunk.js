(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(44)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),i=(a(22),a(10)),c=a(11),m=a(14),s=a(12),u=a(15),h=(a(23),a(24),a(13)),p=a.n(h),d="https://localhost/apps/api/contact/index.php",f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),p()({method:"post",url:"".concat(d),headers:{"content-type":"application/json"},data:a.state}).then(function(e){a.setState({mailSent:e.data.sent})}).catch(function(e){return a.setState({error:e.message})})},a.state={fname:"",lname:"",email:"",message:"",mailSent:!1,error:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("p",null,"Contact Me"),l.a.createElement("div",null,l.a.createElement("form",{action:"#"},l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your name..",value:this.state.fname,onChange:function(t){return e.setState({fname:t.target.value})}}),l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your last name..",value:this.state.lname,onChange:function(t){return e.setState({lname:t.target.value})}}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Your email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{id:"message",name:"message",placeholder:"Write something..",onChange:function(t){return e.setState({message:t.target.value})},value:this.state.message}),l.a.createElement("input",{type:"submit",onClick:function(t){return e.handleFormSubmit(t)},value:"Submit"}),l.a.createElement("div",null,this.state.mailSent&&l.a.createElement("div",null,"Thank you for contcting us.")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.0496332e.chunk.js.map