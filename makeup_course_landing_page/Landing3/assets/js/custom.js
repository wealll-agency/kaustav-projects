/* --- Source: ./libraries/js/jquery-v3.4.1.min.js --- */
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});


/* --- Source: ./libraries/js/bootstrap.min.js --- */
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict";function e(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}const i=e(t),s=new Map,n={set(t,e,i){s.has(t)||s.set(t,new Map);const n=s.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>s.has(t)&&s.get(t).get(e)||null,remove(t,e){if(!s.has(t))return;const i=s.get(t);i.delete(e),0===i.size&&s.delete(t)}},o="transitionend",r=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),a=t=>{t.dispatchEvent(new Event(o))},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(r(t)):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),u=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},g=t=>{t.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],p=()=>"rtl"===document.documentElement.dir,b=t=>{var e;e=()=>{const e=f();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of m)t()})),m.push(e)):e()},v=(t,e=[],i=t)=>"function"==typeof t?t.call(...e):i,y=(t,e,i=!0)=>{if(!i)return void v(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let n=!1;const r=({target:i})=>{i===e&&(n=!0,e.removeEventListener(o,r),v(t))};e.addEventListener(o,r),setTimeout((()=>{n||a(e)}),s)},w=(t,e,i,s)=>{const n=t.length;let o=t.indexOf(e);return-1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},A=/[^.]*(?=\..*)\.|.*/,E=/\..*/,C=/::\d+$/,T={};let k=1;const $={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function O(t){const e=L(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function I(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function D(t,e,i){const s="string"==typeof e,n=s?i:e||i;let o=M(t);return S.has(o)||(o=t),[s,n,o]}function N(t,e,i,s,n){if("string"!=typeof e||!t)return;let[o,r,a]=D(e,i,s);if(e in $){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=O(t),c=l[a]||(l[a]={}),h=I(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=L(r,e.replace(A,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return F(n,{delegateTarget:r}),s.oneOff&&j.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return F(s,{delegateTarget:t}),i.oneOff&&j.off(t,s.type,e),e.apply(t,[s])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function P(t,e,i,s,n){const o=I(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function x(t,e,i,s){const n=e[i]||{};for(const[o,r]of Object.entries(n))o.includes(s)&&P(t,e,i,r.callable,r.delegationSelector)}function M(t){return t=t.replace(E,""),$[t]||t}const j={on(t,e,i,s){N(t,e,i,s,!1)},one(t,e,i,s){N(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=D(e,i,s),a=r!==e,l=O(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))x(t,l,i,e.slice(1));for(const[i,s]of Object.entries(c)){const n=i.replace(C,"");a&&!e.includes(n)||P(t,l,r,s.callable,s.delegationSelector)}}else{if(!Object.keys(c).length)return;P(t,l,r,o,n?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=f();let n=null,o=!0,r=!0,a=!1;e!==M(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented());const l=F(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}};function F(t,e={}){for(const[i,s]of Object.entries(e))try{t[i]=s}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>s})}return t}function z(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function H(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${H(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${H(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const s of i){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),e[i]=z(t.dataset[s])}return e},getDataAttribute:(t,e)=>z(t.getAttribute(`data-bs-${H(e)}`))};class q{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=l(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...l(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,n]of Object.entries(e)){const e=t[s],o=l(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(n).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}var i}}class W extends q{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){y(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return n.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.7"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const R=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>r(t))).join(","):null},K={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let s=t.parentNode.closest(e);for(;s;)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!d(t)&&h(t)))},getSelectorFromElement(t){const e=R(t);return e&&K.findOne(e)?e:null},getElementFromSelector(t){const e=R(t);return e?K.findOne(e):null},getMultipleElementsFromSelector(t){const e=R(t);return e?K.find(e):[]}},V=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;j.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),d(this))return;const n=K.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(n)[e]()}))},Q=".bs.alert",X=`close${Q}`,Y=`closed${Q}`;class U extends W{static get NAME(){return"alert"}close(){if(j.trigger(this._element,X).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),j.trigger(this._element,Y),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=U.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}V(U,"close"),b(U);const G='[data-bs-toggle="button"]';class J extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=J.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}j.on(document,"click.bs.button.data-api",G,(t=>{t.preventDefault();const e=t.target.closest(G);J.getOrCreateInstance(e).toggle()})),b(J);const Z=".bs.swipe",tt=`touchstart${Z}`,et=`touchmove${Z}`,it=`touchend${Z}`,st=`pointerdown${Z}`,nt=`pointerup${Z}`,ot={endCallback:null,leftCallback:null,rightCallback:null},rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class at extends q{constructor(t,e){super(),this._element=t,t&&at.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"swipe"}dispose(){j.off(this._element,Z)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&v(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(j.on(this._element,st,(t=>this._start(t))),j.on(this._element,nt,(t=>this._end(t))),this._element.classList.add("pointer-event")):(j.on(this._element,tt,(t=>this._start(t))),j.on(this._element,et,(t=>this._move(t))),j.on(this._element,it,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const lt=".bs.carousel",ct=".data-api",ht="ArrowLeft",dt="ArrowRight",ut="next",_t="prev",gt="left",ft="right",mt=`slide${lt}`,pt=`slid${lt}`,bt=`keydown${lt}`,vt=`mouseenter${lt}`,yt=`mouseleave${lt}`,wt=`dragstart${lt}`,At=`load${lt}${ct}`,Et=`click${lt}${ct}`,Ct="carousel",Tt="active",kt=".active",$t=".carousel-item",St=kt+$t,Lt={[ht]:ft,[dt]:gt},Ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},It={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Dt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=K.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Ct&&this.cycle()}static get Default(){return Ot}static get DefaultType(){return It}static get NAME(){return"carousel"}next(){this._slide(ut)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(_t)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?j.one(this._element,pt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void j.one(this._element,pt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?ut:_t;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&j.on(this._element,bt,(t=>this._keydown(t))),"hover"===this._config.pause&&(j.on(this._element,vt,(()=>this.pause())),j.on(this._element,yt,(()=>this._maybeEnableCycle()))),this._config.touch&&at.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of K.find(".carousel-item img",this._element))j.on(t,wt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(gt)),rightCallback:()=>this._slide(this._directionToOrder(ft)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new at(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Lt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=K.findOne(kt,this._indicatorsElement);e.classList.remove(Tt),e.removeAttribute("aria-current");const i=K.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(Tt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===ut,n=e||w(this._getItems(),i,s,this._config.wrap);if(n===i)return;const o=this._getItemIndex(n),r=e=>j.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(mt).defaultPrevented)return;if(!i||!n)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n;const l=s?"carousel-item-start":"carousel-item-end",c=s?"carousel-item-next":"carousel-item-prev";n.classList.add(c),g(n),i.classList.add(l),n.classList.add(l),this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(Tt),i.classList.remove(Tt,c,l),this._isSliding=!1,r(pt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return K.findOne(St,this._element)}_getItems(){return K.find($t,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===gt?_t:ut:t===gt?ut:_t}_orderToDirection(t){return p()?t===_t?gt:ft:t===_t?ft:gt}static jQueryInterface(t){return this.each((function(){const e=Dt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}j.on(document,Et,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=K.getElementFromSelector(this);if(!e||!e.classList.contains(Ct))return;t.preventDefault();const i=Dt.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),j.on(window,At,(()=>{const t=K.find('[data-bs-ride="carousel"]');for(const e of t)Dt.getOrCreateInstance(e)})),b(Dt);const Nt=".bs.collapse",Pt=`show${Nt}`,xt=`shown${Nt}`,Mt=`hide${Nt}`,jt=`hidden${Nt}`,Ft=`click${Nt}.data-api`,zt="show",Ht="collapse",Bt="collapsing",qt=`:scope .${Ht} .${Ht}`,Wt='[data-bs-toggle="collapse"]',Rt={parent:null,toggle:!0},Kt={parent:"(null|element)",toggle:"boolean"};class Vt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=K.find(Wt);for(const t of i){const e=K.getSelectorFromElement(t),i=K.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Rt}static get DefaultType(){return Kt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Vt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(j.trigger(this._element,Pt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Ht),this._element.classList.add(Bt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Bt),this._element.classList.add(Ht,zt),this._element.style[e]="",j.trigger(this._element,xt)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(j.trigger(this._element,Mt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(Bt),this._element.classList.remove(Ht,zt);for(const t of this._triggerArray){const e=K.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Bt),this._element.classList.add(Ht),j.trigger(this._element,jt)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(zt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Wt);for(const e of t){const t=K.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=K.find(qt,this._config.parent);return K.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Vt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}j.on(document,Ft,Wt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of K.getMultipleElementsFromSelector(this))Vt.getOrCreateInstance(t,{toggle:!1}).toggle()})),b(Vt);const Qt="dropdown",Xt=".bs.dropdown",Yt=".data-api",Ut="ArrowUp",Gt="ArrowDown",Jt=`hide${Xt}`,Zt=`hidden${Xt}`,te=`show${Xt}`,ee=`shown${Xt}`,ie=`click${Xt}${Yt}`,se=`keydown${Xt}${Yt}`,ne=`keyup${Xt}${Yt}`,oe="show",re='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ae=`${re}.${oe}`,le=".dropdown-menu",ce=p()?"top-end":"top-start",he=p()?"top-start":"top-end",de=p()?"bottom-end":"bottom-start",ue=p()?"bottom-start":"bottom-end",_e=p()?"left-start":"right-start",ge=p()?"right-start":"left-start",fe={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},me={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class pe extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=K.next(this._element,le)[0]||K.prev(this._element,le)[0]||K.findOne(le,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return fe}static get DefaultType(){return me}static get NAME(){return Qt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!j.trigger(this._element,te,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))j.on(t,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(oe),this._element.classList.add(oe),j.trigger(this._element,ee,t)}}hide(){if(d(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!j.trigger(this._element,Jt,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.off(t,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(oe),this._element.classList.remove(oe),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,Zt,t),this._element.focus()}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Qt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;"parent"===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=i.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(oe)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return _e;if(t.classList.contains("dropstart"))return ge;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?he:ce:e?ue:de}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...v(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const i=K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>h(t)));i.length&&w(i,e,t===Gt,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=pe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=K.find(ae);for(const i of e){const e=pe.getInstance(i);if(!e||!1===e._config.autoClose)continue;const s=t.composedPath(),n=s.includes(e._menu);if(s.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,s=[Ut,Gt].includes(t.key);if(!s&&!i)return;if(e&&!i)return;t.preventDefault();const n=this.matches(re)?this:K.prev(this,re)[0]||K.next(this,re)[0]||K.findOne(re,t.delegateTarget.parentNode),o=pe.getOrCreateInstance(n);if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}j.on(document,se,re,pe.dataApiKeydownHandler),j.on(document,se,le,pe.dataApiKeydownHandler),j.on(document,ie,pe.clearMenus),j.on(document,ne,pe.clearMenus),j.on(document,ie,re,(function(t){t.preventDefault(),pe.getOrCreateInstance(this).toggle()})),b(pe);const be="backdrop",ve="show",ye=`mousedown.bs.${be}`,we={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ae={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ee extends q{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return we}static get DefaultType(){return Ae}static get NAME(){return be}show(t){if(!this._config.isVisible)return void v(t);this._append();const e=this._getElement();this._config.isAnimated&&g(e),e.classList.add(ve),this._emulateAnimation((()=>{v(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(ve),this._emulateAnimation((()=>{this.dispose(),v(t)}))):v(t)}dispose(){this._isAppended&&(j.off(this._element,ye),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),j.on(t,ye,(()=>{v(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){y(t,this._getElement(),this._config.isAnimated)}}const Ce=".bs.focustrap",Te=`focusin${Ce}`,ke=`keydown.tab${Ce}`,$e="backward",Se={autofocus:!0,trapElement:null},Le={autofocus:"boolean",trapElement:"element"};class Oe extends q{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Se}static get DefaultType(){return Le}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),j.off(document,Ce),j.on(document,Te,(t=>this._handleFocusin(t))),j.on(document,ke,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,Ce))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=K.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===$e?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?$e:"forward")}}const Ie=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",De=".sticky-top",Ne="padding-right",Pe="margin-right";class xe{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ne,(e=>e+t)),this._setElementAttributes(Ie,Ne,(e=>e+t)),this._setElementAttributes(De,Pe,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ne),this._resetElementAttributes(Ie,Ne),this._resetElementAttributes(De,Pe)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(l(t))e(t);else for(const i of K.find(t,this._element))e(i)}}const Me=".bs.modal",je=`hide${Me}`,Fe=`hidePrevented${Me}`,ze=`hidden${Me}`,He=`show${Me}`,Be=`shown${Me}`,qe=`resize${Me}`,We=`click.dismiss${Me}`,Re=`mousedown.dismiss${Me}`,Ke=`keydown.dismiss${Me}`,Ve=`click${Me}.data-api`,Qe="modal-open",Xe="show",Ye="modal-static",Ue={backdrop:!0,focus:!0,keyboard:!0},Ge={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Je extends W{constructor(t,e){super(t,e),this._dialog=K.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new xe,this._addEventListeners()}static get Default(){return Ue}static get DefaultType(){return Ge}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||j.trigger(this._element,He,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Qe),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(j.trigger(this._element,je).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Xe),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){j.off(window,Me),j.off(this._dialog,Me),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ee({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Oe({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=K.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),g(this._element),this._element.classList.add(Xe),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,Be,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){j.on(this._element,Ke,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),j.on(window,qe,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),j.on(this._element,Re,(t=>{j.one(this._element,We,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Qe),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,ze)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(j.trigger(this._element,Fe).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Ye)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Ye),this._queueCallback((()=>{this._element.classList.remove(Ye),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}j.on(document,Ve,'[data-bs-toggle="modal"]',(function(t){const e=K.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,He,(t=>{t.defaultPrevented||j.one(e,ze,(()=>{h(this)&&this.focus()}))}));const i=K.findOne(".modal.show");i&&Je.getInstance(i).hide(),Je.getOrCreateInstance(e).toggle(this)})),V(Je),b(Je);const Ze=".bs.offcanvas",ti=".data-api",ei=`load${Ze}${ti}`,ii="show",si="showing",ni="hiding",oi=".offcanvas.show",ri=`show${Ze}`,ai=`shown${Ze}`,li=`hide${Ze}`,ci=`hidePrevented${Ze}`,hi=`hidden${Ze}`,di=`resize${Ze}`,ui=`click${Ze}${ti}`,_i=`keydown.dismiss${Ze}`,gi={backdrop:!0,keyboard:!0,scroll:!1},fi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class mi extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gi}static get DefaultType(){return fi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||j.trigger(this._element,ri,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new xe).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(si),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(ii),this._element.classList.remove(si),j.trigger(this._element,ai,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(j.trigger(this._element,li).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ni),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(ii,ni),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new xe).reset(),j.trigger(this._element,hi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ee({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():j.trigger(this._element,ci)}:null})}_initializeFocusTrap(){return new Oe({trapElement:this._element})}_addEventListeners(){j.on(this._element,_i,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():j.trigger(this._element,ci))}))}static jQueryInterface(t){return this.each((function(){const e=mi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}j.on(document,ui,'[data-bs-toggle="offcanvas"]',(function(t){const e=K.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;j.one(e,hi,(()=>{h(this)&&this.focus()}));const i=K.findOne(oi);i&&i!==e&&mi.getInstance(i).hide(),mi.getOrCreateInstance(e).toggle(this)})),j.on(window,ei,(()=>{for(const t of K.find(oi))mi.getOrCreateInstance(t).show()})),j.on(window,di,(()=>{for(const t of K.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&mi.getOrCreateInstance(t).hide()})),V(mi),b(mi);const pi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},bi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),vi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,yi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!bi.has(i)||Boolean(vi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},wi={allowList:pi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ai={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ei={entry:"(string|element|function|null)",selector:"(string|element)"};class Ci extends q{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return wi}static get DefaultType(){return Ai}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Ei)}_setContent(t,e,i){const s=K.findOne(i,t);s&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"));for(const t of n){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const s=[].concat(...t.attributes),n=[].concat(e["*"]||[],e[i]||[]);for(const e of s)yi(e,n)||t.removeAttribute(e.nodeName)}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return v(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ti=new Set(["sanitize","allowList","sanitizeFn"]),ki="fade",$i="show",Si=".tooltip-inner",Li=".modal",Oi="hide.bs.modal",Ii="hover",Di="focus",Ni="click",Pi={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},xi={allowList:pi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Mi={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ji extends W{constructor(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return xi}static get DefaultType(){return Mi}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(Li),Oi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=j.trigger(this._element,this.constructor.eventName("show")),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),j.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add($i),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.on(t,"mouseover",_);this._queueCallback((()=>{j.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!j.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove($i),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.off(t,"mouseover",_);this._activeTrigger[Ni]=!1,this._activeTrigger[Di]=!1,this._activeTrigger[Ii]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ki,$i),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ki),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ci({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Si]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ki)}_isShown(){return this.tip&&this.tip.classList.contains($i)}_createPopper(t){const e=v(this._config.placement,[this,t,this._element]),s=Pi[e.toUpperCase()];return i.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return v(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...v(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)j.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger[Ni]=!(e._isShown()&&e._activeTrigger[Ni]),e.toggle()}));else if("manual"!==e){const t=e===Ii?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===Ii?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");j.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?Di:Ii]=!0,e._enter()})),j.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?Di:Ii]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(Li),Oi,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ti.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=ji.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(ji);const Fi=".popover-header",zi=".popover-body",Hi={...ji.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Bi={...ji.DefaultType,content:"(null|string|element|function)"};class qi extends ji{static get Default(){return Hi}static get DefaultType(){return Bi}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Fi]:this._getTitle(),[zi]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=qi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(qi);const Wi=".bs.scrollspy",Ri=`activate${Wi}`,Ki=`click${Wi}`,Vi=`load${Wi}.data-api`,Qi="active",Xi="[href]",Yi=".nav-link",Ui=`${Yi}, .nav-item > ${Yi}, .list-group-item`,Gi={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ji={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Zi extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Gi}static get DefaultType(){return Ji}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(j.off(this._config.target,Ki),j.on(this._config.target,Ki,Xi,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:s,behavior:"smooth"});i.scrollTop=s}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&t){if(i(o),!s)return}else n||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=K.find(Xi,this._config.target);for(const e of t){if(!e.hash||d(e))continue;const t=K.findOne(decodeURI(e.hash),this._element);h(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Qi),this._activateParents(t),j.trigger(this._element,Ri,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))K.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Qi);else for(const e of K.parents(t,".nav, .list-group"))for(const t of K.prev(e,Ui))t.classList.add(Qi)}_clearActiveClass(t){t.classList.remove(Qi);const e=K.find(`${Xi}.${Qi}`,t);for(const t of e)t.classList.remove(Qi)}static jQueryInterface(t){return this.each((function(){const e=Zi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(window,Vi,(()=>{for(const t of K.find('[data-bs-spy="scroll"]'))Zi.getOrCreateInstance(t)})),b(Zi);const ts=".bs.tab",es=`hide${ts}`,is=`hidden${ts}`,ss=`show${ts}`,ns=`shown${ts}`,os=`click${ts}`,rs=`keydown${ts}`,as=`load${ts}`,ls="ArrowLeft",cs="ArrowRight",hs="ArrowUp",ds="ArrowDown",us="Home",_s="End",gs="active",fs="fade",ms="show",ps=".dropdown-toggle",bs=`:not(${ps})`,vs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ys=`.nav-link${bs}, .list-group-item${bs}, [role="tab"]${bs}, ${vs}`,ws=`.${gs}[data-bs-toggle="tab"], .${gs}[data-bs-toggle="pill"], .${gs}[data-bs-toggle="list"]`;class As extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),j.on(this._element,rs,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?j.trigger(e,es,{relatedTarget:t}):null;j.trigger(t,ss,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(gs),this._activate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),j.trigger(t,ns,{relatedTarget:e})):t.classList.add(ms)}),t,t.classList.contains(fs)))}_deactivate(t,e){t&&(t.classList.remove(gs),t.blur(),this._deactivate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),j.trigger(t,is,{relatedTarget:e})):t.classList.remove(ms)}),t,t.classList.contains(fs)))}_keydown(t){if(![ls,cs,hs,ds,us,_s].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!d(t)));let i;if([us,_s].includes(t.key))i=e[t.key===us?0:e.length-1];else{const s=[cs,ds].includes(t.key);i=w(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),As.getOrCreateInstance(i).show())}_getChildren(){return K.find(ys,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=K.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const s=(t,s)=>{const n=K.findOne(t,i);n&&n.classList.toggle(s,e)};s(ps,gs),s(".dropdown-menu",ms),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(gs)}_getInnerElement(t){return t.matches(ys)?t:K.findOne(ys,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=As.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(document,os,vs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this)||As.getOrCreateInstance(this).show()})),j.on(window,as,(()=>{for(const t of K.find(ws))As.getOrCreateInstance(t)})),b(As);const Es=".bs.toast",Cs=`mouseover${Es}`,Ts=`mouseout${Es}`,ks=`focusin${Es}`,$s=`focusout${Es}`,Ss=`hide${Es}`,Ls=`hidden${Es}`,Os=`show${Es}`,Is=`shown${Es}`,Ds="hide",Ns="show",Ps="showing",xs={animation:"boolean",autohide:"boolean",delay:"number"},Ms={animation:!0,autohide:!0,delay:5e3};class js extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ms}static get DefaultType(){return xs}static get NAME(){return"toast"}show(){j.trigger(this._element,Os).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ds),g(this._element),this._element.classList.add(Ns,Ps),this._queueCallback((()=>{this._element.classList.remove(Ps),j.trigger(this._element,Is),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(j.trigger(this._element,Ss).defaultPrevented||(this._element.classList.add(Ps),this._queueCallback((()=>{this._element.classList.add(Ds),this._element.classList.remove(Ps,Ns),j.trigger(this._element,Ls)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ns),super.dispose()}isShown(){return this._element.classList.contains(Ns)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,Cs,(t=>this._onInteraction(t,!0))),j.on(this._element,Ts,(t=>this._onInteraction(t,!1))),j.on(this._element,ks,(t=>this._onInteraction(t,!0))),j.on(this._element,$s,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=js.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return V(js),b(js),{Alert:U,Button:J,Carousel:Dt,Collapse:Vt,Dropdown:pe,Modal:Je,Offcanvas:mi,Popover:qi,ScrollSpy:Zi,Tab:As,Toast:js,Tooltip:ji}}));
//# sourceMappingURL=bootstrap.min.js.map

/* --- Source: ./new-landing-page/js/owl.carousel.min.js --- */
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/* --- Source: js/custom.js --- */
function isNumberKey(evt)
		  {
			var charCode = (evt.which) ? evt.which : event.keyCode			
			if (charCode > 31 && (charCode < 48 || charCode > 57))
				return false;
				return true;
		  }


function Get_OTP(){
	document.getElementsByName("type_of_action")[0].value = "otp";
}
function sendOTP(){
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');

	
	//var Batches = document.getElementById('Batches');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	}  
	   
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	}
	else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
}


function sendOTP1(){
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	
	
	//var workshop_date = document.getElementById('workshop_date');
	
	//var Batches = document.getElementById('Batches');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	/* var tflag=0;
	for(var i=1;i<=4;i++)
	{
		if(document.getElementById('topic'+i).checked==true)
		{
			tflag=1;
		}
	} */
	

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	} 
	/* else if (workshop_date.value == "")
	{
		alert('Please Select Workshop Date');
		workshop_date.focus();
		return false; 
	}  
	   
	else if(tflag==0)
	{
		alert('Please Select Workshop Category');
		return false;
	} */
	/* else if (workshop_time.value == "")
	{
		alert('Please Select Workshop Time');
		workshop_time.focus();
		return false;
	} */  
	
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	/* else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	} */
	else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
}








function sendOTP3(){
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	
	
	var workshop_time = document.getElementById('workshop_time');
	
	//var Batches = document.getElementById('Batches');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	var tflag=0;
	for(var i=1;i<=2;i++)
	{
		if(document.getElementById('topic'+i).checked==true)
		{
			tflag=1;
		}
	}
	

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	} 
	else if (workshop_time.value == "")
	{
		alert('Please Select Time Slot');
		workshop_time.focus();
		return false; 
	}  
	    
	   
	else if(tflag==0)
	{
		alert('Please Select Workshop Category');
		return false;
	}
	/* else if (workshop_time.value == "")
	{
		alert('Please Select Workshop Time');
		workshop_time.focus();
		return false;
	} */  
	
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	/* else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	} */
	else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
}






function sendOTP4(){
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	
	
	var workshop_time = document.getElementById('workshop_time');
	var workshop_date = document.getElementById('workshop_date');
	
	//var Batches = document.getElementById('Batches');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	var tflag=0;
	for(var i=1;i<=1;i++)
	{
		if(document.getElementById('topic'+i).checked==true)
		{
			tflag=1;
		}
	}
	

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	} 
	    
	 else if (workshop_date.value == "")
	{
		alert('Please Select Topic Date');
		workshop_date.focus();
		return false; 
	}
    else if (workshop_time.value == "")
	{
		alert('Please Select Time Slot');
		workshop_time.focus();
		return false; 
	}  	
	   
	else if(tflag==0)
	{
		alert('Please Select Workshop Category');
		return false;
	}
	/* else if (workshop_time.value == "")
	{
		alert('Please Select Workshop Time');
		workshop_time.focus();
		return false;
	} */  
	
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	/* else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	} */
	else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
}





//new form check with captch and payment gateway
function formCheck2() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var txtamount = document.getElementById('amount').value;
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
	var referby='';
	var total=parseInt($('.rand1').html())+parseInt($('.rand2').html());
	var total1=$('#total_rand1').val();	
		if(document.getElementById('referby').value!=''){
			referby=document.getElementById('referby').value;
		}
	
	//var batches = document.getElementsByName("Batches")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}
		else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		
		else if(total1== '') {alert("Please Fill Captcha");return false; } 
		else if(total!=total1 && total1!= '') {alert("Wrong sum Entered");return false; } 
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#opt").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			else{
						var val =  $("#formPromotion").serializeArray() 
				//alert(val);
				$.ajax({
					type: "POST",
					url: "api/save_all_data1.php",
					data: val,
					success: function(msg){ 
						var msg = $.parseJSON(msg);
								 $("#loader-btn").css("display", "none");
							if(msg.error == '0'){
								//alert('OTP has sent to your Entered Mobile No.');
								$('input[name="local_lead_id"]').val(msg.local_id);
								$('input[name="lms_lead_id"]').val(msg.lms_id);
							}else if(msg.error == '1'){
								//alert('OTP has sent to your Entered Mobile No.');
							}else if(msg.error == '2'){
								alert('There is some error. Please retry later');
							}else if(msg.error == '3'){
								$('input[name="local_lead_id"]').val(msg.local_id);
								$('input[name="lms_lead_id"]').val(msg.lms_id);
							}
							$.ajax({
										url: "api/pay_with_ccavanue.php",
										type: "post",
										data:{
											local_lead_id : $('input[name="local_lead_id"]').val(),
											lms_lead_id: $('input[name="lms_lead_id"]').val(),
											txtamount: txtamount,
											txtlocation: location.value,
											txtemail: email.value,
											txtname: fname.value,
											txtcourse: course.value,
											txtphone : mobile.value,
											referby:referby,
											
											},	
										success: function(result){
											//alert(result);
												$(".result").append(result);
											},										
										});							
					}
				});
			}
			
				
		}
}
/* //new send otp for webminar pages
function sendOTP1(){
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var Batches = document.getElementById('Batches');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	}  
	   
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	}
	else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else if (Batches.value.trim() == '' || Batches.value.trim() == null) {
		alert("Please Select Preferred Time"); 
		Batches.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
} */
//form check affailates
function formCheck_new() { 
	
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	//var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
	var total=parseInt($('.rand1').html())+parseInt($('.rand2').html());
	var total1=$('#total_rand1').val();	
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		 else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		} 
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		 else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}   
		   
		 else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		} 
		else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}
		 else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false; 
		} 
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else if(total1== '') {alert("Please Fill Captcha");return false; } 
		else if(total!=total1 && total1!= '') {alert("Wrong sum Entered");return false; }
		else
		{
			
			document.myform.submit();
				
		}
}
		
function formCheck() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}
		else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				});
				
		}
}

