(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"13\u266f11":"II/I\u2077","7\u266f9":"\u266dIII/I","7\u266d9\u266d5":"\u266dV/I","13\u266d9":"VI/I\u2077","7\u266f9\u266f5":"\u266dVI/I\u2077"}')},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),o=(a(17),a(1)),i=a(2),d=a(4),l=a(3),u=(a(18),a(7)),b=(a(19),a(20),["A","B","C","D","E","F","G"]),m=["Bb","Eb","Ab","Db","Gb"],h=["C#","D#","F#","G#","A#"],f=a(5);function C(e){var t;return t="b"===e?m:"#"===e?h:f.sample([m,h]),f.shuffle(b.concat(t))}var E=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={notes:C()},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.isHidden?null:r.a.createElement("div",{className:"NotesInRandomOrder"},r.a.createElement("div",{className:"grid",onClick:function(){e.setState({notes:C()})}},this.state.notes.map((function(e,t){return r.a.createElement("div",{className:"cell",key:t},e)}))))}}]),a}(r.a.Component),v=a(6),k=a(11),p=a(5);var F={A:"E",B:"F#",C:"G",D:"A",E:"B",F:"C",G:"D","A#":"E#","C#":"G#","D#":"A#","F#":"C#","G#":"D#",Bb:"F",Eb:"Bb",Ab:"Eb",Db:"Ab",Gb:"Db"},A={A:"C#",B:"D#",C:"E",D:"F#",E:"G#",F:"A",G:"B","A#":"C##","C#":"E#","D#":"F##","F#":"A#","G#":"B#",Bb:"D",Eb:"G",Ab:"C",Db:"F",Gb:"Bb"},D={A:"C",B:"D",C:"Eb",D:"F",E:"G",F:"Ab",G:"Bb","A#":"C#","C#":"E","D#":"F#","F#":"A","G#":"B",Bb:"Db",Eb:"Gb",Ab:"Cb",Db:"Fb",Gb:"Bbb"},G={A:"G",B:"A",C:"Bb",D:"C",E:"D",F:"Eb",G:"F","A#":"G#","C#":"B","D#":"C#","F#":"E","G#":"F#",Bb:"Ab",Eb:"Db",Ab:"Gb",Db:"Cb",Gb:"Fb"},B={A:"G#",B:"A#",C:"B",D:"C#",E:"D#",F:"E",G:"F#","A#":"G##","C#":"B#","D#":"C##","F#":"E#","G#":"F##",Bb:"A",Eb:"D",Ab:"G",Db:"C",Gb:"F"},y={A:"D#",B:"E#",C:"F#",D:"G#",E:"A#",F:"B",G:"C#","A#":"D##","C#":"F##","D#":"G##","F#":"B#","G#":"C##",Bb:"E",Eb:"A",Ab:"D",Db:"G",Gb:"C"},N={A:"Eb",B:"F",C:"Gb",D:"Ab",E:"Bb",F:"Cb",G:"Db","A#":"E","C#":"G","D#":"A","F#":"C","G#":"D",Bb:"Fb",Eb:"Bbb",Ab:"Ebb",Db:"Abb",Gb:"Dbb"};function w(e,t){return"P5"===t?F[e]:"M3"===t?A[e]:"m3"===t?D[e]:"+4"===t?y[e]:"o5"===t?N[e]:"m7"===t?G[e]:"M7"===t?B[e]:void 0}function g(e){var t;switch(e){case"\u25b3":t=["M3","M7"];break;case"7":t=["M3","m7"];break;case"m7":t=["m3","m7"];break;default:throw new Error("not implemented for typeOfChord=".concat(e))}return function(e){return b.concat(h).concat(m).map((function(t){return{front:t,back:"".concat(w(t,e[0]),",").concat(w(t,e[1]))}}))}(t)}var O=a(5);function S(e,t,a){var n=[e,w(e,t[0]),w(e,t[1]),w(e,t[2])];return a?O.shuffle(n):n}function j(e){var t,a=e.chordQuality,n=e.isRandomOrderBack;switch(a){case"\u25b3":t=["M3","P5","M7"];break;case"7":t=["M3","P5","m7"];break;case"m7":t=["m3","P5","m7"];break;case"\xf87":t=["m3","o5","m7"];break;default:throw new Error("not implemented for chordQuality=".concat(a))}return function(e,t){return b.concat(h).concat(m).map((function(a){return{front:a,back:"".concat(S(a,e,t).join(" "))}}))}(t,n)}var I=a(5),x=[["polychordFractions","polychordFractions"],["seventhsAndThirds","\u25b3"],["seventhsAndThirds","7"],["seventhsAndThirds","m7"],["seventhChords","\u25b3"],["seventhChords","7"],["seventhChords","m7"],["seventhChords","\xf87"]];function M(e){switch(e[0]){case"polychordFractions":return p.entries(k).map((function(e){return{front:e[0],back:e[1]}}));case"seventhsAndThirds":return g(e[1]);case"seventhChords":return j({chordQuality:e[1]});default:throw new Error("not implemented for deck=".concat(e))}}function R(e,t){for(var a=M(e);;){var n=I.sample(a);if(!I.isEqual(n,t))return n}}var T=x.map((function(e){return{type:e[0],subType:e[1],displayName:e[1]}})),H=(a(23),a(5)),P={front:"blue",back:"green"},J=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=H.sample(x);return n.state={nextCardSide:"front",card:R(r),deck:r,side:"front"},n.toggleNextCardFace=n.toggleNextCardFace.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"flipCard",value:function(){this.setState({side:"front"===this.state.side?"back":"front"})}},{key:"handleCardClick",value:function(){this.state.side===this.state.nextCardSide?this.flipCard():this.showRandomCard(this.state.deck)}},{key:"showRandomCard",value:function(e,t){this.setState({deck:e,card:R(e,this.state.card),side:t||this.state.nextCardSide})}},{key:"toggleNextCardFace",value:function(){var e="front"===this.state.nextCardSide?"back":"front";this.setState({nextCardSide:e}),this.showRandomCard(this.state.deck,e)}},{key:"nameOfDeck",value:function(e){return H.last(e)}},{key:"render",value:function(){var e=this;return this.props.isHidden?null:r.a.createElement("div",{className:"FlashCards"},r.a.createElement("div",{className:"deck-selection"},H.uniq(T.map((function(e){return e.type}))).map((function(t,a){return r.a.createElement("div",{className:"deck-selection-row",key:a},r.a.createElement("span",{className:"deck-selection-row-header",key:a+10},t),r.a.createElement("div",{className:"buttons",key:a+20},T.filter((function(e){return e.type===t})).map((function(t,a){return r.a.createElement(u.a,{variant:"dark",onClick:function(){e.showRandomCard([t.type,t.subType])},key:a},t.displayName)}))))}))),r.a.createElement("div",{className:"card",onClick:function(){return e.handleCardClick()},style:{backgroundColor:P[this.state.side]}},r.a.createElement("span",{className:"card-deck"},this.nameOfDeck(this.state.deck)),r.a.createElement("span",{className:"card-content"},this.state.card[this.state.side])),r.a.createElement("div",{className:"card-options"},r.a.createElement("label",null,"Reverse",r.a.createElement("input",{name:"card-reverse",type:"checkbox",checked:"back"===this.state.nextCardSide,onChange:this.toggleNextCardFace}))))}}]),a}(r.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={screenNames:["Notes","Flash Cards"],currentScreen:"Notes"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.currentScreen),r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"page-header"},"Music"),r.a.createElement("main",{className:"page-main"},r.a.createElement(E,{isHidden:"Notes"!==this.state.currentScreen}),r.a.createElement(J,{isHidden:"Flash Cards"!==this.state.currentScreen})),r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"Footer"},this.state.screenNames.map((function(t,a){return r.a.createElement(u.a,{variant:"dark",onClick:function(){e.setState({currentScreen:t})},key:a},t)})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.1d801fde.chunk.js.map