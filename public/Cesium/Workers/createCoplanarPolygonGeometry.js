define(["./arrayRemoveDuplicates-9b636830","./BoundingRectangle-2379df5a","./Transforms-fce95115","./Matrix2-413c4048","./Matrix3-81054f0f","./ComponentDatatype-ab629b88","./CoplanarPolygonGeometryLibrary-9cff5a6c","./defaultValue-f6d5e6da","./GeometryAttribute-81ff775c","./GeometryAttributes-1e4ddcd2","./GeometryInstance-0318e0cd","./GeometryPipeline-e049e700","./IndexDatatype-d3db4e7d","./Math-2ce22ee9","./PolygonGeometryLibrary-003d1689","./PolygonPipeline-61ca1579","./VertexFormat-fbdec922","./combine-0c102d93","./RuntimeError-9b4ce3fb","./WebGLConstants-7f557f93","./OrientedBoundingBox-cfd17917","./EllipsoidTangentPlane-82f2a887","./AxisAlignedBoundingBox-39ab50d0","./IntersectionTests-357c3d7f","./Plane-6add0ae1","./AttributeCompression-48e336db","./EncodedCartesian3-5e2017ab","./ArcType-26a3f38d","./EllipsoidRhumbLine-77eff028"],function(e,t,n,o,a,r,i,l,s,y,p,c,d,u,m,g,f,b,C,h,x,P,A,L,w,G,F,v,E){"use strict";let _=new a.Cartesian3,T=new t.BoundingRectangle,k=new o.Cartesian2,D=new o.Cartesian2,V=new a.Cartesian3,R=new a.Cartesian3,H=new a.Cartesian3,I=new a.Cartesian3,M=new a.Cartesian3,B=new a.Cartesian3,O=new n.Quaternion,z=new a.Matrix3,S=new a.Matrix3,N=new a.Cartesian3;function Q(e){let t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=e.textureCoordinates,r=l.defaultValue(e.vertexFormat,f.VertexFormat.DEFAULT);this._vertexFormat=f.VertexFormat.clone(r),this._polygonHierarchy=t,this._stRotation=l.defaultValue(e.stRotation,0),this._ellipsoid=a.Ellipsoid.clone(l.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=m.PolygonGeometryLibrary.computeHierarchyPackedLength(t,a.Cartesian3)+f.VertexFormat.packedLength+a.Ellipsoid.packedLength+(l.defined(n)?m.PolygonGeometryLibrary.computeHierarchyPackedLength(n,o.Cartesian2):1)+2}Q.fromPositions=function(e){return new Q({polygonHierarchy:{positions:(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid,textureCoordinates:e.textureCoordinates})},Q.pack=function(e,t,n){return n=l.defaultValue(n,0),n=m.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n,a.Cartesian3),a.Ellipsoid.pack(e._ellipsoid,t,n),n+=a.Ellipsoid.packedLength,f.VertexFormat.pack(e._vertexFormat,t,n),n+=f.VertexFormat.packedLength,t[n++]=e._stRotation,l.defined(e._textureCoordinates)?n=m.PolygonGeometryLibrary.packPolygonHierarchy(e._textureCoordinates,t,n,o.Cartesian2):t[n++]=-1,t[n++]=e.packedLength,t};let j=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),U=new f.VertexFormat,Y={polygonHierarchy:{}};return Q.unpack=function(e,t,n){t=l.defaultValue(t,0);let r=m.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,a.Cartesian3);t=r.startingIndex,delete r.startingIndex;let i=a.Ellipsoid.unpack(e,t,j);t+=a.Ellipsoid.packedLength;let s=f.VertexFormat.unpack(e,t,U);t+=f.VertexFormat.packedLength;let y=e[t++],p=-1===e[t]?void 0:m.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,o.Cartesian2);l.defined(p)?(t=p.startingIndex,delete p.startingIndex):t++;let c=e[t++];return l.defined(n)||(n=new Q(Y)),n._polygonHierarchy=r,n._ellipsoid=a.Ellipsoid.clone(i,n._ellipsoid),n._vertexFormat=f.VertexFormat.clone(s,n._vertexFormat),n._stRotation=y,n._textureCoordinates=p,n.packedLength=c,n},Q.createGeometry=function(t){let f=t._vertexFormat,b=t._polygonHierarchy,C=t._stRotation,h=t._textureCoordinates,x=l.defined(h),P=b.positions;if((P=e.arrayRemoveDuplicates(P,a.Cartesian3.equalsEpsilon,!0)).length<3)return;let A=V,L=R,w=H,G=M;if(!i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(P,I,G,B))return;if(A=a.Cartesian3.cross(G,B,A),A=a.Cartesian3.normalize(A,A),!a.Cartesian3.equalsEpsilon(I,a.Cartesian3.ZERO,u.CesiumMath.EPSILON6)){let e=t._ellipsoid.geodeticSurfaceNormal(I,N);0>a.Cartesian3.dot(A,e)&&(A=a.Cartesian3.negate(A,A),G=a.Cartesian3.negate(G,G))}let F=i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(I,G,B),v=i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(I,G,B);f.tangent&&(L=a.Cartesian3.clone(G,L)),f.bitangent&&(w=a.Cartesian3.clone(B,w));let E=m.PolygonGeometryLibrary.polygonsFromHierarchy(b,x,F,!1),Q=E.hierarchy,j=E.polygons,U=x?m.PolygonGeometryLibrary.polygonsFromHierarchy(h,!0,function(e){return e},!1).polygons:void 0;if(0===Q.length)return;P=Q[0].outerRing;let Y=n.BoundingSphere.fromPoints(P),q=m.PolygonGeometryLibrary.computeBoundingRectangle(A,v,P,C,T),J=[];for(let e=0;e<j.length;e++){let t=new p.GeometryInstance({geometry:function(e,t,i,p,c,m,f,b,C){let h=e.positions,x=g.PolygonPipeline.triangulate(e.positions2D,e.holes);x.length<3&&(x=[0,1,2]);let P=d.IndexDatatype.createTypedArray(h.length,x.length);P.set(x);let A=z;if(0!==p){let e=n.Quaternion.fromAxisAngle(f,p,O);if(A=a.Matrix3.fromQuaternion(e,A),t.tangent||t.bitangent){e=n.Quaternion.fromAxisAngle(f,-p,O);let o=a.Matrix3.fromQuaternion(e,S);b=a.Cartesian3.normalize(a.Matrix3.multiplyByVector(o,b,b),b),t.bitangent&&(C=a.Cartesian3.normalize(a.Cartesian3.cross(f,b,C),C))}}else A=a.Matrix3.clone(a.Matrix3.IDENTITY,A);let L=D;t.st&&(L.x=i.x,L.y=i.y);let w=h.length,G=3*w,F=new Float64Array(G),v=t.normal?new Float32Array(G):void 0,E=t.tangent?new Float32Array(G):void 0,T=t.bitangent?new Float32Array(G):void 0,V=t.st?new Float32Array(2*w):void 0,R=0,H=0,I=0,M=0,B=0;for(let e=0;e<w;e++){let n=h[e];if(F[R++]=n.x,F[R++]=n.y,F[R++]=n.z,t.st){if(l.defined(c)&&c.positions.length===w)V[B++]=c.positions[e].x,V[B++]=c.positions[e].y;else{let e=m(a.Matrix3.multiplyByVector(A,n,_),k);o.Cartesian2.subtract(e,L,e);let t=u.CesiumMath.clamp(e.x/i.width,0,1),r=u.CesiumMath.clamp(e.y/i.height,0,1);V[B++]=t,V[B++]=r}}t.normal&&(v[H++]=f.x,v[H++]=f.y,v[H++]=f.z),t.tangent&&(E[M++]=b.x,E[M++]=b.y,E[M++]=b.z),t.bitangent&&(T[I++]=C.x,T[I++]=C.y,T[I++]=C.z)}let N=new y.GeometryAttributes;return t.position&&(N.position=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F})),t.normal&&(N.normal=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),t.tangent&&(N.tangent=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E})),t.bitangent&&(N.bitangent=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),t.st&&(N.st=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:V})),new s.Geometry({attributes:N,indices:P,primitiveType:s.PrimitiveType.TRIANGLES})}(j[e],f,q,C,x?U[e]:void 0,v,A,L,w)});J.push(t)}let W=c.GeometryPipeline.combineInstances(J)[0];W.attributes.position.values=new Float64Array(W.attributes.position.values),W.indices=d.IndexDatatype.createTypedArray(W.attributes.position.values.length/3,W.indices);let Z=W.attributes;return f.position||delete Z.position,new s.Geometry({attributes:Z,indices:W.indices,primitiveType:W.primitiveType,boundingSphere:Y})},function(e,t){return l.defined(t)&&(e=Q.unpack(e,t)),Q.createGeometry(e)}});