//new form checked
function formCheck1() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = 5;
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var txtamount = document.getElementById('amount').value;
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
	var referby='';
	//var tflag=0;
	/* for(var i=1;i<=4;i++)
	{
		if(document.getElementById('topic'+i).checked==true)
		{
			course=document.getElementById('topic'+i).value;
		}
	} */
		if(document.getElementById('referby').value!=''){
			referby=document.getElementById('referby').value;
		}
	
	//var batches = document.getElementsByName("Batches")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			//course.focus();
			return false;
		}
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			var otp = $("#opt").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP1();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
								$.ajax({
										url: "api/pay_with_ccavanue.php",
										type: "post",
										data:{
											local_lead_id : $('input[name="local_lead_id"]').val(),
											lms_lead_id: $('input[name="lms_lead_id"]').val(),
											txtamount: txtamount,
											txtlocation: location.value,
											txtemail: email.value,
											txtname: fname.value,
											txtcourse: course,
											txtphone : mobile.value,
											referby:referby,
											
											},	
										success: function(result){
											//alert(result);
												$(".result").append(result);
											},										
										});
							/* document.myform.submit(); */
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				});
				
		}
}




function formCheck3() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = 5;
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var txtamount = document.getElementById('amount').value;
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
	var referby='';
	//var tflag=0;
	for(var i=1;i<=2;i++)
	{
		if(document.getElementById('topic'+i).checked==true)
		{
			course=document.getElementById('topic'+i).value;
		}
	}
		if(document.getElementById('referby').value!=''){
			referby=document.getElementById('referby').value;
		}
	
	//var batches = document.getElementsByName("Batches")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			//course.focus();
			return false;
		}
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			var otp = $("#opt").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP3();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
								$.ajax({
										url: "api/pay_with_ccavanue.php",
										type: "post",
										data:{
											local_lead_id : $('input[name="local_lead_id"]').val(),
											lms_lead_id: $('input[name="lms_lead_id"]').val(),
											txtamount: txtamount,
											txtlocation: location.value,
											txtemail: email.value,
											txtname: fname.value,
											txtcourse: course,
											txtphone : mobile.value,
											referby:referby,
											
											},	
										success: function(result){
											//alert(result);
												$(".result").append(result);
											},										
										});
							/* document.myform.submit(); */
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				});
				
		}
}


function formCheck4() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
	var workshop_time = document.getElementById('workshop_time');
	var workshop_date = document.getElementById('workshop_date');
	for(var i=1;i<=1;i++)
	{
		if(document.getElementById('topic'+i).checked==true)
		{
			course=document.getElementById('topic'+i).value;
		}
	}
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		     
		 else if (workshop_date.value == "")
		{
			alert('Please Select Topic Date');
			workshop_date.focus();
			return false; 
		}   
		  
		  else if (workshop_time.value == "")
		{
			alert('Please Select Time Slot');
			workshop_time.focus();
			return false; 
		}  
		
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		else if (course.trim() == "" || course.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		}
		else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP4();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				});
				
		}
}




function formCheck6() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP6();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}



