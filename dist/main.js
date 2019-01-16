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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Walls = __webpack_require__(/*! ./walls */ \"./src/walls.js\");\nconst Pacman = __webpack_require__(/*! ./pacman */ \"./src/pacman.js\");\n\nclass Game {\n    constructor(canvas, ctx, map) {\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.map = map;\n        this.walls = new Walls(ctx, map);\n        this.pacman = new Pacman(ctx, map);\n        \n    }\n\n    setup() {\n        this.walls.render();\n        this.pacman.draw();\n    }\n\n    play() {\n       const animate = () => {\n           this.frame = requestAnimationFrame(animate);\n           this.setup();\n       }\n       animate();\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Pacman = __webpack_require__(/*! ./pacman */ \"./src/pacman.js\");\nconst map = [\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],\n    [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],\n    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    [1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1],\n    [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],\n    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],\n    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n    [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],\n    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],\n    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],\n    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n    [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],\n    [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],\n    [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],\n    [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],\n    [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],\n    [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],\n    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n];\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"canvas\");\n    var WIDTH = 570; // 19 cols * 30\n    var HEIGHT = 660; // 22 rows * 30\n    canvasEl.height = HEIGHT;\n    canvasEl.width = WIDTH;\n    const ctx = canvasEl.getContext('2d');\n    \n\n    const game = new Game(canvasEl,ctx, map);\n\n    document.onkeydown = function (e) {\n        //ascii values => a = 65\n        if (e.which == 37) {\n            //left\n            game.pacman.direction = 'left';\n            game.pacman.xdir -= 30;\n            console.log('left');\n            console.log(game.pacman.x);\n        } else if (e.which == 38) {\n            //up\n \n            game.pacman.direction = 'up';\n            game.pacman.ydir -= 30;\n            console.log('up');\n        } else if (e.which == 39) {\n            // right\n            game.pacman.direction = 'right';\n            game.pacman.xdir += 30;\n            console.log('right');\n\n        } else if (e.which == 40) {\n            // down\n            game.pacman.direction = 'down';\n            game.pacman.ydir += 30;\n            console.log('down');\n        }\n    }\n    game.setup();\n    document.getElementById(\"start\").addEventListener(\"click\", () => game.play());\n    \n    \n})\n\n\n\n\n\n// console.log('webpack is working');\n \n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pacman.js":
/*!***********************!*\
  !*** ./src/pacman.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Pacman {\n    constructor(ctx, map) {\n        this.ctx = ctx;\n        this.x = 285;\n        this.y = 375;\n        this.direction = false;\n        this.map = map;\n    // this.map = [\n    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n    //     [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],\n    //     [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],\n    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n    //     [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],\n    //     [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],\n    //     [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],\n    //     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n    //     [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],\n    //     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],\n    //     [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],\n    //     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n    //     [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],\n    //     [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    //     [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],\n    //     [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],\n    //     [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],\n    //     [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],\n    //     [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],\n    //     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n    // ];\n    }\n\n\n    arc() {\n        this.ctx.arc(this.x, this.y, 11.5,\n            (Math.PI / 180) * 30,\n            (Math.PI / 180) * (360 - 30));\n    }\n\n    checkCollision(direction) {\n        let xAxis = Math.floor(this.x / 30);\n        let yAxis = Math.floor(this.y / 30);\n        let nextX = this.x\n        let nextY = this.y;\n\n        if (direction === \"up\") {\n            nextY -= 12;\n            const top = this.collision(xAxis, yAxis - 1, nextX, nextY);\n            const left = this.collision(xAxis - 1, yAxis - 1, nextX - 11.5, nextY);\n            const right = this.collision(xAxis + 1, yAxis - 1, nextX + 11.5, nextY);\n            return top || left || right;\n        } else if (direction === \"down\") {\n            nextY += 12;\n            const down = this.collision(xAxis, yAxis + 1, nextX, nextY);\n            const left = this.collision(xAxis - 1, yAxis + 1, nextX - 11.5, nextY);\n            const right = this.collision(xAxis + 1, yAxis + 1, nextX + 11.5, nextY);\n            return down || left || right;\n        } else if (direction === \"left\") {\n            nextX -= 12;\n            const left = this.collision(xAxis - 1, yAxis, nextX, nextY);\n            const top = this.collision(xAxis - 1, yAxis - 1, nextX, nextY - 11.5);\n            const down = this.collision(xAxis - 1, yAxis + 1, nextX, nextY + 11.5);\n            return left || top || down;\n        } else if (direction === \"right\") {\n            nextX += 12;\n            const right = this.collision(xAxis + 1, yAxis, nextX, nextY);\n            const top = this.collision(xAxis + 1, yAxis - 1, nextX, nextY - 11.5);\n            const down = this.collision(xAxis + 1, yAxis + 1, nextX, nextY + 11.5);\n            return right || top || down;\n        }\n    }\n\n    solidDetect(dx, dy, x, y) {\n        if (x >= dx && x <= dx + 30 && y >= dy && y <= dy + 30) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    collision(xAxis, yAxis, nextX, nextY) {\n        if (this.map[yAxis][xAxis] === 1 && this.solidDetect(xAxis * 30, yAxis * 30, nextX, nextY)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    escapeSide() {\n        if (this.x <= 0) {\n            this.x = 570 - this.x;\n        } else if (this.x >= 570) {\n            this.x = this.x - 570;\n        }\n    }\n\n    draw() {\n        this.escapeSide();\n        this.move();\n        this.ctx.beginPath();\n        this.arc();\n        this.ctx.lineTo(this.x, this.y);\n        this.ctx.fillStyle = 'yellow';\n        this.ctx.fill();\n        this.ctx.stroke();\n    }\n\n    move() {\n        if (this.checkCollision(this.direction)) {\n            return this.direction;\n        } else if (this.direction === \"up\") {\n            this.y -= 1;\n        } else if (this.direction === \"down\") {\n            this.y += 1;\n        } else if (this.direction === \"left\") {\n            this.x -= 1;\n        } else if (this.direction === \"right\") {\n            this.x += 1;\n        }\n    }\n}\n\nmodule.exports = Pacman;\n\n\n\n//# sourceURL=webpack:///./src/pacman.js?");

/***/ }),

