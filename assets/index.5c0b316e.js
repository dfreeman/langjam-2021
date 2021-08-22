var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,i=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))o.call(t,n)&&s(e,n,t[n]);return e},l=(e,a)=>t(e,n(a)),c=(e,t)=>{var n={};for(var s in e)r.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&a)for(var s of a(e))t.indexOf(s)<0&&o.call(e,s)&&(n[s]=e[s]);return n};import{s as u,d,a as m,A as h,R as p,_ as f,r as v,b as k,l as g}from"./vendor.e2751929.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var y,w;function x(e){throw new Error("Internal error: hit allegedly-unreachable code. "+e)}class b{constructor(e){this.loc=e,this.kind="Void"}static fromToken({loc:e}){return new b(e)}}class E{constructor(e,t){this.value=e,this.loc=t,this.kind="Number"}static fromToken({loc:e},t){return new E(Number(t.content),e)}}class T{constructor(e,t){this.value=e,this.loc=t,this.kind="Boolean"}static fromToken({loc:e},t){return new T("true"===t.content,e)}}class S{constructor(e,t,n,a){this.value=e,this.isMeta=t,this.metaValue=n,this.loc=a,this.kind="Identifier"}toString(){var e;return this.isMeta?`${this.value}#${null!=(e=this.metaValue)?e:""}`:this.value}static fromToken({loc:e},t){let n=t.content.indexOf("#"),a=-1!==n,r=t.content,o=null;return a&&(o=r.slice(n+1)||null,r=r.slice(0,n)),new S(r,a,o,e)}}(w=y||(y={}))[w.Add=0]="Add",w[w.Subtract=1]="Subtract",w[w.Modulo=2]="Modulo",w[w.Equals=3]="Equals";class C{constructor(e,t,n,a){this.lhs=e,this.op=t,this.rhs=n,this.loc=a,this.kind="BinOp"}static fromSequence({loc:e},[t,n,a]){return new C(t,C.resolveOp(n.content),a,e)}static resolveOp(e){switch(e){case"+":return 0;case"-":return 1;case"%":return 2;case"==":return 3}throw new Error("Internal error: invalid binary operator "+e)}}class N{constructor(e,t,n){this.name=e,this.value=t,this.loc=n,this.kind="DefDeclaration"}static fromSequence({loc:e},[,t,,n]){return new N(t,n,e)}}class z{constructor(e){this.declarations=e,this.kind="Script"}static fromSequence(e){let t=new Map;for(let[n,a]of e)if("DefDeclaration"===a.kind){let{name:e,value:r}=a;t.set(e.value,{meta:n,value:r})}else if("ADTDeclaration"===a.kind){let{name:e,constructors:r}=a,o=null;for(let n of r)n.name.value===e.value?o=n:t.set(n.name.value,{meta:null,value:n});t.set(e.value,{meta:n,value:o})}else x(a);return new z(t)}}class q{constructor(e,t){this.segments=e,this.loc=t,this.kind="SemanticComment"}static fromSegments({loc:e},[,t]){let n,a=[];for(let r of t)if("kind"in r)n?n.content+=r.content:n={kind:"TextSegment",content:r.content};else if(n&&(a.push(n),n=void 0),"expression"in r)a.push({kind:"EmbedSegment",content:r.expression});else{let[e,t,n]=r.example,o=e.content.slice(e.content.indexOf("#")+1).trim(),s=u`${r.source.slice(e.content.length,r.source.length-n.content.length)}`;a.push({kind:"ExampleSegment",name:o,value:t,source:s})}return n&&a.push(n),new q(a,e)}}class L{constructor(e,t,n,a,r){this.source=e,this.name=t,this.params=n,this.body=a,this.loc=r,this.kind="Function"}static fromSequence({source:e,loc:t},[,n,a,r]){var o;return new L(e,null!=(o=null==n?void 0:n.value)?o:null,a,r,t)}}class I{constructor(e,t,n){this.callee=e,this.args=t,this.loc=n,this.kind="Call"}static fromSequence({loc:e},[t,,n]){return new I(t,n,e)}}class O{constructor(e,t,n){this.name=e,this.constructors=t,this.loc=n,this.kind="ADTDeclaration"}static fromSequence({loc:e},[,t,,n]){let a=n.map((([e,,t,n])=>new A(e,t,{offset:e.loc.offset,length:n.offset+n.content.length-e.loc.offset})));return new O(t,a,e)}}class A{constructor(e,t,n){this.name=e,this.params=t,this.loc=n,this.kind="ADTConstructor"}}class M{constructor(e,t,n){this.name=e,this.params=t,this.loc=n,this.kind="ADTConstructor"}static fromSequence({loc:e},[t,,n]){return new M(t,n,e)}}class B{constructor(e,t,n){this.subject=e,this.arms=t,this.loc=n,this.kind="Match"}static fromSequence({loc:e},[,t,n]){let a=n.map((([,e,,t])=>({pattern:e,result:t})));return new B(t,a,e)}}class F extends d.Combinator{constructor(e,t){super(),this.combinator=e,this.construct=t}children(){return[this.combinator]}parse(e,t,n){let a=e.tokens[e.index];this.combinator.parse(e,t,(t=>{if(t.success){let r=t.state.tokens[t.state.index-1],o=r.offset+r.content.length,s={offset:a.offset,length:o-a.offset},i=e.source.slice(s.offset,o);n(m(this.construct({loc:s,source:i},t.value),t.state))}else n(t)}))}}function D(e,t){return new F(t,e)}const _=d.token(/\s+/,{priority:0,silent:!0}),P=d.token(/#.*(?=\n|$)/,{priority:257,silent:!0}),$=d.token(/def\b/,{kind:"DefKeyword"}),Y=d.token(/data\b/,{kind:"DataKeyword"}),j=d.token(/fun\b/,{kind:"FunKeyword"}),R=d.token(/match\b/,{kind:"MatchKeyword"}),V=d.token(/end\b/,{kind:"EndKeyword"}),K=d.token("=",{kind:"Equals",priority:256}),W=d.token("->",{kind:"RArrow"}),H=d.token("(",{kind:"LParen"}),G=d.token(")",{kind:"RParen"}),Z=d.token(",",{kind:"Comma"}),U=d.token(";",{kind:"Semicolon"}),J=d.token("|",{kind:"Pipe"}),Q=d.token(/\+|-/,{kind:"BinOp",priority:256}),X=d.token("%",{kind:"BinOp"}),ee=d.token("==",{kind:"BinOp"}),te=D(S.fromToken,d.token(/[a-z_][a-z0-9_]*\b(?!#)/i,{kind:"Identifier",priority:256})),ne=D(S.fromToken,d.token(/[a-z_][a-z0-9_]*(?:#(?:[a-z][a-z0-9]*)?)/i,{kind:"MetaIdentifier",priority:256})),ae=D(b.fromToken,d.token(/void\b/,{kind:"Void"})),re=D(E.fromToken,d.token(/-?\d+(\.\d*)?/,{kind:"Number"})),oe=D(T.fromToken,d.token(/true\b|false\b/,{kind:"Boolean"})),se=d.defer((()=>d.alt(ae,te,re,oe,ie))),ie=D(M.fromSequence,d.seq(te,H,d.repeatSep(se,Z),G)),le=d.defer((()=>he)),ce=d.defer((()=>d.alt(ae,re,oe,te,ne,ue,de,me,d.seq(H,le,G).map((e=>e[1]))))),ue=D(L.fromSequence,d.seq(j,d.maybe(te),d.seq(H,d.repeatSep(te,Z),G).map((e=>e[1])),d.repeatSep(le,U),V)),de=D(I.fromSequence,d.seq(ce,H,d.repeatSep(le,Z),G)),me=D(B.fromSequence,d.seq(R,le,d.repeatOne(d.seq(J,se,W,le)),V)),he=d.defer((e=>d.alt(pe,D(C.fromSequence,d.seq(e,ee,pe))))),pe=d.defer((e=>d.alt(fe,D(C.fromSequence,d.seq(e,X,fe))))),fe=d.defer((e=>d.alt(ce,D(C.fromSequence,d.seq(e,Q,ce))))),ve=d.state("in-comment",{exclusive:!0}),ke=d.state("in-comment-embed"),ge=d.state("in-example-code"),ye=d.token(/###\s*/,{kind:"CommentStart",pushState:ve}),we=d.token(/[\s\S]+?(?=@example|###|{|$)/,{kind:"CommentText",requiredState:ve}),xe=d.token(/\s*###/,{kind:"CommentEnd",popState:ve,priority:0}),be=d.token("{",{kind:"CommentEmbedStart",priority:0,requiredState:ve,pushState:ke}),Ee=d.token("}",{kind:"CommentEmbedEnd",popState:ke}),Te=d.seq(be,le,Ee).map((e=>({expression:e[1]}))),Se=d.token(/\s*@example#[a-zA-Z_][a-zA-Z0-9_]*\b/,{kind:"CommentExample",requiredState:ve,priority:0,pushState:ge}),Ce=d.token(/\s*@end/,{kind:"CommentExampleEnd",popState:ge}),Ne=D((({source:e},t)=>({source:e,example:t})),d.seq(Se,le,Ce)),ze=D(q.fromSegments,d.seq(ye,d.repeat(d.alt(we,Te,Ne)),xe)),qe=D(N.fromSequence,d.seq($,te,K,le)),Le=D(O.fromSequence,d.seq(Y,te,K,d.repeatOneSep(d.seq(te,H,d.repeatSep(te,Z),G),J))),Ie=d.alt(qe,Le),Oe=d.repeat(d.seq(d.maybe(ze),Ie)).map(z.fromSequence),Ae=d.alt(le.map((e=>({kind:"expression",value:e}))),Oe.map((e=>({kind:"script",value:e})))),Me=new d.Parser(Ae,[_,P]);class Be{constructor(e){this.thunk=e,this.kind="Lazy",this.evaluating=!1}force(){if(!this.value){if(this.evaluating)throw new Error("Circular reference!");try{this.evaluating=!0,this.value=this.thunk()}finally{this.evaluating=!1}}return this.value}}class Fe{constructor(){this.kind="Void"}}class De{constructor(e,t){this.name=e,this.segments=t,this.kind="Comment"}}class _e{constructor(e){this.value=e,this.kind="Number"}}class Pe{constructor(e){this.value=e,this.kind="Boolean"}}class $e{constructor(e,t,n,a,r){this.source=e,this.name=t,this.params=n,this.body=a,this.scope=r,this.kind="Function"}}class Ye{constructor(e,t,n){this.name=e,this.params=t,this.body=n,this.kind="NativeFunction"}}class je{constructor(e,t){this.adtConstructor=e,this.args=t,this.kind="ADTInstance"}}class Re{constructor(e=null){this.parent=e,this.values=new Map,this.meta=new Map}clear(){this.values.clear(),this.meta.clear()}define(e,t){this.values.set(e,t)}resolve(e){var t,n;let a=null!=(n=this.values.get(e))?n:null==(t=this.parent)?void 0:t.resolve(e);return"Lazy"===(null==a?void 0:a.kind)&&(a=a.force()),a}defineMeta(e,t){this.meta.set(e,t)}resolveMeta(e){var t,n;return null!=(n=this.meta.get(e))?n:null==(t=this.parent)?void 0:t.resolveMeta(e)}resolveExample(e,t){var n;let a=null==(n=this.resolveMeta(e))?void 0:n.segments.find((e=>"ExampleSegment"===e.kind&&e.name===t));return null==a?void 0:a.content.force()}}class Ve{constructor(e={}){this.definitions=e,this.globalScope=new Re,this.registerDefinitions()}reset(){this.globalScope.clear(),this.registerDefinitions()}execute(e){for(const[t,{meta:n,value:a}]of e.declarations.entries())a&&this.globalScope.define(t,new Be((()=>this.evaluate(a,this.globalScope)))),n&&this.globalScope.defineMeta(t,this.evaluateComment(t,n,this.globalScope))}evaluate(e,t=this.globalScope){return"Number"===e.kind?this.evaluateNumber(e):"Boolean"===e.kind?this.evaluateBoolean(e):"Identifier"===e.kind?this.evaluateIdentifier(e,t):"Function"===e.kind?this.evaluateFunction(e,t):"Call"===e.kind?this.evaluateCall(e,t):"ADTConstructor"==e.kind?this.evaluateConstructor(e):"Match"===e.kind?this.evaluateMatch(e,t):"Void"===e.kind?new Fe:"BinOp"===e.kind?this.evaluateBinOp(e,t):x(e)}registerDefinitions(){for(let[e,{value:t,meta:n}]of Object.entries(this.definitions))t&&this.globalScope.define(e,t),n&&this.globalScope.defineMeta(e,n)}evaluateNumber(e){return new _e(e.value)}evaluateBoolean(e){return new Pe(e.value)}evaluateIdentifier(e,t){let n=e.isMeta?e.metaValue?t.resolveExample(e.value,e.metaValue):t.resolveMeta(e.value):t.resolve(e.value);if(!n)throw new Ke(e);return n}evaluateComment(e,t,n){let a=t.segments.map((e=>{if("TextSegment"===e.kind)return e;if("EmbedSegment"===e.kind){let t=e.content;return{kind:"EmbedSegment",content:new Be((()=>this.evaluate(t,n)))}}{let t=e.value;return{kind:"ExampleSegment",name:e.name,source:e.source,content:new Be((()=>this.evaluate(t,n)))}}}));return new De(e,a)}evaluateFunction(e,t){let n=e.params.map((e=>e.value));return new $e(e.source,e.name,n,e.body,t)}evaluateCall(e,t){let n=this.evaluate(e.callee,t);if("Function"!==n.kind&&"NativeFunction"!==n.kind)throw new We(e.callee.loc,"Tried to call a non-function value");if(e.args.length!==n.params.length)throw new We(e.loc,"Tried to call a function with the wrong number of arguments");let a=e.args.map((e=>this.evaluate(e,t)));if("NativeFunction"===n.kind)return n.body(t,a);let r,o=new Re(n.scope);n.name&&o.define(n.name,n);for(let s=0;s<a.length;s++)o.define(n.params[s],a[s]);for(let s of n.body)r=this.evaluate(s,o);return null!=r?r:new Fe}evaluateConstructor(e){return new Ye(e.name.value,e.params.map((e=>e.value)),(function(e,t){return new je(this,t)}))}evaluateBinOp(e,t){let n=this.evaluate(e.lhs,t),a=this.evaluate(e.rhs,t);if(e.op===y.Equals)return new Pe(this.isEqual(n,a));if("Number"!==n.kind||"Number"!==a.kind)throw new We(e.loc,"Expected two numbers");return e.op===y.Add?new _e(n.value+a.value):e.op===y.Subtract?new _e(n.value-a.value):e.op===y.Modulo?new _e(n.value%a.value):void x(e.op)}isEqual(e,t){if(e===t)return!0;if(e.kind!==t.kind)return!1;if("ADTInstance"===e.kind&&"ADTInstance"===t.kind){if(e.adtConstructor!==t.adtConstructor||e.args.length!==t.args.length)return!1;for(let n=0;n<e.args.length;n++)if(!this.isEqual(e.args[n],t.args[n]))return!1;return!0}return("Boolean"===e.kind&&"Boolean"===t.kind||"Number"===e.kind&&"Number"===t.kind)&&e.value===t.value}evaluateMatch(e,t){let n=this.evaluate(e.subject,t);for(let a of e.arms){let e=this.considerPattern(a.pattern,n,t);if(e){let n=new Re(t);for(let[t,a]of e)n.define(t,a);return this.evaluate(a.result,n)}}throw new He(e.loc)}considerPattern(e,t,n){if("Void"===e.kind&&"Void"===t.kind)return[];if("Number"===e.kind&&"Number"===t.kind&&e.value===t.value)return[];if("Boolean"===e.kind&&"Boolean"===t.kind&&e.value===t.value)return[];if("Identifier"===e.kind)return"_"===e.value?[]:[[e.value,t]];if("ADTConstructor"===e.kind&&"ADTInstance"===t.kind){if(n.resolve(e.name.value)===t.adtConstructor&&e.params.length===t.args.length){let a=[];for(let r=0;r<t.args.length;r++){let o=this.considerPattern(e.params[r],t.args[r],n);if(null===o)return null;a.push(...o)}return a}}return null}}class Ke extends Error{constructor(e){super(`Reference to unbound identifier ${e}`),this.loc=e.loc}}class We extends Error{constructor(e,t){super(t),this.loc=e}}class He extends Error{constructor(e){super("Inexhaustive `match` statement failed"),this.loc=e}}const Ge=h.require("ace/mode/text").Mode,Ze=e=>p.createElement(f,l(i({mode:Qe,theme:"tomorrow_night_eighties",showPrintMargin:!1,highlightActiveLine:!1},e),{style:i({width:"100%",height:"100%"},e.style),setOptions:i({useSoftTabs:!0,tabSize:2},e.setOptions)})),Ue={DefKeyword:"keyword",DataKeyword:"keyword",FunKeyword:"keyword",EndKeyword:"keyword",MatchKeyword:"keyword",Void:"constant.language",Number:"constant.numeric",Boolean:"constant.language",Equals:"keyword.operator",BinOp:"keyword.operator",Pipe:"keyword.operator",RArrow:"keyword.operator",Identifier:"identifier",MetaIdentifier:"heading",CommentText:"comment",CommentExample:"heading",CommentExampleEnd:"heading",CommentEmbedStart:"comment",CommentEmbedEnd:"comment"};class Je{constructor(){this.statesByName=new Map}getLineTokens(e,t="<INITIAL>"){var n;try{let a=this.hydrateState(t),r=Me.tokenize(e+"\n",a),o=[],s=0;for(let t of r.tokens)t.offset>s&&o.push({type:"comment",value:e.slice(s,t.offset)}),o.push({type:null!=(n=Ue[t.kind])?n:"comment",value:t.content.replace(/\n$/,"")}),s=t.offset+t.content.length;return e.length>s&&o.push({type:"comment",value:e.slice(s,e.length)}),{tokens:o,state:this.dehydrateState(r.state)}}catch{return{tokens:[{type:"text",value:e}],state:"<INITIAL>"}}}dehydrateState(e){let t=["<INITIAL>"];for(let n of e){let e=this.statesByName.get(n.name);if(e){if(e!==n)throw new Error(`Internal error: duplicate state name '${n.name}'`)}else this.statesByName.set(n.name,n);t.push(n.name)}return t.join("||")}hydrateState(e){let t=[];for(let n of e.split("||"))if("<INITIAL>"!==n){let e=this.statesByName.get(n);if(!e)throw new Error("Internal error: unrecognized editor tokenizer state");t.push(e)}return t}}const Qe=new class extends Ge{constructor(){super(),this.$tokenizer=new Je}},Xe=v.exports.createContext((()=>{})),et=p.forwardRef((({evaluator:e,messages:t,pushMessage:n},a)=>{let r=v.exports.useRef();return p.createElement(Xe.Provider,{value:n},p.createElement("div",{style:{overflow:"auto",display:"flex",flexFlow:"column",flex:1},ref:a},p.createElement("div",{style:{marginTop:"-1px"}},t.map(((e,t)=>p.createElement("div",{key:t},p.createElement(nt,{message:e}))))),p.createElement("div",{style:{display:"flex",flexFlow:"row",paddingTop:"3px",borderTop:"1px solid #444"}},p.createElement(tt,{kind:"keyword",content:"❯"}),p.createElement(Ze,{minLines:1,maxLines:10,showGutter:!1,onLoad:e=>r.current=e,style:{flex:1,marginTop:"2px",maxHeight:"200px"},commands:[{bindKey:{win:"Enter",mac:"Enter"},name:"submit",exec(t){let a=t.getValue(),r=!1;try{let o=Me.parse(a);n({kind:"in",text:a}),r=!0,"expression"===o.kind?n({kind:"out",value:e.evaluate(o.value)}):e.execute(o.value),t.setValue("")}catch(o){if(o instanceof d.ParseError&&"<EOF>"===o.found.kind)return void t.insert("\n");r||n({kind:"in",text:a}),n({kind:"error",message:o.message}),t.setValue("")}}}]})),p.createElement("div",{style:{flex:1},onClick:()=>{var e;return null==(e=null==r?void 0:r.current)?void 0:e.focus()}})))})),tt=({kind:e,content:t})=>p.createElement("span",{className:"ace-tomorrow-night-eighties",style:{fontSize:"14px",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center"}},p.createElement("span",{className:`ace_${e}`,style:{padding:"0 2px 0 4px"}},t)),nt=e=>{var t=e,{message:n}=t;c(t,["message"]);return p.createElement("div",{style:{padding:"3px 0",display:"flex",borderTop:"1px solid #333"}},"in"===n.kind?p.createElement(p.Fragment,null,p.createElement(tt,{kind:"comment",content:"❯"}),p.createElement("div",{style:{paddingLeft:"4px"}},p.createElement(ot,{style:{display:"block"},source:n.text}))):"out"===n.kind||"log"===n.kind?p.createElement(p.Fragment,null,p.createElement(tt,{kind:"comment",content:"out"===n.kind?"❮":""}),p.createElement("div",{style:{paddingLeft:"4px",display:"flex",flex:1}},p.createElement(at,{value:n.value}))):"error"===n.kind?p.createElement(p.Fragment,null,p.createElement(tt,{kind:"variable",content:"⚠"}),p.createElement("div",{style:{padding:"2px 0 0 4px"},className:"ace_editor"},n.message)):void x(n))},at=e=>{var t=e,{value:n}=t,a=c(t,["value"]);return"Comment"===n.kind?p.createElement(st,i({comment:n},a)):"Function"===n.kind?p.createElement(ot,i({style:{display:"block"},source:n.source},a)):p.createElement(rt,i({value:n},a))},rt=e=>{var t=e,{value:n}=t,a=c(t,["value"]);const r=v.exports.useContext(Xe);return"Boolean"===n.kind||"Number"===n.kind?p.createElement(ot,i({source:String(n.value)},a)):"Void"===n.kind?p.createElement(ot,i({source:"void"},a)):"NativeFunction"===n.kind||"Function"===n.kind?p.createElement(ot,i({source:`${n.name}(${n.params.join(", ")})`},a)):"Comment"===n.kind?p.createElement(ot,i({source:`${n.name}#`,style:{cursor:"pointer",border:"1px solid #444",borderRadius:"2px",backgroundColor:"#444",margin:"0 -2px",padding:"0 2px"},onClick:()=>r({kind:"log",value:n})},a)):"ADTInstance"===n.kind?p.createElement("span",i({},a),p.createElement(ot,{source:`${n.adtConstructor.name}(`}),n.args.flatMap(((e,t)=>{let n=[p.createElement(rt,{value:e,key:t})];return t>0&&n.unshift(p.createElement(ot,{source:", ",key:`comma:${t}`})),n})),p.createElement(ot,{source:")"})):void x(n)},ot=e=>{var t=e,{source:n}=t,a=c(t,["source"]);let r,o=n.split("\n").map((e=>{let t=Qe.$tokenizer.getLineTokens(e,r);return r=t.state,t.tokens}));return p.createElement("span",l(i({className:"ace_editor ace-tomorrow-night-eighties"},a),{style:i({whiteSpace:"pre",marginTop:"2px"},a.style)}),o.flatMap(((e,t)=>{let n=e.map(((e,n)=>p.createElement("span",{key:`${t}:${n}`,className:e.type.split(".").map((e=>`ace_${e}`)).join(" ")},e.value)));return t>0&&n.unshift(p.createElement("br",{key:`${t}:newline`})),n})))},st=({comment:e})=>p.createElement("div",{style:{padding:"1em",margin:"4px 4px 4px 0",borderRadius:"4px",backgroundColor:"#444"},className:"ace_editor"},p.createElement("div",{style:{fontSize:"130%",marginBottom:"8px"}},e.name),e.segments.map(((t,n)=>"TextSegment"===t.kind?p.createElement("span",{key:n,style:{whiteSpace:"pre-wrap"}},t.content):"EmbedSegment"===t.kind?p.createElement("span",{className:"ace-tomorrow-night-eighties",key:n,style:{display:"inline-block",padding:"0 2px",margin:"0 -2px",borderRadius:"2px"}},p.createElement(rt,{value:t.content.force(),key:n})):p.createElement(it,{key:n,comment:e,example:t})))),it=e=>{var t=e,{example:n,comment:a}=t,r=c(t,["example","comment"]);let o=v.exports.useContext(Xe),s=`${a.name}#${n.name}`;return p.createElement("div",l(i({},r),{style:{marginTop:"1em",cursor:"pointer"},onClick:()=>{o({kind:"in",text:s}),o({kind:"out",value:n.content.force()})}}),p.createElement("div",{style:{display:"flex"}},p.createElement("div",{className:"ace-tomorrow-night-eighties",style:{borderTopLeftRadius:"4px",borderTopRightRadius:"4px",padding:".5em 1em 0"}},p.createElement(ot,{source:s}))),p.createElement("div",{className:"ace-tomorrow-night-eighties",style:{borderRadius:"4px",borderTopLeftRadius:0,padding:"1em"}},p.createElement(ot,{source:n.source})))},lt=({examples:e,selected:t,onSelect:n})=>p.createElement("div",{style:{fontFamily:"sans-serif",fontSize:"16px"}},e.map((e=>"heading"in e?p.createElement("div",{key:e.heading,style:{padding:".5rem",margin:".5rem 0",fontSize:e.jumbo?"24px":void 0,fontWeight:"bold"}},e.heading):p.createElement("div",{onClick:()=>n(e),key:e.name,className:"sidebar-item",style:{cursor:"pointer",color:t===e?"white":"#aaa",backgroundColor:t===e?"#666":"",padding:".5em .5em .5em 1em",margin:".5em 0"}},e.name)))),ct=[{heading:"Yack",jumbo:!0},{name:"Welcome",source:u`
      # Welcome to the Yack interative walkthrough! This is the
      # editor pane, where editable example code will be shown.
      #
      # Navigate using the sidebar to the left for a walkthrough
      # of the Yack language.
    `,repl:[u`
        # This pane is the console, where you can interactively
        # play with the Yack code you write in the editor pane.
      `,"2 + 2"]},{name:"Getting Started",source:u`
      # You can make any changes you want here in the editor pane,
      # and they'll be reflected in any interactions you have in the
      # console on the right.

      # Here's an example of defining a top-level value in Yack:
      def value = 123

      # If you look in the console, you'll see that entering \`value\`
      # prints \`123\`. Of course, since the prompt for this jam was
      # "first-class comments", comments are a bit special in Yack.

      ###
      This a doc comment for the value declared below it. This comment
      is itself a first-class value in the Yack language.

      You can access this comment as an expression in source or
      in the console by adding a "#" at the end of its associated
      identifier, like so: {documentedValue#}.
      ###
      def documentedValue = true


      # Before going deeper on what we can do with comment values
      # in Yack, let's explore some of the language's more mundane
      # features first.
    `,repl:[u`
        # Here you can enter one-off expressions and definitions
        # using the values defined to the left. You'll then see
        # the evaluated result.
        #
        # For example:
      `,"value","# Doc comments are themselves first class values in Yack:","documentedValue#"]},{heading:"Language Features"},{name:"Data Structures",source:u`
      # Given it was hacked together in 48 hours, Yack doesn't
      # have an enormous number of fun features. Instead, we
      # get the bare minimum necessary to express some interesting
      # things, even if not in the most ergonomic way.

      # The core of our toolkit is algebraic data types, declared
      # with the \`data\` keyword.

      ###
      Our go-to example ADT is a List.

      A List consists of either a {Nil} value, representing the
      empty list, or a {Cons} value, which represents a list
      element tacked on to the rest of the list.
      ###
      data List = Nil() | Cons(head, tail)

      ### An empty list is just {Nil()} ###
      def empty = Nil()

      ### We can define a list [1, 2, 3] by chaining Cons calls. ###
      def oneTwoThree = Cons(1, Cons(2, Cons(3, Nil())))
    `,repl:["List#","oneTwoThree",u`
        # Notice that, since doc comments are themselves first class
        # values, we can embed them in other data structures.
      `,"Cons(oneTwoThree#, Nil())"]},{name:"Pattern Matching",source:u`
      # Once we've built a data structure, we need a way to get
      # that information back out! Yack's answer to that is the
      # \`match\` expression.

      # Let's recreate our List example again.
      data List = Nil() | Cons(head, tail)

      # And build a 1, 2, 3 list...
      def oneTwoThree = Cons(1, Cons(2, Cons(3, Nil())))

      # And now we can turn around and get elements back out
      # by matching on the structure of the data.
      def two = match oneTwoThree
      | Cons(_, Cons(el, _)) -> el
      | _ -> void
      end
    `,repl:[u`
        # And we can confirm over here that \`two\` is in fact \`2\`.
        two
      `,u`
        # Note that since Yack is dynamically typed, there is
        # no requirement that your matches be exhaustive. If a
        # value is tested and none of the patterns apply, a
        # runtime error will result instead.

        match oneTwoThree
        | Nil() -> true
        end
      `]},{name:"Functions",source:u`
      ###
      Yack has functions as first class values, with none
      of that fancy shorthand syntax for declaring them.

      This function adds {2} and {2} together to get {2 + 2}.
      ###
      def addTwoAndTwo = fun()
        2 + 2
      end
    `,repl:[u`
        # We can call it to get our answer:
        addTwoAndTwo()
      `,u`
        # Or if we log it directly to the console, we'll
        # see its source:
        addTwoAndTwo
      `,"",u`
        # And as with other declarations, appending a '#'
        # will show us the associated documentation.
        addTwoAndTwo#
      `]},{heading:"Doc Comments"},{name:"Named Examples",source:u`
      # Doc comments in Yack have a built-in notion of
      # named expressions called "examples".

      ###
      This is the same list structure we saw before,
      but now with some examples.

      Here's an empty list:
      @example#emptyList
        Nil()
      @end

      And here's one with some arithmetic in it:
      @example#mathList
        Cons(2 + 2,
          Cons(3 % 2,
            Nil()))
      @end
      ###
      data List = Nil() | Cons(head, tail)
    `,repl:["List#",u`
        # These expressions are accessible anywhere else in
        # your code using the format \`identifier#exampleName\`.
      `,"List#mathList","# You can also click any example to log its value to the console."]},{name:"Expression Interpolation",source:u`
      ###
      If you've been paying close attention, you may have
      already noticed that doc comments can have arbitrary
      expressions embedded in them, even outside of examples.

      For example: {2} + {2} = {2 + 2}.

      While this has some fun uses on its own, it combines
      particularly nicely with the fact that comment values,
      when embedded in a data structure (whether it's a List
      or another comment!), render as links to their content.

      See, for instance, {theOtherExample#}.
      ###
      def forExample = void

      ###
      Hopefully you got here by clicking {theOtherExample#}
      in the console output above :)

      Embedded expressions even reference examples from
      their own containing comment!
      @example#equalityCheck
        3 == 4
      @end
      End result? {theOtherExample#equalityCheck}
      ###
      def theOtherExample = void
    `,repl:["forExample#"]},{heading:"Toys"},{name:"FizzBuzz",source:u`
          ###
          We don't have strings in Yack, so instance we'll
          build a nice dummy data structure for our output.
          ###
          data FizzBuzz = Fizz() | Buzz() | FizzBuzz()

          ###
          We also want tuples, but 48 hours is not Tuple Time,
          so we improvise.
          ###
          data Pair = Pair(a, b)

          ###
          This example turned out not to be super exciting
          from a doc comments perspective. ¯\\_(ツ)_/¯
          ###
          def fizzbuzz = fun(n)
            match Pair(n % 5, n % 3)
            | Pair(0, 0) -> log(FizzBuzz())
            | Pair(0, _) -> log(Fizz())
            | Pair(_, 0) -> log(Buzz())
            | _ -> log(n)
            end;

            match n
            | 0 -> void
            | _ -> fizzbuzz(n - 1)
            end
          end
        `,repl:["fizzbuzz(15)"]},{name:"List Functions",source:u`
      # Ok, that's the whirlwind tour of the language. This last
      # section just contains a smattering of additional examples
      # that demonstrate how you might (not-super-ergonomically)
      # implement some common simple algorithms in Yack.

      ###
      A list represents an ordered collection of items.

      Since Yack is totally dynamically typed, lists can be pretty
      free-form. They don't need to contain a consistent type of
      element, and they don't even necessarily need a terminating
      {Nil()} value (though that's still recommended...)

      @example#empty
        Nil()
      @end

      @example#oneTwoThree
        Cons(1, Cons(2, Cons(3, Nil())))
      @end
      ###
      data List = Nil() | Cons(head, tail)

      ###
      This returns the first element of a {List#}, or {void} if
      the list is empty.
      ###
      def head = fun(list)
        match list
        | Cons(head, _) -> head
        | _ -> void
        end
      end

      ###
      Returns everything BUT the first element of a {List#}, or
      {Nil()} if the list is already empty.
      ###
      def tail = fun(list)
        match list
        | Cons(_, tail) -> tail
        | _ -> List#empty
        end
      end

      ###
      Reverses the given {List#}, using cute recursion.

      For example, if we reverse {List#oneTwoThree}:
      @example#oneTwoThree
        reverse(List#oneTwoThree)
      @end
      We get {reverse#oneTwoThree}
      ###
      def reverse = fun(list)
        (fun reverse(list, reversed)
          match list
          | Nil() -> reversed
          | Cons(head, tail) ->
            reverse(tail, Cons(head, reversed))
          end
        end)(list, Nil())
      end
    `,repl:["head(List#oneTwoThree)","tail(List#oneTwoThree)","reverse#"]}],ut=({flex:e,children:t})=>p.createElement("div",{style:{flex:e,marginRight:"10px",marginBottom:"10px",display:"flex"},className:"ace-tomorrow-night-eighties"},p.createElement("div",{style:{display:"flex",flexFlow:"column",flex:1,boxShadow:"1px 1px 8px 4px #0006",border:"1px solid #292929"}},t)),dt=()=>{let[e,t]=v.exports.useState([]),[n,a]=v.exports.useState(ct[1]),[r,o]=v.exports.useState(""),s=e=>t((t=>[...t,e])),i=v.exports.useMemo((()=>{return new Ve((e={log:e=>s({kind:"log",value:e})},{log:{meta:new De([{kind:"TextSegment",content:"Logs a value to the screen."}],new Map),value:new Ye("log",["message"],((t,[n])=>(e.log(n),new Fe)))}}));var e}),[]),l=v.exports.useCallback((e=>{i.reset(),o(e),Object.assign(window,{source:e,evaluator:i,parser:Me});try{let t=Me.parse(e);if("script"!==t.kind)return;i.execute(t.value)}catch(t){console.error(t)}}),[i]),c=v.exports.useMemo((()=>g(l,250)),[]),u=v.exports.useRef(null);return v.exports.useEffect((()=>{var e;l(n.source),t([]);for(let t of null!=(e=n.repl)?e:[]){s({kind:"in",text:t});try{let e=Me.parse(t);"expression"===e.kind?s({kind:"out",value:i.evaluate(e.value)}):i.execute(e.value)}catch(a){s({kind:"error",message:a.message})}}}),[n]),v.exports.useEffect((()=>{var e;return null==(e=u.current)?void 0:e.scrollTo(0,999999999)}),[e.length]),p.createElement("div",{style:{display:"flex",flexFlow:"row",flex:1,paddingTop:"10px",paddingLeft:"10px",backgroundColor:"#555"}},p.createElement(ut,{flex:"1 0 200px"},p.createElement(lt,{examples:ct,selected:n,onSelect:a})),p.createElement(ut,{flex:"10"},p.createElement(Ze,{value:r,onChange:c})),p.createElement(ut,{flex:"10"},p.createElement(et,{evaluator:i,messages:e,pushMessage:s,ref:u})))};k.exports.render(p.createElement(dt,null),document.getElementById("application"));
