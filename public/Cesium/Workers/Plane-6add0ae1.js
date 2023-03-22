define(["exports","./Matrix3-81054f0f","./Matrix2-413c4048","./defaultValue-f6d5e6da"],function(e,n,a,t){"use strict";function r(e,a){this.normal=n.Cartesian3.clone(e),this.distance=a}r.fromPointNormal=function(e,a,i){let s=-n.Cartesian3.dot(a,e);return t.defined(i)?(n.Cartesian3.clone(a,i.normal),i.distance=s,i):new r(a,s)};let i=new n.Cartesian3;r.fromCartesian4=function(e,a){let s=n.Cartesian3.fromCartesian4(e,i),o=e.w;return t.defined(a)?(n.Cartesian3.clone(s,a.normal),a.distance=o,a):new r(s,o)},r.getPointDistance=function(e,a){return n.Cartesian3.dot(e.normal,a)+e.distance};let s=new n.Cartesian3;r.projectPointOntoPlane=function(e,a,i){t.defined(i)||(i=new n.Cartesian3);let o=r.getPointDistance(e,a),l=n.Cartesian3.multiplyByScalar(e.normal,o,s);return n.Cartesian3.subtract(a,l,i)};let o=new a.Matrix4,l=new a.Cartesian4,c=new n.Cartesian3;r.transform=function(e,t,i){let s=e.normal,f=e.distance,d=a.Matrix4.inverseTranspose(t,o),C=a.Cartesian4.fromElements(s.x,s.y,s.z,f,l);C=a.Matrix4.multiplyByVector(d,C,C);let u=n.Cartesian3.fromCartesian4(C,c);return C=a.Cartesian4.divideByScalar(C,n.Cartesian3.magnitude(u),C),r.fromCartesian4(C,i)},r.clone=function(e,a){return t.defined(a)?(n.Cartesian3.clone(e.normal,a.normal),a.distance=e.distance,a):new r(e.normal,e.distance)},r.equals=function(e,a){return e.distance===a.distance&&n.Cartesian3.equals(e.normal,a.normal)},r.ORIGIN_XY_PLANE=Object.freeze(new r(n.Cartesian3.UNIT_Z,0)),r.ORIGIN_YZ_PLANE=Object.freeze(new r(n.Cartesian3.UNIT_X,0)),r.ORIGIN_ZX_PLANE=Object.freeze(new r(n.Cartesian3.UNIT_Y,0)),e.Plane=r});