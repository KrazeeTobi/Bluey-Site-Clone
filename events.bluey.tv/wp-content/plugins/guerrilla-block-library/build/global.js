this["gbl"] = this["gbl"] || {}; this["gbl"]["global"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/shared/js/global.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/billboard/functions.js":
/*!***************************************!*\
  !*** ./blocks/billboard/functions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Billboard Block Functions
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This function needs to be able to initialised in FE and BE
 * so adding it here we can include anywhere to be used
 */
var self = module.exports = {
  billboardDetails: function billboardDetails() {
    var setPixels = function setPixels() {
      var billboard = document.querySelector('.wp-block-bbc-billboard');
      var details = billboard.querySelector('.gbl-page-details');
      var setMargin = details.clientHeight;
      var setTransform;

      if (window.innerWidth > 981) {
        setTransform = details.clientHeight - 60;
      } else {
        setTransform = details.clientHeight - 20;
      }

      details.style.transform = "translateY(".concat(setTransform, "px)");
      billboard.style.marginBottom = "".concat(setMargin, "px");
    };

    setPixels();
    var resizeTimeout;

    var resizeThrottler = function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          setPixels(); // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
      }
    };

    window.addEventListener('resize', resizeThrottler, false);
  }
};

/***/ }),

/***/ "./blocks/channel-logos/functions.js":
/*!*******************************************!*\
  !*** ./blocks/channel-logos/functions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Channel Logo Functions
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This function needs to be able to initialised in FE and BE
 * so adding it here we can include anywhere to be used
 */
var self = module.exports = {
  logoCharacters: function logoCharacters() {
    /**
     * Check the channel logo block is the in viewport
     * This function grabs the boundaries of the element from the browsers
     * and returns true or false if it is in the viewport when run.
     * @param {element} elem
     * @link https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
     */
    var isInViewport = function isInViewport(elem) {
      var bounding = elem.getBoundingClientRect();
      return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    var logos = document.querySelectorAll('.wp-block-bbc-channel-logos');
    /**
     * Move characters in each instance of the dashboard.
     * To be used on init and on on scroll.
     */

    var moveCharacters = function moveCharacters() {
      /// Check for multiple instance
      for (var index = 0; index < logos.length; index++) {
        var charOne = logos[index].querySelector('.left-character');
        var charTwo = logos[index].querySelector('.right-character');

        if (charOne && isInViewport(charOne)) {
          charOne.classList.add('scale-in-left-center');
        }

        if (charTwo && isInViewport(charTwo)) {
          charTwo.classList.add('scale-in-right-center');
        }
      }
    };

    moveCharacters(); /// now run this on scroll events

    var ticking = false;
    window.addEventListener('scroll', function (e) {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          moveCharacters();
          ticking = false;
        });
        ticking = true;
      }
    });
  }
};

/***/ }),

/***/ "./blocks/cta-block/functions.js":
/*!***************************************!*\
  !*** ./blocks/cta-block/functions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * CTA Block Functions
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This function needs to be able to initialised in FE and BE
 * so adding it here we can include anywhere to be used
 */
var self = module.exports = {
  ctaCharacters: function ctaCharacters() {
    /**
     * Check the cta block is in viewport
     * This function grabs the boundaries of the element from the browsers
     * and returns true or false if it is in the viewport when run.
     * @param {element} elem
     * @link https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
     */
    var isInViewport = function isInViewport(elem) {
      var bounding = elem.getBoundingClientRect();
      return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    var cta = document.querySelectorAll('.wp-block-bbc-cta-block');
    /**
     * Move characters in each instance of the dashboard.
     * To be used on init and on on scroll.
     */

    var moveCharacters = function moveCharacters() {
      /// Check for multiple instance
      for (var index = 0; index < cta.length; index++) {
        var charOne = cta[index].querySelector('.left-character');
        var charTwo = cta[index].querySelector('.right-character');

        if (charOne && isInViewport(charOne)) {
          charOne.classList.add('scale-in-left-center');
        }

        if (charTwo && isInViewport(charTwo)) {
          charTwo.classList.add('scale-in-right-center');
        }
      }
    };

    moveCharacters(); /// now run this on scroll events

    var ticking = false;
    window.addEventListener('scroll', function (e) {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          moveCharacters();
          ticking = false;
        });
        ticking = true;
      }
    });
  }
};

/***/ }),

/***/ "./blocks/dashboard-grid/functions.js":
/*!********************************************!*\
  !*** ./blocks/dashboard-grid/functions.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Dashboard Grid Functions
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This function needs to be able to initialised in FE and BE
 * so adding it here we can include anywhere to be used
 */