/***/ "./src/walls.js":
/*!**********************!*\
  !*** ./src/walls.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Walls {\n  constructor(ctx, map) {\n    this.ctx = ctx;\n    this.map = map;\n    // this.map = [\n    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],\n    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],\n    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    //   [1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1],\n    //   [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],\n    //   [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],\n    //   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n    //   [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],\n    //   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],\n    //   [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],\n    //   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n    //   [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],\n    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],\n    //   [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],\n    //   [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],\n    //   [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],\n    //   [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],\n    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],\n    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n    // ]; // 19 * 22\n\n  }\n\n  createBackground() {\n    this.ctx.beginPath();\n    this.ctx.rect(3, 3, 660, 660);\n    this.ctx.fillStyle = \"black\";\n    this.ctx.fill();\n    this.ctx.stroke();\n  }\n\n  clearWalls() {\n    this.ctx.beginPath();\n    this.ctx.clearRect(0, 0, 600, 600);\n    this.ctx.stroke();\n  }\n\n  createWalls() {\n    // this.ctx.fillStyle = \"red\";\n    this.map.forEach((row, i) => {\n      row.forEach((gridPoint, j) => {\n        if (gridPoint === 1) {\n          this.ctx.beginPath();\n          this.ctx.fillStyle = 'red'\n          this.ctx.rect(j * 30, i * 30, 30, 30); //x,y, width, height\n          this.ctx.stroke();\n          this.ctx.fill();\n        }\n        if (gridPoint === 3) {\n          this.ctx.beginPath();\n          this.ctx.fillStyle = 'orange';\n          this.ctx.arc((j * 30) + 15, (i * 30) + 15, 4, 0, 360);\n          this.ctx.fill();\n        }\n\n      });\n    });\n  }\n\n  render() {\n      this.clearWalls();\n      this.createBackground();\n      this.createWalls();\n      console.log(this.map.length, this.map[0].length);\n  }\n\n}\n\nmodule.exports = Walls;\n\n//# sourceURL=webpack:///./src/walls.js?");

/***/ })

/******/ });