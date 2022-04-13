module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1649643830049, function(require, module, exports) {
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self)["@58fe/wx-tracklog"]={})}(this,(function(e){e.sendClickLog=e=>{const{appid:o,uid:t,pageType:i,actionType:c}=e||{};if(t){let e="https://tracklog.58.com/wx/click/empty.js.gif?wxid="+(o||"")+"&uid="+t+"&from="+(c||"default")+"&trackURL="+(i||"")+"&v=1.0.0&rand_id="+Math.random();try{wx.request({url:e,success:e=>{console.log(`埋点${c}上报成功！`)},fail:()=>{console.error(`埋点${c}上报失败！`)}})}catch(n){console.error(n)}}else console.error("sendClickLog 方法 uid参数为空，请求被拒绝")},Object.defineProperty(e,"__esModule",{value:!0})}));

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1649643830049);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map