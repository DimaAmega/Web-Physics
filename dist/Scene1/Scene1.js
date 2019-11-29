/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Sceens/Scene1/core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Modules/Plane.js":
/*!**************************!*\
  !*** ./Modules/Plane.js ***!
  \**************************/
/*! exports provided: Plane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Plane\", function() { return Plane; });\nPIXI.utils.skipHello();\nvar addOnWheel = (elem, handler) => {\n    if (elem.addEventListener) {\n      if ('onwheel' in document) {\n        // IE9+, FF17+\n        elem.addEventListener(\"wheel\", handler);\n      } else if ('onmousewheel' in document) {\n        // устаревший вариант события\n        elem.addEventListener(\"mousewheel\", handler);\n      } else {\n        // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим\n        elem.addEventListener(\"MozMousePixelScroll\", handler);\n      }\n    } else { // IE8-\n      text.attachEvent(\"onmousewheel\", handler);\n    }\n};\nvar createApp = function(parentId){\t\n\tvar parent = document.getElementById(parentId);\n\tvar app = new PIXI.Application({\n\t\tresizeTo:document.getElementById(parentId),\n\t\tantialias:true});\t\n\t\tparent.appendChild(app.view);\n\t return app;\n};\n\nvar Plane = function(parentId) {\n    /////////////////////////////////\n    //          PRIVATE\n    /////////////////////////////////\n    var app = createApp(parentId);\n    var stage = document.getElementById(parentId);\n    var cw = stage.offsetWidth,ch = stage.offsetHeight;\n    var scale = 40;\n    var x_off = 0,y_off = 0,o_x_off = 0, o_y_off = 0,start_p;\n    var coord_Lines = new PIXI.Graphics();\n    var gxc = (x) => {\n        return cw/2 + x*scale + x_off;\n    };\n    var gyc = (y) => {\n        return ch/2 - y*scale + y_off;\n    };\n    var gxLeft = () => {\n        return - (cw/2+x_off)/scale;\n    };\n    var gxRight = () => {\n        return (cw/2-x_off)/scale;\n    };\n    var gyTop = () => {\n        return (ch/2+y_off)/scale;\n    };\n    var gyBottom = () => {\n        return - (ch/2-y_off)/scale; \n    };\n    var drawPlan = ()=>{\n    var iterxL = Math.floor((cw/2+x_off)/scale);\n    var iterxR = Math.floor((cw/2-x_off)/scale);\n    var iteryT = Math.floor((ch/2+y_off)/scale);\n    var iteryB = Math.floor((ch/2-y_off)/scale);\n    coord_Lines.clear();\n    coord_Lines.lineStyle(3,0xffffff,.6);\n    if (((ch/2 + y_off)>0)&&((ch/2 + y_off)<ch)) { //Добавить Горизонт линию\n      coord_Lines.moveTo(0,ch/2 + y_off).lineTo(cw,(ch/2)+y_off);  \n    } \n    if (((cw/2 + x_off)>0)&&((cw/2 + x_off)<cw))  { //Добавить Вертик линию\n      coord_Lines.moveTo(cw/2 + x_off,0).lineTo(cw/2 + x_off,ch); \n    } \n    coord_Lines.lineStyle(1,0xffffff,.212);\n    for(var i = -iterxL; i<=iterxR;i++) //Добавить Вертик линию\n    coord_Lines.moveTo(x_off+((cw)/2) + i*scale  , 0 ).lineTo(x_off + ((cw)/2) +i*scale  ,ch);\n\n    for(var i = -iteryT; i<=iteryB;i++) //Добавить Горизонт линию\n    coord_Lines.moveTo( 0 , y_off + ch/2 +i*scale ).lineTo( cw , y_off + ch/2 + i*scale );\n};\n    /////////////////////////////////\n    //          CONSTRUCTOR\n    /////////////////////////////////\n    app.stage.addChild(coord_Lines);\n    new ResizeSensor(stage, function() {\n        cw = stage.offsetWidth;\n        ch = stage.offsetHeight;\n        drawPlan();\n    });\n    addOnWheel(app.view,(e)=>{\n        var delta = e.deltaY || e.detail || e.wheelDelta;\n            // отмасштабируем при помощи CSS\n            var coords = stage.getBoundingClientRect()\n            var X =(e.clientX - coords.x - cw/2 - x_off)/scale;\n            var Y =(ch/2 + y_off - e.clientY + coords.y)/scale;\n        \n            if((scale <=30)&&(delta>0)) scale = 30; else \n            if((scale >= 300)&&(delta<0)) scale = 300; else\n            if (delta > 0) scale -= 2;\n            else scale += 2;\n        if(delta>0) {\n            x_off +=2*X;\n            y_off -=2*Y;\n        } else {\n            x_off -=2*X;\n            y_off +=2*Y;\n        }\n            drawPlan();\n            e.preventDefault();\n    });\n    var mousemove = (e)=>{\n        var dx = e.clientX - start_p.x;\n        var dy = e.clientY - start_p.y;\n        x_off = o_x_off + dx;\n        y_off = o_y_off + dy;\n        drawPlan();\n    };\n    app.view.addEventListener(\"mousedown\",(e)=>{\n        start_p = {x:e.clientX,y:e.clientY};\n        o_x_off = x_off;\n        o_y_off = y_off;\n        app.view.addEventListener(\"mousemove\",mousemove);\n    });\n    app.view.addEventListener(\"mouseup\",(e)=>{\n    app.view.removeEventListener(\"mousemove\",mousemove);\n    });\n    drawPlan();\n    /////////////////////////////////\n    //          PUBLIC\n    /////////////////////////////////\n    return this;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./Modules/Plane.js?");

/***/ }),

/***/ "./Sceens/Scene1/core.js":
/*!*******************************!*\
  !*** ./Sceens/Scene1/core.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_Plane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Modules/Plane */ \"./Modules/Plane.js\");\n\nnew _Modules_Plane__WEBPACK_IMPORTED_MODULE_0__[\"Plane\"](\"stage\");\n\n\n//# sourceURL=webpack:///./Sceens/Scene1/core.js?");

/***/ })

/******/ });