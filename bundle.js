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

const Walls = __webpack_require__(/*! ./walls */ "./src/walls.js");
const Pacman = __webpack_require__(/*! ./pacman */ "./src/pacman.js");

class Game {
    constructor(canvas, ctx, map) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = map;
        this.walls = new Walls(ctx, this.map);
        this.pacman = new Pacman(ctx, this.map);
        this.winner = false;
        this.started = false;
        
    }

    gameOver() {
        if (this.pacman.pillCount === 0) {
            // console.log('ate all the pills');
            this.winner = true;
            return true;
        } else {
            console.log(`${this.pacman.pillCount} pills remaining`)
        }
    }

    display() {
        let pregame = document.getElementById('pregame');
        let endGame = document.getElementById('gameover');
        if (this.started === false) {
            pregame.style.display = 'block';
        } else {
            pregame.style.display = 'none';
             if (this.gameOver()) {
                 endGame.style.display = 'block';
             } else {
                 console.log(this.started);
                 this.walls.render();
                 this.pacman.draw();
             }
        }
        // if (this.gameOver()) {
        //    let endGame = document.getElementById('gameover');
        //    endGame.style.display = 'block';
        // } else {
        //     console.log(this.started);
        //     this.walls.render();
        //     this.pacman.draw();
        // }
    }

    play() {
       const animate = () => {
           this.frame = requestAnimationFrame(animate);
           this.display();
           
       }

       animate();
    }
}

module.exports = Game;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./game */ "./src/game.js");
const Pacman = __webpack_require__(/*! ./pacman */ "./src/pacman.js");

// pillcount = 147
const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],
    [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//pillcount = 8
const testMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];



document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    var WIDTH = 570; // 19 cols * 30
    var HEIGHT = 660; // 22 rows * 30
    canvasEl.height = HEIGHT;
    canvasEl.width = WIDTH;
    const ctx = canvasEl.getContext('2d');
    

    const game = new Game(canvasEl,ctx, map);

    document.onkeydown = function (e) {
        //ascii values => a = 65
        if (e.which == 37) {
            //left
            game.pacman.direction = 'left';
            game.pacman.xdir -= 30;
            console.log('left');
            console.log(game.pacman.x);
        } else if (e.which == 38) {
            //up
 
            game.pacman.direction = 'up';
            game.pacman.ydir -= 30;
            console.log('up');
        } else if (e.which == 39) {
            // right
            game.pacman.direction = 'right';
            game.pacman.xdir += 30;
            console.log('right');

        } else if (e.which == 40) {
            // down
            game.pacman.direction = 'down';
            game.pacman.ydir += 30;
            console.log('down');
        }
    }
    game.display();
    document.getElementById("start").addEventListener("click", () =>{
      game.started = true;  
      game.play()
    });
    
    
})





// console.log('webpack is working');
 



/***/ }),

