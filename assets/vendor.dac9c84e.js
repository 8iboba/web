function pa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qs=pa(Gs);function po(e){return!!e||e===""}function ga(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=pe(r)?el(r):ga(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(pe(e))return e;if(ge(e))return e}}const Js=/;(?![^(]*\))/g,Zs=/:(.+)/;function el(e){const t={};return e.split(Js).forEach(n=>{if(n){const r=n.split(Zs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function va(e){let t="";if(pe(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=va(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const te={},zt=[],Re=()=>{},tl=()=>!1,nl=/^on[^a-z]/,ur=e=>nl.test(e),ba=e=>e.startsWith("onUpdate:"),be=Object.assign,ya=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rl=Object.prototype.hasOwnProperty,q=(e,t)=>rl.call(e,t),B=Array.isArray,nn=e=>dr(e)==="[object Map]",al=e=>dr(e)==="[object Set]",U=e=>typeof e=="function",pe=e=>typeof e=="string",xa=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",go=e=>ge(e)&&U(e.then)&&U(e.catch),il=Object.prototype.toString,dr=e=>il.call(e),ol=e=>dr(e).slice(8,-1),sl=e=>dr(e)==="[object Object]",wa=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kn=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ll=/-(\w)/g,Be=mr(e=>e.replace(ll,(t,n)=>n?n.toUpperCase():"")),fl=/\B([A-Z])/g,Wt=mr(e=>e.replace(fl,"-$1").toLowerCase()),hr=mr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=mr(e=>e?`on${hr(e)}`:""),hn=(e,t)=>!Object.is(e,t),Cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Jn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},cl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ti;const ul=()=>ti||(ti=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ke;class dl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ke&&(this.parent=Ke,this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}run(t){if(this.active)try{return Ke=this,t()}finally{Ke=this.parent}}on(){Ke=this}off(){Ke=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ml(e,t=Ke){t&&t.active&&t.effects.push(e)}const _a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},vo=e=>(e.w&ct)>0,bo=e=>(e.n&ct)>0,hl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ct},pl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];vo(a)&&!bo(a)?a.delete(e):t[n++]=a,a.w&=~ct,a.n&=~ct}t.length=n}},zr=new WeakMap;let Zt=0,ct=1;const $r=30;let $e;const wt=Symbol(""),Dr=Symbol("");class Aa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ml(this,r)}run(){if(!this.active)return this.fn();let t=$e,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$e,$e=this,st=!0,ct=1<<++Zt,Zt<=$r?hl(this):ni(this),this.fn()}finally{Zt<=$r&&pl(this),ct=1<<--Zt,$e=this.parent,st=n,this.parent=void 0}}stop(){this.active&&(ni(this),this.onStop&&this.onStop(),this.active=!1)}}function ni(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const yo=[];function Kt(){yo.push(st),st=!1}function qt(){const e=yo.pop();st=e===void 0?!0:e}function Ae(e,t,n){if(st&&$e){let r=zr.get(e);r||zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=_a()),xo(a)}}function xo(e,t){let n=!1;Zt<=$r?bo(e)||(e.n|=ct,n=!vo(e)):n=!e.has($e),n&&(e.add($e),$e.deps.push(e))}function Xe(e,t,n,r,a,i){const o=zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?wa(n)&&s.push(o.get("length")):(s.push(o.get(wt)),nn(e)&&s.push(o.get(Dr)));break;case"delete":B(e)||(s.push(o.get(wt)),nn(e)&&s.push(o.get(Dr)));break;case"set":nn(e)&&s.push(o.get(wt));break}if(s.length===1)s[0]&&Hr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Hr(_a(l))}}function Hr(e,t){for(const n of B(e)?e:[...e])(n!==$e||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const gl=pa("__proto__,__v_isRef,__isVue"),wo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(xa)),vl=ka(),bl=ka(!1,!0),yl=ka(!0),ri=xl();function xl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kt();const r=V(this)[t].apply(this,n);return qt(),r}}),e}function ka(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ll:Po:t?Eo:ko).get(r))return r;const o=B(r);if(!e&&o&&q(ri,a))return Reflect.get(ri,a,i);const s=Reflect.get(r,a,i);return(xa(a)?wo.has(a):gl(a))||(e||Ae(r,"get",a),t)?s:he(s)?!o||!wa(a)?s.value:s:ge(s)?e?Oo(s):On(s):s}}const wl=_o(),_l=_o(!0);function _o(e=!1){return function(n,r,a,i){let o=n[r];if(pn(o)&&he(o)&&!he(a))return!1;if(!e&&!pn(a)&&(Co(a)||(a=V(a),o=V(o)),!B(n)&&he(o)&&!he(a)))return o.value=a,!0;const s=B(n)&&wa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?hn(a,o)&&Xe(n,"set",r,a):Xe(n,"add",r,a)),l}}function Al(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function kl(e,t){const n=Reflect.has(e,t);return(!xa(t)||!wo.has(t))&&Ae(e,"has",t),n}function El(e){return Ae(e,"iterate",B(e)?"length":wt),Reflect.ownKeys(e)}const Ao={get:vl,set:wl,deleteProperty:Al,has:kl,ownKeys:El},Pl={get:yl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ol=be({},Ao,{get:bl,set:_l}),Ea=e=>e,pr=e=>Reflect.getPrototypeOf(e);function Tn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);t!==i&&!n&&Ae(a,"get",t),!n&&Ae(a,"get",i);const{has:o}=pr(a),s=r?Ea:n?Ca:gn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Nn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return e!==a&&!t&&Ae(r,"has",e),!t&&Ae(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Mn(e,t=!1){return e=e.__v_raw,!t&&Ae(V(e),"iterate",wt),Reflect.get(e,"size",e)}function ai(e){e=V(e);const t=V(this);return pr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function ii(e,t){t=V(t);const n=V(this),{has:r,get:a}=pr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?hn(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function oi(e){const t=V(this),{has:n,get:r}=pr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function si(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function Fn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Ea:e?Ca:gn;return!e&&Ae(s,"iterate",wt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Ln(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=nn(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ea:t?Ca:gn;return!t&&Ae(i,"iterate",l?Dr:wt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function tt(e){return function(...t){return e==="delete"?!1:this}}function Cl(){const e={get(i){return Tn(this,i)},get size(){return Mn(this)},has:Nn,add:ai,set:ii,delete:oi,clear:si,forEach:Fn(!1,!1)},t={get(i){return Tn(this,i,!1,!0)},get size(){return Mn(this)},has:Nn,add:ai,set:ii,delete:oi,clear:si,forEach:Fn(!1,!0)},n={get(i){return Tn(this,i,!0)},get size(){return Mn(this,!0)},has(i){return Nn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Fn(!0,!1)},r={get(i){return Tn(this,i,!0,!0)},get size(){return Mn(this,!0)},has(i){return Nn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ln(i,!1,!1),n[i]=Ln(i,!0,!1),t[i]=Ln(i,!1,!0),r[i]=Ln(i,!0,!0)}),[e,n,t,r]}const[Sl,Il,Rl,Tl]=Cl();function Pa(e,t){const n=t?e?Tl:Rl:e?Il:Sl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const Nl={get:Pa(!1,!1)},Ml={get:Pa(!1,!0)},Fl={get:Pa(!0,!1)},ko=new WeakMap,Eo=new WeakMap,Po=new WeakMap,Ll=new WeakMap;function jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zl(e){return e.__v_skip||!Object.isExtensible(e)?0:jl(ol(e))}function On(e){return pn(e)?e:Oa(e,!1,Ao,Nl,ko)}function $l(e){return Oa(e,!1,Ol,Ml,Eo)}function Oo(e){return Oa(e,!0,Pl,Fl,Po)}function Oa(e,t,n,r,a){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=zl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function $t(e){return pn(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function pn(e){return!!(e&&e.__v_isReadonly)}function Co(e){return!!(e&&e.__v_isShallow)}function So(e){return $t(e)||pn(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Io(e){return Jn(e,"__v_skip",!0),e}const gn=e=>ge(e)?On(e):e,Ca=e=>ge(e)?Oo(e):e;function Ro(e){st&&$e&&(e=V(e),xo(e.dep||(e.dep=_a())))}function To(e,t){e=V(e),e.dep&&Hr(e.dep)}function he(e){return!!(e&&e.__v_isRef===!0)}function Dl(e){return No(e,!1)}function Hl(e){return No(e,!0)}function No(e,t){return he(e)?e:new Bl(e,t)}class Bl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:gn(t)}get value(){return Ro(this),this._value}set value(t){t=this.__v_isShallow?t:V(t),hn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:gn(t),To(this))}}function rn(e){return he(e)?e.value:e}const Ul={get:(e,t,n)=>rn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return he(a)&&!he(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Mo(e){return $t(e)?e:new Proxy(e,Ul)}class Yl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Aa(t,()=>{this._dirty||(this._dirty=!0,To(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Ro(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Wl(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Re):(r=e.get,a=e.set),new Yl(r,a,i||!a,n)}Promise.resolve();function lt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){gr(i,t,n)}return a}function Te(e,t,n,r){if(U(e)){const i=lt(e,t,n,r);return i&&go(i)&&i.catch(o=>{gr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Te(e[i],t,n,r));return a}function gr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){lt(l,null,10,[e,o,s]);return}}Kl(e,n,a,r)}function Kl(e,t,n,r=!0){console.error(e)}let Zn=!1,Br=!1;const _e=[];let Ve=0;const an=[];let en=null,Tt=0;const on=[];let at=null,Nt=0;const Fo=Promise.resolve();let Sa=null,Ur=null;function Lo(e){const t=Sa||Fo;return e?t.then(this?e.bind(this):e):t}function ql(e){let t=Ve+1,n=_e.length;for(;t<n;){const r=t+n>>>1;vn(_e[r])<e?t=r+1:n=r}return t}function jo(e){(!_e.length||!_e.includes(e,Zn&&e.allowRecurse?Ve+1:Ve))&&e!==Ur&&(e.id==null?_e.push(e):_e.splice(ql(e.id),0,e),zo())}function zo(){!Zn&&!Br&&(Br=!0,Sa=Fo.then(Ho))}function Vl(e){const t=_e.indexOf(e);t>Ve&&_e.splice(t,1)}function $o(e,t,n,r){B(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),zo()}function Xl(e){$o(e,en,an,Tt)}function Gl(e){$o(e,at,on,Nt)}function Ia(e,t=null){if(an.length){for(Ur=t,en=[...new Set(an)],an.length=0,Tt=0;Tt<en.length;Tt++)en[Tt]();en=null,Tt=0,Ur=null,Ia(e,t)}}function Do(e){if(on.length){const t=[...new Set(on)];if(on.length=0,at){at.push(...t);return}for(at=t,at.sort((n,r)=>vn(n)-vn(r)),Nt=0;Nt<at.length;Nt++)at[Nt]();at=null,Nt=0}}const vn=e=>e.id==null?1/0:e.id;function Ho(e){Br=!1,Zn=!0,Ia(e),_e.sort((n,r)=>vn(n)-vn(r));const t=Re;try{for(Ve=0;Ve<_e.length;Ve++){const n=_e[Ve];n&&n.active!==!1&&lt(n,null,14)}}finally{Ve=0,_e.length=0,Do(),Zn=!1,Sa=null,(_e.length||an.length||on.length)&&Ho(e)}}function Ql(e,t,...n){const r=e.vnode.props||te;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||te;h?a=n.map(g=>g.trim()):d&&(a=n.map(cl))}let s,l=r[s=Or(t)]||r[s=Or(Be(t))];!l&&i&&(l=r[s=Or(Wt(t))]),l&&Te(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Te(c,e,6,a)}}function Bo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=Bo(c,t,!0);f&&(s=!0,be(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):be(o,i),r.set(e,o),o)}function Ra(e,t){return!e||!ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Wt(t))||q(e,t))}let De=null,vr=null;function er(e){const t=De;return De=e,vr=e&&e.type.__scopeId||null,t}function gm(e){vr=e}function vm(){vr=null}function Jl(e,t=De,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&vi(-1);const i=er(t),o=e(...a);return er(i),r._d&&vi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:g,ctx:E,inheritAttrs:M}=e;let C,v;const _=er(e);try{if(n.shapeFlag&4){const $=a||r;C=ze(f.call($,$,d,i,g,h,E)),v=l}else{const $=t;C=ze($.length>1?$(i,{attrs:l,slots:s,emit:c}):$(i,null)),v=t.props?l:Zl(l)}}catch($){ln.length=0,gr($,e,1),C=Oe(bn)}let F=C;if(v&&M!==!1){const $=Object.keys(v),{shapeFlag:W}=F;$.length&&W&7&&(o&&$.some(ba)&&(v=ef(v,o)),F=yn(F,v))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),C=F,er(_),C}const Zl=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},ef=(e,t)=>{const n={};for(const r in e)(!ba(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?li(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!Ra(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?li(r,o,c):!0:!!o;return!1}function li(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Ra(n,i))return!0}return!1}function nf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rf=e=>e.__isSuspense;function af(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Gl(e)}function qn(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function ft(e,t,n=!1){const r=me||De;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const fi={};function sn(e,t,n){return Uo(e,t,n)}function Uo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=te){const s=me;let l,c=!1,f=!1;if(he(e)?(l=()=>e.value,c=Co(e)):$t(e)?(l=()=>e,r=!0):B(e)?(f=!0,c=e.some($t),l=()=>e.map(v=>{if(he(v))return v.value;if($t(v))return Ft(v);if(U(v))return lt(v,s,2)})):U(e)?t?l=()=>lt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Te(e,s,3,[h])}:l=Re,t&&r){const v=l;l=()=>Ft(v())}let d,h=v=>{d=C.onStop=()=>{lt(v,s,4)}};if(xn)return h=Re,t?n&&Te(t,s,3,[l(),f?[]:void 0,h]):l(),Re;let g=f?[]:fi;const E=()=>{if(!!C.active)if(t){const v=C.run();(r||c||(f?v.some((_,F)=>hn(_,g[F])):hn(v,g)))&&(d&&d(),Te(t,s,3,[v,g===fi?void 0:g,h]),g=v)}else C.run()};E.allowRecurse=!!t;let M;a==="sync"?M=E:a==="post"?M=()=>xe(E,s&&s.suspense):M=()=>{!s||s.isMounted?Xl(E):E()};const C=new Aa(l,M);return t?n?E():g=C.run():a==="post"?xe(C.run.bind(C),s&&s.suspense):C.run(),()=>{C.stop(),s&&s.scope&&ya(s.scope.effects,C)}}function of(e,t,n){const r=this.proxy,a=pe(e)?e.includes(".")?Yo(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=me;Ht(this);const s=Uo(a,i.bind(r),n);return o?Ht(o):At(),s}function Yo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ft(e,t){if(!ge(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))Ft(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Ft(e[n],t);else if(al(e)||nn(e))e.forEach(n=>{Ft(n,t)});else if(sl(e))for(const n in e)Ft(e[n],t);return e}function Cn(e){return U(e)?{setup:e,name:e.name}:e}const Yr=e=>!!e.type.__asyncLoader,Wo=e=>e.type.__isKeepAlive;function sf(e,t){Ko(e,"a",t)}function lf(e,t){Ko(e,"da",t)}function Ko(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(br(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Wo(a.parent.vnode)&&ff(r,t,n,a),a=a.parent}}function ff(e,t,n,r){const a=br(t,e,r,!0);qo(()=>{ya(r[t],a)},n)}function br(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kt(),Ht(n);const s=Te(t,n,e,o);return At(),qt(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=me)=>(!xn||e==="sp")&&br(e,t,n),cf=Ze("bm"),uf=Ze("m"),df=Ze("bu"),mf=Ze("u"),hf=Ze("bum"),qo=Ze("um"),pf=Ze("sp"),gf=Ze("rtg"),vf=Ze("rtc");function bf(e,t=me){br("ec",e,t)}let Wr=!0;function yf(e){const t=Xo(e),n=e.proxy,r=e.ctx;Wr=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:g,updated:E,activated:M,deactivated:C,beforeDestroy:v,beforeUnmount:_,destroyed:F,unmounted:$,render:W,renderTracked:ie,renderTriggered:le,errorCaptured:Ne,serverPrefetch:ce,expose:Me,inheritAttrs:Ue,components:Ye,directives:Pt,filters:Ot}=t;if(c&&xf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const X=o[Z];U(X)&&(r[Z]=X.bind(n))}if(a){const Z=a.call(n,n);ge(Z)&&(e.data=On(Z))}if(Wr=!0,i)for(const Z in i){const X=i[Z],Ee=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Re,St=!U(X)&&U(X.set)?X.set.bind(n):Re,We=fe({get:Ee,set:St});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>We.value,set:Fe=>We.value=Fe})}if(s)for(const Z in s)Vo(s[Z],r,n,Z);if(l){const Z=U(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(X=>{qn(X,Z[X])})}f&&ci(f,e,"c");function ue(Z,X){B(X)?X.forEach(Ee=>Z(Ee.bind(n))):X&&Z(X.bind(n))}if(ue(cf,d),ue(uf,h),ue(df,g),ue(mf,E),ue(sf,M),ue(lf,C),ue(bf,Ne),ue(vf,ie),ue(gf,le),ue(hf,_),ue(qo,$),ue(pf,ce),B(Me))if(Me.length){const Z=e.exposed||(e.exposed={});Me.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:Ee=>n[X]=Ee})})}else e.exposed||(e.exposed={});W&&e.render===Re&&(e.render=W),Ue!=null&&(e.inheritAttrs=Ue),Ye&&(e.components=Ye),Pt&&(e.directives=Pt)}function xf(e,t,n=Re,r=!1){B(e)&&(e=Kr(e));for(const a in e){const i=e[a];let o;ge(i)?"default"in i?o=ft(i.from||a,i.default,!0):o=ft(i.from||a):o=ft(i),he(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ci(e,t,n){Te(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vo(e,t,n,r){const a=r.includes(".")?Yo(n,r):()=>n[r];if(pe(e)){const i=t[e];U(i)&&sn(a,i)}else if(U(e))sn(a,e.bind(n));else if(ge(e))if(B(e))e.forEach(i=>Vo(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&sn(a,i,e)}}function Xo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>tr(l,c,o,!0)),tr(l,t,o)),i.set(t,l),l}function tr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&tr(e,i,n,!0),a&&a.forEach(o=>tr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=wf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const wf={data:ui,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:vt,directives:vt,watch:Af,provide:ui,inject:_f};function ui(e,t){return t?e?function(){return be(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function _f(e,t){return vt(Kr(e),Kr(t))}function Kr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function vt(e,t){return e?be(be(Object.create(null),e),t):t}function Af(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function kf(e,t,n,r=!1){const a={},i={};Jn(i,yr,1),e.propsDefaults=Object.create(null),Go(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:$l(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ef(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];const g=t[h];if(l)if(q(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const E=Be(h);a[E]=qr(l,s,E,g,e,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{Go(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=Wt(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=qr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],c=!0)}c&&Xe(e,"set","$attrs")}function Go(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Kn(l))continue;const c=t[l];let f;a&&q(a,f=Be(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Ra(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||te;for(let f=0;f<i.length;f++){const d=i[f];n[d]=qr(a,l,d,c[d],e,!q(c,d))}}return o}function qr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ht(a),r=c[n]=l.call(null,t),At())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Wt(n))&&(r=!0))}return r}function Qo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[h,g]=Qo(d,t,!0);be(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,zt),zt;if(B(i))for(let f=0;f<i.length;f++){const d=Be(i[f]);di(d)&&(o[d]=te)}else if(i)for(const f in i){const d=Be(f);if(di(d)){const h=i[f],g=o[d]=B(h)||U(h)?{type:h}:h;if(g){const E=pi(Boolean,g.type),M=pi(String,g.type);g[0]=E>-1,g[1]=M<0||E<M,(E>-1||q(g,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function di(e){return e[0]!=="$"}function mi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function hi(e,t){return mi(e)===mi(t)}function pi(e,t){return B(t)?t.findIndex(n=>hi(n,e)):U(t)&&hi(t,e)?0:-1}const Jo=e=>e[0]==="_"||e==="$stable",Ta=e=>B(e)?e.map(ze):[ze(e)],Pf=(e,t,n)=>{const r=Jl((...a)=>Ta(t(...a)),n);return r._c=!1,r},Zo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Jo(a))continue;const i=e[a];if(U(i))t[a]=Pf(a,i,r);else if(i!=null){const o=Ta(i);t[a]=()=>o}}},es=(e,t)=>{const n=Ta(t);e.slots.default=()=>n},Of=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Jn(t,"_",n)):Zo(t,e.slots={})}else e.slots={},t&&es(e,t);Jn(e.slots,yr,1)},Cf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(be(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Zo(t,a)),o=t}else t&&(es(e,t),o={default:1});if(i)for(const s in a)!Jo(s)&&!(s in o)&&delete a[s]};function ht(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Kt(),Te(l,n,8,[e.el,s,e,t]),qt())}}function ts(){return{app:null,config:{isNativeTag:tl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function If(e,t){return function(r,a=null){a!=null&&!ge(a)&&(a=null);const i=ts(),o=new Set;let s=!1;const l=i.app={_uid:Sf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Zf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=Oe(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,Fa(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Vr(e,t,n,r,a=!1){if(B(e)){e.forEach((h,g)=>Vr(h,t&&(B(t)?t[g]:t),n,r,a));return}if(Yr(r)&&!a)return;const i=r.shapeFlag&4?Fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===te?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(pe(c)?(f[c]=null,q(d,c)&&(d[c]=null)):he(c)&&(c.value=null)),U(l))lt(l,s,12,[o,f]);else{const h=pe(l),g=he(l);if(h||g){const E=()=>{if(e.f){const M=h?f[l]:l.value;a?B(M)&&ya(M,i):B(M)?M.includes(i)||M.push(i):h?f[l]=[i]:(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,q(d,l)&&(d[l]=o)):he(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(E.id=-1,xe(E,n)):E()}}}const xe=af;function Rf(e){return Tf(e)}function Tf(e,t){const n=ul();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:g=Re,cloneNode:E,insertStaticContent:M}=e,C=(u,m,p,x=null,y=null,k=null,S=!1,A=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!Qt(u,m)&&(x=L(u),Pe(u,y,k,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:R}=m;switch(w){case Na:v(u,m,p,x);break;case bn:_(u,m,p,x);break;case Vn:u==null&&F(m,p,x,S);break;case qe:Pt(u,m,p,x,y,k,S,A,P);break;default:R&1?ie(u,m,p,x,y,k,S,A,P):R&6?Ot(u,m,p,x,y,k,S,A,P):(R&64||R&128)&&w.process(u,m,p,x,y,k,S,A,P,ee)}j!=null&&y&&Vr(j,u&&u.ref,k,m||u,!m)},v=(u,m,p,x)=>{if(u==null)r(m.el=s(m.children),p,x);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,p,x)=>{u==null?r(m.el=l(m.children||""),p,x):m.el=u.el},F=(u,m,p,x)=>{[u.el,u.anchor]=M(u.children,m,p,x,u.el,u.anchor)},$=({el:u,anchor:m},p,x)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,x),u=y;r(m,p,x)},W=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},ie=(u,m,p,x,y,k,S,A,P)=>{S=S||m.type==="svg",u==null?le(m,p,x,y,k,S,A,P):Me(u,m,y,k,S,A,P)},le=(u,m,p,x,y,k,S,A)=>{let P,w;const{type:j,props:R,shapeFlag:z,transition:D,patchFlag:K,dirs:oe}=u;if(u.el&&E!==void 0&&K===-1)P=u.el=E(u.el);else{if(P=u.el=o(u.type,k,R&&R.is,R),z&8?f(P,u.children):z&16&&ce(u.children,P,null,x,y,k&&j!=="foreignObject",S,A),oe&&ht(u,null,x,"created"),R){for(const ne in R)ne!=="value"&&!Kn(ne)&&i(P,ne,null,R[ne],k,u.children,x,y,O);"value"in R&&i(P,"value",null,R.value),(w=R.onVnodeBeforeMount)&&je(w,x,u)}Ne(P,u,u.scopeId,S,x)}oe&&ht(u,null,x,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&D&&!D.persisted;Q&&D.beforeEnter(P),r(P,m,p),((w=R&&R.onVnodeMounted)||Q||oe)&&xe(()=>{w&&je(w,x,u),Q&&D.enter(P),oe&&ht(u,null,x,"mounted")},y)},Ne=(u,m,p,x,y)=>{if(p&&g(u,p),x)for(let k=0;k<x.length;k++)g(u,x[k]);if(y){let k=y.subTree;if(m===k){const S=y.vnode;Ne(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},ce=(u,m,p,x,y,k,S,A,P=0)=>{for(let w=P;w<u.length;w++){const j=u[w]=A?it(u[w]):ze(u[w]);C(null,j,m,p,x,y,k,S,A)}},Me=(u,m,p,x,y,k,S)=>{const A=m.el=u.el;let{patchFlag:P,dynamicChildren:w,dirs:j}=m;P|=u.patchFlag&16;const R=u.props||te,z=m.props||te;let D;p&&pt(p,!1),(D=z.onVnodeBeforeUpdate)&&je(D,p,m,u),j&&ht(m,u,p,"beforeUpdate"),p&&pt(p,!0);const K=y&&m.type!=="foreignObject";if(w?Ue(u.dynamicChildren,w,A,p,x,K,k):S||Ee(u,m,A,null,p,x,K,k,!1),P>0){if(P&16)Ye(A,m,R,z,p,x,y);else if(P&2&&R.class!==z.class&&i(A,"class",null,z.class,y),P&4&&i(A,"style",R.style,z.style,y),P&8){const oe=m.dynamicProps;for(let Q=0;Q<oe.length;Q++){const ne=oe[Q],Ce=R[ne],It=z[ne];(It!==Ce||ne==="value")&&i(A,ne,Ce,It,y,u.children,p,x,O)}}P&1&&u.children!==m.children&&f(A,m.children)}else!S&&w==null&&Ye(A,m,R,z,p,x,y);((D=z.onVnodeUpdated)||j)&&xe(()=>{D&&je(D,p,m,u),j&&ht(m,u,p,"updated")},x)},Ue=(u,m,p,x,y,k,S)=>{for(let A=0;A<m.length;A++){const P=u[A],w=m[A],j=P.el&&(P.type===qe||!Qt(P,w)||P.shapeFlag&70)?d(P.el):p;C(P,w,j,null,x,y,k,S,!0)}},Ye=(u,m,p,x,y,k,S)=>{if(p!==x){for(const A in x){if(Kn(A))continue;const P=x[A],w=p[A];P!==w&&A!=="value"&&i(u,A,w,P,S,m.children,y,k,O)}if(p!==te)for(const A in p)!Kn(A)&&!(A in x)&&i(u,A,p[A],null,S,m.children,y,k,O);"value"in x&&i(u,"value",p.value,x.value)}},Pt=(u,m,p,x,y,k,S,A,P)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:R,dynamicChildren:z,slotScopeIds:D}=m;D&&(A=A?A.concat(D):D),u==null?(r(w,p,x),r(j,p,x),ce(m.children,p,j,y,k,S,A,P)):R>0&&R&64&&z&&u.dynamicChildren?(Ue(u.dynamicChildren,z,p,y,k,S,A),(m.key!=null||y&&m===y.subTree)&&ns(u,m,!0)):Ee(u,m,p,j,y,k,S,A,P)},Ot=(u,m,p,x,y,k,S,A,P)=>{m.slotScopeIds=A,u==null?m.shapeFlag&512?y.ctx.activate(m,p,x,S,P):Ct(m,p,x,y,k,S,P):ue(u,m,P)},Ct=(u,m,p,x,y,k,S)=>{const A=u.component=Kf(u,x,y);if(Wo(u)&&(A.ctx.renderer=ee),qf(A),A.asyncDep){if(y&&y.registerDep(A,Z),!u.el){const P=A.subTree=Oe(bn);_(null,P,m,p)}return}Z(A,u,m,p,y,k,S)},ue=(u,m,p)=>{const x=m.component=u.component;if(tf(u,m,p))if(x.asyncDep&&!x.asyncResolved){X(x,m,p);return}else x.next=m,Vl(x.update),x.update();else m.component=u.component,m.el=u.el,x.vnode=m},Z=(u,m,p,x,y,k,S)=>{const A=()=>{if(u.isMounted){let{next:j,bu:R,u:z,parent:D,vnode:K}=u,oe=j,Q;pt(u,!1),j?(j.el=K.el,X(u,j,S)):j=K,R&&Cr(R),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&je(Q,D,j,K),pt(u,!0);const ne=Sr(u),Ce=u.subTree;u.subTree=ne,C(Ce,ne,d(Ce.el),L(Ce),u,y,k),j.el=ne.el,oe===null&&nf(u,ne.el),z&&xe(z,y),(Q=j.props&&j.props.onVnodeUpdated)&&xe(()=>je(Q,D,j,K),y)}else{let j;const{el:R,props:z}=m,{bm:D,m:K,parent:oe}=u,Q=Yr(m);if(pt(u,!1),D&&Cr(D),!Q&&(j=z&&z.onVnodeBeforeMount)&&je(j,oe,m),pt(u,!0),R&&H){const ne=()=>{u.subTree=Sr(u),H(R,u.subTree,u,y,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Sr(u);C(null,ne,p,x,u,y,k),m.el=ne.el}if(K&&xe(K,y),!Q&&(j=z&&z.onVnodeMounted)){const ne=m;xe(()=>je(j,oe,ne),y)}m.shapeFlag&256&&u.a&&xe(u.a,y),u.isMounted=!0,m=p=x=null}},P=u.effect=new Aa(A,()=>jo(u.update),u.scope),w=u.update=P.run.bind(P);w.id=u.uid,pt(u,!0),w()},X=(u,m,p)=>{m.component=u;const x=u.vnode.props;u.vnode=m,u.next=null,Ef(u,m.props,x,p),Cf(u,m.children,p),Kt(),Ia(void 0,u.update),qt()},Ee=(u,m,p,x,y,k,S,A,P=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,R=m.children,{patchFlag:z,shapeFlag:D}=m;if(z>0){if(z&128){We(w,R,p,x,y,k,S,A,P);return}else if(z&256){St(w,R,p,x,y,k,S,A,P);return}}D&8?(j&16&&O(w,y,k),R!==w&&f(p,R)):j&16?D&16?We(w,R,p,x,y,k,S,A,P):O(w,y,k,!0):(j&8&&f(p,""),D&16&&ce(R,p,x,y,k,S,A,P))},St=(u,m,p,x,y,k,S,A,P)=>{u=u||zt,m=m||zt;const w=u.length,j=m.length,R=Math.min(w,j);let z;for(z=0;z<R;z++){const D=m[z]=P?it(m[z]):ze(m[z]);C(u[z],D,p,null,y,k,S,A,P)}w>j?O(u,y,k,!0,!1,R):ce(m,p,x,y,k,S,A,P,R)},We=(u,m,p,x,y,k,S,A,P)=>{let w=0;const j=m.length;let R=u.length-1,z=j-1;for(;w<=R&&w<=z;){const D=u[w],K=m[w]=P?it(m[w]):ze(m[w]);if(Qt(D,K))C(D,K,p,null,y,k,S,A,P);else break;w++}for(;w<=R&&w<=z;){const D=u[R],K=m[z]=P?it(m[z]):ze(m[z]);if(Qt(D,K))C(D,K,p,null,y,k,S,A,P);else break;R--,z--}if(w>R){if(w<=z){const D=z+1,K=D<j?m[D].el:x;for(;w<=z;)C(null,m[w]=P?it(m[w]):ze(m[w]),p,K,y,k,S,A,P),w++}}else if(w>z)for(;w<=R;)Pe(u[w],y,k,!0),w++;else{const D=w,K=w,oe=new Map;for(w=K;w<=z;w++){const we=m[w]=P?it(m[w]):ze(m[w]);we.key!=null&&oe.set(we.key,w)}let Q,ne=0;const Ce=z-K+1;let It=!1,Ja=0;const Gt=new Array(Ce);for(w=0;w<Ce;w++)Gt[w]=0;for(w=D;w<=R;w++){const we=u[w];if(ne>=Ce){Pe(we,y,k,!0);continue}let Le;if(we.key!=null)Le=oe.get(we.key);else for(Q=K;Q<=z;Q++)if(Gt[Q-K]===0&&Qt(we,m[Q])){Le=Q;break}Le===void 0?Pe(we,y,k,!0):(Gt[Le-K]=w+1,Le>=Ja?Ja=Le:It=!0,C(we,m[Le],p,null,y,k,S,A,P),ne++)}const Za=It?Nf(Gt):zt;for(Q=Za.length-1,w=Ce-1;w>=0;w--){const we=K+w,Le=m[we],ei=we+1<j?m[we+1].el:x;Gt[w]===0?C(null,Le,p,ei,y,k,S,A,P):It&&(Q<0||w!==Za[Q]?Fe(Le,p,ei,2):Q--)}}},Fe=(u,m,p,x,y=null)=>{const{el:k,type:S,transition:A,children:P,shapeFlag:w}=u;if(w&6){Fe(u.component.subTree,m,p,x);return}if(w&128){u.suspense.move(m,p,x);return}if(w&64){S.move(u,m,p,ee);return}if(S===qe){r(k,m,p);for(let R=0;R<P.length;R++)Fe(P[R],m,p,x);r(u.anchor,m,p);return}if(S===Vn){$(u,m,p);return}if(x!==2&&w&1&&A)if(x===0)A.beforeEnter(k),r(k,m,p),xe(()=>A.enter(k),y);else{const{leave:R,delayLeave:z,afterLeave:D}=A,K=()=>r(k,m,p),oe=()=>{R(k,()=>{K(),D&&D()})};z?z(k,K,oe):oe()}else r(k,m,p)},Pe=(u,m,p,x=!1,y=!1)=>{const{type:k,props:S,ref:A,children:P,dynamicChildren:w,shapeFlag:j,patchFlag:R,dirs:z}=u;if(A!=null&&Vr(A,null,p,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&z,K=!Yr(u);let oe;if(K&&(oe=S&&S.onVnodeBeforeUnmount)&&je(oe,m,u),j&6)N(u.component,p,x);else{if(j&128){u.suspense.unmount(p,x);return}D&&ht(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,p,y,ee,x):w&&(k!==qe||R>0&&R&64)?O(w,m,p,!1,!0):(k===qe&&R&384||!y&&j&16)&&O(P,m,p),x&&Pr(u)}(K&&(oe=S&&S.onVnodeUnmounted)||D)&&xe(()=>{oe&&je(oe,m,u),D&&ht(u,null,m,"unmounted")},p)},Pr=u=>{const{type:m,el:p,anchor:x,transition:y}=u;if(m===qe){b(p,x);return}if(m===Vn){W(u);return}const k=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:A}=y,P=()=>S(p,k);A?A(u.el,k,P):P()}else k()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},N=(u,m,p)=>{const{bum:x,scope:y,update:k,subTree:S,um:A}=u;x&&Cr(x),y.stop(),k&&(k.active=!1,Pe(S,u,m,p)),A&&xe(A,m),xe(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(u,m,p,x=!1,y=!1,k=0)=>{for(let S=k;S<u.length;S++)Pe(u[S],m,p,x,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),G=(u,m,p)=>{u==null?m._vnode&&Pe(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,p),Do(),m._vnode=u},ee={p:C,um:Pe,m:Fe,r:Pr,mt:Ct,mc:ce,pc:Ee,pbc:Ue,n:L,o:e};let Y,H;return t&&([Y,H]=t(ee)),{render:G,hydrate:Y,createApp:If(G,Y)}}function pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ns(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=it(a[i]),s.el=o.el),n||ns(o,s))}}function Nf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Mf=e=>e.__isTeleport,rs="components";function bm(e,t){return Lf(rs,e,!0,t)||e}const Ff=Symbol();function Lf(e,t,n=!0,r=!1){const a=De||me;if(a){const i=a.type;if(e===rs){const s=Qf(i);if(s&&(s===t||s===Be(t)||s===hr(Be(t))))return i}const o=gi(a[e]||i[e],t)||gi(a.appContext[e],t);return!o&&r?i:o}}function gi(e,t){return e&&(e[t]||e[Be(t)]||e[hr(Be(t))])}const qe=Symbol(void 0),Na=Symbol(void 0),bn=Symbol(void 0),Vn=Symbol(void 0),ln=[];let _t=null;function ym(e=!1){ln.push(_t=e?null:[])}function jf(){ln.pop(),_t=ln[ln.length-1]||null}let nr=1;function vi(e){nr+=e}function zf(e){return e.dynamicChildren=nr>0?_t||zt:null,jf(),nr>0&&_t&&_t.push(e),e}function xm(e,t,n,r,a,i){return zf(is(e,t,n,r,a,i,!0))}function Xr(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const yr="__vInternal",as=({key:e})=>e!=null?e:null,Xn=({ref:e,ref_key:t,ref_for:n})=>e!=null?pe(e)||he(e)||U(e)?{i:De,r:e,k:t,f:!!n}:e:null;function is(e,t=null,n=null,r=0,a=null,i=e===qe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&as(t),ref:t&&Xn(t),scopeId:vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ma(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),nr>0&&!o&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const Oe=$f;function $f(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ff)&&(e=bn),Xr(e)){const s=yn(e,t,!0);return n&&Ma(s,n),s}if(Jf(e)&&(e=e.__vccOpts),t){t=Df(t);let{class:s,style:l}=t;s&&!pe(s)&&(t.class=va(s)),ge(l)&&(So(l)&&!B(l)&&(l=be({},l)),t.style=ga(l))}const o=pe(e)?1:rf(e)?128:Mf(e)?64:ge(e)?4:U(e)?2:0;return is(e,t,n,r,a,o,i,!0)}function Df(e){return e?So(e)||yr in e?be({},e):e:null}function yn(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Bf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&as(s),ref:t&&t.ref?n&&a?B(a)?a.concat(Xn(t)):[a,Xn(t)]:Xn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yn(e.ssContent),ssFallback:e.ssFallback&&yn(e.ssFallback),el:e.el,anchor:e.anchor}}function Hf(e=" ",t=0){return Oe(Na,null,e,t)}function wm(e,t){const n=Oe(Vn,null,e);return n.staticCount=t,n}function ze(e){return e==null||typeof e=="boolean"?Oe(bn):B(e)?Oe(qe,null,e.slice()):typeof e=="object"?it(e):Oe(Na,null,String(e))}function it(e){return e.el===null||e.memo?e:yn(e)}function Ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ma(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(yr in t)?t._ctx=De:a===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:De},n=32):(t=String(t),r&64?(n=16,t=[Hf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=va([t.class,r.class]));else if(a==="style")t.style=ga([t.style,r.style]);else if(ur(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function je(e,t,n,r=null){Te(e,t,7,[n,r])}const Gr=e=>e?os(e)?Fa(e)||e.proxy:Gr(e.parent):null,rr=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gr(e.parent),$root:e=>Gr(e.root),$emit:e=>e.emit,$options:e=>Xo(e),$forceUpdate:e=>()=>jo(e.update),$nextTick:e=>Lo.bind(e.proxy),$watch:e=>of.bind(e)}),Uf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==te&&q(r,t))return o[t]=1,r[t];if(a!==te&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==te&&q(n,t))return o[t]=4,n[t];Wr&&(o[t]=0)}}const f=rr[t];let d,h;if(f)return t==="$attrs"&&Ae(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==te&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==te&&q(a,t)?(a[t]=n,!0):r!==te&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==te&&q(e,o)||t!==te&&q(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(rr,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Yf=ts();let Wf=0;function Kf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Yf,i={uid:Wf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new dl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qo(r,a),emitsOptions:Bo(r,a),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ql.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Ht=e=>{me=e,e.scope.on()},At=()=>{me&&me.scope.off(),me=null};function os(e){return e.vnode.shapeFlag&4}let xn=!1;function qf(e,t=!1){xn=t;const{props:n,children:r}=e.vnode,a=os(e);kf(e,n,a,t),Of(e,r);const i=a?Vf(e,t):void 0;return xn=!1,i}function Vf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Io(new Proxy(e.ctx,Uf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Gf(e):null;Ht(e),Kt();const i=lt(r,e,0,[e.props,a]);if(qt(),At(),go(i)){if(i.then(At,At),t)return i.then(o=>{bi(e,o,t)}).catch(o=>{gr(o,e,0)});e.asyncDep=i}else bi(e,i,t)}else ss(e,t)}function bi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=Mo(t)),ss(e,n)}let yi;function ss(e,t,n){const r=e.type;if(!e.render){if(!t&&yi&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=be(be({isCustomElement:i,delimiters:s},o),l);r.render=yi(a,c)}}e.render=r.render||Re}Ht(e),Kt(),yf(e),qt(),At()}function Xf(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function Gf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Xf(e))},slots:e.slots,emit:e.emit,expose:t}}function Fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Mo(Io(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rr)return rr[n](e)}}))}function Qf(e){return U(e)&&e.displayName||e.name}function Jf(e){return U(e)&&"__vccOpts"in e}const fe=(e,t)=>Wl(e,t,xn);function xr(e,t,n){const r=arguments.length;return r===2?ge(t)&&!B(t)?Xr(t)?Oe(e,null,[t]):Oe(e,t):Oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),Oe(e,t,n))}const Zf="3.2.31",ec="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,xi=bt&&bt.createElement("template"),tc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?bt.createElementNS(ec,e):bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{xi.innerHTML=r?`<svg>${e}</svg>`:e;const s=xi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function nc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function rc(e,t,n){const r=e.style,a=pe(n);if(n&&!a){for(const i in n)Qr(r,i,n[i]);if(t&&!pe(t))for(const i in t)n[i]==null&&Qr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const wi=/\s*!important$/;function Qr(e,t,n){if(B(n))n.forEach(r=>Qr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=ac(e,t);wi.test(n)?e.setProperty(Wt(r),n.replace(wi,""),"important"):e[r]=n}}const _i=["Webkit","Moz","ms"],Ir={};function ac(e,t){const n=Ir[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=hr(r);for(let a=0;a<_i.length;a++){const i=_i[a]+r;if(i in e)return Ir[t]=i}return t}const Ai="http://www.w3.org/1999/xlink";function ic(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ai,t.slice(6,t.length)):e.setAttributeNS(Ai,t,n);else{const i=Qs(t);n==null||i&&!po(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function oc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=po(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let ar=Date.now,ls=!1;if(typeof window!="undefined"){ar()>document.createEvent("Event").timeStamp&&(ar=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);ls=!!(e&&Number(e[1])<=53)}let Jr=0;const sc=Promise.resolve(),lc=()=>{Jr=0},fc=()=>Jr||(sc.then(lc),Jr=ar());function cc(e,t,n,r){e.addEventListener(t,n,r)}function uc(e,t,n,r){e.removeEventListener(t,n,r)}function dc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=mc(t);if(r){const c=i[t]=hc(r,a);cc(e,s,c,l)}else o&&(uc(e,s,o,l),i[t]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function mc(e){let t;if(ki.test(e)){t={};let n;for(;n=e.match(ki);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Wt(e.slice(2)),t]}function hc(e,t){const n=r=>{const a=r.timeStamp||ar();(ls||a>=n.attached-1)&&Te(pc(r,n.value),t,5,[r])};return n.value=e,n.attached=fc(),n}function pc(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ei=/^on[a-z]/,gc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?nc(e,r,a):t==="style"?rc(e,n,r):ur(t)?ba(t)||dc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vc(e,t,r,a))?oc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ic(e,t,r,a))};function vc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ei.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ei.test(t)&&pe(n)?!1:t in e}const bc=be({patchProp:gc},tc);let Pi;function yc(){return Pi||(Pi=Rf(bc))}const _m=(...e)=>{const t=yc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=xc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function xc(e){return pe(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Vt=e=>fs?Symbol(e):"_vr_"+e,wc=Vt("rvlm"),Oi=Vt("rvd"),La=Vt("r"),cs=Vt("rl"),Zr=Vt("rvl"),Mt=typeof window!="undefined";function _c(e){return e.__esModule||fs&&e[Symbol.toStringTag]==="Module"}const J=Object.assign;function Rr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const fn=()=>{},Ac=/\/$/,kc=e=>e.replace(Ac,"");function Tr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Cc(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Ec(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ci(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Bt(t.matched[r],n.matched[a])&&us(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Bt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function us(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Oc(e[n],t[n]))return!1;return!0}function Oc(e,t){return Array.isArray(e)?Si(e,t):Array.isArray(t)?Si(t,e):e===t}function Si(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Cc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var wn;(function(e){e.pop="pop",e.push="push"})(wn||(wn={}));var cn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(cn||(cn={}));function Sc(e){if(!e)if(Mt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),kc(e)}const Ic=/^[^#]+#/;function Rc(e,t){return e.replace(Ic,"#")+t}function Tc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Tc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ii(e,t){return(history.state?history.state.position-t:-1)+e}const ea=new Map;function Mc(e,t){ea.set(e,t)}function Fc(e){const t=ea.get(e);return ea.delete(e),t}let Lc=()=>location.protocol+"//"+location.host;function ds(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ci(l,"")}return Ci(n,e)+r+a}function jc(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=ds(e,location),E=n.value,M=t.value;let C=0;if(h){if(n.value=g,t.value=h,o&&o===E){o=null;return}C=M?h.position-M.position:0}else r(g);a.forEach(v=>{v(n.value,E,{delta:C,type:wn.pop,direction:C?C>0?cn.forward:cn.back:cn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const g=()=>{const E=a.indexOf(h);E>-1&&a.splice(E,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(J({},h.state,{scroll:wr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Ri(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?wr():null}}function zc(e){const{history:t,location:n}=window,r={value:ds(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Lc()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(l,c){const f=J({},t.state,Ri(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=J({},a.value,t.state,{forward:l,scroll:wr()});i(f.current,f,!0);const d=J({},Ri(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Am(e){e=Sc(e);const t=zc(e),n=jc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:Rc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function $c(e){return typeof e=="string"||e&&typeof e=="object"}function ms(e){return typeof e=="string"||typeof e=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hs=Vt("nf");var Ti;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ti||(Ti={}));function Ut(e,t){return J(new Error,{type:e,[hs]:!0},t)}function gt(e,t){return e instanceof Error&&hs in e&&(t==null||!!(e.type&t))}const Ni="[^/]+?",Dc={sensitive:!1,strict:!1,start:!0,end:!0},Hc=/[.+*?^${}()[\]/\\]/g;function Bc(e,t){const n=J({},Dc,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Hc,"\\$&"),g+=40;else if(h.type===1){const{value:E,repeatable:M,optional:C,regexp:v}=h;i.push({name:E,repeatable:M,optional:C});const _=v||Ni;if(_!==Ni){g+=10;try{new RegExp(`(${_})`)}catch($){throw new Error(`Invalid custom RegExp for param "${E}" (${_}): `+$.message)}}let F=M?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(F=C&&c.length<2?`(?:/${F})`:"/"+F),C&&(F+="?"),a+=F,g+=20,C&&(g+=-8),M&&(g+=-20),_===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",E=i[h-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:E,repeatable:M,optional:C}=g,v=E in c?c[E]:"";if(Array.isArray(v)&&!M)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(v)?v.join("/"):v;if(!_)if(C)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);f+=_}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Uc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Yc(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Uc(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Wc={type:0,value:""},Kc=/[a-zA-Z0-9_]/;function qc(e){if(!e)return[[]];if(e==="/")return[[Wc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Kc.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Vc(e,t,n){const r=Bc(qc(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Xc(e,t){const n=[],r=new Map;t=Fi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const g=!h,E=Qc(f);E.aliasOf=h&&h.record;const M=Fi(t,f),C=[E];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of F)C.push(J({},E,{components:h?h.record.components:E.components,path:$,aliasOf:h?h.record:E}))}let v,_;for(const F of C){const{path:$}=F;if(d&&$[0]!=="/"){const W=d.record.path,ie=W[W.length-1]==="/"?"":"/";F.path=d.record.path+($&&ie+$)}if(v=Vc(F,d,M),h?h.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),g&&f.name&&!Mi(v)&&o(f.name)),"children"in E){const W=E.children;for(let ie=0;ie<W.length;ie++)i(W[ie],v,h&&h.children[ie])}h=h||v,l(v)}return _?()=>{o(_)}:fn}function o(f){if(ms(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Yc(f,n[d])>=0;)d++;n.splice(d,0,f),f.record.name&&!Mi(f)&&r.set(f.record.name,f)}function c(f,d){let h,g={},E,M;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw Ut(1,{location:f});M=h.record.name,g=J(Gc(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),E=h.stringify(g)}else if("path"in f)E=f.path,h=n.find(_=>_.re.test(E)),h&&(g=h.parse(E),M=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw Ut(1,{location:f,currentLocation:d});M=h.record.name,g=J({},d.params,f.params),E=h.stringify(g)}const C=[];let v=h;for(;v;)C.unshift(v.record),v=v.parent;return{name:M,path:E,params:g,matched:C,meta:Zc(C)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Gc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Qc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Jc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Jc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Mi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zc(e){return e.reduce((t,n)=>J(t,n.meta),{})}function Fi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ps=/#/g,eu=/&/g,tu=/\//g,nu=/=/g,ru=/\?/g,gs=/\+/g,au=/%5B/g,iu=/%5D/g,vs=/%5E/g,ou=/%60/g,bs=/%7B/g,su=/%7C/g,ys=/%7D/g,lu=/%20/g;function ja(e){return encodeURI(""+e).replace(su,"|").replace(au,"[").replace(iu,"]")}function fu(e){return ja(e).replace(bs,"{").replace(ys,"}").replace(vs,"^")}function ta(e){return ja(e).replace(gs,"%2B").replace(lu,"+").replace(ps,"%23").replace(eu,"%26").replace(ou,"`").replace(bs,"{").replace(ys,"}").replace(vs,"^")}function cu(e){return ta(e).replace(nu,"%3D")}function uu(e){return ja(e).replace(ps,"%23").replace(ru,"%3F")}function du(e){return e==null?"":uu(e).replace(tu,"%2F")}function ir(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function mu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(gs," "),o=i.indexOf("="),s=ir(o<0?i:i.slice(0,o)),l=o<0?null:ir(i.slice(o+1));if(s in t){let c=t[s];Array.isArray(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Li(e){let t="";for(let n in e){const r=e[n];if(n=cu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ta(i)):[r&&ta(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function hu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function Jt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ot(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Ut(4,{from:n,to:t})):d instanceof Error?s(d):$c(d)?s(Ut(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Nr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(pu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ot(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=_c(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&ot(h,n,r,i,o)()}))}}return a}function pu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ji(e){const t=ft(La),n=ft(cs),r=fe(()=>t.resolve(rn(e.to))),a=fe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Bt.bind(null,f));if(h>-1)return h;const g=zi(l[c-2]);return c>1&&zi(f)===g&&d[d.length-1].path!==g?d.findIndex(Bt.bind(null,l[c-2])):h}),i=fe(()=>a.value>-1&&yu(n.params,r.value.params)),o=fe(()=>a.value>-1&&a.value===n.matched.length-1&&us(n.params,r.value.params));function s(l={}){return bu(l)?t[rn(e.replace)?"replace":"push"](rn(e.to)).catch(fn):Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const gu=Cn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ji,setup(e,{slots:t}){const n=On(ji(e)),{options:r}=ft(La),a=fe(()=>({[$i(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$i(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:xr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),vu=gu;function bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function zi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $i=(e,t,n)=>e!=null?e:t!=null?t:n,xu=Cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=ft(Zr),a=fe(()=>e.route||r.value),i=ft(Oi,0),o=fe(()=>a.value.matched[i]);qn(Oi,i+1),qn(wc,o),qn(Zr,a);const s=Dl();return sn(()=>[s.value,o.value,e.name],([l,c,f],[d,h,g])=>{c&&(c.instances[f]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Bt(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,f=c&&c.components[e.name],d=e.name;if(!f)return Di(n.default,{Component:f,route:l});const h=c.props[e.name],g=h?h===!0?l.params:typeof h=="function"?h(l):h:null,M=xr(f,J({},g,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(c.instances[d]=null)},ref:s}));return Di(n.default,{Component:M,route:l})||M}}});function Di(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const wu=xu;function km(e){const t=Xc(e.routes,e),n=e.parseQuery||mu,r=e.stringifyQuery||Li,a=e.history,i=Jt(),o=Jt(),s=Jt(),l=Hl(nt);let c=nt;Mt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Rr.bind(null,b=>""+b),d=Rr.bind(null,du),h=Rr.bind(null,ir);function g(b,N){let O,L;return ms(b)?(O=t.getRecordMatcher(b),L=N):L=b,t.addRoute(L,O)}function E(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function M(){return t.getRoutes().map(b=>b.record)}function C(b){return!!t.getRecordMatcher(b)}function v(b,N){if(N=J({},N||l.value),typeof b=="string"){const H=Tr(n,b,N.path),u=t.resolve({path:H.path},N),m=a.createHref(H.fullPath);return J(H,u,{params:h(u.params),hash:ir(H.hash),redirectedFrom:void 0,href:m})}let O;if("path"in b)O=J({},b,{path:Tr(n,b.path,N.path).path});else{const H=J({},b.params);for(const u in H)H[u]==null&&delete H[u];O=J({},b,{params:d(b.params)}),N.params=d(N.params)}const L=t.resolve(O,N),G=b.hash||"";L.params=f(h(L.params));const ee=Ec(r,J({},b,{hash:fu(G),path:L.path})),Y=a.createHref(ee);return J({fullPath:ee,hash:G,query:r===Li?hu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:Y})}function _(b){return typeof b=="string"?Tr(n,b,l.value.path):J({},b)}function F(b,N){if(c!==b)return Ut(8,{from:N,to:b})}function $(b){return le(b)}function W(b){return $(J(_(b),{replace:!0}))}function ie(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:O}=N;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=_(L):{path:L},L.params={}),J({query:b.query,hash:b.hash,params:b.params},L)}}function le(b,N){const O=c=v(b),L=l.value,G=b.state,ee=b.force,Y=b.replace===!0,H=ie(O);if(H)return le(J(_(H),{state:G,force:ee,replace:Y}),N||O);const u=O;u.redirectedFrom=N;let m;return!ee&&Pc(r,L,O)&&(m=Ut(16,{to:u,from:L}),St(L,L,!0,!1)),(m?Promise.resolve(m):ce(u,L)).catch(p=>gt(p)?p:Z(p,u,L)).then(p=>{if(p){if(gt(p,2))return le(J(_(p.to),{state:G,force:ee,replace:Y}),N||u)}else p=Ue(u,L,!0,Y,G);return Me(u,L,p),p})}function Ne(b,N){const O=F(b,N);return O?Promise.reject(O):Promise.resolve()}function ce(b,N){let O;const[L,G,ee]=_u(b,N);O=Nr(L.reverse(),"beforeRouteLeave",b,N);for(const H of L)H.leaveGuards.forEach(u=>{O.push(ot(u,b,N))});const Y=Ne.bind(null,b,N);return O.push(Y),Rt(O).then(()=>{O=[];for(const H of i.list())O.push(ot(H,b,N));return O.push(Y),Rt(O)}).then(()=>{O=Nr(G,"beforeRouteUpdate",b,N);for(const H of G)H.updateGuards.forEach(u=>{O.push(ot(u,b,N))});return O.push(Y),Rt(O)}).then(()=>{O=[];for(const H of b.matched)if(H.beforeEnter&&!N.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const u of H.beforeEnter)O.push(ot(u,b,N));else O.push(ot(H.beforeEnter,b,N));return O.push(Y),Rt(O)}).then(()=>(b.matched.forEach(H=>H.enterCallbacks={}),O=Nr(ee,"beforeRouteEnter",b,N),O.push(Y),Rt(O))).then(()=>{O=[];for(const H of o.list())O.push(ot(H,b,N));return O.push(Y),Rt(O)}).catch(H=>gt(H,8)?H:Promise.reject(H))}function Me(b,N,O){for(const L of s.list())L(b,N,O)}function Ue(b,N,O,L,G){const ee=F(b,N);if(ee)return ee;const Y=N===nt,H=Mt?history.state:{};O&&(L||Y?a.replace(b.fullPath,J({scroll:Y&&H&&H.scroll},G)):a.push(b.fullPath,G)),l.value=b,St(b,N,O,Y),Ee()}let Ye;function Pt(){Ye=a.listen((b,N,O)=>{const L=v(b),G=ie(L);if(G){le(J(G,{replace:!0}),L).catch(fn);return}c=L;const ee=l.value;Mt&&Mc(Ii(ee.fullPath,O.delta),wr()),ce(L,ee).catch(Y=>gt(Y,12)?Y:gt(Y,2)?(le(Y.to,L).then(H=>{gt(H,20)&&!O.delta&&O.type===wn.pop&&a.go(-1,!1)}).catch(fn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),Z(Y,L,ee))).then(Y=>{Y=Y||Ue(L,ee,!1),Y&&(O.delta?a.go(-O.delta,!1):O.type===wn.pop&&gt(Y,20)&&a.go(-1,!1)),Me(L,ee,Y)}).catch(fn)})}let Ot=Jt(),Ct=Jt(),ue;function Z(b,N,O){Ee(b);const L=Ct.list();return L.length?L.forEach(G=>G(b,N,O)):console.error(b),Promise.reject(b)}function X(){return ue&&l.value!==nt?Promise.resolve():new Promise((b,N)=>{Ot.add([b,N])})}function Ee(b){ue||(ue=!0,Pt(),Ot.list().forEach(([N,O])=>b?O(b):N()),Ot.reset())}function St(b,N,O,L){const{scrollBehavior:G}=e;if(!Mt||!G)return Promise.resolve();const ee=!O&&Fc(Ii(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return Lo().then(()=>G(b,N,ee)).then(Y=>Y&&Nc(Y)).catch(Y=>Z(Y,b,N))}const We=b=>a.go(b);let Fe;const Pe=new Set;return{currentRoute:l,addRoute:g,removeRoute:E,hasRoute:C,getRoutes:M,resolve:v,options:e,push:$,replace:W,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Ct.add,isReady:X,install(b){const N=this;b.component("RouterLink",vu),b.component("RouterView",wu),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>rn(l)}),Mt&&!Fe&&l.value===nt&&(Fe=!0,$(a.location).catch(G=>{}));const O={};for(const G in nt)O[G]=fe(()=>l.value[G]);b.provide(La,N),b.provide(cs,On(O)),b.provide(Zr,l);const L=b.unmount;Pe.add(b),b.unmount=function(){Pe.delete(b),Pe.size<1&&(c=nt,Ye&&Ye(),l.value=nt,Fe=!1,ue=!1),L()}}}}function Rt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function _u(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Bt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Bt(c,l))||a.push(l))}return[n,r,a]}function Hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function or(e){return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(e)}function Au(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ku(e,t,n){return t&&Bi(e.prototype,t),n&&Bi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function za(e,t){return Pu(e)||Cu(e,t)||xs(e,t)||Iu()}function Sn(e){return Eu(e)||Ou(e)||xs(e)||Su()}function Eu(e){if(Array.isArray(e))return na(e)}function Pu(e){if(Array.isArray(e))return e}function Ou(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function xs(e,t){if(!!e){if(typeof e=="string")return na(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return na(e,t)}}function na(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Su(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ui=function(){},$a={},ws={},_s=null,As={mark:Ui,measure:Ui};try{typeof window!="undefined"&&($a=window),typeof document!="undefined"&&(ws=document),typeof MutationObserver!="undefined"&&(_s=MutationObserver),typeof performance!="undefined"&&(As=performance)}catch{}var Ru=$a.navigator||{},Yi=Ru.userAgent,Wi=Yi===void 0?"":Yi,ut=$a,ae=ws,Ki=_s,jn=As;ut.document;var et=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",ks=~Wi.indexOf("MSIE")||~Wi.indexOf("Trident/"),zn,$n,Dn,Hn,Bn,Ge="___FONT_AWESOME___",ra=16,Es="fa",Ps="svg-inline--fa",kt="data-fa-i2svg",aa="data-fa-pseudo-element",Tu="data-fa-pseudo-element-pending",Da="data-prefix",Ha="data-icon",qi="fontawesome-i2svg",Nu="async",Mu=["HTML","HEAD","STYLE","SCRIPT"],Os=function(){try{return!0}catch{return!1}}(),re="classic",se="sharp",Ba=[re,se];function In(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[re]}})}var _n=In((zn={},de(zn,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(zn,se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),zn)),An=In(($n={},de($n,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de($n,se,{solid:"fass",regular:"fasr",light:"fasl"}),$n)),kn=In((Dn={},de(Dn,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Dn,se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Dn)),Fu=In((Hn={},de(Hn,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Hn,se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Hn)),Lu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Cs="fa-layers-text",ju=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,zu=In((Bn={},de(Bn,re,{"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"}),de(Bn,se,{"900":"fass","400":"fasr","300":"fasl"}),Bn)),Ss=[1,2,3,4,5,6,7,8,9,10],$u=Ss.concat([11,12,13,14,15,16,17,18,19,20]),Du=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=new Set;Object.keys(An[re]).map(En.add.bind(En));Object.keys(An[se]).map(En.add.bind(En));var Hu=[].concat(Ba,Sn(En),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(Ss.map(function(e){return"".concat(e,"x")})).concat($u.map(function(e){return"w-".concat(e)})),un=ut.FontAwesomeConfig||{};function Bu(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Uu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Yu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yu.forEach(function(e){var t=za(e,2),n=t[0],r=t[1],a=Uu(Bu(n));a!=null&&(un[r]=a)})}var Is={styleDefault:"solid",familyDefault:"classic",cssPrefix:Es,replacementClass:Ps,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};un.familyPrefix&&(un.cssPrefix=un.familyPrefix);var Yt=I(I({},Is),un);Yt.autoReplaceSvg||(Yt.observeMutations=!1);var T={};Object.keys(Is).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Yt[e]=n,dn.forEach(function(r){return r(T)})},get:function(){return Yt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Yt.cssPrefix=t,dn.forEach(function(n){return n(T)})},get:function(){return Yt.cssPrefix}});ut.FontAwesomeConfig=T;var dn=[];function Wu(e){return dn.push(e),function(){dn.splice(dn.indexOf(e),1)}}var rt=ra,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ku(e){if(!(!e||!et)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ae.head.insertBefore(t,r),e}}var qu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=qu[Math.random()*62|0];return t}function Xt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ua(e){return e.classList?Xt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Rs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Rs(e[n]),'" ')},"").trim()}function _r(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ya(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function Xu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Gu(e){var t=e.transform,n=e.width,r=n===void 0?ra:n,a=e.height,i=a===void 0?ra:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ks?l+="translate(".concat(t.x/rt-r/2,"em, ").concat(t.y/rt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/rt,"em), calc(-50% + ").concat(t.y/rt,"em)) "):l+="translate(".concat(t.x/rt,"em, ").concat(t.y/rt,"em) "),l+="scale(".concat(t.size/rt*(t.flipX?-1:1),", ").concat(t.size/rt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ts(){var e=Es,t=Ps,n=T.cssPrefix,r=T.replacementClass,a=Qu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Vi=!1;function Mr(){T.autoAddCss&&!Vi&&(Ku(Ts()),Vi=!0)}var Ju={mixout:function(){return{dom:{css:Ts,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},Qe=ut||{};Qe[Ge]||(Qe[Ge]={});Qe[Ge].styles||(Qe[Ge].styles={});Qe[Ge].hooks||(Qe[Ge].hooks={});Qe[Ge].shims||(Qe[Ge].shims=[]);var Ie=Qe[Ge],Ns=[],Zu=function e(){ae.removeEventListener("DOMContentLoaded",e),sr=1,Ns.map(function(t){return t()})},sr=!1;et&&(sr=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),sr||ae.addEventListener("DOMContentLoaded",Zu));function ed(e){!et||(sr?setTimeout(e,0):Ns.push(e))}function Rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Rs(e):"<".concat(t," ").concat(Vu(r),">").concat(i.map(Rn).join(""),"</").concat(t,">")}function Xi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var td=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?td(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function nd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ia(e){var t=nd(e);return t.length===1?t[0].toString(16):null}function rd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Gi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function oa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Gi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,Gi(t)):Ie.styles[e]=I(I({},Ie.styles[e]||{}),i),e==="fas"&&oa("fa",t)}var Un,Yn,Wn,Lt=Ie.styles,ad=Ie.shims,id=(Un={},de(Un,re,Object.values(kn[re])),de(Un,se,Object.values(kn[se])),Un),Wa=null,Ms={},Fs={},Ls={},js={},zs={},od=(Yn={},de(Yn,re,Object.keys(_n[re])),de(Yn,se,Object.keys(_n[se])),Yn);function sd(e){return~Hu.indexOf(e)}function ld(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!sd(a)?a:null}var $s=function(){var t=function(i){return Fr(Lt,function(o,s,l){return o[l]=Fr(s,i,{}),o},{})};Ms=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Fs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),zs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||T.autoFetchSvg,r=Fr(ad,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ls=r.names,js=r.unicodes,Wa=Ar(T.styleDefault,{family:T.familyDefault})};Wu(function(e){Wa=Ar(e.styleDefault,{family:T.familyDefault})});$s();function Ka(e,t){return(Ms[e]||{})[t]}function fd(e,t){return(Fs[e]||{})[t]}function xt(e,t){return(zs[e]||{})[t]}function Ds(e){return Ls[e]||{prefix:null,iconName:null}}function cd(e){var t=js[e],n=Ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dt(){return Wa}var qa=function(){return{prefix:null,iconName:null,rest:[]}};function Ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?re:n,a=_n[r][e],i=An[r][e]||An[r][a],o=e in Ie.styles?e:null;return i||o||null}var Qi=(Wn={},de(Wn,re,Object.keys(kn[re])),de(Wn,se,Object.keys(kn[se])),Wn);function kr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,re,"".concat(T.cssPrefix,"-").concat(re)),de(t,se,"".concat(T.cssPrefix,"-").concat(se)),t),o=null,s=re;(e.includes(i[re])||e.some(function(c){return Qi[re].includes(c)}))&&(s=re),(e.includes(i[se])||e.some(function(c){return Qi[se].includes(c)}))&&(s=se);var l=e.reduce(function(c,f){var d=ld(T.cssPrefix,f);if(Lt[f]?(f=id[s].includes(f)?Fu[s][f]:f,o=f,c.prefix=f):od[s].indexOf(f)>-1?(o=f,c.prefix=Ar(f,{family:s})):d?c.iconName=d:f!==T.replacementClass&&f!==i[re]&&f!==i[se]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var h=o==="fa"?Ds(c.iconName):{},g=xt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Lt.far&&Lt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},qa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===se&&(Lt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=xt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=dt()||"fas"),l}var ud=function(){function e(){Au(this,e),this.definitions={}}return ku(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),oa(s,o[s]);var l=kn[re][s];l&&oa(l,o[s]),$s()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Ji=[],jt={},Dt={},dd=Object.keys(Dt);function md(e,t){var n=t.mixoutsTo;return Ji=e,jt={},Object.keys(Dt).forEach(function(r){dd.indexOf(r)===-1&&delete Dt[r]}),Ji.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),or(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}r.provides&&r.provides(Dt)}),n}function sa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Et(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Dt[e]?Dt[e].apply(null,t):void 0}function la(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||dt();if(!!t)return t=xt(n,t)||t,Xi(Hs.definitions,n,t)||Xi(Ie.styles,n,t)}var Hs=new ud,hd=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,Et("noAuto")},pd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return et?(Et("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,ed(function(){vd({autoReplaceSvgRoot:n}),Et("watch",t)})}},gd={icon:function(t){if(t===null)return null;if(or(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ar(t[0]);return{prefix:r,iconName:xt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Lu))){var a=kr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||dt(),iconName:xt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=dt();return{prefix:i,iconName:xt(i,t)||t}}}},ke={noAuto:hd,config:T,dom:pd,parse:gd,library:Hs,findIconDefinition:la,toHtml:Rn},vd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(Ie.styles).length>0||T.autoFetchSvg)&&et&&T.autoReplaceSvg&&ke.dom.i2svg({node:r})};function Er(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!et){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function bd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=_r(I(I({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function yd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function Va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,E=r.found?r:n,M=E.width,C=E.height,v=a==="fak",_=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(ce){return d.classes.indexOf(ce)===-1}).filter(function(ce){return ce!==""||!!ce}).concat(d.classes).join(" "),F={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(C)})},$=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(M/C*16*.0625,"em")}:{};g&&(F.attributes[kt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(f||Pn())},children:[l]}),delete F.attributes.title);var W=I(I({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:I(I({},$),d.styles)}),ie=r.found&&n.found?Je("generateAbstractMask",W)||{children:[],attributes:{}}:Je("generateAbstractIcon",W)||{children:[],attributes:{}},le=ie.children,Ne=ie.attributes;return W.children=le,W.attributes=Ne,s?yd(W):bd(W)}function Zi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[kt]="");var f=I({},o.styles);Ya(a)&&(f.transform=Gu({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=_r(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function xd(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_r(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lr=Ie.styles;function fa(e){var t=e[0],n=e[1],r=e.slice(4),a=za(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var wd={found:!1,width:512,height:512};function _d(e,t){!Os&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ca(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=dt()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=Ds(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Lr[t]&&Lr[t][e]){var o=Lr[t][e];return r(fa(o))}_d(e,t),r(I(I({},wd),{},{icon:T.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var eo=function(){},ua=T.measurePerformance&&jn&&jn.mark&&jn.measure?jn:{mark:eo,measure:eo},tn='FA "6.4.2"',Ad=function(t){return ua.mark("".concat(tn," ").concat(t," begins")),function(){return Bs(t)}},Bs=function(t){ua.mark("".concat(tn," ").concat(t," ends")),ua.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},Xa={begin:Ad,end:Bs},Gn=function(){};function to(e){var t=e.getAttribute?e.getAttribute(kt):null;return typeof t=="string"}function kd(e){var t=e.getAttribute?e.getAttribute(Da):null,n=e.getAttribute?e.getAttribute(Ha):null;return t&&n}function Ed(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Pd(){if(T.autoReplaceSvg===!0)return Qn.replace;var e=Qn[T.autoReplaceSvg];return e||Qn.replace}function Od(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function Cd(e){return ae.createElement(e)}function Us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Od:Cd:n;if(typeof e=="string")return ae.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Us(o,{ceFn:r}))}),a}function Sd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Qn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Us(a),n)}),n.getAttribute(kt)===null&&T.keepOriginalSource){var r=ae.createComment(Sd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ua(n).indexOf(T.replacementClass))return Qn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Rn(s)}).join(`
`);n.setAttribute(kt,""),n.innerHTML=o}};function no(e){e()}function Ys(e,t){var n=typeof t=="function"?t:Gn;if(e.length===0)n();else{var r=no;T.mutateApproach===Nu&&(r=ut.requestAnimationFrame||no),r(function(){var a=Pd(),i=Xa.begin("mutate");e.map(a),i(),n()})}}var Ga=!1;function Ws(){Ga=!0}function da(){Ga=!1}var lr=null;function ro(e){if(!!Ki&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?Gn:t,r=e.nodeCallback,a=r===void 0?Gn:r,i=e.pseudoElementsCallback,o=i===void 0?Gn:i,s=e.observeMutationsRoot,l=s===void 0?ae:s;lr=new Ki(function(c){if(!Ga){var f=dt();Xt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!to(d.addedNodes[0])&&(T.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&T.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&to(d.target)&&~Du.indexOf(d.attributeName))if(d.attributeName==="class"&&kd(d.target)){var h=kr(Ua(d.target)),g=h.prefix,E=h.iconName;d.target.setAttribute(Da,g||f),E&&d.target.setAttribute(Ha,E)}else Ed(d.target)&&a(d.target)})}}),!!et&&lr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Id(){!lr||lr.disconnect()}function Rd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Td(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=kr(Ua(e));return a.prefix||(a.prefix=dt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=fd(a.prefix,e.innerText)||Ka(a.prefix,ia(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Nd(e){var t=Xt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Md(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Td(e),r=n.iconName,a=n.prefix,i=n.rest,o=Nd(e),s=sa("parseNodeAttributes",{},e),l=t.styleParser?Rd(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Fd=Ie.styles;function Ks(e){var t=T.autoReplaceSvg==="nest"?ao(e,{styleParser:!1}):ao(e);return~t.extra.classes.indexOf(Cs)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var mt=new Set;Ba.map(function(e){mt.add("fa-".concat(e))});Object.keys(_n[re]).map(mt.add.bind(mt));Object.keys(_n[se]).map(mt.add.bind(mt));mt=Sn(mt);function io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!et)return Promise.resolve();var n=ae.documentElement.classList,r=function(d){return n.add("".concat(qi,"-").concat(d))},a=function(d){return n.remove("".concat(qi,"-").concat(d))},i=T.autoFetchSvg?mt:Ba.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Fd));i.includes("fa")||i.push("fa");var o=[".".concat(Cs,":not([").concat(kt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(kt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Xt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Xa.begin("onTree"),c=s.reduce(function(f,d){try{var h=Ks(d);h&&f.push(h)}catch(g){Os||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){Ys(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ks(e).then(function(n){n&&Ys([n],t)})}function jd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:la(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:la(a||{})),e(r,I(I({},n),{},{mask:a}))}}var zd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,g=n.titleId,E=g===void 0?null:g,M=n.classes,C=M===void 0?[]:M,v=n.attributes,_=v===void 0?{}:v,F=n.styles,$=F===void 0?{}:F;if(!!t){var W=t.prefix,ie=t.iconName,le=t.icon;return Er(I({type:"icon"},t),function(){return Et("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?_["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(E||Pn()):(_["aria-hidden"]="true",_.focusable="false")),Va({icons:{main:fa(le),mask:l?fa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ie,transform:I(I({},He),a),symbol:o,title:h,maskId:f,titleId:E,extra:{attributes:_,styles:$,classes:C}})})}},$d={mixout:function(){return{icon:jd(zd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=io,n.nodeCallback=Ld,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ae:r,i=n.callback,o=i===void 0?function(){}:i;return io(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,E){Promise.all([ca(a,s),f.iconName?ca(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var C=za(M,2),v=C[0],_=C[1];g([n,Va({icons:{main:v,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=_r(s);l.length>0&&(a.style=l);var c;return Ya(o)&&(c=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Dd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Er({type:"layer"},function(){Et("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(Sn(i)).join(" ")},children:o}]})}}}},Hd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Er({type:"counter",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),xd({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(Sn(s))}})})}}}},Bd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Er({type:"text",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),Zi({content:n,transform:I(I({},He),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(Sn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ks){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Zi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ud=new RegExp('"',"ug"),oo=[1105920,1112319];function Yd(e){var t=e.replace(Ud,""),n=rd(t,0),r=n>=oo[0]&&n<=oo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ia(a?t[0]:t),isSecondary:r||a}}function so(e,t){var n="".concat(Tu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Xt(e.children),o=i.filter(function(le){return le.getAttribute(aa)===t})[0],s=ut.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ju),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?se:re,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?An[h][l[2].toLowerCase()]:zu[h][c],E=Yd(d),M=E.value,C=E.isSecondary,v=l[0].startsWith("FontAwesome"),_=Ka(g,M),F=_;if(v){var $=cd(M);$.iconName&&$.prefix&&(_=$.iconName,g=$.prefix)}if(_&&!C&&(!o||o.getAttribute(Da)!==g||o.getAttribute(Ha)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var W=Md(),ie=W.extra;ie.attributes[aa]=t,ca(_,g).then(function(le){var Ne=Va(I(I({},W),{},{icons:{main:le,mask:qa()},prefix:g,iconName:F,extra:ie,watchable:!0})),ce=ae.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ce,e.firstChild):e.appendChild(ce),ce.outerHTML=Ne.map(function(Me){return Rn(Me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Wd(e){return Promise.all([so(e,"::before"),so(e,"::after")])}function Kd(e){return e.parentNode!==document.head&&!~Mu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(aa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function lo(e){if(!!et)return new Promise(function(t,n){var r=Xt(e.querySelectorAll("*")).filter(Kd).map(Wd),a=Xa.begin("searchPseudoElements");Ws(),Promise.all(r).then(function(){a(),da(),t()}).catch(function(){a(),da(),n()})})}var qd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=lo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ae:r;T.searchPseudoElements&&lo(a)}}},fo=!1,Vd={mixout:function(){return{dom:{unwatch:function(){Ws(),fo=!0}}}},hooks:function(){return{bootstrap:function(){ro(sa("mutationObserverCallbacks",{}))},noAuto:function(){Id()},watch:function(n){var r=n.observeMutationsRoot;fo?da():ro(sa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},co=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Xd={mixout:function(){return{parse:{transform:function(n){return co(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=co(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},jr={x:0,y:0,width:"100%",height:"100%"};function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gd(e){return e.tag==="g"?e.children:[e]}var Qd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?kr(a.split(" ").map(function(o){return o.trim()})):qa();return i.prefix||(i.prefix=dt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,g=Xu({transform:l,containerWidth:d,iconWidth:c}),E={tag:"rect",attributes:I(I({},jr),{},{fill:"white"})},M=f.children?{children:f.children.map(uo)}:{},C={tag:"g",attributes:I({},g.inner),children:[uo(I({tag:f.tag,attributes:I(I({},f.attributes),g.path)},M))]},v={tag:"g",attributes:I({},g.outer),children:[C]},_="mask-".concat(s||Pn()),F="clip-".concat(s||Pn()),$={tag:"mask",attributes:I(I({},jr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,v]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Gd(h)},$]};return r.push(W,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(_,")")},jr)}),{children:r,attributes:a}}}},Jd={provides:function(t){var n=!1;ut.matchMedia&&(n=ut.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},em=[Ju,$d,Dd,Hd,Bd,qd,Vd,Xd,Qd,Jd,Zd];md(em,{mixoutsTo:ke});ke.noAuto;var qs=ke.config,Em=ke.library;ke.dom;var fr=ke.parse;ke.findIconDefinition;ke.toHtml;var tm=ke.icon;ke.layer;var nm=ke.text;ke.counter;function mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mo(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cr(e){return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cr(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function am(e,t){if(e==null)return{};var n=rm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ma(e){return im(e)||om(e)||sm(e)||lm()}function im(e){if(Array.isArray(e))return ha(e)}function om(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sm(e,t){if(!!e){if(typeof e=="string")return ha(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ha(e,t)}}function ha(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Vs={exports:{}};(function(e){(function(t){var n=function(v,_,F){if(!c(_)||d(_)||h(_)||g(_)||l(_))return _;var $,W=0,ie=0;if(f(_))for($=[],ie=_.length;W<ie;W++)$.push(n(v,_[W],F));else{$={};for(var le in _)Object.prototype.hasOwnProperty.call(_,le)&&($[v(le,F)]=n(v,_[le],F))}return $},r=function(v,_){_=_||{};var F=_.separator||"_",$=_.split||/(?=[A-Z])/;return v.split($).join(F)},a=function(v){return E(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,F){return F?F.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var _=a(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},E=function(v){return v=v-0,v===v},M=function(v,_){var F=_&&"process"in _?_.process:_;return typeof F!="function"?v:function($,W){return F($,v,W)}},C={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,_){return n(M(a,_),v)},decamelizeKeys:function(v,_){return n(M(o,_),v,_)},pascalizeKeys:function(v,_){return n(M(i,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(fm)})(Vs);var cm=Vs.exports,um=["class","style"];function dm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=cm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function mm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Qa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Qa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=mm(f);break;case"style":l.style=dm(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=am(n,um);return xr(e.tag,Se(Se(Se({},t),{},{class:a.class,style:Se(Se({},a.style),o)},a.attrs),s),r)}var Xs=!1;try{Xs=!0}catch{}function hm(){if(!Xs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function mn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}function pm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ye(t,"fa-".concat(e.size),e.size!==null),ye(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ye(t,"fa-pull-".concat(e.pull),e.pull!==null),ye(t,"fa-swap-opacity",e.swapOpacity),ye(t,"fa-bounce",e.bounce),ye(t,"fa-shake",e.shake),ye(t,"fa-beat",e.beat),ye(t,"fa-fade",e.fade),ye(t,"fa-beat-fade",e.beatFade),ye(t,"fa-flash",e.flash),ye(t,"fa-spin-pulse",e.spinPulse),ye(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ho(e){if(e&&cr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(fr.icon)return fr.icon(e);if(e===null)return null;if(cr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Pm=Cn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=fe(function(){return ho(t.icon)}),i=fe(function(){return mn("classes",pm(t))}),o=fe(function(){return mn("transform",typeof t.transform=="string"?fr.transform(t.transform):t.transform)}),s=fe(function(){return mn("mask",ho(t.mask))}),l=fe(function(){return tm(a.value,Se(Se(Se(Se({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(f){if(!f)return hm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=fe(function(){return l.value?Qa(l.value.abstract[0],{},r):null});return function(){return c.value}}});Cn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=qs.familyPrefix,i=fe(function(){return["".concat(a,"-layers")].concat(ma(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return xr("div",{class:i.value},r.default?r.default():[])}}});Cn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=qs.familyPrefix,i=fe(function(){return mn("classes",[].concat(ma(t.counter?["".concat(a,"-layers-counter")]:[]),ma(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=fe(function(){return mn("transform",typeof t.transform=="string"?fr.transform(t.transform):t.transform)}),s=fe(function(){var c=nm(t.value.toString(),Se(Se({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=fe(function(){return Qa(s.value,{},r)});return function(){return l.value}}});var Om={prefix:"fas",iconName:"r",icon:[320,512,[114],"52","M64 32C28.7 32 0 60.7 0 96V288 448c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3L261.8 466.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6L230.1 309.5C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144H64zM176 256H64V96H176c44.2 0 80 35.8 80 80s-35.8 80-80 80z"]},Cm={prefix:"fas",iconName:"s",icon:[320,512,[115],"53","M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9 .6 2.9 .8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9l-.2 0 0 0c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3C5.1 440.8-3.9 422.7 1.6 405.9s23.7-25.8 40.5-20.3c4.9 1.6 10.2 3.4 15.9 5.4c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1 .7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5L2.1 133.9C9.4 91.4 37.4 62.2 73.9 46.6c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.2 22.7c-11.2-3-48.1-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z"]},Sm={prefix:"fas",iconName:"b",icon:[320,512,[98],"42","M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H192c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128H64zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288h96 32c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V288z"]};export{Pm as F,bm as a,is as b,xm as c,Oe as d,vm as e,wm as f,km as g,Am as h,Sm as i,Cm as j,Om as k,Em as l,_m as m,va as n,ym as o,gm as p,Dl as r,rn as u,Jl as w};
