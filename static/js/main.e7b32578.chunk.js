(this["webpackJsonpdad-jokes-finder"]=this["webpackJsonpdad-jokes-finder"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),o=n(3),a=n.n(o),i=n(5),r=n(6),h=n(2),d=n(8),u=n(7),j=(n(13),n(14),n(0)),l=function(e){return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onFormSubmit()},className:"search-form",children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter search term...",onChange:function(t){return e.onSearchValueChange(t.target.value)}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{disabled:e.isSearching,children:"Search"}),Object(j.jsx)("button",{onClick:e.onSingleSearchClick,disabled:e.isSearching,children:"Find Random Joke"})]})]})},k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={searchTerm:"",jokes:[],isFetchingJokes:!1},e.onSearchChange=e.onSearchChange.bind(Object(h.a)(e)),e.searchJokes=e.searchJokes.bind(Object(h.a)(e)),e.randomJoke=e.randomJoke.bind(Object(h.a)(e)),e}return Object(r.a)(n,[{key:"randomJoke",value:function(){var e=this;this.setState({isFetchingJokes:!0}),fetch("https://icanhazdadjoke.com/",{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=[{id:t.id,joke:t.joke}];e.setState({jokes:n,isFetchingJokes:!1})}))}},{key:"searchJokes",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;this.setState({isFetchingJokes:!0}),fetch("https://icanhazdadjoke.com/search?term=".concat(this.state.searchTerm,"&limit=").concat(t),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=t.results;console.log(t.results),e.setState({jokes:n,isFetchingJokes:!1})}))}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e})}},{key:"renderJokes",value:function(){return Object(j.jsx)("ul",{className:"jokes-list",children:this.state.jokes.map((function(e){return Object(j.jsxs)("li",{children:[" ",e.joke]},e.id)}))})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("img",{className:"logo",src:"/logo.png",alt:"logo"}),Object(j.jsx)(l,{onFormSubmit:this.searchJokes,onSearchValueChange:this.onSearchChange,isSearching:this.state.isFetchingJokes,onSingleSearchClick:function(){return e.randomJoke()}}),this.state.isFetchingJokes?"searching for jokes":this.renderJokes()]})}}]),n}(c.a.Component),m=document.getElementById("root");a.a.render(Object(j.jsx)(k,{version:"1.0"}),m);var b=document.getElementById("root");a.a.render(Object(j.jsx)(s.StrictMode,{children:Object(j.jsx)(k,{})}),b)}},[[16,1,2]]]);
//# sourceMappingURL=main.e7b32578.chunk.js.map