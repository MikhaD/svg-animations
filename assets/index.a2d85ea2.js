const $e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};$e();function x(){}const we=e=>e;function de(e){return e()}function re(){return Object.create(null)}function q(e){e.forEach(de)}function me(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function V(e,t){return S||(S=document.createElement("a")),S.href=t,e===S.href}function be(e){return Object.keys(e).length===0}const _e=typeof window!="undefined";let ke=_e?()=>window.performance.now():()=>Date.now(),W=_e?e=>requestAnimationFrame(e):x;const E=new Set;function he(e){E.forEach(t=>{t.c(e)||(E.delete(t),t.f())}),E.size!==0&&W(he)}function Ee(e){let t;return E.size===0&&W(he),{promise:new Promise(n=>{E.add(t={c:e,f:n})}),abort(){E.delete(t)}}}function v(e,t){e.appendChild(t)}function pe(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function xe(e){const t=w("style");return qe(pe(e),t),t.sheet}function qe(e,t){v(e.head||e,t)}function P(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function F(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Ae(e){return document.createTextNode(e)}function B(){return Ae(" ")}function X(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Oe(e){return Array.from(e.childNodes)}function je(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}const D=new Map;let H=0;function Ne(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Le(e,t){const n={stylesheet:xe(t),rules:{}};return D.set(e,n),n}function ie(e,t,n,o,r,s,i,a=0){const l=16.666/o;let m=`{
`;for(let g=0;g<=1;g+=l){const b=t+(n-t)*s(g);m+=g*100+`%{${i(b,1-b)}}
`}const d=m+`100% {${i(n,1-n)}}
}`,c=`__svelte_${Ne(d)}_${a}`,u=pe(e),{stylesheet:f,rules:h}=D.get(u)||Le(u,e);h[c]||(h[c]=!0,f.insertRule(`@keyframes ${c} ${d}`,f.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${c} ${o}ms linear ${r}ms 1 both`,H+=1,c}function Se(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),r=n.length-o.length;r&&(e.style.animation=o.join(", "),H-=r,H||Me())}function Me(){W(()=>{H||(D.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),D.clear())})}let Y;function O(e){Y=e}function Re(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(o=>o.call(this,t))}const A=[],G=[],R=[],J=[],ze=Promise.resolve();let Q=!1;function Pe(){Q||(Q=!0,ze.then(ge))}function N(e){R.push(e)}function Be(e){J.push(e)}const I=new Set;let M=0;function ge(){const e=Y;do{for(;M<A.length;){const t=A[M];M++,O(t),De(t.$$)}for(O(null),A.length=0,M=0;G.length;)G.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];I.has(n)||(I.add(n),n())}R.length=0}while(A.length);for(;J.length;)J.pop()();Q=!1,I.clear(),O(e)}function De(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}let C;function He(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function K(e,t,n){e.dispatchEvent(je(`${t?"intro":"outro"}${n}`))}const z=new Set;let $;function oe(){$={r:0,c:[],p:$}}function se(){$.r||q($.c),$=$.p}function y(e,t){e&&e.i&&(z.delete(e),e.i(t))}function k(e,t,n,o){if(e&&e.o){if(z.has(e))return;z.add(e),$.c.push(()=>{z.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}const Te={duration:0};function le(e,t,n,o){let r=t(e,n),s=o?0:1,i=null,a=null,l=null;function m(){l&&Se(e,l)}function d(u,f){const h=u.b-s;return f*=Math.abs(h),{a:s,b:u.b,d:h,duration:f,start:u.start,end:u.start+f,group:u.group}}function c(u){const{delay:f=0,duration:h=300,easing:p=we,tick:g=x,css:b}=r||Te,T={start:ke()+f,b:u};u||(T.group=$,$.r+=1),i||a?a=T:(b&&(m(),l=ie(e,s,u,h,f,p,b)),u&&g(0,1),i=d(T,h),N(()=>K(e,u,"start")),Ee(L=>{if(a&&L>a.start&&(i=d(a,h),a=null,K(e,i.b,"start"),b&&(m(),l=ie(e,s,i.b,i.duration,0,p,r.css))),i){if(L>=i.end)g(s=i.b,1-s),K(e,i.b,"end"),a||(i.b?m():--i.group.r||q(i.group.c)),i=null;else if(L>=i.start){const ye=L-i.start;s=i.a+i.d*p(ye/i.duration),g(s,1-s)}}return!!(i||a)}))}return{run(u){me(r)?He().then(()=>{r=r(),c(u)}):c(u)},end(){m(),i=a=null}}}function Fe(e,t,n){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function ve(e){e&&e.c()}function Z(e,t,n,o){const{fragment:r,on_mount:s,on_destroy:i,after_update:a}=e.$$;r&&r.m(t,n),o||N(()=>{const l=s.map(de).filter(me);i?i.push(...l):q(l),e.$$.on_mount=[]}),a.forEach(N)}function ee(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(e,t){e.$$.dirty[0]===-1&&(A.push(e),Pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,r,s,i,a=[-1]){const l=Y;O(e);const m=e.$$={fragment:null,ctx:null,props:s,update:x,not_equal:r,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:re(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};i&&i(m.root);let d=!1;if(m.ctx=n?n(e,t.props||{},(c,u,...f)=>{const h=f.length?f[0]:u;return m.ctx&&r(m.ctx[c],m.ctx[c]=h)&&(!m.skip_bound&&m.bound[c]&&m.bound[c](h),d&&Ie(e,c)),u}):[],m.update(),d=!0,q(m.before_update),m.fragment=o?o(m.ctx):!1,t.target){if(t.hydrate){const c=Oe(t.target);m.fragment&&m.fragment.l(c),c.forEach(j)}else m.fragment&&m.fragment.c();t.intro&&y(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),ge()}O(l)}class ne{$destroy(){ee(this,1),this.$destroy=x}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ke(e){const t=e-1;return t*t*t+1}function ce(e,{delay:t=0,duration:n=400,easing:o=Ke,start:r=0,opacity:s=0}={}){const i=getComputedStyle(e),a=+i.opacity,l=i.transform==="none"?"":i.transform,m=1-r,d=a*(1-s);return{delay:t,duration:n,easing:o,css:(c,u)=>`
			transform: ${l} scale(${1-m*u});
			opacity: ${a-d*u}
		`}}function Ve(e){let t,n,o,r,s,i,a,l,m,d,c,u,f,h;return{c(){t=w("div"),n=w("img"),r=B(),s=w("span"),s.textContent="\xD7",i=B(),a=w("a"),l=F("svg"),m=F("path"),d=F("path"),V(n.src,o=e[1])||_(n,"src",o),_(n,"alt",e[0]),_(s,"class","svelte-wvl0q7"),_(m,"d","M152.021 65.186l-3.893-13.8C142.201 30.376 122.877 15 100 15c-27.614 0-50 22.386-50 50 0 2.904.246 5.74.715 8.489l3.071 17.994L35 91c-11.046 0-20 8.954-20 20s8.954 20 20 20h20.5v15H35c-19.33 0-35-15.67-35-35 0-14.916 9.33-27.653 22.473-32.692 3.89-1.49 9.042-2.296 13.456-2.296A65.418 65.418 0 0135 65c0-1.343.04-2.677.121-4C37.187 26.965 65.445 0 100 0c29.768 0 54.862 20.01 62.565 47.314A50.146 50.146 0 01174 46c27.614 0 50 22.386 50 50s-22.386 50-50 50h-15v-15h15c19.33 0 35-15.67 35-35s-15.67-35-35-35c-2.776 0-5.458.32-8.018.92l-13.961 3.266z"),_(d,"d","M123 71H93v60H64l43.5 42 43.5-42h-28V71z"),_(l,"viewBox","0 0 224 173"),_(l,"xmlns","http://www.w3.org/2000/svg"),_(a,"href",e[1]),_(a,"download",e[0]),_(a,"title","download"),_(a,"class","svelte-wvl0q7"),_(t,"class","svelte-wvl0q7")},m(p,g){P(p,t,g),v(t,n),v(t,r),v(t,s),v(t,i),v(t,a),v(a,l),v(l,m),v(l,d),u=!0,f||(h=X(s,"click",e[2]),f=!0)},p(p,[g]){(!u||g&1)&&_(n,"alt",p[0]),(!u||g&1)&&_(a,"download",p[0])},i(p){u||(N(()=>{c||(c=le(t,ce,{},!0)),c.run(1)}),u=!0)},o(p){c||(c=le(t,ce,{},!1)),c.run(0),u=!1},d(p){p&&j(t),p&&c&&c.end(),f=!1,h()}}}function Ge(e,t,n){let{animation:o}=t;const r=`./animations/${o}.svg`,s=()=>n(0,o=null);return e.$$set=i=>{"animation"in i&&n(0,o=i.animation)},[o,r,s]}class Je extends ne{constructor(t){super(),te(this,t,Ge,Ve,U,{animation:0})}}function Qe(e){let t,n,o,r,s;return{c(){t=w("div"),n=w("img"),V(n.src,o=`./animations/${e[0]}.svg`)||_(n,"src",o),_(n,"alt",e[0]),_(t,"class","svelte-yqejns")},m(i,a){P(i,t,a),v(t,n),r||(s=X(t,"click",e[1]),r=!0)},p(i,[a]){a&1&&!V(n.src,o=`./animations/${i[0]}.svg`)&&_(n,"src",o),a&1&&_(n,"alt",i[0])},i:x,o:x,d(i){i&&j(t),r=!1,s()}}}function Ue(e,t,n){let{name:o}=t;function r(s){Re.call(this,e,s)}return e.$$set=s=>{"name"in s&&n(0,o=s.name)},[o,r]}class We extends ne{constructor(t){super(),te(this,t,Ue,Qe,U,{name:0})}}function ae(e,t,n){const o=e.slice();return o[5]=t[n],o}function ue(e){let t,n;function o(){return e[3](e[5])}return t=new We({props:{name:e[5]}}),t.$on("click",o),{c(){ve(t.$$.fragment)},m(r,s){Z(t,r,s),n=!0},p(r,s){e=r},i(r){n||(y(t.$$.fragment,r),n=!0)},o(r){k(t.$$.fragment,r),n=!1},d(r){ee(t,r)}}}function fe(e){let t,n,o;function r(i){e[4](i)}let s={};return e[0]!==void 0&&(s.animation=e[0]),t=new Je({props:s}),G.push(()=>Fe(t,"animation",r)),{c(){ve(t.$$.fragment)},m(i,a){Z(t,i,a),o=!0},p(i,a){const l={};!n&&a&1&&(n=!0,l.animation=i[0],Be(()=>n=!1)),t.$set(l)},i(i){o||(y(t.$$.fragment,i),o=!0)},o(i){k(t.$$.fragment,i),o=!1},d(i){ee(t,i)}}}function Xe(e){let t,n,o,r,s,i,a=e[1],l=[];for(let c=0;c<a.length;c+=1)l[c]=ue(ae(e,a,c));const m=c=>k(l[c],1,1,()=>{l[c]=null});let d=e[0]&&fe(e);return{c(){t=B(),n=w("main");for(let c=0;c<l.length;c+=1)l[c].c();o=B(),d&&d.c(),_(n,"class","svelte-13iclb")},m(c,u){P(c,t,u),P(c,n,u);for(let f=0;f<l.length;f+=1)l[f].m(n,null);v(n,o),d&&d.m(n,null),r=!0,s||(i=X(document.body,"keydown",e[2]),s=!0)},p(c,[u]){if(u&3){a=c[1];let f;for(f=0;f<a.length;f+=1){const h=ae(c,a,f);l[f]?(l[f].p(h,u),y(l[f],1)):(l[f]=ue(h),l[f].c(),y(l[f],1),l[f].m(n,o))}for(oe(),f=a.length;f<l.length;f+=1)m(f);se()}c[0]?d?(d.p(c,u),u&1&&y(d,1)):(d=fe(c),d.c(),y(d,1),d.m(n,null)):d&&(oe(),k(d,1,1,()=>{d=null}),se())},i(c){if(!r){for(let u=0;u<a.length;u+=1)y(l[u]);y(d),r=!0}},o(c){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)k(l[u]);k(d),r=!1},d(c){c&&j(t),c&&j(n),Ce(l,c),d&&d.d(),s=!1,i()}}}function Ye(e,t,n){const o=["grow","shrink","spin","logo","logo infinite","oscillate","slide","slide chase"];let r;const s=l=>l.key==="Escape"&&n(0,r=null),i=l=>n(0,r=l);function a(l){r=l,n(0,r)}return[r,o,s,i,a]}class Ze extends ne{constructor(t){super(),te(this,t,Ye,Xe,U,{})}}new Ze({target:document.body});
