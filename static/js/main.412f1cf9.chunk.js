(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),s=n.n(r),u=n(5),c=n(3),i=n(4),o=n(7),d=n(6),m=function(e){console.log(e.list);var t=e.list.map((function(t){return l.a.createElement("li",{key:t.id},t.title,l.a.createElement("div",{className:"actions"},l.a.createElement("input",{type:"checkbox",value:t.done,className:"check-btn",onChange:function(){return e.check(t.id)}}),l.a.createElement("button",{className:"delete-btn",onClick:function(){return e.del(t.id)}},"\u2717")))}));return l.a.createElement("ul",null,t)},h=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={userInput:"",result:[],color:""},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return this.changeHandle=function(t){t.preventDefault();var n=t.target.value;e.setState({userInput:n})},this.submitHandle=function(t){t.preventDefault();var n=e.state.userInput;e.setState({userInput:"",result:[].concat(Object(u.a)(e.state.result),[{id:e.state.result.length,title:n,done:!1}])})},this.remove=function(t){var n=e.state.result.filter((function(e){return e.id!==t}));console.log(n),e.setState({result:n})},this.check=function(t){var n=e.state.result.filter((function(e){return e.id===t&&(e.done=!e.done),e}));console.log(n),e.setState({result:n}),console.log(e.state.result)},l.a.createElement(a.Fragment,null,l.a.createElement("h1",null,"Your list for today:"),l.a.createElement("form",{onSubmit:this.submitHandle},l.a.createElement("input",{type:"text",value:this.state.userInput,onChange:this.changeHandle,placeholder:"Add an item"}),l.a.createElement("input",{type:"submit",value:"Add"})),l.a.createElement("div",{className:"items-box"},l.a.createElement(m,{list:this.state.result,del:this.remove,check:this.check})))}}]),n}(a.Component);n(13);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.412f1cf9.chunk.js.map