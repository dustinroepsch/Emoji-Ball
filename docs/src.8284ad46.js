parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({22:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.mag=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.scale=function(e){return new t(this.x*e,this.y*e)},t.prototype.norm=function(){return this.scale(1/this.mag())},t.prototype.clampMag=function(t){return this.mag()>t?this.norm().scale(53):this},t}();exports.Vector=t;var e=function(){return function(){this.positionMeters=new t(.0095,.0095),this.velocityMetersPerSecond=new t(0,0),this.radiusMeters=75,this.sprite="⚽️"}}();exports.Ball=e;var r=function(){return function(){this.gameWidthSoccerBalls=5,this.gameHeightSoccerBalls=10,this.pixelsPerMeter=1,this.gravityMetersPerSecondSquared=9.8,this.ball=new e}}();exports.GameState=r;
},{}],9:[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.TICK="TICK",e.CLICK="CLICK",e.SET_GAME_HEIGHT_PIXELS="SET_GAME_HEIGHT_PIXELS"}(e=exports.Actions||(exports.Actions={}));
},{}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(){}return e.gameWidthMeters=function(e){return e.gameWidthSoccerBalls*e.ball.radiusMeters*2},e.gameHeightMeters=function(e){return e.gameHeightSoccerBalls*e.ball.radiusMeters*2},e.gameWidthPixels=function(e){return this.gameWidthMeters(e)*e.pixelsPerMeter},e.gameHeightPixels=function(e){return this.gameHeightMeters(e)*e.pixelsPerMeter},e}();exports.DataExtracter=e;
},{}],23:[function(require,module,exports) {
"use strict";var e=this&&this.__assign||Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./GameState"),t=require("./Action"),a=require("./DataExtracter"),i=function(){function i(){}return i.reduce=function(s,o){var n=e({},s);switch(o.type){case t.Actions.SET_GAME_HEIGHT_PIXELS:n.pixelsPerMeter=o.params.gameHeightPixels/a.DataExtracter.gameHeightMeters(s);break;case t.Actions.TICK:i.applyGravity(n,o.params.delta);break;case t.Actions.CLICK:n.ball.positionMeters.x=o.params.xPixels/s.pixelsPerMeter,n.ball.positionMeters.y=o.params.yPixels/s.pixelsPerMeter,n.ball.velocityMetersPerSecond=new r.Vector(0,0);break;default:throw new Error("Action type: "+o.type+" is unknown.")}return n},i.applyGravity=function(e,r){var t=e.gravityMetersPerSecondSquared;e.ball.velocityMetersPerSecond.y+=t*r,e.ball.velocityMetersPerSecond=e.ball.velocityMetersPerSecond.clampMag(53),e.ball.positionMeters=e.ball.positionMeters.add(e.ball.velocityMetersPerSecond)},i}();exports.ActionHandler=i;
},{"./GameState":22,"./Action":9,"./DataExtracter":10}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./GameState"),t=require("./ActionHandler"),r=function(){function r(){this.state=new e.GameState}return r.prototype.dispatch=function(e){this.state=t.ActionHandler.reduce(this.state,e)},r}();exports.App=r;
},{"./GameState":22,"./ActionHandler":23}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./DataExtracter"),r=function(){function r(){}return r.render=function(t,l){t.clearRect(0,0,e.DataExtracter.gameWidthPixels(l),e.DataExtracter.gameHeightPixels(l)),r.renderBall(t,l)},r.renderBall=function(e,r){e.font=e.font.replace(/\d+px/g,2*r.ball.radiusMeters*r.pixelsPerMeter+"px"),e.fillText(r.ball.sprite,r.ball.positionMeters.x*r.pixelsPerMeter-r.ball.radiusMeters*r.pixelsPerMeter,r.ball.positionMeters.y*r.pixelsPerMeter+r.ball.radiusMeters*r.pixelsPerMeter)},r}();exports.Renderer=r;
},{"./DataExtracter":10}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(){this.lastTick=Date.now()}return t.prototype.readSeconds=function(){var t=Date.now(),e=t-this.lastTick;return this.lastTick=t,.001*e},t}();exports.Stopwatch=t;
},{}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./App"),t=require("./Renderer"),a=require("./Action"),r=require("./DataExtracter"),i=require("./Stopwatch"),c=new e.App,d=document.createElement("canvas"),n=d.getContext("2d");if(!n){var s=document.createElement("div");s.appendChild(document.createTextNode("Unable to create canvas context 😓")),document.body.appendChild(s)}d.addEventListener("click",function(e){c.dispatch({type:a.Actions.CLICK,params:{xPixels:e.pageX-d.offsetLeft,yPixels:e.pageY-d.offsetTop}})});var o=n;document.body.appendChild(d),c.dispatch({type:a.Actions.SET_GAME_HEIGHT_PIXELS,params:{gameHeightPixels:800}});var p=new i.Stopwatch;setInterval(function(){c.dispatch({type:a.Actions.TICK,params:{delta:p.readSeconds()}}),d.width!=r.DataExtracter.gameWidthPixels(c.state)&&(d.width=r.DataExtracter.gameWidthPixels(c.state)),d.height!=r.DataExtracter.gameHeightPixels(c.state)&&(d.height=r.DataExtracter.gameHeightPixels(c.state)),t.Renderer.render(o,c.state)},.001);
},{"./App":7,"./Renderer":8,"./Action":9,"./DataExtracter":10,"./Stopwatch":11}]},{},[4], null)
//# sourceMappingURL=src.8284ad46.map