function formCheck7() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	var gender = document.getElementById('gender');
	var course = 5;
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var txtamount = document.getElementById('amount').value;
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
	var referby='';
	//var tflag=0;
	/* for(var i=1;i<=4;i++)
	{
		if(document.getElementById('topic'+i).checked==true)
		{
			course=document.getElementById('topic'+i).value;
		}
	} */
		if(document.getElementById('referby').value!=''){
			referby=document.getElementById('referby').value;
		}
	
	//var batches = document.getElementsByName("Batches")[0].value;
		
		
	
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		}  
		   
		else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/* else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			//course.focus();
			return false;
		} */
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			var otp = $("#opt").val();
			var page_name = $("input[name=page_name]").val();
			if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}
			if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP1();
			}
								
			if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			}
			$("#loader-btn").css("display", "");
				$.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
								$.ajax({
										url: "api/pay_with_ccavanue.php",
										type: "post",
										data:{
											local_lead_id : $('input[name="local_lead_id"]').val(),
											lms_lead_id: $('input[name="lms_lead_id"]').val(),
											txtamount: txtamount,
											txtlocation: location.value,
											txtemail: email.value,
											txtname: fname.value,
											txtcourse: course,
											txtphone : mobile.value,
											referby:referby,
											
											},	
										success: function(result){
											//alert(result);
												$(".result").append(result);
											},										
										});
							/* document.myform.submit(); */
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				});
				
		}
}




function sendOTP6(){
	var fname = document.getElementById('name');
	var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	var motto = document.getElementById('motto');
	var location = document.getElementById('location');

	
	//var Batches = document.getElementById('Batches');

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = email.value.trim();
	var charreg = /^[a-zA-Z\_ ]+$/g;
	var charregl = /^[a-zA-Z\_]+$/g;

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	}  
	   
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	/* else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	} */
	else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}
	else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
}


function formCheck33() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	//var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		/*else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}*/
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform1.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}





function sendOTP33(){
	var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	//var location = document.getElementById('location');

	
	//var Batches = document.getElementById('Batches');

	//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	//var address = email.value.trim();
	//var charreg = /^[a-zA-Z\_ ]+$/g;
	//var charregl = /^[a-zA-Z\_]+$/g;

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	/*else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}*/
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	}  
	   
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	/* else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	} */
	/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}*/
	/*else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}*/
	else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
}




function formCheck34() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	//var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		/*else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}*/
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}




function formCheck35() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email1');
	//var gender = document.getElementById('gender1');
	//var course = document.getElementById('course1');
	//var motto = document.getElementById('motto1');
	var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform1.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}




function formCheck36() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}




function sendOTP35(){
	var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');

	
	//var Batches = document.getElementById('Batches');

	//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	//var address = email.value.trim();
	//var charreg = /^[a-zA-Z\_ ]+$/g;
	//var charregl = /^[a-zA-Z\_]+$/g;

	if (fname.value.trim() == '' || fname.value.trim() == "Name")
	{
		alert('Please Enter Full Name');
		fname.focus();
		return false;
	}
	else if (charreg.test(fname.value.trim())== false ) 
	{
		alert('Please Enter Valid Full Name');
		fname.focus();
		return false;
	}
	/*else if (qualification.value.trim() == '')
	{
		alert('Please Select Qualification');
		qualification.focus();
		return false;
	}*/
	else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
	{
		alert('Please Enter Mobile');
		mobile.focus();
		return false;
	}       
	else if (mobile.value.length != 10) {
		alert('Please Enter Valid Mobile Number');
		mobile.focus();
		return false;
	}
	else if (isNaN(mobile.value.trim())) {
		alert("Please Enter Numbers Only");
		mobile.focus();
		return false;
	}
	else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (mobile.value.trim().charAt(0) == '0') {
		alert("Please Enter Valid Mobile Number");
		mobile.focus();
		return false;
	}
	else if (email.value.trim() == "")
	{
		alert('Please Enter Email');
		email.focus();
		return false;
	}  
	   
	else if (reg.test(address) == false) {

		alert('Please Enter Valid Email Address');
		email.focus();
		return false;
	}
	/* else if (course.value.trim() == "" || course.value.trim() == null) {
		alert("Please Enter Course");
		course.focus();
		return false;
	} */
	/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
		alert("Please Select Motto");
		course.focus();
		return false;
	}*/
	/*else if (location.value.trim() == '' || location.value.trim() == null) {
		alert("Please Select Institute Location");
		location.focus();
		return false;
	}*/
	else{
		$("#loader-btn").css("display", "");
		var val =  $("#formPromotion").serializeArray() 
		//alert(val);
		$.ajax({
			type: "POST",
			url: "api/save_all_data.php",
			data: val,
			success: function(msg){
				var msg = $.parseJSON(msg);
						 $("#loader-btn").css("display", "none");
					if(msg.error == '0'){
						alert('OTP has sent to your Entered Mobile No.');
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}else if(msg.error == '1'){
						alert('OTP has sent to your Entered Mobile No.');
					}else if(msg.error == '2'){
						alert('There is some error. Please retry later');
					}else if(msg.error == '3'){
						$('input[name="local_lead_id"]').val(msg.local_id);
						$('input[name="lms_lead_id"]').val(msg.lms_id);
					}  
			}
		});
			
	}
}



function formCheck37() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	//var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email1');
	//var gender = document.getElementById('gender1');
	//var course = document.getElementById('course1');
	//var motto = document.getElementById('motto1');
	//var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		/*else if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		 if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		/*else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}*/
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			//var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform1.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}



function formCheck38() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	//var fname = document.getElementById('name');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	//var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		/*else if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		 if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		/*else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}*/
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			//var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}





function formCheck39() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	//var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email1');
	//var gender = document.getElementById('gender1');
	//var course = document.getElementById('course1');
	//var motto = document.getElementById('motto1');
	var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		/*if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		 if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform1.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}




function formCheck40() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	//var fname = document.getElementById('name');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		/*if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		 if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/* else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}


function formCheck41() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email1');
	//var gender = document.getElementById('gender1');
	var course = document.getElementById('course1');
	//var motto = document.getElementById('motto1');
	var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		 else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} 
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform1.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}



function formCheck42() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		//var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		/*else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}*/
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		 else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false) {

			alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		 else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} 
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}



function formCheck43() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name1');
	//var qualification = document.getElementById('qualification1');
	var mobile = document.getElementById('phone1');
	//var email = document.getElementById('email1');
	//var gender = document.getElementById('gender1');
	//var course = document.getElementById('course1');
	//var motto = document.getElementById('motto1');
	//var location = document.getElementById('location1');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false)
			{
            alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/*else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		/*else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}*/
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			//var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform1.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}




function formCheck44() {
	document.getElementsByName("type_of_action")[0].value = "submit";
	var fname = document.getElementById('name');
	//var qualification = document.getElementById('qualification');
	var mobile = document.getElementById('phone');
	//var email = document.getElementById('email');
	//var gender = document.getElementById('gender');
	//var course = document.getElementById('course');
	//var motto = document.getElementById('motto');
	//var location = document.getElementById('location');
	var type_of_action = document.getElementsByName("type_of_action")[0].value;
	var lms_lead_id = document.getElementsByName("lms_lead_id")[0].value;
		
		
	
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//var address = email.value.trim();
		var charreg = /^[a-zA-Z\_ ]+$/g;
		//var charregl = /^[a-zA-Z\_]+$/g;
		

		if (fname.value.trim() == '' || fname.value.trim() == "Name")
		{
			alert('Please Enter Full Name');
			fname.focus();
			return false;
		}
		else if (charreg.test(fname.value.trim())== false ) 
		{
			alert('Please Enter Valid Full Name');
			fname.focus();
			return false;
		}
		/*else if (qualification.value.trim() == '')
		{
			alert('Please Select Qualification');
			qualification.focus();
			return false;
		}*/
		else if (mobile.value.trim() == "" || mobile.value.trim() == "Mobile")
		{
			alert('Please Enter Mobile');
			mobile.focus();
			return false;
		}       
		else if (mobile.value.length != 10) {
			alert('Please Enter Valid Mobile Number');
			mobile.focus();
			return false;
		}
		else if (isNaN(mobile.value.trim())) {
			alert("Please Enter Numbers Only");
			mobile.focus();
			return false;
		}
		else if ((mobile.value.trim() == 1234567890) || (mobile.value.trim() == 1234512345)) {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		else if (mobile.value.trim().charAt(0) == '0') {
			alert("Please Enter Valid Mobile Number");
			mobile.focus();
			return false;
		}
		/*else if (email.value.trim() == "")
		{
			alert('Please Enter Email');
			email.focus();
			return false;
		} */ 
		   
		/*else if (reg.test(address) == false)
			{
            alert('Please Enter Valid Email Address');
			email.focus();
			return false;
		}*/
		/*else if (course.value.trim() == "" || course.value.trim() == null) {
			alert("Please Enter Course");
			course.focus();
			return false;
		} */
		/*else if (motto.value.trim() == "" || motto.value.trim() == null) {
			alert("Please Select Motto");
			course.focus();
			return false;
		}*/
		/*else if (location.value.trim() == '' || location.value.trim() == null) {
			alert("Please Select Institute Location");
			location.focus();
			return false;
		}*/
		else
		{
			
			var mobile1 = $("#phone").val();
			//var otp = $("#otp").val();
			//var page_name = $("input[name=page_name]").val();
			/*if(mobile1 ==""){
				alert("Please insert Mobile no.");
				return false;	
			}*/
			/* if(type_of_action == "submit" && lms_lead_id == "0"){
				sendOTP33();
			} */
								
			/* if(otp =="" ){
				alert("Please insert OTP");
				return false;	
			} */
			
			$("#loader-btn").css("display", "");
			document.myform.submit();
				/* $.ajax({
					type: "POST",
					url: "api/otp_all_pages.php",
					data: "sms_type=ckeck_OTP&otp=" + otp + "&mobile1=" + mobile1 +"&session_type=" + page_name + "&massage_type=student",
					success: function(msg){
					$("#loader-btn").css("display", "none");
				
						if(msg=='match')
						{
							document.myform.submit();
						}else{
							alert('Your OTP did not match. please retry again.');
						}
					}
				}); */
				
		}
}




function count_wpclick(val,val1){
			$("#loader-btn").css("display", "");
			$.ajax({
					type: "POST",
					url: "./api/save_ajax.php",
					data: {page_name:val,name:val1},
					success: function(msg){
						var msg = $.parseJSON(msg);
								 $("#loader-btn").css("display", "none");
							
					}
				});
		}





function number_validation(txtbox1)
		{     
			var str=txtbox1.value;
			var str1="0123456789.";
			var i=0;
			for(i=0;i<str.length;i++)
			{          
			  if(str1.indexOf(str.substring(i,i+1))<0 || str1.indexOf(str.substring(i,i+1))>str1.length || str.indexOf(".")!=str.lastIndexOf("."))
			  {              
				 txtbox1.value=str.substring(0,str.length-1);
				 alert("Invalid Number...");
				 txtbox1.value="";
				 txtbox1.focus();
				 break; 
			  } 
			}
			
			
			//txtbox1.value=(Math.round((txtbox1)*100)/100).toFixed(2);
		}
		

/* --- Inline JS --- */

	function isNumberKey(evt)
	{
	var charCode = (evt.which) ? evt.which : event.keyCode			
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
		return true;
	}
		(function() {
		var f = function() {
		EF.init({ eventType: "transaction",
			transactionProperties : "ev_Ins_PV=1&ev_transid=",
			segment : "", 
			searchSegment : "",
			sku : "",
			userid : "7801",
			pixelHost : "pixel.everesttech.net"
			
			, allow3rdPartyPixels: 1});
			EF.main();
		};
		window.EF = window.EF || {}; 
		if (window.EF.main) {
			f();
			return;
		}
		window.EF.onloadCallbacks = window.EF.onloadCallbacks || [];
		window.EF.onloadCallbacks[window.EF.onloadCallbacks.length] = f;
		if (!window.EF.jsTagAdded) {
			var efjs = document.createElement('script'); efjs.type = 'text/javascript'; efjs.async = true;
			efjs.src = 'https://www.everestjs.net/static/st.v3.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(efjs, s);
			window.EF.jsTagAdded=1;
		}
	})();
	

/* --- Inline JS --- */
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TCQ6MCM');

/* --- Inline JS --- */

	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	 
	  gtag('config', 'AW-843512713');
	

/* --- Inline JS --- */

	 $(document).ready(function() {
        $('.testimon').owlCarousel({
			loop:true,
			margin: 20,
			autoplay:true,
			autoplayTimeout:2000,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        })
    });


/* --- Inline JS --- */

/* <![CDATA[ */
var google_conversion_id = 843512713;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */


/* --- Source: ./makeupcourses/js/script.js --- */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
$(document).ready(function(){
  // $(document).on("scroll", onScroll);
  //smoothscroll
  $('.navigation a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $(this).parents('.navigation').removeClass('show');
      $('.navigation a').each(function () {
          $(this).removeClass('current');
      })
      $(this).addClass('current');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-50
      }, 500);
  });
  $('.mobile-icon').click(function(){
    $(this).prev().addClass('show');
  });
  $('.navigation .close').click(function(){
    $(this).parent().removeClass('show');
  });
  $('.enquire-now-btn, .form-btn-cross').click(function(){
    $('.enquire-form').toggleClass('show');
    $('.layer-mask').toggleClass('hide');
  });
  $('.banner-slider').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true
  });
  $('.level-courses-slider ul').owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      
      479: {
        items: 2
      },
  
      1024: {
        items: 3
      }
    }
  });
  $('.faq-list .ques').click(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    }
    else {
      $('.faq-list .answ').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }
  });
  $('.testi ul').owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
  
      767: {
        items: 2
      },
  
      1024: {
        items: 3
      }
    }
  });
  
});
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".vlc-counting")) && !viewed) {
      viewed = true;
      $('.count-number span').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}


