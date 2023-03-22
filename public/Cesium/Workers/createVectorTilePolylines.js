define(["./Matrix3-81054f0f","./combine-0c102d93","./AttributeCompression-48e336db","./Math-2ce22ee9","./IndexDatatype-d3db4e7d","./Matrix2-413c4048","./createTaskProcessorWorker","./defaultValue-f6d5e6da","./ComponentDatatype-ab629b88","./WebGLConstants-7f557f93","./RuntimeError-9b4ce3fb"],function(e,a,t,r,n,i,s,o,u,f,c){"use strict";let l=new e.Cartographic,d=new e.Cartesian3,p=new i.Rectangle,b=new e.Ellipsoid,C=new e.Cartesian3,w={min:void 0,max:void 0},h=new e.Cartesian3,y=new e.Cartesian3,k=new e.Cartesian3,m=new e.Cartesian3,A=new e.Cartesian3;return s(function(s,o){var u;let f;let c=new Uint16Array(s.positions),g=new Uint16Array(s.widths),x=new Uint32Array(s.counts),D=new Uint16Array(s.batchIds);u=s.packedBuffer,u=new Float64Array(u),f=0,w.min=u[f++],w.max=u[f++],i.Rectangle.unpack(u,f,p),f+=i.Rectangle.packedLength,e.Ellipsoid.unpack(u,f,b),f+=e.Ellipsoid.packedLength,e.Cartesian3.unpack(u,f,C);let E=function(a,n,i,s,o){let u=a.length/3,f=a.subarray(0,u),c=a.subarray(u,2*u),p=a.subarray(2*u,3*u);t.AttributeCompression.zigZagDeltaDecode(f,c,p);let b=new Float64Array(a.length);for(let a=0;a<u;++a){let t=f[a],u=c[a],C=p[a],w=r.CesiumMath.lerp(n.west,n.east,t/32767),h=r.CesiumMath.lerp(n.south,n.north,u/32767),y=r.CesiumMath.lerp(i,s,C/32767),k=e.Cartographic.fromRadians(w,h,y,l),m=o.cartographicToCartesian(k,d);e.Cartesian3.pack(m,b,3*a)}return b}(c,p,w.min,w.max,b),I=E.length/3,P=4*I-4,U=new Float32Array(3*P),M=new Float32Array(3*P),R=new Float32Array(3*P),T=new Float32Array(2*P),F=new Uint16Array(P),N,v=0,L=0,S=0,_=0,G=x.length;for(N=0;N<G;++N){let a=x[N],t=g[N],r=D[N];for(let n=0;n<a;++n){let i,s;if(0===n){let a=e.Cartesian3.unpack(E,3*_,h),t=e.Cartesian3.unpack(E,3*(_+1),y);i=e.Cartesian3.subtract(a,t,k),e.Cartesian3.add(a,i,i)}else i=e.Cartesian3.unpack(E,3*(_+n-1),k);let o=e.Cartesian3.unpack(E,3*(_+n),m);if(n===a-1){let t=e.Cartesian3.unpack(E,3*(_+a-1),h),r=e.Cartesian3.unpack(E,3*(_+a-2),y);s=e.Cartesian3.subtract(t,r,A),e.Cartesian3.add(t,s,s)}else s=e.Cartesian3.unpack(E,3*(_+n+1),A);e.Cartesian3.subtract(i,C,i),e.Cartesian3.subtract(o,C,o),e.Cartesian3.subtract(s,C,s);let u=n===a-1?2:4;for(let a=0===n?2:0;a<u;++a){e.Cartesian3.pack(o,U,v),e.Cartesian3.pack(i,M,v),e.Cartesian3.pack(s,R,v),v+=3;let n=a-2<0?-1:1;T[L++]=a%2*2-1,T[L++]=n*t,F[S++]=r}}_+=a}let W=n.IndexDatatype.createTypedArray(P,6*I-6),B=0,O=0;for(G=I-1,N=0;N<G;++N)W[O++]=B,W[O++]=B+2,W[O++]=B+1,W[O++]=B+1,W[O++]=B+2,W[O++]=B+3,B+=4;o.push(U.buffer,M.buffer,R.buffer),o.push(T.buffer,F.buffer,W.buffer);let z={indexDatatype:2===W.BYTES_PER_ELEMENT?n.IndexDatatype.UNSIGNED_SHORT:n.IndexDatatype.UNSIGNED_INT,currentPositions:U.buffer,previousPositions:M.buffer,nextPositions:R.buffer,expandAndWidth:T.buffer,batchIds:F.buffer,indices:W.buffer};if(s.keepDecodedPositions){let e=function(e){let a=e.length,t=new Uint32Array(a+1),r=0;for(let n=0;n<a;++n)t[n]=r,r+=e[n];return t[a]=r,t}(x);o.push(E.buffer,e.buffer),z=a.combine(z,{decodedPositions:E.buffer,decodedPositionOffsets:e.buffer})}return z})});