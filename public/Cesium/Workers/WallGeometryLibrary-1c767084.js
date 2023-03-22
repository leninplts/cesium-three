define(["exports","./arrayRemoveDuplicates-9b636830","./Matrix3-81054f0f","./defaultValue-f6d5e6da","./Math-2ce22ee9","./PolylinePipeline-8495667b"],function(e,t,i,o,n,l){"use strict";let r={},a=new i.Cartographic,s=new i.Cartographic,h=[,,],g=[,,],u={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};r.computePositions=function(e,r,p,d,c,f){let m,y;let P=function(e,l,r,h){let g=(l=t.arrayRemoveDuplicates(l,i.Cartesian3.equalsEpsilon)).length;if(g<2)return;let u=o.defined(h),p=o.defined(r),d=Array(g),c=Array(g),f=Array(g),m=l[0];d[0]=m;let y=e.cartesianToCartographic(m,a);p&&(y.height=r[0]),c[0]=y.height,f[0]=u?h[0]:0;let P=c[0]===f[0],C=1;for(let t=1;t<g;++t){let o=l[t],a=e.cartesianToCartographic(o,s);p&&(a.height=r[t]),P=P&&0===a.height,n.CesiumMath.equalsEpsilon(y.latitude,a.latitude,n.CesiumMath.EPSILON10)&&n.CesiumMath.equalsEpsilon(y.longitude,a.longitude,n.CesiumMath.EPSILON10)?y.height<a.height&&(c[C-1]=a.height):(d[C]=o,c[C]=a.height,f[C]=u?h[t]:0,P=P&&c[C]===f[C],i.Cartographic.clone(a,y),++C)}return P||C<2?void 0:(d.length=C,c.length=C,f.length=C,{positions:d,topHeights:c,bottomHeights:f})}(e,r,p,d);if(!o.defined(P))return;r=P.positions,p=P.topHeights,d=P.bottomHeights;let C=r.length,A=n.CesiumMath.chordLength(c,e.maximumRadius),b=u;if(b.minDistance=A,b.ellipsoid=e,f){let e,t=0;for(e=0;e<C-1;e++)t+=l.PolylinePipeline.numberOfPoints(r[e],r[e+1],A)+1;m=new Float64Array(3*t),y=new Float64Array(3*t);let i=h,o=g;b.positions=i,b.height=o;let n=0;for(e=0;e<C-1;e++){i[0]=r[e],i[1]=r[e+1],o[0]=p[e],o[1]=p[e+1];let t=l.PolylinePipeline.generateArc(b);m.set(t,n),o[0]=d[e],o[1]=d[e+1],y.set(l.PolylinePipeline.generateArc(b),n),n+=t.length}}else b.positions=r,b.height=p,m=new Float64Array(l.PolylinePipeline.generateArc(b)),b.height=d,y=new Float64Array(l.PolylinePipeline.generateArc(b));return{bottomPositions:y,topPositions:m,numCorners:C-2}},e.WallGeometryLibrary=r});