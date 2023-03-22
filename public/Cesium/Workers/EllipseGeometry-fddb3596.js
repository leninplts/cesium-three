define(["exports","./Transforms-fce95115","./Matrix2-413c4048","./Matrix3-81054f0f","./ComponentDatatype-ab629b88","./defaultValue-f6d5e6da","./EllipseGeometryLibrary-08d055cc","./GeometryAttribute-81ff775c","./GeometryAttributes-1e4ddcd2","./GeometryInstance-0318e0cd","./GeometryOffsetAttribute-2579b8d2","./GeometryPipeline-e049e700","./IndexDatatype-d3db4e7d","./Math-2ce22ee9","./VertexFormat-fbdec922"],function(e,t,i,r,a,n,o,s,l,u,m,p,c,y,d){"use strict";let f=new r.Cartesian3,A=new r.Cartesian3,x=new r.Cartesian3,h=new r.Cartesian3,g=new i.Cartesian2,_=new r.Matrix3,b=new r.Matrix3,C=new t.Quaternion,w=new r.Cartesian3,M=new r.Cartesian3,E=new r.Cartesian3,I=new r.Cartographic,T=new r.Cartesian3,G=new i.Cartesian2,N=new i.Cartesian2;function P(e,u,p){let c=u.vertexFormat,y=u.center,d=u.semiMajorAxis,h=u.semiMinorAxis,P=u.ellipsoid,v=u.stRotation,V=p?e.length/3*2:e.length/3,F=u.shadowVolume,D=c.st?new Float32Array(2*V):void 0,O=c.normal?new Float32Array(3*V):void 0,S=c.tangent?new Float32Array(3*V):void 0,L=c.bitangent?new Float32Array(3*V):void 0,R=F?new Float32Array(3*V):void 0,j=0,z=w,k=M,B=E,Y=new t.GeographicProjection(P),H=Y.project(P.cartesianToCartographic(y,I),T),U=P.scaleToGeodeticSurface(y,f);P.geodeticSurfaceNormal(U,U);let Q=_,W=b;if(0!==v){let e=t.Quaternion.fromAxisAngle(U,v,C);Q=r.Matrix3.fromQuaternion(e,Q),e=t.Quaternion.fromAxisAngle(U,-v,C),W=r.Matrix3.fromQuaternion(e,W)}else Q=r.Matrix3.clone(r.Matrix3.IDENTITY,Q),W=r.Matrix3.clone(r.Matrix3.IDENTITY,W);let J=i.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,G),q=i.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,N),Z=e.length,K=p?Z:0,X=K/3*2;for(let t=0;t<Z;t+=3){let i=t+1,a=t+2,n=r.Cartesian3.fromArray(e,t,f);if(c.st){let e=r.Matrix3.multiplyByVector(Q,n,A),t=Y.project(P.cartesianToCartographic(e,I),x);r.Cartesian3.subtract(t,H,t),g.x=(t.x+d)/(2*d),g.y=(t.y+h)/(2*h),J.x=Math.min(g.x,J.x),J.y=Math.min(g.y,J.y),q.x=Math.max(g.x,q.x),q.y=Math.max(g.y,q.y),p&&(D[j+X]=g.x,D[j+1+X]=g.y),D[j++]=g.x,D[j++]=g.y}(c.normal||c.tangent||c.bitangent||F)&&(z=P.geodeticSurfaceNormal(n,z),F&&(R[t+K]=-z.x,R[i+K]=-z.y,R[a+K]=-z.z),(c.normal||c.tangent||c.bitangent)&&((c.tangent||c.bitangent)&&(k=r.Cartesian3.normalize(r.Cartesian3.cross(r.Cartesian3.UNIT_Z,z,k),k),r.Matrix3.multiplyByVector(W,k,k)),c.normal&&(O[t]=z.x,O[i]=z.y,O[a]=z.z,p&&(O[t+K]=-z.x,O[i+K]=-z.y,O[a+K]=-z.z)),c.tangent&&(S[t]=k.x,S[i]=k.y,S[a]=k.z,p&&(S[t+K]=-k.x,S[i+K]=-k.y,S[a+K]=-k.z)),c.bitangent&&(B=r.Cartesian3.normalize(r.Cartesian3.cross(z,k,B),B),L[t]=B.x,L[i]=B.y,L[a]=B.z,p&&(L[t+K]=B.x,L[i+K]=B.y,L[a+K]=B.z))))}if(c.st){Z=D.length;for(let e=0;e<Z;e+=2)D[e]=(D[e]-J.x)/(q.x-J.x),D[e+1]=(D[e+1]-J.y)/(q.y-J.y)}let $=new l.GeometryAttributes;if(c.position){let t=o.EllipseGeometryLibrary.raisePositionsToHeight(e,u,p);$.position=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:t})}if(c.st&&($.st=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),c.normal&&($.normal=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),c.tangent&&($.tangent=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),c.bitangent&&($.bitangent=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:L})),F&&($.extrudeDirection=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})),p&&n.defined(u.offsetAttribute)){let e=new Uint8Array(V);if(u.offsetAttribute===m.GeometryOffsetAttribute.TOP)e=e.fill(1,0,V/2);else{let t=u.offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1;e=e.fill(t)}$.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return $}function v(e){let t=Array(e*(e+1)*12-6),i,r,a,n,o,s=0;for(i=0,a=1,n=0;n<3;n++)t[s++]=a++,t[s++]=i,t[s++]=a;for(n=2;n<e+1;++n){for(a=n*(n+1)-1,i=(n-1)*n-1,t[s++]=a++,t[s++]=i,t[s++]=a,r=2*n,o=0;o<r-1;++o)t[s++]=a,t[s++]=i++,t[s++]=i,t[s++]=a++,t[s++]=i,t[s++]=a;t[s++]=a++,t[s++]=i,t[s++]=a}for(r=2*e,++a,++i,n=0;n<r-1;++n)t[s++]=a,t[s++]=i++,t[s++]=i,t[s++]=a++,t[s++]=i,t[s++]=a;for(t[s++]=a,t[s++]=i++,t[s++]=i,t[s++]=a++,t[s++]=i++,t[s++]=i,++i,n=e-1;n>1;--n){for(t[s++]=i++,t[s++]=i,t[s++]=a,r=2*n,o=0;o<r-1;++o)t[s++]=a,t[s++]=i++,t[s++]=i,t[s++]=a++,t[s++]=i,t[s++]=a;t[s++]=i++,t[s++]=i++,t[s++]=a++}for(n=0;n<3;n++)t[s++]=i++,t[s++]=i,t[s++]=a;return t}let V=new r.Cartesian3,F=new t.BoundingSphere,D=new t.BoundingSphere;function O(e,t,a,n,s,l,u){let m=o.EllipseGeometryLibrary.computeEllipsePositions({center:e,semiMajorAxis:t,semiMinorAxis:a,rotation:n,granularity:s},!1,!0).outerPositions,p=m.length/3,c=Array(p);for(let e=0;e<p;++e)c[e]=r.Cartesian3.fromArray(m,3*e);let d=i.Rectangle.fromCartesianArray(c,l,u);return d.width>y.CesiumMath.PI&&(d.north=d.north>0?y.CesiumMath.PI_OVER_TWO-y.CesiumMath.EPSILON7:d.north,d.south=d.south<0?y.CesiumMath.EPSILON7-y.CesiumMath.PI_OVER_TWO:d.south,d.east=y.CesiumMath.PI,d.west=-y.CesiumMath.PI),d}function S(e){let t=(e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT)).center,i=n.defaultValue(e.ellipsoid,r.Ellipsoid.WGS84),a=e.semiMajorAxis,o=e.semiMinorAxis,s=n.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),l=n.defaultValue(e.vertexFormat,d.VertexFormat.DEFAULT),u=n.defaultValue(e.height,0),m=n.defaultValue(e.extrudedHeight,u);this._center=r.Cartesian3.clone(t),this._semiMajorAxis=a,this._semiMinorAxis=o,this._ellipsoid=r.Ellipsoid.clone(i),this._rotation=n.defaultValue(e.rotation,0),this._stRotation=n.defaultValue(e.stRotation,0),this._height=Math.max(m,u),this._granularity=s,this._vertexFormat=d.VertexFormat.clone(l),this._extrudedHeight=Math.min(m,u),this._shadowVolume=n.defaultValue(e.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=e.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}S.packedLength=r.Cartesian3.packedLength+r.Ellipsoid.packedLength+d.VertexFormat.packedLength+9,S.pack=function(e,t,i){return i=n.defaultValue(i,0),r.Cartesian3.pack(e._center,t,i),i+=r.Cartesian3.packedLength,r.Ellipsoid.pack(e._ellipsoid,t,i),i+=r.Ellipsoid.packedLength,d.VertexFormat.pack(e._vertexFormat,t,i),i+=d.VertexFormat.packedLength,t[i++]=e._semiMajorAxis,t[i++]=e._semiMinorAxis,t[i++]=e._rotation,t[i++]=e._stRotation,t[i++]=e._height,t[i++]=e._granularity,t[i++]=e._extrudedHeight,t[i++]=e._shadowVolume?1:0,t[i]=n.defaultValue(e._offsetAttribute,-1),t};let L=new r.Cartesian3,R=new r.Ellipsoid,j=new d.VertexFormat,z={center:L,ellipsoid:R,vertexFormat:j,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};S.unpack=function(e,t,i){t=n.defaultValue(t,0);let a=r.Cartesian3.unpack(e,t,L);t+=r.Cartesian3.packedLength;let o=r.Ellipsoid.unpack(e,t,R);t+=r.Ellipsoid.packedLength;let s=d.VertexFormat.unpack(e,t,j);t+=d.VertexFormat.packedLength;let l=e[t++],u=e[t++],m=e[t++],p=e[t++],c=e[t++],y=e[t++],f=e[t++],A=1===e[t++],x=e[t];return n.defined(i)?(i._center=r.Cartesian3.clone(a,i._center),i._ellipsoid=r.Ellipsoid.clone(o,i._ellipsoid),i._vertexFormat=d.VertexFormat.clone(s,i._vertexFormat),i._semiMajorAxis=l,i._semiMinorAxis=u,i._rotation=m,i._stRotation=p,i._height=c,i._granularity=y,i._extrudedHeight=f,i._shadowVolume=A,i._offsetAttribute=-1===x?void 0:x,i):(z.height=c,z.extrudedHeight=f,z.granularity=y,z.stRotation=p,z.rotation=m,z.semiMajorAxis=l,z.semiMinorAxis=u,z.shadowVolume=A,z.offsetAttribute=-1===x?void 0:x,new S(z))},S.computeRectangle=function(e,t){let i=(e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT)).center,a=n.defaultValue(e.ellipsoid,r.Ellipsoid.WGS84),o=e.semiMajorAxis,s=e.semiMinorAxis,l=n.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE);return O(i,o,s,n.defaultValue(e.rotation,0),l,a,t)},S.createGeometry=function(e){let d;if(e._semiMajorAxis<=0||e._semiMinorAxis<=0)return;let b=e._height,O=e._extrudedHeight,S=!y.CesiumMath.equalsEpsilon(b,O,0,y.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);let L={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:b,granularity:e._granularity,vertexFormat:e._vertexFormat,stRotation:e._stRotation};if(S)L.extrudedHeight=O,L.shadowVolume=e._shadowVolume,L.offsetAttribute=e._offsetAttribute,d=function(e){let y=e.center,d=e.ellipsoid,b=e.semiMajorAxis,V=r.Cartesian3.multiplyByScalar(d.geodeticSurfaceNormal(y,f),e.height,f);F.center=r.Cartesian3.add(y,V,F.center),F.radius=b,V=r.Cartesian3.multiplyByScalar(d.geodeticSurfaceNormal(y,V),e.extrudedHeight,V),D.center=r.Cartesian3.add(y,V,D.center),D.radius=b;let O=o.EllipseGeometryLibrary.computeEllipsePositions(e,!0,!0),S=O.positions,L=O.numPts,R=O.outerPositions,j=t.BoundingSphere.union(F,D),z=P(S,e,!0),k=v(L),B=k.length;k.length=2*B;let Y=S.length/3;for(let e=0;e<B;e+=3)k[e+B]=k[e+2]+Y,k[e+1+B]=k[e+1]+Y,k[e+2+B]=k[e]+Y;let H=c.IndexDatatype.createTypedArray(2*Y/3,k),U=new s.Geometry({attributes:z,indices:H,primitiveType:s.PrimitiveType.TRIANGLES}),Q=function(e,o){let u=o.vertexFormat,p=o.center,c=o.semiMajorAxis,y=o.semiMinorAxis,d=o.ellipsoid,b=o.height,P=o.extrudedHeight,v=o.stRotation,V=e.length/3*2,F=new Float64Array(3*V),D=u.st?new Float32Array(2*V):void 0,O=u.normal?new Float32Array(3*V):void 0,S=u.tangent?new Float32Array(3*V):void 0,L=u.bitangent?new Float32Array(3*V):void 0,R=o.shadowVolume,j=R?new Float32Array(3*V):void 0,z=0,k=w,B=M,Y=E,H=new t.GeographicProjection(d),U=H.project(d.cartesianToCartographic(p,I),T),Q=d.scaleToGeodeticSurface(p,f);d.geodeticSurfaceNormal(Q,Q);let W=t.Quaternion.fromAxisAngle(Q,v,C),J=r.Matrix3.fromQuaternion(W,_),q=i.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,G),Z=i.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,N),K=e.length,X=K/3*2;for(let t=0;t<K;t+=3){let i=t+1,a=t+2,n,o=r.Cartesian3.fromArray(e,t,f);if(u.st){let e=r.Matrix3.multiplyByVector(J,o,A),t=H.project(d.cartesianToCartographic(e,I),x);r.Cartesian3.subtract(t,U,t),g.x=(t.x+c)/(2*c),g.y=(t.y+y)/(2*y),q.x=Math.min(g.x,q.x),q.y=Math.min(g.y,q.y),Z.x=Math.max(g.x,Z.x),Z.y=Math.max(g.y,Z.y),D[z+X]=g.x,D[z+1+X]=g.y,D[z++]=g.x,D[z++]=g.y}o=d.scaleToGeodeticSurface(o,o),n=r.Cartesian3.clone(o,A),k=d.geodeticSurfaceNormal(o,k),R&&(j[t+K]=-k.x,j[i+K]=-k.y,j[a+K]=-k.z);let s=r.Cartesian3.multiplyByScalar(k,b,h);if(o=r.Cartesian3.add(o,s,o),s=r.Cartesian3.multiplyByScalar(k,P,s),n=r.Cartesian3.add(n,s,n),u.position&&(F[t+K]=n.x,F[i+K]=n.y,F[a+K]=n.z,F[t]=o.x,F[i]=o.y,F[a]=o.z),u.normal||u.tangent||u.bitangent){Y=r.Cartesian3.clone(k,Y);let s=r.Cartesian3.fromArray(e,(t+3)%K,h);r.Cartesian3.subtract(s,o,s);let l=r.Cartesian3.subtract(n,o,x);k=r.Cartesian3.normalize(r.Cartesian3.cross(l,s,k),k),u.normal&&(O[t]=k.x,O[i]=k.y,O[a]=k.z,O[t+K]=k.x,O[i+K]=k.y,O[a+K]=k.z),u.tangent&&(B=r.Cartesian3.normalize(r.Cartesian3.cross(Y,k,B),B),S[t]=B.x,S[i]=B.y,S[a]=B.z,S[t+K]=B.x,S[t+1+K]=B.y,S[t+2+K]=B.z),u.bitangent&&(L[t]=Y.x,L[i]=Y.y,L[a]=Y.z,L[t+K]=Y.x,L[i+K]=Y.y,L[a+K]=Y.z)}}if(u.st){K=D.length;for(let e=0;e<K;e+=2)D[e]=(D[e]-q.x)/(Z.x-q.x),D[e+1]=(D[e+1]-q.y)/(Z.y-q.y)}let $=new l.GeometryAttributes;if(u.position&&($.position=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F})),u.st&&($.st=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),u.normal&&($.normal=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),u.tangent&&($.tangent=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),u.bitangent&&($.bitangent=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:L})),R&&($.extrudeDirection=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),n.defined(o.offsetAttribute)){let e=new Uint8Array(V);if(o.offsetAttribute===m.GeometryOffsetAttribute.TOP)e=e.fill(1,0,V/2);else{let t=o.offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1;e=e.fill(t)}$.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return $}(R,e);k=function(e){let t=e.length/3,i=c.IndexDatatype.createTypedArray(t,6*t),r=0;for(let e=0;e<t;e++){let a=e,n=e+t,o=(a+1)%t,s=o+t;i[r++]=a,i[r++]=n,i[r++]=o,i[r++]=o,i[r++]=n,i[r++]=s}return i}(R);let W=c.IndexDatatype.createTypedArray(2*R.length/3,k),J=new s.Geometry({attributes:Q,indices:W,primitiveType:s.PrimitiveType.TRIANGLES}),q=p.GeometryPipeline.combineInstances([new u.GeometryInstance({geometry:U}),new u.GeometryInstance({geometry:J})]);return{boundingSphere:j,attributes:q[0].attributes,indices:q[0].indices}}(L);else if(d=function(e){let i=e.center;V=r.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(i,V),e.height,V),V=r.Cartesian3.add(i,V,V);let a=new t.BoundingSphere(V,e.semiMajorAxis),n=o.EllipseGeometryLibrary.computeEllipsePositions(e,!0,!1),s=n.positions,l=n.numPts,u=P(s,e,!1),m=v(l);return{boundingSphere:a,attributes:u,indices:m=c.IndexDatatype.createTypedArray(s.length/3,m)}}(L),n.defined(e._offsetAttribute)){let t=d.attributes.position.values.length,i=e._offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1,r=new Uint8Array(t/3).fill(i);d.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}return new s.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:d.boundingSphere,offsetAttribute:e._offsetAttribute})},S.createShadowVolume=function(e,t,i){let r=e._granularity,a=e._ellipsoid,n=t(r,a),o=i(r,a);return new S({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:a,rotation:e._rotation,stRotation:e._stRotation,granularity:r,extrudedHeight:n,height:o,vertexFormat:d.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(S.prototype,{rectangle:{get:function(){return n.defined(this._rectangle)||(this._rectangle=O(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return n.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){let t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];let i=o.EllipseGeometryLibrary.computeEllipsePositions({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,rotation:e._rotation,granularity:e._granularity},!1,!0).outerPositions,a=i.length/3,n=Array(a);for(let e=0;e<a;++e)n[e]=r.Cartesian3.fromArray(i,3*e);let l=e._ellipsoid,u=e.rectangle;return s.Geometry._textureCoordinateRotationPoints(n,t,l,u)}(this)),this._textureCoordinateRotationPoints}}}),e.EllipseGeometry=S});