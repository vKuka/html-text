/*!
 * @pixi/text-html - v1.0.1
 * Compiled Mon, 24 May 2021 11:40:18 UTC
 *
 * @pixi/text-html is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
import{Sprite as t}from"@pixi/sprite";import{settings as i}from"@pixi/settings";import{Texture as e}from"@pixi/core";import{Rectangle as s}from"@pixi/math";import{hex2string as o,hex2rgb as r,trimCanvas as n,sign as h}from"@pixi/utils";import{TextStyle as a}from"@pixi/text";var l=function(t){function l(o,r,n,h){void 0===o&&(o=""),void 0===r&&(r={}),void 0===h&&(h={}),(n=n||document.createElement("canvas")).width=3,n.height=3;var a=e.from(n,{scaleMode:i.SCALE_MODE});a.orig=new s,a.trim=new s,t.call(this,a),this._parser=new DOMParser,this._image=new Image,this.canvas=n,this.context=this.canvas.getContext("2d"),this._resolution=i.RESOLUTION,this._autoResolution=!0,this._text=null,this._style=null,this._cssStyle=null,this._loading=!1,this.text=o,this.style=r,this.cssStyle=h,this.localStyleID=-1}t&&(l.__proto__=t),l.prototype=Object.create(t&&t.prototype),l.prototype.constructor=l;var d={stringCssStyle:{configurable:!0},width:{configurable:!0},height:{configurable:!0},style:{configurable:!0},cssStyle:{configurable:!0},text:{configurable:!0},resolution:{configurable:!0}};return l.prototype.updateText=function(t){var i=this,e=this.style,s=this.canvas,n=this.context,h=this.resolution;if(this.localStyleID!==e.styleID&&(this.dirty=!0,this.localStyleID=e.styleID),this.dirty||!t){var a="\n            display:inline-block;\n            color:"+e.fill+";\n            font-size: "+e.fontSize+"px;\n            font-family:"+e.fontFamily+";\n            font-weight:"+e.fontWeight+";\n            font-style:"+e.fontStyle+";\n            font-variant:"+e.fontVariant+";\n            letter-spacing:"+e.letterSpacing+"px;\n            text-align:"+e.align+";\n            padding:"+e.padding+"px;\n        ";if(e.lineHeight&&(a+="line-height:"+e.lineHeight+"px;"),e.wordWrap&&(a+="word-wrap:"+(e.breakWords?"break-all":"break-word")+";",a+="width:"+e.wordWrapWidth+"px;"),e.strokeThickness){var l=e.stroke;"number"==typeof color&&(l=o(l)),a+="-webkit-text-stroke-width: "+e.strokeThickness+"px;",a+="-webkit-text-stroke-color: "+l+";",a+="text-stroke-width: "+e.strokeThickness+"px;",a+="text-stroke-color: "+l+";",a+="paint-order: stroke;"}if(e.dropShadow){var d=e.dropShadowAngle,u=e.dropShadowDistance,c=e.dropShadowBlur,p=e.dropShadowColor,g=e.dropShadowAlpha,y=Math.round(Math.cos(d)*u),x=Math.round(Math.sin(d)*u),f=p;if("number"==typeof f&&(f=o(f)),"#"===f.charAt(0)&&g<1){var _=r(parseInt(f.replace("#",""),16));f="rgba("+(255*_[0]|0)+", "+(255*_[1]|0)+", "+(255*_[2]|0)+", "+g+")"}a+="text-shadow: "+y+"px "+x+"px "+c+"px "+f+";"}var m='\n            <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048">\n                <foreignObject width="100%" height="100%">\n                    <div xmlns="http://www.w3.org/1999/xhtml" class="pixi-html_text" style="'+a+'">\n                        '+this._text+"\n                        <style>\n                            "+this.stringCssStyle+"\n                        </style>\n                    </div>\n                </foreignObject>\n            </svg>\n       ",w=this._parser.parseFromString(m,"text/xml").firstChild.querySelector("div");document.body.appendChild(w);var v=w.getBoundingClientRect(),S=v.width,b=v.height;if(document.body.removeChild(w),s.width=Math.ceil((Math.max(1,S)+2*e.padding)*h),s.height=Math.ceil((Math.max(1,b)+2*e.padding)*h),n.scale(h,h),n.clearRect(0,0,s.width,s.height),!this._loading){var k=this._image;this._loading=!0,k.src="data:image/svg+xml,"+encodeURIComponent(m),k.onload=function(){n.drawImage(k,0,0,S,b,0,0,S,b),k.onload=void 0,k.src="",i._loading=!1,i.updateTexture()},this.updateTexture()}}},d.stringCssStyle.get=function(){var t="";for(var i in this._cssStyle)t+=".pixi-html_text "+i+" {"+this._cssStyle[i]+"}";return t},l.prototype.updateTexture=function(){var t=this.canvas,i=this.context,e=this.style,s=this.texture,o=this.resolution;if(e.trim){var r=n(t),h=r.width,a=r.height,l=r.data;l&&(t.width=h,t.height=a,i.putImageData(l,0,0))}var d=e.trim?0:e.padding,u=s.baseTexture;s.trim.width=s._frame.width=Math.ceil(t.width/o),s.trim.height=s._frame.height=Math.ceil(t.height/o),s.trim.x=-d,s.trim.y=-d,s.orig.width=s._frame.width-2*d,s.orig.height=s._frame.height-2*d,this._onTextureUpdate(),u.setRealSize(t.width,t.height,o),this.dirty=!1},l.prototype._render=function(i){this._autoResolution&&this._resolution!==i.resolution&&(this._resolution=i.resolution,this.dirty=!0),this.updateText(!0),t.prototype._render.call(this,i)},l.prototype._renderCanvas=function(i){this._autoResolution&&this._resolution!==i.resolution&&(this._resolution=i.resolution,this.dirty=!0),this.updateText(!0),t.prototype._renderCanvas.call(this,i)},l.prototype.getLocalBounds=function(i){return this.updateText(!0),t.prototype.getLocalBounds.call(this,i)},l.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},l.prototype._onStyleChange=function(){this.dirty=!0},l.prototype.destroy=function(i){void 0===i&&(i=!0),t.prototype.destroy.call(this,i),this.context=null,this.canvas.width=this.canvas.height=0,this.canvas=null,this._style=null,this._cssStyle=null,this._parser=null,this._image.onload=null,this._image.src="",this._image=null},d.width.get=function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},d.width.set=function(t){this.updateText(!0);var i=h(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t},d.height.get=function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},d.height.set=function(t){this.updateText(!0);var i=h(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t},d.style.get=function(){return this._style},d.style.set=function(t){t=t||{},this._style=t instanceof a?t:new a(t),this.localStyleID=-1,this.dirty=!0},d.cssStyle.get=function(){return this._cssStyle},d.cssStyle.set=function(t){this._cssStyle=t||{},this.dirty=!0},d.text.get=function(){return this._text},d.text.set=function(t){t=String(""===t||null==t?" ":t),this._text!==t&&(this._text=t,this.dirty=!0)},d.resolution.get=function(){return this._resolution},d.resolution.set=function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},Object.defineProperties(l.prototype,d),l}(t);export{l as HTMLText};
//# sourceMappingURL=html-text.es.js.map
