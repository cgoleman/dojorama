//>>built
(function(b){var d,c=/[-+,> ]/;b("put-selector/put",[],d=function(k,b){function q(u){function w(){a&&(f&&a!=f)&&(f==u&&(b||(b=c.test(g)&&k.createDocumentFragment()))||f).insertBefore(a,r||null)}for(var b,d,r,f,a,p=arguments,v=p[0],m=0;m<p.length;m++){var g=p[m];if("object"==typeof g){d=!1;if(g instanceof Array){a=k.createDocumentFragment();for(var n=0;n<g.length;n++)a.appendChild(q(g[n]));g=a}if(g.nodeType)a=g,w(),f=g,r=0;else for(n in g)a[n]=g[n]}else if(d)d=!1,a.appendChild(k.createTextNode(g));
else{1>m&&(u=null);d=!0;if(v=g.replace(y,function(e,h,b,d,l,c){h&&(w(),"-"==h||"+"==h?(f=(r=a||f).parentNode,a=null,"+"==h&&(r=r.nextSibling)):("\x3c"==h?f=a=(a||f).parentNode:(","==h?f=u:a&&(f=a),a=null),r=0),a&&(f=a));if((e=!b&&d)||!a&&(b||l))"$"==e?(e=p[++m],f.appendChild(k.createTextNode(e))):(e=e||q.defaultTag,(h=x&&p[m+1]&&p[m+1].name)&&(e="\x3c"+e+' name\x3d"'+h+'"\x3e'),a=s&&~(t=e.indexOf("|"))?k.createElementNS(s[e.slice(0,t)],e.slice(t+1)):k.createElement(e));if(b)if("$"==d&&(d=p[++m]),
"#"==b)a.id=d;else if(h=(e=a.className)&&(" "+e+" ").replace(" "+d+" "," "),"."==b)a.className=e?(h+d).substring(1):d;else if("!"==g){var n;x?q("div",a,"\x3c").innerHTML="":(n=a.parentNode)&&n.removeChild(a)}else h=h.substring(1,h.length-1),h!=e&&(a.className=h);l&&("$"==c&&(c=p[++m]),"style"==l?a.style.cssText=c:(b="!"==l.charAt(0)?(l=l.substring(1))&&"removeAttribute":"setAttribute",c=""===c?l:c,s&&~(t=l.indexOf("|"))?a[b+"NS"](s[l.slice(0,t)],l.slice(t+1),c):a[b](l,c)));return""}))throw new SyntaxError("Unexpected char "+
v+" in "+g);w();f=v=a||f}}u&&b&&u.appendChild(b);return v}c=b||c;var y=/(?:\s*([-+ ,<>]))?\s*(\.|!\.?|#)?([-\w%$|]+)?(?:\[([^\]=]+)=?['"]?([^\]'"]*)['"]?\])?/g,t,s=!1;k=k||document;var x="object"==typeof k.createElement;q.addNamespace=function(b,c){k.createElementNS?(s||(s={}))[b]=c:k.namespaces.add(b,c)};q.defaultTag="div";q.forDocument=d;return q})})(function(b,d,c){c=c||d;"function"===typeof define?define([],function(){return c()}):"undefined"==typeof window?require("./node-html")(module,c):put=
c()});