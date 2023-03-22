define(["exports","./Matrix2-413c4048","./Matrix3-81054f0f","./ComponentDatatype-ab629b88","./defaultValue-f6d5e6da","./EllipsoidRhumbLine-77eff028","./GeometryAttribute-81ff775c","./Math-2ce22ee9","./WebGLConstants-7f557f93"],function(t,n,r,a,i,u,o,s,x){"use strict";var l={};function p(t,n,r){r=r||2;var a,i,u,o,s,x,l,p=n&&n.length,g=p?n[0]*r:t.length,w=h(t,0,g,r,!0),M=[];if(!w||w.next===w.prev)return M;if(p&&(w=function(t,n,r,a){var i,u,o,s=[];for(i=0,u=n.length;i<u;i++)(o=h(t,n[i]*a,i<u-1?n[i+1]*a:t.length,a,!1))===o.next&&(o.steiner=!0),s.push(function(t){var n=t,r=t;do(n.x<r.x||n.x===r.x&&n.y<r.y)&&(r=n),n=n.next;while(n!==t);return r}(o));for(s.sort(f),i=0;i<s.length;i++)r=function(t,n){var r=function(t,n){var r,a,i,u=n,o=t.x,s=t.y,x=-1/0;do{if(s<=u.y&&s>=u.next.y&&u.next.y!==u.y){var l=u.x+(s-u.y)*(u.next.x-u.x)/(u.next.y-u.y);if(l<=o&&l>x&&(x=l,i=u.x<u.next.x?u:u.next,l===o))return i}u=u.next}while(u!==n);if(!i)return null;var p,h=i,y=i.x,f=i.y,v=1/0;u=i;do o>=u.x&&u.x>=y&&o!==u.x&&c(s<f?o:x,s,y,f,s<f?x:o,s,u.x,u.y)&&(p=Math.abs(s-u.y)/(o-u.x),A(u,t)&&(p<v||p===v&&(u.x>i.x||u.x===i.x&&(r=i,a=u,0>d(r.prev,r,a.prev)&&0>d(a.next,r,r.next))))&&(i=u,v=p)),u=u.next;while(u!==h);return i}(t,n);if(!r)return n;var a=b(r,t);return y(a,a.next),y(r,r.next)}(s[i],r);return r}(t,n,w,r)),t.length>80*r){a=u=t[0],i=o=t[1];for(var E=r;E<g;E+=r)(s=t[E])<a&&(a=s),(x=t[E+1])<i&&(i=x),s>u&&(u=s),x>o&&(o=x);l=0!==(l=Math.max(u-a,o-i))?32767/l:0}return function t(n,r,a,i,u,o,s){if(n){!s&&o&&function(t,n,r,a){var i=t;do 0===i.z&&(i.z=v(i.x,i.y,n,r,a)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var n,r,a,i,u,o,s,x,l=1;do{for(r=t,t=null,u=null,o=0;r;){for(o++,a=r,s=0,n=0;n<l&&(s++,a=a.nextZ);n++);for(x=l;s>0||x>0&&a;)0!==s&&(0===x||!a||r.z<=a.z)?(i=r,r=r.nextZ,s--):(i=a,a=a.nextZ,x--),u?u.nextZ=i:t=i,i.prevZ=u,u=i;r=a}u.nextZ=null,l*=2}while(o>1)}(i)}(n,i,u,o);for(var x,l,p=n;n.prev!==n.next;)if(x=n.prev,l=n.next,o?function(t,n,r,a){var i=t.prev,u=t.next;if(d(i,t,u)>=0)return!1;for(var o=i.x,s=t.x,x=u.x,l=i.y,p=t.y,h=u.y,y=o<s?o<x?o:x:s<x?s:x,f=l<p?l<h?l:h:p<h?p:h,m=o>s?o>x?o:x:s>x?s:x,C=l>p?l>h?l:h:p>h?p:h,g=v(y,f,n,r,a),w=v(m,C,n,r,a),A=t.prevZ,b=t.nextZ;A&&A.z>=g&&b&&b.z<=w;){if(A.x>=y&&A.x<=m&&A.y>=f&&A.y<=C&&A!==i&&A!==u&&c(o,l,s,p,x,h,A.x,A.y)&&d(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=y&&b.x<=m&&b.y>=f&&b.y<=C&&b!==i&&b!==u&&c(o,l,s,p,x,h,b.x,b.y)&&d(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=g;){if(A.x>=y&&A.x<=m&&A.y>=f&&A.y<=C&&A!==i&&A!==u&&c(o,l,s,p,x,h,A.x,A.y)&&d(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=w;){if(b.x>=y&&b.x<=m&&b.y>=f&&b.y<=C&&b!==i&&b!==u&&c(o,l,s,p,x,h,b.x,b.y)&&d(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}(n,i,u,o):function(t){var n=t.prev,r=t.next;if(d(n,t,r)>=0)return!1;for(var a=n.x,i=t.x,u=r.x,o=n.y,s=t.y,x=r.y,l=a<i?a<u?a:u:i<u?i:u,p=o<s?o<x?o:x:s<x?s:x,h=a>i?a>u?a:u:i>u?i:u,y=o>s?o>x?o:x:s>x?s:x,f=r.next;f!==n;){if(f.x>=l&&f.x<=h&&f.y>=p&&f.y<=y&&c(a,o,i,s,u,x,f.x,f.y)&&d(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}(n))r.push(x.i/a|0),r.push(n.i/a|0),r.push(l.i/a|0),S(n),n=l.next,p=l.next;else if((n=l)===p){s?1===s?t(n=function(t,n,r){var a=t;do{var i=a.prev,u=a.next.next;!m(i,u)&&C(i,a,a.next,u)&&A(i,u)&&A(u,i)&&(n.push(i.i/r|0),n.push(a.i/r|0),n.push(u.i/r|0),S(a),S(a.next),a=t=u),a=a.next}while(a!==t);return y(a)}(y(n),r,a),r,a,i,u,o,2):2===s&&function(n,r,a,i,u,o){var s=n;do{for(var x,l,p=s.next.next;p!==s.prev;){if(s.i!==p.i&&(x=s,l=p,x.next.i!==l.i&&x.prev.i!==l.i&&!function(t,n){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&C(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}(x,l)&&(A(x,l)&&A(l,x)&&function(t,n){var r=t,a=!1,i=(t.x+n.x)/2,u=(t.y+n.y)/2;do r.y>u!=r.next.y>u&&r.next.y!==r.y&&i<(r.next.x-r.x)*(u-r.y)/(r.next.y-r.y)+r.x&&(a=!a),r=r.next;while(r!==t);return a}(x,l)&&(d(x.prev,x,l.prev)||d(x,l.prev,l))||m(x,l)&&d(x.prev,x,x.next)>0&&d(l.prev,l,l.next)>0))){var h=b(s,p);return s=y(s,s.next),h=y(h,h.next),t(s,r,a,i,u,o,0),void t(h,r,a,i,u,o,0)}p=p.next}s=s.next}while(s!==n)}(n,r,a,i,u,o):t(y(n),r,a,i,u,o,1);break}}}(w,M,r,a,i,l,0),M}function h(t,n,r,a,i){var u,o;if(i===Z(t,n,r,a)>0)for(u=n;u<r;u+=a)o=M(u,t[u],t[u+1],o);else for(u=r-a;u>=n;u-=a)o=M(u,t[u],t[u+1],o);return o&&m(o,o.next)&&(S(o),o=o.next),o}function y(t,n){if(!t)return t;n||(n=t);var r,a=t;do if(r=!1,a.steiner||!m(a,a.next)&&0!==d(a.prev,a,a.next))a=a.next;else{if(S(a),(a=n=a.prev)===a.next)break;r=!0}while(r||a!==n);return n}function f(t,n){return t.x-n.x}function v(t,n,r,a,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*i|0)|t<<8))|t<<4))|t<<2))|t<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-a)*i|0)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function c(t,n,r,a,i,u,o,s){return(i-o)*(n-s)>=(t-o)*(u-s)&&(t-o)*(a-s)>=(r-o)*(n-s)&&(r-o)*(u-s)>=(i-o)*(a-s)}function d(t,n,r){return(n.y-t.y)*(r.x-n.x)-(n.x-t.x)*(r.y-n.y)}function m(t,n){return t.x===n.x&&t.y===n.y}function C(t,n,r,a){var i=w(d(t,n,r)),u=w(d(t,n,a)),o=w(d(r,a,t)),s=w(d(r,a,n));return i!==u&&o!==s||!(0!==i||!g(t,r,n))||!(0!==u||!g(t,a,n))||!(0!==o||!g(r,t,a))||!(0!==s||!g(r,n,a))}function g(t,n,r){return n.x<=Math.max(t.x,r.x)&&n.x>=Math.min(t.x,r.x)&&n.y<=Math.max(t.y,r.y)&&n.y>=Math.min(t.y,r.y)}function w(t){return t>0?1:t<0?-1:0}function A(t,n){return 0>d(t.prev,t,t.next)?d(t,n,t.next)>=0&&d(t,t.prev,n)>=0:0>d(t,n,t.prev)||0>d(t,t.next,n)}function b(t,n){var r=new E(t.i,t.x,t.y),a=new E(n.i,n.x,n.y),i=t.next,u=n.prev;return t.next=n,n.prev=t,r.next=i,i.prev=r,a.next=r,r.prev=a,u.next=a,a.prev=u,a}function M(t,n,r,a){var i=new E(t,n,r);return a?(i.next=a.next,i.prev=a,a.next.prev=i,a.next=i):(i.prev=i,i.next=i),i}function S(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function E(t,n,r){this.i=t,this.x=n,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z(t,n,r,a){for(var i=0,u=n,o=r-a;u<r;u+=a)i+=(t[o]-t[u])*(t[u+1]+t[o+1]),o=u;return i}({get exports(){return l},set exports(e){l=e}}).exports=p,l.default=p,p.deviation=function(t,n,r,a){var i=n&&n.length,u=i?n[0]*r:t.length,o=Math.abs(Z(t,0,u,r));if(i)for(var s=0,x=n.length;s<x;s++){var l=n[s]*r,p=s<x-1?n[s+1]*r:t.length;o-=Math.abs(Z(t,l,p,r))}var h=0;for(s=0;s<a.length;s+=3){var y=a[s]*r,f=a[s+1]*r,v=a[s+2]*r;h+=Math.abs((t[y]-t[v])*(t[f+1]-t[y+1])-(t[y]-t[f])*(t[v+1]-t[y+1]))}return 0===o&&0===h?0:Math.abs((h-o)/o)},p.flatten=function(t){for(var n=t[0][0].length,r={vertices:[],holes:[],dimensions:n},a=0,i=0;i<t.length;i++){for(var u=0;u<t[i].length;u++)for(var o=0;o<n;o++)r.vertices.push(t[i][u][o]);i>0&&(a+=t[i-1].length,r.holes.push(a))}return r};let z={CLOCKWISE:x.WebGLConstants.CW,COUNTER_CLOCKWISE:x.WebGLConstants.CCW,validate:function(t){return t===z.CLOCKWISE||t===z.COUNTER_CLOCKWISE}};var L=Object.freeze(z);let D=new r.Cartesian3,R=new r.Cartesian3,G={computeArea2D:function(t){let n=t.length,r=0;for(let a=n-1,i=0;i<n;a=i++){let n=t[a],u=t[i];r+=n.x*u.y-u.x*n.y}return .5*r},computeWindingOrder2D:function(t){return G.computeArea2D(t)>0?L.COUNTER_CLOCKWISE:L.CLOCKWISE},triangulate:function(t,r){let a=n.Cartesian2.packArray(t);return l(a,r,2)}},O=new r.Cartesian3,T=new r.Cartesian3,B=new r.Cartesian3,W=new r.Cartesian3,P=new r.Cartesian3,$=new r.Cartesian3,I=new r.Cartesian3,N=new n.Cartesian2,U=new n.Cartesian2,_=new n.Cartesian2,K=new n.Cartesian2;G.computeSubdivision=function(t,u,x,l,p){let h;p=i.defaultValue(p,s.CesiumMath.RADIANS_PER_DEGREE);let y=i.defined(l),f=x.slice(0),v=u.length,c=Array(3*v),d=Array(2*v),m=0,C=0;for(h=0;h<v;h++){let t=u[h];if(c[m++]=t.x,c[m++]=t.y,c[m++]=t.z,y){let t=l[h];d[C++]=t.x,d[C++]=t.y}}let g=[],w={},A=t.maximumRadius,b=s.CesiumMath.chordLength(p,A),M=b*b;for(;f.length>0;){let t,a,u,o,s,x;let l=f.pop(),p=f.pop(),v=f.pop(),m=r.Cartesian3.fromArray(c,3*v,O),C=r.Cartesian3.fromArray(c,3*p,T),b=r.Cartesian3.fromArray(c,3*l,B);y&&(t=n.Cartesian2.fromArray(d,2*v,N),a=n.Cartesian2.fromArray(d,2*p,U),u=n.Cartesian2.fromArray(d,2*l,_));let S=r.Cartesian3.multiplyByScalar(r.Cartesian3.normalize(m,W),A,W),E=r.Cartesian3.multiplyByScalar(r.Cartesian3.normalize(C,P),A,P),Z=r.Cartesian3.multiplyByScalar(r.Cartesian3.normalize(b,$),A,$),z=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(S,E,I)),L=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(E,Z,I)),D=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(Z,S,I)),R=Math.max(z,L,D);R>M?z===R?(h=w[o=`${Math.min(v,p)} ${Math.max(v,p)}`],i.defined(h)||(s=r.Cartesian3.add(m,C,I),r.Cartesian3.multiplyByScalar(s,.5,s),c.push(s.x,s.y,s.z),h=c.length/3-1,w[o]=h,y&&(x=n.Cartesian2.add(t,a,K),n.Cartesian2.multiplyByScalar(x,.5,x),d.push(x.x,x.y))),f.push(v,h,l),f.push(h,p,l)):L===R?(h=w[o=`${Math.min(p,l)} ${Math.max(p,l)}`],i.defined(h)||(s=r.Cartesian3.add(C,b,I),r.Cartesian3.multiplyByScalar(s,.5,s),c.push(s.x,s.y,s.z),h=c.length/3-1,w[o]=h,y&&(x=n.Cartesian2.add(a,u,K),n.Cartesian2.multiplyByScalar(x,.5,x),d.push(x.x,x.y))),f.push(p,h,v),f.push(h,l,v)):D===R&&(h=w[o=`${Math.min(l,v)} ${Math.max(l,v)}`],i.defined(h)||(s=r.Cartesian3.add(b,m,I),r.Cartesian3.multiplyByScalar(s,.5,s),c.push(s.x,s.y,s.z),h=c.length/3-1,w[o]=h,y&&(x=n.Cartesian2.add(u,t,K),n.Cartesian2.multiplyByScalar(x,.5,x),d.push(x.x,x.y))),f.push(l,h,p),f.push(h,v,p)):(g.push(v),g.push(p),g.push(l))}let S={attributes:{position:new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c})},indices:g,primitiveType:o.PrimitiveType.TRIANGLES};return y&&(S.attributes.st=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})),new o.Geometry(S)};let V=new r.Cartographic,F=new r.Cartographic,k=new r.Cartographic,q=new r.Cartographic;G.computeRhumbLineSubdivision=function(t,x,l,p,h){let y;h=i.defaultValue(h,s.CesiumMath.RADIANS_PER_DEGREE);let f=i.defined(p),v=l.slice(0),c=x.length,d=Array(3*c),m=Array(2*c),C=0,g=0;for(y=0;y<c;y++){let t=x[y];if(d[C++]=t.x,d[C++]=t.y,d[C++]=t.z,f){let t=p[y];m[g++]=t.x,m[g++]=t.y}}let w=[],A={},b=t.maximumRadius,M=s.CesiumMath.chordLength(h,b),S=new u.EllipsoidRhumbLine(void 0,void 0,t),E=new u.EllipsoidRhumbLine(void 0,void 0,t),Z=new u.EllipsoidRhumbLine(void 0,void 0,t);for(;v.length>0;){let a,u,o,s,x,l,p,h;let c=v.pop(),C=v.pop(),g=v.pop(),b=r.Cartesian3.fromArray(d,3*g,O),z=r.Cartesian3.fromArray(d,3*C,T),L=r.Cartesian3.fromArray(d,3*c,B);f&&(a=n.Cartesian2.fromArray(m,2*g,N),u=n.Cartesian2.fromArray(m,2*C,U),o=n.Cartesian2.fromArray(m,2*c,_));let D=t.cartesianToCartographic(b,V),R=t.cartesianToCartographic(z,F),G=t.cartesianToCartographic(L,k);S.setEndPoints(D,R);let W=S.surfaceDistance;E.setEndPoints(R,G);let P=E.surfaceDistance;Z.setEndPoints(G,D);let $=Z.surfaceDistance,j=Math.max(W,P,$);j>M?W===j?(y=A[s=`${Math.min(g,C)} ${Math.max(g,C)}`],i.defined(y)||(x=S.interpolateUsingFraction(.5,q),l=.5*(D.height+R.height),p=r.Cartesian3.fromRadians(x.longitude,x.latitude,l,t,I),d.push(p.x,p.y,p.z),y=d.length/3-1,A[s]=y,f&&(h=n.Cartesian2.add(a,u,K),n.Cartesian2.multiplyByScalar(h,.5,h),m.push(h.x,h.y))),v.push(g,y,c),v.push(y,C,c)):P===j?(y=A[s=`${Math.min(C,c)} ${Math.max(C,c)}`],i.defined(y)||(x=E.interpolateUsingFraction(.5,q),l=.5*(R.height+G.height),p=r.Cartesian3.fromRadians(x.longitude,x.latitude,l,t,I),d.push(p.x,p.y,p.z),y=d.length/3-1,A[s]=y,f&&(h=n.Cartesian2.add(u,o,K),n.Cartesian2.multiplyByScalar(h,.5,h),m.push(h.x,h.y))),v.push(C,y,g),v.push(y,c,g)):$===j&&(y=A[s=`${Math.min(c,g)} ${Math.max(c,g)}`],i.defined(y)||(x=Z.interpolateUsingFraction(.5,q),l=.5*(G.height+D.height),p=r.Cartesian3.fromRadians(x.longitude,x.latitude,l,t,I),d.push(p.x,p.y,p.z),y=d.length/3-1,A[s]=y,f&&(h=n.Cartesian2.add(o,a,K),n.Cartesian2.multiplyByScalar(h,.5,h),m.push(h.x,h.y))),v.push(c,y,C),v.push(y,g,C)):(w.push(g),w.push(C),w.push(c))}let z={attributes:{position:new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d})},indices:w,primitiveType:o.PrimitiveType.TRIANGLES};return f&&(z.attributes.st=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:m})),new o.Geometry(z)},G.scaleToGeodeticHeight=function(t,n,a,u){a=i.defaultValue(a,r.Ellipsoid.WGS84);let o=D,s=R;if(n=i.defaultValue(n,0),u=i.defaultValue(u,!0),i.defined(t)){let i=t.length;for(let x=0;x<i;x+=3)r.Cartesian3.fromArray(t,x,s),u&&(s=a.scaleToGeodeticSurface(s,s)),0!==n&&(o=a.geodeticSurfaceNormal(s,o),r.Cartesian3.multiplyByScalar(o,n,o),r.Cartesian3.add(s,o,s)),t[x]=s.x,t[x+1]=s.y,t[x+2]=s.z}return t},t.PolygonPipeline=G,t.WindingOrder=L});