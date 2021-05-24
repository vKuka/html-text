/*!
 * @pixi/text-html - v1.0.1
 * Compiled Mon, 24 May 2021 11:59:04 UTC
 *
 * @pixi/text-html is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@pixi/sprite"),e=require("@pixi/settings"),i=require("@pixi/core"),s=require("@pixi/math"),o=require("@pixi/utils"),r=require("@pixi/text"),n=function(t){function n(o,r,n,h){void 0===o&&(o=""),void 0===r&&(r={}),void 0===h&&(h={}),(n=n||document.createElement("canvas")).width=3,n.height=3;var a=i.Texture.from(n,{scaleMode:e.settings.SCALE_MODE});a.orig=new s.Rectangle,a.trim=new s.Rectangle,t.call(this,a),this._parser=new DOMParser,this._image=new Image,this.canvas=n,this.context=this.canvas.getContext("2d"),this._resolution=e.settings.RESOLUTION,this._autoResolution=!0,this._text=null,this._style=null,this._cssStyle=null,this._loading=!1,this.text=o,this.style=r,this.cssStyle=h,this.localStyleID=-1}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var h={stringCssStyle:{configurable:!0},width:{configurable:!0},height:{configurable:!0},style:{configurable:!0},cssStyle:{configurable:!0},text:{configurable:!0},resolution:{configurable:!0}};return n.prototype.updateText=function(t){var e=this,i=this.style,s=this.canvas,r=this.context,n=this.resolution;if(this.localStyleID!==i.styleID&&(this.dirty=!0,this.localStyleID=i.styleID),this.dirty||!t){var h="\n            display:inline-block;\n            color:"+i.fill+";\n            font-size: "+i.fontSize+"px;\n            font-family:"+i.fontFamily+";\n            font-weight:"+i.fontWeight+";\n            font-style:"+i.fontStyle+";\n            font-variant:"+i.fontVariant+";\n            letter-spacing:"+i.letterSpacing+"px;\n            text-align:"+i.align+";\n            padding:"+i.padding+"px;\n        ";if(i.lineHeight&&(h+="line-height:"+i.lineHeight+"px;"),i.wordWrap&&(h+="word-wrap:"+(i.breakWords?"break-all":"break-word")+";",h+="width:"+i.wordWrapWidth+"px;"),i.strokeThickness){var a=i.stroke;"number"==typeof color&&(a=o.hex2string(a)),h+="-webkit-text-stroke-width: "+i.strokeThickness+"px;",h+="-webkit-text-stroke-color: "+a+";",h+="text-stroke-width: "+i.strokeThickness+"px;",h+="text-stroke-color: "+a+";",h+="paint-order: stroke;"}if(i.dropShadow){var l=i.dropShadowAngle,u=i.dropShadowDistance,d=i.dropShadowBlur,c=i.dropShadowColor,p=i.dropShadowAlpha,g=Math.round(Math.cos(l)*u),x=Math.round(Math.sin(l)*u),y=c;if("number"==typeof y&&(y=o.hex2string(y)),"#"===y.charAt(0)&&p<1){var _=o.hex2rgb(parseInt(y.replace("#",""),16));y="rgba("+(255*_[0]|0)+", "+(255*_[1]|0)+", "+(255*_[2]|0)+", "+p+")"}h+="text-shadow: "+g+"px "+x+"px "+d+"px "+y+";"}var f='\n            <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048">\n                <foreignObject width="100%" height="100%">\n                    <div xmlns="http://www.w3.org/1999/xhtml" class="pixi-html_text" style="'+h+'">\n                        '+this._text+"\n                        <style>\n                            "+this.stringCssStyle+"\n                        </style>\n                    </div>\n                </foreignObject>\n            </svg>\n       ",w=this._parser.parseFromString(f,"text/xml").firstChild.querySelector("div");document.body.appendChild(w);var v=w.getBoundingClientRect(),m=v.width,S=v.height;if(document.body.removeChild(w),s.width=Math.ceil((Math.max(1,m)+2*i.padding)*n),s.height=Math.ceil((Math.max(1,S)+2*i.padding)*n),r.scale(n,n),r.clearRect(0,0,s.width,s.height),!this._loading){var b=this._image;this._loading=!0,b.src="data:image/svg+xml,"+encodeURIComponent(f),b.onload=function(){r.drawImage(b,0,0,m,S,0,0,m,S),b.onload=void 0,b.src="",e._loading=!1,e.updateTexture()},this.updateTexture()}}},h.stringCssStyle.get=function(){var t="";for(var e in this._cssStyle)t+=".pixi-html_text "+e+" {"+this._cssStyle[e]+"}";return t},n.prototype.updateTexture=function(){var t=this.canvas,e=this.context,i=this.style,s=this.texture,r=this.resolution;if(i.trim){var n=o.trimCanvas(t),h=n.width,a=n.height,l=n.data;l&&(t.width=h,t.height=a,e.putImageData(l,0,0))}var u=i.trim?0:i.padding,d=s.baseTexture;s.trim.width=s._frame.width=Math.ceil(t.width/r),s.trim.height=s._frame.height=Math.ceil(t.height/r),s.trim.x=-u,s.trim.y=-u,s.orig.width=s._frame.width-2*u,s.orig.height=s._frame.height-2*u,this._onTextureUpdate(),d.setRealSize(t.width,t.height,r),this.dirty=!1},n.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._render.call(this,e)},n.prototype._renderCanvas=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._renderCanvas.call(this,e)},n.prototype.getLocalBounds=function(e){return this.updateText(!0),t.prototype.getLocalBounds.call(this,e)},n.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},n.prototype._onStyleChange=function(){this.dirty=!0},n.prototype.destroy=function(e){void 0===e&&(e=!0),t.prototype.destroy.call(this,e),this.context=null,this.canvas.width=this.canvas.height=0,this.canvas=null,this._style=null,this._cssStyle=null,this._parser=null,this._image.onload=null,this._image.src="",this._image=null},h.width.get=function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},h.width.set=function(t){this.updateText(!0);var e=o.sign(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t},h.height.get=function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},h.height.set=function(t){this.updateText(!0);var e=o.sign(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t},h.style.get=function(){return this._style},h.style.set=function(t){(t=t||{})instanceof r.TextStyle?this._style=t:this._style=new r.TextStyle(t),this.localStyleID=-1,this.dirty=!0},h.cssStyle.get=function(){return this._cssStyle},h.cssStyle.set=function(t){this._cssStyle=t||{},this.dirty=!0},h.text.get=function(){return this._text},h.text.set=function(t){t=String(""===t||null==t?" ":t),this._text!==t&&(this._text=t,this.dirty=!0)},h.resolution.get=function(){return this._resolution},h.resolution.set=function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},Object.defineProperties(n.prototype,h),n}(t.Sprite);exports.HTMLText=n;
//# sourceMappingURL=html-text.cjs.js.map