/* --- Source: //www.googleadservices.com/pagead/conversion.js --- */
(function(){var n,aa,ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");} 
var ea=da(this),fa=typeof Symbol==="function"&&typeof Symbol("x")==="symbol",q={},ha={};function r(a,b,c){if(!c||a!=null){c=ha[b];if(c==null)return a[b];c=a[c];return c!==void 0?c:a[b]}} 
function t(a,b,c){if(b)a:{var d=a.split(".");a=d.length===1;var e=d[0],f;!a&&e in q?f=q:f=ea;for(e=0;e<d.length-1;e++){var g=d[e];if(!(g in f))break a;f=f[g]}d=d[d.length-1];c=fa&&c==="es6"?f[d]:null;b=b(c);b!=null&&(a?ba(q,d,{configurable:!0,writable:!0,value:b}):b!==c&&(ha[d]===void 0&&(a=Math.random()*1E9>>>0,ha[d]=fa?ea.Symbol(d):"$jscp$"+a+"$"+d),ba(f,ha[d],{configurable:!0,writable:!0,value:b})))}}function ia(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}} 
function v(a){var b=typeof q.Symbol!="undefined"&&r(q.Symbol,"iterator")&&a[r(q.Symbol,"iterator")];if(b)return b.call(a);if(typeof a.length=="number")return{next:ia(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function ka(a){return la(a,a)}function la(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)} 
var ma=fa&&typeof r(Object,"assign")=="function"?r(Object,"assign"):function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};t("Object.assign",function(a){return a||ma},"es6");function oa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}t("globalThis",function(a){return a||ea},"es_2020"); 
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.v=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.v};var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b},"es6"); 
t("Symbol.iterator",function(a){if(a)return a;a=(0,q.Symbol)("Symbol.iterator");ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(ia(this))}});return a},"es6");function pa(a){a={next:a};a[r(q.Symbol,"iterator")]=function(){return this};return a} 
t("WeakMap",function(a){function b(g){this.v=(f+=Math.random()+1).toString();if(g){g=v(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(g){var h=typeof g;return h==="object"&&g!==null||h==="function"}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),h=Object.seal({}),k=new a([[g,2],[h,3]]);if(k.get(g)!=2||k.get(h)!=3)return!1;k.delete(g);k.set(h,4);return!k.has(g)&&k.get(h)==4}catch(l){return!1}}())return a;var e="$jscomp_hidden_"+Math.random(), 
f=0;b.prototype.set=function(g,h){if(!d(g))throw Error("Invalid WeakMap key");if(!A(g,e)){var k=new c;ba(g,e,{value:k})}if(!A(g,e))throw Error("WeakMap key fail: "+g);g[e][this.v]=h;return this};b.prototype.get=function(g){return d(g)&&A(g,e)?g[e][this.v]:void 0};b.prototype.has=function(g){return d(g)&&A(g,e)&&A(g[e],this.v)};b.prototype.delete=function(g){return d(g)&&A(g,e)&&A(g[e],this.v)?delete g[e][this.v]:!1};return b},"es6"); 
t("Map",function(a){function b(){var h={};return h.G=h.next=h.head=h}function c(h,k){var l=h[1];return pa(function(){if(l){for(;l.head!=h[1];)l=l.G;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&A(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l, 
list:m,index:-1,entry:void 0}}function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||typeof a!="function"||!r(a.prototype,"entries")||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=r(k,"entries").call(k),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done|| 
m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;var f=new q.WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],G:this[1].G,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].G.next=l.entry,this[1].G=l.entry,this.size++);return this};e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id], 
h.entry.G.next=h.entry.next,h.entry.next.G=h.entry.G,h.entry.head=null,this.size--,!0):!1};e.prototype.clear=function(){this[0]={};this[1]=this[1].G=b();this.size=0};e.prototype.has=function(h){return!!d(this,h).entry};e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};e.prototype.keys=function(){return c(this,function(h){return h.key})};e.prototype.values=function(){return c(this,function(h){return h.value})}; 
e.prototype.forEach=function(h,k){for(var l=r(this,"entries").call(this),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};e.prototype[r(q.Symbol,"iterator")]=r(e.prototype,"entries");var g=0;return e},"es6");function qa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[r(q.Symbol,"iterator")]=function(){return e};return e} 
t("Array.prototype.entries",function(a){return a?a:function(){return qa(this,function(b,c){return[b,c]})}},"es6");t("Array.prototype.keys",function(a){return a?a:function(){return qa(this,function(b){return b})}},"es6");function ta(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""} 
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ta(this,b,"endsWith");c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}},"es6");t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}},"es8");t("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}},"es6"); 
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||r(Object,"is").call(Object,f,b))return!0}return!1}},"es7");t("String.prototype.includes",function(a){return a?a:function(b,c){return ta(this,b,"includes").indexOf(b,c||0)!==-1}},"es6");t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push(b[d]);return c}},"es8"); 
t("Array.prototype.values",function(a){return a?a:function(){return qa(this,function(b,c){return c})}},"es8");t("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}},"es6");/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var ua=this||self;function va(a){a=parseFloat(a);return isNaN(a)||a>1||a<0?0:a};function wa(a){wa[" "](a);return a}wa[" "]=function(){};function xa(a){try{var b;if(b=!!a&&a.location.href!=null)a:{try{wa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};function ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function za(){var a=ua.navigator;return a&&(a=a.userAgent)?a:""};/* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var Aa=q.globalThis.trustedTypes,Ba;function Ca(){var a=null;if(!Aa)return a;try{var b=function(c){return c};a=Aa.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}function Da(){Ba===void 0&&(Ba=Ca());return Ba};function Ea(a){this.v=a}Ea.prototype.toString=function(){return this.v+""};function Ha(a){var b=Da();a=b?b.createScriptURL(a):a;return new Ea(a)}function Ia(a){if(a instanceof Ea)return a.v;throw Error("");};var Ja=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Ka(a){this.v=a}Ka.prototype.toString=function(){return this.v+""};function La(a){var b=Da();a=b?b.createHTML(a):a;return new Ka(a)}function Ma(a){if(a instanceof Ka)return a.v;throw Error("");};function Na(a,b){a.src=Ia(b);var c;b=a.ownerDocument;b=b===void 0?document:b;var d;b=(d=(c=b).querySelector)==null?void 0:d.call(c,"script[nonce]");(c=b==null?"":b.nonce||b.getAttribute("nonce")||"")&&a.setAttribute("nonce",c)};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function Pa(a,b){a.write(Ma(b))};var Qa=ya(function(){return za().indexOf("MSIE")!=-1});function Ra(a){return za().indexOf(a)!=-1}var Sa=ya(function(){var a=Math.random;return["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"].some(Ra)||a()<1E-4});function Ta(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function Ua(){if(!q.globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);q.globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}};function Va(a){return a instanceof Ka?a:La(String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"))}function Wa(a){return Xa(a)}function Xa(a){var b=Va("");return La(a.map(function(c){return Ma(Va(c))}).join(Ma(b).toString()))} 
var Ya=/^[a-z][a-z\d-]*$/i,ab="APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),cb="AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),db=["action","formaction","href"]; 
function eb(a){var b;if(!Ya.test("span"))throw Error("");if(ab.indexOf("SPAN")!==-1)throw Error("");var c="<span";a&&(c+=fb(a));Array.isArray(b)||(b=b===void 0?[]:[b]);cb.indexOf("SPAN")!==-1?c+=">":(a=Wa(b.map(function(d){return d instanceof Ka?d:Va(String(d))})),c+=">"+a.toString()+"</span>");return La(c)} 
function fb(a){for(var b="",c=r(Object,"keys").call(Object,a),d=0;d<c.length;d++){var e=c[d],f=a[e];if(!Ya.test(e))throw Error("");if(f!==void 0&&f!==null){if(/^on./i.test(e))throw Error("");db.indexOf(e.toLowerCase())!==-1&&(f=String(f),f=Ja.test(f)?f:void 0,f=f||"about:invalid#zClosurez");e=e+'="'+Va(String(f))+'"';b+=" "+e}}return b};function gb(a){var b=oa.apply(1,arguments);if(b.length===0)return Ha(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Ha(c)}function hb(a,b,c,d){function e(g,h){g!=null&&(Array.isArray(g)?g.forEach(function(k){return e(k,h)}):(b+=f+encodeURIComponent(h)+"="+encodeURIComponent(g),f="&"))}var f=b.length?"&":"?";d.constructor===Object&&(d=r(Object,"entries").call(Object,d));Array.isArray(d)?d.forEach(function(g){return e(g[1],g[0])}):d.forEach(e);return Ha(a+b+c)};function ib(a){return/^true$/.test(a)}function jb(a,b){if(!a||!b.head)return null;var c=kb("META");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c}function kb(a,b){b=b===void 0?document:b;return b.createElement(String(a).toLowerCase())};var lb=va("0.20"),mb=va("0.002"),nb=va("1.0"),ob=va("1.0"),pb=va("1.0"),qb=va("0.00"),rb=va("0.00"),sb=ib("false"),tb=ib("true"),ub=ib("true"),vb=ib("true"),wb=ib("true"),xb=ib("true");var yb=null;function zb(a){a=a===void 0?window:a;if(yb===null){yb="";try{var b="";try{b=a.top.location.hash}catch(d){b=a.location.hash}if(b){var c=b.match(/\bdeid=([\d,]+)/);yb=c?c[1]:""}}catch(d){}}return yb} 
function D(a,b,c){var d=E;if(c?d.v.hasOwnProperty(c)&&d.v[c]==="":1){var e=e===void 0?ua:e;e=(e=zb(e))?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!Qa()&&!Sa()&&(e=Math.random(),e<b)){e=Ua();a=a[Math.floor(e*a.length)];break a}a=null}a&&a!==""&&(c?d.v.hasOwnProperty(c)&&(d.v[c]=a):d.Z[a]=!0)}}function H(a){var b=E;return b.v.hasOwnProperty(a)?b.v[a]:""} 
function Ab(){var a=E,b=[];Ta(a.Z,function(c,d){b.push(d)});Ta(a.v,function(c){c!==""&&b.push(c)});return b};var Bb={ya:2,Fa:13,Ea:14,Ba:16,Aa:17,za:18,xa:19,Ha:20,Ga:21,wa:22,sa:23},E=null;function Cb(){return!!E&&(H(20)=="466465926"||H(20)=="466465925")}function Db(){return!!E&&H(16)=="592230571"}function Eb(){return!!E&&(H(22)=="512247839"||H(22)=="512247838")};function Fb(a){var b=b===void 0?ua:b;var c,d;return((c=b.performance)==null?void 0:(d=c.timing)==null?void 0:d[a])||0};function Gb(){var a=Ib,b="S";if(a.S&&a.hasOwnProperty(b))return a.S;b=new a;return a.S=b};var Jb={Ca:0,ta:1,Da:2,va:3,ua:4};function Ib(){this.v={}}function Kb(a,b,c){typeof c==="number"&&c>0&&(a.v[b]=Math.round(c))}function Lb(a){var b=Gb();var c=c===void 0?ua:c;c=c.performance;Kb(b,a,c&&c.now?c.now():null)}function Mb(){function a(){return Kb(b,0,Fb("loadEventStart")-Fb("navigationStart"))}var b=Gb();Fb("loadEventStart")!=0?a():window.addEventListener("load",a)}function Ob(){var a=Gb();return r(Object,"values").call(Object,Jb).map(function(b){return[b,a.v[b]||0]})};var Pb=ib("false");function Qb(a){return typeof a==="function"}function Rb(a){return typeof a==="string"}function Sb(a,b){if(a&&Array.isArray(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]}function Tb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function I(){return(new Date(Date.now())).getTime()}function Ub(a,b){return a.length>=b.length&&a.substring(a.length-b.length,a.length)===b} 
function Vb(a){for(var b=0;b<3;++b)try{var c=decodeURIComponent(a).replace(/\+/g," ");if(c===a)break;a=c}catch(d){return""}return a};var Wb={};function L(a){var b=Wb.TAGGING;b||(b=Wb.TAGGING=[]);b[a]=!0};function Xb(a){a=Yb(a);return La(a)}function Yb(a){return a===null?"null":a===void 0?"undefined":a};var M=window,O=document,Zb=navigator,$b={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},ac={height:1,onload:1,src:1,style:1,width:1};function bc(a,b,c){b&&Tb(b,function(d,e){d=d.toLowerCase();c.hasOwnProperty(d)||a.setAttribute(d,e)})}function cc(a,b,c,d,e){var f=O.createElement("script");bc(f,d,$b);f.type="text/javascript";f.async=d&&d.async===!1?!1:!0;a=Ha(Yb(a));Na(f,a);b&&(f.onload=b);c&&(f.onerror=c);e?e.appendChild(f):dc.na(f)} 
function ec(a,b,c){var d=!1;d=d===void 0?!0:d;var e=!1;c||(c=O.createElement("iframe"),e=!0);bc(c,void 0,ac);d&&(c.height="0",c.width="0",c.style.display="none",c.style.visibility="hidden");a!==void 0&&(c.src=a);e&&(a=O.body&&O.body.lastChild||O.body||O.head,a.parentNode.insertBefore(c,a));b&&(c.onload=b)}function fc(){var a=dc.fa,b=a.apply;var c=oa.apply(0,arguments);c=c instanceof Array?c:ja(v(c));b.call(a,dc,c)} 
var hc={cache:"no-store",credentials:"include",keepalive:!0,method:"POST",mode:"no-cors",redirect:"follow"};function ic(a){if(Qb(M.fetch)){var b=r(Object,"assign").call(Object,{},hc);try{var c=M.fetch(a,b);if(c)return c.then(function(){}).catch(function(){}),!0}catch(d){}}dc.ra(a,void 0,void 0);return!0} 
function jc(){var a=M.performance;if(a&&a.getEntriesByType)try{var b=a.getEntriesByType("navigation");if(b&&b.length>0)var c=b[0].type}catch(d){return"e"}if(!c)return"u";switch(c){case "navigate":return"n";case "back_forward":return"h";case "reload":return"r";case "prerender":return"p";default:return"x"}} 
var dc={fa:function(a,b,c,d){var e=new Image(1,1);bc(e,d,{});e.onload=function(){e.onload=null;b&&b()};e.onerror=function(){e.onerror=null;c&&c()};e.src=a;return e},na:function(a){var b=O.getElementsByTagName("script")[0]||O.body||O.head;b.parentNode.insertBefore(a,b)},ra:function(a,b,c){try{var d=Zb.sendBeacon&&Zb.sendBeacon(a)}catch(e){L(15)}d?b==null||b():fc(a,b,c)}};function kc(){var a={};var b=M.google_tag_data;M.google_tag_data=b===void 0?a:b;a=M.google_tag_data;return a.ics=a.ics||new lc}function lc(){this.entries={};this.waitPeriodTimedOut=this.wasSetLate=this.accessedAny=this.accessedDefault=this.usedImplicit=this.usedUpdate=this.usedDefault=this.usedDeclare=this.active=!1;this.v=[]}n=lc.prototype; 
n.default=function(a,b,c,d,e,f,g){this.usedDefault||this.usedDeclare||!this.accessedDefault&&!this.accessedAny||(this.wasSetLate=!0);this.usedDefault=this.active=!0;L(19);b==null?L(18):mc(this,a,b==="granted",c,d,e,f,g)};n.waitForUpdate=function(a,b,c){for(var d=0;d<a.length;d++)mc(this,a[d],void 0,void 0,"","",b,c)}; 
function mc(a,b,c,d,e,f,g,h){var k=r(a,"entries"),l=k[b]||{},m=l.region;d=d&&Rb(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(e===""||d===f||(d===e?m!==f:!d&&!m)){f=!!(g&&g>0&&l.update===void 0);var p={region:d,declare_region:l.declare_region,implicit:l.implicit,default:c!==void 0?c:l.default,declare:l.declare,update:l.update,quiet:f};if(e!==""||l.default!==!1)k[b]=p;f&&M.setTimeout(function(){k[b]===p&&p.quiet&&(L(2),a.waitPeriodTimedOut=!0,a.clearTimeout(b,void 0,h),a.notifyListeners())}, 
g)}}n.clearTimeout=function(a,b,c){var d=[a],e=c.delegatedConsentTypes,f;for(f in e)e.hasOwnProperty(f)&&e[f]===a&&d.push(f);e=r(this,"entries")[a]||{};a=this.getConsentState(a,c);if(e.quiet)for(e.quiet=!1,b=v(d),d=b.next();!d.done;d=b.next())nc(this,d.value);else if(b!==void 0&&a!==b)for(b=v(d),d=b.next();!d.done;d=b.next())nc(this,d.value)}; 
n.update=function(a,b,c){this.usedDefault||this.usedDeclare||this.usedUpdate||!this.accessedAny||(this.wasSetLate=!0);this.usedUpdate=this.active=!0;if(b!=null){var d=this.getConsentState(a,c),e=r(this,"entries");(e[a]=e[a]||{}).update=b==="granted";this.clearTimeout(a,d,c)}}; 
n.declare=function(a,b,c,d,e){this.usedDeclare=this.active=!0;var f=r(this,"entries"),g=f[a]||{},h=g.declare_region;c=c&&Rb(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(d===""||c===e||(c===d?h!==e:!c&&!h))if(b={region:g.region,declare_region:c,declare:b==="granted",implicit:g.implicit,default:g.default,update:g.update,quiet:g.quiet},d!==""||g.declare!==!1)f[a]=b}; 
n.implicit=function(a,b){this.usedImplicit=!0;var c=r(this,"entries");a=c[a]=c[a]||{};a.implicit!==!1&&(a.implicit=b==="granted")}; 
n.getConsentState=function(a,b){var c=r(this,"entries"),d=c[a]||{},e=d.update;if(e!==void 0)return e?1:2;if(b.usedContainerScopedDefaults){e=b.containerScopedDefaults[a];if(e===3)return 1;if(e===2)return 2}else if(e=d.default,e!==void 0)return e?1:2;if(b==null?0:b.delegatedConsentTypes.hasOwnProperty(a)){a=b.delegatedConsentTypes[a];c=c[a]||{};e=c.update;if(e!==void 0)return e?1:2;if(b.usedContainerScopedDefaults){b=b.containerScopedDefaults[a];if(b===3)return 1;if(b===2)return 2}else if(e=c.default, 
e!==void 0)return e?1:2}e=d.declare;if(e!==void 0)return e?1:2;e=d.implicit;return e!==void 0?e?3:4:0};n.addListener=function(a,b){this.v.push({consentTypes:a,ia:b})};function nc(a,b){for(var c=0;c<a.v.length;++c){var d=a.v[c];Array.isArray(d.consentTypes)&&d.consentTypes.indexOf(b)!==-1&&(d.ca=!0)}}n.notifyListeners=function(a,b){for(var c=0;c<this.v.length;++c){var d=this.v[c];if(d.ca){d.ca=!1;try{d.ia({consentEventId:a,consentPriorityId:b})}catch(e){}}}};var oc=[],pc={};function P(a){return oc[a]===void 0?!1:oc[a]};var qc={},rc={delegatedConsentTypes:{},corePlatformServices:{},usedCorePlatformServices:!1,selectedAllCorePlatformServices:!1,containerScopedDefaults:(qc.ad_storage=1,qc.analytics_storage=1,qc.ad_user_data=1,qc.ad_personalization=1,qc),usedContainerScopedDefaults:!1};function R(a){var b=kc();b.accessedAny=!0;return(Rb(a)?[a]:a).every(function(c){switch(b.getConsentState(c,rc)){case 1:case 3:return!0;case 2:case 4:return!1;default:return!0}})} 
function sc(a){var b=kc();b.accessedAny=!0;return!(r(b,"entries")[a]||{}).quiet}function tc(a,b){kc().addListener(a,b)}function uc(a,b){if(b.every(sc))a({});else{var c=!1;tc(b,function(d){!c&&b.every(sc)&&(c=!0,a(d))})}} 
function vc(a,b){function c(){return d.filter(function(g){return R(g)&&!e[g]})}var d=Rb(b)?[b]:b,e={};b=c();if(b.length!==d.length){var f=function(g){g=v(g);for(var h=g.next();!h.done;h=g.next())e[h.value]=!0};f(b);tc(d,function(g){function h(m){m.length!==0&&(f(m),g.consentTypes=m,a(g))}var k=c();if(k.length!==0){var l=r(Object,"keys").call(Object,e).length;k.length+l>=d.length?h(k):M.setTimeout(function(){h(c())},500)}})}};var wc=/:[0-9]+$/,xc=/^\d+\.fls\.doubleclick\.net$/;function yc(a,b){var c={};a=v(a.split("&"));for(var d=a.next();!d.done;d=a.next()){var e=v(d.value.split("="));d=e.next().value;e=ja(e);d=decodeURIComponent(d.replace(/\+/g," "));if(b===void 0||d===b)e=e.join("="),c[d]||(c[d]=[]),c[d].push(decodeURIComponent(e.replace(/\+/g," ")))}var f;return(f=c[b])==null?void 0:f[0]} 
function zc(a,b,c,d,e){b&&(b=String(b).toLowerCase());if(b==="protocol"||b==="port")a.protocol=Ac(a.protocol)||Ac(M.location.protocol);b==="port"?a.port=String(Number(a.hostname?a.port:M.location.port)||(a.protocol==="http"?80:a.protocol==="https"?443:"")):b==="host"&&(a.hostname=(a.hostname||M.location.hostname).replace(wc,"").toLowerCase());var f=Ac(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":d="";a&&a.href&&(d=a.href.indexOf("#"),d=d<0?a.href:a.href.substring(0, 
d));a=d;break;case "protocol":a=f;break;case "host":a=a.hostname.replace(wc,"").toLowerCase();c&&(d=/^www\d*\./.exec(a))&&d[0]&&(a=a.substring(d[0].length));break;case "port":a=String(Number(a.port)||(f==="http"?80:f==="https"?443:""));break;case "path":a.pathname||a.hostname||L(1);a=a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname;a=a.split("/");(d||[]).indexOf(a[a.length-1])>=0&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");e&&(a=yc(a,e));break;case "extension":a= 
a.pathname.split(".");a=a.length>1?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a}function Ac(a){return a?a.replace(":","").toLowerCase():""}var Bc={},Cc=0; 
function Dc(a){var b=Bc[a];if(!b){b=O.createElement("a");a&&(b.href=a);var c=b.pathname;c[0]!=="/"&&(a||L(1),c="/"+c);var d=b.hostname.replace(wc,"");b={href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port};Cc<5&&(Bc[a]=b,Cc++)}return b};function Ec(a,b,c,d){var e,f=Number(a.U!=null?a.U:void 0);f!==0&&(e=new Date((b||I())+1E3*(f||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:e,K:d}};var Fc=["ad_storage","ad_user_data"];function Gc(a,b){if(a)if(b===null||b===void 0||b==="")L(33);else{var c=Hc(!1);c.error!==0?L(34):c.value?(c.value[a]=b,Ic(c)!==0&&L(36)):L(35)}else L(32)}function Jc(a){if(!a)return L(27),{error:10};var b=Hc();if(b.error!==0)return L(29),b;if(!b.value)return L(30),{error:2};if(!(a in b.value))return L(31),{value:void 0,error:15};a=b.value[a];return a===null||a===void 0||a===""?(L(28),{value:void 0,error:11}):{value:a,error:0}} 
function Kc(a){if(a){var b=Hc(!1);b.error!==0?L(38):b.value?a in b.value?(delete b.value[a],Ic(b)!==0&&L(41)):L(40):L(39)}else L(37)} 
function Hc(a){a=a===void 0?!0:a;if(!R(Fc))return L(43),{error:3};try{if(!M.localStorage)return L(44),{error:1}}catch(f){return L(45),{error:14}}var b={schema:"gcl",version:1},c=void 0;try{c=M.localStorage.getItem("_gcl_ls")}catch(f){return L(46),{error:13}}try{if(c){var d=JSON.parse(c);if(d&&typeof d==="object")b=d;else return L(47),{error:12}}}catch(f){return L(48),{error:8}}if(b.schema!=="gcl")return L(49),{error:4};if(b.version!==1)return L(50),{error:5};try{var e=Lc(b);a&&e&&Ic({value:b,error:0})}catch(f){return L(48), 
{error:8}}return{value:b,error:0}}function Lc(a){if(!a||typeof a!=="object")return!1;if("expires"in a&&"value"in a){var b;typeof a.expires==="number"?b=a.expires:b=typeof a.expires==="string"?Number(a.expires):NaN;if(isNaN(b)||!(Date.now()<=b))return a.value=null,a.error=9,L(54),!0}else{b=!1;for(var c=v(r(Object,"keys").call(Object,a)),d=c.next();!d.done;d=c.next())b=Lc(a[d.value])||b;return b}return!1} 
function Ic(a){if(a.error)return a.error;if(!a.value)return L(42),2;a=a.value;try{var b=JSON.stringify(a)}catch(c){return L(52),6}try{M.localStorage.setItem("_gcl_ls",b)}catch(c){return L(53),7}return 0};var Mc={M:"value",F:"conversionCount",V:1},Nc=[Mc,{M:"timeouts",F:"timeouts",V:0},{M:"errors",F:"errors",V:0},{M:"eopCount",F:"endOfPageCount",V:0}];function Oc(a){return R(["ad_storage","ad_user_data"])?!a.qa||P(a.qa):!1}function Pc(a){return R(["ad_storage","ad_user_data"])?!a.ma||P(a.ma):!1};function Qc(){return R(["ad_storage","ad_user_data"])&&P(9)};function Rc(a,b,c,d){var e;return(e=Sc(function(f){return f===a},b,c,d)[a])!=null?e:[]}function Sc(a,b,c,d){if(Tc(d)){d={};b=String(b||Uc()).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].trim();if(g&&a(g)){(f=f.slice(1).join("=").trim())&&c&&(f=decodeURIComponent(f));var h=void 0,k=void 0;((h=d)[k=g]||(h[k]=[])).push(f)}}a=d}else a={};return a} 
function Vc(a,b,c){var d=Wc,e=["ad_storage","ad_user_data"];if(Tc(e)){a=Xc(a,d,e);if(a.length===1)return a[0];if(a.length!==0){a=Yc(a,function(f){return f.ga},b);if(a.length===1)return a[0];a=Yc(a,function(f){return f.pa},c);return a[0]}}}function Zc(a,b,c,d){var e=Uc();M.origin!=="null"&&(M.document.cookie=a);a=Uc();return e!==a||c!==void 0&&Rc(b,a,!1,d).indexOf(c)>=0} 
function $c(a,b,c){function d(p,u,w){if(w==null)return delete g[u],p;g[u]=w;return p+"; "+u+"="+w}function e(p,u){if(u==null)return p;g[u]=!0;return p+"; "+u}if(Tc(c.K)){if(b==null)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=ad(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var h=c.expires.toUTCString();else c.expires!=null&&(h=c.expires);f=d(f,"expires",h);f=d(f,"max-age",c.Ja);f=d(f,"samesite",c.Ka);c.secure&&(f=e(f, 
"secure"));if((h=c.domain)&&h.toLowerCase()==="auto"){h=bd();for(var k=0;k<h.length;++k){var l=h[k]!=="none"?h[k]:void 0,m=d(f,"domain",l);m=e(m,c.flags);if(!cd(l,c.path)&&Zc(m,a,b,c.K))break}}else h&&h.toLowerCase()!=="none"&&(f=d(f,"domain",h)),f=e(f,c.flags),cd(h,c.path)||Zc(f,a,b,c.K)}}function dd(a,b,c){c.path==null&&(c.path="/");c.domain||(c.domain="auto");$c(a,b,c)} 
function Yc(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],k=b(h);k===c?d.push(h):f===void 0||k<f?(e=[h],f=k):k===f&&e.push(h)}return d.length>0?d:e}function Xc(a,b,c){var d=[];a=Rc(a,void 0,void 0,c);for(c=0;c<a.length;c++){var e=a[c].split("."),f=e.shift();if(!b||!f||b.indexOf(f)!==-1)if(f=e.shift())f=f.split("-"),d.push({Ia:a[c],ea:e.join("."),ga:Number(f[0])||1,pa:Number(f[1])||1})}return d}function ad(a){a&&a.length>1200&&(a=a.substring(0,1200));return a} 
var ed=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,fd=/(^|\.)doubleclick\.net$/i;function cd(a,b){return a!==void 0&&(fd.test(M.document.location.hostname)||b==="/"&&ed.test(a))}function gd(a){if(!a)return 1;var b=a;P(4)&&a==="none"&&(b=M.document.location.hostname);b=b.indexOf(".")===0?b.substring(1):b;return b.split(".").length}function hd(a){if(!a||a==="/")return 1;a[0]!=="/"&&(a="/"+a);a[a.length-1]!=="/"&&(a+="/");return a.split("/").length-1} 
function id(a,b){a=""+gd(a);b=hd(b);b>1&&(a+="-"+b);return a}function Uc(){return M.origin!=="null"?M.document.cookie:""}function Tc(a){return a&&P(5)?(Array.isArray(a)?a:[a]).every(function(b){return sc(b)&&R(b)}):!0}function bd(){var a=[],b=M.document.location.hostname.split(".");if(b.length===4){var c=b[b.length-1];if(Number(c).toString()===c)return["none"]}for(c=b.length-2;c>=0;c--)a.push(b.slice(c).join("."));b=M.document.location.hostname;fd.test(b)||ed.test(b)||a.push("none");return a};var Wc=["1"],jd={},kd={}; 
function ld(a,b){(b===void 0?0:b)&&Oc(Mc)&&Kc("gcl_ctr");if(b=Pc(Mc)){var c=[Mc];b:{b=Jc("gcl_ctr");if(b.error===0&&b.value&&typeof b.value==="object"){b=b.value;try{var d="value"in b&&typeof b.value==="object"?b.value:void 0;break b}catch(h){}}d=void 0}b={};c=v(c);for(var e=c.next();!e.done;e=c.next())if(e=e.value,d&&Oc(e)){var f=d[e.M];f===void 0||r(Number,"isNaN").call(Number,f)?b[e.F]=-1:b[e.F]=Number(f)}else b[e.F]=-1;b=b[Mc.F]===-1}if(b){d={};d=(d[Mc.F]=0,d);b=v(Nc);for(c=b.next();!c.done;c= 
b.next())c=c.value,c!==Mc&&Pc(c)&&(d[c.F]=0);b=I();a=Ec(a||{},b,!0);c={};e=v(Nc);for(f=e.next();!f.done;f=e.next()){f=f.value;var g=d[f.F];g!==void 0&&g!==-1&&(c[f.M]=g)}c.creationTimeMs=b;Gc("gcl_ctr",{value:c,expires:Number(a.expires)})}} 
function md(a,b){(b===void 0?0:b)&&Qc()&&Kc("last_convs");if(!(b=!(R(["ad_storage","ad_user_data"])&&P(10))))a:{if(Qc()&&(b=Jc("last_convs"),b.error===0&&b.value&&typeof b.value==="object"&&(b=b.value,b.value&&Array.isArray(b.value)))){var c=b.value;if(!(c.length>1)){b=[];c=v(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;if(typeof d!=="object"||d===null||typeof d.random!=="number"||typeof d.label!=="string"||d.label.length>200){b=void 0;break a}b.push({random:d.random,label:d.label})}break a}}b= 
void 0}b||(b=[],!Qc()||b.length>1||b.length===1&&b[0].label.length>200||(a=a||{},Gc("last_convs",{value:b,expires:Number(Ec(a).expires)})))}function nd(a,b,c,d){b=["1",id(c.domain,c.path),b].join(".");c=Ec(c,d);c.K=["ad_storage","ad_user_data"];dd(a,b,c)} 
function od(a,b,c){var d;b=(d=Vc(a,gd(b),hd(c)))==null?void 0:d.ea;if(!b)return!1;c=b.split(".");c.length===3?kd[a]={sessionId:c[0]+"."+c[1],J:Number(c[2])||0,P:0}:c.length>=2&&(jd[a]=c[0]+"."+c[1],c.shift(),c.shift(),c.length>=3&&(d={sessionId:c[0]==="-"?void 0:c[0]+"."+c[1],J:Number(c[2])||0,P:0},P(16)&&c.length>=6&&(b=c[3]+"."+c[4],c=Number(c[5])||0,b&&c!==0&&(d.ba=b,d.P=c)),kd[a]=d));return!0}function pd(a){return(a||"_gcl")+"_au"};function qd(a,b,c){a=rd(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function rd(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var sd={},td=null; 
function ud(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);e>255&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;a===void 0&&(a=0);if(!td)for(td={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));sd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];td[h]===void 0&&(td[h]=g)}}a=sd[a];c=Array(Math.floor(b.length/3));d=a[64]||"";for(e=f=0;f<b.length-2;f+=3){var k=b[f],l=b[f+1];h=b[f+2];g=a[k>>2];k=a[(k& 
3)<<4|l>>4];l=a[(l&15)<<2|h>>6];h=a[h&63];c[e++]=g+k+l+h}g=0;h=d;switch(b.length-f){case 2:g=b[f+1],h=a[(g&15)<<2]||d;case 1:b=b[f],c[e]=a[b>>2]+a[(b&3)<<4|g>>4]+h+d}return c.join("")};var vd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wd(a){var b=a.match(vd);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function xd(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}var yd=/#|$/; 
function zd(a,b){var c=a.search(yd),d=xd(a,0,b,c);if(d<0)return null;var e=a.indexOf("&",d);if(e<0||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,e!==-1?e:0).replace(/\+/g," "))}var Ad=/[?&]($|#)/; 
function Bd(a,b,c){for(var d=a.search(yd),e=0,f,g=[];(f=xd(a,e,b,d))>=0;)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.slice(e));a=g.join("").replace(Ad,"$1");c=c!=null?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),c<0&&(c=a.length),d=a.indexOf("?"),d<0||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.slice(0,d),e,a.slice(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function Cd(a,b,c,d,e,f){var g=zd(c,"fmt");if(d){var h=zd(c,"random"),k=zd(c,"label")||"";if(!h)return;h=ud(decodeURIComponent(k.replace(/\+/g," "))+":"+decodeURIComponent(h.replace(/\+/g," ")));if(!qd(a,h,d))return}g&&Number(g)!==4?(c=Bd(c,"rfmt",g),c=Bd(c,"fmt",4)):g||(c=Bd(c,"fmt",4));cc(c,function(){a.google_noFurtherRedirects&&d&&(a.google_noFurtherRedirects=null,d())},function(){e==null||e()},f,b.getElementsByTagName("script")[0].parentElement||void 0);return c};var S={},Dd=(S.k={D:/^[\w-]+$/},S.b={D:/^[\w-]+$/,W:!0},S.i={D:/^[1-9]\d*$/},S.h={D:/^\d+$/},S.t={D:/^[1-9]\d*$/},S.d={D:/^[A-Za-z0-9_-]+$/},S.j={D:/^\d+$/},S.u={D:/^[1-9]\d*$/},S.l={D:/^[01]$/},S.o={D:/^[1-9]\d*$/},S.g={D:/^[01]$/},S.s={D:/^.+$/},S.m={D:/^[01]$/},S);var Ed={},Id=(Ed[5]={Y:{2:Fd},T:"2",N:["k","i","b","u"]},Ed[4]={Y:{2:Fd,GCL:Gd},T:"2",N:["k","i","b","m"]},Ed[2]={Y:{GS2:Fd,GS1:Hd},T:"GS2",N:"sogtjlhd".split("")},Ed); 
function Fd(a,b){a=a.split(".");if(a.length===3){var c=a[2];if(c.indexOf("$")===-1&&c.indexOf("%24")!==-1)try{c=decodeURIComponent(c)}catch(h){}a={};if(b=Id[b]){b=b.N;c=v(c.split("$"));for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=d[0];if(b.indexOf(e)!==-1)try{var f=decodeURIComponent(d.substring(1)),g=Dd[e];g&&(g.W?(a[e]=a[e]||[],a[e].push(f)):a[e]=f)}catch(h){}}return a}}}function Gd(a){a=a.split(".");a.shift();var b=a.shift(),c=a.shift(),d={};return d.k=c,d.i=b,d.b=a,d} 
function Hd(a){a=a.split(".").slice(2);if(!(a.length<5||a.length>7)){var b={};return b.s=a[0],b.o=a[1],b.g=a[2],b.t=a[3],b.j=a[4],b.l=a[5],b.h=a[6],b}};var Jd=new q.Map([[5,"ad_storage"],[4,["ad_storage","ad_user_data"]],[2,"analytics_storage"]]);function Kd(a,b){if(Id[b]){var c=[];a=Rc(a,void 0,void 0,Jd.get(b));a=v(a);for(var d=a.next();!d.done;d=a.next()){a:{d=d.value;var e=b,f=Id[e];if(f){var g=d.split(".")[0];if(g&&(f=f.Y[g])){d=f(d,e);break a}}d=void 0}d&&c.push(Ld(d))}return c}} 
function Md(a,b,c,d){c=c||{};var e=Id[5];if(e){e=e.T;var f=id(c.domain,c.path)||"1";var g=Id[5];if(g){var h=[];g=v(g.N);for(var k=g.next();!k.done;k=g.next()){k=k.value;var l=Dd[k];if(l){var m=b[k];if(m!==void 0)if(l.W&&Array.isArray(m))for(l=v(m),m=l.next();!m.done;m=l.next())h.push(encodeURIComponent(k+m.value));else h.push(encodeURIComponent(k+m))}}b=h.join("$")}else b=void 0;b=[e,f,b].join(".")}else b=void 0;b&&(c=Ec(c,d,void 0,Jd.get(5)),dd(a,b,c))} 
function Nd(a,b){b=b.D;return typeof b==="function"?b(a):b.test(a)}function Ld(a){for(var b=v(r(Object,"keys").call(Object,a)),c=b.next(),d={};!c.done;d={L:void 0},c=b.next()){c=c.value;var e=a[c];d.L=Dd[c];d.L?d.L.W?a[c]=Array.isArray(e)?e.filter(function(f){return function(g){return Nd(g,f.L)}}(d)):void 0:typeof e==="string"&&Nd(e,d.L)||(a[c]=void 0):a[c]=void 0}return a};function T(a){this.value=0;this.value=a===void 0?0:a}T.prototype.set=function(a){return this.value|=1<<a};function Od(a,b){b<=0||(a.value|=1<<b-1)}T.prototype.get=function(){return this.value};function Pd(a){var b=[],c=O.cookie.split(";");a=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push({X:e[1],value:e[2],timestamp:Number(e[2].split(".")[1])||0})}b.sort(function(f,g){return g.timestamp-f.timestamp});return b} 
function Qd(a,b){a=Pd(a);var c={};if(!a||!a.length)return c;for(var d=0;d<a.length;d++){var e=a[d].value.split(".");if(!(e[0]!=="1"||b&&e.length<3||!b&&e.length!==3)&&Number(e[1])){c[a[d].X]||(c[a[d].X]=[]);var f={version:e[0],timestamp:Number(e[1])*1E3,A:e[2]};b&&e.length>3&&(f.labels=e.slice(3));c[a[d].X].push(f)}}return c};var Rd=/^\w+$/,Sd=/^[\w-]+$/,Td={},Ud=(Td.aw="FPGCLAW",Td),U={},Vd=(U.ag="_ag",U.gb="_gb",U.aw="_aw",U.dc="_dc",U.gf="_gf",U.ha="_ha",U.gp="_gp",U.gs="_gs",U);function V(){return["ad_storage","ad_user_data"]}function Y(a){return!P(5)||R(a)}function Wd(a){function b(){var d=Y(c);d&&a();return d}var c=V();uc(function(){b()||vc(b,c)},c)}function Xd(a){return Yd(a).map(function(b){return b.A})} 
function Zd(a,b){function c(e){return function(f){f.aa=e;return f}}b=b===void 0?!1:b;var d=$d(a.prefix);a=ae("gb",d);d=ae("ag",d);if(!d||!a)return[];b=Yd(a,b).map(c("gb"));a=be(d).map(c("ag"));return b.concat(a).sort(function(e,f){return f.timestamp-e.timestamp})}function ce(a,b,c,d,e){var f=Sb(a,function(g){return g.A===b});f?(f.timestamp<c&&(f.timestamp=c,f.I=e),f.labels=de(f.labels||[],d||[])):a.push({version:"2",A:b,timestamp:c,labels:d,I:e})} 
function ee(a){var b=Kd(a,5)||[];a=[];b=v(b);for(var c=b.next();!c.done;c=b.next()){var d=c=c.value,e=c?(Number(c.i)||0)*1E3:0;e&&ce(a,d.k,e,d.b||[],c.u)}return a.sort(function(f,g){return g.timestamp-f.timestamp})}function Yd(a,b){b=b===void 0?!1:b;var c=[];fe(c,a,1);if(b)if(Ub(a,"_aw")){if(a=ge())a.I=void 0,a.B=a.B||[2],he(c,a);fe(c,"gcl_aw",2)}else Ub(a,"_gb")&&fe(c,"gcl_gb",2);c.sort(function(d,e){return e.timestamp-d.timestamp});return ie(c)} 
function je(a,b){var c=[];a=v(a);for(var d=a.next();!d.done;d=a.next())d=d.value,r(c,"includes").call(c,d)||c.push(d);b=v(b);for(a=b.next();!a.done;a=b.next())a=a.value,r(c,"includes").call(c,a)||c.push(a);return c} 
function he(a,b,c){c=c===void 0?!1:c;for(var d,e,f=v(a),g=f.next();!g.done;g=f.next()){g=g.value;if(g.A===b.A){d=g;break}g.C&&b.C&&g.C.value===b.C.value&&(e=g)}if(d){var h,k;a=(h=d.C)!=null?h:new T;h=(k=b.C)!=null?k:new T;a.value|=h.value;d.C=a;d.timestamp<b.timestamp&&(d.timestamp=b.timestamp,d.I=b.I);d.labels=je(d.labels||[],b.labels||[]);d.B=je(d.B||[],b.B||[])}else c&&e?r(Object,"assign").call(Object,e,b):a.push(b)} 
function ge(){var a=Jc("gclid");if(!a||a.error||!a.value||typeof a.value!=="object")return null;a=a.value;try{if(!("value"in a&&a.value)||typeof a.value!=="object")return null;var b=a.value,c=b.value;if(!c||!c.match(Sd))return null;var d=b.linkDecorationSource,e=b.linkDecorationSources,f=new T;if(typeof d==="number")if(d){var g=new T;d===1?(Od(g,2),Od(g,3)):Od(g,d);f=g}else f=new T;else typeof e==="number"&&(f.value=e);return{version:"",A:c,timestamp:Number(b.creationTimeMs)||0,labels:[],C:f,B:[2]}}catch(h){return null}} 
function ke(a){a=Jc(a);if(a.error!==0)return null;try{return a.value.reduce(function(b,c){if(!c.value||typeof c.value!=="object")return b;var d=c.value,e=d.value;if(!e||!e.match(Sd))return b;var f=new T,g=d.linkDecorationSources;typeof g==="number"&&(f.value=g);var h;b.push({version:"",A:e,timestamp:Number(d.creationTimeMs)||0,expires:Number(c.expires)||0,labels:(h=d.labels)!=null?h:[],C:f,B:[2]});return b},[])}catch(b){return null}} 
function fe(a,b,c){if(c===1){b=Rc(b,O.cookie,void 0,V());b=v(b);for(var d=b.next();!d.done;d=b.next())d=le(d.value.split(".")),d=d.length===0?null:{version:d[0],A:d[2],timestamp:(Number(d[1])||0)*1E3,labels:d.slice(3)},d!=null&&(d.I=void 0,d.C=new T,d.B=[c],he(a,d))}else if(c===2&&(c=ke(b)))for(c=v(c),b=c.next();!b.done;b=c.next())b=b.value,b.I=void 0,b.B=b.B,he(a,b)}function be(a){return ee(a).map(function(b){b.C=new T;b.B=[1];return b})} 
function de(a,b){if(!a.length)return b;if(!b.length)return a;var c={};return a.concat(b).filter(function(d){return c.hasOwnProperty(d)?!1:c[d]=!0})}function $d(a){return a&&typeof a==="string"&&a.match(Rd)?a:"_gcl"} 
function me(a,b){var c=Dc(a);a=zc(c,"query",!1,void 0,"gclid");var d=zc(c,"query",!1,void 0,"gclsrc"),e=zc(c,"query",!1,void 0,"wbraid");if(e){var f=e;try{f=decodeURIComponent(e)}catch(k){}f=f.split(",");e=f.length===2&&f[0]===f[1]?f[0]:e}f=zc(c,"query",!1,void 0,"gbraid");var g=zc(c,"query",!1,void 0,"gad_source"),h=zc(c,"query",!1,void 0,"dclid");!b||a&&d&&e&&f||(b=c.hash.replace("#",""),a=a||yc(b,"gclid"),d=d||yc(b,"gclsrc"),e=e||yc(b,"wbraid"),f=f||yc(b,"gbraid"),g=g||yc(b,"gad_source"));return ne(a, 
d,h,e,f,g)} 
function ne(a,b,c,d,e,f){function g(k,l){h[l]||(h[l]=[]);h[l].push(k)}var h={};h.gclid=a;h.gclsrc=b;h.dclid=c;if(a!==void 0&&a.match(Sd))switch(b){case void 0:g(a,"aw");break;case "aw.ds":g(a,"aw");g(a,"dc");break;case "aw.dv":P(7)&&(g(a,"aw"),g(a,"dc"));break;case "ds":g(a,"dc");break;case "3p.ds":g(a,"dc");break;case "gf":g(a,"gf");break;case "ha":g(a,"ha")}c&&g(c,"dc");d!==void 0&&Sd.test(d)&&(h.wbraid=d,g(d,"gb"));e!==void 0&&Sd.test(e)&&(h.gbraid=e,g(e,"ag"));f!==void 0&&Sd.test(f)&&(h.gad_source= 
f,g(f,"gs"));return h} 
function oe(a,b){function c(){if(Y(d)&&a.length>0){var e=ke("gcl_gb")||[];a.forEach(function(f){var g=Ec(b,f.timestamp,!0);g.expires!==void 0&&he(e,{version:"",A:f.A,timestamp:f.timestamp,expires:Number(g.expires),C:f.C,labels:f.labels},!0)});e.length&&Gc("gcl_gb",e.map(function(f){var g={value:f.A,creationTimeMs:f.timestamp,linkDecorationSources:f.C?f.C.get():0},h;if((h=f.labels)==null?0:h.length)g.labels=f.labels;return{value:g,expires:Number(f.expires)}}))}}b=b||{};var d=V();uc(function(){Y(d)? 
c():vc(c,d)},d)} 
function pe(a,b,c,d,e){function f(){if(Y(l)){var w=Ec(c,h,!0);w.K=l;for(var F=function(B,Hb){var Za=ae(B,g);Za&&(dd(Za,Hb,w),B!=="gb"&&(m=!0))},Q=function(B){B=["GCL",k,B];e.length>0&&B.push(e.join("."));return B.join(".")},ra=v(["aw","dc","gf","ha","gp"]),W=ra.next();!W.done;W=ra.next())W=W.value,a[W]&&F(W,Q(a[W][0]));if((!m||u)&&a.gb){var $a=a.gb[0];ra=ae("gb",g);!b&&Yd(ra).some(function(B){return B.A===$a&&B.labels&&B.labels.length>0})||F("gb",Q($a))}}if(!p&&a.gbraid&&Y("ad_storage")&&(p=!0,!m|| 
u)){var G=a.gbraid;F=ae("ag",g);if(b||!be(F).some(function(B){return B.A===G&&B.labels&&B.labels.length>0}))Q={},Q=(Q.k=G,Q.i=""+k,Q.b=e,Q),Md(F,Q,c,h)}qe(a,g,h,c)}c=c||{};e=e||[];var g=$d(c.prefix),h=d||I(),k=Math.round(h/1E3),l=V(),m=!1,p=!1,u=P(8);uc(function(){f();Y(l)||vc(f,l)},l)} 
function qe(a,b,c,d){if(a.gad_source!==void 0&&Y("ad_storage")){var e=jc();if(e!=="r"&&e!=="h"&&(b=ae("gs",b))){e=(e=M.performance)&&Qb(e.now)?e.now():void 0;e=Math.floor((I()-(e||0))/1E3);var f=M.location.hostname;var g=M.location.pathname;f=Vb(f);f.split(".").length>2&&(f=f.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./,""));g=Vb(g);g=g.split(";")[0];g=g.replace(/\/(ar|slp|web|index)?\/?$/,"");g=(f+g).toLowerCase();f=1;var h;if(g)for(f=0,h=g.length-1;h>=0;h--){var k=g.charCodeAt(h);f= 
(f<<6&268435455)+k+(k<<14);k=f&266338304;f=k!==0?f^k>>21:f}g=String(f);f={};a=(f.k=a.gad_source,f.i=""+e,f.u=g,f);Md(b,a,d,c)}}}function ae(a,b){a=Vd[a];if(a!==void 0)return b+a}function re(a){return le(a.split(".")).length!==0?(Number(a.split(".")[1])||0)*1E3:0}function le(a){return a.length<3||a[0]!=="GCL"&&a[0]!=="1"||!/^\d+$/.test(a[1])||!Sd.test(a[2])?[]:a}function ie(a){return a.filter(function(b){return Sd.test(b.A)})} 
function se(){var a=["aw"],b={};if(M.origin!=="null"){for(var c=$d(b.prefix),d={},e=0;e<a.length;e++)Vd[a[e]]&&(d[a[e]]=Vd[a[e]]);Wd(function(){Tb(d,function(f,g){g=Rc(c+g,O.cookie,void 0,V());g.sort(function(m,p){return re(p)-re(m)});if(g.length){var h=g[0];g=re(h);var k=le(h.split(".")).length!==0?h.split(".").slice(3):[],l={};h=le(h.split(".")).length!==0?h.split(".")[2]:void 0;l[f]=[h];pe(l,!0,b,g,k)}})})}} 
function te(a,b,c,d,e){e=e===void 0?!1:e;var f=[];c=c||{};if(!Y(V()))return f;var g=Yd(a,e);var h=[];if(g.length!==0)for(var k={},l=0;l<g.length;l++){var m=g[l],p=m.aa?m.aa:"gcl";if((m.labels||[]).indexOf(b)===-1){f.push(0);var u=!1,w=void 0;if((w=m.B)==null?0:r(w,"includes").call(w,2))u=!0;w=void 0;((w=m.B)==null?0:r(w,"includes").call(w,1))&&!k[p]&&(u=!0,k[p]=!0);u&&h.push(m)}else if(f.push(1),u=void 0,(u=m.B)==null?0:r(u,"includes").call(u,1))k[p]=!0}if(h.length&&!d){d=[];g=!1;h=v(h);for(k=h.next();!k.done;k= 
h.next()){m=k=k.value;u=m.version;w=m.A;p=m.timestamp;l=m.B;m=(m.labels||[]).concat([b]);var F=void 0;((F=l)==null?0:r(F,"includes").call(F,1))&&!g&&(g=[u,Math.round(p/1E3),w].concat(m).join("."),p=Ec(c,p,!0),p.K=V(),dd(a,g,p),g=!0);p=void 0;e&&((p=l)==null?0:r(p,"includes").call(p,2))&&d.push(r(Object,"assign").call(Object,{},k,{labels:m}))}d.length&&oe(d,c)}return f} 
function ue(a,b){b=$d(b);b=ae(a,b);if(!b)return 0;a=a==="ag"?be(b):Yd(b);for(var c=b=0;c<a.length;c++)b=Math.max(b,a[c].timestamp);return b}function ve(a){for(var b=0,c=v(r(Object,"keys").call(Object,a)),d=c.next();!d.done;d=c.next()){d=a[d.value];for(var e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp))}return b};var we=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),xe=/^~?[\w-]+(?:\.~?[\w-]+)*$/,ye=/^\d+\.fls\.doubleclick\.net$/,ze=/;gac=([^;?]+)/,Ae=/;gacgb=([^;?]+)/; 
function Be(a,b,c){if(ye.test(a.location.host)){if((b=a.location.href.match(c))&&b.length===2&&b[1].match(we)){a:{try{var d=decodeURIComponent(b[1]);break a}catch(h){}d=void 0}b=d||""}else b="";return b}d=[];a=v(r(Object,"keys").call(Object,b));for(c=a.next();!c.done;c=a.next()){c=c.value;for(var e=[],f=b[c],g=0;g<f.length;g++)e.push(f[g].A);d.push(c+":"+e.join(","))}return d.length>0?d.join(";"):""} 
function Ce(a,b,c,d){for(var e=Y(V())?Qd("_gac_gb",!0):{},f=[],g=!1,h=v(r(Object,"keys").call(Object,e)),k=h.next();!k.done;k=h.next()){k=k.value;var l=te("_gac_gb_"+k,b,c,d);g=g||l.length!==0&&l.some(function(m){return m===1});f.push(k+":"+l.join(","))}return{la:g?f.join(";"):"",ka:Be(a,e,Ae)}}function De(a,b){return(a=a.location.href.match(new RegExp(";"+b+"=([^;?]+)")))&&a.length===2&&a[1].match(xe)?a[1]:void 0} 
function Ee(a,b){a=a.split(".");b=b?b.split("."):[];var c=b.length===a.length?b:void 0;return a.map(function(d,e){d={A:d};if(c&&(e=c[e].split("_"),e.length===2)){d.C=new T(Number(e[0]));e=Number(e[1]);if(e===0)e=[0];else{var f=[];e&1&&f.push(1);e&2&&f.push(2);e&4&&f.push(3);e&8&&f.push(4);e&16&&f.push(5);e=f}d.B=e}return d})} 
function Fe(a,b,c,d){var e=e===void 0?!1:e;if(ye.test(a.location.host)){if(b=De(a,d)){if(P(15))return a=De(a,d+"_src"),Ee(b,a);if(e){var f=new T;Od(f,2);Od(f,3);return b.split(".").map(function(g){return{A:g,C:f,B:[1]}})}return b.split(".").map(function(g){return{A:g,C:new T,B:[1]}})}}else{if(c==="gclid"){a=Yd((b||"_gcl")+"_aw",e);d=Number(pc[4]===void 0?0:pc[4]);e=v(Ge());for(b=e.next();!b.done;b=e.next())b=b.value,b.timestamp>d&&he(a,b);return a}if(c==="wbraid")return Yd((b||"_gcl")+"_gb",e);if(c=== 
"braids")return Zd({prefix:b},e)}return[]}function Ge(){return(Kd(Ud.aw,4)||[]).filter(function(a){return a.m==="1"}).map(function(a){return{A:a.k,timestamp:Number(a.i),version:"",B:[5]}})}function He(a,b){return Fe(a,b,"gclid","gclaw").map(function(c){return c.A}).join(".")}function Ie(a,b){return Fe(a,b,"wbraid","gclgb").map(function(c){return c.A}).join(".")} 
function Je(a){if(Xd("_gcl_aw").length===0&&(!a||Xd(a+"_aw").length===0)){a=me(M.location.href,!0);for(var b=!0,c=v(r(Object,"keys").call(Object,a)),d=c.next();!d.done;d=c.next())if(a[d.value]!==void 0){b=!1;break}b&&(a=me(M.document.referrer,!1),a.gad_source=void 0);pe(a,!1,{});se()}}function Ke(a,b,c){a=te((b&&b.prefix||"_gcl")+"_gb",a,b,c,!1);return a.length===0||a.every(function(d){return d===0})?"":a.join(".")};function Le(){var a=M.__uspapi;if(Qb(a)){var b="";try{a("getUSPData",1,function(c,d){d&&c&&(c=c.uspString)&&RegExp("^[\\da-zA-Z-]{1,20}$").test(c)&&(b=c)})}catch(c){}return b}};function Me(){var a=a===void 0?document:a;var b;return!((b=a.featurePolicy)==null||!(aa=b.allowedFeatures(),r(aa,"includes")).call(aa,"attribution-reporting"))};var Ne="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Oe(a){var b;return(b=a.google_tag_data)!=null?b:a.google_tag_data={}}function Pe(a){a=a.google_tag_data;if(a!=null&&a.uach){a=a.uach;var b=r(Object,"assign").call(Object,{},a);a.fullVersionList&&(b.fullVersionList=a.fullVersionList.slice(0));a=b}else a=null;return a} 
function Qe(a){var b,c;return typeof((b=a.navigator)==null?void 0:(c=b.userAgentData)==null?void 0:c.getHighEntropyValues)==="function"}function Re(){var a=window;if(Qe(a)){var b=Oe(a);b.uach_promise||(a=a.navigator.userAgentData.getHighEntropyValues(Ne).then(function(c){b.uach!=null||(b.uach=c);return c}),b.uach_promise=a)}};var Se=/^[a-zA-Z0-9_]+$/,Te=!1,Ue="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "), 
Ve=["google_conversion_first_time","google_conversion_snippets"];function We(a){return a!=null?encodeURIComponent(String(a)):""}function Xe(a){if(a!=null){a=String(a).substring(0,512);var b=a.indexOf("#");return b==-1?a:a.substring(0,b)}return""}function Z(a,b){b=We(b);return b!=""&&(a=We(a),a!="")?"&".concat(a,"=",b):""}function Ye(a){var b=typeof a;return a==null||b=="object"||b=="function"?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function Ze(a){if(!a||typeof a!="object"||typeof a.join=="function")return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&typeof d.join==="function"){for(var e=[],f=0;f<d.length;++f){var g=Ye(d[f]);g!=null&&e.push(g)}d=e.length==0?null:e.join(",")}else d=Ye(d);(e=Ye(c))&&d!=null&&b.push(e+"="+d)}return b.join(";")}function $e(a){return typeof a!="number"&&typeof a!="string"?"":We(a.toString())} 
function af(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="",d=bf(b),e={};b.google_gcl_cookie_domain&&(e.domain=b.google_gcl_cookie_domain);b.google_gcl_cookie_flags&&(e.flags=b.google_gcl_cookie_flags);b.google_gcl_cookie_max_age_seconds!=null&&(e.U=b.google_gcl_cookie_max_age_seconds);b.google_gcl_cookie_path&&(e.path=b.google_gcl_cookie_path);d&&(e.prefix=d); 
if(cf(b)&&b.R)var f=b.O===void 0;else ye.test(a.location.host)?f=!(De(a,"gclaw")||De(a,"gac")):(f=Math.max(ue("aw",d),ve(Y(V())?Qd():{})),f=Math.max(ue("gb",d),ve(Y(V())?Qd("_gac_gb",!0):{}))>f);if(f){if(b.O!==void 0)return b.O;c=Ie(a,d||void 0);f=b.google_conversion_label;var g=Ke(f,e,b.R);c=Z("gclgb",c)+(g?Z("mcov",g):"");if(d)return b.O=c;d=Ce(a,f,e,b.R);a=d.ka;d=d.la;c+=(a?Z("gacgb",a):"")+(d?Z("gacmcov",d):"");return b.O=c}if(d)return b=He(a,d),Z("gclaw",b);(b=He(a))&&(c=Z("gclaw",b));b=Be(a, 
Y(V())?Qd():{},ze);return c+(b?Z("gac",b):"")}function df(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(a==void 0||a=="")return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function ef(a,b,c,d){var e="https://",f=c.google_conversion_type==="landing"?"/extclk":"/";switch(d){default:return"";case 2:case 3:var g="googleads.g.doubleclick.net/";var h="pagead/viewthroughconversion/";break;case 1:g="www.google.com/";h="pagead/1p-conversion/";break;case 6:g="www.google.com/";h="ccm/conversion/";break;case 0:g=c.google_conversion_domain||"www.googleadservices.com/";h="pagead/conversion/";break;case 5:g=c.google_conversion_domain||"www.googleadservices.com/";h="ccm/conversion/"; 
break;case 4:g=(g=c.google_gtm_experiments)&&g.apcm?"www.google.com":g&&g.capiorig?c.google_conversion_id+".privacysandbox.googleadservices.com":"www.google.com/",h="pagead/privacysandbox/conversion/"}sb&&c.google_transport_url&&(g=c.google_transport_url);g[g.length-1]!=="/"&&(g+="/");if(g.indexOf("http://")===0||g.indexOf("https://")===0)e="";e=[e,g,h,We(c.google_conversion_id),f,"?random=",We(c.google_conversion_time)].join("");f=Z("cv",c.google_conversion_js_version);g=Z("fst",c.google_conversion_first_time); 
h=Z("num",c.google_conversion_snippets);var k=Z("fmt",c.google_conversion_format),l=c.google_remarketing_only?Z("userId",c.google_user_id):"";var m=c.google_tag_for_child_directed_treatment;m=m==null||m!==0&&m!==1?"":Z("tfcd",m);var p=c.google_tag_for_under_age_of_consent;p=p==null||p!==0&&p!==1?"":Z("tfua",p);var u=c.google_allow_ad_personalization_signals;u=u===!1?Z("npa",1):u===!0?Z("npa",0):"";var w=c.google_restricted_data_processing;w=ub?w===!0?Z("rdp",1):w===!1?Z("rdp",0):"":"";var F=Z("value", 
c.google_conversion_value),Q=Z("currency_code",c.google_conversion_currency),ra=Z("label",c.google_conversion_label),W=Z("oid",c.google_conversion_order_id),$a=Z("bg",c.google_conversion_color);a:{var G=c.google_conversion_language;if(G!=null){G=G.toString();if(2==G.length){G=Z("hl",G);break a}if(5==G.length){G=Z("hl",G.substring(0,2))+Z("gl",G.substring(3,5));break a}}G=""}var B=Z("guid","ON"),Hb=!c.google_conversion_domain&&"GooglemKTybQhCsO"in ua&&typeof ua.GooglemKTybQhCsO=="function"?Z("resp", 
"GooglemKTybQhCsO"):"",Za=Z("disvt",c.google_disable_viewthrough),tf=Z("eid",Ab().join());var Fa=[];if(a){var Ga=a.screen;Ga&&(Fa.push(Z("u_h",Ga.height)),Fa.push(Z("u_w",Ga.width)))}Fa=Fa.join("");Ga=ff();var vf=Z("ig",/googleadservices\.com/.test("www.googleadservices.com")?1:0);var na=Ze(c.google_custom_params);var bb=Ze();na=na.concat(na.length>0&&bb.length>0?";":"",bb);na=na==""?"":"&".concat("data=",encodeURIComponent(na));bb=af(b,c);if(!E||H(23)!="658953496"&&H(23)!="658953495"||c.google_read_gcl_cookie_opt_out|| 
c.google_conversion_domain||c.google_remarketing_only)var ca="";else{ca=bf(c);var x={};c.google_gcl_cookie_domain&&(x.domain=c.google_gcl_cookie_domain);c.google_gcl_cookie_flags&&(x.flags=c.google_gcl_cookie_flags);c.google_gcl_cookie_max_age_seconds!=null&&(x.U=c.google_gcl_cookie_max_age_seconds);c.google_gcl_cookie_path&&(x.path=c.google_gcl_cookie_path);ca&&(x.prefix=ca);var J=!1;J=J===void 0?!0:J;var y=pd(x.prefix);if(jd[y])ld(x),md(x);else if(od(y,x.path,x.domain)){y=kd[pd(x.prefix)]||{id:void 0, 
J:void 0};if(J){J=pd(x.prefix);var z=jd[J];if(z){var X=z.split(".");if(X.length===2&&(X=Number(X[1])||0)){var C=z;P(16)&&y.ba?C=z+"."+(y.sessionId||"-.-")+"."+(y.J?y.J:Math.floor(I()/1E3))+"."+y.ba+"."+(y.P?y.P:Math.floor(I()/1E3)):y.sessionId&&(C=z+"."+y.sessionId+"."+(y.J?y.J:Math.floor(I()/1E3)));nd(J,C,x,X*1E3)}}}ld(x);md(x)}else{b:{z=Dc(M.location.href);if((X=zc(z,"host",!1))&&X.match(xc)&&(z=zc(z,"path"))&&(z=z.split("auiddc="),z.length>1)){z=z[1].split(";")[0].split("?")[0];break b}z=void 0}z? 
(L(17),jd[y]=z):J&&(nd(pd(x.prefix),[String(Math.round(Math.random()*2147483647)),Math.round(I()/1E3)].join("."),x),od(y,x.path,x.domain),ld(x,!0),md(x,!0))}ca=(ca=jd[pd(ca)])?Z("auid",ca):""}z=c.google_conversion_page_url;x=c.google_conversion_referrer_url;J="";if(b){y=a.top==a?0:(y=a.location.ancestorOrigins)?y[y.length-1]==a.location.origin?1:2:xa(a.top)?1:2;z=z?z:y==1?a.top.location.href:a.location.href;X="";E&&D(["509562772","509562773"],ob,21);if(E&&(H(21)=="509562773"||H(21)=="509562772")){for(var K, 
sa=C=a;C&&C!==C.parent;)C=C.parent,xa(C)&&(sa=C);K=sa;C=K.location.href;if(K===K.top)var N={url:C,oa:!0};else{sa=!1;var Nb=K.document;Nb&&Nb.referrer&&(C=Nb.referrer,K.parent===K.top&&(sa=!0));(K=K.location.ancestorOrigins)&&(K=K[K.length-1])&&((N=C)==null?void 0:N.indexOf(K))===-1&&(sa=!1,C=K);N={url:C,oa:sa}}N.url&&z!==N.url&&(X=N.url)}J+=Z("frm",y);J+=Z("url",Xe(z));J+=Z("ref",Xe(x||b.referrer));J+=Z("top",Xe(X))}a=[f,g,h,k,l,m,p,u,w,F,Q,ra,W,$a,G,B,Hb,Za,tf,Fa,Ga,vf,na,bb,ca,J,df(b),gf(c.google_additional_params), 
gf(c.google_remarketing_only?{}:c.google_additional_conversion_params),"&hn="+We("www.googleadservices.com"),hf(a),jf(a)].join("");b=zb();a+=b.length>0?"&debug_experiment_id="+b:"";if(!c.google_remarketing_only&&!c.google_conversion_domain){b=[Z("mid",c.google_conversion_merchant_id),Z("fcntr",c.google_basket_feed_country),Z("flng",c.google_basket_feed_language),Z("dscnt",c.google_basket_discount),Z("bttype",c.google_basket_transaction_type)].join("");if(c)if(N=c.google_conversion_items){f=[];g=0;for(h=N.length;g< 
h;g++)k=N[g],l=[],k&&(l.push($e(k.value)),l.push($e(k.quantity)),l.push($e(k.item_id)),l.push($e(k.start_date)),l.push($e(k.end_date)),f.push("("+l.join("*")+")"));N=f.length>0?"&item="+f.join(""):""}else N="";else N="";b=[a,b,N].join("");a=b.length>4E3?[a,Z("item","elngth")].join(""):b}e+=a;d===1||d===6?e+=[Z("gcp",1),Z("sscte",1),Z("ct_cookie_present",1)].join(""):d==3&&(e+=Z("gcp",1),e+=Z("ct_cookie_present",1));tb&&(d=Le(),d!==void 0&&(e+=Z("us_privacy",d||"error")));cf(c)&&(e=c.R?e+Z("gbcov", 
1):e+Z("gbcov",0));return e}function kf(a,b,c,d,e,f,g){return'<iframe name="'+a+'"'+(g?' id="'+g+'"':"")+' title="'+b+'" width="'+d+'" height="'+e+'"'+(c?' src="'+c+'"':"")+' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"'+(f?' style="display:none"':"")+' scrolling="no"></iframe>'} 
function lf(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"} 
function mf(a,b,c){function d(h,k,l,m,p){m=m?' style="display:none"':"";return"<img "+(p&&Eb()?"attributionsrc ":"")+'height="'+l+'" width="'+k+'" border="0" alt="" src="'+h+'"'+m+" />"}Db()&&Lb(2);var e="";c.google_remarketing_only&&c.google_enable_display_cookie_match&&!Pb&&(E&&D(["376635470","376635471"],lb,2),e=c.google_remarketing_only&&c.google_enable_display_cookie_match&&!Pb&&E&&H(2)=="376635471"?kf("google_cookie_match_frame","Google cookie match frame","https://bid.g.doubleclick.net/xbbe/pixel?d=KAE", 
1,1,!0,null):"");c.google_remarketing_only&&!c.google_conversion_domain&&E&&D(["759238990","759238991"],rb,13);!c.google_remarketing_only||c.google_conversion_domain||E&&(H(14)=="759248991"||H(14)=="759248990")||E&&D(["759248990","759248991"],qb,14);c.google_conversion_linker!==!1&&Je(c.google_gcl_cookie_prefix);var f=ef(a,b,c,c.google_remarketing_only?2:0);if(c.google_conversion_format==0&&c.google_conversion_domain==null)return'<a href="https://services.google.com/sitestats/'+(lf(c.google_conversion_language)+ 
"?cid="+We(c.google_conversion_id))+'" target="_blank">'+d(f,135,27,!1,!1)+"</a>"+e;if(c.google_conversion_snippets!==void 0&&c.google_conversion_snippets>1||c.google_conversion_format==3){var g=f;c.google_conversion_domain==null&&(g=c.google_conversion_format==3?f:Bd(f,"fmt",3));f=void 0;Eb()&&!c.google_remarketing_only&&(f={attributionsrc:""});return nf(a,b,c,g,f)?e:d(g,1,1,!0,!c.google_remarketing_only)+e}g=null;!c.google_conversion_domain&&nf(a,b,c,f)&&(g="goog_conv_iframe",f="");return kf("google_conversion_frame", 
"Google conversion frame",f,c.google_conversion_format==2?200:300,c.google_conversion_format==2?26:13,!1,g)+e}function nf(a,b,c,d,e){if(c.google_conversion_domain)return!1;try{return!!Cd(a,b,d,null,void 0,e)}catch(f){return!1}} 
function of(a){if(a.google_conversion_type==="landing"||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets=typeof a.google_conversion_snippets==="number"&&a.google_conversion_snippets>0?a.google_conversion_snippets+1:1;a.google_conversion_first_time===void 0&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";a.google_conversion_format!=0&&a.google_conversion_format!=1&&a.google_conversion_format!=2&&a.google_conversion_format!=3&&(a.google_conversion_format=3);a.google_enable_display_cookie_match!==!1&&(a.google_enable_display_cookie_match=!0);return!0}function pf(a){for(var b=0;b<Ue.length;b++)a[Ue[b]]=null}function qf(a){for(var b={},c=0;c<Ue.length;c++)b[Ue[c]]=a[Ue[c]];for(c=0;c<Ve.length;c++)b[Ve[c]]=a[Ve[c]];return b} 
function ff(){var a="";Db()&&(a=Ob().map(function(b){return b.join("-")}).join("_"));return Z("li",a)}function hf(a){if(!vb||!a.__gsaExp||!a.__gsaExp.id)return"";a=a.__gsaExp.id;if(!Qb(a))return"";try{var b=Number(a());return isNaN(b)?"":Z("gsaexp",b)}catch(c){return""}} 
function jf(a){function b(d,e){e!=null&&c.push(d+"="+encodeURIComponent(e))}if(!Cb())return"";a=Pe(a);if(!a)return"";var c=[];b("&uaa",a.architecture);b("&uab",a.bitness);b("&uam",a.model);b("&uap",a.platform);b("&uapv",a.platformVersion);a.wow64!=null&&b("&uaw",a.wow64?"1":"0");a.fullVersionList&&b("&uafvl",a.fullVersionList.map(function(d){return encodeURIComponent(d.brand||"")+";"+encodeURIComponent(d.version||"")}).join("|"));return c.join("")} 
function gf(a){if(!a)return"";var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=Z(c,a[c]));return b}function cf(a){return(a=a.google_gtm_experiments)&&a.gbcov?!0:!1}function bf(a){return a.google_gcl_cookie_prefix&&a.google_gcl_cookie_prefix!=="_gcl"&&Se.test(a.google_gcl_cookie_prefix)?a.google_gcl_cookie_prefix:""} 
function rf(a,b){var c;if(c=!b.google_remarketing_only)if(b.google_transport_url||!E||H(19)!="375603261"&&H(19)!="375603260")c=!1;else{b:{if(!Te){jb("AzMBwcG8UIaKM1GV43UaxMDFsS7hsiLx0FXw9ULTOHJRGxkUVw+UPCxlzz5CudOm+WnidygXLcAHmad6rC6C9QEAAACUeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJBdHRyaWJ1dGlvblJlcG9ydGluZ0Nyb3NzQXBwV2ViIiwiZXhwaXJ5IjoxNzE0NTIxNTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d",a);if(!Me()&&!jb(r("www.googleadservices.com","endsWith").call("www.googleadservices.com","google.com")?"":"A2kc5o2ErHAbqJvF2MHSdYtnc2Bp3n6Jn2kNeko6SgHH6zXBHn0+4BbAW2No9ylVJMkzJAPwMqCVHqXm+IF1DgQAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",a)){a=!1;break b}Te=!0}a=Me()}c=a}c&&(a=b.google_additional_conversion_params||{},c=b.google_gtm_experiments,a.capi=c&&c.apcm?"2":"1",b.google_additional_conversion_params= 
a)};var sf=ka(["https://www.googletagmanager.com/debug/bootstrap"]),uf=!1,wf=document.currentScript&&document.currentScript.src||""; 
function xf(a,b,c){try{if(!uf&&(uf=!0,!c.google_gtm)){var d=void 0,e=void 0,f=zd(a.location.href,"gtm_debug");yf(f)&&(d=2);d||b.referrer.indexOf("https://tagassistant.google.com/")!==0||(d=3);!d&&Oa(b.cookie.split("; "),"__TAG_ASSISTANT=x")>=0&&(d=4);d||(e=b.documentElement.getAttribute("data-tag-assistant-present"),yf(e)&&(d=5));if(d){var g="AW-"+(c.google_conversion_id||"");if(!a["google.tagmanager.debugui2.queue"]){a["google.tagmanager.debugui2.queue"]=[];var h=gb(sf),k=new q.Map([["id",g],["src", 
"LEGACY"],["cond",d]]),l=Ia(h).toString(),m=l.split(/[?#]/),p=/[?]/.test(l)?"?"+m[1]:"";var u=hb(m[0],p,/[#]/.test(l)?"#"+(p?m[2]:m[1]):"",k);var w=kb("SCRIPT",b);Na(w,u);var F=b.getElementsByTagName("script")[0];F&&F.parentNode&&F.parentNode.insertBefore(w,F)}a["google.tagmanager.debugui2.queue"].push({messageType:"LEGACY_CONTAINER_STARTING",data:{id:g,scriptSource:wf}})}}}catch(Q){}}function yf(a){if(a==null||a.length===0)return!1;a=Number(a);var b=Date.now();return a<b+3E5&&a>b-9E5};function zf(a){if(a.prerendering)return 3;var b;return(b={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""])!=null?b:0}function Af(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b}function Bf(a,b){if(zf(b)===3)return!1;a();return!0} 
function Cf(a,b){function c(){!f&&Bf(a,b)&&(f=!0,typeof b.removeEventListener==="function"&&b.removeEventListener(g,c,!1))}var d=d===void 0?!1:d;if(!Bf(a,b))if(d){var e=function(){typeof b.removeEventListener==="function"&&b.removeEventListener("prerenderingchange",e,!1);a()};typeof b.addEventListener==="function"&&b.addEventListener("prerenderingchange",e,!1)}else{var f=!1,g=Af(b);g&&typeof b.addEventListener==="function"&&b.addEventListener(g,c,!1)}};function Df(a){var b=r(Object,"assign").call(Object,{},a);a=a.id;b=(delete b.id,b);if(r(Object,"keys").call(Object,b).length)throw Error("Invalid attribute(s): "+r(Object,"keys").call(Object,b));return eb({id:a})};E=new function(){var a=[];var b=0,c;for(c in Bb)a[b++]=Bb[c];a=a===void 0?[]:a;this.Z={};this.v={};for(b=0;b<a.length;++b)this.v[a[b]]=""};D(["466465925","466465926"],nb,20);Cb()&&Re();E&&D(["592230570","592230571"],mb,16);Db()&&(Lb(1),Mb()); 
function Ef(a,b,c,d){function e(m,p,u){u=u===void 0?function(){}:u;var w=new Image;w.onload=m;w.onerror=u;w.src=p}function f(){--g;if(g<=0){var m=rd(a,!1),p=m[b];p&&(delete m[b],m=p[0],typeof m==="function"&&m())}}d=d===void 0?[]:d;var g=c.length+1;if(c.length===2){var h=c[0],k=c[1];xd(h,0,"rmt_tld",h.search(yd))>=0&&xd(h,0,"ipr",h.search(yd))>=0&&!k.match(vd)[6]&&(k+=wd(h),c[1]=Bd(k,"rmt_tld","1"))}for(h={H:0};h.H<c.length;h={H:h.H},h.H++){k=c[h.H];var l=zd(k,"fmt");switch(Number(l)){case 1:case 2:(l= 
a.document.getElementById("goog_conv_iframe"))&&!l.src?ec(k,f,l):e(f,k);break;case 4:Cd(a,a.document,k,f);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){f();break}else k=Bd(k,"sendb",2);k=Bd(k,"fmt",3);e(f,k);break;default:l=void 0,d&&d[h.H]&&(l=function(m){return function(){ic(d[m.H])&&f()}}(h)),e(f,k,l)}}f()} 
for(var Ff=["GooglemKTybQhCsO"],Gf=ua,Hf;Ff.length&&(Hf=Ff.shift());)Ff.length||Ef===void 0?Gf[Hf]&&Gf[Hf]!==Object.prototype[Hf]?Gf=Gf[Hf]:Gf=Gf[Hf]={}:Gf[Hf]=Ef; 
(function(a,b,c){if(a){xf(a,c,a);try{if(of(a)){var d=qf(a);E&&D(["375603260","375603261"],wb?1:0,19);E&&D(["512247838","512247839"],xb?1:0,22);E&&D(["658953495","658953496"],pb,23);if(zf(c)==3){var e="google_conversion_"+Math.floor(Math.random()*1E9);Pa(c,Df({id:e}));Cf(function(){try{rf(c,d);var f=c.getElementById(e);if(f){var g=Xb(mf(a,c,d));if(f.nodeType===1&&/^(script|style)$/i.test(f.tagName))throw Error("");f.innerHTML=Ma(g)}}catch(h){}},c)}else rf(c,d),Pa(c,Xb(mf(a,c,d)))}}catch(f){}pf(a)}})(window, 
navigator,document);}).call(this);


/* --- Inline JS --- */

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1060982203926494'); 
fbq('track', 'PageView');


/* --- Inline JS --- */

WEBFORM.init(["myform",531]);
WEBFORM.loadForm();


/* --- Inline JS --- */

function getParam(p) {
var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getExpiryRecord(value) {
var expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds

var expiryDate = new Date().getTime() + expiryPeriod;
return {
value: value,
expiryDate: expiryDate
};
}

function addGclid() {
var gclidParam = getParam('gclid');
var gclidFormFields = ['gclid_field', 'gclid_field1']; // all possible gclid form field ids here
var gclidRecord = null;
var currGclidFormField;

var gclsrcParam = getParam('gclsrc');
var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;

gclidFormFields.forEach(function (field) {
if (document.getElementById(field)) {
currGclidFormField = document.getElementById(field);
}
});

if (gclidParam && isGclsrcValid) {
gclidRecord = getExpiryRecord(gclidParam);
localStorage.setItem('gclid', JSON.stringify(gclidRecord));
}

var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'));
var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;

if (currGclidFormField && isGclidValid) {
currGclidFormField.value = gclid.value;
}
}

window.addEventListener('load', addGclid);


