/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		215: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		215: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"1":"chunk-common"}[chunkId]||chunkId) + "." + {"1":"f506bbc1","2":"97721dda","3":"24b7b4e5","4":"55649757","5":"706e8812","6":"da9afb3d","7":"64003aad","8":"47b0b3f6","9":"e16614de","10":"fb935ddd","11":"3e957e67","12":"f16d5d43","13":"a18688e8","14":"57045789","15":"c98b4267","16":"ed6e3e4e","17":"88c85934","18":"2f675ce0","19":"7bf86bb3","20":"b7ac23c1","21":"48ee3305","22":"1cbc4c08","23":"9803ae1e","24":"3b477941","25":"410c8c26","26":"4c7ad2bf","27":"851e92f5","28":"fe218bac","29":"21f58208","30":"7d90966d","31":"5430d2a9","32":"445fd04e","33":"9e2b68af","34":"786c7b93","35":"b065040e","36":"77ac3dab","37":"ee5678db","38":"57242bdd","39":"9451aa27","40":"db473915","41":"cfde6c3d","42":"965127a5","43":"f24a6aa7","44":"e77bf615","45":"6fd00834","46":"4b42b944","47":"de689e45","48":"e9a37f43","49":"fdcfd8be","50":"0f508593","51":"63e72205","52":"fa9e68ae","53":"de38e29a","54":"793d1626","55":"24efab73","56":"1a2c8337","57":"c8881de1","58":"8d00ee0d","59":"b1b971c3","60":"4d24a493","61":"3c83b244","62":"27b6dd24","63":"a9f98ac9","64":"f3c541ed","65":"f61db558","66":"e0702529","67":"bb4184b2","68":"623681d2","69":"db65120f","70":"4014d22d","71":"7f5cab99","72":"7588d20c","73":"15fdfdda","74":"5cce22c2","75":"be382710","76":"a4cf093f","77":"d698e3ab","78":"0ce5a31c","79":"83d71458","80":"0d6c568a","81":"1af26391","82":"b8205bcb","83":"0879fedd","84":"2a95ed88","85":"4dd21ed4","86":"5c1c7117","87":"9f0b0e94","88":"358dcbe1","89":"c60419a9","90":"7cbed78c","91":"ff6f0c59","92":"f43063fb","93":"549e512a","94":"11c48d01","95":"120cb699","96":"b37d2902","97":"5e966642","98":"ab41191b","99":"b41f2e44","100":"2463b1ab","101":"2c1df8be","102":"29c5ff41","103":"c03d6c8a","104":"6dc2441f","105":"30583401","106":"818814a3","107":"36206b12","108":"50915d01","109":"b1faa28b","110":"033ad3e2","111":"05353717","112":"0c7c5675","113":"816cc059","114":"563d86dc","115":"c323209c","116":"24af4f19","117":"581ac15a","118":"94710df6","119":"aa53d7cf","120":"9c3978f1","121":"360c4112","122":"84cd2812","123":"7ce086d5","124":"8ed4288e","125":"32e557ea","126":"32b66a59","127":"bc817467","128":"f41e254a","129":"a17086b7","130":"83f7fb57","131":"e2768c10","132":"64e13620","133":"30ff0ba2","134":"9fa1f22a","135":"2516e23a","136":"9fe537c1","137":"f01d1a99","138":"ae1ffaa4","139":"ac3dad62","140":"92883ce9","141":"82cdb191","142":"eb825b9b","143":"bd5c5035","144":"c97916a6","145":"0627b909","146":"bb4ea176","147":"0a714e02","148":"0f137959","149":"8a7ebc1e","150":"6f2187dd","151":"0c2407be","152":"fab07f24","153":"b83692d4","154":"b2598262","155":"9d7110e3","156":"feb965ea","157":"0272c898","158":"405cd940","159":"6432b861","160":"98088c6a","161":"2edb211e","162":"5a17c85e","163":"a74abacb","164":"72423060","165":"73c5d4b0","166":"5424a53e","167":"76542f1f","168":"7ffdc550","169":"8255fd96","170":"53af5057","171":"60657a32","172":"29d83b6a","173":"23d91558","174":"c36e6e58","175":"e8177318","176":"d13741b9","177":"0bac7e59","178":"01e58ec6","179":"6d1ee12d","180":"250756d4","181":"579aab8e","182":"69a6745b","183":"b4ae82c0","184":"765fffa9","185":"611481f7","186":"20acd9ae","187":"c0632917","188":"14b8745e","189":"93b36496","190":"4df90742","191":"94b5c7fa","192":"400f4806","193":"d4ce9af1","194":"9778c5e5","195":"b1ce952b","196":"653303b0","197":"2a7a1883","198":"046a5fbe","199":"9dca5615","200":"04da1e07","201":"1ed355ce","202":"282ac39a","203":"ee8c6602","204":"53eae612","205":"182c117d","206":"267af7f2","207":"5d665666","208":"a1383097","209":"6b731ba0","210":"ae6233f6","211":"bd6c9c94","212":"407aef29","213":"254a383a","214":"53de8251","216":"6fbb7653","217":"b84971d8","218":"4d375534","219":"c7796e7b","220":"298a1680","221":"e0596bbf","222":"1ce198e2","223":"1f9c1ef2","224":"763fed2b","225":"fe8a96a4","226":"675c4314","227":"09743020","228":"7d9c2bb1","229":"3959a1f4","230":"eebf057c","231":"53efc200","232":"9ddceb68","233":"acdb5260","234":"520b7469"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"216":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"1":"chunk-common"}[chunkId]||chunkId) + "." + {"1":"31d6cfe0","2":"31d6cfe0","3":"31d6cfe0","4":"31d6cfe0","5":"31d6cfe0","6":"31d6cfe0","7":"31d6cfe0","8":"31d6cfe0","9":"31d6cfe0","10":"31d6cfe0","11":"31d6cfe0","12":"31d6cfe0","13":"31d6cfe0","14":"31d6cfe0","15":"31d6cfe0","16":"31d6cfe0","17":"31d6cfe0","18":"31d6cfe0","19":"31d6cfe0","20":"31d6cfe0","21":"31d6cfe0","22":"31d6cfe0","23":"31d6cfe0","24":"31d6cfe0","25":"31d6cfe0","26":"31d6cfe0","27":"31d6cfe0","28":"31d6cfe0","29":"31d6cfe0","30":"31d6cfe0","31":"31d6cfe0","32":"31d6cfe0","33":"31d6cfe0","34":"31d6cfe0","35":"31d6cfe0","36":"31d6cfe0","37":"31d6cfe0","38":"31d6cfe0","39":"31d6cfe0","40":"31d6cfe0","41":"31d6cfe0","42":"31d6cfe0","43":"31d6cfe0","44":"31d6cfe0","45":"31d6cfe0","46":"31d6cfe0","47":"31d6cfe0","48":"31d6cfe0","49":"31d6cfe0","50":"31d6cfe0","51":"31d6cfe0","52":"31d6cfe0","53":"31d6cfe0","54":"31d6cfe0","55":"31d6cfe0","56":"31d6cfe0","57":"31d6cfe0","58":"31d6cfe0","59":"31d6cfe0","60":"31d6cfe0","61":"31d6cfe0","62":"31d6cfe0","63":"31d6cfe0","64":"31d6cfe0","65":"31d6cfe0","66":"31d6cfe0","67":"31d6cfe0","68":"31d6cfe0","69":"31d6cfe0","70":"31d6cfe0","71":"31d6cfe0","72":"31d6cfe0","73":"31d6cfe0","74":"31d6cfe0","75":"31d6cfe0","76":"31d6cfe0","77":"31d6cfe0","78":"31d6cfe0","79":"31d6cfe0","80":"31d6cfe0","81":"31d6cfe0","82":"31d6cfe0","83":"31d6cfe0","84":"31d6cfe0","85":"31d6cfe0","86":"31d6cfe0","87":"31d6cfe0","88":"31d6cfe0","89":"31d6cfe0","90":"31d6cfe0","91":"31d6cfe0","92":"31d6cfe0","93":"31d6cfe0","94":"31d6cfe0","95":"31d6cfe0","96":"31d6cfe0","97":"31d6cfe0","98":"31d6cfe0","99":"31d6cfe0","100":"31d6cfe0","101":"31d6cfe0","102":"31d6cfe0","103":"31d6cfe0","104":"31d6cfe0","105":"31d6cfe0","106":"31d6cfe0","107":"31d6cfe0","108":"31d6cfe0","109":"31d6cfe0","110":"31d6cfe0","111":"31d6cfe0","112":"31d6cfe0","113":"31d6cfe0","114":"31d6cfe0","115":"31d6cfe0","116":"31d6cfe0","117":"31d6cfe0","118":"31d6cfe0","119":"31d6cfe0","120":"31d6cfe0","121":"31d6cfe0","122":"31d6cfe0","123":"31d6cfe0","124":"31d6cfe0","125":"31d6cfe0","126":"31d6cfe0","127":"31d6cfe0","128":"31d6cfe0","129":"31d6cfe0","130":"31d6cfe0","131":"31d6cfe0","132":"31d6cfe0","133":"31d6cfe0","134":"31d6cfe0","135":"31d6cfe0","136":"31d6cfe0","137":"31d6cfe0","138":"31d6cfe0","139":"31d6cfe0","140":"31d6cfe0","141":"31d6cfe0","142":"31d6cfe0","143":"31d6cfe0","144":"31d6cfe0","145":"31d6cfe0","146":"31d6cfe0","147":"31d6cfe0","148":"31d6cfe0","149":"31d6cfe0","150":"31d6cfe0","151":"31d6cfe0","152":"31d6cfe0","153":"31d6cfe0","154":"31d6cfe0","155":"31d6cfe0","156":"31d6cfe0","157":"31d6cfe0","158":"31d6cfe0","159":"31d6cfe0","160":"31d6cfe0","161":"31d6cfe0","162":"31d6cfe0","163":"31d6cfe0","164":"31d6cfe0","165":"31d6cfe0","166":"31d6cfe0","167":"31d6cfe0","168":"31d6cfe0","169":"31d6cfe0","170":"31d6cfe0","171":"31d6cfe0","172":"31d6cfe0","173":"31d6cfe0","174":"31d6cfe0","175":"31d6cfe0","176":"31d6cfe0","177":"31d6cfe0","178":"31d6cfe0","179":"31d6cfe0","180":"31d6cfe0","181":"31d6cfe0","182":"31d6cfe0","183":"31d6cfe0","184":"31d6cfe0","185":"31d6cfe0","186":"31d6cfe0","187":"31d6cfe0","188":"31d6cfe0","189":"31d6cfe0","190":"31d6cfe0","191":"31d6cfe0","192":"31d6cfe0","193":"31d6cfe0","194":"31d6cfe0","195":"31d6cfe0","196":"31d6cfe0","197":"31d6cfe0","198":"31d6cfe0","199":"31d6cfe0","200":"31d6cfe0","201":"31d6cfe0","202":"31d6cfe0","203":"31d6cfe0","204":"31d6cfe0","205":"31d6cfe0","206":"31d6cfe0","207":"31d6cfe0","208":"31d6cfe0","209":"31d6cfe0","210":"31d6cfe0","211":"31d6cfe0","212":"31d6cfe0","213":"31d6cfe0","214":"31d6cfe0","216":"f17b2004","217":"31d6cfe0","218":"31d6cfe0","219":"31d6cfe0","220":"31d6cfe0","221":"31d6cfe0","222":"31d6cfe0","223":"31d6cfe0","224":"31d6cfe0","225":"31d6cfe0","226":"31d6cfe0","227":"31d6cfe0","228":"31d6cfe0","229":"31d6cfe0","230":"31d6cfe0","231":"31d6cfe0","232":"31d6cfe0","233":"31d6cfe0","234":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "0047":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ed82");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounce.css
var bounce = __webpack_require__("4439");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flash.css
var flash = __webpack_require__("4605");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flip.css
var flip = __webpack_require__("f580");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/headShake.css
var headShake = __webpack_require__("5b2b");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/heartBeat.css
var heartBeat = __webpack_require__("8753");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/hinge.css
var hinge = __webpack_require__("2967");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/jello.css
var jello = __webpack_require__("7e67");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/pulse.css
var pulse = __webpack_require__("d770");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rubberBand.css
var rubberBand = __webpack_require__("dd82");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/shake.css
var shake = __webpack_require__("922c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/shakeX.css
var shakeX = __webpack_require__("d7fb");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/shakeY.css
var shakeY = __webpack_require__("a533");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/swing.css
var swing = __webpack_require__("c32e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/tada.css
var tada = __webpack_require__("a151");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/wobble.css
var wobble = __webpack_require__("8bc7");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInDown.css
var backInDown = __webpack_require__("e80f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInLeft.css
var backInLeft = __webpack_require__("5fec");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInRight.css
var backInRight = __webpack_require__("e42f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInUp.css
var backInUp = __webpack_require__("57fc");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceIn.css
var bounceIn = __webpack_require__("d67f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInDown.css
var bounceInDown = __webpack_require__("880e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInLeft.css
var bounceInLeft = __webpack_require__("1c10");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInRight.css
var bounceInRight = __webpack_require__("9482");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInUp.css
var bounceInUp = __webpack_require__("e797");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeIn.css
var fadeIn = __webpack_require__("4848");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInBottomLeft.css
var fadeInBottomLeft = __webpack_require__("53d0");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInBottomRight.css
var fadeInBottomRight = __webpack_require__("63b1");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInDown.css
var fadeInDown = __webpack_require__("e9fd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInDownBig.css
var fadeInDownBig = __webpack_require__("195c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInLeft.css
var fadeInLeft = __webpack_require__("64e9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInLeftBig.css
var fadeInLeftBig = __webpack_require__("33c5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInRight.css
var fadeInRight = __webpack_require__("4f62");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInRightBig.css
var fadeInRightBig = __webpack_require__("0dbc");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInTopLeft.css
var fadeInTopLeft = __webpack_require__("7c38");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInTopRight.css
var fadeInTopRight = __webpack_require__("0756");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInUp.css
var fadeInUp = __webpack_require__("4953");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInUpBig.css
var fadeInUpBig = __webpack_require__("81db");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipInX.css
var flipInX = __webpack_require__("2e52");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipInY.css
var flipInY = __webpack_require__("22485");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/jackInTheBox.css
var jackInTheBox = __webpack_require__("7797");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedInLeft.css
var lightSpeedInLeft = __webpack_require__("12a1");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedInRight.css
var lightSpeedInRight = __webpack_require__("ce96");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rollIn.css
var rollIn = __webpack_require__("70ca");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateIn.css
var rotateIn = __webpack_require__("2318");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInDownLeft.css
var rotateInDownLeft = __webpack_require__("24bd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInDownRight.css
var rotateInDownRight = __webpack_require__("8f27");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInUpLeft.css
var rotateInUpLeft = __webpack_require__("3064");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInUpRight.css
var rotateInUpRight = __webpack_require__("c9a2");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInDown.css
var slideInDown = __webpack_require__("8767");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInLeft.css
var slideInLeft = __webpack_require__("4a8e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInRight.css
var slideInRight = __webpack_require__("b828");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInUp.css
var slideInUp = __webpack_require__("3c1c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomIn.css
var zoomIn = __webpack_require__("21cb");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInDown.css
var zoomInDown = __webpack_require__("c00e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInLeft.css
var zoomInLeft = __webpack_require__("e4a8");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInRight.css
var zoomInRight = __webpack_require__("e4d3");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInUp.css
var zoomInUp = __webpack_require__("f4d9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutDown.css
var backOutDown = __webpack_require__("fffd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutLeft.css
var backOutLeft = __webpack_require__("f645");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutRight.css
var backOutRight = __webpack_require__("639e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutUp.css
var backOutUp = __webpack_require__("34ee");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOut.css
var bounceOut = __webpack_require__("b794");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutDown.css
var bounceOutDown = __webpack_require__("af24");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutLeft.css
var bounceOutLeft = __webpack_require__("7c9c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutRight.css
var bounceOutRight = __webpack_require__("7bb2");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutUp.css
var bounceOutUp = __webpack_require__("64f7");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOut.css
var fadeOut = __webpack_require__("c382");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutBottomLeft.css
var fadeOutBottomLeft = __webpack_require__("053c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutBottomRight.css
var fadeOutBottomRight = __webpack_require__("c48f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutDown.css
var fadeOutDown = __webpack_require__("f5d1");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutDownBig.css
var fadeOutDownBig = __webpack_require__("3cec");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutLeft.css
var fadeOutLeft = __webpack_require__("c00ee");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutLeftBig.css
var fadeOutLeftBig = __webpack_require__("d450");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutRight.css
var fadeOutRight = __webpack_require__("ca07");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutRightBig.css
var fadeOutRightBig = __webpack_require__("14e3");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutTopLeft.css
var fadeOutTopLeft = __webpack_require__("9393");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutTopRight.css
var fadeOutTopRight = __webpack_require__("9227");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutUp.css
var fadeOutUp = __webpack_require__("1dba");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutUpBig.css
var fadeOutUpBig = __webpack_require__("674a");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipOutX.css
var flipOutX = __webpack_require__("de26");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipOutY.css
var flipOutY = __webpack_require__("6721");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedOutLeft.css
var lightSpeedOutLeft = __webpack_require__("9cb5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedOutRight.css
var lightSpeedOutRight = __webpack_require__("ed9b");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rollOut.css
var rollOut = __webpack_require__("fc83");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOut.css
var rotateOut = __webpack_require__("98e5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutDownLeft.css
var rotateOutDownLeft = __webpack_require__("605a");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutDownRight.css
var rotateOutDownRight = __webpack_require__("ba60");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutUpLeft.css
var rotateOutUpLeft = __webpack_require__("df07");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutUpRight.css
var rotateOutUpRight = __webpack_require__("7903");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutDown.css
var slideOutDown = __webpack_require__("e046");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutLeft.css
var slideOutLeft = __webpack_require__("58af");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutRight.css
var slideOutRight = __webpack_require__("7713");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutUp.css
var slideOutUp = __webpack_require__("0571");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOut.css
var zoomOut = __webpack_require__("3e27");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutDown.css
var zoomOutDown = __webpack_require__("6837");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutLeft.css
var zoomOutLeft = __webpack_require__("3fc9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutRight.css
var zoomOutRight = __webpack_require__("0693");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutUp.css
var zoomOutUp = __webpack_require__("bf41");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.sass
var css_app = __webpack_require__("0047");

// EXTERNAL MODULE: ./node_modules/@quasar/quasar-ui-qcalendar/src/index.sass
var src = __webpack_require__("b6d8");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("42d2");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Dialog.js + 2 modules
var Dialog = __webpack_require__("436b");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/BottomSheet.js + 1 modules
var BottomSheet = __webpack_require__("7518");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Loading.js
var Loading = __webpack_require__("f508");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__("1b3f");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Meta.js
var Meta = __webpack_require__("9c64");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {},
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  plugins: {
    Dialog: Dialog["a" /* default */],
    Notify: Notify["a" /* default */],
    BottomSheet: BottomSheet["a" /* default */],
    Loading: Loading["a" /* default */],
    LoadingBar: LoadingBar["a" /* default */],
    Meta: Meta["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=037b6655&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=037b6655&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_);
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/page_components.js
const pageComponents = {
  namespaced: true,
  state: {
    leftDrawer: true,
    leftDrawerMini: false,
    rightDrawer: false,
    pageErrors: [],
    pageComponent: '',
    pageUrl: '',
    pageDialog: false,
    imageViewerDialog: false,
    imageViewerCurrentSlide: 1,
    imageViewerImages: [],
    modelBind: {}
  },
  getters: {
    isDialogOpen(state) {
      if (state.pageDialog || state.rightDrawer) {
        return true;
      }

      return false;
    }

  },
  mutations: {
    setImageViewerDialog(state, value) {
      state.imageViewerDialog = value;
    },

    setImageViewerCurrentSlide(state, value) {
      state.imageViewerCurrentSlide = value;
    },

    setImageViewerImages(state, value) {
      state.imageViewerImages = value;
    },

    setLeftDrawer(state, value) {
      state.leftDrawer = value;
    },

    setLeftDrawerMini(state, value) {
      state.leftDrawerMini = value;
    },

    setRightDrawer(state, value) {
      state.rightDrawer = value;
    },

    setPageDialog(state, value) {
      state.pageDialog = value;
    },

    setPageComponent(state, value) {
      state.pageComponent = value;
    },

    setPageModelBind(state, value) {
      state.modelBind = value;
    },

    setPageUrl(state, value) {
      state.pageUrl = value;
    },

    setPageErrors(state, errors) {
      state.pageErrors = errors;
    }

  },
  actions: {
    openPageDrawer: ({
      commit
    }, payload) => {
      var _payload$modelBind;

      const {
        pageUrl,
        pageComponent
      } = payload;
      let modelBind = (_payload$modelBind = payload.modelBind) !== null && _payload$modelBind !== void 0 ? _payload$modelBind : {};
      commit("setPageModelBind", modelBind);
      commit("setPageUrl", pageUrl);
      commit("setPageComponent", pageComponent);
      commit("setRightDrawer", true);
    },
    openPageDialog: ({
      commit
    }, payload) => {
      var _payload$modelBind2;

      const {
        pageUrl,
        pageComponent
      } = payload;
      let modelBind = (_payload$modelBind2 = payload.modelBind) !== null && _payload$modelBind2 !== void 0 ? _payload$modelBind2 : {};
      commit("setPageModelBind", modelBind);
      commit("setPageUrl", pageUrl);
      commit("setPageComponent", pageComponent);
      commit("setPageDialog", true);
    },
    openImageViewDialog: ({
      commit
    }, payload) => {
      const {
        images,
        currentSlide
      } = payload;
      commit("setImageViewerDialog", true);
      commit("setImageViewerCurrentSlide", currentSlide);
      commit("setImageViewerImages", images);
    },
    showPageErrors: ({
      commit
    }, errors) => {
      commit("setPageErrors", errors);
    }
  }
};
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/services/storage.js
/**
 * Manage the how Access User Login data and Auth Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to sessionStorage or localStorage
**/
const TOKEN_KEY = 'token';
const LOCALE_KEY = 'locale';
const StorageService = {
  setLocale(locale) {
    localStorage.setItem(LOCALE_KEY, locale);
  },

  getLocale() {
    return localStorage.getItem(LOCALE_KEY);
  },

  getToken() {
    return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
  },

  saveLoginData(loginData, remember) {
    let token = loginData.token;

    if (remember) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      sessionStorage.setItem(TOKEN_KEY, token);
    }
  },

  removeLoginData() {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY); //remove language locale

    localStorage.removeItem(LOCALE_KEY);
  }

};
// CONCATENATED MODULE: ./src/services/api.js


const ApiService = {
  init(baseURL) {
    axios_default.a.defaults.baseURL = baseURL; //axios.defaults.headers.post['Content-Type']  = 'application/x-www-form-urlencoded';

    axios_default.a.defaults.headers.post['Content-Type'] = 'application/json'; // If token exists set header

    let token = StorageService.getToken();

    if (token) {
      axios_default.a.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },

  removeHeader() {
    axios_default.a.defaults.headers.common = {};
  },

  get(apiPath) {
    return axios_default.a.get(apiPath);
  },

  download(apiPath) {
    return axios_default()({
      url: apiPath,
      method: 'GET',
      responseType: 'blob' // important

    });
  },

  post(apiPath, data) {
    return axios_default.a.post(apiPath, data);
  },

  put(apiPath, data) {
    return axios_default.a.put(apiPath, formData);
  },

  delete(apiPath) {
    return axios_default.a.delete(apiPath);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
  **/
  customRequest(data) {
    return axios_default()(data);
  },

  axios() {
    return axios_default.a;
  }

};
// CONCATENATED MODULE: ./src/store/auth.js



const auth = {
  namespaced: true,
  state: {
    user: null,
    userPages: [],
    userRoles: []
  },
  getters: {
    getLoginToken(state) {
      let token = StorageService.getToken() || null;
      return token;
    }

  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData.user;
      state.userPages = userData.pages;
      state.userRoles = userData.roles;
    }

  },
  actions: {
    getUserData: async ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        ApiService.get("account/currentuserdata").then(resp => {
          let data = resp.data;
          commit("setUserData", data);
          resolve(data);
        }).catch(err => {
          reject(err);
        });
      });
    },
    login: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        ApiService.post("auth/login", payload.formData).then(resp => {
          let loginData = resp.data;

          if (loginData.user && loginData.token) {
            StorageService.saveLoginData(loginData, payload.rememberUser);
          }

          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    logout: ({
      commit
    }) => {
      // Remove the token and remove Authorization header from Api Service as well
      StorageService.removeLoginData();
      ApiService.removeHeader();
    }
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./src/store/roles.js



const roles = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/access_rights.js



const access_rights = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/amateur_doc_types.js



const amateur_doc_types = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/amateur_operator_applications.js



const amateur_operator_applications = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/access_lists.js



const access_lists = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/amateur_station_types.js



const amateur_station_types = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/exam_ratings.js



const exam_ratings = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/cities.js



const cities = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/certicate_application_assignments.js



const certicate_application_assignments = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/barangays.js



const barangays = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/application_prerequisites.js



const application_prerequisites = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/applications.js



const applications = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/companies.js



const companies = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/certicate_application_types.js



const certicate_application_types = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/billing_matrixes.js



const billing_matrixes = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/assigned_roles.js



const assigned_roles = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/application_billing_particulars.js



const application_billing_particulars = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/documents.js



const documents = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/chart_of_accounts.js



const chart_of_accounts = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/billing_templates.js



const billing_templates = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/attachments.js



const attachments = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/application_categories.js



const application_categories = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/ptp_nature_of_services.js



const ptp_nature_of_services = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/payment_channels.js



const payment_channels = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/forms.js



const forms_forms = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/exam_schedules.js



const exam_schedules = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/ptp_radio_services.js



const ptp_radio_services = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/provinces.js



const provinces = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/operator_certificate_applications.js



const operator_certificate_applications = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/fields.js



const fields = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/ptp_station_classes.js



const ptp_station_classes = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/ptpurchase_applications.js



const ptpurchase_applications = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/operator_certificate_types.js



const operator_certificate_types = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/field_groups.js



const field_groups = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/radio_equipments.js



const radio_equipments = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/regions.js



const regions = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/radio_operator_exams.js



const radio_operator_exams = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/required_attachments.js



const required_attachments = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/radio_operator_exam_types.js



const radio_operator_exam_types = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/radio_operator_services.js



const radio_operator_services = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/user_employments.js



const user_employments = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/submitted_application_logs.js



const submitted_application_logs = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/services.js



const services = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/user_vitals.js



const user_vitals = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/uacs.js



const uacs = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/settings.js



const settings = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/users.js



const users = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/submitted_applications.js



const submitted_applications = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/permissions.js



const permissions = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/role_has_permissions.js



const role_has_permissions = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['role_id'] === record['role_id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['role_id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['role_id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/model_has_permissions.js



const model_has_permissions = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['model_id'] === record['model_id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['model_id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['model_id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/model_has_roles.js



const model_has_roles = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['model_id'] === record['model_id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['model_id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['model_id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/audits.js



const audits = {
  namespaced: true,
  state: {
    currentRecord: {},
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/index.js

























































vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  const Store = new vuex_esm["a" /* default */].Store({
    modules: {
      pageComponents: pageComponents,
      auth: auth,
      roles: roles,
      access_rights: access_rights,
      amateur_doc_types: amateur_doc_types,
      amateur_operator_applications: amateur_operator_applications,
      access_lists: access_lists,
      amateur_station_types: amateur_station_types,
      exam_ratings: exam_ratings,
      cities: cities,
      certicate_application_assignments: certicate_application_assignments,
      barangays: barangays,
      application_prerequisites: application_prerequisites,
      applications: applications,
      companies: companies,
      certicate_application_types: certicate_application_types,
      billing_matrixes: billing_matrixes,
      assigned_roles: assigned_roles,
      application_billing_particulars: application_billing_particulars,
      documents: documents,
      chart_of_accounts: chart_of_accounts,
      billing_templates: billing_templates,
      attachments: attachments,
      application_categories: application_categories,
      ptp_nature_of_services: ptp_nature_of_services,
      payment_channels: payment_channels,
      forms: forms_forms,
      exam_schedules: exam_schedules,
      ptp_radio_services: ptp_radio_services,
      provinces: provinces,
      operator_certificate_applications: operator_certificate_applications,
      fields: fields,
      ptp_station_classes: ptp_station_classes,
      ptpurchase_applications: ptpurchase_applications,
      operator_certificate_types: operator_certificate_types,
      field_groups: field_groups,
      radio_equipments: radio_equipments,
      regions: regions,
      radio_operator_exams: radio_operator_exams,
      required_attachments: required_attachments,
      radio_operator_exam_types: radio_operator_exam_types,
      radio_operator_services: radio_operator_services,
      user_employments: user_employments,
      submitted_application_logs: submitted_application_logs,
      services: services,
      user_vitals: user_vitals,
      uacs: uacs,
      settings: settings,
      users: users,
      submitted_applications: submitted_applications,
      permissions: permissions,
      role_has_permissions: role_has_permissions,
      model_has_permissions: model_has_permissions,
      model_has_roles: model_has_roles,
      audits: audits
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  });
  return Store;
});
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
let routes = [{
  name: 'main',
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(216)]).then(__webpack_require__.bind(null, "713b")),
  children: [//Dashboard routes
  //roles routes
  {
    path: '/roles/',
    name: 'roleslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, "1825")),
    props: true
  }, {
    path: '/roles/(list|index)/:fieldName?/:fieldValue?',
    name: 'roleslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, "1825")),
    props: true
  }, {
    path: '/roles/view/:id',
    name: 'rolesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(190)]).then(__webpack_require__.bind(null, "f0b9")),
    props: true
  }, {
    path: '/roles/add',
    name: 'rolesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(188)]).then(__webpack_require__.bind(null, "a7f1")),
    props: true
  }, {
    path: '/roles/edit/:id',
    name: 'rolesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(189)]).then(__webpack_require__.bind(null, "9b82")),
    props: true
  }, //access_rights routes
  {
    path: '/access_rights/',
    name: 'access_rightslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "34bc")),
    props: true
  }, {
    path: '/access_rights/(list|index)/:fieldName?/:fieldValue?',
    name: 'access_rightslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "34bc")),
    props: true
  }, {
    path: '/access_rights/view/:id',
    name: 'access_rightsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(62)]).then(__webpack_require__.bind(null, "e694")),
    props: true
  }, {
    path: '/access_rights/add',
    name: 'access_rightsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(60)]).then(__webpack_require__.bind(null, "9ad0")),
    props: true
  }, {
    path: '/access_rights/edit/:id',
    name: 'access_rightsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(61)]).then(__webpack_require__.bind(null, "37fe")),
    props: true
  }, //amateur_doc_types routes
  {
    path: '/amateur_doc_types/',
    name: 'amateur_doc_typeslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "3f04")),
    props: true
  }, {
    path: '/amateur_doc_types/(list|index)/:fieldName?/:fieldValue?',
    name: 'amateur_doc_typeslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "3f04")),
    props: true
  }, {
    path: '/amateur_doc_types/view/:id',
    name: 'amateur_doc_typesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(65)]).then(__webpack_require__.bind(null, "f3e2")),
    props: true
  }, {
    path: '/amateur_doc_types/add',
    name: 'amateur_doc_typesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(63)]).then(__webpack_require__.bind(null, "2485")),
    props: true
  }, {
    path: '/amateur_doc_types/edit/:id',
    name: 'amateur_doc_typesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, "e755")),
    props: true
  }, //amateur_operator_applications routes
  {
    path: '/amateur_operator_applications/',
    name: 'amateur_operator_applicationslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "a984")),
    props: true
  }, {
    path: '/amateur_operator_applications/(list|index)/:fieldName?/:fieldValue?',
    name: 'amateur_operator_applicationslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "a984")),
    props: true
  }, {
    path: '/amateur_operator_applications/view/:id',
    name: 'amateur_operator_applicationsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(66)]).then(__webpack_require__.bind(null, "42a1")),
    props: true
  }, {
    path: '/amateur_operator_applications/add',
    name: 'amateur_operator_applicationsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "251f")),
    props: true
  }, {
    path: '/amateur_operator_applications/edit/:id',
    name: 'amateur_operator_applicationsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "f375")),
    props: true
  }, //access_lists routes
  {
    path: '/access_lists/',
    name: 'access_listslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "bddc")),
    props: true
  }, {
    path: '/access_lists/(list|index)/:fieldName?/:fieldValue?',
    name: 'access_listslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "bddc")),
    props: true
  }, {
    path: '/access_lists/view/:id',
    name: 'access_listsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(59)]).then(__webpack_require__.bind(null, "fdf7")),
    props: true
  }, {
    path: '/access_lists/add',
    name: 'access_listsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(57)]).then(__webpack_require__.bind(null, "e676")),
    props: true
  }, {
    path: '/access_lists/edit/:id',
    name: 'access_listsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(58)]).then(__webpack_require__.bind(null, "7999")),
    props: true
  }, //amateur_station_types routes
  {
    path: '/amateur_station_types/',
    name: 'amateur_station_typeslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "1ad8")),
    props: true
  }, {
    path: '/amateur_station_types/(list|index)/:fieldName?/:fieldValue?',
    name: 'amateur_station_typeslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "1ad8")),
    props: true
  }, {
    path: '/amateur_station_types/view/:id',
    name: 'amateur_station_typesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(69)]).then(__webpack_require__.bind(null, "309b")),
    props: true
  }, {
    path: '/amateur_station_types/add',
    name: 'amateur_station_typesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(67)]).then(__webpack_require__.bind(null, "39ab")),
    props: true
  }, {
    path: '/amateur_station_types/edit/:id',
    name: 'amateur_station_typesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(68)]).then(__webpack_require__.bind(null, "ff43")),
    props: true
  }, //exam_ratings routes
  {
    path: '/exam_ratings/',
    name: 'exam_ratingslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, "7ea4")),
    props: true
  }, {
    path: '/exam_ratings/(list|index)/:fieldName?/:fieldValue?',
    name: 'exam_ratingslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, "7ea4")),
    props: true
  }, {
    path: '/exam_ratings/view/:id',
    name: 'exam_ratingsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(121)]).then(__webpack_require__.bind(null, "7deb")),
    props: true
  }, {
    path: '/exam_ratings/add',
    name: 'exam_ratingsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(119)]).then(__webpack_require__.bind(null, "adaf")),
    props: true
  }, {
    path: '/exam_ratings/edit/:id',
    name: 'exam_ratingsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(120)]).then(__webpack_require__.bind(null, "d0d0")),
    props: true
  }, //cities routes
  {
    path: '/cities/',
    name: 'citieslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "6f63")),
    props: true
  }, {
    path: '/cities/(list|index)/:fieldName?/:fieldValue?',
    name: 'citieslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "6f63")),
    props: true
  }, {
    path: '/cities/view/:id',
    name: 'citiesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(111)]).then(__webpack_require__.bind(null, "fb61")),
    props: true
  }, {
    path: '/cities/add',
    name: 'citiesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(109)]).then(__webpack_require__.bind(null, "7b90")),
    props: true
  }, {
    path: '/cities/edit/:id',
    name: 'citiesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(110)]).then(__webpack_require__.bind(null, "7b82")),
    props: true
  }, //certicate_application_assignments routes
  {
    path: '/certicate_application_assignments/',
    name: 'certicate_application_assignmentslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "7b7e")),
    props: true
  }, {
    path: '/certicate_application_assignments/(list|index)/:fieldName?/:fieldValue?',
    name: 'certicate_application_assignmentslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "7b7e")),
    props: true
  }, {
    path: '/certicate_application_assignments/view/:id',
    name: 'certicate_application_assignmentsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(102)]).then(__webpack_require__.bind(null, "9665")),
    props: true
  }, {
    path: '/certicate_application_assignments/add',
    name: 'certicate_application_assignmentsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(100)]).then(__webpack_require__.bind(null, "3e10")),
    props: true
  }, {
    path: '/certicate_application_assignments/edit/:id',
    name: 'certicate_application_assignmentsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(101)]).then(__webpack_require__.bind(null, "c7ba")),
    props: true
  }, //barangays routes
  {
    path: '/barangays/',
    name: 'barangayslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "17f7")),
    props: true
  }, {
    path: '/barangays/(list|index)/:fieldName?/:fieldValue?',
    name: 'barangayslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "17f7")),
    props: true
  }, {
    path: '/barangays/view/:id',
    name: 'barangaysview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(93)]).then(__webpack_require__.bind(null, "37c6")),
    props: true
  }, {
    path: '/barangays/add',
    name: 'barangaysadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(91)]).then(__webpack_require__.bind(null, "e7ed")),
    props: true
  }, {
    path: '/barangays/edit/:id',
    name: 'barangaysedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(92)]).then(__webpack_require__.bind(null, "89cb")),
    props: true
  }, //application_prerequisites routes
  {
    path: '/application_prerequisites/',
    name: 'application_prerequisiteslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "cff0")),
    props: true
  }, {
    path: '/application_prerequisites/(list|index)/:fieldName?/:fieldValue?',
    name: 'application_prerequisiteslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "cff0")),
    props: true
  }, {
    path: '/application_prerequisites/view/:id',
    name: 'application_prerequisitesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(78)]).then(__webpack_require__.bind(null, "2c48")),
    props: true
  }, {
    path: '/application_prerequisites/add',
    name: 'application_prerequisitesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(76)]).then(__webpack_require__.bind(null, "bf52")),
    props: true
  }, {
    path: '/application_prerequisites/edit/:id',
    name: 'application_prerequisitesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(77)]).then(__webpack_require__.bind(null, "71e8")),
    props: true
  }, //applications routes
  {
    path: '/applications/',
    name: 'applicationslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "398a")),
    props: true
  }, {
    path: '/applications/(list|index)/:fieldName?/:fieldValue?',
    name: 'applicationslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "398a")),
    props: true
  }, {
    path: '/applications/view/:id',
    name: 'applicationsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(81)]).then(__webpack_require__.bind(null, "c399")),
    props: true
  }, {
    path: '/applications/add',
    name: 'applicationsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(79)]).then(__webpack_require__.bind(null, "d5f8")),
    props: true
  }, {
    path: '/applications/edit/:id',
    name: 'applicationsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(80)]).then(__webpack_require__.bind(null, "27be")),
    props: true
  }, //companies routes
  {
    path: '/companies/',
    name: 'companieslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "b281")),
    props: true
  }, {
    path: '/companies/(list|index)/:fieldName?/:fieldValue?',
    name: 'companieslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "b281")),
    props: true
  }, {
    path: '/companies/view/:id',
    name: 'companiesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(114)]).then(__webpack_require__.bind(null, "8fb4")),
    props: true
  }, {
    path: '/companies/add',
    name: 'companiesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(112)]).then(__webpack_require__.bind(null, "6f3d")),
    props: true
  }, {
    path: '/companies/edit/:id',
    name: 'companiesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(113)]).then(__webpack_require__.bind(null, "c7da")),
    props: true
  }, //certicate_application_types routes
  {
    path: '/certicate_application_types/',
    name: 'certicate_application_typeslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "6e0c")),
    props: true
  }, {
    path: '/certicate_application_types/(list|index)/:fieldName?/:fieldValue?',
    name: 'certicate_application_typeslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "6e0c")),
    props: true
  }, {
    path: '/certicate_application_types/view/:id',
    name: 'certicate_application_typesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(105)]).then(__webpack_require__.bind(null, "ea51")),
    props: true
  }, {
    path: '/certicate_application_types/add',
    name: 'certicate_application_typesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(103)]).then(__webpack_require__.bind(null, "c656")),
    props: true
  }, {
    path: '/certicate_application_types/edit/:id',
    name: 'certicate_application_typesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(104)]).then(__webpack_require__.bind(null, "8721")),
    props: true
  }, //billing_matrixes routes
  {
    path: '/billing_matrixes/',
    name: 'billing_matrixeslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "8682")),
    props: true
  }, {
    path: '/billing_matrixes/(list|index)/:fieldName?/:fieldValue?',
    name: 'billing_matrixeslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "8682")),
    props: true
  }, {
    path: '/billing_matrixes/view/:id',
    name: 'billing_matrixesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(96)]).then(__webpack_require__.bind(null, "bc39")),
    props: true
  }, {
    path: '/billing_matrixes/add',
    name: 'billing_matrixesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(94)]).then(__webpack_require__.bind(null, "e7a5")),
    props: true
  }, {
    path: '/billing_matrixes/edit/:id',
    name: 'billing_matrixesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(95)]).then(__webpack_require__.bind(null, "f545")),
    props: true
  }, //assigned_roles routes
  {
    path: '/assigned_roles/',
    name: 'assigned_roleslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "fa98")),
    props: true
  }, {
    path: '/assigned_roles/(list|index)/:fieldName?/:fieldValue?',
    name: 'assigned_roleslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "fa98")),
    props: true
  }, {
    path: '/assigned_roles/view/:id',
    name: 'assigned_rolesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(84)]).then(__webpack_require__.bind(null, "6dee")),
    props: true
  }, {
    path: '/assigned_roles/add',
    name: 'assigned_rolesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(82)]).then(__webpack_require__.bind(null, "ab0e")),
    props: true
  }, {
    path: '/assigned_roles/edit/:id',
    name: 'assigned_rolesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(83)]).then(__webpack_require__.bind(null, "57b3")),
    props: true
  }, //application_billing_particulars routes
  {
    path: '/application_billing_particulars/',
    name: 'application_billing_particularslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "1a28")),
    props: true
  }, {
    path: '/application_billing_particulars/(list|index)/:fieldName?/:fieldValue?',
    name: 'application_billing_particularslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "1a28")),
    props: true
  }, {
    path: '/application_billing_particulars/view/:id',
    name: 'application_billing_particularsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(72)]).then(__webpack_require__.bind(null, "fdb3")),
    props: true
  }, {
    path: '/application_billing_particulars/add',
    name: 'application_billing_particularsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(70)]).then(__webpack_require__.bind(null, "ed5e2")),
    props: true
  }, {
    path: '/application_billing_particulars/edit/:id',
    name: 'application_billing_particularsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(71)]).then(__webpack_require__.bind(null, "4c64")),
    props: true
  }, //documents routes
  {
    path: '/documents/',
    name: 'documentslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "fa6d")),
    props: true
  }, {
    path: '/documents/(list|index)/:fieldName?/:fieldValue?',
    name: 'documentslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "fa6d")),
    props: true
  }, {
    path: '/documents/view/:id',
    name: 'documentsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(117)]).then(__webpack_require__.bind(null, "f9e6")),
    props: true
  }, {
    path: '/documents/add',
    name: 'documentsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(115)]).then(__webpack_require__.bind(null, "4ccf")),
    props: true
  }, {
    path: '/documents/edit/:id',
    name: 'documentsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(116)]).then(__webpack_require__.bind(null, "9f1a")),
    props: true
  }, //chart_of_accounts routes
  {
    path: '/chart_of_accounts/',
    name: 'chart_of_accountslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "2069")),
    props: true
  }, {
    path: '/chart_of_accounts/(list|index)/:fieldName?/:fieldValue?',
    name: 'chart_of_accountslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "2069")),
    props: true
  }, {
    path: '/chart_of_accounts/view/:id',
    name: 'chart_of_accountsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(108)]).then(__webpack_require__.bind(null, "f3ce")),
    props: true
  }, {
    path: '/chart_of_accounts/add',
    name: 'chart_of_accountsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(106)]).then(__webpack_require__.bind(null, "8fb9")),
    props: true
  }, {
    path: '/chart_of_accounts/edit/:id',
    name: 'chart_of_accountsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(107)]).then(__webpack_require__.bind(null, "7d1d")),
    props: true
  }, //billing_templates routes
  {
    path: '/billing_templates/',
    name: 'billing_templateslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "fb14")),
    props: true
  }, {
    path: '/billing_templates/(list|index)/:fieldName?/:fieldValue?',
    name: 'billing_templateslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "fb14")),
    props: true
  }, {
    path: '/billing_templates/view/:id',
    name: 'billing_templatesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(99)]).then(__webpack_require__.bind(null, "8714")),
    props: true
  }, {
    path: '/billing_templates/add',
    name: 'billing_templatesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(97)]).then(__webpack_require__.bind(null, "08b3")),
    props: true
  }, {
    path: '/billing_templates/edit/:id',
    name: 'billing_templatesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(98)]).then(__webpack_require__.bind(null, "7f8c")),
    props: true
  }, //attachments routes
  {
    path: '/attachments/',
    name: 'attachmentslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "426f")),
    props: true
  }, {
    path: '/attachments/(list|index)/:fieldName?/:fieldValue?',
    name: 'attachmentslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "426f")),
    props: true
  }, {
    path: '/attachments/view/:id',
    name: 'attachmentsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(87)]).then(__webpack_require__.bind(null, "e30c")),
    props: true
  }, {
    path: '/attachments/add',
    name: 'attachmentsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(85)]).then(__webpack_require__.bind(null, "4013")),
    props: true
  }, {
    path: '/attachments/edit/:id',
    name: 'attachmentsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(86)]).then(__webpack_require__.bind(null, "641a")),
    props: true
  }, //application_categories routes
  {
    path: '/application_categories/',
    name: 'application_categorieslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "cca6")),
    props: true
  }, {
    path: '/application_categories/(list|index)/:fieldName?/:fieldValue?',
    name: 'application_categorieslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "cca6")),
    props: true
  }, {
    path: '/application_categories/view/:id',
    name: 'application_categoriesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(75)]).then(__webpack_require__.bind(null, "24ae")),
    props: true
  }, {
    path: '/application_categories/add',
    name: 'application_categoriesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(73)]).then(__webpack_require__.bind(null, "ca58")),
    props: true
  }, {
    path: '/application_categories/edit/:id',
    name: 'application_categoriesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(74)]).then(__webpack_require__.bind(null, "b86c")),
    props: true
  }, //ptp_nature_of_services routes
  {
    path: '/ptp_nature_of_services/',
    name: 'ptp_nature_of_serviceslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, "016b")),
    props: true
  }, {
    path: '/ptp_nature_of_services/(list|index)/:fieldName?/:fieldValue?',
    name: 'ptp_nature_of_serviceslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, "016b")),
    props: true
  }, {
    path: '/ptp_nature_of_services/view/:id',
    name: 'ptp_nature_of_servicesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(157)]).then(__webpack_require__.bind(null, "c86a")),
    props: true
  }, {
    path: '/ptp_nature_of_services/add',
    name: 'ptp_nature_of_servicesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(155)]).then(__webpack_require__.bind(null, "cd85")),
    props: true
  }, {
    path: '/ptp_nature_of_services/edit/:id',
    name: 'ptp_nature_of_servicesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(156)]).then(__webpack_require__.bind(null, "45d1")),
    props: true
  }, //payment_channels routes
  {
    path: '/payment_channels/',
    name: 'payment_channelslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, "f4f6")),
    props: true
  }, {
    path: '/payment_channels/(list|index)/:fieldName?/:fieldValue?',
    name: 'payment_channelslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, "f4f6")),
    props: true
  }, {
    path: '/payment_channels/view/:id',
    name: 'payment_channelsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(148)]).then(__webpack_require__.bind(null, "454e")),
    props: true
  }, {
    path: '/payment_channels/add',
    name: 'payment_channelsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(146)]).then(__webpack_require__.bind(null, "a8a9")),
    props: true
  }, {
    path: '/payment_channels/edit/:id',
    name: 'payment_channelsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(147)]).then(__webpack_require__.bind(null, "6ac1")),
    props: true
  }, //forms routes
  {
    path: '/forms/',
    name: 'formslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, "5bbc")),
    props: true
  }, {
    path: '/forms/(list|index)/:fieldName?/:fieldValue?',
    name: 'formslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, "5bbc")),
    props: true
  }, {
    path: '/forms/view/:id',
    name: 'formsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(129)]).then(__webpack_require__.bind(null, "ce92")),
    props: true
  }, {
    path: '/forms/add',
    name: 'formsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "5ec9")),
    props: true
  }, {
    path: '/forms/edit/:id',
    name: 'formsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "89f4")),
    props: true
  }, //exam_schedules routes
  {
    path: '/exam_schedules/',
    name: 'exam_scheduleslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, "4018")),
    props: true
  }, {
    path: '/exam_schedules/(list|index)/:fieldName?/:fieldValue?',
    name: 'exam_scheduleslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, "4018")),
    props: true
  }, {
    path: '/exam_schedules/view/:id',
    name: 'exam_schedulesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(122)]).then(__webpack_require__.bind(null, "72fe")),
    props: true
  }, {
    path: '/exam_schedules/add',
    name: 'exam_schedulesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "7ccc")),
    props: true
  }, {
    path: '/exam_schedules/edit/:id',
    name: 'exam_schedulesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "0fa5")),
    props: true
  }, //ptp_radio_services routes
  {
    path: '/ptp_radio_services/',
    name: 'ptp_radio_serviceslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, "b3a8")),
    props: true
  }, {
    path: '/ptp_radio_services/(list|index)/:fieldName?/:fieldValue?',
    name: 'ptp_radio_serviceslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, "b3a8")),
    props: true
  }, {
    path: '/ptp_radio_services/view/:id',
    name: 'ptp_radio_servicesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(160)]).then(__webpack_require__.bind(null, "bab3")),
    props: true
  }, {
    path: '/ptp_radio_services/add',
    name: 'ptp_radio_servicesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(158)]).then(__webpack_require__.bind(null, "c400")),
    props: true
  }, {
    path: '/ptp_radio_services/edit/:id',
    name: 'ptp_radio_servicesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(159)]).then(__webpack_require__.bind(null, "fd1a")),
    props: true
  }, //provinces routes
  {
    path: '/provinces/',
    name: 'provinceslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, "00a5")),
    props: true
  }, {
    path: '/provinces/(list|index)/:fieldName?/:fieldValue?',
    name: 'provinceslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, "00a5")),
    props: true
  }, {
    path: '/provinces/view/:id',
    name: 'provincesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(154)]).then(__webpack_require__.bind(null, "589b")),
    props: true
  }, {
    path: '/provinces/add',
    name: 'provincesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(152)]).then(__webpack_require__.bind(null, "0316")),
    props: true
  }, {
    path: '/provinces/edit/:id',
    name: 'provincesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(153)]).then(__webpack_require__.bind(null, "e5cb")),
    props: true
  }, //operator_certificate_applications routes
  {
    path: '/operator_certificate_applications/',
    name: 'operator_certificate_applicationslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, "a2c0")),
    props: true
  }, {
    path: '/operator_certificate_applications/(list|index)/:fieldName?/:fieldValue?',
    name: 'operator_certificate_applicationslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, "a2c0")),
    props: true
  }, {
    path: '/operator_certificate_applications/view/:id',
    name: 'operator_certificate_applicationsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(142)]).then(__webpack_require__.bind(null, "fe85")),
    props: true
  }, {
    path: '/operator_certificate_applications/add',
    name: 'operator_certificate_applicationsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "1465")),
    props: true
  }, {
    path: '/operator_certificate_applications/edit/:id',
    name: 'operator_certificate_applicationsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "f6db")),
    props: true
  }, //fields routes
  {
    path: '/fields/',
    name: 'fieldslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, "bfaa")),
    props: true
  }, {
    path: '/fields/(list|index)/:fieldName?/:fieldValue?',
    name: 'fieldslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, "bfaa")),
    props: true
  }, {
    path: '/fields/view/:id',
    name: 'fieldsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "a47c")),
    props: true
  }, {
    path: '/fields/add',
    name: 'fieldsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(126)]).then(__webpack_require__.bind(null, "b28e")),
    props: true
  }, {
    path: '/fields/edit/:id',
    name: 'fieldsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(127)]).then(__webpack_require__.bind(null, "d697")),
    props: true
  }, //ptp_station_classes routes
  {
    path: '/ptp_station_classes/',
    name: 'ptp_station_classeslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, "decf")),
    props: true
  }, {
    path: '/ptp_station_classes/(list|index)/:fieldName?/:fieldValue?',
    name: 'ptp_station_classeslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, "decf")),
    props: true
  }, {
    path: '/ptp_station_classes/view/:id',
    name: 'ptp_station_classesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(163)]).then(__webpack_require__.bind(null, "5535")),
    props: true
  }, {
    path: '/ptp_station_classes/add',
    name: 'ptp_station_classesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(161)]).then(__webpack_require__.bind(null, "00d4")),
    props: true
  }, {
    path: '/ptp_station_classes/edit/:id',
    name: 'ptp_station_classesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(162)]).then(__webpack_require__.bind(null, "1281")),
    props: true
  }, //ptpurchase_applications routes
  {
    path: '/ptpurchase_applications/',
    name: 'ptpurchase_applicationslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, "ec56")),
    props: true
  }, {
    path: '/ptpurchase_applications/(list|index)/:fieldName?/:fieldValue?',
    name: 'ptpurchase_applicationslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, "ec56")),
    props: true
  }, {
    path: '/ptpurchase_applications/view/:id',
    name: 'ptpurchase_applicationsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(166)]).then(__webpack_require__.bind(null, "69aa")),
    props: true
  }, {
    path: '/ptpurchase_applications/add',
    name: 'ptpurchase_applicationsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(164)]).then(__webpack_require__.bind(null, "f7a9")),
    props: true
  }, {
    path: '/ptpurchase_applications/edit/:id',
    name: 'ptpurchase_applicationsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(165)]).then(__webpack_require__.bind(null, "a564")),
    props: true
  }, //operator_certificate_types routes
  {
    path: '/operator_certificate_types/',
    name: 'operator_certificate_typeslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, "8247")),
    props: true
  }, {
    path: '/operator_certificate_types/(list|index)/:fieldName?/:fieldValue?',
    name: 'operator_certificate_typeslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, "8247")),
    props: true
  }, {
    path: '/operator_certificate_types/view/:id',
    name: 'operator_certificate_typesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(145)]).then(__webpack_require__.bind(null, "8600")),
    props: true
  }, {
    path: '/operator_certificate_types/add',
    name: 'operator_certificate_typesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(143)]).then(__webpack_require__.bind(null, "3768")),
    props: true
  }, {
    path: '/operator_certificate_types/edit/:id',
    name: 'operator_certificate_typesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(144)]).then(__webpack_require__.bind(null, "17d3")),
    props: true
  }, //field_groups routes
  {
    path: '/field_groups/',
    name: 'field_groupslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, "8e4d")),
    props: true
  }, {
    path: '/field_groups/(list|index)/:fieldName?/:fieldValue?',
    name: 'field_groupslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, "8e4d")),
    props: true
  }, {
    path: '/field_groups/view/:id',
    name: 'field_groupsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(125)]).then(__webpack_require__.bind(null, "e49c")),
    props: true
  }, {
    path: '/field_groups/add',
    name: 'field_groupsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(123)]).then(__webpack_require__.bind(null, "c93c")),
    props: true
  }, {
    path: '/field_groups/edit/:id',
    name: 'field_groupsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(124)]).then(__webpack_require__.bind(null, "3b29")),
    props: true
  }, //radio_equipments routes
  {
    path: '/radio_equipments/',
    name: 'radio_equipmentslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, "217a")),
    props: true
  }, {
    path: '/radio_equipments/(list|index)/:fieldName?/:fieldValue?',
    name: 'radio_equipmentslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, "217a")),
    props: true
  }, {
    path: '/radio_equipments/view/:id',
    name: 'radio_equipmentsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(169)]).then(__webpack_require__.bind(null, "eb5f")),
    props: true
  }, {
    path: '/radio_equipments/add',
    name: 'radio_equipmentsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(167)]).then(__webpack_require__.bind(null, "a776")),
    props: true
  }, {
    path: '/radio_equipments/edit/:id',
    name: 'radio_equipmentsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(168)]).then(__webpack_require__.bind(null, "f681")),
    props: true
  }, //regions routes
  {
    path: '/regions/',
    name: 'regionslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, "2a1e")),
    props: true
  }, {
    path: '/regions/(list|index)/:fieldName?/:fieldValue?',
    name: 'regionslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, "2a1e")),
    props: true
  }, {
    path: '/regions/view/:id',
    name: 'regionsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(181)]).then(__webpack_require__.bind(null, "56d0")),
    props: true
  }, {
    path: '/regions/add',
    name: 'regionsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(179)]).then(__webpack_require__.bind(null, "cd43")),
    props: true
  }, {
    path: '/regions/edit/:id',
    name: 'regionsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(180)]).then(__webpack_require__.bind(null, "b5b2")),
    props: true
  }, //radio_operator_exams routes
  {
    path: '/radio_operator_exams/',
    name: 'radio_operator_examslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, "ef3b")),
    props: true
  }, {
    path: '/radio_operator_exams/(list|index)/:fieldName?/:fieldValue?',
    name: 'radio_operator_examslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, "ef3b")),
    props: true
  }, {
    path: '/radio_operator_exams/view/:id',
    name: 'radio_operator_examsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(175)]).then(__webpack_require__.bind(null, "31e1")),
    props: true
  }, {
    path: '/radio_operator_exams/add',
    name: 'radio_operator_examsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(173)]).then(__webpack_require__.bind(null, "5375")),
    props: true
  }, {
    path: '/radio_operator_exams/edit/:id',
    name: 'radio_operator_examsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(174)]).then(__webpack_require__.bind(null, "1125")),
    props: true
  }, //required_attachments routes
  {
    path: '/required_attachments/',
    name: 'required_attachmentslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, "4449")),
    props: true
  }, {
    path: '/required_attachments/(list|index)/:fieldName?/:fieldValue?',
    name: 'required_attachmentslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, "4449")),
    props: true
  }, {
    path: '/required_attachments/view/:id',
    name: 'required_attachmentsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(184)]).then(__webpack_require__.bind(null, "a31d")),
    props: true
  }, {
    path: '/required_attachments/add',
    name: 'required_attachmentsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(182)]).then(__webpack_require__.bind(null, "80ae")),
    props: true
  }, {
    path: '/required_attachments/edit/:id',
    name: 'required_attachmentsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(183)]).then(__webpack_require__.bind(null, "a261")),
    props: true
  }, //radio_operator_exam_types routes
  {
    path: '/radio_operator_exam_types/',
    name: 'radio_operator_exam_typeslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(42)]).then(__webpack_require__.bind(null, "280e")),
    props: true
  }, {
    path: '/radio_operator_exam_types/(list|index)/:fieldName?/:fieldValue?',
    name: 'radio_operator_exam_typeslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(42)]).then(__webpack_require__.bind(null, "280e")),
    props: true
  }, {
    path: '/radio_operator_exam_types/view/:id',
    name: 'radio_operator_exam_typesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(172)]).then(__webpack_require__.bind(null, "ea7e")),
    props: true
  }, {
    path: '/radio_operator_exam_types/add',
    name: 'radio_operator_exam_typesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(170)]).then(__webpack_require__.bind(null, "a683")),
    props: true
  }, {
    path: '/radio_operator_exam_types/edit/:id',
    name: 'radio_operator_exam_typesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(171)]).then(__webpack_require__.bind(null, "1b13")),
    props: true
  }, //radio_operator_services routes
  {
    path: '/radio_operator_services/',
    name: 'radio_operator_serviceslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, "db12")),
    props: true
  }, {
    path: '/radio_operator_services/(list|index)/:fieldName?/:fieldValue?',
    name: 'radio_operator_serviceslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, "db12")),
    props: true
  }, {
    path: '/radio_operator_services/view/:id',
    name: 'radio_operator_servicesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(178)]).then(__webpack_require__.bind(null, "3e5c")),
    props: true
  }, {
    path: '/radio_operator_services/add',
    name: 'radio_operator_servicesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(176)]).then(__webpack_require__.bind(null, "f2df")),
    props: true
  }, {
    path: '/radio_operator_services/edit/:id',
    name: 'radio_operator_servicesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(177)]).then(__webpack_require__.bind(null, "9727")),
    props: true
  }, //user_employments routes
  {
    path: '/user_employments/',
    name: 'user_employmentslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(54)]).then(__webpack_require__.bind(null, "b815")),
    props: true
  }, {
    path: '/user_employments/(list|index)/:fieldName?/:fieldValue?',
    name: 'user_employmentslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(54)]).then(__webpack_require__.bind(null, "b815")),
    props: true
  }, {
    path: '/user_employments/view/:id',
    name: 'user_employmentsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(208)]).then(__webpack_require__.bind(null, "dd9d")),
    props: true
  }, {
    path: '/user_employments/add',
    name: 'user_employmentsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(206)]).then(__webpack_require__.bind(null, "c083")),
    props: true
  }, {
    path: '/user_employments/edit/:id',
    name: 'user_employmentsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(207)]).then(__webpack_require__.bind(null, "1297")),
    props: true
  }, //submitted_application_logs routes
  {
    path: '/submitted_application_logs/',
    name: 'submitted_application_logslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, "d3c4")),
    props: true
  }, {
    path: '/submitted_application_logs/(list|index)/:fieldName?/:fieldValue?',
    name: 'submitted_application_logslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, "d3c4")),
    props: true
  }, {
    path: '/submitted_application_logs/view/:id',
    name: 'submitted_application_logsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(199)]).then(__webpack_require__.bind(null, "864f")),
    props: true
  }, {
    path: '/submitted_application_logs/add',
    name: 'submitted_application_logsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(197)]).then(__webpack_require__.bind(null, "b6fa")),
    props: true
  }, {
    path: '/submitted_application_logs/edit/:id',
    name: 'submitted_application_logsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(198)]).then(__webpack_require__.bind(null, "d50c")),
    props: true
  }, //services routes
  {
    path: '/services/',
    name: 'serviceslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, "5230")),
    props: true
  }, {
    path: '/services/(list|index)/:fieldName?/:fieldValue?',
    name: 'serviceslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, "5230")),
    props: true
  }, {
    path: '/services/view/:id',
    name: 'servicesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(193)]).then(__webpack_require__.bind(null, "4969")),
    props: true
  }, {
    path: '/services/add',
    name: 'servicesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(191)]).then(__webpack_require__.bind(null, "5f32")),
    props: true
  }, {
    path: '/services/edit/:id',
    name: 'servicesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(192)]).then(__webpack_require__.bind(null, "e7a4")),
    props: true
  }, //user_vitals routes
  {
    path: '/user_vitals/',
    name: 'user_vitalslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, "c7dd")),
    props: true
  }, {
    path: '/user_vitals/(list|index)/:fieldName?/:fieldValue?',
    name: 'user_vitalslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, "c7dd")),
    props: true
  }, {
    path: '/user_vitals/view/:id',
    name: 'user_vitalsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(211)]).then(__webpack_require__.bind(null, "b379")),
    props: true
  }, {
    path: '/user_vitals/add',
    name: 'user_vitalsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(209)]).then(__webpack_require__.bind(null, "d8f4")),
    props: true
  }, {
    path: '/user_vitals/edit/:id',
    name: 'user_vitalsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(210)]).then(__webpack_require__.bind(null, "3d52")),
    props: true
  }, //uacs routes
  {
    path: '/uacs/',
    name: 'uacslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(53)]).then(__webpack_require__.bind(null, "c769")),
    props: true
  }, {
    path: '/uacs/(list|index)/:fieldName?/:fieldValue?',
    name: 'uacslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(53)]).then(__webpack_require__.bind(null, "c769")),
    props: true
  }, {
    path: '/uacs/view/:id',
    name: 'uacsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(205)]).then(__webpack_require__.bind(null, "b74d")),
    props: true
  }, {
    path: '/uacs/add',
    name: 'uacsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(203)]).then(__webpack_require__.bind(null, "c931")),
    props: true
  }, {
    path: '/uacs/edit/:id',
    name: 'uacsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(204)]).then(__webpack_require__.bind(null, "ee65")),
    props: true
  }, //settings routes
  {
    path: '/settings/',
    name: 'settingslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, "2959")),
    props: true
  }, {
    path: '/settings/(list|index)/:fieldName?/:fieldValue?',
    name: 'settingslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, "2959")),
    props: true
  }, {
    path: '/settings/view/:id',
    name: 'settingsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(196)]).then(__webpack_require__.bind(null, "6625")),
    props: true
  }, {
    path: '/settings/add',
    name: 'settingsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(194)]).then(__webpack_require__.bind(null, "a6ca")),
    props: true
  }, {
    path: '/settings/edit/:id',
    name: 'settingsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(195)]).then(__webpack_require__.bind(null, "37f9")),
    props: true
  }, //users routes
  {
    path: '/users/',
    name: 'userslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(56)]).then(__webpack_require__.bind(null, "ab4e")),
    props: true
  }, {
    path: '/users/(list|index)/:fieldName?/:fieldValue?',
    name: 'userslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(56)]).then(__webpack_require__.bind(null, "ab4e")),
    props: true
  }, {
    path: '/users/view/:id',
    name: 'usersview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(214)]).then(__webpack_require__.bind(null, "6fe7")),
    props: true
  }, {
    path: '/index/register',
    name: 'usersuserregister',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(135)]).then(__webpack_require__.bind(null, "2320")),
    props: true
  }, {
    path: '/account/edit',
    name: 'usersaccountedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "1fd7")),
    props: true
  }, {
    path: '/account',
    name: 'usersaccountview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "c3821")),
    props: true
  }, {
    path: '/users/add',
    name: 'usersadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(212)]).then(__webpack_require__.bind(null, "4a90")),
    props: true
  }, {
    path: '/users/edit/:id',
    name: 'usersedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(213)]).then(__webpack_require__.bind(null, "9e22")),
    props: true
  }, //submitted_applications routes
  {
    path: '/submitted_applications/',
    name: 'submitted_applicationslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(52)]).then(__webpack_require__.bind(null, "7b55")),
    props: true
  }, {
    path: '/submitted_applications/(list|index)/:fieldName?/:fieldValue?',
    name: 'submitted_applicationslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(52)]).then(__webpack_require__.bind(null, "7b55")),
    props: true
  }, {
    path: '/submitted_applications/view/:id',
    name: 'submitted_applicationsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(202)]).then(__webpack_require__.bind(null, "78b0")),
    props: true
  }, {
    path: '/submitted_applications/add',
    name: 'submitted_applicationsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(200)]).then(__webpack_require__.bind(null, "fda0")),
    props: true
  }, {
    path: '/submitted_applications/edit/:id',
    name: 'submitted_applicationsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(201)]).then(__webpack_require__.bind(null, "43db")),
    props: true
  }, //permissions routes
  {
    path: '/permissions/',
    name: 'permissionslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, "8e0a")),
    props: true
  }, {
    path: '/permissions/(list|index)/:fieldName?/:fieldValue?',
    name: 'permissionslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, "8e0a")),
    props: true
  }, {
    path: '/permissions/view/:id',
    name: 'permissionsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(151)]).then(__webpack_require__.bind(null, "b3a7")),
    props: true
  }, {
    path: '/permissions/add',
    name: 'permissionsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(149)]).then(__webpack_require__.bind(null, "fe88")),
    props: true
  }, {
    path: '/permissions/edit/:id',
    name: 'permissionsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(150)]).then(__webpack_require__.bind(null, "a698")),
    props: true
  }, //role_has_permissions routes
  {
    path: '/role_has_permissions/',
    name: 'role_has_permissionslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, "20f4")),
    props: true
  }, {
    path: '/role_has_permissions/(list|index)/:fieldName?/:fieldValue?',
    name: 'role_has_permissionslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, "20f4")),
    props: true
  }, {
    path: '/role_has_permissions/view/:id',
    name: 'role_has_permissionsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(187)]).then(__webpack_require__.bind(null, "1bcd")),
    props: true
  }, {
    path: '/role_has_permissions/add',
    name: 'role_has_permissionsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(185)]).then(__webpack_require__.bind(null, "4049")),
    props: true
  }, {
    path: '/role_has_permissions/edit/:id',
    name: 'role_has_permissionsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(186)]).then(__webpack_require__.bind(null, "5e36")),
    props: true
  }, //model_has_permissions routes
  {
    path: '/model_has_permissions/',
    name: 'model_has_permissionslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, "a9c6")),
    props: true
  }, {
    path: '/model_has_permissions/(list|index)/:fieldName?/:fieldValue?',
    name: 'model_has_permissionslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, "a9c6")),
    props: true
  }, {
    path: '/model_has_permissions/view/:id',
    name: 'model_has_permissionsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(138)]).then(__webpack_require__.bind(null, "784a")),
    props: true
  }, {
    path: '/model_has_permissions/add',
    name: 'model_has_permissionsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(136)]).then(__webpack_require__.bind(null, "74d4")),
    props: true
  }, {
    path: '/model_has_permissions/edit/:id',
    name: 'model_has_permissionsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(137)]).then(__webpack_require__.bind(null, "bcae")),
    props: true
  }, //model_has_roles routes
  {
    path: '/model_has_roles/',
    name: 'model_has_roleslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, "85e2")),
    props: true
  }, {
    path: '/model_has_roles/(list|index)/:fieldName?/:fieldValue?',
    name: 'model_has_roleslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, "85e2")),
    props: true
  }, {
    path: '/model_has_roles/view/:id',
    name: 'model_has_rolesview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(141)]).then(__webpack_require__.bind(null, "13a1")),
    props: true
  }, {
    path: '/model_has_roles/add',
    name: 'model_has_rolesadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(139)]).then(__webpack_require__.bind(null, "2935")),
    props: true
  }, {
    path: '/model_has_roles/edit/:id',
    name: 'model_has_rolesedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(140)]).then(__webpack_require__.bind(null, "43c4")),
    props: true
  }, //audits routes
  {
    path: '/audits/',
    name: 'auditslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "02bb")),
    props: true
  }, {
    path: '/audits/(list|index)/:fieldName?/:fieldValue?',
    name: 'auditslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "02bb")),
    props: true
  }, {
    path: '/audits/view/:id',
    name: 'auditsview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(90)]).then(__webpack_require__.bind(null, "62a9")),
    props: true
  }, {
    path: '/audits/add',
    name: 'auditsadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(88)]).then(__webpack_require__.bind(null, "7634")),
    props: true
  }, {
    path: '/audits/edit/:id',
    name: 'auditsedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(89)]).then(__webpack_require__.bind(null, "756f")),
    props: true
  }, //Password reset routes
  {
    path: '/index/forgotpassword',
    name: 'forgotpassword',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(132)]).then(__webpack_require__.bind(null, "038c")),
    props: true
  }, {
    path: '/index/resetpassword',
    name: 'resetpassword',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(133)]).then(__webpack_require__.bind(null, "61c2")),
    props: true
  }, {
    path: '/index/resetpassword_completed',
    name: 'resetpassword_completed',
    component: () => __webpack_require__.e(/* import() */ 134).then(__webpack_require__.bind(null, "3516")),
    props: true
  }, {
    path: '/error/forbidden',
    name: 'forbidden',
    component: () => __webpack_require__.e(/* import() */ 118).then(__webpack_require__.bind(null, "601c")),
    props: true
  }, {
    path: '/error/notfound',
    name: 'notfound',
    component: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "422c")),
    props: true
  }]
}];
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (async function ({
  store,
  ssrContext
}) {
  let mainRoute = routes.find(x => x.name = "main");
  let loginToken = store.getters["auth/getLoginToken"];

  if (loginToken) {
    try {
      /*
       * get current user data
       * user data can be access anywhere using auth store
      */
      await store.dispatch('auth/getUserData');
      let userRoles = store.state.auth.userRoles;
      let defaultRole = (userRoles[0] || "").toLowerCase();

      switch (defaultRole) {
        case "administrator":
          mainRoute.children.push({
            path: '/(home)?',
            name: 'administrator',
            component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(130)]).then(__webpack_require__.bind(null, "f4d6")),
            props: true
          });

        default:
          mainRoute.children.push({
            path: '/(index|home)?',
            name: 'home',
            component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(131)]).then(__webpack_require__.bind(null, "22cd")),
            props: true
          });
      }
    } catch (e) {
      /*
       * getting current user detail failed
       * token must be invalid
      */
      mainRoute.children.push({
        path: '/(index|home)?',
        name: 'index',
        component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, "f75a")),
        props: true
      });
    }
  } else {
    mainRoute.children.push({
      path: '/(index|home)?',
      name: 'index',
      component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, "f75a")),
      props: true
    });
  } // Always leave this as last one


  if (true) {
    mainRoute.children.push({
      path: '*',
      component: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "422c"))
    });
  }

  const Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (async function () {
  // create store and router instances
  const store = typeof src_store === 'function' ? await src_store({
    Vue: vue_runtime_esm["a" /* default */]
  }) : src_store;
  const router = typeof src_router === 'function' ? await src_router({
    Vue: vue_runtime_esm["a" /* default */],
    store
  }) : src_router; // make router instance available in store

  store.$router = router; // Create the app instantiation Object.
  // Here we inject the router, store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    router,
    store,
    render: h => h(App)
  };
  app.el = '#q-app'; // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    router
  };
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AutoCompleteSelect.vue?vue&type=template&id=7a4f6fa4&
var AutoCompleteSelectvue_type_template_id_7a4f6fa4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-select',_vm._b({attrs:{"label":_vm.label,"loading":_vm.loading,"use-input":"","hide-selected":"","fill-input":"","emit-value":"","map-options":"","options":_vm.options},on:{"filter":_vm.filterFn,"input":_vm.emitValue},scopedSlots:_vm._u([{key:"no-option",fn:function(){return [_c('q-item',[_c('q-item-section',{staticClass:"text-grey"},[_vm._v("\n              No results\n            ")])],1)]},proxy:true}]),model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'q-select',_vm.$attrs,false))}
var AutoCompleteSelectvue_type_template_id_7a4f6fa4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AutoCompleteSelect.vue?vue&type=template&id=7a4f6fa4&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AutoCompleteSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AutoCompleteSelectvue_type_script_lang_js_ = ({
  props: {
    apiPath: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    value: ''
  },
  data: function () {
    return {
      loading: false,
      model: null,
      options: []
    };
  },
  methods: {
    filterFn(val, update, abort) {
      if (!val) {
        abort();
        return;
      }

      let qs = this.$utils.serializeQuery({
        search: val
      });
      let url = this.apiPath + "?" + qs;
      this.loading = true;
      this.$api.get(url).then(response => {
        this.loading = false;
        update(() => {
          this.options = response.data;
        });
      }, response => {
        this.loading = false;
      });
    },

    emitValue() {
      this.$emit('input', this.model);
    }

  },

  mounted() {
    if (this.value) {
      this.model = this.value;
    }
  }

});
// CONCATENATED MODULE: ./src/components/AutoCompleteSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AutoCompleteSelectvue_type_script_lang_js_ = (AutoCompleteSelectvue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/AutoCompleteSelect.vue





/* normalize component */

var AutoCompleteSelect_component = Object(componentNormalizer["a" /* default */])(
  components_AutoCompleteSelectvue_type_script_lang_js_,
  AutoCompleteSelectvue_type_template_id_7a4f6fa4_render,
  AutoCompleteSelectvue_type_template_id_7a4f6fa4_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var AutoCompleteSelect = (AutoCompleteSelect_component.exports);




runtime_auto_import_default()(AutoCompleteSelect_component, 'components', {QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageSearch.vue?vue&type=template&id=7c68d2d4&
var PageSearchvue_type_template_id_7c68d2d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative-position"},[_c('api-data-source',{attrs:{"api-path":_vm.apiPath},scopedSlots:_vm._u([{key:"default",fn:function(apiProp){return [_c('q-input',_vm._b({attrs:{"debounce":"1000"},on:{"focus":function($event){return _vm.showResult()}},scopedSlots:_vm._u([(_vm.icon)?{key:"append",fn:function(){return [_c('q-icon',{attrs:{"name":_vm.icon}})]},proxy:true}:null],null,true),model:{value:(_vm.searchText),callback:function ($$v) {_vm.searchText=$$v},expression:"searchText"}},'q-input',_vm.$attrs,false)),_c('q-popup-proxy',{attrs:{"content-class":_vm.menuClass,"auto-close":_vm.autoClose,"fit":"","no-focus":"","breakpoint":"0","target":true,"no-parent-event":""},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_vm._t("default",null,{"records":_vm.getRecords(apiProp.response),"searchText":_vm.searchText,"loading":apiProp.loading})],2)]}}],null,true)})],1)}
var PageSearchvue_type_template_id_7c68d2d4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageSearch.vue?vue&type=template&id=7c68d2d4&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PageSearchvue_type_script_lang_js_ = ({
  props: {
    searchPage: {
      type: String,
      default: ''
    },
    menuClass: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      searchText: '',
      show: false
    };
  },
  computed: {
    apiPath() {
      let search = this.searchText;

      if (search) {
        let qs = this.$utils.serializeQuery({
          search
        });
        return this.searchPage + "?" + qs;
      }

      return "";
    }

  },
  methods: {
    getRecords(response) {
      if (response.records) {
        return response.records;
      }

      return [];
    },

    showResult() {
      this.show = this.searchText != '';
      return this.show;
    },

    hideResult() {
      this.show = false;
    }

  },
  watch: {
    searchText: function () {
      this.showResult();
    }
  }
});
// CONCATENATED MODULE: ./src/components/PageSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageSearchvue_type_script_lang_js_ = (PageSearchvue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// CONCATENATED MODULE: ./src/components/PageSearch.vue





/* normalize component */

var PageSearch_component = Object(componentNormalizer["a" /* default */])(
  components_PageSearchvue_type_script_lang_js_,
  PageSearchvue_type_template_id_7c68d2d4_render,
  PageSearchvue_type_template_id_7c68d2d4_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var PageSearch = (PageSearch_component.exports);




runtime_auto_import_default()(PageSearch_component, 'components', {QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QUploaderInput.vue?vue&type=template&id=f1acebdc&
var QUploaderInputvue_type_template_id_f1acebdc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-uploader',{ref:"uploader",attrs:{"flat":_vm.flat,"max-files":_vm.maxFiles,"max-file-size":_vm.maxFileSizeInKB,"bordered":_vm.bordered,"accept":_vm.accept,"factory":_vm.factoryFn,"label":_vm.label,"auto-upload":"","hide-upload-btn":"","multiple":_vm.multiple,"filter":_vm.checkFileLimit},on:{"uploaded":_vm.uploadComplete,"removed":_vm.removeFile,"rejected":_vm.onRejected}})}
var QUploaderInputvue_type_template_id_f1acebdc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QUploaderInput.vue?vue&type=template&id=f1acebdc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QUploaderInput.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var QUploaderInputvue_type_script_lang_js_ = ({
  props: {
    accept: {
      type: String,
      default: '.png,.gif,.jpg,.jpg'
    },
    extensions: {
      type: String,
      default: ''
    },
    maxFiles: {
      type: Number,
      default: 5
    },
    maxFileSize: {
      type: Number,
      default: 10
    },
    multiple: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    uploadPath: {
      type: String,
      default: 'fileuploader/upload/photo'
    },
    fieldName: {
      type: String,
      default: 'photo'
    },
    fileName: {
      type: String,
      default: 'file'
    },
    label: {
      type: String,
      default: 'Choose files or Drop files here'
    },
    value: null
  },
  data: function () {
    return {
      files: [],
      uploadedFilePaths: []
    };
  },
  methods: {
    checkFileLimit(files) {
      return files.filter(file => this.uploadedFilePaths.length < this.maxFiles);
    },

    factoryFn(file) {
      return new Promise((resolve, reject) => {
        // Retrieve JWT token from the localstore.
        const token = StorageService.getToken(); //additional fields that is submited with file upload
        //let formFields = [{name: 'fieldname', value: 'fieldvalue'}];

        let uploadUrl = this.$utils.setApiPath(this.uploadPath);
        resolve({
          fieldName: this.fileName,
          url: uploadUrl,
          method: 'POST',
          //formFields: formFields,
          headers: [{
            name: 'Authorization',
            value: `Bearer ${token}`
          }]
        });
      });
    },

    uploadComplete: function (file) {
      let newFilePath = JSON.parse(file.xhr.response);
      this.uploadedFilePaths.push(newFilePath);
    },
    removeFile: function (files) {
      files.forEach(file => {
        let fileUrl = JSON.parse(file.xhr.response);

        if (Array.isArray(fileUrl)) {
          this.uploadedFilePaths = this.uploadedFilePaths.filter(item => !fileUrl.includes(item));
        } else {
          let index = this.uploadedFilePaths.indexOf(fileUrl);

          if (index !== -1) {
            this.uploadedFilePaths.splice(index, 1);
          }
        }

        let url = "fileuploader/remove_temp_file";
        let formData = {
          temp_file: fileUrl.toString()
        };
        this.$api.post(url, formData).then(response => {}, response => {
          this.loading = false;
        });
      });
    },
    onRejected: function (rejectedEntries) {
      let failedProp = rejectedEntries[0].failedPropValidation;
      console.log(failedProp);

      if (failedProp == "max-file-size") {
        this.$q.notify({
          type: 'negative',
          message: `Max file size of ${this.maxFileSize}MB is allowed`
        });
      } else if (failedProp == "max-files" || failedProp == "filter") {
        this.$q.notify({
          type: 'negative',
          message: `Max of ${this.maxFiles} files is allowed`
        });
      }
    }
  },
  computed: {
    maxFileSizeInKB: function () {
      return this.maxFileSize * 1024 * 1024;
    }
  },
  watch: {
    uploadedFilePaths: function () {
      this.$emit('input', this.uploadedFilePaths.toString());
    },
    value: function () {
      if (this.value) {
        this.uploadedFilePaths = this.$utils.toArray(this.value);
      } else {
        this.uploadedFilePaths = [];
      }
    }
  },
  mounted: function () {
    if (this.value) {
      this.uploadedFilePaths = this.$utils.toArray(this.value);
    } else {
      this.uploadedFilePaths = [];
    }
  },
  created: function () {
    this.$EventBus.$on('resetForm', () => {
      if (this.$refs.uploader) {
        this.$refs.uploader.reset();
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/QUploaderInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QUploaderInputvue_type_script_lang_js_ = (QUploaderInputvue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// CONCATENATED MODULE: ./src/components/QUploaderInput.vue





/* normalize component */

var QUploaderInput_component = Object(componentNormalizer["a" /* default */])(
  components_QUploaderInputvue_type_script_lang_js_,
  QUploaderInputvue_type_template_id_f1acebdc_render,
  QUploaderInputvue_type_template_id_f1acebdc_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var QUploaderInput = (QUploaderInput_component.exports);


runtime_auto_import_default()(QUploaderInput_component, 'components', {QUploader: QUploader["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ApiDataSource.vue?vue&type=template&id=26f81005&
var ApiDataSourcevue_type_template_id_26f81005_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default",null,{"load":_vm.load,"response":_vm.response,"loading":_vm.loading})],2)}
var ApiDataSourcevue_type_template_id_26f81005_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ApiDataSource.vue?vue&type=template&id=26f81005&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ApiDataSource.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var ApiDataSourcevue_type_script_lang_js_ = ({
  props: {
    loadOnMount: {
      type: Boolean,
      default: true
    },
    apiPath: '',
    value: '',
    queryParams: {
      type: Object,
      default: () => ({})
    }
  },
  data: function () {
    return {
      response: [],
      loading: false
    };
  },
  computed: {
    apiUrl: function () {
      let qs = this.$utils.serializeQuery(this.queryParams);
      let url = this.apiPath;

      if (qs) {
        url = url + "?" + qs;
      }

      return url;
    }
  },
  methods: {
    load: function () {
      if (this.apiUrl) {
        this.loading = true;
        this.$api.get(this.apiUrl).then(response => {
          this.loading = false;
          this.response = response.data;
          this.$emit("loaded", this.response);
        }, response => {
          this.loading = false;
        });
      }
    }
  },
  watch: {
    apiUrl: function () {
      this.load();
    }
  },
  mounted: function () {
    if (this.loadOnMount) {
      this.load();
    }
  }
});
// CONCATENATED MODULE: ./src/components/ApiDataSource.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ApiDataSourcevue_type_script_lang_js_ = (ApiDataSourcevue_type_script_lang_js_);
// CONCATENATED MODULE: ./src/components/ApiDataSource.vue





/* normalize component */

var ApiDataSource_component = Object(componentNormalizer["a" /* default */])(
  components_ApiDataSourcevue_type_script_lang_js_,
  ApiDataSourcevue_type_template_id_26f81005_render,
  ApiDataSourcevue_type_template_id_26f81005_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var ApiDataSource = (ApiDataSource_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InlineEdit.vue?vue&type=template&id=372f2ae8&
var InlineEditvue_type_template_id_372f2ae8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-menu',{ref:"menu",attrs:{"fit":"","anchor":"center middle","self":"center middle"},on:{"before-show":_vm.beforeShow,"before-hide":_vm.beforeHide}},[(_vm.title)?_c('div',{staticClass:"q-pa-sm text-bold"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('ValidationProvider',{ref:"fieldvalidator",attrs:{"rules":_vm.rules,"name":_vm.fieldLabel},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-ma-sm"},[_vm._t("default"),(invalid)?_c('small',{staticClass:"text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e(),(_vm.requestError)?_c('small',{staticClass:"text-negative"},[_vm._v(_vm._s(_vm.requestError))]):_vm._e()],2)]}}],null,true)}),_c('div',{staticClass:"q-ma-sm row justify-center no-wrap"},[_c('q-btn',{attrs:{"flat":"","dense":"","color":"negative","icon":_vm.cancelIcon},on:{"click":function($event){$event.stopPropagation();return _vm.close($event)}}}),_c('q-btn',{attrs:{"loading":_vm.loading,"flat":"","dense":"","color":"positive","icon":_vm.saveIcon},on:{"click":function($event){$event.stopPropagation();return _vm.updateField($event)}}})],1)],1)}
var InlineEditvue_type_template_id_372f2ae8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/InlineEdit.vue?vue&type=template&id=372f2ae8&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InlineEdit.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InlineEditvue_type_script_lang_js_ = ({
  props: {
    rules: {
      default: null
    },
    fieldLabel: {
      default: ''
    },
    fieldName: {
      default: ''
    },
    value: {
      default: ''
    },
    title: {
      default: ''
    },
    buttons: {
      default: true
    },
    url: {
      default: ''
    },
    saveIcon: {
      default: 'check_circle'
    },
    cancelIcon: {
      default: 'close'
    }
  },
  data: function () {
    return {
      loading: false,
      initialValue: '',
      validated: false,
      requestError: ''
    };
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
    },

    onKeyEnter(e) {
      if (e.keyCode === 13) {
        this.updateField();
      }
    },

    hasChanged() {
      return !(this.value === this.initialValue);
    },

    beforeShow(e) {
      this.validated = false;
      this.initialValue = JSON.parse(JSON.stringify(this.value));
      this.requestError = '';
    },

    close() {
      this.$refs.menu.hide();
    },

    beforeHide(e) {
      if (!this.validated && this.hasChanged()) {
        this.$emit('input', this.initialValue);
      }
    },

    async updateField() {
      const provider = this.$refs.fieldvalidator;
      let validator = await provider.validate();
      let isValid = validator.valid;

      if (isValid && this.hasChanged()) {
        this.loading = true;
        let payload = {};
        payload[this.fieldName] = this.value;
        this.$api.post(this.url, payload).then(response => {
          this.loading = false;
          this.requestError = '';
          this.validated = true;
          this.$emit('input', this.value);
          this.$refs.menu.hide();
        }).catch(err => {
          this.loading = false;
          this.validated = false;
          this.requestError = err.response.data;
        });
      } else {
        this.validated = false;
      }
    }

  },
  watch: {},
  mounted: function () {}
});
// CONCATENATED MODULE: ./src/components/InlineEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InlineEditvue_type_script_lang_js_ = (InlineEditvue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 2 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./src/components/InlineEdit.vue





/* normalize component */

var InlineEdit_component = Object(componentNormalizer["a" /* default */])(
  components_InlineEditvue_type_script_lang_js_,
  InlineEditvue_type_template_id_372f2ae8_render,
  InlineEditvue_type_template_id_372f2ae8_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var InlineEdit = (InlineEdit_component.exports);



runtime_auto_import_default()(InlineEdit_component, 'components', {QMenu: QMenu["a" /* default */],QBtn: QBtn["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecordCount.vue?vue&type=template&id=7b57b0d6&
var RecordCountvue_type_template_id_7b57b0d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default",null,{"num":_vm.num,"maxValue":_vm.maxValue,"percent":_vm.percent,"loading":_vm.loading})],2)}
var RecordCountvue_type_template_id_7b57b0d6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RecordCount.vue?vue&type=template&id=7b57b0d6&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecordCount.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var RecordCountvue_type_script_lang_js_ = ({
  props: {
    apiPath: '',
    max: ''
  },
  data: function () {
    return {
      num: 0,
      maxValue: 100,
      loading: false
    };
  },
  computed: {
    percent() {
      let percent = Math.round(this.num / this.maxValue * 100);
      return percent;
    }

  },
  methods: {
    getRecordCount: function () {
      if (this.apiPath) {
        var url = this.apiPath;
        this.loading = true;
        this.$api.get(url).then(response => {
          this.loading = false;
          var result = response.data;

          if (result.num) {
            this.num = parseFloat(result.num);

            if (result.max_value) {
              this.maxValue = result.max_value;
            }
          } else {
            this.num = parseFloat(result);
          }
        }, response => {
          this.loading = false;
        });
      }
    }
  },
  watch: {
    apiPath: function () {
      this.getRecordCount();
    }
  },
  mounted: function () {
    this.maxValue = this.max;
    this.getRecordCount();
  }
});
// CONCATENATED MODULE: ./src/components/RecordCount.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RecordCountvue_type_script_lang_js_ = (RecordCountvue_type_script_lang_js_);
// CONCATENATED MODULE: ./src/components/RecordCount.vue





/* normalize component */

var RecordCount_component = Object(componentNormalizer["a" /* default */])(
  components_RecordCountvue_type_script_lang_js_,
  RecordCountvue_type_template_id_7b57b0d6_render,
  RecordCountvue_type_template_id_7b57b0d6_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var RecordCount = (RecordCount_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CheckDuplicate.vue?vue&type=template&id=363cc585&
var CheckDuplicatevue_type_template_id_363cc585_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('api-data-source',{attrs:{"api-path":_vm.apiPath},scopedSlots:_vm._u([{key:"default",fn:function(apiProp){return [_vm._t("default",null,{"loading":apiProp.loading,"check":_vm.check,"exist":_vm.checkExits(apiProp.response)})]}}],null,true)})}
var CheckDuplicatevue_type_template_id_363cc585_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CheckDuplicate.vue?vue&type=template&id=363cc585&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CheckDuplicate.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var CheckDuplicatevue_type_script_lang_js_ = ({
  props: {
    checkPath: '',
    value: ''
  },
  data: function () {
    return {
      error: '',
      loading: false,
      apiPath: ''
    };
  },
  methods: {
    check() {
      let val = this.value;

      if (val) {
        this.apiPath = this.checkPath + this.value;
      }
    },

    checkExits(val) {
      // if the record already exist the backend should return true
      if (val) {
        val = val.toString().toLowerCase();

        if (val === "true") {
          // record already exit at the backend
          return true;
        }
      }

      return false;
    }

  }
});
// CONCATENATED MODULE: ./src/components/CheckDuplicate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CheckDuplicatevue_type_script_lang_js_ = (CheckDuplicatevue_type_script_lang_js_);
// CONCATENATED MODULE: ./src/components/CheckDuplicate.vue





/* normalize component */

var CheckDuplicate_component = Object(componentNormalizer["a" /* default */])(
  components_CheckDuplicatevue_type_script_lang_js_,
  CheckDuplicatevue_type_template_id_363cc585_render,
  CheckDuplicatevue_type_template_id_363cc585_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var CheckDuplicate = (CheckDuplicate_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageViewer.vue?vue&type=template&id=727ade37&
var ImageViewervue_type_template_id_727ade37_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.src)?_c('div',{staticClass:"row"},_vm._l((_vm.images),function(img,index){return _c('div',{key:index},[(index < _vm.numDisplay)?_c('q-img',_vm._b({staticClass:"cursor-pointer",style:({height: _vm.height, width: _vm.width}),attrs:{"src":_vm.$utils.setImgUrl(img, _vm.imageSize)},on:{"click":function($event){return _vm.openGallery(index)}},scopedSlots:_vm._u([{key:"error",fn:function(){return [_c('div',{staticClass:"absolute-full shadow-1 flex flex-center bg-grey-3 text-grey-8"},[_vm._v("!")])]},proxy:true}],null,true)},'q-img',_vm.$attrs,false)):_vm._e()],1)}),0):_c('q-img',{style:({height: _vm.height, width: _vm.width}),attrs:{"src":__webpack_require__("a0a2")}})}
var ImageViewervue_type_template_id_727ade37_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ImageViewer.vue?vue&type=template&id=727ade37&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageViewer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImageViewervue_type_script_lang_js_ = ({
  props: {
    src: {
      type: String
    },
    imageSize: {
      type: String,
      default: 'small'
    },
    previewSize: {
      type: String,
      default: 'large'
    },
    width: {
      type: String,
      required: false,
      default: '50px'
    },
    height: {
      type: String,
      required: false,
      default: '50px'
    },
    numDisplay: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data: function () {
    return {
      images: []
    };
  },
  computed: {
    getLargeImages() {
      let largImages = [];
      this.images.forEach((path, index) => {
        if (this.previewSize) {
          let imgUrl = this.$utils.setImgUrl(path, this.previewSize);
          largImages.push(imgUrl);
        } else {
          let imgUrl = this.$utils.getFileFullPath(path);
          largImages.push(imgUrl);
        }
      });
      return largImages;
    }

  },
  methods: {
    openGallery(index) {
      let payload = {
        currentSlide: index,
        images: this.getLargeImages
      };
      this.$store.dispatch('pageComponents/openImageViewDialog', payload);
    },

    setImages() {
      if (this.src) {
        this.images = this.src.toString().split(",");
      }
    }

  },
  watch: {
    src: function () {
      this.setImages();
    }
  },

  mounted() {
    this.setImages();
  }

});
// CONCATENATED MODULE: ./src/components/ImageViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageViewervue_type_script_lang_js_ = (ImageViewervue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// CONCATENATED MODULE: ./src/components/ImageViewer.vue





/* normalize component */

var ImageViewer_component = Object(componentNormalizer["a" /* default */])(
  components_ImageViewervue_type_script_lang_js_,
  ImageViewervue_type_template_id_727ade37_render,
  ImageViewervue_type_template_id_727ade37_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var ImageViewer = (ImageViewer_component.exports);


runtime_auto_import_default()(ImageViewer_component, 'components', {QImg: QImg["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FileViewer.vue?vue&type=template&id=7867f208&
var FileViewervue_type_template_id_7867f208_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row q-col-gutter-xs"},_vm._l((_vm.files),function(file,index){return _c('div',{key:index},[(_vm.removable)?[(file.isImage)?_c('q-chip',{attrs:{"square":"","removable":""},on:{"remove":function($event){return _vm.removeFile(index)}}},[_c('q-avatar',[_c('image-viewer',{attrs:{"src":file.path,"image-size":file.size}})],1)],1):_c('q-chip',{attrs:{"square":"","icon":_vm.icon,"label":_vm.label,"removable":"","clickable":""},on:{"remove":function($event){return _vm.removeFile(index)},"click":function($event){return _vm.openFile(file)}}})]:[_c('q-btn',{attrs:{"no-caps":"","unelevated":"","color":"accent","padding":"xs","icon":_vm.icon,"label":_vm.label},on:{"click":function($event){return _vm.openFile(file)}}},[_c('q-tooltip',{attrs:{"content-class":"bg-accent"}},[_vm._v("\n\t\t\t\t\t"+_vm._s(file.name)+"\n\t\t\t\t")])],1)]],2)}),0)}
var FileViewervue_type_template_id_7867f208_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FileViewer.vue?vue&type=template&id=7867f208&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FileViewer.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FileViewervue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String
    },
    removable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "archive"
    },
    numDisplay: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data: function () {
    return {
      files: []
    };
  },
  computed: {},
  watch: {
    value() {
      this.setFiles();
    },

    files: function () {
      let filePaths = [];
      this.files.forEach(file => {
        if (file.path) {
          filePaths.push(file.path);
        }
      });
      this.$emit('input', filePaths.toString());
    }
  },
  methods: {
    openFile(file) {
      if (file.path) {
        let path = file.path;
        let fullPath = this.$utils.getFileFullPath(path);
        window.open(fullPath, '_blank');
      }
    },

    setFiles() {
      if (this.value) {
        let filePaths = this.value.toString().split(",");
        this.files = [];
        filePaths.forEach(path => {
          let fileName = path.split('\\').pop().split('/').pop();
          let ext = fileName.split('.').pop().toLowerCase();
          let imgExt = ['jpg', 'png', 'gif', 'jpeg', 'bmp'];
          let isImage = false;

          if (imgExt.indexOf(ext) > -1) {
            isImage = true;
          }

          let size = "small"; //use resize image for the display

          if (path.indexOf("temp/") > -1) {
            size = ""; //if image is still in temp folder use the original image
          }

          this.files.push({
            name: fileName,
            isImage: isImage,
            size: size,
            path: path
          });
        });
      }
    },

    removeFile(index) {
      this.files.splice(index, 1);
    }

  },

  mounted() {
    this.setFiles();
  }

});
// CONCATENATED MODULE: ./src/components/FileViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FileViewervue_type_script_lang_js_ = (FileViewervue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// CONCATENATED MODULE: ./src/components/FileViewer.vue





/* normalize component */

var FileViewer_component = Object(componentNormalizer["a" /* default */])(
  components_FileViewervue_type_script_lang_js_,
  FileViewervue_type_template_id_7867f208_render,
  FileViewervue_type_template_id_7867f208_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var FileViewer = (FileViewer_component.exports);





runtime_auto_import_default()(FileViewer_component, 'components', {QChip: QChip["a" /* default */],QAvatar: QAvatar["a" /* default */],QBtn: QBtn["a" /* default */],QTooltip: QTooltip["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullQEditor.vue?vue&type=template&id=591237a6&
var FullQEditorvue_type_template_id_591237a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-editor',{ref:"editor",attrs:{"dense":_vm.$q.screen.lt.md,"definitions":{
            upload: {
                tip: 'Insert image',
                icon: 'photo',
                handler: _vm.showImageDialog,
            },
        },"toolbar":[
            ['left', 'center', 'right', 'justify'],
            [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript' ],
            ['hr', 'link', 'upload'],
            [
                {
                    icon: _vm.$q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7' ],
                },
                'removeFormat' ],
            ['quote', 'unordered', 'ordered'],

            ['undo', 'redo'],
            ['viewsource'] ],"fonts":{
            arial: 'Arial',
            arial_black: 'Arial Black',
            comic_sans: 'Comic Sans MS',
            courier_new: 'Courier New',
            impact: 'Impact',
            lucida_grande: 'Lucida Grande',
            times_new_roman: 'Times New Roman',
            verdana: 'Verdana',
        }},on:{"input":_vm.update},model:{value:(_vm.qeditor),callback:function ($$v) {_vm.qeditor=$$v},expression:"qeditor"}}),_c('q-dialog',{model:{value:(_vm.imageDialog),callback:function ($$v) {_vm.imageDialog=$$v},expression:"imageDialog"}},[_c('q-card',{staticStyle:{"width":"500px","max-width":"80vw"}},[_c('q-card-section',{staticClass:"row items-center q-pb-none"},[_c('div',{staticClass:"text-h6"},[_vm._v("Insert Image")]),_c('q-space'),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"icon":"close","flat":"","round":"","dense":""}})],1),_c('q-card-section',[_c('div',{staticClass:"q-mb-md"},[_c('q-input',{ref:"imageUrl",attrs:{"outlined":"","dense":"","placeholder":"Enter Image Url","label":"Image Url"},model:{value:(_vm.imageUrl),callback:function ($$v) {_vm.imageUrl=$$v},expression:"imageUrl"}})],1),_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col"},[_c('q-input',{attrs:{"outlined":"","dense":"","placeholder":"Width","label":"Width"},model:{value:(_vm.imageWidth),callback:function ($$v) {_vm.imageWidth=$$v},expression:"imageWidth"}})],1),_c('div',{staticClass:"col"},[_c('q-input',{attrs:{"outlined":"","dense":"","placeholder":"Height","label":"Height"},model:{value:(_vm.imageHeight),callback:function ($$v) {_vm.imageHeight=$$v},expression:"imageHeight"}})],1)])]),_c('q-card-actions',{attrs:{"align":"center"}},[_c('q-btn',{attrs:{"color":"primary","flat":"","label":"Insert Image"},on:{"click":_vm.insertImage}})],1)],1)],1)],1)}
var FullQEditorvue_type_template_id_591237a6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FullQEditor.vue?vue&type=template&id=591237a6&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullQEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FullQEditorvue_type_script_lang_js_ = ({
  props: {
    value: ""
  },
  data: function () {
    return {
      qeditor: "",
      imageDialog: false,
      imageWidth: "",
      imageHeight: "",
      imageUrl: ""
    };
  },
  methods: {
    saveWork() {
      this.$q.notify({
        message: "Saved your text to local storage",
        color: "green-4",
        textColor: "white",
        icon: "cloud_done"
      });
    },

    update() {
      this.$emit('input', this.qeditor);
    },

    showImageDialog() {
      this.imageDialog = true;
    },

    insertImage() {
      if (this.imageUrl) {
        this.imageDialog = false;
        const edit = this.$refs.editor;
        edit.caret.restore();
        edit.runCmd("insertHTML", `<img width="${this.imageWidth}" height="${this.imageHeight}" src="${this.imageUrl}"/>`);
        edit.focus();
      } else {
        this.$refs.imageUrl.focus();
      }
    }

  },
  mounted: function () {
    this.qeditor = this.value;
  }
});
// CONCATENATED MODULE: ./src/components/FullQEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FullQEditorvue_type_script_lang_js_ = (FullQEditorvue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 2 modules
var QEditor = __webpack_require__("d66b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__("2c91");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// CONCATENATED MODULE: ./src/components/FullQEditor.vue





/* normalize component */

var FullQEditor_component = Object(componentNormalizer["a" /* default */])(
  components_FullQEditorvue_type_script_lang_js_,
  FullQEditorvue_type_template_id_591237a6_render,
  FullQEditorvue_type_template_id_591237a6_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var FullQEditor = (FullQEditor_component.exports);









runtime_auto_import_default()(FullQEditor_component, 'components', {QEditor: QEditor["a" /* default */],QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QSpace: QSpace["a" /* default */],QBtn: QBtn["a" /* default */],QInput: QInput["a" /* default */],QCardActions: QCardActions["a" /* default */]});runtime_auto_import_default()(FullQEditor_component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImportData.vue?vue&type=template&id=80415a54&
var ImportDatavue_type_template_id_80415a54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default",null,{"dialog":_vm.dialog,"response":_vm.response}),_c('q-dialog',{attrs:{"position":"bottom"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('q-card',{staticStyle:{"min-width":"30vw"}},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"label":_vm.label,"upload-path":_vm.uploadPath,"accept":".csv","position":"bottom","flat":"","bordered":"","field-name":"import"},model:{value:(_vm.response),callback:function ($$v) {_vm.response=$$v},expression:"response"}})],1)],1)],2)}
var ImportDatavue_type_template_id_80415a54_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ImportData.vue?vue&type=template&id=80415a54&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImportData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImportDatavue_type_script_lang_js_ = ({
  name: "ImportData",
  props: {
    uploadPath: {
      type: String,
      default: "filehelper/uploadfile"
    },
    label: {
      type: String,
      default: "Choose file to import"
    }
  },
  data: () => ({
    dialog: false,
    response: ""
  }),
  methods: {
    openDialog() {
      this.dialog = true;
    }

  }
});
// CONCATENATED MODULE: ./src/components/ImportData.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImportDatavue_type_script_lang_js_ = (ImportDatavue_type_script_lang_js_);
// CONCATENATED MODULE: ./src/components/ImportData.vue





/* normalize component */

var ImportData_component = Object(componentNormalizer["a" /* default */])(
  components_ImportDatavue_type_script_lang_js_,
  ImportDatavue_type_template_id_80415a54_render,
  ImportDatavue_type_template_id_80415a54_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var ImportData = (ImportData_component.exports);




runtime_auto_import_default()(ImportData_component, 'components', {QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QUploader: QUploader["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MasterDetailBtn.vue?vue&type=template&id=a8e1b7bc&
var MasterDetailBtnvue_type_template_id_a8e1b7bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-btn',{attrs:{"no-caps":"","padding":_vm.padding,"glossy":_vm.glossy,"round":_vm.round,"rounded":_vm.rounded,"flat":_vm.flat,"outline":_vm.outline,"color":_vm.color,"size":_vm.size,"unelevated":_vm.unelevated},on:{"click":function($event){return _vm.openPage()}}},[_vm._t("default")],2)}
var MasterDetailBtnvue_type_template_id_a8e1b7bc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MasterDetailBtn.vue?vue&type=template&id=a8e1b7bc&

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MasterDetailBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MasterDetailBtnvue_type_script_lang_js_ = ({
  name: "MasterDetailBtn",
  props: {
    detailPage: {
      type: String,
      default: ''
    },
    detailPageId: null,
    pageFormData: {
      type: Object,
      default: function () {
        return {};
      }
    },
    displayMode: {
      type: String,
      default: 'dialog' // dialog || drawer

    },
    padding: {
      type: String,
      default: "xs"
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: ""
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    glossy: {
      type: Boolean,
      default: false
    }
  },
  mixins: [page["a" /* PageMixin */]],
  data: function () {
    return {
      showPageDialog: false
    };
  },
  methods: {
    openPage: function () {
      if (this.displayMode == 'drawer') {
        this.openPageDrawer(this.detailPage, {
          id: this.detailPageId,
          formData: this.pageFormData
        });
      } else {
        this.openPageDialog(this.detailPage, {
          id: this.detailPageId,
          formData: this.pageFormData
        });
      }
    }
  },
  mounted: function () {}
});
// CONCATENATED MODULE: ./src/components/MasterDetailBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MasterDetailBtnvue_type_script_lang_js_ = (MasterDetailBtnvue_type_script_lang_js_);
// CONCATENATED MODULE: ./src/components/MasterDetailBtn.vue





/* normalize component */

var MasterDetailBtn_component = Object(componentNormalizer["a" /* default */])(
  components_MasterDetailBtnvue_type_script_lang_js_,
  MasterDetailBtnvue_type_template_id_a8e1b7bc_render,
  MasterDetailBtnvue_type_template_id_a8e1b7bc_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var MasterDetailBtn = (MasterDetailBtn_component.exports);


runtime_auto_import_default()(MasterDetailBtn_component, 'components', {QBtn: QBtn["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LangSwitcher.vue?vue&type=template&id=7c46e408&
var LangSwitchervue_type_template_id_7c46e408_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-btn-dropdown',{attrs:{"no-caps":"","color":"accent","glossy":"","flat":"","label":_vm.langName}},[_c('q-list',{attrs:{"dense":""}},_vm._l((_vm.locales),function(locale,key){return _c('q-item',{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:key,attrs:{"clickable":""},on:{"click":function($event){return _vm.changeLocale(key)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(locale))])],1)],1)}),1)],1)}
var LangSwitchervue_type_template_id_7c46e408_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LangSwitcher.vue?vue&type=template&id=7c46e408&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LangSwitcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LangSwitchervue_type_script_lang_js_ = ({
  data() {
    return {
      locales: this.$menus.locales
    };
  },

  computed: {
    langName() {
      let lang = this.$i18n.locale;
      let name = this.locales[lang] || lang;
      return name;
    }

  },
  methods: {
    changeLocale(locale) {
      this.$localStore.setLocale(locale);
      window.location.reload();
    }

  }
});
// CONCATENATED MODULE: ./src/components/LangSwitcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LangSwitchervue_type_script_lang_js_ = (LangSwitchervue_type_script_lang_js_);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-dropdown/QBtnDropdown.js + 1 modules
var QBtnDropdown = __webpack_require__("f20b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// CONCATENATED MODULE: ./src/components/LangSwitcher.vue





/* normalize component */

var LangSwitcher_component = Object(componentNormalizer["a" /* default */])(
  components_LangSwitchervue_type_script_lang_js_,
  LangSwitchervue_type_template_id_7c46e408_render,
  LangSwitchervue_type_template_id_7c46e408_staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var LangSwitcher = (LangSwitcher_component.exports);






runtime_auto_import_default()(LangSwitcher_component, 'components', {QBtnDropdown: QBtnDropdown["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(LangSwitcher_component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__("4c93");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-end.js
var es_string_trim_end = __webpack_require__("1e25");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-start.js
var es_string_trim_start = __webpack_require__("eee7");

// CONCATENATED MODULE: ./src/utils.js








Array.prototype.sum = function (prop) {
  var total = 0;

  for (var i = 0, _len = this.length; i < _len; i++) {
    total += parseFloat(this[i][prop]);
  }

  return total;
};

Array.prototype.average = function (prop) {
  var total = this.sum(prop);
  var len = this.length;
  var avg = total / len;
  return avg.toFixed(2);
};

Array.prototype.min = function (prop) {
  if (!this.length) return '';
  return Math.min.apply(null, this.map(function (item) {
    return item[prop];
  }));
};

Array.prototype.max = function (prop) {
  if (!this.length) return '';
  return Math.max.apply(null, this.map(function (item) {
    return item[prop];
  }));
};

String.prototype.trimLeft = function (charlist) {
  if (charlist === undefined) charlist = "\s";
  return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

String.prototype.trimRight = function (charlist) {
  if (charlist === undefined) charlist = "\s";
  return this.replace(new RegExp("[" + charlist + "]+$"), "");
};

String.prototype.trimChar = function (charlist) {
  if (typeof charlist == 'undefined') {
    charlist = '\\s';
  }

  let pattern = '^[' + charlist + ']*(.*?)[' + charlist + ']*$';
  return this.replace(new RegExp(pattern), '$1');
};

const utils = {
  percentValue(val, max) {
    let num = parseFloat(val) / parseFloat(max);
    return num.toFixed(2);
  },

  toPercent(val, max) {
    let num = this.percentValue(val, max) * 100;
    return num.toFixed(2);
  },

  getPagePath(path) {
    if (path) {
      path = path.trimChar("/");
      let arrPath = path.split("/");
      let page = arrPath[0];
      return "/" + page;
    }

    return "/";
  },

  getRoutePath(path) {
    if (path) {
      path = path.trimChar("/");
      let arrPath = path.split("/");
      let page = arrPath[0];
      let action = arrPath[1];

      if (!action || action == "index") {
        action = "list";
      }

      return page + "/" + action;
    }

    return "/";
  },

  debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this,
          args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },

  extend(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }

    return obj;
  },

  setApiPath(path, queryObj) {
    if (queryObj) {
      var str = [];

      for (var key in queryObj) {
        var value = queryObj[key];

        if (queryObj.hasOwnProperty(key) && value !== '') {
          str.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
      }

      var qs = str.join("&");

      if (path.indexOf('?') > 0) {
        path = path + '&' + qs;
      } else {
        path = path + '?' + qs;
      }
    }

    return this.joinPaths(["http://ntc-ustp.c1.biz/api/", path]);
  },

  getImageSize(src, imgSize) {
    //still available for backward compatibility
    return this.setImgUrl(src, imgSize);
  },

  setImgUrl(src, imgSize) {
    if (src) {
      let isExternalFile = this.isExternalFile(src);

      if (imgSize && !isExternalFile) {
        let paths = src.toString().split('/');
        paths.splice(-1, 0, imgSize);
        src = paths.join('/');
      }

      return this.getFileFullPath(src);
    }

    return __webpack_require__("a0a2");
  },

  randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  },

  randomChars(length, characters) {
    length = length || 10;
    var result = [];
    var characters = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join('');
  },

  randomStr(length, characters) {
    length = length || 10;
    var result = [];
    var characters = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join('');
  },

  randomNum(length) {
    length = length || 10;
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
  },

  //Convert javascript to date object to mysql date format (YYYY-MM-DD HH:mm:ss)
  dateNow() {
    return new Date().toISOString().split('T')[0];
  },

  dateTimeNow() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  },

  timeNow() {
    return new Date().toLocaleTimeString();
  },

  toArray(val) {
    if (val) {
      if (Array.isArray(val)) {
        return val;
      } else {
        return val.split(",");
      }
    } else {
      return [];
    }
  },

  serializeQuery(params, prefix) {
    const query = Object.keys(params).map(key => {
      const value = params[key];
      if (params.constructor === Array) key = `${prefix}[]`;else if (params.constructor === Object) key = prefix ? `${prefix}[${key}]` : key;
      if (typeof value === 'object') return this.serializeQuery(value, key);else return `${key}=${encodeURIComponent(value)}`;
    });
    return [].concat.apply([], query).join('&');
  },

  trim(str, charlist) {
    if (typeof charlist == 'undefined') {
      charlist = '\\s';
    }

    let pattern = '^[' + charlist + ']*(.*?)[' + charlist + ']*$';
    return str.replace(new RegExp(pattern), '$1');
  },

  /**
   * Joins 2 paths together without duplicate separators
   * @param parts the parts of the url to join. eg: ['http://google.com/', '/path/']
   * @returns {string} The combined path
   */
  joinPaths(parts) {
    let separator = '/';
    return parts.map(function (part) {
      return part.trim().replace(/(^[\/]*|[\/]*$)/g, '');
    }).join(separator);
  },

  getFileFullPath(path) {
    let isFullPath = path.startsWith("https://") || path.startsWith("http://");

    if (isFullPath) {
      return path;
    }

    return this.joinPaths(["http://ntc-ustp.c1.biz/", path]);
  },

  isExternalFile(path) {
    let fullPath = this.getFileFullPath(path);
    let baseUrl = "http://ntc-ustp.c1.biz/"; //app base url

    let isLocalFile = fullPath.startsWith(baseUrl);
    return !isLocalFile;
  }

};
// CONCATENATED MODULE: ./src/menus.js
const AppMenus = {
  navbarTopRightItems: [],
  navbarTopLeftItems: [],
  navbarSideLeftItems: [{
    "path": "/home",
    "label": "Home",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/roles",
    "label": "Roles",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/access_rights",
    "label": "Access Rights",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/amateur_doc_types",
    "label": "Amateur Doc Types",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/amateur_operator_applications",
    "label": "Amateur Operator Applications",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/access_lists",
    "label": "Access Lists",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/amateur_station_types",
    "label": "Amateur Station Types",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/exam_ratings",
    "label": "Exam Ratings",
    "icon": "rate_review",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/cities",
    "label": "Cities",
    "icon": "location_city",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/certicate_application_assignments",
    "label": "Certicate Application Assignments",
    "icon": "assignment",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/barangays",
    "label": "Barangays",
    "icon": "location_on",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/application_prerequisites",
    "label": "Application Prerequisites",
    "icon": "assignment_ind",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/applications",
    "label": "Applications",
    "icon": "archive",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/companies",
    "label": "Companies",
    "icon": "business",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/certicate_application_types",
    "label": "Certicate Application Types",
    "icon": "style",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/billing_matrixes",
    "label": "Billing Matrixes",
    "icon": "attach_money",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/assigned_roles",
    "label": "Assigned Roles",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/application_billing_particulars",
    "label": "Application Billing Particulars",
    "icon": "monetization_on",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/documents",
    "label": "Documents",
    "icon": "folder_open",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/chart_of_accounts",
    "label": "Chart Of Accounts",
    "icon": "pie_chart",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/billing_templates",
    "label": "Billing Templates",
    "icon": "call_to_action",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/attachments",
    "label": "Attachments",
    "icon": "attachment",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/application_categories",
    "label": "Application Categories",
    "icon": "border_all",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/ptp_nature_of_services",
    "label": "Ptp Nature Of Services",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/payment_channels",
    "label": "Payment Channels",
    "icon": "payment",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/forms",
    "label": "Forms",
    "icon": "folder",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/exam_schedules",
    "label": "Exam Schedules",
    "icon": "schedule",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/ptp_radio_services",
    "label": "Ptp Radio Services",
    "icon": "radio",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/provinces",
    "label": "Provinces",
    "icon": "location_city",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/operator_certificate_applications",
    "label": "Operator Certificate Applications",
    "icon": "developer_board",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/fields",
    "label": "Fields",
    "icon": "format_list_numbered",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/ptp_station_classes",
    "label": "Ptp Station Classes",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/ptpurchase_applications",
    "label": "Ptpurchase Applications",
    "icon": "view_module",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/operator_certificate_types",
    "label": "Operator Certificate Types",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/field_groups",
    "label": "Field Groups",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/radio_equipments",
    "label": "Radio Equipments",
    "icon": "radio_button_checked",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/regions",
    "label": "Regions",
    "icon": "location_searching",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/radio_operator_exams",
    "label": "Radio Operator Exams",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/required_attachments",
    "label": "Required Attachments",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/radio_operator_exam_types",
    "label": "Radio Operator Exam Types",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/radio_operator_services",
    "label": "Radio Operator Services",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/user_employments",
    "label": "User Employments",
    "icon": "location_searching",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/submitted_application_logs",
    "label": "Submitted Application Logs",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/services",
    "label": "Services",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/user_vitals",
    "label": "User Vitals",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/uacs",
    "label": "Uacs",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/settings",
    "label": "Settings",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/users",
    "label": "Users",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/submitted_applications",
    "label": "Submitted Applications",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/permissions",
    "label": "Permissions",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/role_has_permissions",
    "label": "Role Has Permissions",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/model_has_permissions",
    "label": "Model Has Permissions",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/model_has_roles",
    "label": "Model Has Roles",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/audits",
    "label": "Audits",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }],
  RolesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Guard Name",
    "align": "left",
    "sortable": false,
    "name": "guard_name",
    "field": "guard_name"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  nameItems: [],
  Access_RightsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Access List Id",
    "align": "left",
    "sortable": false,
    "name": "access_list_id",
    "field": "access_list_id"
  }, {
    "label": "Set By",
    "align": "left",
    "sortable": false,
    "name": "set_by",
    "field": "set_by"
  }, {
    "label": "User Id",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Amateur_Doc_TypesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Description",
    "align": "left",
    "sortable": false,
    "name": "description",
    "field": "description"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Amateur_Operator_ApplicationsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Submitted Application Id",
    "align": "left",
    "sortable": false,
    "name": "submitted_application_id",
    "field": "submitted_application_id"
  }, {
    "label": "Amateur Doc Type Id",
    "align": "left",
    "sortable": false,
    "name": "amateur_doc_type_id",
    "field": "amateur_doc_type_id"
  }, {
    "label": "Amateur Station Type Id",
    "align": "left",
    "sortable": false,
    "name": "amateur_station_type_id",
    "field": "amateur_station_type_id"
  }, {
    "label": "Certicate Application Type Id",
    "align": "left",
    "sortable": false,
    "name": "certicate_application_type_id",
    "field": "certicate_application_type_id"
  }, {
    "label": "Station Location",
    "align": "left",
    "sortable": false,
    "name": "station_location",
    "field": "station_location"
  }, {
    "label": "Call Sign",
    "align": "left",
    "sortable": false,
    "name": "call_sign",
    "field": "call_sign"
  }, {
    "label": "Issued On",
    "align": "left",
    "sortable": false,
    "name": "issued_on",
    "field": "issued_on"
  }, {
    "label": "Valid On",
    "align": "left",
    "sortable": false,
    "name": "valid_on",
    "field": "valid_on"
  }, {
    "label": "Valid Until",
    "align": "left",
    "sortable": false,
    "name": "valid_until",
    "field": "valid_until"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Access_ListsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Parent Id",
    "align": "left",
    "sortable": false,
    "name": "parent_id",
    "field": "parent_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Exam_RatingsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Rating",
    "align": "left",
    "sortable": false,
    "name": "rating",
    "field": "rating"
  }, {
    "label": "Radio Operation Exam Id",
    "align": "left",
    "sortable": false,
    "name": "radio_operation_exam_id",
    "field": "radio_operation_exam_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  CitiesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "City",
    "align": "left",
    "sortable": false,
    "name": "city",
    "field": "city"
  }, {
    "label": "Zipcode",
    "align": "left",
    "sortable": false,
    "name": "zipcode",
    "field": "zipcode"
  }, {
    "label": "Provinces Name",
    "align": "left",
    "sortable": false,
    "name": "provinces_name",
    "field": "provinces_name"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Certicate_Application_AssignmentsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Application Id",
    "align": "left",
    "sortable": false,
    "name": "application_id",
    "field": "application_id"
  }, {
    "label": "Certicate Application Type Id",
    "align": "left",
    "sortable": false,
    "name": "certicate_application_type_id",
    "field": "certicate_application_type_id"
  }, {
    "label": "Region Id",
    "align": "left",
    "sortable": false,
    "name": "region_id",
    "field": "region_id"
  }, {
    "label": "Enable",
    "align": "left",
    "sortable": false,
    "name": "enable",
    "field": "enable"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  BarangaysTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Barangay",
    "align": "left",
    "sortable": false,
    "name": "barangay",
    "field": "barangay"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Application_PrerequisitesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Application Id",
    "align": "left",
    "sortable": false,
    "name": "application_id",
    "field": "application_id"
  }, {
    "label": "Prerequisite Application Id",
    "align": "left",
    "sortable": false,
    "name": "prerequisite_application_id",
    "field": "prerequisite_application_id"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Remark",
    "align": "left",
    "sortable": false,
    "name": "remark",
    "field": "remark"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  ApplicationsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Service Id",
    "align": "left",
    "sortable": false,
    "name": "service_id",
    "field": "service_id"
  }, {
    "label": "Application Category Id",
    "align": "left",
    "sortable": false,
    "name": "application_category_id",
    "field": "application_category_id"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Description",
    "align": "left",
    "sortable": false,
    "name": "description",
    "field": "description"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  CompaniesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Barangay Id",
    "align": "left",
    "sortable": false,
    "name": "barangay_id",
    "field": "barangay_id"
  }, {
    "label": "Company",
    "align": "left",
    "sortable": false,
    "name": "company",
    "field": "company"
  }, {
    "label": "Unit No",
    "align": "left",
    "sortable": false,
    "name": "unit_no",
    "field": "unit_no"
  }, {
    "label": "Street",
    "align": "left",
    "sortable": false,
    "name": "street",
    "field": "street"
  }, {
    "label": "Contact",
    "align": "left",
    "sortable": false,
    "name": "contact",
    "field": "contact"
  }, {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Certicate_Application_TypesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Code",
    "align": "left",
    "sortable": false,
    "name": "code",
    "field": "code"
  }, {
    "label": "Description",
    "align": "left",
    "sortable": false,
    "name": "description",
    "field": "description"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Billing_MatrixesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Billing Template Id",
    "align": "left",
    "sortable": false,
    "name": "billing_template_id",
    "field": "billing_template_id"
  }, {
    "label": "Chart Of Account Id",
    "align": "left",
    "sortable": false,
    "name": "chart_of_account_id",
    "field": "chart_of_account_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Assigned_RolesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Role Id",
    "align": "left",
    "sortable": false,
    "name": "role_id",
    "field": "role_id"
  }, {
    "label": "User Id",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  }, {
    "label": "Assigned By",
    "align": "left",
    "sortable": false,
    "name": "assigned_by",
    "field": "assigned_by"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Application_Billing_ParticularsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Application Id",
    "align": "left",
    "sortable": false,
    "name": "application_id",
    "field": "application_id"
  }, {
    "label": "Billing Template Id",
    "align": "left",
    "sortable": false,
    "name": "billing_template_id",
    "field": "billing_template_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Chart_Of_AccountsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Uacs Id",
    "align": "left",
    "sortable": false,
    "name": "uacs_id",
    "field": "uacs_id"
  }, {
    "label": "Code",
    "align": "left",
    "sortable": false,
    "name": "code",
    "field": "code"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Amount",
    "align": "left",
    "sortable": false,
    "name": "amount",
    "field": "amount"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  AttachmentsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Submitted Application Id",
    "align": "left",
    "sortable": false,
    "name": "submitted_application_id",
    "field": "submitted_application_id"
  }, {
    "label": "Document Id",
    "align": "left",
    "sortable": false,
    "name": "document_id",
    "field": "document_id"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Application_CategoriesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Category",
    "align": "left",
    "sortable": false,
    "name": "category",
    "field": "category"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Ptp_Nature_Of_ServicesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Code",
    "align": "left",
    "sortable": false,
    "name": "code",
    "field": "code"
  }, {
    "label": "Nature",
    "align": "left",
    "sortable": false,
    "name": "nature",
    "field": "nature"
  }, {
    "label": "Description",
    "align": "left",
    "sortable": false,
    "name": "description",
    "field": "description"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Payment_ChannelsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Mobile",
    "align": "left",
    "sortable": false,
    "name": "mobile",
    "field": "mobile"
  }, {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  }, {
    "label": "Contact Person",
    "align": "left",
    "sortable": false,
    "name": "contact_person",
    "field": "contact_person"
  }, {
    "label": "Address",
    "align": "left",
    "sortable": false,
    "name": "address",
    "field": "address"
  }, {
    "label": "Token",
    "align": "left",
    "sortable": false,
    "name": "token",
    "field": "token"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  FormsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Application Id",
    "align": "left",
    "sortable": false,
    "name": "application_id",
    "field": "application_id"
  }, {
    "label": "Field Group Id",
    "align": "left",
    "sortable": false,
    "name": "field_group_id",
    "field": "field_group_id"
  }, {
    "label": "Revision No",
    "align": "left",
    "sortable": false,
    "name": "revision_no",
    "field": "revision_no"
  }, {
    "label": "Revion Date",
    "align": "left",
    "sortable": false,
    "name": "revion_date",
    "field": "revion_date"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Exam_SchedulesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Place",
    "align": "left",
    "sortable": false,
    "name": "place",
    "field": "place"
  }, {
    "label": "City Id",
    "align": "left",
    "sortable": false,
    "name": "city_id",
    "field": "city_id"
  }, {
    "label": "Date Time",
    "align": "left",
    "sortable": false,
    "name": "date_time",
    "field": "date_time"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  ProvincesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Operator_Certificate_ApplicationsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Certicate Application Type Id",
    "align": "left",
    "sortable": false,
    "name": "certicate_application_type_id",
    "field": "certicate_application_type_id"
  }, {
    "label": "Submitted Application Id",
    "align": "left",
    "sortable": false,
    "name": "submitted_application_id",
    "field": "submitted_application_id"
  }, {
    "label": "Operator Certificate Type Id",
    "align": "left",
    "sortable": false,
    "name": "operator_certificate_type_id",
    "field": "operator_certificate_type_id"
  }, {
    "label": "Registration No",
    "align": "left",
    "sortable": false,
    "name": "registration_no",
    "field": "registration_no"
  }, {
    "label": "Place Of Exam",
    "align": "left",
    "sortable": false,
    "name": "place_of_exam",
    "field": "place_of_exam"
  }, {
    "label": "Date Of Exam",
    "align": "left",
    "sortable": false,
    "name": "date_of_exam",
    "field": "date_of_exam"
  }, {
    "label": "Rating",
    "align": "left",
    "sortable": false,
    "name": "rating",
    "field": "rating"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  FieldsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Field Name",
    "align": "left",
    "sortable": false,
    "name": "field_name",
    "field": "field_name"
  }, {
    "label": "Field Group Id",
    "align": "left",
    "sortable": false,
    "name": "field_group_id",
    "field": "field_group_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Ptpurchase_ApplicationsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Submitted Application Id",
    "align": "left",
    "sortable": false,
    "name": "submitted_application_id",
    "field": "submitted_application_id"
  }, {
    "label": "Ptp Radio Service Id",
    "align": "left",
    "sortable": false,
    "name": "ptp_radio_service_id",
    "field": "ptp_radio_service_id"
  }, {
    "label": "Permit No",
    "align": "left",
    "sortable": false,
    "name": "permit_no",
    "field": "permit_no"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Field_GroupsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Group Name",
    "align": "left",
    "sortable": false,
    "name": "group_name",
    "field": "group_name"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Radio_EquipmentsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Amateur Operator Application Id",
    "align": "left",
    "sortable": false,
    "name": "amateur_operator_application_id",
    "field": "amateur_operator_application_id"
  }, {
    "label": "Make",
    "align": "left",
    "sortable": false,
    "name": "make",
    "field": "make"
  }, {
    "label": "Model",
    "align": "left",
    "sortable": false,
    "name": "model",
    "field": "model"
  }, {
    "label": "Serial No",
    "align": "left",
    "sortable": false,
    "name": "serial_no",
    "field": "serial_no"
  }, {
    "label": "Frequency",
    "align": "left",
    "sortable": false,
    "name": "frequency",
    "field": "frequency"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Radio_Operator_ExamsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Submitted Application Id",
    "align": "left",
    "sortable": false,
    "name": "submitted_application_id",
    "field": "submitted_application_id"
  }, {
    "label": "Exam Schedule Id",
    "align": "left",
    "sortable": false,
    "name": "exam_schedule_id",
    "field": "exam_schedule_id"
  }, {
    "label": "Radio Operator Exam Type Id",
    "align": "left",
    "sortable": false,
    "name": "radio_operator_exam_type_id",
    "field": "radio_operator_exam_type_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Required_AttachmentsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Application Id",
    "align": "left",
    "sortable": false,
    "name": "application_id",
    "field": "application_id"
  }, {
    "label": "Added By",
    "align": "left",
    "sortable": false,
    "name": "added_by",
    "field": "added_by"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Document Id",
    "align": "left",
    "sortable": false,
    "name": "document_id",
    "field": "document_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Radio_Operator_Exam_TypesTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Radio Operator Service Id",
    "align": "left",
    "sortable": false,
    "name": "radio_operator_service_id",
    "field": "radio_operator_service_id"
  }, {
    "label": "Code",
    "align": "left",
    "sortable": false,
    "name": "code",
    "field": "code"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  User_EmploymentsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "User Id",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  }, {
    "label": "Company Id",
    "align": "left",
    "sortable": false,
    "name": "company_id",
    "field": "company_id"
  }, {
    "label": "Status",
    "align": "left",
    "sortable": false,
    "name": "status",
    "field": "status"
  }, {
    "label": "Type",
    "align": "left",
    "sortable": false,
    "name": "type",
    "field": "type"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Submitted_Application_LogsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Submitted Application Id",
    "align": "left",
    "sortable": false,
    "name": "submitted_application_id",
    "field": "submitted_application_id"
  }, {
    "label": "Processed By",
    "align": "left",
    "sortable": false,
    "name": "processed_by",
    "field": "processed_by"
  }, {
    "label": "Action Taken",
    "align": "left",
    "sortable": false,
    "name": "action_taken",
    "field": "action_taken"
  }, {
    "label": "Status",
    "align": "left",
    "sortable": false,
    "name": "status",
    "field": "status"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  User_VitalsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Height",
    "align": "left",
    "sortable": false,
    "name": "height",
    "field": "height"
  }, {
    "label": "Weight",
    "align": "left",
    "sortable": false,
    "name": "weight",
    "field": "weight"
  }, {
    "label": "User Id",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  UacsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Description",
    "align": "left",
    "sortable": false,
    "name": "description",
    "field": "description"
  }, {
    "label": "Classification",
    "align": "left",
    "sortable": false,
    "name": "classification",
    "field": "classification"
  }, {
    "label": "Status",
    "align": "left",
    "sortable": false,
    "name": "status",
    "field": "status"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  SettingsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Option",
    "align": "left",
    "sortable": false,
    "name": "option",
    "field": "option"
  }, {
    "label": "Value",
    "align": "left",
    "sortable": false,
    "name": "value",
    "field": "value"
  }, {
    "label": "Description",
    "align": "left",
    "sortable": false,
    "name": "description",
    "field": "description"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  UsersTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Barangay Id",
    "align": "left",
    "sortable": false,
    "name": "barangay_id",
    "field": "barangay_id"
  }, {
    "label": "Username",
    "align": "left",
    "sortable": false,
    "name": "username",
    "field": "username"
  }, {
    "label": "First Name",
    "align": "left",
    "sortable": false,
    "name": "first_name",
    "field": "first_name"
  }, {
    "label": "Last Name",
    "align": "left",
    "sortable": false,
    "name": "last_name",
    "field": "last_name"
  }, {
    "label": "Middle Name",
    "align": "left",
    "sortable": false,
    "name": "middle_name",
    "field": "middle_name"
  }, {
    "label": "Dob",
    "align": "left",
    "sortable": false,
    "name": "dob",
    "field": "dob"
  }, {
    "label": "Gender",
    "align": "left",
    "sortable": false,
    "name": "gender",
    "field": "gender"
  }, {
    "label": "Nationality",
    "align": "left",
    "sortable": false,
    "name": "nationality",
    "field": "nationality"
  }, {
    "label": "Unit No",
    "align": "left",
    "sortable": false,
    "name": "unit_no",
    "field": "unit_no"
  }, {
    "label": "Street",
    "align": "left",
    "sortable": false,
    "name": "street",
    "field": "street"
  }, {
    "label": "Contact",
    "align": "left",
    "sortable": false,
    "name": "contact",
    "field": "contact"
  }, {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  }, {
    "label": "Picture",
    "align": "left",
    "sortable": false,
    "name": "picture",
    "field": "picture"
  }, {
    "label": "E Signature",
    "align": "left",
    "sortable": false,
    "name": "e_signature",
    "field": "e_signature"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  genderItems: [{
    value: "Male",
    label: "Male"
  }, {
    value: "Female",
    label: "Female"
  }],
  Submitted_ApplicationsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Application Id",
    "align": "left",
    "sortable": false,
    "name": "application_id",
    "field": "application_id"
  }, {
    "label": "User Id",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  }, {
    "label": "Signed By",
    "align": "left",
    "sortable": false,
    "name": "signed_by",
    "field": "signed_by"
  }, {
    "label": "Evaluation By",
    "align": "left",
    "sortable": false,
    "name": "evaluation_by",
    "field": "evaluation_by"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Remark",
    "align": "left",
    "sortable": false,
    "name": "remark",
    "field": "remark"
  }, {
    "label": "Status",
    "align": "left",
    "sortable": false,
    "name": "status",
    "field": "status"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  PermissionsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  }, {
    "label": "Guard Name",
    "align": "left",
    "sortable": false,
    "name": "guard_name",
    "field": "guard_name"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Role_Has_PermissionsTableHeaderItems: [{
    "label": "Permission Id",
    "align": "left",
    "sortable": false,
    "name": "permission_id",
    "field": "permission_id"
  }, {
    "label": "Role Id",
    "align": "left",
    "sortable": false,
    "name": "role_id",
    "field": "role_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Model_Has_PermissionsTableHeaderItems: [{
    "label": "Permission Id",
    "align": "left",
    "sortable": false,
    "name": "permission_id",
    "field": "permission_id"
  }, {
    "label": "Model Type",
    "align": "left",
    "sortable": false,
    "name": "model_type",
    "field": "model_type"
  }, {
    "label": "Model Id",
    "align": "left",
    "sortable": false,
    "name": "model_id",
    "field": "model_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Model_Has_RolesTableHeaderItems: [{
    "label": "Role Id",
    "align": "left",
    "sortable": false,
    "name": "role_id",
    "field": "role_id"
  }, {
    "label": "Model Type",
    "align": "left",
    "sortable": false,
    "name": "model_type",
    "field": "model_type"
  }, {
    "label": "Model Id",
    "align": "left",
    "sortable": false,
    "name": "model_id",
    "field": "model_id"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  AuditsTableHeaderItems: [{
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  }, {
    "label": "User Type",
    "align": "left",
    "sortable": false,
    "name": "user_type",
    "field": "user_type"
  }, {
    "label": "User Id",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  }, {
    "label": "Event",
    "align": "left",
    "sortable": false,
    "name": "event",
    "field": "event"
  }, {
    "label": "Auditable Type",
    "align": "left",
    "sortable": false,
    "name": "auditable_type",
    "field": "auditable_type"
  }, {
    "label": "Auditable Id",
    "align": "left",
    "sortable": false,
    "name": "auditable_id",
    "field": "auditable_id"
  }, {
    "label": "Old Values",
    "align": "left",
    "sortable": false,
    "name": "old_values",
    "field": "old_values"
  }, {
    "label": "New Values",
    "align": "left",
    "sortable": false,
    "name": "new_values",
    "field": "new_values"
  }, {
    "label": "Url",
    "align": "left",
    "sortable": false,
    "name": "url",
    "field": "url"
  }, {
    "label": "Ip Address",
    "align": "left",
    "sortable": false,
    "name": "ip_address",
    "field": "ip_address"
  }, {
    "label": "User Agent",
    "align": "left",
    "sortable": false,
    "name": "user_agent",
    "field": "user_agent"
  }, {
    "label": "Tags",
    "align": "left",
    "sortable": false,
    "name": "tags",
    "field": "tags"
  }, {
    "label": "Created At",
    "align": "left",
    "sortable": false,
    "name": "created_at",
    "field": "created_at"
  }, {
    "label": "Updated At",
    "align": "left",
    "sortable": false,
    "name": "updated_at",
    "field": "updated_at"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  exportFormats: {
    print: {
      label: 'Print',
      color: 'blue',
      icon: 'print',
      id: 'print',
      ext: ''
    },
    pdf: {
      label: 'Pdf',
      color: 'red',
      icon: 'picture_as_pdf',
      id: 'pdf',
      ext: 'pdf'
    },
    excel: {
      label: 'Excel',
      color: 'green',
      icon: 'grid_on',
      id: 'excel',
      ext: 'xlsx'
    },
    csv: {
      label: 'Csv',
      color: 'teal',
      icon: 'grid_on',
      id: 'csv',
      ext: 'csv'
    }
  }
};
// CONCATENATED MODULE: ./src/main.js















 // loop over all rules

for (let rule in rules) {
  Object(vee_validate_esm["c" /* extend */])(rule, rules[rule]);
}





vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].prototype.$EventBus = new vue_runtime_esm["a" /* default */](); // Global event bus

vue_runtime_esm["a" /* default */].prototype.$appName = "ntc";
const apiUrl = "http://ntc-ustp.c1.biz/"; //get the api base url

vue_runtime_esm["a" /* default */].prototype.$apiUrl = apiUrl;
const main_apiPath = "http://ntc-ustp.c1.biz/api/"; //get the the api path

vue_runtime_esm["a" /* default */].prototype.$apiPath = main_apiPath;
ApiService.init(main_apiPath); //axio api service use for making api request

vue_runtime_esm["a" /* default */].prototype.$api = ApiService; //save data to localstorage

vue_runtime_esm["a" /* default */].prototype.$localStore = StorageService; //all application menu

vue_runtime_esm["a" /* default */].prototype.$menus = AppMenus;
vue_runtime_esm["a" /* default */].prototype.$utils = utils;
vue_runtime_esm["a" /* default */].component('AutoCompleteSelect', AutoCompleteSelect);
vue_runtime_esm["a" /* default */].component('PageSearch', PageSearch);
vue_runtime_esm["a" /* default */].component('InlineEdit', InlineEdit);
vue_runtime_esm["a" /* default */].component('ApiDataSource', ApiDataSource);
vue_runtime_esm["a" /* default */].component('QUploaderInput', QUploaderInput);
vue_runtime_esm["a" /* default */].component('RecordCount', RecordCount);
vue_runtime_esm["a" /* default */].component('ValidationProvider', vee_validate_esm["b" /* ValidationProvider */]);
vue_runtime_esm["a" /* default */].component('ValidationObserver', vee_validate_esm["a" /* ValidationObserver */]);
vue_runtime_esm["a" /* default */].component('CheckDuplicate', CheckDuplicate);
vue_runtime_esm["a" /* default */].component('FileViewer', FileViewer);
vue_runtime_esm["a" /* default */].component('ImageViewer', ImageViewer);
vue_runtime_esm["a" /* default */].component('FullQEditor', FullQEditor);
vue_runtime_esm["a" /* default */].component('ImportData', ImportData);
vue_runtime_esm["a" /* default */].component('MasterDetailBtn', MasterDetailBtn);
vue_runtime_esm["a" /* default */].component('LangSwitcher', LangSwitcher);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__("bd4c");

// CONCATENATED MODULE: ./src/boot/filters.js


;
/* harmony default export */ var filters = (({
  Vue
}) => {
  Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  }), Vue.filter('readable', function (value) {
    if (!value) return '';
    return value.replace(/[^a-zA-Z0-9]/g, ' ');
  }), Vue.filter('humanDate', function (value) {
    if (!value) return '';

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let timeStamp = new Date(value);
    return date["b" /* default */].formatDate(timeStamp, 'Do MMM, YYYY');
  }), Vue.filter('humanTime', function (value) {
    if (!value) return '';

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let timeStamp = new Date(value);
    return date["b" /* default */].formatDate(timeStamp, 'hh:mm');
  }), Vue.filter('humanDatetime', function (value) {
    if (!value) return '';

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let timeStamp = new Date(value);
    return date["b" /* default */].formatDate(timeStamp, 'Do MMM, YYYY hh:mm');
  }), Vue.filter('relativeDate', function (value) {
    let dateFormats = [{
      unit: 'years',
      msg: 'year'
    }, {
      unit: 'months',
      msg: 'month'
    }, {
      unit: 'days',
      msg: 'day'
    }, {
      unit: 'hours',
      msg: 'hour'
    }, {
      unit: 'minutes',
      msg: 'min'
    }, {
      unit: 'seconds',
      msg: 'sec'
    }];

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let oldDate = new Date(value);
    let nowDate = new Date();
    let when = "ago";

    if (oldDate > nowDate) {
      when = "from now";
    }

    let format;
    let diff;

    for (let i = 0; i < dateFormats.length; i++) {
      format = dateFormats[i];
      diff = Math.abs(date["b" /* default */].getDateDiff(oldDate, nowDate, format.unit));

      if (diff > 0) {
        break;
      }
    }

    let displayUnit = format.msg;

    if (diff > 1) {
      displayUnit += "s";
    }

    return diff + " " + displayUnit + " " + when;
  }), Vue.filter('approximate', function (num, precision) {
    return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
  }), Vue.filter('lower', function (value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  }), Vue.filter('upper', function (value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  }), Vue.filter('truncate', function (value, length, dots) {
    length = length || 15;
    dots = dots || "...";
    if (!value || typeof value !== 'string') return '';
    if (value.length <= length) return value;
    return value.substring(0, length) + dots;
  }), Vue.filter('currency', function (value, currency, fraction) {
    currency = currency || "USD";
    fraction = fraction || 2;
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: fraction
    });
    return formatter.format(value);
  });
});
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// CONCATENATED MODULE: ./src/i18n/index.js
//import en from './en'
/* harmony default export */ var i18n = ({//en: en
});
// CONCATENATED MODULE: ./src/boot/i18n.js

;





const currentLocale = StorageService.getLocale() || vue_plugin["a" /* default */].lang.isoName;
vue_runtime_esm["a" /* default */].use(vue_i18n_esm["a" /* default */]);
const i18n_i18n = new vue_i18n_esm["a" /* default */]({
  locale: currentLocale,
  fallbackLocale: 'en-us',
  messages: i18n
});

try {
  if (currentLocale == 'en-us') {
    currentLocale = 'en';
  }

  __webpack_require__("b2d7")(`./${currentLocale}`).then(localeModule => {
    Object(vee_validate_esm["d" /* localize */])(currentLocale, localeModule);
  });
} catch (ex) {
  console.log(`Veevalidate locale(${currentLocale}) not available`);
}

/* harmony default export */ var boot_i18n = (({
  app
}) => {
  // Set i18n instance on app
  app.i18n = i18n_i18n;
});

// CONCATENATED MODULE: ./src/boot/axios.js


vue_runtime_esm["a" /* default */].prototype.$axios = axios_default.a;
// CONCATENATED MODULE: ./src/boot/auth.js


const publicPages = ['/', '/index', '/error']; //public which do not need authentation

const excludedRoutes = []; //all pages which do not need authentation

const roleAbilities = {
  "administrator": [],
  "user": []
};
/* harmony default export */ var boot_auth = (async ({
  Vue,
  store,
  router
}) => {
  let user = store.state.auth.user;
  let userRoleNames = store.state.auth.userRoles;
  let userPages = store.state.auth.userPages;

  if (user) {
    Vue.prototype.$isLoggedIn = true;
    Vue.prototype.$User = user;
    Vue.prototype.$UserPages = userPages;
    Vue.prototype.$UserRoleNames = userRoleNames;
    Vue.prototype.$UserName = user.username;
    Vue.prototype.$UserID = user.id;
    Vue.prototype.$UserEmail = user.email;
    Vue.prototype.$UserPhoto = user.picture;
    ;
  } else {
    Vue.prototype.$isLoggedIn = false;
  }

  const canView = function (path) {
    let routePath = utils.getRoutePath(path);
    return userPages.includes(routePath);
  };

  const canManage = function (page, userRecId) {
    let userRole = userRoleNames[0];
    let userRoleAbilities = roleAbilities[userRole] || [];

    if (userRoleAbilities.includes(page)) {
      return true;
    }

    return userRecId == user.id;
  };

  const isOwner = function (userRecId) {
    return userRecId == user.id;
  };

  Vue.prototype.$can = {
    view: canView,
    manage: canManage,
    isOwner: isOwner
  };
  router.beforeEach((to, from, next) => {
    let path = to.path;
    let pagePath = utils.getPagePath(path);
    let routePath = utils.getRoutePath(path);
    let authRequired = true;

    if (publicPages.includes(pagePath) || excludedRoutes.includes(routePath)) {
      authRequired = false;
    } //authenticate user


    if (authRequired) {
      if (!user) {
        return next({
          path: '/',
          query: {
            nexturl: to.fullPath
          }
        });
      } //authorize user


      if (!canView(path)) {
        return next({
          path: "/error/forbidden"
        });
      }
    } //navigate to redirect url if available


    if (to.name == "home" && to.query.nexturl) {
      return next({
        path: to.query.nexturl
      });
    }

    next();
  });
});
// EXTERNAL MODULE: ./node_modules/@quasar/quasar-app-extension-qcalendar/src/boot/register.js + 1 modules
var register = __webpack_require__("9ce1");

// CONCATENATED MODULE: ./.quasar/client-entry.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



































































































 // We load Quasar stylesheet file












vue_runtime_esm["a" /* default */].config.devtools = true;
vue_runtime_esm["a" /* default */].config.productionTip = false;
const publicPath = ``;

async function start() {
  const {
    app,
    store,
    router
  } = await _quasar_app();
  let hasRedirected = false;

  const redirect = url => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
    window.location.href = normalized;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');
  const bootFiles = [/* Cannot get final name for export "default" in "./src/main.js" (known exports: , known reexports: ) */ undefined, filters, boot_i18n, /* Cannot get final name for export "default" in "./src/boot/axios.js" (known exports: , known reexports: ) */ undefined, boot_auth, register["default"]];

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue;
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue: vue_runtime_esm["a" /* default */],
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  new vue_runtime_esm["a" /* default */](app);
}

start();

/***/ }),

/***/ "a0a2":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAO1SURBVHhe7ZppU+owFEDDooK4IugH/v+P09FxGQQZEHwn43U6fUkXsthizkymBUqbe3pzmxY69/f3O5X4j+73MpEjibGQxFhIYiwkMRaSGAtJjIUkxkISYyGJsVB6S7DbHeYdQ6fT+V4zUygGKd1ut3QnbYO4ttttYVyFYvjifD5Xq9XqYOQg5eTkRJ2dnRWOhlIxLy8v6uPj46DEDAYDdXV1VSimtPgiRFrbqRNLaca8vr7qjAHqDa3IdBMhDmoKDciYy8tLt6EkYtjJaDTSO5QDtAVOJnG8v7/rmKqIqTWPYUdIYdmmJn2ug9MEL9+BpjUXag2l09NTdXFxodf57N93f9abhPTp7u7uZ/3t7U0tFgu97n0omWiaFPDRJycx0gGWpgaclXwD0/a+muzfBeeMsSEShsOhGo/H6vb2Vt3c3OgZ5z7FMDZBxIiU6+trPcM8OjrSZ7Df72sxjH3Zrql4F5OVwj1Jfs7DZ8wryB7ZtokEyZjj42Nd+W1B8z5ZxHZNJWiNKYLPyag/kzEESsFtO97FUGSXy2Wly2XVey5kx86sIENpvV6rz8/P71d25KauCISwDfUoppwgGUMABM3VR8iedd5/fn7W61XEUMilmMs+QhMkYwgcMQ8PDzoQgu/1erqRSU9PT/pxaVacCZFAkaZulUn0SRAxQNDUEOQ8Pj7qhhCWDLUyKQLbIQZiXt6DiQHOMI0s2Ww2Woi8VxWRQfaQNVULtitBxYCIyLYqIAIJ2af5iGFiKK9DElyMCwwj6pKAkKIZtU8aK4bgecaczTDe42GZrIekkWIkaIZOXoBc3ULTKDFIoFFbeERBy8PnZFJemG9+XYzI4MpFTaGG8GBrMpkYr0BsG2M4RRcjIghaGjJ4PjOdTvVD6irT/9BZE1WMSKGgUj94mDWbzbQMuQxXCZZtkCnrIYgmRgI4Pz/Xz3955ElmMPHbJzhEmmqQL6KIkcCpGzIE5O676oTPBLWmtRkjHad+UFzltYsQYD8hh1NQMVkpriJMIDrULUIwMaGlAMfg0p7NRF84iZHOsDQ1akooKVko5iDHlXUXnDMm3wFeI4POciZjwDH5EU8yx1UK7P1vB7B1IEaW2Mj2SfrBMuq/HTiIqf0mvvpRSwwHI12zB29Dkz7XIf050UJlMay3TUgeicFLjeHL0tpOnVhKMyb9Zd4AX9yncDUd4qLeFMVVKAaqpF0bKTvZpWL+KnHm7C0kibGQxFhIYiwkMRaSGAtJjIUkxkISYyGJMaLUF8cNk7Fcbhr3AAAAAElFTkSuQmCC"

/***/ }),

/***/ "b2d7":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": [
		"d4d7",
		0
	],
	"./ar.json": [
		"d4d7",
		0
	],
	"./az": [
		"5db6",
		0
	],
	"./az.json": [
		"5db6",
		0
	],
	"./bd": [
		"2b85",
		0
	],
	"./bd.json": [
		"2b85",
		0
	],
	"./bg": [
		"3108",
		0
	],
	"./bg.json": [
		"3108",
		0
	],
	"./ca": [
		"36fd",
		0
	],
	"./ca.json": [
		"36fd",
		0
	],
	"./ckb": [
		"5ac5",
		0
	],
	"./ckb.json": [
		"5ac5",
		0
	],
	"./cs": [
		"f694",
		0
	],
	"./cs.json": [
		"f694",
		0
	],
	"./da": [
		"853c",
		0
	],
	"./da.json": [
		"853c",
		0
	],
	"./de": [
		"f551",
		0
	],
	"./de.json": [
		"f551",
		0
	],
	"./el": [
		"3be5",
		0
	],
	"./el.json": [
		"3be5",
		0
	],
	"./en": [
		"2593",
		0
	],
	"./en.json": [
		"2593",
		0
	],
	"./es": [
		"5a17",
		0
	],
	"./es.json": [
		"5a17",
		0
	],
	"./et": [
		"28b1",
		0
	],
	"./et.json": [
		"28b1",
		0
	],
	"./eu": [
		"656c",
		0
	],
	"./eu.json": [
		"656c",
		0
	],
	"./fa": [
		"5ea1",
		0
	],
	"./fa.json": [
		"5ea1",
		0
	],
	"./fi": [
		"e9cd",
		0
	],
	"./fi.json": [
		"e9cd",
		0
	],
	"./fr": [
		"6fde",
		0
	],
	"./fr.json": [
		"6fde",
		0
	],
	"./he": [
		"d567",
		0
	],
	"./he.json": [
		"d567",
		0
	],
	"./hi": [
		"cdad",
		0
	],
	"./hi.json": [
		"cdad",
		0
	],
	"./hr": [
		"dc20",
		0
	],
	"./hr.json": [
		"dc20",
		0
	],
	"./hu": [
		"bed6",
		0
	],
	"./hu.json": [
		"bed6",
		0
	],
	"./id": [
		"7a70",
		0
	],
	"./id.json": [
		"7a70",
		0
	],
	"./it": [
		"e26a",
		0
	],
	"./it.json": [
		"e26a",
		0
	],
	"./ja": [
		"ddd7",
		0
	],
	"./ja.json": [
		"ddd7",
		0
	],
	"./ka": [
		"fdcd",
		0
	],
	"./ka.json": [
		"fdcd",
		0
	],
	"./ko": [
		"e48c",
		0
	],
	"./ko.json": [
		"e48c",
		0
	],
	"./lt": [
		"85f3",
		0
	],
	"./lt.json": [
		"85f3",
		0
	],
	"./lv": [
		"c64c",
		0
	],
	"./lv.json": [
		"c64c",
		0
	],
	"./mn": [
		"0c64",
		0
	],
	"./mn.json": [
		"0c64",
		0
	],
	"./ms_MY": [
		"3708",
		0
	],
	"./ms_MY.json": [
		"3708",
		0
	],
	"./nb_NO": [
		"16c1",
		0
	],
	"./nb_NO.json": [
		"16c1",
		0
	],
	"./ne": [
		"52b8",
		0
	],
	"./ne.json": [
		"52b8",
		0
	],
	"./nl": [
		"562f",
		0
	],
	"./nl.json": [
		"562f",
		0
	],
	"./nn_NO": [
		"c7c8",
		0
	],
	"./nn_NO.json": [
		"c7c8",
		0
	],
	"./pl": [
		"94ce",
		0
	],
	"./pl.json": [
		"94ce",
		0
	],
	"./pt_BR": [
		"38a9",
		0
	],
	"./pt_BR.json": [
		"38a9",
		0
	],
	"./pt_PT": [
		"3207",
		0
	],
	"./pt_PT.json": [
		"3207",
		0
	],
	"./ro": [
		"eaf5",
		0
	],
	"./ro.json": [
		"eaf5",
		0
	],
	"./ru": [
		"8de0",
		0
	],
	"./ru.json": [
		"8de0",
		0
	],
	"./sk": [
		"70d1",
		0
	],
	"./sk.json": [
		"70d1",
		0
	],
	"./sl": [
		"2572",
		0
	],
	"./sl.json": [
		"2572",
		0
	],
	"./sq": [
		"5e5e",
		0
	],
	"./sq.json": [
		"5e5e",
		0
	],
	"./sr": [
		"111a",
		0
	],
	"./sr.json": [
		"111a",
		0
	],
	"./sr_Latin": [
		"4aa8",
		0
	],
	"./sr_Latin.json": [
		"4aa8",
		0
	],
	"./sv": [
		"ec0a",
		0
	],
	"./sv.json": [
		"ec0a",
		0
	],
	"./th": [
		"51d9",
		0
	],
	"./th.json": [
		"51d9",
		0
	],
	"./tr": [
		"55f0",
		0
	],
	"./tr.json": [
		"55f0",
		0
	],
	"./uk": [
		"e4b6",
		0
	],
	"./uk.json": [
		"e4b6",
		0
	],
	"./vi": [
		"368c",
		0
	],
	"./vi.json": [
		"368c",
		0
	],
	"./zh_CN": [
		"1cd5",
		0
	],
	"./zh_CN.json": [
		"1cd5",
		0
	],
	"./zh_TW": [
		"60d4",
		0
	],
	"./zh_TW.json": [
		"60d4",
		0
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "b2d7";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "c6e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMixin; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2b3d");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_3__);




const PageMixin = {
  data: function () {
    return {
      inputSearch: ""
    };
  },
  computed: {
    isDialogOpen: function () {
      return this.$store.getters["pageComponents/isDialogOpen"];
    }
  },
  methods: {
    openPageDialog: function (pageComponent, pageUrl, modelBind) {
      this.$store.commit("pageComponents/setRightDrawer", false);
      this.$store.dispatch('pageComponents/openPageDialog', {
        pageComponent,
        pageUrl,
        modelBind
      });
    },
    openPageDrawer: function (pageComponent, pageUrl, modelBind) {
      this.$store.commit("pageComponents/setPageDialog", false);
      this.$store.dispatch('pageComponents/openPageDrawer', {
        pageComponent,
        pageUrl,
        modelBind
      });
    },
    closeDialogs: function () {
      this.$store.commit("pageComponents/setRightDrawer", false);
      this.$store.commit("pageComponents/setPageDialog", false);
    },
    setPageTitle: function (title, pagename) {
      document.title = title;
    },
    flashMsg: function (message, color, position, icon) {
      color = color || "positive";
      position = position || "top";
      icon = icon || "";

      if (message) {
        this.$q.notify({
          message,
          position,
          icon,
          color
        });
      }
    },
    navigateTo: function (path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    showPageRequestError: function (request) {
      let defaultMsg = "Error processing request!";
      let errorMsgs = [defaultMsg];

      if (request.response) {
        let error = request.response.data;

        if (Array.isArray(error)) {
          errorMsgs = error;
        } else if (typeof error === 'object') {
          errorMsgs = Object.values(error);
        } else {
          errorMsgs = [error.toString()];
        }
      }

      this.$store.dispatch('pageComponents/showPageErrors', errorMsgs);
    },
    openExportPage: function () {
      let actions = [];
      this.exportFormats.forEach(format => {
        actions.push(this.$menus.exportFormats[format]);
      });
      let message = "Export";
      this.$q.bottomSheet({
        message,
        grid: false,
        actions
      }).onOk(action => {
        let exportFormat = this.$menus.exportFormats[action.id];
        let url = this.apiUrl;
        let queryParam = {
          export: action.id
        };
        let exportUrl = this.$utils.setApiPath(url, queryParam);
        let fileName = new Date().toISOString().slice(0, 10) + '-' + this.pageName + "-report." + exportFormat.ext;
        this.$api.download(exportUrl).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          link.remove();
        }, response => {
          console.error(response);
          alert("Unable to download file");
        });
      }).onCancel(() => {// console.log('Dismissed')
      }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
      });
    },
    setFilter: function (options, fieldName) {
      if (Array.isArray(options)) {
        let selectedOptions = this.filters[fieldName];

        if (Array.isArray(selectedOptions)) {
          let labels = [];

          for (var i in options) {
            if (selectedOptions.indexOf(options[i].value) > -1) {
              labels.push(options[i].label);
            }
          }

          this.filtersLabel[fieldName] = labels;
        } else if (selectedOptions.label) {
          this.filtersLabel[fieldName] = selectedOptions.label;
        } else {
          let option = options.find(item => item.value === selectedOptions);
          this.filtersLabel[fieldName] = option.label;
        }
      } else if (options.label) {
        this.filters[fieldName] = options.value;
        this.filtersLabel[fieldName] = options.label;
      } else {
        this.filters[fieldName] = options;
        this.filtersLabel[fieldName] = options;
      }
    },
    normalizedFormData: function () {
      let payload = this.formData || this.arrFormData;

      if (Array.isArray(payload)) {
        payload.forEach(function (obj) {
          Object.keys(obj).forEach(function (key) {
            if (Array.isArray(obj[key])) {
              obj[key] = obj[key].toString();
            }
          });
        });
      } else {
        Object.keys(payload).forEach(function (key) {
          if (Array.isArray(payload[key])) {
            payload[key] = payload[key].toString();
          }
        });
      }

      return payload;
    },
    mapOptionField: function (response, fieldname) {
      let currentValue = this.formData[fieldname];

      if (currentValue) {
        if (Array.isArray(currentValue)) {
          let mapSelectedOptions = [];
          let mapSelectedOptionsValue = [];
          currentValue.forEach(val => {
            let option = response.find(v => v.value == val);
            mapSelectedOptions.push(option);
            mapSelectedOptionsValue.push(option.value);
          });
          this.formData[fieldname] = mapSelectedOptions; // update the select label

          this.formData[fieldname] = mapSelectedOptionsValue; // this will emit the value.
        } else {
          let mapSelectedOption = response.find(v => v.value == currentValue);
          this.formData[fieldname] = mapSelectedOption; // update the select label

          this.formData[fieldname] = mapSelectedOption.value; // this will emit the value.
        }
      }
    }
  }
};

/***/ }),

/***/ "ed82":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.c9e3baf9.js.map
