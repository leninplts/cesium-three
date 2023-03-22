define(["./ComponentDatatype-ab629b88","./defaultValue-f6d5e6da","./IndexDatatype-d3db4e7d","./RuntimeError-9b4ce3fb","./createTaskProcessorWorker","./WebGLConstants-7f557f93","./Math-2ce22ee9"],function(e,t,r,n,o,a,i){"use strict";let u;function s(r,n,o){let a;let i=r.num_points(),s=o.num_components(),l,d=new u.AttributeQuantizationTransform;if(d.InitFromAttribute(o)){let e=Array(s);for(let t=0;t<s;++t)e[t]=d.min_value(t);l={quantizationBits:d.quantization_bits(),minValues:e,range:d.range(),octEncoded:!1}}u.destroy(d),(d=new u.AttributeOctahedronTransform).InitFromAttribute(o)&&(l={quantizationBits:d.quantization_bits(),octEncoded:!0}),u.destroy(d);let f=i*s;a=t.defined(l)?function(e,t,r,n,o){let a,i;n.quantizationBits<=8?(i=new u.DracoUInt8Array,a=new Uint8Array(o),t.GetAttributeUInt8ForAllPoints(e,r,i)):n.quantizationBits<=16?(i=new u.DracoUInt16Array,a=new Uint16Array(o),t.GetAttributeUInt16ForAllPoints(e,r,i)):(i=new u.DracoFloat32Array,a=new Float32Array(o),t.GetAttributeFloatForAllPoints(e,r,i));for(let e=0;e<o;++e)a[e]=i.GetValue(e);return u.destroy(i),a}(r,n,o,l,f):function(e,t,r,n){let o,a;switch(r.data_type()){case 1:case 11:a=new u.DracoInt8Array,o=new Int8Array(n),t.GetAttributeInt8ForAllPoints(e,r,a);break;case 2:a=new u.DracoUInt8Array,o=new Uint8Array(n),t.GetAttributeUInt8ForAllPoints(e,r,a);break;case 3:a=new u.DracoInt16Array,o=new Int16Array(n),t.GetAttributeInt16ForAllPoints(e,r,a);break;case 4:a=new u.DracoUInt16Array,o=new Uint16Array(n),t.GetAttributeUInt16ForAllPoints(e,r,a);break;case 5:case 7:a=new u.DracoInt32Array,o=new Int32Array(n),t.GetAttributeInt32ForAllPoints(e,r,a);break;case 6:case 8:a=new u.DracoUInt32Array,o=new Uint32Array(n),t.GetAttributeUInt32ForAllPoints(e,r,a);break;case 9:case 10:a=new u.DracoFloat32Array,o=new Float32Array(n),t.GetAttributeFloatForAllPoints(e,r,a)}for(let e=0;e<n;++e)o[e]=a.GetValue(e);return u.destroy(a),o}(r,n,o,f);let c=e.ComponentDatatype.fromTypedArray(a);return{array:a,data:{componentsPerAttribute:s,componentDatatype:c,byteOffset:o.byte_offset(),byteStride:e.ComponentDatatype.getSizeInBytes(c)*s,normalized:o.normalized(),quantization:l}}}function l(e){return t.defined(e.bufferView)?function(e){let t=new u.Decoder,o=["POSITION","NORMAL","COLOR","TEX_COORD"];if(e.dequantizeInShader)for(let e=0;e<o.length;++e)t.SkipAttributeTransform(u[o[e]]);let a=e.bufferView,i=new u.DecoderBuffer;if(i.Init(e.array,a.byteLength),t.GetEncodedGeometryType(i)!==u.TRIANGULAR_MESH)throw new n.RuntimeError("Unsupported draco mesh geometry type.");let l=new u.Mesh,d=t.DecodeBufferToMesh(i,l);if(!d.ok()||0===l.ptr)throw new n.RuntimeError(`Error decoding draco mesh geometry: ${d.error_msg()}`);u.destroy(i);let f={},c=e.compressedAttributes;for(let e in c)if(c.hasOwnProperty(e)){let r=c[e],n=t.GetAttributeByUniqueId(l,r);f[e]=s(l,t,n)}let y={indexArray:function(e,t){let n=e.num_points(),o=e.num_faces(),a=new u.DracoInt32Array,i=3*o,s=r.IndexDatatype.createTypedArray(n,i),l=0;for(let r=0;r<o;++r)t.GetFaceFromMesh(e,r,a),s[l+0]=a.GetValue(0),s[l+1]=a.GetValue(1),s[l+2]=a.GetValue(2),l+=3;return u.destroy(a),{typedArray:s,numberOfIndices:i}}(l,t),attributeData:f};return u.destroy(l),u.destroy(t),y}(e):function(e){let t=new u.Decoder;e.dequantizeInShader&&(t.SkipAttributeTransform(u.POSITION),t.SkipAttributeTransform(u.NORMAL));let r=new u.DecoderBuffer;if(r.Init(e.buffer,e.buffer.length),t.GetEncodedGeometryType(r)!==u.POINT_CLOUD)throw new n.RuntimeError("Draco geometry type must be POINT_CLOUD.");let o=new u.PointCloud,a=t.DecodeBufferToPointCloud(r,o);if(!a.ok()||0===o.ptr)throw new n.RuntimeError(`Error decoding draco point cloud: ${a.error_msg()}`);u.destroy(r);let i={},l=e.properties;for(let e in l)if(l.hasOwnProperty(e)){let r;if("POSITION"===e||"NORMAL"===e){let n=t.GetAttributeId(o,u[e]);r=t.GetAttribute(o,n)}else{let n=l[e];r=t.GetAttributeByUniqueId(o,n)}i[e]=s(o,t,r)}return u.destroy(o),u.destroy(t),i}(e)}function d(e){u=e,self.onmessage=o(l),self.postMessage(!0)}return function(e){let r=e.data.webAssemblyConfig;if(t.defined(r))return require([r.modulePath],function(e){t.defined(r.wasmBinaryFile)?(t.defined(e)||(e=self.DracoDecoderModule),e(r).then(function(e){d(e)})):d(e())})}});