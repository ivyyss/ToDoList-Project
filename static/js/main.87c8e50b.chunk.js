(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(9),r=n.n(i),o=(n(16),n(1)),l=n(2),c=n(4),u=n(3),d=n(5),h=(n(17),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",placeholder:"Type your plan here!",value:this.props.content,onKeyPress:this.submit.bind(this),onChange:this.changeTitle.bind(this)})}},{key:"submit",value:function(e){"Enter"===e.key&&""!==e.target.value.trim()&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(s.a.Component)),p=(n(18),n(19),n(20),n(21),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"itemList"},s.a.createElement("input",{type:"checkbox",id:this.props.todo.id,checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("label",{htmlFor:this.props.todo.id}),this.props.todo.title,s.a.createElement("button",{onClick:this.delete.bind(this)},s.a.createElement("i",{className:"iconfont icon-delete-copy"})))}},{key:"toggle",value:function(e){this.props.onToggle(this.props.todo,e)}},{key:"delete",value:function(e){this.props.onDelete(this.props.todo,e)}}]),t}(s.a.Component)),m=(n(22),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signUp",onSubmit:this.props.onSubmit.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"text",value:this.props.dataForm.email,onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Username"),s.a.createElement("input",{type:"text",value:this.props.dataForm.username,onChange:this.props.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",value:this.props.dataForm.password,onChange:this.props.onChange.bind(null,"password")})),s.a.createElement("div",{className:"action"},s.a.createElement("button",null,"Submit")))}}]),t}(s.a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signIn",onSubmit:this.props.onSubmit.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Username"),s.a.createElement("input",{type:"text",value:this.props.dataForm.username,onChange:this.props.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",value:this.props.dataForm.password,onChange:this.props.onChange.bind(null,"password")})),s.a.createElement("div",{className:"action"},s.a.createElement("button",null,"Submit"),s.a.createElement("a",{href:"#",onClick:this.props.onForgotPassword.bind(this)},"Forget your password\uff1f")))}}]),t}(s.a.Component),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"signInOrSignUp userDialog"},s.a.createElement("nav",null,s.a.createElement("div",null,s.a.createElement("input",{type:"radio",id:"Up",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)}),"SIGN UP",s.a.createElement("label",{htmlFor:"Up"})),s.a.createElement("div",null,s.a.createElement("input",{type:"radio",id:"In",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)}),"SIGN IN",s.a.createElement("label",{htmlFor:"In"}))),s.a.createElement("div",{className:"panel"},"signUp"===this.state.selected?s.a.createElement(m,{dataForm:this.props.dataForm,onSubmit:this.props.onSignUp.bind(this),onChange:this.props.onChange.bind(this)}):s.a.createElement(b,{dataForm:this.props.dataForm,onSubmit:this.props.onSignIn.bind(this),onChange:this.props.onChange.bind(this),onForgotPassword:this.props.onForgotPassword.bind(this)})))}},{key:"switch",value:function(e){this.setState({selected:e.target.value})}}]),t}(s.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"forgotPassword"},s.a.createElement("h3",null,"RESET PASSWORD"),s.a.createElement("form",{className:"forgotPassword",onSubmit:this.props.onSubmit.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"text",value:this.props.dataForm.email,onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"action"},s.a.createElement("button",{type:"submit"},"Send Email"),s.a.createElement("a",{href:"#",onClick:this.props.onSignIn.bind(this)},"Return to sign-in"))))}}]),t}(s.a.Component),v=n(7),E=n(6),O=n.n(E);O.a.init({appId:"BwlLHpUypqlQQTDTQarqgORI-gzGzoHsz",appKey:"0EekaQvmuWuXdWhzo51gfRQR"});O.a;var y={getByUser:function(e,t,n){var a=new O.a.Query("Todo");a.equalTo("deleted",!1),a.find().then(function(e){var n=e.map(function(e){return Object(v.a)({id:e.id},e.attributes)});t.call(null,n)},function(e){n&&n.call(null,e)})},create:function(e,t,n){var a=e.title,s=e.status,i=e.deleted,r=new(O.a.Object.extend("Todo"));r.set("title",a),r.set("status",s),r.set("deleted",i);var o=new O.a.ACL;o.setPublicReadAccess(!1),o.setWriteAccess(O.a.User.current(),!0),o.setReadAccess(O.a.User.current(),!0),o.setWriteAccess(O.a.User.current(),!0),r.setACL(o),r.save().then(function(e){t.call(null,e.id)},function(e){n.call(null,e)})},update:function(e,t,n){var a=e.id,s=e.title,i=e.status,r=e.deleted,o=O.a.Object.createWithoutData("Todo",a);void 0!==s&&o.set("title",s),void 0!==i&&o.set("status",i),void 0!==r&&o.set("deleted",r),o.save().then(function(e){t&&t.call(null)},function(e){return n&&n.call(null,e)})},destory:function(e,t,n){y.update({id:e,deleted:!0},t,n)}};function S(e){return Object(v.a)({id:e.id},e.attributes)}function w(){var e=O.a.User.current();return e?S(e):null}var j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selectedTab:"signInOrSignUp",dataForm:{email:"",username:"",password:""}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"UserDialog-Wrapper"},"signInOrSignUp"===this.state.selectedTab?s.a.createElement(g,{dataForm:this.state.dataForm,onSignIn:this.signIn.bind(this),onSignUp:this.signUp.bind(this),onChange:this.changeFormData.bind(this),onForgotPassword:this.showForgotPassword.bind(this)}):s.a.createElement(f,{dataForm:this.state.dataForm,onChange:this.changeFormData.bind(this),onSubmit:this.resetPassword.bind(this),onSignIn:this.returnToSignIn.bind(this)}))}},{key:"returnToSignIn",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="signInOrSignUp",this.setState(e)}},{key:"showForgotPassword",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="forgotPassword",this.setState(e)}},{key:"resetPassword",value:function(e){e.preventDefault();var t,n,a;t=this.state.dataForm.email,n=function(e){alert("Email sent!")},a=function(e){switch(e.code){case 400:alert("Email not found!");break;default:alert(e)}},O.a.User.requestPasswordReset(t).then(function(e){n.call()},function(e){a.call(null,e)})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.dataForm;!function(e,t,n,a,s){var i=new O.a.User;i.setUsername(t),i.setPassword(n),i.setEmail(e),i.signUp().then(function(e){var t=S(e);a.call(null,t)},function(e){s.call(null,e)})}(n.email,n.username,n.password,function(e){t.props.onSignUp.call(null,e)},function(e){switch(e.code){case 202:alert("Username already existed!");break;case 218:alert("Invalid password, it must be a non-blank string.");break;case 217:alert("Invalid username, it must be a non-blank string.");break;default:alert(e)}})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.dataForm;!function(e,t,n,a){O.a.User.logIn(e,t).then(function(e){var t=S(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignIn.call(null,e)},function(e){switch(e.code){case 210:alert("Wrong username or password!");break;default:alert(e)}})}},{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.dataForm[e]=t.target.value,this.setState(n)}}]),t}(s.a.Component),k=(n(24),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="iconfont icon-smile-copy",n=[1,2,3,4,5,6].map(function(n){return n<=e.props.completedCount?t+" active":t});return s.a.createElement("div",{className:"pic"},n.map(function(e,t){return s.a.createElement("i",{className:e,key:t})}),s.a.createElement("span",null,"..."))}}]),t}(s.a.Component)),C=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:w()||{},newTodo:"",todoList:[]};var a=w();return a&&y.getByUser(a,function(e){var t=JSON.parse(JSON.stringify(n.state));t.todoList=e,n.setState(t)}),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(p,{todo:t,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)}))});return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,"TO DO LIST",this.state.user.id?s.a.createElement("button",{onClick:this.signOut.bind(this)},s.a.createElement("i",{className:"iconfont icon-logout-copy"})):null),s.a.createElement("div",{className:"dashBoard"},s.a.createElement("p",null,"Hey, ",s.a.createElement("span",null,this.state.user.username||"Friend"," ")," Welcome to list!"),s.a.createElement(k,{completedCount:this.state.todoList.filter(function(e){return e.status}).length}),s.a.createElement("p",{className:"end"},"You have completed ",s.a.createElement("span",null,this.state.todoList.filter(function(e){return e.status}).length)," plans!")),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(h,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(j,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:this.onSignUpOrSignIn.bind(this)}))}},{key:"componentDidUpdate",value:function(){}},{key:"signOut",value:function(){O.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"onSignUpOrSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"addTodo",value:function(e){var t=this,n={title:e.target.value,status:"",deleted:!1};y.create(n,function(e){n.id=e,t.state.todoList.push(n),t.setState({newTodo:"",todoList:t.state.todoList})},function(e){console.log(e)})}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"toggle",value:function(e,t){var n=this,a=e.status;e.status="completed"===e.status?"":"completed",y.update(e,function(){n.setState(n.state)},function(t){e.status=a,n.setState(n.state)})}},{key:"delete",value:function(e,t){var n=this;y.destory(e.id,function(){e.deleted="true",n.setState(n.state)})}}]),t}(s.a.Component);r.a.render(s.a.createElement(C,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.87c8e50b.chunk.js.map