/***/ "./src/pacman.js":
/*!***********************!*\
  !*** ./src/pacman.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Pacman {
    constructor(ctx, map) {
        this.ctx = ctx;
        this.x = 285;
        this.y = 375;
        this.direction = false;
        this.map = map;
        this.pillCount = 147;
        this.open = false;
        setInterval(() => {
            if (this.open) {
                this.open = false;
            } else {
                this.open = true;
            }
        }, 150);
    // this.map = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    //     [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    //     [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    //     [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    //     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //     [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    //     [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //     [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],
    //     [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //     [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //     [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    //     [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],
    //     [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    //     [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],
    //     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ];
        
    }

   
    

    arc() {
        let sAngle;
        let eAngle;
        let saAngle = sAngle = (Math.PI / 180) * 30;
        let eaAngle = eAngle = (Math.PI / 180) * (360 - 30);
        if (this.direction === 'left') {
           if (this.open) {
              sAngle = 1.25 * Math.PI;
              eAngle = 0.75 * Math.PI;
           } else {
              sAngle = Math.PI;
              eAngle = 0.999 * Math.PI;
           }
           
            
        } else if (this.direction === 'right' || this.direction === false) {
            if (this.open) {
               sAngle = (Math.PI / 180) * 30;
               eAngle = (Math.PI / 180) * (360 - 30);
            } else {
                sAngle = 0;
                eAngle = 2 * Math.PI;
                // this.ctx.moveTo(this.x, this.y - 12.5);
                // this.ctx.lineTo(this.x, this.y);
            };
        } else if (this.direction === 'down') {
            if (this.open) {
               sAngle = 0.75 * Math.PI;
               eAngle = 0.25 * Math.PI;
            } else {
                sAngle = .5 * Math.PI;
                eAngle =  0.49* Math.PI;
                // this.ctx.lineTo(this.x, this.y);
            }
            
        } else if (this.direction === 'up') {
            if (this.open) {
                sAngle = (7 / 4) * Math.PI;
                eAngle = (5/4) * Math.PI;
            } else {
                sAngle = (3/2) * Math.PI;
                eAngle = 1.49 * Math.PI;
            }
            
        }
        // this.ctx.arc(this.x, this.y, 12.5,
        //     (Math.PI / 180) * 30,
        //     (Math.PI / 180) * (360 - 30));
        if (this.open) {
            // setInterval(() => this.open = false, 2000);
            
            this.ctx.arc(this.x, this.y, 12.5, sAngle, eAngle);
        } else {
            // this.open = true;
            
            this.ctx.arc(this.x, this.y, 12.5, sAngle, eAngle);
        }
        
    }

    checkCollision(direction) {
        let xAxis = Math.floor(this.x / 30);
        let yAxis = Math.floor(this.y / 30);
        let nextX = this.x
        let nextY = this.y;

        if (direction === "up") {
            nextY -= 12;
            const top = this.collision(xAxis, yAxis - 1, nextX, nextY);
            const left = this.collision(xAxis - 1, yAxis - 1, nextX - 11.5, nextY);
            const right = this.collision(xAxis + 1, yAxis - 1, nextX + 11.5, nextY);
            return top || left || right;
        } else if (direction === "down") {
            nextY += 12;
            const down = this.collision(xAxis, yAxis + 1, nextX, nextY);
            const left = this.collision(xAxis - 1, yAxis + 1, nextX - 11.5, nextY);
            const right = this.collision(xAxis + 1, yAxis + 1, nextX + 11.5, nextY);
            return down || left || right;
        } else if (direction === "left") {
            nextX -= 12;
            const left = this.collision(xAxis - 1, yAxis, nextX, nextY);
            const top = this.collision(xAxis - 1, yAxis - 1, nextX, nextY - 11.5);
            const down = this.collision(xAxis - 1, yAxis + 1, nextX, nextY + 11.5);
            return left || top || down;
        } else if (direction === "right") {
            nextX += 12;
            const right = this.collision(xAxis + 1, yAxis, nextX, nextY);
            const top = this.collision(xAxis + 1, yAxis - 1, nextX, nextY - 11.5);
            const down = this.collision(xAxis + 1, yAxis + 1, nextX, nextY + 11.5);
            return right || top || down;
        }
    }

    solidDetect(dx, dy, x, y) {
        if (x >= dx && x <= dx + 30 && y >= dy && y <= dy + 30) {
            // console.log(true);
            console.log(this.pillCount);
            return true;
        } else {
            // console.log(false);
            return false;
        }
    }

    collision(xAxis, yAxis, nextX, nextY) {
        if (this.map[yAxis][xAxis] === 1 && this.solidDetect(xAxis * 30, yAxis * 30, nextX, nextY)) {
            //check walls
            // console.log('wall collission');
            return true;
        } else if (this.map[yAxis][xAxis] === 3 && this.solidDetect(xAxis * 30, yAxis * 30, nextX, nextY)) {
            //check pills
            // console.log("pill collision");
            this.map[yAxis][xAxis] = 0;
            this.pillCount -= 1;
            // console.log(this.pillCount);
        } else {
            return false;
        }
    }

    escapeSide() {
        if (this.x <= 0) {
            this.x = 570 - this.x;
        } else if (this.x >= 570) {
            this.x = this.x - 570;
        }
    }

    draw() {
        this.escapeSide();
        this.move();
        this.ctx.beginPath();
        this.arc();

        //mouth
        // this.ctx.moveTo(this.x,this.y-12.5);
        
        this.ctx.lineTo(this.x, this.y);

        //fill pacman shape with fillstyle
        this.ctx.fillStyle = 'yellow';
        this.ctx.fill();
        this.ctx.stroke();
    }

    move() {
        if (this.checkCollision(this.direction)) {
            return this.direction;
        } else if (this.direction === "up") {
            this.y -= 1;
        } else if (this.direction === "down") {
            this.y += 1;
        } else if (this.direction === "left") {
            this.x -= 1;
        } else if (this.direction === "right") {
            this.x += 1;
        }
    }
}

module.exports = Pacman;



/***/ }),

/***/ "./src/walls.js":
/*!**********************!*\
  !*** ./src/walls.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Walls {
  constructor(ctx, map) {
    this.ctx = ctx;
    this.map = map;
    // this.map = [
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    //   [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    //   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //   [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    //   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    //   [1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    //   [1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    //   [1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1],
    //   [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    //   [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],
    //   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    //   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ]; // 19 * 22

  }

  createBackground() {
    this.ctx.beginPath();
    this.ctx.rect(3, 3, 660, 660);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.stroke();
  }

  clearWalls() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 660, 660);
    this.ctx.stroke();
  }

  createWalls() {
    // this.ctx.fillStyle = "red";
    this.map.forEach((row, i) => {
      row.forEach((gridPoint, j) => {
        if (gridPoint === 1) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'red'
          this.ctx.rect(j * 30, i * 30, 30, 30); //x,y, width, height
          this.ctx.stroke();
          this.ctx.fill();
        }
        if (gridPoint === 3) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'orange';
          this.ctx.arc((j * 30) + 15, (i * 30) + 15, 4, 0, 360);
          this.ctx.fill();
        }

      });
    });
  }

  endGame() {
    this.createWalls();
    this.ctx.fillStyle = 'white';
    this.ctx.font = "39px Georgia";
    this.ctx.fillText("Congratulations you won!", 80, 330); //text, pos
    // this.ctx.strokeText("Pacman loading....", 50, 100); //hollow text
  }

  render() {
      this.clearWalls();
      this.createBackground();
      this.createWalls();
      // console.log(this.map.length, this.map[0].length);
  }

}

module.exports = Walls;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map