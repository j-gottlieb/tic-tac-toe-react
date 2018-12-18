(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),i=n.n(s),o=(n(14),n(1)),c=n(2),u=n(4),l=n(3),m=n(5),h=(n(16),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={box:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.player,a=e.handleClick;return r.a.createElement("div",{className:"square",onClick:function(){return a(t)}},r.a.createElement("div",{className:"square-text"},"number"!==typeof n&&n))}}]),t}(a.Component)),v=(n(18),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"colorPicker",value:function(e){return"Its a tie!"===e?"purple":"You lose!"===e?"red":"You win!"===e?"blue":void 0}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("div",{className:"message",style:{color:this.colorPicker(this.props.message)}},r.a.createElement("p",null,this.props.message)),r.a.createElement("button",{onClick:function(){return e.props.restart()}},"New Game")))}}]),t}(a.Component)),f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).restart=function(){e.setState({currentMove:e.human,moves:[0,1,2,3,4,5,6,7,8],message:"",gameOver:!1})},e.ai="o",e.human="x",e.state={currentMove:e.human,message:"",gameOver:!1,moves:[0,1,2,3,4,5,6,7,8]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"checkWin",value:function(e,t){for(var n=[],a=!1,r=0;r<e.length;r++)e[r]===t&&n.push(r);return f.forEach(function(e){e.every(function(e){return n.indexOf(e)>-1})&&(a=!0)}),a}},{key:"gameOver",value:function(){for(var e=this,t=this.state.moves,n=[],a=[],r=0;r<t.length;r++)t[r]===this.human?n.push(r):t[r]===this.ai&&a.push(r);f.forEach(function(r){r.every(function(e){return n.indexOf(e)>-1})?e.setState({message:"You win!",gameOver:!0}):r.every(function(e){return a.indexOf(e)>-1})?e.setState({message:"You lose!",gameOver:!0}):9===function(){var e=0;return t.forEach(function(t){"number"!==typeof t&&e++}),e}()&&e.setState({message:"Its a tie!",gameOver:!0})})}},{key:"handleClick",value:function(e){if(!this.state.gameOver){if("number"===typeof this.state.moves[e]){var t=this.state.moves;t[e]=this.human,this.setState({moves:t})}else this.setState({message:"Someone already went there!"});this.gameOver(),this.aiTurn(this.bestSpot()),this.gameOver()}}},{key:"emptySquares",value:function(){return this.state.moves.slice(0).filter(function(e){return"number"===typeof e})}},{key:"bestSpot",value:function(){var e=this.state.moves.slice(0);return this.minimax(e,this.ai).index}},{key:"aiTurn",value:function(e){var t=this.state.moves;t[e]=this.ai,this.setState({moves:t})}},{key:"minimax",value:function(e,t){var n=e.filter(function(e){return"number"===typeof e});if(this.checkWin(e,this.human))return{score:-10};if(this.checkWin(e,this.ai))return{score:10};if(0===n.length)return{score:0};for(var a,r=[],s=0;s<n.length;s++){var i={};if(i.index=e[n[s]],e[n[s]]=t,t===this.human){var o=this.minimax(e,this.ai);i.score=o.score}else{var c=this.minimax(e,this.human);i.score=c.score}e[n[s]]=i.index,r.push(i)}if(t===this.ai)for(var u=-1e4,l=0;l<r.length;l++)r[l].score>u&&(u=r[l].score,a=l);else for(var m=1e4,h=0;h<r.length;h++)r[h].score<m&&(m=r[h].score,a=h);return r[a]}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<9;n++)t.push(r.a.createElement(h,{player:this.state.moves["".concat(n)],handleClick:function(t){return e.handleClick(t)},key:n,position:n}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(v,{message:this.state.message,restart:this.restart}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"gameboard"},t))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.dac41c15.chunk.js.map