var self = module.exports = {
  withCharacterTiles: function withCharacterTiles() {
    /**
     * Check the tiles are in viewport
     * This function grabs the boundaries of the element from the browsers
     * and returns true or false if it is in the viewport when run.
     * @param {element} elem
     * @link https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
     */
    var isInViewport = function isInViewport(elem) {
      var bounding = elem.getBoundingClientRect();
      return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right - 5 <= (window.innerWidth || document.documentElement.clientWidth);
    };

    var dashboards = document.querySelectorAll('.wp-block-bbc-dashboard-grid');
    /**
     * Move characters in each instance of the dashboard.
     * To be used on init and on on scroll.
     */

    var moveCharacters = function moveCharacters() {
      /// Check for multiple instance
      for (var index = 0; index < dashboards.length; index++) {
        var dashboard = dashboards[index].querySelectorAll('a'); /// loop over tiles

        for (var _index = 0; _index < dashboard.length; _index++) {
          var tile = dashboard[_index].querySelector('article');

          if (tile && isInViewport(tile)) {
            tile.querySelector('img').classList.add('move-in');
          }
        }
      }
    };

    moveCharacters(); /// now run this on scroll events

    var ticking = false;
    window.addEventListener('scroll', function (e) {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          moveCharacters();
          ticking = false;
        });
        ticking = true;
      }
    });
  }
};

/***/ }),

/***/ "./blocks/shared/js/global.js":
/*!************************************!*\
  !*** ./blocks/shared/js/global.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_grid_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard-grid/functions */ "./blocks/dashboard-grid/functions.js");
/* harmony import */ var _dashboard_grid_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dashboard_grid_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _channel_logos_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../channel-logos/functions */ "./blocks/channel-logos/functions.js");
/* harmony import */ var _channel_logos_functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_channel_logos_functions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cta_block_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cta-block/functions */ "./blocks/cta-block/functions.js");
/* harmony import */ var _cta_block_functions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cta_block_functions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billboard_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../billboard/functions */ "./blocks/billboard/functions.js");
/* harmony import */ var _billboard_functions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_billboard_functions__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Global JS Functionality
 * @author — Thomas Jones
 * @group — Guerrilla
 *
 * @description — Some blocks will be using javascript to add some extra shine to them on the frontend.
 * We need this in the front and back, but don't need to include it in a react component.  So define all those functions
 * Inside our event listener below waiting for the dom content to load.
 */
///  Include functions from components to be used




document.addEventListener('DOMContentLoaded', function () {
  /**
   * Mobile Menu // Show and Hide
   * Add click event to toggle class that runs animations
   */
  var menuMagic = function menuMagic() {
    var menuContainer = document.querySelector('.wp-block-bbc-billboard');
    var menuButton = document.querySelector('.wp-block-bbc-billboard .mobile-menu-button');

    if (menuContainer && menuButton) {
      menuButton.addEventListener('click', function () {
        /// run button press animation
        menuButton.style.animationPlayState = 'running';
        setTimeout(function () {
          /// and pause again
          menuButton.style.animationPlayState = 'paused';
        }, 300); /// toggle open class on header

        if (menuContainer.classList.contains('open')) {
          menuContainer.classList.remove('open');
          menuContainer.classList.add('closed');
        } else {
          menuContainer.classList.remove('closed');
          menuContainer.classList.add('open');
        } /// toggle no scrolling class on body


        document.querySelector('body').classList.toggle('no-scroll');
      });
    }
  };

  if (!document.querySelector('.wp-admin')) {
    menuMagic();
  }
  /**
   * BOCK — DASHBOARD GRID
   * Handle the animated characters moving in on the dashboard grid
   */


  if (document.querySelector('.wp-block-bbc-dashboard-grid')) {
    Object(_dashboard_grid_functions__WEBPACK_IMPORTED_MODULE_0__["withCharacterTiles"])();
  }
  /**
   * BOCK — Channel Logos
   * Handle the animated characters moving in
   */


  if (document.querySelector('.wp-block-bbc-channel-logos')) {
    Object(_channel_logos_functions__WEBPACK_IMPORTED_MODULE_1__["logoCharacters"])();
  }
  /**
   * BOCK — CTA Block
   * Handle the animated characters moving in
   */


  if (document.querySelector('.wp-block-bbc-cta-block')) {
    Object(_cta_block_functions__WEBPACK_IMPORTED_MODULE_2__["ctaCharacters"])();
  }
  /**
   * BOCK — Billboard
   * Set padding based on details block
   */


  if (document.querySelector('.wp-block-bbc-billboard') && document.querySelector('.gbl-page-details')) {
    Object(_billboard_functions__WEBPACK_IMPORTED_MODULE_3__["billboardDetails"])();
  }
});

/***/ })

/******/ });