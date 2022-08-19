this["gbl"] = this["gbl"] || {}; this["gbl"]["frontend"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/dynamic-posts-grid/components/Grid.js":
/*!******************************************************!*\
  !*** ./blocks/dynamic-posts-grid/components/Grid.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_components_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/PostCard */ "./blocks/shared/components/PostCard.js");
/* harmony import */ var _shared_components_VideoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/VideoCard */ "./blocks/shared/components/VideoCard.js");
/* harmony import */ var _shared_components_GameCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/GameCard */ "./blocks/shared/components/GameCard.js");
/* harmony import */ var _shared_components_DownloadCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/DownloadCard */ "./blocks/shared/components/DownloadCard.js");
/* harmony import */ var _shared_components_CharacterCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/CharacterCard */ "./blocks/shared/components/CharacterCard.js");
/* harmony import */ var _shared_components_RetailerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/RetailerCard */ "./blocks/shared/components/RetailerCard.js");
/* harmony import */ var _shared_components_SponsorCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/SponsorCard */ "./blocks/shared/components/SponsorCard.js");
/* harmony import */ var _shared_components_AppCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/AppCard */ "./blocks/shared/components/AppCard.js");
/* harmony import */ var _shared_components_ShopCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/ShopCard */ "./blocks/shared/components/ShopCard.js");
/* harmony import */ var _shared_components_EventCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/EventCard */ "./blocks/shared/components/EventCard.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Dynamic Posts Grid
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component receives block attributes as props and updates it state in response.
 * We do not update the attributes from this component, we only receive them.
 * @props {string} this.props.title
 * @props {string} this.props.postType
 * @props {integer} this.props.load
 * @props {string} this.props.order
 * @props {string} this.props.orderby
 * @props {bool} this.props.enableFilter
 * @props {bool} this.props.enableResultCount
 * @props {bool} this.props.enableLoadMore
 * @props {bool} this.props.enableButton
 * @props {string} this.props.buttonLabel
 * @props {string} this.props.buttonUrl
 */













var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, props));
    _this.state = {
      postsLoading: false,
      posts: [],
      resultsPage: 1,
      totalResultPages: 0,
      loadMore: false,
      taxonomies: [],
      filters: [],
      filtersLoading: false,
      filterOpen: false,
      currentFilter: 'all',
      oneFilter: false,
      groupFilterFactor: 2,
      groupFilterStart: 1,
      groupFilterEnd: '',
      lastLoad: false,
      currentPostID: document.querySelector('body').getAttribute('data-post-id'),
      noPosts: false,
      initialLoad: true
    };
    _this.fetchPosts = _this.fetchPosts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.applyGroupFilter = _this.applyGroupFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.groupingFilters = _this.groupingFilters.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Here we are making our initial API requests before the componet actually mounts,
   * this is because our compone is built using this data, so it's necessary in this
   * order.
   */


  _createClass(Grid, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      if (!Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_11__["isGutenbergActive"])()) {
        var request = Promise.all([this.fetchPosts(false, this.props.fe_posts, this.props.x_wp_total, this.props.x_wp_totalpages), this.findTaxonimies(this.props.fe_filters)]);
        request.then(function () {
          _this2.setState({
            initialLoad: false
          });
        }).catch(function (error) {
          setLoaded(true);
          console.error(error);
        });
      } else {
        this.fetchPosts();
        this.findTaxonimies();
      }
    }
    /**
     * We watch the component for any changes in the postType or load amount props,
     * these are set outside of this component in the block attributes.
     * @param {prevProps} prevProps
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_11__["isGutenbergActive"])()) {
        if (prevProps.postType !== this.props.postType || prevProps.load !== this.props.load || prevProps.order !== this.props.order || prevProps.orderby !== this.props.orderby || prevProps.enableFilter !== this.props.enableFilter) {
          /// reset filters and taxonomies and grab fresh data
          this.setState({
            taxonomies: [],
            currentFilter: 'all',
            filters: [],
            postsLoading: true,
            filtersLoading: true,
            oneFilter: false,
            lastLoad: false
          });
          this.fetchPosts();
          this.findTaxonimies();
        }
      }
    }
    /**
     * Fetch the initial state, reload and append posts.
     * These actions are determined on whether an event has been triggered or the component
     * has just updated (i.e. settings have been changed).
     * @param {e} event
     */

  }, {
    key: "fetchPosts",
    value: function fetchPosts(e, prefetched, total, totalPages) {
      var _this3 = this;

      if (this.state.initialLoad && prefetched && prefetched.length > 0) {
        this.setState({
          posts: prefetched,
          totalPosts: total,
          totalResultPages: totalPages,
          postsLoading: false,
          forceScroll: false,
          resultsPage: 1
        });
      } else if (!this.state.postsLoading) {
        this.setState({
          postsLoading: true,
          noPosts: false
        });
        var page = e ? this.state.resultsPage + 1 : 1;
        /**
         * Endpoint
         * Hitting two separate endpoints depending on content of this.props.postType
         */

        var endpoint = 'product-retailers' !== this.props.postType && 'events' !== this.props.postType ? "/guerrilla/v1/get-posts?post_type=".concat(this.props.postType, "&per_page=").concat(this.props.load, "&page=").concat(page, "&order=").concat(this.props.order, "&orderby=").concat(this.props.orderby, "&filter=").concat(this.state.currentFilter, "&currentID=").concat(this.state.currentPostID) : 'events' === this.props.postType ? "/guerrilla/v1/get-events?post_type=events&per_page=".concat(this.props.load, "&page=").concat(page, "&filter=all") : "wp/v2/product_retailers?per_page=100";

        try {
          fetch('/wp-json' + endpoint).then(function (res) {
            if (res.ok) {
              _this3.setState({
                totalPosts: parseInt(res.headers.get('X-WP-Total'), 10),
                totalResultPages: parseInt(res.headers.get('X-WP-TotalPages'), 10)
              });

              return res.json();
            } else {
              throw new Error('Sorry there was a problem, please try again.');
            }
          }).then(function (posts) {
            _this3.setState({
              posts: e ? [].concat(_toConsumableArray(_this3.state.posts), _toConsumableArray(posts)) : posts,
              resultsPage: e ? _this3.state.resultsPage + 1 : 1,
              postsLoading: false
            });
          }).then(function () {
            _this3.setState({
              groupFilterEnd: Math.ceil(_this3.state.posts.length / _this3.state.groupFilterFactor),
              lastLoad: _this3.state.resultsPage < _this3.state.totalResultPages ? false : true
            });
          }).catch(function (error) {
            var errorText;

            if (error.status == '404') {
              errorText = 'Sorry, there are no items to show.';
            } else {
              errorText = 'Sorry, there seems to be a problem loading this content.';
            }

            _this3.setState({
              posts: [],
              noPosts: true,
              postsLoading: false,
              errorMessage: errorText
            });

            console.log(error);
          });
        } catch (error) {
          console.log(error);
          this.setState({
            postsLoading: false
          });
        }
      }
    }
    /**
     * Here we are fetching all taxonomy terms (category names, ids etc) and
     * taxonomy names (category, tag etc) for the selected post_type.  This data will
     * then be used to build filter items and filter the grid when activated.
     */

  }, {
    key: "findTaxonimies",
    value: function findTaxonimies(prefetched) {
      var _this4 = this;

      return true === this.props.enableFilter ? fetch("/wp-json/guerrilla/v1/get-taxonomies?post_type=".concat(this.props.postType)).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Sorry there was a problem, please try again.');
        }
      }).then(function (res) {
        _this4.setState({
          filters: undefined !== res.filters && res.filters.length > 0 ? res.filters : [],
          taxonomies: undefined !== res.taxonomies && res.taxonomies.length > 0 ? res.taxonomies : []
        });
      }).then(function () {
        _this4.setState({
          filtersLoading: false,
          oneFilter: _this4.state.filters.length > 0 && _this4.state.filters.length < 2 ? true : false,
          currentFilter: _this4.state.filters.length > 0 && _this4.state.filters.length < 2 ? 'group' : 'all'
        });
      }).catch(function (error) {
        _this4.setState({
          filtersLoading: false
        });

        console.log(error);
      }) : this.setState({
        filtersLoading: false
      });
    }
    /**
     * This function will build our filter items, this will be used inside
     * another function, looping over the contents of our cats and tags contents
     * in state.
     * @param {item} item
     * @param {index} index
     */

  }, {
    key: "filterItems",
    value: function filterItems(item, index) {
      return item.count > 0 && wp.element.createElement("a", {
        href: "#",
        className: "btn btn__primary--outline",
        "data-type": item.term_id,
        key: index,
        onClick: this.applyFilter
      }, item.name);
    }
    /**
     * We build our filter menu looping over the contents of cats and tags
     * in state and building items for them. These should be included between
     * <nav></nav> in the render method.
     */

  }, {
    key: "buildFilter",
    value: function buildFilter() {
      var _this5 = this;

      return this.state.filters.length > 0 && true !== this.state.oneFilter && this.state.filters.map(function (item, index) {
        return _this5.filterItems(item, index);
      });
    }
    /**
     * For post types that have only one filter, we will break these down into groups
     * and this is mainly for the videos post-type, for when a show has only one season.
     * We break the posts down into two groups, this can be updated by changing the contents
     * of the factor variable in the function.  The rest should remain unchanged.
     */

  }, {
    key: "groupingFilters",
    value: function groupingFilters() {
      var _this6 = this;

      var postCount = this.state.posts.length;
      var factor = this.state.groupFilterFactor;
      var result = Math.ceil(postCount / factor);
      var postCountArr = this.state.posts.map(function (post, index) {
        return index + 1;
      });
      return postCountArr.map(function (i) {
        return i === result ? wp.element.createElement("a", {
          className: "btn btn__primary--outline active",
          "data-group-start": postCountArr[0],
          "data-group-end": result,
          key: i,
          onClick: _this6.applyGroupFilter
        }, postCountArr[0], " \u2014 ", result) : i === postCount ? wp.element.createElement("a", {
          className: "btn btn__primary--outline",
          "data-group-start": result + 1,
          "data-group-end": postCount,
          key: i,
          onClick: _this6.applyGroupFilter
        }, result + 1, " \u2014 ", postCount) : '';
      });
    }
    /**
     * When clicking on filter items two actions are taken.  The state for
     * currently selected item is updated and the active item receives the 'active'
     * class.  The filtering is handled in posts() based on the value of this.state.currentFilter.
     */

  }, {
    key: "applyFilter",
    value: function applyFilter(e) {
      var _this7 = this;

      e.preventDefault();
      document.querySelector('.filter-list a.active').classList.remove('active');
      e.target.classList.add('active');
      this.setState({
        currentFilter: e.target.getAttribute('data-type')
      }, function () {
        _this7.fetchPosts(null);
      });
    }
    /**
     * When we have posts split into groups rather than category names, our process to filter
     * them is different.  Basically saying what the group of post index numbers to allow when
     * re-running our get posts funciton.
     * @param {*} event
     */

  }, {
    key: "applyGroupFilter",
    value: function applyGroupFilter(e) {
      e.preventDefault();
      document.querySelector('.filter-list a.active').classList.remove('active');
      e.target.classList.add('active');
      this.setState({
        currentFilter: 'group',
        groupFilterStart: parseFloat(e.target.getAttribute('data-group-start')),
        groupFilterEnd: parseFloat(e.target.getAttribute('data-group-end')),
        filterOpen: false
      });
    }
    /**
     * Taxonomy Names — Not IDs please.
     *
     * When building the posts in the grid, we need to tag names - not the ID's which
     * is what the API returns.  So we'll loop over filters matching the id set on them with our
     * post tag ids - sending matches through to the component.
     *
     * @param {post data} data
     * @param {post id} match
     */

  }, {
    key: "getTaxName",
    value: function getTaxName(data) {
      return data.length > 0 && data.map(function (item) {
        return item.name && item.name;
      });
    }
    /**
     * This function will determin which grid item we'll be using;
     * post, video, game or download.
     * @param {type} type
     */

  }, {
    key: "postLayout",
    value: function postLayout(post, index) {
      return 'post' === post.type ? wp.element.createElement(_shared_components_PostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        post: post,
        labels: this.getTaxName(post.post_labels),
        index: index,
        gridBlock: true
      }) : 'videos' === post.type ? wp.element.createElement(_shared_components_VideoCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        post: post,
        labels: this.getTaxName(post.post_labels),
        index: index,
        gridBlock: true
      }) : 'games' === post.type ? wp.element.createElement(_shared_components_GameCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post,
        labels: this.getTaxName(post.post_labels),
        index: index,
        gridBlock: true
      }) : 'downloads' === post.type ? wp.element.createElement(_shared_components_DownloadCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post,
        labels: this.getTaxName(post.post_labels),
        index: index,
        gridBlock: true
      }) : 'character' === post.type ? wp.element.createElement(_shared_components_CharacterCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post,
        index: index
      }) : 'apps' === post.type ? wp.element.createElement(_shared_components_AppCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post,
        index: index
      }) : 'product-retailers' === post.taxonomy ? wp.element.createElement(_shared_components_RetailerCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post,
        index: index
      }) : 'products' === post.taxonomy ? wp.element.createElement(_shared_components_ShopCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post,
        index: index
      }) : 'sponsors' === post.type ? wp.element.createElement(_shared_components_SponsorCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post,
        index: index
      }) : 'events' === post.type ? wp.element.createElement(_shared_components_EventCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post,
        index: index
      }) : '';
    }
    /**
     * This function will be reponsible for building the grid layout and tile structure.
     * It will also look at state to see which filter has been selected and update the
     * grid accordingly.
     */

  }, {
    key: "getPosts",
    value: function getPosts(filter) {
      var _this8 = this;

      return this.state.posts.length > 0 && this.state.posts.map(function (post, index) {
        return 'group' !== filter ? _this8.postLayout(post, index) : true === _this8.state.oneFilter && index + 1 >= _this8.state.groupFilterStart && index + 1 <= _this8.state.groupFilterEnd ? _this8.postLayout(post, index) : '';
      });
    }
    /**
     * Episodes Title
     */

  }, {
    key: "episodesCount",
    value: function episodesCount() {
      return this.state.oneFilter === true && wp.element.createElement("h3", {
        className: "episodes-count"
      }, "episodes ", this.state.groupFilterStart, " \u2014 ", this.state.groupFilterEnd);
    }
    /**
     * Number of Results on the page
     * Here we'll be using the total amount of posts in state
     * and the total available to show how many results are yet to be displayed
     */

  }, {
    key: "countResults",
    value: function countResults() {
      return this.state.posts.length > 0 && null !== this.state.totalPosts && wp.element.createElement("h3", {
        className: "result-count"
      }, this.state.posts.length, " of ", this.state.totalPosts, " items");
    }
    /**
     * We will only show the load more button if our current results page
     * is less than the total resulsts for the current post type.
     * @param {e} e
     */

  }, {
    key: "loadMore",
    value: function loadMore(e) {
      return this.state.resultsPage < this.state.totalResultPages && this.state.noPosts !== true && wp.element.createElement("a", {
        className: "load-more btn btn__primary",
        onClick: this.fetchPosts
      }, "Load More");
    }
    /**
     * Decide if the loading state is present or not
     * This is based on two factors.  Has the posts data been fetched from the API and
     * has the Fitlers data been fetched from the API (if there are any)
     */

  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.state.postsLoading === false && this.state.filtersLoading === false ? false : this.state.noPosts === true ? false : true;
    }
    /**
     * Enable Button
     * The users also has the ability to add a button, not a load more button, which they can link
     * to another page.  We'll build that out here.
     */

  }, {
    key: "addButton",
    value: function addButton() {
      return this.props.enableButton == true && wp.element.createElement("a", {
        className: "btn btn__primary add-button",
        href: this.props.buttonUrl,
        "aria-label": this.props.buttonLabel
      }, this.props.buttonLabel);
    }
    /**
     * The final output from our component should be placed inside the
     * render method.
     * Do not update any state directly in here, bad things will happen.
     */

  }, {
    key: "render",
    value: function render() {
      var filterItems = this.state.filters.length > 0 && this.buildFilter() ? this.buildFilter() : this.groupingFilters();
      var episodesCount = this.episodesCount();
      var countResults = this.countResults();
      var posts = this.getPosts(this.state.currentFilter);
      var loadMore = this.loadMore();
      var isLoading = this.isLoading();
      var addButton = this.addButton();
      return wp.element.createElement("div", {
        className: this.props.enableFeaturedPost ? "post-grid has-featured-post" : 'post-grid',
        "data-last-load": this.state.lastLoad,
        "data-loading": isLoading,
        "aria-label": '' !== this.props.title ? this.props.title : "".concat(this.props.postType, " grid")
      }, this.props.title && wp.element.createElement("h2", null, this.props.title), this.state.filters.length > 0 && this.props.enableFilter == true && 'events' !== this.props.postType && wp.element.createElement("nav", {
        className: "filter-list",
        "data-open": this.state.filterOpen
      }, this.state.oneFilter !== true && wp.element.createElement("a", {
        href: "#",
        className: "btn btn__primary--outline active",
        "data-type": "all",
        onClick: this.applyFilter
      }, "All"), filterItems), this.props.postType === 'videos' && this.state.oneFilter === true && episodesCount, this.props.enableResultCount == true && this.state.oneFilter === false && 'events' !== this.props.postType && countResults, wp.element.createElement("div", {
        className: "posts-container"
      }, this.state.noPosts && wp.element.createElement("p", {
        className: "grid-error"
      }, this.state.errorMessage), posts), this.props.enableLoadMore == true && loadMore, isLoading && wp.element.createElement("div", {
        className: "sk-chasing-dots"
      }, wp.element.createElement("div", {
        className: "sk-child sk-dot1"
      }), wp.element.createElement("div", {
        className: "sk-child sk-dot2"
      })), addButton);
    }
  }]);

  return Grid;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/dynamic-posts-grid/frontend.js":
/*!***********************************************!*\
  !*** ./blocks/dynamic-posts-grid/frontend.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Grid */ "./blocks/dynamic-posts-grid/components/Grid.js");
/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being rendered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var isGrid = document.querySelectorAll('.fe-dynamic-posts-grid');

  if (!admin && isGrid) {
    for (var index = 0; index < isGrid.length; index++) {
      var grid = isGrid[index]; /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.

      var settings = JSON.parse(grid.getAttribute('data-props'));
      ReactDOM.render(wp.element.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_0__["default"], settings), grid);
    }
  }
});

/***/ }),

/***/ "./blocks/events/components/Checkbox.js":
/*!**********************************************!*\
  !*** ./blocks/events/components/Checkbox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Shop — Filter Checkbox
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Toggle checkboxes to activate filters on the shop grid.
 * @props {string} props.filterType
 * @props {string} props.id
 * @props {string} props.name
 * @props {integer} props.index
 * @props {func} props.filter
 */
var Checkbox = function Checkbox(props) {
  return wp.element.createElement("label", {
    className: "check-parent",
    "data-type": props.filterType,
    "data-filter-by": props.id,
    "data-filter-name": props.name,
    key: props.index,
    onClick: props.filter
  }, wp.element.createElement("input", {
    type: "checkbox",
    name: props.id,
    value: props.name
  }), wp.element.createElement("span", {
    className: "fancy-check"
  }), props.amount !== undefined ? "".concat(props.name, " (").concat(props.amount, ")") : "".concat(props.name));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./blocks/events/components/Events.js":
/*!********************************************!*\
  !*** ./blocks/events/components/Events.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./blocks/events/components/Checkbox.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_components_EventCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/EventCard */ "./blocks/shared/components/EventCard.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ "./blocks/events/components/pagination.js");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Radio */ "./blocks/events/components/Radio.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/ToggleBox */ "./blocks/shared/components/ToggleBox.js");
/* harmony import */ var _shared_countries_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/countries.json */ "./blocks/shared/countries.json");
var _shared_countries_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/countries.json */ "./blocks/shared/countries.json", 1);
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Events
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component receives block attributes as props and updates it state in response.
 * We do not update the attributes from this component, we only receive them.
 * @props {title} this.props.title
 * @props {load} this.props.load
 * @props {order} this.props.order
 * @props {orderby} this.props.orderby
 */










var scroller = react_scroll__WEBPACK_IMPORTED_MODULE_0__["scroller"];

var Events =
/*#__PURE__*/
function (_Component) {
  _inherits(Events, _Component);

  function Events(props) {
    var _this;

    _classCallCheck(this, Events);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Events).call(this, props));
    _this.state = {
      postsLoading: false,
      posts: [],
      totalPosts: _this.props.x_wp_total ? _this.props.x_wp_total : 0,
      resultsPage: 1,
      totalResultPages: _this.props.x_wp_totalpages ? _this.props.x_wp_totalpages : 0,
      filtersLoading: false,
      statesFilterList: [],
      eventStates: [],
      reorderProducts: 'desc',
      countryValue: _this.props.countries.includes(document.querySelector('body').getAttribute('data-country')) ? document.querySelector('body').getAttribute('data-country') : 'all',
      country: _this.props.countries.includes(document.querySelector('body').getAttribute('data-country')) ? document.querySelector('body').getAttribute('data-country') : 'all',
      orderValue: '',
      orderText: 'Sort by',
      openFilter: false,
      noPosts: false,
      initialLoad: true
    };
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.nextPage = _this.nextPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.prevPage = _this.prevPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchPosts = _this.fetchPosts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.openFilter = _this.openFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearAllFiltersAction = _this.clearAllFiltersAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateCountry = _this.updateCountry.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Events, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var request = Promise.all([this.fetchPosts(false, this.props.fe_posts, this.props.x_wp_total, this.props.x_wp_totalpages), this.getFilters(this.props.fe_filters)]);
      request.then(function () {
        _this2.setState({
          initialLoad: false
        });
      }).catch(function (error) {
        setLoaded(true);
        console.error(error);
      });
      var found = false;
      var radioButtons = document.querySelectorAll('.check-parent');
      radioButtons && radioButtons.length > 0 && radioButtons.forEach(function (item) {
        var field = item.querySelector('input');

        if (_this2.state.countryValue === field.value) {
          field.click();
          found = true;
        }
      });

      if (radioButtons && radioButtons.length > 0 && !found) {
        var field = radioButtons[0].querySelector('input');
        field.click();
      }
    }
    /**
     * We watch the component for any changes in the postType or load amount props,
     * these are set outside of this component in the block attributes.
     * @param {prevProps} prevProps
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_9__["isGutenbergActive"])()) {
        if (prevProps.load !== this.props.load || prevProps.order !== this.props.order || prevProps.orderby !== this.props.orderby) {
          /// reset filters and taxonomies and grab fresh data
          this.setState({
            eventStates: [],
            statesFilterList: [],
            postsLoading: true,
            filtersLoading: true,
            forceScroll: false
          });
          this.fetchPosts();
          this.getFilters();
        }
      }
    }
    /**
     * Fetch the initial state, reload and append products.
     * These actions are determined on whether an event has been triggered or the component
     * has just updated (i.e. settings have been changed).
     * @param {e} event
     */

  }, {
    key: "fetchPosts",
    value: function fetchPosts(e, prefetched, total, totalPages) {
      var _this3 = this;

      if (this.state.initialLoad && prefetched && prefetched.length > 0) {
        this.setState({
          posts: prefetched,
          totalPosts: total,
          totalResultPages: totalPages,
          postsLoading: false,
          forceScroll: false,
          resultsPage: 1
        });
      } else if (!this.state.postsLoading) {
        this.setState({
          postsLoading: true,
          noPosts: false
        });

        if (this.state.forceScroll) {
          scroller.scrollTo('events-grid', {
            duration: 1500,
            smooth: 'easeInOutQuad',
            offset: -100
          });
        }

        var filters = this.state.statesFilterList.length > 0 ? this.state.statesFilterList : 'all';

        try {
          fetch("/wp-json/guerrilla/v1/get-events?post_type=events&per_page=".concat(this.props.load, "&page=").concat(this.state.resultsPage, "&order=").concat(this.props.order, "&orderby=").concat(this.props.orderby, "&filter=").concat(filters, "&country=").concat(this.state.countryValue)).then(function (res) {
            if (res.ok) {
              _this3.setState({
                totalPosts: res.headers.get('X-WP-Total') ? parseInt(res.headers.get('X-WP-Total'), 10) : '',
                totalResultPages: res.headers.get('X-WP-TotalPages') ? parseInt(res.headers.get('X-WP-TotalPages'), 10) : ''
              });

              return res.json();
            } else {
              throw new Error('Sorry, there seems to be a problem loading this content.');
            }
          }).then(function (posts) {
            if (posts.length > 0) {
              _this3.setState({
                posts: posts,
                postsLoading: false,
                forceScroll: false
              });
            }
          }).catch(function (error) {
            var errorText;

            if (error.status == '404') {
              errorText = 'Sorry, there are no items to show.';
            } else {
              errorText = 'Sorry, there seems to be a problem loading this content.';
            }

            _this3.setState({
              posts: [],
              noPosts: true,
              postsLoading: false,
              errorMessage: errorText
            });
          });
        } catch (error) {
          console.log(error);
          this.setState({
            postsLoading: false
          });
        }
      }
    }
    /**
     * Here we are fetching all taxonomy terms (category names, ids etc) and
     * taxonomy names (category, tag etc) for the selected post_type.  This data will
     * then be used to build filter items and filter the grid when activated.
     */

  }, {
    key: "getFilters",
    value: function getFilters(prefetched) {
      var _this4 = this;

      if (prefetched) {
        this.setState({
          eventStates: this.props.fe_filters,
          filtersLoading: false
        });
      } else if (this.state.countryValue !== 'all' && !this.state.filtersLoading) {
        this.setState({
          filtersLoading: true
        });

        try {
          fetch("/wp-json/guerrilla/v1/get-event-filters?country=".concat(this.state.countryValue)).then(function (res) {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Sorry, there seems to be a problem loading this content.');
            }
          }).then(function (res) {
            _this4.setState({
              eventStates: undefined !== res.states && res.states.length > 0 ? res.states : []
            });
          }).then(function () {
            _this4.setState({
              filtersLoading: false
            });
          }).catch(function (error) {
            _this4.setState({
              filtersLoading: false
            });

            console.log(error);
          });
        } catch (error) {
          console.log(error);
          this.setState({
            filtersLoading: false
          });
        }
      } else {
        this.setState({
          filtersLoading: false
        });
      }
    }
    /**
     * This function will build our filter items, this will be used inside
     * another function, looping over the contents of our cats and tags contents
     * in state.
     */

  }, {
    key: "listItems",
    value: function listItems(id, name, index, filterType, amount) {
      return id > 0 && wp.element.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: id,
        name: name,
        index: index,
        filterType: filterType,
        filter: this.applyFilter,
        amount: amount
      });
    }
    /**
     * Countries Dropdown Options
     * The countries dropdown is created using a json list of all countries. We
     * loop over this spitting out an option element for each.
     */

  }, {
    key: "countryList",
    value: function countryList() {
      var _this5 = this;

      var newArray = [];
      this.props.countries.map(function (country) {
        newArray.push(_shared_countries_json__WEBPACK_IMPORTED_MODULE_8__.options.filter(function (item) {
          return item.value === country;
        }));
      });
      return newArray.map(function (item) {
        return {
          value: item[0].value,
          name: item[0].label,
          isDefault: _this5.state.countryValue === item[0].value
        };
      });
    }
    /**
     * Update the selected country dropdown box and recactivate fetching products
     * for the chosen region.
     */

  }, {
    key: "updateCountry",
    value: function updateCountry(data) {
      var _this6 = this;

      this.setState({
        countryValue: data.value,
        country: data,
        totalPosts: '',
        resultsPage: 1,
        totalResultPages: 0
      }, function () {
        if (!_this6.state.initialLoad) {
          _this6.clearAllFiltersAction();

          _this6.getFilters();
        }
      });
    }
  }, {
    key: "countryDropDown",
    value: function countryDropDown(id, name, index, filterType) {
      var _this7 = this;

      var options = this.countryList();
      options.unshift({
        value: 'all',
        name: 'Choose a country',
        isDefault: true
      });
      return options.length > 0 && options.map(function (item, index) {
        return wp.element.createElement(_Radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: id,
          index: index,
          filterType: filterType,
          setDefault: item.isDefault,
          filter: _this7.updateCountry,
          group: "countries",
          name: item.name,
          value: item.value
        });
      });
    }
    /**
     * We build our filter menu looping over the contents of cats and tags
     * in state and building items for them. These should be included between
     * <nav></nav> in the render method.
     */

  }, {
    key: "buildStateList",
    value: function buildStateList() {
      var _this8 = this;

      return this.state.eventStates.length > 0 && this.state.eventStates.map(function (item, index) {
        return _this8.listItems(item.term_id, item.name, index, 'statesFilterList', item.event_count);
      });
    }
    /**
     * Update and apply filters
     *
     * This function is uses to update the filter lists, respectively, and then fetch a new
     * batch of posts based on those params.
     *
     * It is used on the checkboxes and filter pills.  It's based on the type and id of the categories
     * which are added to the targets as data attributes.
     */

  }, {
    key: "applyFilter",
    value: function applyFilter(e) {
      var _this$setState,
          _this9 = this;

      e.preventDefault(); //1. get target

      var target = e.target; //2. define the type of filter selected

      var type = target.getAttribute('data-type'); //3. define item id

      var filter = target.getAttribute('data-filter-by'); //4. get the current filter list for the selected type.

      var currentList = this.state[type] !== undefined && this.state[type].length > 0 ? _toConsumableArray(this.state[type]) : []; //5. find matching checkbox if button used to clear.

      var checkbox = document.querySelector("label[data-filter-by=\"".concat(filter, "\"] input")); //6. check if the selected checkbox is already active and remove if so.  If not, add active state.

      if (checkbox.checked == false) {
        checkbox.checked = true;
      } else if (checkbox.checked == true) {
        checkbox.checked = false;
      } //7. Look to see whether the item is being added or removed from its list


      var matcher = function matcher(data) {
        return data == filter;
      }; // check if it exists to see if we are adding or removing from state


      if (currentList.some(matcher)) {
        currentList = currentList.filter(function (item) {
          return item != filter;
        });
      } else {
        currentList.push(filter);
      } //8. Update state and fetch posts with filters


      this.setState((_this$setState = {}, _defineProperty(_this$setState, type, _toConsumableArray(currentList)), _defineProperty(_this$setState, "totalPosts", ''), _defineProperty(_this$setState, "resultsPage", 1), _defineProperty(_this$setState, "totalResultPages", 0), _this$setState), function () {
        _this9.fetchPosts();

        _this9.getFilters();
      });
    }
    /**
     * Build buttons to display in top section of filter sidebar to enable
     * users to quickly see all selected filters.
     * @param {text} filterId
     * @param {text} type
     * @param {text} filterType
     * @param {int} index
     */

  }, {
    key: "buttonItems",
    value: function buttonItems(filterId, type, filterType, index) {
      var _this10 = this;

      // get name of filter.
      var filterName = this.state[type].map(function (item) {
        if (item.term_id == parseFloat(filterId)) {
          return item.name;
        }
      });
      return wp.element.createElement("a", {
        className: "all-selected-buttons",
        "data-type": filterType,
        "data-filter-by": parseFloat(filterId),
        key: index,
        onClick: function onClick() {
          _this10.applyFilter();
        }
      }, filterName);
    }
    /**
     * All Selected Categories
     * This is the top section of the filter sidebar.
     * @param {*} filter
     */

  }, {
    key: "AllSelectedCategories",
    value: function AllSelectedCategories() {
      var _this11 = this;

      return this.state.statesFilterList.length > 0 && this.state.statesFilterList.map(function (item, index) {
        return _this11.buttonItems(item, 'eventStates', 'statesFilterList', index);
      });
    }
    /**
     * Clear All
     */

  }, {
    key: "clearAllFilters",
    value: function clearAllFilters() {
      return this.state.statesFilterList.length > 0 ? wp.element.createElement("a", {
        className: "all-selected-buttons clear-all",
        onClick: this.clearAllFiltersAction
      }, "Clear all") : '';
    }
  }, {
    key: "clearAllFiltersAction",
    value: function clearAllFiltersAction() {
      var _this12 = this;

      // get all checkboxes so we can remove selected state.
      var checkboxes = document.querySelector('.wp-block-bbc-events').querySelectorAll('input[type="checkbox"]:not(.toggle-parent)');
      this.setState({
        statesFilterList: [],
        searchText: ''
      }, function () {
        for (var index = 0; index < checkboxes.length; index++) {
          var input = checkboxes[index];

          if (input.checked == true) {
            input.checked = false;
          }
        }

        setTimeout(function () {
          _this12.fetchPosts();
        }, 500);
      });
    }
    /**
     * This function will be reponsible for building the grid layout and tile structure.
     * It will also look at state to see which filter has been selected and update the
     * grid accordingly.
     */

  }, {
    key: "getPosts",
    value: function getPosts(filter) {
      return this.state.posts.length > 0 && this.state.posts.map(function (post, index) {
        return wp.element.createElement(_shared_components_EventCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post,
          index: index
        });
      });
    }
    /**
     * Number of Results on the page
     * Here we'll be using the total amount of posts in state
     * and the total available to show how many results are yet to be displayed
     */

  }, {
    key: "resultsCount",
    value: function resultsCount() {
      return this.state.posts.length > 0 && null !== this.state.totalPosts && wp.element.createElement("p", {
        className: "result-count"
      }, "".concat(this.state.totalPosts, " ").concat(this.state.posts.length > 1 ? 'Events' : 'Event'), " found");
    }
    /**
     * Toggle Mobile Filter Open
     */

  }, {
    key: "openFilter",
    value: function openFilter(e) {
      document.querySelector('body').classList.toggle('no-scroll');
      var open = this.state.openFilter;
      this.setState({
        openFilter: open ? false : true
      });
    }
    /**
     * We will only show the load more button if our current results page
     * is less than the total resulsts for the current post type.
     * @param {e} e
     */

  }, {
    key: "nextPage",
    value: function nextPage() {
      var _this13 = this;

      this.state.resultsPage < this.state.totalResultPages && this.setState({
        resultsPage: this.state.resultsPage + 1,
        forceScroll: true
      }, function () {
        _this13.fetchPosts();
      });
    }
    /**
     * We will only show the load more button if our current results page
     * is less than the total resulsts for the current post type.
     * @param {e} e
     */

  }, {
    key: "prevPage",
    value: function prevPage() {
      var _this14 = this;

      this.state.resultsPage > 1 && this.setState({
        resultsPage: this.state.resultsPage - 1,
        forceScroll: true
      }, function () {
        _this14.fetchPosts();
      });
    }
    /**
     * Decide if the loading state is present or not
     * This is based on two factors.  Has the posts data been fetched from the API and
     * has the Fitlers data been fetched from the API (if there are any)
     */

  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.state.postsLoading === false && this.state.filtersLoading === false ? false : this.state.noPosts === true ? false : true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.isLoading();
      return [
      /**
       * Main Title Section
       */
      wp.element.createElement("div", {
        className: "title-section events-full"
      }, this.props.title && wp.element.createElement("h1", null, this.props.title)),
      /**
       * Filter Title
       */
      wp.element.createElement("div", {
        className: "filter-title-section events-qtr"
      }, wp.element.createElement("h2", null, "Filter by"), wp.element.createElement("a", {
        className: "btn btn__primary filter",
        onClick: this.openFilter
      }, "Filter")),
      /**
       * Shop Ordering Options Section
       */
      wp.element.createElement("div", {
        className: "options-section events-3-qtr"
      }, this.resultsCount()),
      /**
       * Filter Options Section
       */
      wp.element.createElement("div", {
        className: "filter-sidebar events-qtr",
        "data-loading": isLoading,
        "data-open": this.state.openFilter
      }, wp.element.createElement("div", {
        className: "active-filters"
      }, wp.element.createElement("h4", null, "Filters"), wp.element.createElement("a", {
        className: "mobile-close-filter",
        onClick: this.openFilter
      }, "close"), this.clearAllFilters(), this.AllSelectedCategories()), wp.element.createElement(_shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "categories-dropdown",
        title: "Country",
        content: this.countryDropDown()
      }), this.state.countryValue !== 'all' ? wp.element.createElement(_shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "retailers-dropdown",
        title: "State",
        content: this.buildStateList()
      }) : '', wp.element.createElement("div", {
        className: "show-container"
      }, wp.element.createElement("a", {
        className: "btn btn__primary show",
        onClick: this.openFilter
      }, "Show ".concat(this.state.totalPosts, " items")))),
      /**
       * Products Section
       */
      wp.element.createElement("div", {
        className: "events-grid events-3-qtr",
        name: "events-grid",
        "data-loading": isLoading
      }, this.state.noPosts && wp.element.createElement("div", {
        className: "no-posts"
      }, wp.element.createElement("p", null, "Sorry, there are no events in your region right now.", wp.element.createElement("br", null), "Please choose another State or Region.")), this.getPosts(), isLoading && wp.element.createElement("div", {
        className: "sk-chasing-dots"
      }, wp.element.createElement("div", {
        className: "sk-child sk-dot1"
      }), wp.element.createElement("div", {
        className: "sk-child sk-dot2"
      }))), wp.element.createElement(_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
        prevPage: this.prevPage,
        nextPage: this.nextPage,
        currentPage: this.state.resultsPage,
        totalPages: this.state.totalResultPages
      })];
    }
  }]);

  return Events;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ "./blocks/events/components/Radio.js":
/*!*******************************************!*\
  !*** ./blocks/events/components/Radio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Events — Filter Radio
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Toggle radio to activate filters on the events grid.
 * @props {string} props.filterType
 * @props {string} props.id
 * @props {string} props.name
 * @props {integer} props.index
 * @props {func} props.filter
 */
var Radio = function Radio(props) {
  return wp.element.createElement("label", {
    className: "check-parent",
    "data-type": props.filterType,
    "data-filter-by": props.id,
    "data-filter-name": props.name,
    key: props.index,
    onClick: function onClick() {
      props.filter({
        value: props.value || props.name,
        label: props.name
      });
    }
  }, wp.element.createElement("input", {
    type: "radio",
    name: props.group || props.id,
    value: props.value || props.name
  }), wp.element.createElement("span", {
    className: "fancy-radio"
  }), props.name !== undefined ? "".concat(props.name) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./blocks/events/components/pagination.js":
/*!************************************************!*\
  !*** ./blocks/events/components/pagination.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Shop — Pagination
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Navigate through the wordpress API pages uses next and previous page buttons.
 * @props {title} this.props.title
 * @props {load} this.props.load
 * @props {order} this.props.order
 * @props {orderby} this.props.orderby
 */
var Pagination = function Pagination(props) {
  var disableMe = function disableMe(type) {
    if (type === 'prev') {
      if (props.currentPage === 1) {
        return 'btn__disabled';
      } else {
        return '';
      }
    }

    if (type === 'next') {
      if (props.currentPage >= props.totalPages) {
        return 'btn__disabled';
      } else {
        return '';
      }
    }
  };

  return props.totalPages > 1 && wp.element.createElement("div", {
    className: "button-group events-3-qtr"
  }, wp.element.createElement("div", {
    className: "pagination"
  }, wp.element.createElement("button", {
    className: "prev ".concat(disableMe('prev')),
    onClick: props.prevPage
  }, "prev"), wp.element.createElement("p", null, props.currentPage), wp.element.createElement("button", {
    className: "next ".concat(disableMe('next')),
    onClick: props.nextPage
  }, "next"), wp.element.createElement("span", {
    className: "total-page-count"
  }, "of ".concat(null !== props.totalPages ? props.totalPages : 0))), wp.element.createElement("button", {
    className: "next-page btn btn__primary ".concat(disableMe('next')),
    onClick: props.nextPage
  }, "Next"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./blocks/events/frontend.js":
/*!***********************************!*\
  !*** ./blocks/events/frontend.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Events */ "./blocks/events/components/Events.js");
/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being redered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var event = document.getElementById('fe-wp-block-bbc-events');

  if (!admin && event) {
    /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.
    var settings = JSON.parse(document.getElementById('fe-wp-block-bbc-events').getAttribute('data-props'));
    ReactDOM.render(wp.element.createElement(_components_Events__WEBPACK_IMPORTED_MODULE_0__["default"], settings), document.getElementById('fe-wp-block-bbc-events'));
  }
});

/***/ }),

/***/ "./blocks/frontend.js":
/*!****************************!*\
  !*** ./blocks/frontend.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_posts_grid_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-posts-grid/frontend */ "./blocks/dynamic-posts-grid/frontend.js");
/* harmony import */ var _video_player_frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-player/frontend */ "./blocks/video-player/frontend.js");
/* harmony import */ var _posts_carousel_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts-carousel/frontend */ "./blocks/posts-carousel/frontend.js");
/* harmony import */ var _newsletter_frontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter/frontend */ "./blocks/newsletter/frontend.js");
/* harmony import */ var _meet_and_greet_form_frontend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meet-and-greet-form/frontend */ "./blocks/meet-and-greet-form/frontend.js");
/* harmony import */ var _shop_frontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/frontend */ "./blocks/shop/frontend.js");
/* harmony import */ var _events_frontend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/frontend */ "./blocks/events/frontend.js");
/* harmony import */ var _static_events_grid_frontend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static-events-grid/frontend */ "./blocks/static-events-grid/frontend.js");
/* harmony import */ var _image_gallery_frontend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-gallery/frontend */ "./blocks/image-gallery/frontend.js");
/**
 * Frontend Gutenberg Blocks
 *
 * Some of our blocks will have a React frontend and those will have a frontend file in
 * their directory.  Include it in this file to be bundled.
 *
 */










/***/ }),

/***/ "./blocks/image-gallery/components/Gallery.js":
/*!****************************************************!*\
  !*** ./blocks/image-gallery/components/Gallery.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_components_GalleryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/GalleryCard */ "./blocks/shared/components/GalleryCard.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Image Gallery
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component receives block attributes as props and updates it state in response.
 * We do not update the attributes from this component, we only receive them.
 * @props {string} this.props.postType
 * @props {integer} this.props.load
 * @props {string} this.props.order
 * @props {string} this.props.orderby
 * @props {string} this.props.carouselType
 * @props {integer} this.props.carouselSlides
 */




var Gallery =
/*#__PURE__*/
function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));
    _this.state = {
      posts: []
    };
    return _this;
  }
  /**
   * We watch the component for any changes in the props,
   * these are set outside of this component in the block attributes.
   * @param {prevProps} prevProps
   */


  _createClass(Gallery, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      prevProps.images !== this.props.images ? this.setState({
        loading: true,
        slides: ''
      }) : '';
    }
    /**
     * Carousel Settings
     */

  }, {
    key: "carouselSettings",
    value: function carouselSettings() {
      var _this2 = this,
          _settings;

      // The actual settings to be used
      var settings = (_settings = {
        dots: false,
        infinite: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: ''
      }, _defineProperty(_settings, "dots", true), _defineProperty(_settings, "dotsClass", 'slick-dots slick-thumb'), _defineProperty(_settings, "customPaging", function customPaging(i) {
        return wp.element.createElement("a", {
          style: {
            backgroundImage: "url(\"".concat(_this2.props.images[i].thumbnail, "\")")
          }
        }, wp.element.createElement("img", {
          src: _this2.props.images[i].thumbnail
        }));
      }), _settings);
      return settings;
    }
  }, {
    key: "buildGalleryImages",
    value: function buildGalleryImages() {
      return undefined !== this.props.images && this.props.images.length > 0 && this.props.images.map(function (item, index) {
        return wp.element.createElement(_shared_components_GalleryCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          image: item.url,
          index: index
        });
      });
    }
    /**
     * Carousel Type
     * Here we use the carouselType prop to decide the type of carousel to build.
     * @param {array} slides
     * @param {object} settings
     */

  }, {
    key: "buildCarousel",
    value: function buildCarousel(slides, settings) {
      return wp.element.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, slides);
    }
    /**
     * The final output from our component should be placed inside the
     * render method.
     * Do not update any state directly in here, bad things will happen.
     */

  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement("div", {
        className: "slider-container type-gallery"
      }, wp.element.createElement("h2", null, this.props.title), this.buildCarousel(this.buildGalleryImages(), this.carouselSettings()));
    }
  }]);

  return Gallery;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/image-gallery/frontend.js":
/*!******************************************!*\
  !*** ./blocks/image-gallery/frontend.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Gallery */ "./blocks/image-gallery/components/Gallery.js");
/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being rendered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var isgallery = document.querySelectorAll('#fe-bbc-image-gallery');

  if (!admin && isgallery.length > 0) {
    for (var index = 0; index < isgallery.length; index++) {
      var gallery = isgallery[index]; /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.

      var settings = JSON.parse(gallery.getAttribute('data-props'));
      ReactDOM.render(wp.element.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_0__["default"], settings), gallery);
    }
  }
});

/***/ }),

/***/ "./blocks/meet-and-greet-form/components/Form.js":
/*!*******************************************************!*\
  !*** ./blocks/meet-and-greet-form/components/Form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Meet & Greet Form
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This form will be used for submitting event enquiries.
 * @props {title} this.props.heading
 * @props {type} this.props.intro
 * @props {terms} this.props.terms
 * @props {buttonLabel} this.props.button_label
 */

 // import countries from '../data/countries.json';
// import auStates from '../data/au-states.json';
// import { RichText } from '@wordpress/editor';



var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));
    _this.state = {
      contact_name: {
        content: '',
        valid: null
      },
      contact_email: {
        content: '',
        valid: null
      }
    };
    _this.inputUpdate = _this.inputUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.inputRequiredValidation = _this.inputRequiredValidation.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Universal Input Update
   */


  _createClass(Form, [{
    key: "inputUpdate",
    value: function inputUpdate(e) {
      if (e && e.target.getAttribute('name')) {
        this.setState(_defineProperty({}, e.target.getAttribute('name'), {
          content: Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["cleanInput"])(e.target.value),
          valid: this.state[e.target.getAttribute('name')].valid
        }));
      }
    }
    /**
     * Universal Required Field Validation
     */

  }, {
    key: "inputRequiredValidation",
    value: function inputRequiredValidation(fields) {
      var _this2 = this;

      // Check for required fields
      fields.forEach(function (input) {
        if (input.getAttribute('data-required') === 'true' && input.value === '') {
          _this2.setState(_defineProperty({}, input.getAttribute('name'), {
            content: input.value,
            valid: false
          }));
        } else {
          _this2.setState(_defineProperty({}, input.getAttribute('name'), {
            content: input.value,
            valid: input.getAttribute('type') === 'email' ? Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["validateEmail"])(input.value) : true
          }));
        }
      });
    }
    /**
     * Submit Form
     */

  }, {
    key: "submitForm",
    value: function submitForm(e) {
      var fields = e.target.parentNode.querySelectorAll('input');
      this.inputRequiredValidation(fields);
    }
  }, {
    key: "render",
    value: function render() {
      return [wp.element.createElement("h2", null, this.props.heading), wp.element.createElement("p", null, this.props.intro), wp.element.createElement("form", null, wp.element.createElement("fieldset", null, wp.element.createElement("label", null, "Contact Name *"), wp.element.createElement("input", {
        type: "text",
        name: "contact_name",
        value: this.state.contact_name.content,
        "data-required": true,
        onChange: this.inputUpdate
      })), wp.element.createElement("fieldset", null, wp.element.createElement("label", null, "Contact Email *"), wp.element.createElement("input", {
        type: "email",
        name: "contact_email",
        value: this.state.contact_email.content,
        "data-required": true,
        onChange: this.inputUpdate
      })), wp.element.createElement("a", {
        className: "btn btn__primary submit",
        onClick: this.submitForm
      }, this.props.button_label))];
    }
  }]);

  return Form;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/meet-and-greet-form/frontend.js":
/*!************************************************!*\
  !*** ./blocks/meet-and-greet-form/frontend.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Form */ "./blocks/meet-and-greet-form/components/Form.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being redered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var newsletter = document.getElementById('fe-meet-and-greet-form');

  if (!admin && newsletter) {
    /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.
    var settings = JSON.parse(document.getElementById('fe-meet-and-greet-form').getAttribute('data-props'));
    var termsContent = document.getElementById('fe-meet-and-greet-form').getAttribute('data-rte');
    ReactDOM.render(wp.element.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, settings, {
      terms: termsContent
    })), document.getElementById('fe-meet-and-greet-form'));
  }
});

/***/ }),

/***/ "./blocks/newsletter/components/Form.js":
/*!**********************************************!*\
  !*** ./blocks/newsletter/components/Form.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_countries_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/countries.json */ "./blocks/newsletter/data/countries.json");
var _data_countries_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/countries.json */ "./blocks/newsletter/data/countries.json", 1);
/* harmony import */ var _data_au_states_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/au-states.json */ "./blocks/newsletter/data/au-states.json");
var _data_au_states_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/au-states.json */ "./blocks/newsletter/data/au-states.json", 1);
/* harmony import */ var _data_us_states_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/us-states.json */ "./blocks/newsletter/data/us-states.json");
var _data_us_states_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/us-states.json */ "./blocks/newsletter/data/us-states.json", 1);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Newsletter Form
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This form will be used to sign users up to the Bluey Mailing List.
 * The list subscribed too will be decided by the {this.props.type} data set in
 * the block attributes.
 * @props {title} this.props.title
 * @props {type} this.props.type
 * @props {terms} this.props.terms
 * @props {buttonLabel} this.props.buttonLabel
 */







var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));
    _this.state = {
      loading: false,
      emailValue: '',
      emailValid: '',
      emailError: '',
      selectCountryError: '',
      selectStateError: '',
      selectStateValue: '',
      selectStateText: 'Choose a state',
      selectStateValid: '',
      formValid: '',
      formMessage: '',
      optInOne: false,
      optInTwo: false,
      success: false
    };
    _this.updateEmail = _this.updateEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.selectCountryChange = _this.selectCountryChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.selectStateChange = _this.selectStateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateSelectCountry = _this.validateSelectCountry.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateSelectState = _this.validateSelectState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateEmail = _this.validateEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hiddenValidation = _this.hiddenValidation.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.optInOne = _this.optInOne.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.optInTwo = _this.optInTwo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Here we set some initial state values for the selectCountry dropdown, as it is preselected based on location.
   */


  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var country = document.querySelector('.country-dropdown');
      this.setState({
        selectCountryValue: country[country.selectedIndex].value !== '' ? country[country.selectedIndex].value : '',
        selectCountryText: country[country.selectedIndex].value !== '' ? country[country.selectedIndex].text : 'Choose a country',
        selectCountryValid: country[country.selectedIndex].value !== '' ? true : '',
        loading: false
      });
    }
    /**
     * Countries Dropdown Options
     * The countries dropdown is created using a json list of all countries. We
     * loop over this spitting out an option element for each.
     */

  }, {
    key: "countryList",
    value: function countryList() {
      // Here we preselect a country based on the data attribute on the body tag.  This attribute
      // gets its data from Akamai.
      var country = document.querySelector('body').getAttribute('data-country');

      var selectOption = function selectOption(country, check) {
        if (country && country === check) {
          return true;
        }
      }; //  Build dropdown options.


      return _data_countries_json__WEBPACK_IMPORTED_MODULE_2__.options.map(function (item) {
        return wp.element.createElement("option", {
          selected: selectOption(country, item.value),
          value: item.value
        }, item.name);
      });
    }
    /**
     * States Dropdown Options
     * The states dropdown is created using a json list of all states depending on AU or US being selected
     * as the country. We loop over this spitting out an option element for each.
     */

  }, {
    key: "statesList",
    value: function statesList() {
      // choose which list of states to use
      var stateOptions = this.state.selectCountryValue === 'AU' ? _data_au_states_json__WEBPACK_IMPORTED_MODULE_3__ : this.state.selectCountryValue === 'US' ? _data_us_states_json__WEBPACK_IMPORTED_MODULE_4__ : {
        options: [{
          value: '',
          name: ''
        }]
      }; // const stateOptions = auStates;
      // return dropdown list to the form FE.

      return wp.element.createElement("select", {
        className: "gue-dropdown state-dropdown",
        "aria-label": "Select a State",
        name: "States",
        onChange: this.selectStateChange
      }, wp.element.createElement("option", {
        selected: true
      }, "Choose a State"), stateOptions.options.map(function (item) {
        return wp.element.createElement("option", {
          value: item.value
        }, item.name);
      }));
    }
    /**
     * Select Input Validation
     * This function is run on input change and on form submission.
     * We check if the input is empty or the validation state is false.
     * Offerwise we mark it as valid.
     */

  }, {
    key: "validateSelectCountry",
    value: function validateSelectCountry() {
      if (this.state.selectCountryValue === '') {
        this.setState({
          selectCountryError: 'This field is required',
          selectCountryValid: false
        });
      } else if (this.state.selectCountryValid === false) {
        this.setState({
          selectCountryError: 'Please choose a valid country',
          selectCountryValid: false
        });
      } else {
        this.setState({
          selectCountryError: '',
          selectCountryValid: true
        });
      }
    }
    /**
     * Select State Input Validation
     * This function is run on input change and on form submission.
     * We check if the input is empty or the validation state is false.
     * Offerwise we mark it as valid.
     */

  }, {
    key: "validateSelectState",
    value: function validateSelectState() {
      if (this.state.selectStateValue === '' || this.state.selectStateValue === 'Choose a State') {
        this.setState({
          selectStateError: 'This field is required',
          selectStateValid: false
        });
      } else if (this.state.selectStateValid === false) {
        this.setState({
          selectStateError: 'Please choose a valid state',
          selectStateValid: false
        });
      } else {
        this.setState({
          selectStateError: '',
          selectStateValid: true
        });
      }
    }
    /**
     * Email Input Validation
     * This function is run on input change and on form submission.
     * We check if the input is empty or the validation state is false.
     * Offerwise we mark it as valid.
     */

  }, {
    key: "validateEmail",
    value: function validateEmail() {
      if (this.state.emailValue === '') {
        this.setState({
          emailError: 'This field is required',
          emailValid: false
        });
      } else if (this.state.emailValid === false) {
        this.setState({
          emailError: 'Please enter a valid email address',
          emailValid: false
        });
      } else {
        this.setState({
          emailError: '',
          emailValid: Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["validateEmail"])(this.state.emailValue)
        });
      }
    }
    /**
     * Select Country Input Styling.
     * In the spirit of trying to keep the file size small for our blocks,
     * we'll be styling the select dropdown ourselves instead of using a React
     * import.  It's too much overhead for just a select box.
     */

  }, {
    key: "selectCountryChange",
    value: function selectCountryChange(e) {
      var _this2 = this;

      var target = e.target;
      this.setState({
        selectCountryValue: Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["cleanInput"])(target[target.selectedIndex].value),
        selectCountryText: target[target.selectedIndex].text,
        selectCountryValid: target[target.selectedIndex].value !== '' ? true : false,
        // ensure state is reset - in case user swithces between AU and US after selecting an option
        selectStateValue: '',
        selectStateText: 'Choose a state'
      }, function () {
        _this2.validateSelectCountry();
      });
    }
    /**
     * Select State Input Styling.
     * In the spirit of trying to keep the file size small for our blocks,
     * we'll be styling the select dropdown ourselves instead of using a React
     * import.  It's too much overhead for just a select box.
     */

  }, {
    key: "selectStateChange",
    value: function selectStateChange(e) {
      var _this3 = this;

      var target = e.target;
      this.setState({
        selectStateValue: Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["cleanInput"])(target[target.selectedIndex].value),
        selectStateText: target[target.selectedIndex].text,
        selectStateValid: target[target.selectedIndex].value !== '' ? true : false
      }, function () {
        _this3.validateSelectState();
      });
    }
    /**
     * Email Field Update
     * Here we run our validation on each touch event, and
     * update the content of the field.
     * @param {*} e
     */

  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      var _this4 = this;

      var email = e.target;
      this.setState({
        emailValue: Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["cleanInput"])(email.value),
        emailValid: Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["validateEmail"])(email.value)
      }, function () {
        _this4.validateEmail();
      });
    }
    /**
     * Validate hidden fields
     * Our gotcha field should always be empty.  This is a little
     * honey pot to catch some bots.  If it's not empty, we return false,
     * which stops the form sending.
     * @param {*} e
     */

  }, {
    key: "hiddenValidation",
    value: function hiddenValidation(form) {
      var gotcha = form.parentNode.querySelector('input[name="_gotcha"]').value;

      if (gotcha === '') {
        return true;
      } else {
        return false;
      }
    }
    /**
     * Update Form Message
     * This is run in several locations, and accepts a boolean and text message,
     * these are used to update the state.
     * @param {boolean} bool
     * @param {message} text
     */

  }, {
    key: "updateFormMessage",
    value: function updateFormMessage(bool, text) {
      this.setState({
        success: bool,
        formValid: bool,
        formMessage: text,
        loading: false
      });
    }
    /**
     * Opt In One
     * The user has the chance to opt in to the main bluey mailing list too.
     * This checkbox will take care of that.
     */

  }, {
    key: "optInOne",
    value: function optInOne(e) {
      if (typeof e.target.checked === 'boolean') {
        this.setState({
          optInOne: e.target.checked
        });
      }
    }
    /**
     * Opt In Two
     * The user has the chance to opt in to the main bluey mailing list too.
     * This checkbox will take care of that.
     */

  }, {
    key: "optInTwo",
    value: function optInTwo(e) {
      if (typeof e.target.checked === 'boolean') {
        this.setState({
          optInTwo: e.target.checked
        });
      }
    }
    /**
     * Send Data to Sales
     */

  }, {
    key: "sendData",
    value: function sendData(message) {
      var _this5 = this;

      //  decide if the state params are included based on AU or US being selected.
      var params = this.state.selectCountryValue === 'AU' || this.state.selectCountryValue === 'US' ? "type=".concat(this.props.type, "&email=").concat(this.state.emailValue, "&country=").concat(this.state.selectCountryValue, "&state=").concat(this.state.selectStateValue, "&optIn=").concat(this.state.optIn, "&optInType=").concat(this.props.optInType) : "type=".concat(this.props.type, "&email=").concat(this.state.emailValue, "&country=").concat(this.state.selectCountryValue, "&optIn=").concat(this.state.optIn, "&optInType=").concat(this.props.optInType); // const params = `type=${this.props.type}&email=${this.state.emailValue}&state=${this.state.selectStateValue}&optInOne=${this.state.optInOne}&optInOneType=${this.props.optInOneType}&optInTwo=${this.state.optInTwo}&optInTwoType=${this.props.optInTwoType}`;

      fetch("/wp-json/guerrilla/v1/newsletter-signup?".concat(params)).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          _this5.updateFormMessage(false, 'Sorry there seems to be a problem, please try again');

          throw new Error('Sorry there seems to be a problem, please try again');
        }
      }).then(function (res) {
        //Display correct response message
        if (res === 200) {
          _this5.updateFormMessage(true, 'Thanks for signing up!');

          message ? message.classList.add('success') : '';
        } else if (res === 400) {
          _this5.updateFormMessage(false, 'Please make sure you fill in all of the fields.');

          message ? message.classList.add('error') : '';
        } else if (res === 401) {
          _this5.updateFormMessage(false, 'Sorry there seems to be a problem, please try again');

          message ? message.classList.add('error') : '';
        } else if (res === 'empty') {
          _this5.updateFormMessage(false, 'Sorry there seems to be a problem, please try again');

          message ? message.classList.add('error') : '';
        } else {
          _this5.updateFormMessage(false, 'Sorry there seems to be a problem, please try again');

          message ? message.classList.add('error') : '';
        }
      }).catch(function (error) {
        console.error("Error: ".concat(error));
      });
    }
    /**
     * Form Submission
     * Here we hijack the sumbit event and send the details
     * to the BBC/salesforce API.
     */

  }, {
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();
      this.setState({
        loading: true
      });
      var form = e.target;
      var message = form.parentNode.querySelector('.form-message') ? form.parentNode.querySelector('.form-message') : '';
      /**
       * Scroll to top of form to see the message
       */

      var form_title = document.getElementById('fe-newsletter').querySelector('h2');

      if (form_title.innerText !== '') {
        window.location.href = '#fe-newsletter';
      } else {
        window.location.href = '#panel';
      } /// Run our final validation tests.


      this.validateEmail(); // this.validateSelectCountry();
      /// if AU or US is selected we need to validate the state field.

      this.state.selectCountryValue === 'AU' || this.selectCountryValue === 'US' ? this.validateSelectState() : ''; // this.validateSelectState();

      var hiddenFields = this.hiddenValidation(form); ///  If hidden fields are empty show an error. Otherwise continue.

      if (hiddenFields === false) {
        this.setState({
          loading: false,
          formValid: false,
          formMessage: 'There was an error with your submission, please try again.'
        }, function () {
          message ? message.classList.add('error') : '';
        });
      } else {
        ///  Last check that the fields are valid.
        if (this.state.selectCountryValid === true && this.state.emailValid === true) {
          this.state.selectCountryValue === 'AU' || this.selectCountryValue === 'US' ? this.state.selectStateValid === true ? ( // Remove error class
          message ? message.classList.remove('error') : '', // send data
          this.sendData(message)) : this.setState({
            loading: false
          }) : ( // Remove error class
          message ? message.classList.remove('error') : '', // send data
          this.sendData(message));
        } else {
          this.setState({
            loading: false
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return [wp.element.createElement("h2", null, this.props.title), wp.element.createElement("p", {
        className: "form-description"
      }, this.props.formDescription), wp.element.createElement("form", {
        "data-loading": this.state.loading,
        "data-success": this.state.success,
        id: "bluey-newsletter-form"
      }, this.state.formValid === false ? wp.element.createElement("p", {
        className: 'form-message error'
      }, this.state.formMessage) : this.state.formValid === true ? wp.element.createElement("p", {
        className: 'form-message success'
      }, this.state.formMessage) : '', wp.element.createElement("fieldset", {
        className: "".concat(this.state.emailValid === false ? 'validation-error' : '')
      }, wp.element.createElement("label", null, "Email Address*"), wp.element.createElement("input", {
        type: "email",
        name: "EmailAddress",
        "aria-label": "Enter the email address you would like newsletters emailed to.",
        placeholder: "e.g. bluey@email.com",
        onBlur: this.updateEmail
      }), this.state.emailError && wp.element.createElement("span", {
        className: "error-message"
      }, this.state.emailError)), wp.element.createElement("fieldset", {
        className: "".concat(this.state.selectCountryValid === false ? 'validation-error' : '')
      }, wp.element.createElement("label", null, "Country*"), wp.element.createElement("span", {
        className: "dropdown"
      }, wp.element.createElement("p", {
        className: "selection ".concat(this.state.selectCountryValue !== '' ? 'selected' : '')
      }, this.state.selectCountryText), wp.element.createElement("select", {
        className: "gue-dropdown country-dropdown",
        name: "HomeTerritory",
        onChange: this.selectCountryChange
      }, wp.element.createElement("option", null, "Choose a country"), this.countryList())), this.state.selectCountryError && wp.element.createElement("span", {
        className: "error-message"
      }, this.state.selectCountryError)), this.state.selectCountryValue === 'AU' || this.state.selectCountryValue === 'US' ? wp.element.createElement("fieldset", {
        className: "".concat(this.state.selectStateValid === false ? 'validation-error' : '')
      }, wp.element.createElement("label", null, "State*"), wp.element.createElement("span", {
        className: "dropdown"
      }, wp.element.createElement("p", {
        className: "selection ".concat(this.state.selectStateValue !== '' ? 'selected' : '')
      }, this.state.selectStateText), this.statesList()), this.state.selectStateError && wp.element.createElement("span", {
        className: "error-message"
      }, this.state.selectStateError)) : '', wp.element.createElement("fieldset", {
        role: "group",
        "aria-labelledby": "opt-in-one"
      }, wp.element.createElement("label", {
        className: "check-parent"
      }, wp.element.createElement("input", {
        id: "opt-in-one",
        type: "checkbox",
        name: "opt-in",
        onClick: this.optInOne,
        "aria-label": "Opt in One"
      }), wp.element.createElement("span", {
        className: "fancy-check"
      }), Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["isGutenbergActive"])() ? wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
        placeholder: "Opt-in one details...",
        value: this.props.checkbox_one,
        onChange: this.props.updateCheckboxOne
      }) : wp.element.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: this.props.checkbox_one
        }
      }))), wp.element.createElement("fieldset", {
        role: "group",
        "aria-labelledby": "opt-in-two"
      }, wp.element.createElement("label", {
        className: "check-parent"
      }, wp.element.createElement("input", {
        id: "opt-in-two",
        type: "checkbox",
        name: "opt-in",
        onClick: this.optInTwo,
        "aria-label": "Opt in Two"
      }), wp.element.createElement("span", {
        className: "fancy-check"
      }), Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["isGutenbergActive"])() ? wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
        placeholder: "Opt-in one details...",
        value: this.props.checkbox_two,
        onChange: this.props.updateCheckboxTwo
      }) : wp.element.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: this.props.checkbox_two
        }
      }))), wp.element.createElement("input", {
        type: "hidden",
        name: "_gotcha",
        value: ""
      }), Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["isGutenbergActive"])() ? wp.element.createElement("p", {
        className: "terms"
      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
        placeholder: "terms and conditions details...",
        onChange: this.props.updateTerms,
        tagName: "div",
        value: this.props.terms
      })) : wp.element.createElement("p", {
        className: "terms",
        dangerouslySetInnerHTML: {
          __html: this.props.terms
        }
      }), wp.element.createElement("input", {
        type: "submit",
        className: "btn btn__primary submit",
        onClick: this.submitForm,
        value: this.props.buttonLabel
      }), this.state.loading && wp.element.createElement("div", {
        className: "sk-chasing-dots"
      }, wp.element.createElement("div", {
        className: "sk-child sk-dot1"
      }), wp.element.createElement("div", {
        className: "sk-child sk-dot2"
      })))];
    }
  }]);

  return Form;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/newsletter/data/au-states.json":
/*!***********************************************!*\
  !*** ./blocks/newsletter/data/au-states.json ***!
  \***********************************************/
/*! exports provided: options, default */
/***/ (function(module) {

module.exports = {"options":[{"value":"ACT","name":"Australian Capital Territory"},{"value":"NSW","name":"New South Wales"},{"value":"NT","name":"Northern Territory"},{"value":"QLD","name":"Queensland"},{"value":"SA","name":"South Australia"},{"value":"TAS","name":"Tasmania"},{"value":"VIC","name":"Victoria"},{"value":"WA","name":"Western Australia"}]};

/***/ }),

/***/ "./blocks/newsletter/data/countries.json":
/*!***********************************************!*\
  !*** ./blocks/newsletter/data/countries.json ***!
  \***********************************************/
/*! exports provided: options, default */
/***/ (function(module) {

module.exports = {"options":[{"value":"AD","name":"Andorra"},{"value":"AE","name":"United Arab Emirates"},{"value":"AF","name":"Afghanistan"},{"value":"AG","name":"Antigua and Barbuda"},{"value":"AI","name":"Anguilla"},{"value":"AL","name":"Albania"},{"value":"AM","name":"Armenia"},{"value":"AO","name":"Angola"},{"value":"AQ","name":"Antarctica"},{"value":"AR","name":"Argentina"},{"value":"AS","name":"American Samoa"},{"value":"AT","name":"Austria"},{"value":"AU","name":"Australia"},{"value":"AW","name":"Aruba"},{"value":"AX","name":"Åland Islands"},{"value":"AZ","name":"Azerbaijan"},{"value":"BA","name":"Bosnia and Herzegovina"},{"value":"BB","name":"Barbados"},{"value":"BD","name":"Bangladesh"},{"value":"BE","name":"Belgium"},{"value":"BF","name":"Burkina Faso"},{"value":"BG","name":"Bulgaria"},{"value":"BH","name":"Bahrain"},{"value":"BI","name":"Burundi"},{"value":"BJ","name":"Benin"},{"value":"BL","name":"Saint Barthélemy"},{"value":"BM","name":"Bermuda"},{"value":"BN","name":"Brunei Darussalam"},{"value":"BO","name":"Bolivia (Plurinational State of)"},{"value":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"value":"BR","name":"Brazil"},{"value":"BS","name":"Bahamas"},{"value":"BT","name":"Bhutan"},{"value":"BV","name":"Bouvet Island"},{"value":"BW","name":"Botswana"},{"value":"BY","name":"Belarus"},{"value":"BZ","name":"Belize"},{"value":"CA","name":"Canada"},{"value":"CC","name":"Cocos (Keeling) Islands"},{"value":"CD","name":"Congo (Democratic Republic of the)"},{"value":"CF","name":"Central African Republic"},{"value":"CG","name":"Congo"},{"value":"CH","name":"Switzerland"},{"value":"CI","name":"Côte d'Ivoire"},{"value":"CK","name":"Cook Islands"},{"value":"CL","name":"Chile"},{"value":"CM","name":"Cameroon"},{"value":"CN","name":"China"},{"value":"CO","name":"Colombia"},{"value":"CR","name":"Costa Rica"},{"value":"CU","name":"Cuba"},{"value":"CV","name":"Cabo Verde"},{"value":"CW","name":"Curaçao"},{"value":"CX","name":"Christmas Island"},{"value":"CY","name":"Cyprus"},{"value":"CZ","name":"Czech Republic"},{"value":"DE","name":"Germany"},{"value":"DJ","name":"Djibouti"},{"value":"DK","name":"Denmark"},{"value":"DM","name":"Dominica"},{"value":"DO","name":"Dominican Republic"},{"value":"DZ","name":"Algeria"},{"value":"EC","name":"Ecuador"},{"value":"EE","name":"Estonia"},{"value":"EG","name":"Egypt"},{"value":"EH","name":"Western Sahara"},{"value":"ER","name":"Eritrea"},{"value":"ES","name":"Spain"},{"value":"ET","name":"Ethiopia"},{"value":"FI","name":"Finland"},{"value":"FJ","name":"Fiji"},{"value":"FK","name":"Falkland Islands (Malvinas)"},{"value":"FM","name":"Micronesia (Federated States of)"},{"value":"FO","name":"Faroe Islands"},{"value":"FR","name":"France"},{"value":"GA","name":"Gabon"},{"value":"GD","name":"Grenada"},{"value":"GE","name":"Georgia"},{"value":"GF","name":"French Guiana"},{"value":"GG","name":"Guernsey"},{"value":"GH","name":"Ghana"},{"value":"GI","name":"Gibraltar"},{"value":"GL","name":"Greenland"},{"value":"GM","name":"Gambia"},{"value":"GN","name":"Guinea"},{"value":"GP","name":"Guadeloupe"},{"value":"GQ","name":"Equatorial Guinea"},{"value":"GR","name":"Greece"},{"value":"GS","name":"South Georgia and the South Sandwich Islands"},{"value":"GT","name":"Guatemala"},{"value":"GU","name":"Guam"},{"value":"GW","name":"Guinea-Bissau"},{"value":"GY","name":"Guyana"},{"value":"HK","name":"Hong Kong"},{"value":"HM","name":"Heard Island and McDonald Islands"},{"value":"HN","name":"Honduras"},{"value":"HR","name":"Croatia"},{"value":"HT","name":"Haiti"},{"value":"HU","name":"Hungary"},{"value":"ID","name":"Indonesia"},{"value":"IE","name":"Ireland"},{"value":"IL","name":"Israel"},{"value":"IM","name":"Isle of Man"},{"value":"IN","name":"India"},{"value":"IO","name":"British Indian Ocean Territory"},{"value":"IQ","name":"Iraq"},{"value":"IR","name":"Iran (Islamic Republic of)"},{"value":"IS","name":"Iceland"},{"value":"IT","name":"Italy"},{"value":"JE","name":"Jersey"},{"value":"JM","name":"Jamaica"},{"value":"JO","name":"Jordan"},{"value":"JP","name":"Japan"},{"value":"KE","name":"Kenya"},{"value":"KG","name":"Kyrgyzstan"},{"value":"KH","name":"Cambodia"},{"value":"KI","name":"Kiribati"},{"value":"KM","name":"Comoros"},{"value":"KN","name":"Saint Kitts and Nevis"},{"value":"KP","name":"Korea (Democratic People's Republic of)"},{"value":"KR","name":"Korea (Republic of)"},{"value":"KW","name":"Kuwait"},{"value":"KY","name":"Cayman Islands"},{"value":"KZ","name":"Kazakhstan"},{"value":"LA","name":"Lao People's Democratic Republic"},{"value":"LB","name":"Lebanon"},{"value":"LC","name":"Saint Lucia"},{"value":"LI","name":"Liechtenstein"},{"value":"LK","name":"Sri Lanka"},{"value":"LR","name":"Liberia"},{"value":"LS","name":"Lesotho"},{"value":"LT","name":"Lithuania"},{"value":"LU","name":"Luxembourg"},{"value":"LV","name":"Latvia"},{"value":"LY","name":"Libya"},{"value":"MA","name":"Morocco"},{"value":"MC","name":"Monaco"},{"value":"MD","name":"Moldova (Republic of)"},{"value":"ME","name":"Montenegro"},{"value":"MF","name":"Saint Martin (French part)"},{"value":"MG","name":"Madagascar"},{"value":"MH","name":"Marshall Islands"},{"value":"MK","name":"Macedonia (the former Yugoslav Republic of)"},{"value":"ML","name":"Mali"},{"value":"MM","name":"Myanmar"},{"value":"MN","name":"Mongolia"},{"value":"MO","name":"Macao"},{"value":"MP","name":"Northern Mariana Islands"},{"value":"MQ","name":"Martinique"},{"value":"MR","name":"Mauritania"},{"value":"MS","name":"Montserrat"},{"value":"MT","name":"Malta"},{"value":"MU","name":"Mauritius"},{"value":"MV","name":"Maldives"},{"value":"MW","name":"Malawi"},{"value":"MX","name":"Mexico"},{"value":"MY","name":"Malaysia"},{"value":"MZ","name":"Mozambique"},{"value":"NA","name":"Namibia"},{"value":"NC","name":"New Caledonia"},{"value":"NE","name":"Niger"},{"value":"NF","name":"Norfolk Island"},{"value":"NG","name":"Nigeria"},{"value":"NI","name":"Nicaragua"},{"value":"NL","name":"Netherlands"},{"value":"NO","name":"Norway"},{"value":"NP","name":"Nepal"},{"value":"NR","name":"Nauru"},{"value":"NU","name":"Niue"},{"value":"NZ","name":"New Zealand"},{"value":"OM","name":"Oman"},{"value":"PA","name":"Panama"},{"value":"PE","name":"Peru"},{"value":"PF","name":"French Polynesia"},{"value":"PG","name":"Papua New Guinea"},{"value":"PH","name":"Philippines"},{"value":"PK","name":"Pakistan"},{"value":"PL","name":"Poland"},{"value":"PM","name":"Saint Pierre and Miquelon"},{"value":"PN","name":"Pitcairn"},{"value":"PR","name":"Puerto Rico"},{"value":"PS","name":"Palestine, State of"},{"value":"PT","name":"Portugal"},{"value":"PW","name":"Palau"},{"value":"PY","name":"Paraguay"},{"value":"QA","name":"Qatar"},{"value":"RE","name":"Réunion"},{"value":"RO","name":"Romania"},{"value":"RS","name":"Serbia"},{"value":"RU","name":"Russian Federation"},{"value":"RW","name":"Rwanda"},{"value":"SA","name":"Saudi Arabia"},{"value":"SB","name":"Solomon Islands"},{"value":"SC","name":"Seychelles"},{"value":"SD","name":"Sudan"},{"value":"SE","name":"Sweden"},{"value":"SG","name":"Singapore"},{"value":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"SI","name":"Slovenia"},{"value":"SJ","name":"Svalbard and Jan Mayen"},{"value":"SK","name":"Slovakia"},{"value":"SL","name":"Sierra Leone"},{"value":"SM","name":"San Marino"},{"value":"SN","name":"Senegal"},{"value":"SO","name":"Somalia"},{"value":"SR","name":"Suriname"},{"value":"SS","name":"South Sudan"},{"value":"ST","name":"Sao Tome and Principe"},{"value":"SV","name":"El Salvador"},{"value":"SX","name":"Sint Maarten (Dutch part)"},{"value":"SY","name":"Syrian Arab Republic"},{"value":"SZ","name":"Swaziland"},{"value":"TC","name":"Turks and Caicos Islands"},{"value":"TD","name":"Chad"},{"value":"TF","name":"French Southern Territories"},{"value":"TG","name":"Togo"},{"value":"TH","name":"Thailand"},{"value":"TJ","name":"Tajikistan"},{"value":"TK","name":"Tokelau"},{"value":"TL","name":"Timor-Leste"},{"value":"TM","name":"Turkmenistan"},{"value":"TN","name":"Tunisia"},{"value":"TO","name":"Tonga"},{"value":"TR","name":"Turkey"},{"value":"TT","name":"Trinidad and Tobago"},{"value":"TV","name":"Tuvalu"},{"value":"TW","name":"Taiwan, Province of China"},{"value":"TZ","name":"Tanzania, United Republic of"},{"value":"UA","name":"Ukraine"},{"value":"UG","name":"Uganda"},{"value":"GB","name":"United Kingdom"},{"value":"UM","name":"United States Minor Outlying Islands"},{"value":"US","name":"United States of America"},{"value":"UY","name":"Uruguay"},{"value":"UZ","name":"Uzbekistan"},{"value":"VA","name":"Holy See"},{"value":"VC","name":"Saint Vincent and the Grenadines"},{"value":"VE","name":"Venezuela (Bolivarian Republic of)"},{"value":"VG","name":"Virgin Islands (British)"},{"value":"VI","name":"Virgin Islands (U.S.)"},{"value":"VN","name":"Viet Nam"},{"value":"VU","name":"Vanuatu"},{"value":"WF","name":"Wallis and Futuna"},{"value":"WS","name":"Samoa"},{"value":"YE","name":"Yemen"},{"value":"YT","name":"Mayotte"},{"value":"ZA","name":"South Africa"},{"value":"ZM","name":"Zambia"},{"value":"ZW","name":"Zimbabwe"}]};

/***/ }),

/***/ "./blocks/newsletter/data/us-states.json":
/*!***********************************************!*\
  !*** ./blocks/newsletter/data/us-states.json ***!
  \***********************************************/
/*! exports provided: options, default */
/***/ (function(module) {

module.exports = {"options":[{"name":"Alabama","value":"AL"},{"name":"Alaska","value":"AK"},{"name":"Arizona","value":"AZ"},{"name":"Arkansas","value":"AR"},{"name":"California","value":"CA"},{"name":"Colorado","value":"CO"},{"name":"Connecticut","value":"CT"},{"name":"Delaware","value":"DE"},{"name":"Florida","value":"FL"},{"name":"Georgia","value":"GA"},{"name":"Hawaii","value":"HI"},{"name":"Idaho","value":"ID"},{"name":"Illinois","value":"IL"},{"name":"Indiana","value":"IN"},{"name":"Iowa","value":"IA"},{"name":"Kansa","value":"KS"},{"name":"Kentucky","value":"KY"},{"name":"Lousiana","value":"LA"},{"name":"Maine","value":"ME"},{"name":"Maryland","value":"MD"},{"name":"Massachusetts","value":"MA"},{"name":"Michigan","value":"MI"},{"name":"Minnesota","value":"MN"},{"name":"Mississippi","value":"MS"},{"name":"Missouri","value":"MO"},{"name":"Montana","value":"MT"},{"name":"Nebraska","value":"NE"},{"name":"Nevada","value":"NV"},{"name":"New Hampshire","value":"NH"},{"name":"New Jersey","value":"NJ"},{"name":"New Mexico","value":"NM"},{"name":"New York","value":"NY"},{"name":"North Carolina","value":"NC"},{"name":"North Dakota","value":"ND"},{"name":"Ohio","value":"OH"},{"name":"Oklahoma","value":"OK"},{"name":"Oregon","value":"OR"},{"name":"Pennsylvania","value":"PA"},{"name":"Rhode Island","value":"RI"},{"name":"South Carolina","value":"SC"},{"name":"South Dakota","value":"SD"},{"name":"Tennessee","value":"TN"},{"name":"Texas","value":"TX"},{"name":"Utah","value":"UT"},{"name":"Vermont","value":"VT"},{"name":"Virginia","value":"VA"},{"name":"Washington","value":"WA"},{"name":"West Virginia","value":"WV"},{"name":"Wisconsin","value":"WI"},{"name":"Wyoming","value":"WY"}]};

/***/ }),

/***/ "./blocks/newsletter/frontend.js":
/*!***************************************!*\
  !*** ./blocks/newsletter/frontend.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Form */ "./blocks/newsletter/components/Form.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being redered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var newsletter = document.querySelector('#fe-newsletter');

  if (!admin && newsletter) {
    /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.
    var settings = JSON.parse(document.getElementById('fe-newsletter').getAttribute('data-props'));
    var termsContent = document.getElementById('fe-newsletter').getAttribute('data-rte');
    ReactDOM.render(wp.element.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, settings, {
      terms: termsContent
    })), document.getElementById('fe-newsletter'));
  }
});

/***/ }),

/***/ "./blocks/posts-carousel/components/Carousel.js":
/*!******************************************************!*\
  !*** ./blocks/posts-carousel/components/Carousel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_components_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/PostCard */ "./blocks/shared/components/PostCard.js");
/* harmony import */ var _shared_components_VideoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/VideoCard */ "./blocks/shared/components/VideoCard.js");
/* harmony import */ var _shared_components_GameCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/GameCard */ "./blocks/shared/components/GameCard.js");
/* harmony import */ var _shared_components_DownloadCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/DownloadCard */ "./blocks/shared/components/DownloadCard.js");
/* harmony import */ var _shared_components_GalleryCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/GalleryCard */ "./blocks/shared/components/GalleryCard.js");
/* harmony import */ var _shared_components_ShopCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/ShopCard */ "./blocks/shared/components/ShopCard.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Posts Carousel
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component receives block attributes as props and updates it state in response.
 * We do not update the attributes from this component, we only receive them.
 * @props {string} this.props.postType
 * @props {integer} this.props.load
 * @props {string} this.props.order
 * @props {string} this.props.orderby
 * @props {string} this.props.carouselType
 * @props {integer} this.props.carouselSlides
 */









var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
    _this.state = {
      loading: 'gallery' !== _this.props.carouselType ? true : false,
      posts: [],
      slides: ''
    };
    _this.fetchPosts = _this.fetchPosts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Here we are making our initial API requests before the componet actually mounts,
   * this is because our component is built using this data, so it's necessary in this
   * order.
   */


  _createClass(Carousel, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      'gallery' !== this.props.carouselType && this.fetchPosts();
    }
    /**
     * We watch the component for any changes in the props,
     * these are set outside of this component in the block attributes.
     * @param {prevProps} prevProps
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.postType !== this.props.postType || prevProps.load !== this.props.load || prevProps.order !== this.props.order || prevProps.orderby !== this.props.orderby || prevProps.carouselTiles !== this.props.carouselTiles || prevProps.carouselType !== this.props.carouselType || prevProps.galleryImages !== this.props.galleryImages || prevProps.searchTerms !== this.props.searchTerms) {
        this.setState({
          loading: 'gallery' !== this.props.carouselType ? true : false,
          posts: [],
          slides: '',
          retailers: []
        });
        'gallery' !== this.props.carouselType && this.fetchPosts();
      }
    }
    /**
     * This method will be used to fetch the initial state and reload.
     * As we need the carousel to be able to reinitialise, we need everything to happen
     * in the order below.  Allowing us to build our markup before initialings the carousel.
     */

  }, {
    key: "fetchPosts",
    value: function fetchPosts() {
      var _this2 = this;

      try {
        fetch("/guerrilla/v1/get-posts?post_type=".concat(this.props.postType, "&per_page=").concat(this.props.load, "&order=").concat(this.props.order, "&orderby=").concat(this.props.orderby, "&block=carousel&searchTerms=").concat(this.props.searchTerms ? this.props.searchTerms : '')).then(function (res) {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('There was a problem loading content.');
          }
        }).then(function (posts) {
          _this2.setState({
            posts: posts,
            loading: false
          });
        }).then(function () {
          _this2.setState({
            slides: _this2.getPosts()
          });
        }).catch(function (error) {
          _this2.setState({
            loading: false
          });

          console.log(error);
        });
      } catch (error) {
        console.log(error);
        return;
      }
    }
    /**
     * Taxonomy Names — Not IDs please.
     *
     * When building the posts in the grid, we need to tag names - not the ID's which
     * is what the API returns.  So we'll loop over filters matching the id set on them with our
     * post tag ids - sending matches through to the component.
     *
     * @param {post data} data
     * @param {post id} match
     */

  }, {
    key: "getTaxName",
    value: function getTaxName(data) {
      return data.length > 0 && data.map(function (item) {
        return item.name && item.name;
      });
    }
    /**
     * This function will determin which cards we'll be using;
     * post, video, game or download.
     * @param {type} type
     */

  }, {
    key: "postLayout",
    value: function postLayout(post, index) {
      return 'post' === post.type ? wp.element.createElement(_shared_components_PostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        post: post,
        labels: this.getTaxName(post.post_labels),
        index: index,
        onlyTitle: true
      }) : 'videos' === post.type ? wp.element.createElement(_shared_components_VideoCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        post: post,
        labels: this.getTaxName(post.post_labels),
        index: index,
        onlyTitle: true
      }) : 'games' === post.type ? wp.element.createElement(_shared_components_GameCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post,
        labels: this.getTaxName(post.post_labels),
        index: index,
        onlyTitle: true
      }) : 'downloads' === post.type ? wp.element.createElement(_shared_components_DownloadCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post,
        retailers: this.state.retailers,
        labels: this.getTaxName(post.post_labels),
        index: index,
        onlyTitle: true
      }) : 'products' ? wp.element.createElement(_shared_components_ShopCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post,
        index: index
      }) : undefined;
    }
    /**
     * This function will be reponsible for building the carousel based on posts
     * retreived from the API.
     */

  }, {
    key: "getPosts",
    value: function getPosts() {
      var _this3 = this;

      return this.state.posts.length > 0 && this.state.posts.map(function (post, index) {
        return _this3.postLayout(post);
      });
    }
    /**
     * Carousel Settings
     */

  }, {
    key: "carouselSettings",
    value: function carouselSettings() {
      var _this4 = this;

      // For regular carousel
      var responsive = [{
        breakpoint: 980,
        settings: {
          slidesToShow: this.props.carouselTiles === 1 ? 1 : 2,
          slidesToScroll: this.props.carouselTiles === 1 ? 1 : 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '25px'
        }
      }]; // The actual settings to be used

      var settings = {
        dots: this.props.enableDots,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 'regular' === this.props.carouselType ? this.props.carouselTiles : undefined === this.props.carouselType ? 3 : 1,
        slidesToScroll: 1,
        responsive: 'gallery' === this.props.carouselType ? '' : responsive
      }; // Gallery Function for custom Paging

      if ('gallery' == this.props.carouselType && undefined !== this.props.galleryImages && this.props.galleryImages.length > 0) {
        settings.customPaging = function (i) {
          return wp.element.createElement("a", {
            style: {
              backgroundImage: "url(\"".concat(_this4.props.galleryImages[i].thumbnail, "\")")
            }
          }, wp.element.createElement("img", {
            src: _this4.props.galleryImages[i].thumbnail
          }));
        };
      }

      return settings;
    }
  }, {
    key: "buildGalleryImages",
    value: function buildGalleryImages() {
      return undefined !== this.props.galleryImages && this.props.galleryImages.length > 0 && this.props.galleryImages.map(function (item, index) {
        return wp.element.createElement(_shared_components_GalleryCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: item.url,
          index: index
        });
      });
    }
    /**
     * Carousel Type
     * Here we use the carouselType prop to decide the type of carousel to build.
     * @param {array} slides
     * @param {object} settings
     */

  }, {
    key: "buildCarousel",
    value: function buildCarousel(slides, settings) {
      if (this.state.posts.length < this.props.carouselTiles) {
        settings.slidesToShow = this.state.posts.length;
      } else if (this.props.load < this.props.carouselTiles) {
        settings.slidesToShow = this.props.load;
      }

      return wp.element.createElement(react_slick__WEBPACK_IMPORTED_MODULE_7___default.a, settings, slides);
    }
    /**
     * The final output from our component should be placed inside the
     * render method.
     * Do not update any state directly in here, bad things will happen.
     */

  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement("div", {
        "data-loading": this.state.loading,
        className: "slider-container type-".concat(this.props.carouselType)
      }, this.props.enableIntro === true || this.props.enableIntro !== 'undefined' ? [wp.element.createElement("h2", null, this.props.title), wp.element.createElement("p", null, this.props.description)] : '', 'gallery' === this.props.carouselType ? this.buildCarousel(this.buildGalleryImages(), this.carouselSettings()) : this.state.slides ? this.buildCarousel(this.state.slides, this.carouselSettings()) : '', this.state.loading && wp.element.createElement("div", {
        className: "sk-chasing-dots"
      }, wp.element.createElement("div", {
        className: "sk-child sk-dot1"
      }), wp.element.createElement("div", {
        className: "sk-child sk-dot2"
      })), this.props.enableButton === true && wp.element.createElement("a", {
        className: "btn btn__secondary carousel-button",
        href: this.props.buttonUrl,
        "aria-label": this.props.buttonLabel
      }, this.props.buttonLabel));
    }
  }]);

  return Carousel;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/posts-carousel/frontend.js":
/*!*******************************************!*\
  !*** ./blocks/posts-carousel/frontend.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Carousel */ "./blocks/posts-carousel/components/Carousel.js");
/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being rendered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var isCarousel = document.querySelectorAll('.fe-posts-carousel');

  if (!admin && isCarousel.length > 0) {
    for (var index = 0; index < isCarousel.length; index++) {
      var carousel = isCarousel[index]; /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.

      var settings = JSON.parse(carousel.getAttribute('data-props'));
      ReactDOM.render(wp.element.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_0__["default"], settings), carousel);
    }
  }
});

/***/ }),

/***/ "./blocks/shared/components/AppCard.js":
/*!*********************************************!*\
  !*** ./blocks/shared/components/AppCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * App Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var AppCard = function AppCard(props) {
  var index = props.index;
  var _props$post = props.post,
      acf = _props$post.acf,
      featured_image_url = _props$post.featured_image_url,
      title = _props$post.title,
      link = _props$post.link;
  var settings = {
    key: index,
    className: "bbc-card bbc-card__app"
  };
  var style = {
    style: {
      backgroundImage: "url(".concat(featured_image_url, ")")
    },
    className: "poster-image"
  };
  return wp.element.createElement("article", settings, wp.element.createElement("a", {
    href: link,
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(title.rendered)
  }, wp.element.createElement("div", {
    className: "poster-wrapper"
  }, wp.element.createElement("header", style)), wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(title.rendered)), wp.element.createElement("p", null, acf.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppCard);

/***/ }),

/***/ "./blocks/shared/components/CharacterCard.js":
/*!***************************************************!*\
  !*** ./blocks/shared/components/CharacterCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Character Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var CharacterCard = function CharacterCard(props) {
  var settings = {
    key: props.index,
    className: 'bbc-character-card'
  };
  var style = {
    className: 'poster-image'
  };
  return wp.element.createElement("article", _extends({}, settings, {
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)
  }), wp.element.createElement("header", _extends({}, style, {
    "data-character-size": props.post.acf.character_size
  }), wp.element.createElement("img", {
    src: props.post.featured_image_url,
    title: Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered),
    alt: Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)
  })), wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)), wp.element.createElement("p", null, props.post.acf.description)));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterCard);

/***/ }),

/***/ "./blocks/shared/components/ClearInput.js":
/*!************************************************!*\
  !*** ./blocks/shared/components/ClearInput.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClearInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Select Box
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — A reusable component to be used in other blocks.  A simple Select box with our own custom styling.
 * @props {text} props.value
 * @props {text} props.text
 * @props {array} props.options
 * @props {func} props.updateOptions
 */


var ClearInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ClearInput, _Component);

  function ClearInput(props) {
    var _this;

    _classCallCheck(this, ClearInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClearInput).call(this, props));
    _this.clearValue = _this.clearValue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this))); //    this.onChange = this.onChange.bind(this);

    _this.state = {
      value: _this.props.value || ''
    };
    return _this;
  }

  _createClass(ClearInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var newProps = this.props;

      if (oldProps.value !== newProps.value) {
        this.setState({
          value: newProps.value
        });
      } //  console.log(oldProps, newProps);

    }
  }, {
    key: "clearValue",
    value: function clearValue(e) {
      this.setState({
        value: ''
      }, function () {
        this.props.onChange({
          target: {
            value: ''
          }
        });
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      console.log('change', e.currentTarget.value);
      this.setState({
        value: e.currentTarget.value
      }, function () {});
      this.props.onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      return [wp.element.createElement("span", {
        className: "clear-input"
      }, wp.element.createElement("input", _extends({}, this.props, {
        value: this.state.value,
        onChange: this.handleChange
      })), wp.element.createElement("a", {
        "data-hidden": !this.state.value,
        onClick: this.clearValue
      }, "x"))];
    }
  }]);

  return ClearInput;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/shared/components/DownloadCard.js":
/*!**************************************************!*\
  !*** ./blocks/shared/components/DownloadCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Download Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var DownloadCard = function DownloadCard(props) {
  var index = props.index,
      labels = props.labels,
      onlyTitle = props.onlyTitle;
  var _props$post = props.post,
      acf = _props$post.acf,
      featured_image_url = _props$post.featured_image_url,
      title = _props$post.title,
      link = _props$post.link;
  var settings = {
    key: index,
    className: "bbc-card bbc-card__download ".concat(labels, " ").concat(acf.download && 'download-only')
  };
  var style = {
    style: {
      backgroundImage: "url(".concat(featured_image_url, ")")
    },
    className: "poster-image"
  };
  return acf.download && !onlyTitle ? wp.element.createElement("article", settings, wp.element.createElement("div", {
    className: "poster-wrapper"
  }, wp.element.createElement("header", style)), wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("p", {
    className: "taxonomies ".concat(labels ? 'has-labels' : '')
  }, wp.element.createElement("span", null, labels), wp.element.createElement("div", {
    className: "icon"
  })), wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(title.rendered)), true !== onlyTitle && wp.element.createElement("a", {
    href: acf.download.url,
    target: "_blank",
    className: "btn btn__primary download"
  }, "Download"))) : wp.element.createElement("article", settings, wp.element.createElement("a", {
    href: link,
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(title.rendered)
  }, wp.element.createElement("div", {
    className: "poster-wrapper"
  }, wp.element.createElement("header", style)), wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("p", {
    className: "taxonomies ".concat(labels ? 'has-labels' : '')
  }, wp.element.createElement("span", null, labels), wp.element.createElement("div", {
    className: "icon"
  })), wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(title.rendered)), true !== onlyTitle && wp.element.createElement("p", null, acf.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadCard);

/***/ }),

/***/ "./blocks/shared/components/EventCard.js":
/*!***********************************************!*\
  !*** ./blocks/shared/components/EventCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _countries_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries.json */ "./blocks/shared/countries.json");
var _countries_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../countries.json */ "./blocks/shared/countries.json", 1);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Event Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */




var EventCard = function EventCard(props) {
  var post = props.post,
      index = props.index,
      activeFilters = props.activeFilters;
  var title = post.title,
      acf = post.acf;
  var event_button_details = acf.event_button_details,
      event_state = acf.event_state,
      america_event_state = acf.america_event_state,
      event_suburb = acf.event_suburb,
      event_start_date = acf.event_start_date,
      event_end_date = acf.event_end_date,
      event_postponed = acf.event_postponed,
      event_new = acf.event_new,
      geo_location = acf.geo_location;
  var settings = {
    key: index,
    className: 'bbc-card bbc-card__event'
  };

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      regions = _useState2[0],
      setRegions = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      eventCountry = _useState4[0],
      setEventCountry = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      display = _useState6[0],
      updateDisplay = _useState6[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (event_state) {
      setRegions(event_state);
    }

    if (america_event_state && america_event_state.length > 0) {
      setRegions(america_event_state);
    }
  }, [event_state, america_event_state]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var country = geo_location && geo_location.length > 0 && _countries_json__WEBPACK_IMPORTED_MODULE_1__.options.filter(function (country) {
      return geo_location.includes(country.value);
    });

    if (country && country.length > 0) {
      setEventCountry(", ".concat(country[0].label));
    }
  }, [geo_location]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (activeFilters && activeFilters.length) {
      var filters = [];

      if (america_event_state) {
        filters.push.apply(filters, _toConsumableArray(america_event_state));
      }

      if (event_state) {
        filters.push.apply(filters, _toConsumableArray(event_state));
      }

      var found = false;
      filters.forEach(function (item) {
        if (activeFilters.includes(item.term_id)) {
          found = true;
        }
      });
      updateDisplay(found);
    } else {
      updateDisplay(true);
    }
  }, [activeFilters]);
  /**
   * Get the month from the date string.
   */

  var getDateParts = function getDateParts(start, end) {
    var startDateFull = start.split('/');
    var endDateFull = end.split('/'); // Month

    var months = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var month = months[parseFloat(startDateFull[1])]; // Start Day

    var startDay = parseFloat(startDateFull[0]); // End Day

    var endDay = parseFloat(endDateFull[0]);
    return [month, startDay, endDay];
  };

  var date = getDateParts(event_start_date, event_end_date);

  var dateInPast = function dateInPast(firstDate, secondDate) {
    var endDate = firstDate.split('/');
    var today = Date.parse(secondDate);

    if (Date.parse(endDate[2] + '-' + endDate[1] + '-' + endDate[0]) <= today) {
      return true;
    }

    return false;
  };

  var today = new Date();
  var isEnded = dateInPast(event_end_date, today);
  return display ? wp.element.createElement("a", _extends({
    href: event_button_details.button_url ? event_button_details.button_url : '#',
    target: "_blank"
  }, settings, {
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["decodeHtml"])(title.rendered),
    style: {
      pointerEvents: "".concat(event_button_details.coming_soon ? 'none' : 'all')
    },
    "data-ended": isEnded,
    "data-postponed": event_postponed,
    "data-new": event_new
  }), wp.element.createElement("article", null, wp.element.createElement("div", {
    className: "date"
  }, wp.element.createElement("p", {
    className: "month"
  }, date[0]), wp.element.createElement("p", {
    className: "days"
  }, date[1] === date[2] ? wp.element.createElement("span", null, date[1]) : [wp.element.createElement("span", null, date[1]), wp.element.createElement("span", null, "\u2013"), wp.element.createElement("span", null, date[2])])), wp.element.createElement("div", {
    className: "venue"
  }, wp.element.createElement("h5", null, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["decodeHtml"])(title.rendered)), wp.element.createElement("p", {
    className: "has-small-font-size"
  }, "".concat(event_suburb, ", ").concat(regions.length > 0 && regions[0].name).concat(eventCountry))), wp.element.createElement("div", {
    className: "mobile-location"
  }, wp.element.createElement("p", {
    className: "has-small-font-size"
  }, "".concat(event_suburb, ", ").concat(regions.length > 0 && regions[0].name).concat(eventCountry))), wp.element.createElement("div", {
    className: "button-container"
  }, event_button_details.button_url && event_button_details.button_url !== null && !event_button_details.coming_soon ? wp.element.createElement("a", {
    className: "btn btn__primary external",
    href: event_button_details.button_url,
    target: "_blank",
    "aria-label": event_button_details.button_label ? event_button_details.button_label : 'Pre Sale'
  }, event_button_details.button_label ? event_button_details.button_label : 'Pre Sale') : event_button_details.coming_soon ? wp.element.createElement("span", {
    className: "btn btn__primary",
    "data-coming-soon": "true"
  }, event_button_details.coming_soon_label ? event_button_details.coming_soon_label : 'Coming Soon') : ''))) : '';
};

/* harmony default export */ __webpack_exports__["default"] = (EventCard);

/***/ }),

/***/ "./blocks/shared/components/GalleryCard.js":
/*!*************************************************!*\
  !*** ./blocks/shared/components/GalleryCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gallery Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */
var GalleryCard = function GalleryCard(props) {
  return wp.element.createElement("article", {
    key: props.index
  }, wp.element.createElement("div", {
    className: "gallery-image",
    style: {
      backgroundImage: "url(\"".concat(props.image, "\")")
    }
  }, wp.element.createElement("img", {
    src: "".concat(props.image)
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GalleryCard);

/***/ }),

/***/ "./blocks/shared/components/GameCard.js":
/*!**********************************************!*\
  !*** ./blocks/shared/components/GameCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Game Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var GameCard = function GameCard(props) {
  var settings = {
    key: props.index,
    className: 'bbc-card bbc-card__game'
  };
  var style = {
    style: {
      backgroundImage: "url(".concat(props.post.featured_image_url, ")")
    },
    className: 'poster-image'
  };
  return wp.element.createElement("article", settings, wp.element.createElement("a", {
    href: props.post.link,
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)
  }, wp.element.createElement("div", {
    className: "poster-wrapper"
  }, wp.element.createElement("header", style)), wp.element.createElement("div", {
    className: "meta"
  }, !props.gridBlock && wp.element.createElement("p", {
    className: "taxonomies has-labels"
  }, wp.element.createElement("span", null, props.labels ? props.labels : 'Game'), wp.element.createElement("div", {
    className: "icon"
  })), wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)), props.gridBlock && [wp.element.createElement("p", {
    className: "description"
  }, props.post.acf.description), wp.element.createElement("a", {
    href: props.post.link,
    className: "btn btn__primary play-now"
  }, "play now")])));
};

/* harmony default export */ __webpack_exports__["default"] = (GameCard);

/***/ }),

/***/ "./blocks/shared/components/PostCard.js":
/*!**********************************************!*\
  !*** ./blocks/shared/components/PostCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Post Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var PostCard = function PostCard(props) {
  var post = props.post,
      index = props.index;
  var link = post.link,
      title = post.title,
      excerpt = post.excerpt,
      featured_image_url = post.featured_image_url;
  var settings = {
    key: index,
    className: 'bbc-card bbc-card__post'
  };
  var style = {
    style: {
      backgroundImage: "url(".concat(featured_image_url, ")")
    },
    className: 'poster-image'
  };
  return wp.element.createElement("article", settings, wp.element.createElement("a", {
    href: link,
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(title.rendered)
  }, wp.element.createElement("div", {
    className: "poster-wrapper"
  }, wp.element.createElement("header", style)), wp.element.createElement("div", {
    className: "meta"
  }, !props.gridBlock && wp.element.createElement("p", {
    className: "taxonomies ".concat(props.labels ? 'has-labels' : '')
  }, wp.element.createElement("span", null, props.labels), wp.element.createElement("div", {
    className: "icon"
  })), wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(title.rendered)), props.gridBlock && [wp.element.createElement("p", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["tidyExcerpt"])(excerpt.rendered))
    }
  })])));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./blocks/shared/components/RetailerCard.js":
/*!**************************************************!*\
  !*** ./blocks/shared/components/RetailerCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Retailer Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var RetailerCard = function RetailerCard(props) {
  var settings = {
    key: props.index,
    className: 'bbc-card bbc-card__retailer'
  };
  return wp.element.createElement("article", settings, wp.element.createElement("a", {
    href: props.post.acf.retailer_website,
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.name),
    target: "_blank",
    rel: "noreffer nofollow"
  }, wp.element.createElement("header", {
    className: "poster-image"
  }, wp.element.createElement("img", {
    src: props.post.acf.retailer_logo.sizes.large,
    alt: Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.name),
    title: Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.name)
  })), props.post.description && wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("p", {
    className: "post-details"
  }, props.post.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (RetailerCard);

/***/ }),

/***/ "./blocks/shared/components/SelectBox.js":
/*!***********************************************!*\
  !*** ./blocks/shared/components/SelectBox.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Select Box
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — A reusable component to be used in other blocks.  A simple Select box with our own custom styling.
 * @props {text} props.value
 * @props {text} props.text
 * @props {array} props.options
 * @props {func} props.updateOptions
 */
var SelectBox = function SelectBox(props) {
  return wp.element.createElement("span", {
    className: "dropdown"
  }, wp.element.createElement("p", {
    className: "selection ".concat(props.value !== '' ? 'selected' : '')
  }, props.defaultText), wp.element.createElement("select", {
    className: "gue-dropdown",
    onChange: props.updateOptions
  }, props.options));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectBox);

/***/ }),

/***/ "./blocks/shared/components/ShareButtons.js":
/*!**************************************************!*\
  !*** ./blocks/shared/components/ShareButtons.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Share Buttons
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post slug and title are passed as props
 * @props {slug} props.slug
 * @props {title} props.title
 */


var ShareButtons = function ShareButtons(props) {
  /**
   * Copy the current page url on click
   * @param {*} e
   */
  var copyLink = function copyLink(e) {
    e.preventDefault();
    Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["copyingIsntAlwaysCheating"])(e.target);
  };

  return wp.element.createElement("div", {
    className: "share-buttons"
  }, wp.element.createElement("span", null, "Share: "), wp.element.createElement("a", {
    className: "icon__social icon__social--facebook__share",
    href: "https://facebook.com/sharer/sharer.php?u=".concat(props.slug),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Share on Facebook"
  }, "Share on Facebook"), wp.element.createElement("a", {
    className: "icon__social icon__social--twitter__share",
    href: "https://twitter.com/intent/tweet/?text=".concat(props.title, "&amp;url=").concat(props.slug),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Share on Twitter"
  }, "Share on Twitter"), wp.element.createElement("a", {
    className: "icon__social icon__social--copy-link",
    href: props.slug,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Copy URL",
    onClick: copyLink
  }, "Copy URL"));
};

/* harmony default export */ __webpack_exports__["default"] = (ShareButtons);

/***/ }),

/***/ "./blocks/shared/components/ShopCard.js":
/*!**********************************************!*\
  !*** ./blocks/shared/components/ShopCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopCard; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Shop Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */



var ShopCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopCard, _Component);

  function ShopCard(props) {
    var _this;

    _classCallCheck(this, ShopCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShopCard).call(this, props));
    _this.showRetailers = _this.showRetailers.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      showRetailers: ''
    };
    return _this;
  }

  _createClass(ShopCard, [{
    key: "showRetailers",
    value: function showRetailers(e) {
      e.preventDefault();
      this.setState({
        showRetailers: this.state.showRetailers === true ? false : true
      });
    }
  }, {
    key: "multipleRetailerButtons",
    value: function multipleRetailerButtons() {
      return this.props.post.acf.buy_now_urls.map(function (item, index) {
        return index <= 5 && [wp.element.createElement("a", {
          href: item.url,
          className: "btn btn__primary external",
          target: "_blank",
          rel: "noopener noreferrer"
        }, item.select_retailer.name)];
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          post = _this$props.post,
          labels = _this$props.labels,
          index = _this$props.index;
      var medium_large_image_url = post.medium_large_image_url,
          title = post.title,
          acf = post.acf,
          link = post.link;
      var buy_now_urls = acf.buy_now_urls,
          show_detail_page = acf.show_detail_page;
      var settings = {
        key: index,
        className: "bbc-card bbc-card__shop ".concat(labels)
      };
      var style = {
        style: {
          backgroundImage: "url(".concat(medium_large_image_url, ")")
        },
        className: "poster-image"
      };
      return wp.element.createElement("article", _extends({}, settings, {
        "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["decodeHtml"])(title.rendered)
      }), wp.element.createElement("div", {
        className: "poster-wrapper"
      }, show_detail_page ? wp.element.createElement("a", {
        href: link
      }, wp.element.createElement("header", style)) : buy_now_urls && buy_now_urls.length > 1 && !show_detail_page ? wp.element.createElement("a", {
        href: link,
        onClick: this.showRetailers
      }, wp.element.createElement("header", style)) : wp.element.createElement("a", {
        href: buy_now_urls ? buy_now_urls[0].url : '',
        target: "_blank"
      }, wp.element.createElement("header", style))), wp.element.createElement("div", {
        className: "meta"
      }, wp.element.createElement("h6", {
        className: "title"
      }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["decodeHtml"])(title.rendered)), wp.element.createElement("div", {
        className: "card-button-group single-button"
      },
      /** Multiple retailers - but show detail page TRUE*/
      buy_now_urls && buy_now_urls.length > 1 && show_detail_page ? [wp.element.createElement("a", {
        href: link,
        className: "btn btn__primary"
      }, "Buy"), wp.element.createElement("p", {
        className: "multiple-retailers-text"
      }, "MULTIPLE RETAILERS AVAILABLE")] :
      /** Multiple retailers - but show detail page FALSE*/
      buy_now_urls && buy_now_urls.length > 1 && !show_detail_page ? [wp.element.createElement("a", {
        className: "btn btn__primary mutliple-retailers",
        onClick: this.showRetailers
      }, "Buy"), wp.element.createElement("p", {
        className: "multiple-retailers-text"
      }, "MULTIPLE RETAILERS AVAILABLE")] :
      /** Single retailer - but show detail page TRUE*/
      buy_now_urls && buy_now_urls.length <= 1 && show_detail_page ? [wp.element.createElement("a", {
        href: link,
        className: "btn btn__primary"
      }, "Buy")] :
      /** Single retailer - but show detail page FALSE*/
      buy_now_urls && buy_now_urls.length ? wp.element.createElement("a", {
        href: acf.buy_now_urls ? acf.buy_now_urls[0].url : '',
        target: "_blank",
        className: "btn btn__primary external"
      }, "Buy") :
      /** No links defined, show COMING SOON text */
      wp.element.createElement("p", {
        className: "multiple-retailers-text"
      }, "COMING SOON"))), buy_now_urls && buy_now_urls.length > 1 && !show_detail_page && wp.element.createElement("div", {
        className: "hidden-multiple-retailers",
        "data-display": this.state.showRetailers
      }, this.multipleRetailerButtons(), wp.element.createElement("a", {
        className: "multiple-retailers-close",
        onClick: this.showRetailers
      }, "Close")));
    }
  }]);

  return ShopCard;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/shared/components/SponsorCard.js":
/*!*************************************************!*\
  !*** ./blocks/shared/components/SponsorCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Sponsor Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var SponsorCard = function SponsorCard(props) {
  var settings = {
    key: props.index,
    className: 'bbc-card bbc-card__sponsor'
  };
  return wp.element.createElement("article", _extends({}, settings, {
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)
  }), wp.element.createElement("a", {
    href: props.post.acf.sponsor_website,
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered),
    target: "_blank",
    rel: "noreffer nofollow"
  }, wp.element.createElement("header", {
    className: "poster-image"
  }, wp.element.createElement("img", {
    src: props.post.acf.sponsor_logo.sizes.large,
    alt: Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered),
    title: Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)
  })), props.post.acf.sponsor_description && wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("p", {
    className: "post-details"
  }, props.post.acf.sponsor_description))));
};

/* harmony default export */ __webpack_exports__["default"] = (SponsorCard);

/***/ }),

/***/ "./blocks/shared/components/ToggleBox.js":
/*!***********************************************!*\
  !*** ./blocks/shared/components/ToggleBox.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Toggle Box
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — A reusable component to be used in other blocks.  A simple toggle box that drops down
 * on click, using css to do the grunt work.
 * @props {name} this.props.name
 * @props {nitle} this.props.title
 * @props {content} this.props.content
 */


var ToggleBox = function ToggleBox(props) {
  return wp.element.createElement("div", {
    className: "wp-block-gbl-bbc-accordian"
  }, wp.element.createElement("input", {
    id: props.name,
    className: "toggle toggle-parent",
    type: "checkbox"
  }), wp.element.createElement("label", {
    htmlFor: props.name,
    className: "lbl-toggle"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.title)), wp.element.createElement("div", {
    className: "collapsible-content"
  }, wp.element.createElement("div", {
    className: "content-inner"
  }, props.content)));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleBox);

/***/ }),

/***/ "./blocks/shared/components/VideoCard.js":
/*!***********************************************!*\
  !*** ./blocks/shared/components/VideoCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Video Card
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component lives inside any component so long as it
 * receives the post data as a prop as well as an index.
 * @props {post} props.post
 * @props {index} props.index
 */


var VideoCard = function VideoCard(props) {
  /**
   * Are we playing this video. or is it a thumbnail
   */
  var doNotPLay = props.post.do_not_play ? props.post.do_not_play : false;
  /**
   * There are two versions of labels.  One for the carousel and one for
   * the grid.  This will return the correct markup for that.
   */

  var labels = function labels() {
    if (props.onlyTitle) {
      return [wp.element.createElement("span", null, props.labels, ", episode ", props.post.acf.episode_number), wp.element.createElement("div", {
        className: "icon"
      })];
    } else {
      return "".concat(props.labels, ", episode ").concat(props.post.acf.episode_number);
    }
  };

  var showDescription = function showDescription() {
    if (!props.onlyTitle || props.gridBlock) {
      return wp.element.createElement("p", null, props.post.acf.description);
    } else {
      return;
    }
  };

  var settings = {
    key: props.index,
    className: "bbc-card bbc-card__video ".concat(doNotPLay ? 'do-not-play' : '')
  };
  var style = {
    style: {
      backgroundImage: "url(".concat(props.post.featured_image_url, ")")
    },
    className: 'poster-image'
  };
  return !doNotPLay ? wp.element.createElement("article", settings, wp.element.createElement("a", {
    href: props.post.link,
    "aria-label": Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)
  }, wp.element.createElement("div", {
    className: "poster-wrapper"
  }, wp.element.createElement("header", style), props.post.acf.video_length && !props.onlyTitle && !doNotPLay && wp.element.createElement("div", {
    className: "length"
  }, props.post.acf.video_length), !props.onlyTitle && !doNotPLay && wp.element.createElement("div", {
    className: "icon"
  })), wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("p", {
    className: "taxonomies ".concat(props.labels ? 'has-labels' : '')
  }, labels()), wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)), showDescription()))) : wp.element.createElement("article", settings, wp.element.createElement("div", {
    className: "poster-wrapper"
  }, wp.element.createElement("header", style), props.post.acf.video_length && !props.onlyTitle && !doNotPLay && wp.element.createElement("div", {
    className: "length"
  }, props.post.acf.video_length), !props.onlyTitle && !doNotPLay && wp.element.createElement("div", {
    className: "icon"
  })), wp.element.createElement("div", {
    className: "meta"
  }, wp.element.createElement("p", {
    className: "taxonomies ".concat(props.labels ? 'has-labels' : '')
  }, labels()), wp.element.createElement("h3", {
    className: "title"
  }, Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["decodeHtml"])(props.post.title.rendered)), showDescription()));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoCard);

/***/ }),

/***/ "./blocks/shared/countries.json":
/*!**************************************!*\
  !*** ./blocks/shared/countries.json ***!
  \**************************************/
/*! exports provided: options, default */
/***/ (function(module) {

module.exports = {"options":[{"value":"AD","label":"Andorra"},{"value":"AE","label":"United Arab Emirates"},{"value":"AF","label":"Afghanistan"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AI","label":"Anguilla"},{"value":"AL","label":"Albania"},{"value":"AM","label":"Armenia"},{"value":"AO","label":"Angola"},{"value":"AQ","label":"Antarctica"},{"value":"AR","label":"Argentina"},{"value":"AS","label":"American Samoa"},{"value":"AT","label":"Austria"},{"value":"AU","label":"Australia"},{"value":"AW","label":"Aruba"},{"value":"AX","label":"Åland Islands"},{"value":"AZ","label":"Azerbaijan"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BB","label":"Barbados"},{"value":"BD","label":"Bangladesh"},{"value":"BE","label":"Belgium"},{"value":"BF","label":"Burkina Faso"},{"value":"BG","label":"Bulgaria"},{"value":"BH","label":"Bahrain"},{"value":"BI","label":"Burundi"},{"value":"BJ","label":"Benin"},{"value":"BL","label":"Saint Barthélemy"},{"value":"BM","label":"Bermuda"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BO","label":"Bolivia (Plurinational State of)"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BR","label":"Brazil"},{"value":"BS","label":"Bahamas"},{"value":"BT","label":"Bhutan"},{"value":"BV","label":"Bouvet Island"},{"value":"BW","label":"Botswana"},{"value":"BY","label":"Belarus"},{"value":"BZ","label":"Belize"},{"value":"CA","label":"Canada"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CD","label":"Congo (Democratic Republic of the)"},{"value":"CF","label":"Central African Republic"},{"value":"CG","label":"Congo"},{"value":"CH","label":"Switzerland"},{"value":"CI","label":"Côte d'Ivoire"},{"value":"CK","label":"Cook Islands"},{"value":"CL","label":"Chile"},{"value":"CM","label":"Cameroon"},{"value":"CN","label":"China"},{"value":"CO","label":"Colombia"},{"value":"CR","label":"Costa Rica"},{"value":"CU","label":"Cuba"},{"value":"CV","label":"Cabo Verde"},{"value":"CW","label":"Curaçao"},{"value":"CX","label":"Christmas Island"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czech Republic"},{"value":"DE","label":"Germany"},{"value":"DJ","label":"Djibouti"},{"value":"DK","label":"Denmark"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"DZ","label":"Algeria"},{"value":"EC","label":"Ecuador"},{"value":"EE","label":"Estonia"},{"value":"EG","label":"Egypt"},{"value":"EH","label":"Western Sahara"},{"value":"ER","label":"Eritrea"},{"value":"ES","label":"Spain"},{"value":"ET","label":"Ethiopia"},{"value":"FI","label":"Finland"},{"value":"FJ","label":"Fiji"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FM","label":"Micronesia (Federated States of)"},{"value":"FO","label":"Faroe Islands"},{"value":"FR","label":"France"},{"value":"GA","label":"Gabon"},{"value":"GD","label":"Grenada"},{"value":"GE","label":"Georgia"},{"value":"GF","label":"French Guiana"},{"value":"GG","label":"Guernsey"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GL","label":"Greenland"},{"value":"GM","label":"Gambia"},{"value":"GN","label":"Guinea"},{"value":"GP","label":"Guadeloupe"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"GR","label":"Greece"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"GT","label":"Guatemala"},{"value":"GU","label":"Guam"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HK","label":"Hong Kong"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"HN","label":"Honduras"},{"value":"HR","label":"Croatia"},{"value":"HT","label":"Haiti"},{"value":"HU","label":"Hungary"},{"value":"ID","label":"Indonesia"},{"value":"IE","label":"Ireland"},{"value":"IL","label":"Israel"},{"value":"IM","label":"Isle of Man"},{"value":"IN","label":"India"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"IQ","label":"Iraq"},{"value":"IR","label":"Iran (Islamic Republic of)"},{"value":"IS","label":"Iceland"},{"value":"IT","label":"Italy"},{"value":"JE","label":"Jersey"},{"value":"JM","label":"Jamaica"},{"value":"JO","label":"Jordan"},{"value":"JP","label":"Japan"},{"value":"KE","label":"Kenya"},{"value":"KG","label":"Kyrgyzstan"},{"value":"KH","label":"Cambodia"},{"value":"KI","label":"Kiribati"},{"value":"KM","label":"Comoros"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"KP","label":"Korea (Democratic People's Republic of)"},{"value":"KR","label":"Korea (Republic of)"},{"value":"KW","label":"Kuwait"},{"value":"KY","label":"Cayman Islands"},{"value":"KZ","label":"Kazakhstan"},{"value":"LA","label":"Lao People's Democratic Republic"},{"value":"LB","label":"Lebanon"},{"value":"LC","label":"Saint Lucia"},{"value":"LI","label":"Liechtenstein"},{"value":"LK","label":"Sri Lanka"},{"value":"LR","label":"Liberia"},{"value":"LS","label":"Lesotho"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"LV","label":"Latvia"},{"value":"LY","label":"Libya"},{"value":"MA","label":"Morocco"},{"value":"MC","label":"Monaco"},{"value":"MD","label":"Moldova (Republic of)"},{"value":"ME","label":"Montenegro"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"MG","label":"Madagascar"},{"value":"MH","label":"Marshall Islands"},{"value":"MK","label":"Macedonia (the former Yugoslav Republic of)"},{"value":"ML","label":"Mali"},{"value":"MM","label":"Myanmar"},{"value":"MN","label":"Mongolia"},{"value":"MO","label":"Macao"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MS","label":"Montserrat"},{"value":"MT","label":"Malta"},{"value":"MU","label":"Mauritius"},{"value":"MV","label":"Maldives"},{"value":"MW","label":"Malawi"},{"value":"MX","label":"Mexico"},{"value":"MY","label":"Malaysia"},{"value":"MZ","label":"Mozambique"},{"value":"NA","label":"Namibia"},{"value":"NC","label":"New Caledonia"},{"value":"NE","label":"Niger"},{"value":"NF","label":"Norfolk Island"},{"value":"NG","label":"Nigeria"},{"value":"NI","label":"Nicaragua"},{"value":"NL","label":"Netherlands"},{"value":"NO","label":"Norway"},{"value":"NP","label":"Nepal"},{"value":"NR","label":"Nauru"},{"value":"NU","label":"Niue"},{"value":"NZ","label":"New Zealand"},{"value":"OM","label":"Oman"},{"value":"PA","label":"Panama"},{"value":"PE","label":"Peru"},{"value":"PF","label":"French Polynesia"},{"value":"PG","label":"Papua New Guinea"},{"value":"PH","label":"Philippines"},{"value":"PK","label":"Pakistan"},{"value":"PL","label":"Poland"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"PN","label":"Pitcairn"},{"value":"PR","label":"Puerto Rico"},{"value":"PS","label":"Palestine, State of"},{"value":"PT","label":"Portugal"},{"value":"PW","label":"Palau"},{"value":"PY","label":"Paraguay"},{"value":"QA","label":"Qatar"},{"value":"RE","label":"Réunion"},{"value":"RO","label":"Romania"},{"value":"RS","label":"Serbia"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"SA","label":"Saudi Arabia"},{"value":"SB","label":"Solomon Islands"},{"value":"SC","label":"Seychelles"},{"value":"SD","label":"Sudan"},{"value":"SE","label":"Sweden"},{"value":"SG","label":"Singapore"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"SI","label":"Slovenia"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SK","label":"Slovakia"},{"value":"SL","label":"Sierra Leone"},{"value":"SM","label":"San Marino"},{"value":"SN","label":"Senegal"},{"value":"SO","label":"Somalia"},{"value":"SR","label":"Surilabel"},{"value":"SS","label":"South Sudan"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SV","label":"El Salvador"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"SZ","label":"Swaziland"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TD","label":"Chad"},{"value":"TF","label":"French Southern Territories"},{"value":"TG","label":"Togo"},{"value":"TH","label":"Thailand"},{"value":"TJ","label":"Tajikistan"},{"value":"TK","label":"Tokelau"},{"value":"TL","label":"Timor-Leste"},{"value":"TM","label":"Turkmenistan"},{"value":"TN","label":"Tunisia"},{"value":"TO","label":"Tonga"},{"value":"TR","label":"Turkey"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TV","label":"Tuvalu"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"UA","label":"Ukraine"},{"value":"UG","label":"Uganda"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States of America"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VA","label":"Holy See"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"VE","label":"Venezuela (Bolivarian Republic of)"},{"value":"VG","label":"Virgin Islands (British)"},{"value":"VI","label":"Virgin Islands (U.S.)"},{"value":"VN","label":"Viet Nam"},{"value":"VU","label":"Vanuatu"},{"value":"WF","label":"Wallis and Futuna"},{"value":"WS","label":"Samoa"},{"value":"YE","label":"Yemen"},{"value":"YT","label":"Mayotte"},{"value":"ZA","label":"South Africa"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]};

/***/ }),

/***/ "./blocks/shared/js/utilities.js":
/*!***************************************!*\
  !*** ./blocks/shared/js/utilities.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Utility Function
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — These are functions used several times across components.  So to keep
 * it DRY, those functinos will be stored here.
 */
var self = module.exports = {
  /**
   * Some data we get back from the API needs to be cleaned up,
   * as it still has html wrapped around it.  This helper function will
   * take care of that making it safe for us to use.
   * @param {HTML}
   */
  decodeHtml: function decodeHtml(data) {
    return data.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  },

  /**
   * Get YouTube ID from various YouTube URL
   * @author: takien
   * @url: http://takien.com
   * For PHP YouTube parser, go here http://takien.com/864
   * $param {URL}
   */
  YouTubeGetID: function YouTubeGetID(url) {
    var ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }

    return ID;
  },

  /**
   * Format Dates
   * WordPress gives us the date in UTC format in the rest-api, this function will take
   * that and return a formatted version.
   * @param {date}
   */
  formatDate: function formatDate(date) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dateObj = new Date(date);
    return "".concat(monthNames[dateObj.getMonth()], " ").concat(dateObj.getDate(), ", ").concat(dateObj.getFullYear());
  },

  /**
   * Copy Link
   * Our social share icons also have a button to copy the current page link.  This
   * function will do that magic stuff.
   */
  copyingIsntAlwaysCheating: function copyingIsntAlwaysCheating(target) {
    /// get the url
    var url = target.getAttribute('href'); /// copy the url

    var temp = document.createElement('input');
    temp.style.position = 'absolute';
    temp.style.top = '-99999px';
    var att = document.createAttribute('value');
    att.value = url;
    var el = document.querySelector('body');
    el.appendChild(temp);
    temp.setAttributeNode(att);
    temp.select();
    document.execCommand('copy');
    temp.remove();
    target.classList.add('wobble');
    setTimeout(function () {
      target.classList.remove('wobble');
    }, 1500);
  },

  /**
   * With our blocks being used on the BE and FE with REACT, we
   * occassionally need to detect if we are in gutenberg before,
   * doing something.  For instance, we dont want to push new urls
   * to browser history api if in wp-admin.
   */
  isGutenbergActive: function isGutenbergActive() {
    return document.body.classList.contains('block-editor-page');
  },

  /**
   * Validate emails
   * Run the value of email input fields through this function to ensure the
   * the validity of them.
   */
  validateEmail: function validateEmail(test) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(test).toLowerCase());
  },

  /**
   * Clean up input string, removing white space and special characters.
   */
  cleanInput: function cleanInput(data) {
    data = data.trim();
    data = data.replace(/<(?:.|\n)*?>/gm, '');
    return data;
  },

  /**
   * Excerpt Cleanup
   * Limit word count and remove html.
   */
  tidyExcerpt: function tidyExcerpt(data) {
    data = data.replace(/<[^>]*>?/gm, '');
    data = data.split(' ').splice(0, 15).join(' ');
    return data;
  }
};

/***/ }),

/***/ "./blocks/shop/components/Checkbox.js":
/*!********************************************!*\
  !*** ./blocks/shop/components/Checkbox.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Shop — Filter Checkbox
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Toggle checkboxes to activate filters on the shop grid.
 * @props {string} props.filterType
 * @props {string} props.id
 * @props {string} props.name
 * @props {integer} props.index
 * @props {func} props.filter
 */
var Checkbox = function Checkbox(props) {
  return wp.element.createElement("label", {
    className: "check-parent",
    "data-type": props.filterType,
    "data-filter-by": props.id,
    "data-filter-name": props.name,
    key: props.index,
    onClick: props.filter
  }, wp.element.createElement("input", {
    type: "checkbox",
    name: props.id,
    value: props.name
  }), wp.element.createElement("span", {
    className: "fancy-check"
  }), props.filterType === 'retailersFilterList' ? "".concat(props.name) : props.amount !== undefined ? "".concat(props.name, " (").concat(props.amount, ")") : "".concat(props.name));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./blocks/shop/components/Search.js":
/*!******************************************!*\
  !*** ./blocks/shop/components/Search.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_components_ClearInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/ClearInput */ "./blocks/shared/components/ClearInput.js");
/**
 * Shop — Search
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Search input field to filter products in the shop grid.
 * @props {func} props.submit
 * @props {text} props.value
 * @props {func} props.update
 */


var Search = function Search(props) {
  return wp.element.createElement("form", {
    onSubmit: props.submit
  }, wp.element.createElement(_shared_components_ClearInput__WEBPACK_IMPORTED_MODULE_0__["default"], {
    type: "text",
    value: props.value,
    placeholder: "Search products",
    onChange: props.update
  }), wp.element.createElement("button", {
    type: "submit",
    onClick: props.submit
  }, "search"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./blocks/shop/components/Shop.js":
/*!****************************************!*\
  !*** ./blocks/shop/components/Shop.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shop; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_components_ShopCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/ShopCard */ "./blocks/shared/components/ShopCard.js");
/* harmony import */ var _shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/ToggleBox */ "./blocks/shared/components/ToggleBox.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_components_SelectBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/SelectBox */ "./blocks/shared/components/SelectBox.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination */ "./blocks/shop/components/pagination.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ "./blocks/shop/components/Search.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Checkbox */ "./blocks/shop/components/Checkbox.js");
/* harmony import */ var _shared_countries_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/countries.json */ "./blocks/shared/countries.json");
var _shared_countries_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/countries.json */ "./blocks/shared/countries.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Shop
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This component receives block attributes as props and updates it state in response.
 * We do not update the attributes from this component, we only receive them.
 * @props {title} this.props.title
 * @props {load} this.props.load
 * @props {order} this.props.order
 * @props {orderby} this.props.orderby
 */


var scroller = react_scroll__WEBPACK_IMPORTED_MODULE_1__["scroller"];










var Shop =
/*#__PURE__*/
function (_Component) {
  _inherits(Shop, _Component);

  function Shop(props) {
    var _this;

    _classCallCheck(this, Shop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shop).call(this, props));
    _this.state = {
      postsLoading: true,
      posts: [],
      totalPosts: '',
      resultsPage: 1,
      totalResultPages: 0,
      filtersLoading: true,
      categoriesFilterList: [],
      retailersFilterList: [],
      searchText: '',
      productCategories: [],
      retailers: [],
      reorderProducts: 'desc',
      countryValue: document.querySelector('body').getAttribute('data-country'),
      countryText: 'Choose a country',
      orderValue: '',
      orderText: 'Sort by',
      openFilter: false,
      noPosts: false
    };
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.searchField = _this.searchField.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitSearch = _this.submitSearch.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.reorderProducts = _this.reorderProducts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateCountry = _this.updateCountry.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.nextPage = _this.nextPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.prevPage = _this.prevPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchPosts = _this.fetchPosts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.openFilter = _this.openFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearAllFiltersAction = _this.clearAllFiltersAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Here we are making our initial API requests before the componet actually mounts,
   * this is because our component is built using this data, so it's necessary in this
   * order.
   */


  _createClass(Shop, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchPosts();
      this.getStoreFilters();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var country = document.querySelector('.gue-dropdown');
      this.setState({
        countryValue: country[country.selectedIndex].value !== '' ? country[country.selectedIndex].value : '',
        countryText: country[country.selectedIndex].value !== '' ? country[country.selectedIndex].text : 'Choose a country'
      });
    }
    /**
     * We watch the component for any changes in the postType or load amount props,
     * these are set outside of this component in the block attributes.
     * @param {prevProps} prevProps
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.load !== this.props.load || prevProps.order !== this.props.order || prevProps.orderby !== this.props.orderby) {
        /// reset filters and taxonomies and grab fresh data
        this.setState({
          productCategories: [],
          retailers: [],
          categoriesFilterList: [],
          retailersFilterList: [],
          postsLoading: true,
          filtersLoading: true,
          forceScroll: false
        });
        this.fetchPosts();
        this.getStoreFilters();
      }
    }
    /**
     * Fetch the initial state, reload and append products.
     * These actions are determined on whether an event has been triggered or the component
     * has just updated (i.e. settings have been changed).
     * @param {e} event
     */

  }, {
    key: "fetchPosts",
    value: function fetchPosts(e, filter) {
      var _this2 = this;

      this.setState({
        postsLoading: true,
        noPosts: false
      });

      if (this.state.forceScroll) {
        scroller.scrollTo('shop-grid', {
          duration: 1500,
          smooth: 'easeInOutQuad',
          offset: -100
        });
      }

      try {
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: "/guerrilla/v1/get-store-products?post_type=products&per_page=".concat(this.props.load, "&page=").concat(this.state.resultsPage, "&order=").concat(this.props.order, "&orderby=").concat(this.props.orderby, "&categoriesFilterList=").concat(this.state.categoriesFilterList, "&retailersFilterList=").concat(this.state.retailersFilterList, "&searchText=").concat(this.state.searchText, "&reorder=").concat(this.state.reorderProducts, "&country=").concat(this.state.countryValue),
          parse: false
        }).then(function (res) {
          _this2.setState({
            totalPosts: res.headers.get('X-WP-Total') ? parseInt(res.headers.get('X-WP-Total'), 10) : '',
            totalResultPages: res.headers.get('X-WP-TotalPages') ? parseInt(res.headers.get('X-WP-TotalPages'), 10) : ''
          });

          return res.json();
        }).then(function (posts) {
          _this2.setState({
            posts: posts,
            postsLoading: false,
            forceScroll: false
          });
        }).catch(function (error) {
          var errorText;

          if (error.status == '404') {
            errorText = 'Sorry, there are no items to show.';
          } else {
            errorText = 'Sorry, there seems to be a problem loading this content.';
          }

          _this2.setState({
            posts: [],
            noPosts: true,
            postsLoading: false,
            errorMessage: errorText
          });
        });
      } catch (error) {
        console.log(error);
        this.setState({
          postsLoading: false
        });
      }
    }
    /**
     * Here we are fetching all taxonomy terms (category names, ids etc) and
     * taxonomy names (category, tag etc) for the selected post_type.  This data will
     * then be used to build filter items and filter the grid when activated.
     */

  }, {
    key: "getStoreFilters",
    value: function getStoreFilters() {
      var _this3 = this;

      try {
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: "/guerrilla/v1/get-store-filters?retailersFilterList=".concat(this.state.retailersFilterList, "&categoriesFilterList=").concat(this.state.categoriesFilterList, "&country=").concat(this.state.countryValue)
        }).then(function (res) {
          _this3.setState({
            productCategories: undefined !== res.categories && res.categories.length > 0 ? res.categories : [],
            retailers: undefined !== res.retailers && res.retailers.length > 0 ? res.retailers : []
          });
        }).then(function () {
          _this3.setState({
            filtersLoading: false
          });
        }).catch(function (error) {
          _this3.setState({
            filtersLoading: false
          });

          console.log(error);
        });
      } catch (error) {
        console.log(error);
        this.setState({
          filtersLoading: false
        });
      }
    }
    /**
     * This function will build our filter items, this will be used inside
     * another function, looping over the contents of our cats and tags contents
     * in state.
     */

  }, {
    key: "listItems",
    value: function listItems(id, name, index, filterType, amount) {
      return id > 0 && wp.element.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: id,
        name: name,
        index: index,
        filterType: filterType,
        filter: this.applyFilter,
        amount: amount
      });
    }
    /**
     * We build our filter menu looping over the contents of cats and tags
     * in state and building items for them. These should be included between
     * <nav></nav> in the render method.
     */

  }, {
    key: "buildCategoryList",
    value: function buildCategoryList() {
      var _this4 = this;

      return this.state.productCategories.length > 0 && this.state.productCategories.map(function (item, index) {
        return _this4.listItems(item.term_id, item.name, index, 'categoriesFilterList', item.product_count, null);
      });
    }
    /**
     * We build our filter menu looping over the contents of cats and tags
     * in state and building items for them. These should be included between
     * <nav></nav> in the render method.
     */

  }, {
    key: "buildReatilersList",
    value: function buildReatilersList() {
      var _this5 = this;

      return this.state.retailers.length > 0 && this.state.retailers.map(function (item, index) {
        return _this5.listItems(item.term_id, item.name, index, 'retailersFilterList', item.product_count, null);
      });
    }
    /**
     * Update and apply filters
     *
     * This function is uses to update the filter lists, respectively, and then fetch a new
     * batch of posts based on those params.
     *
     * It is used on the checkboxes and filter pills.  It's based on the type and id of the categories
     * which are added to the targets as data attributes.
     */

  }, {
    key: "applyFilter",
    value: function applyFilter(e) {
      var _this$setState,
          _this6 = this;

      e.preventDefault(); //1. get target

      var target = e.target; //2. define the type of filter selected

      var type = target.getAttribute('data-type'); //3. define item id

      var filter = target.getAttribute('data-filter-by'); //4. get the current filter list for the selected type.

      var currentList = this.state[type] !== undefined && this.state[type].length > 0 ? _toConsumableArray(this.state[type]) : []; //5. find matching checkbox if button used to clear.

      var checkbox = document.querySelector("label[data-filter-by=\"".concat(filter, "\"] input")); //6. check if the selected checkbox is already active and remove if so.  If not, add active state.

      if (checkbox.checked == false) {
        checkbox.checked = true;
      } else if (checkbox.checked == true) {
        checkbox.checked = false;
      } //7. Look to see whether the item is being added or removed from its list


      var matcher = function matcher(data) {
        return data == filter;
      }; // check if it exists to see if we are adding or removing from state


      if (currentList.some(matcher)) {
        currentList = currentList.filter(function (item) {
          return item != filter;
        });
      } else {
        currentList.push(filter);
      } //8. Update state and fetch posts with filters


      this.setState((_this$setState = {}, _defineProperty(_this$setState, type, _toConsumableArray(currentList)), _defineProperty(_this$setState, "totalPosts", ''), _defineProperty(_this$setState, "resultsPage", 1), _defineProperty(_this$setState, "totalResultPages", 0), _this$setState), function () {
        _this6.fetchPosts();

        _this6.getStoreFilters();
      });
    }
    /**
     * Build buttons to display in top section of filter sidebar to enable
     * users to quickly see all selected filters.
     * @param {text} filterId
     * @param {text} type
     * @param {text} filterType
     * @param {int} index
     */

  }, {
    key: "buttonItems",
    value: function buttonItems(filterId, type, filterType, index) {
      // get name of filter.
      var filterName = this.state[type].map(function (item) {
        if (item.term_id == parseFloat(filterId)) {
          return item.name;
        }
      });
      return wp.element.createElement("a", {
        className: "all-selected-buttons",
        "data-type": filterType,
        "data-filter-by": parseFloat(filterId),
        key: index,
        onClick: this.applyFilter
      }, filterName);
    }
    /**
     * All Selected Categories
     * This is the top section of the filter sidebar.
     * @param {*} filter
     */

  }, {
    key: "AllSelectedCategories",
    value: function AllSelectedCategories() {
      var _this7 = this;

      return this.state.categoriesFilterList.length > 0 && this.state.categoriesFilterList.map(function (item, index) {
        return _this7.buttonItems(item, 'productCategories', 'categoriesFilterList', index);
      });
    }
    /**
     * All Selected Retailers
     * This is the top section of the filter sidebar.
     * @param {*} filter
     */

  }, {
    key: "AllSelectedRetailers",
    value: function AllSelectedRetailers() {
      var _this8 = this;

      return this.state.retailersFilterList.length > 0 && this.state.retailersFilterList.map(function (item, index) {
        return _this8.buttonItems(item, 'retailers', 'retailersFilterList', index);
      });
    }
    /**
     * Clear All
     */

  }, {
    key: "clearAllFilters",
    value: function clearAllFilters() {
      return this.state.categoriesFilterList.length > 0 || this.state.retailersFilterList.length > 0 ? wp.element.createElement("a", {
        className: "all-selected-buttons clear-all",
        onClick: this.clearAllFiltersAction
      }, "Clear all") : '';
    }
  }, {
    key: "clearAllFiltersAction",
    value: function clearAllFiltersAction() {
      var _this9 = this;

      // get all checkboxes so we can remove selected state.
      var checkboxes = document.querySelector('.wp-block-bbc-shop').querySelectorAll('input[type="checkbox"]');
      this.setState({
        retailersFilterList: [],
        categoriesFilterList: [],
        searchText: ''
      }, function () {
        for (var index = 0; index < checkboxes.length; index++) {
          var input = checkboxes[index];

          if (input.checked == true) {
            input.checked = false;
          }
        }

        _this9.fetchPosts();
      });
    }
    /**
     * This function will be reponsible for building the grid layout and tile structure.
     * It will also look at state to see which filter has been selected and update the
     * grid accordingly.
     */

  }, {
    key: "getPosts",
    value: function getPosts(filter) {
      return this.state.posts.length > 0 && this.state.posts.map(function (post, index) {
        return wp.element.createElement(_shared_components_ShopCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post,
          index: index,
          gridBlock: true
        });
      });
    }
    /**
     * Number of Results on the page
     * Here we'll be using the total amount of posts in state
     * and the total available to show how many results are yet to be displayed
     */

  }, {
    key: "productsFoundCount",
    value: function productsFoundCount() {
      return this.state.posts.length > 0 && null !== this.state.totalPosts && wp.element.createElement("p", {
        className: "result-count"
      }, "".concat(this.state.totalPosts, " ").concat(this.state.posts.length > 1 ? 'Products' : 'Product'));
    }
    /**
     * Search Products
     * Update value of input field on change.
     */

  }, {
    key: "searchField",
    value: function searchField(e) {
      var _this10 = this;

      //   e.preventDefault();
      var search = e.target;
      this.setState({
        searchText: search.value
      }, function () {
        _this10.state.searchText === '' && _this10.submitSearch(e);
      });
    }
    /**
     * Submit the search query to recativated fetching products
     * that will now be targeted by the search criteria
     */

  }, {
    key: "submitSearch",
    value: function submitSearch(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }

      this.fetchPosts();
    }
    /**
     * Update order of products in grid and reactivate fetching posts to
     * update grid items.
     */

  }, {
    key: "reorderProducts",
    value: function reorderProducts(e) {
      var _this11 = this;

      e.preventDefault();
      var order = e.target;
      this.setState({
        orderValue: order[order.selectedIndex].value,
        orderText: order[order.selectedIndex].text,
        reorderProducts: order[order.selectedIndex].value,
        totalPosts: '',
        resultsPage: 1,
        totalResultPages: 0
      }, function () {
        _this11.fetchPosts();
      });
    }
    /**
     * Countries Dropdown Options
     * The countries dropdown is created using a json list of all countries. We
     * loop over this spitting out an option element for each.
     */

  }, {
    key: "countryList",
    value: function countryList() {
      var country = document.querySelector('body').getAttribute('data-country');

      var selectOption = function selectOption(country, check) {
        if (country && country === check) {
          return true;
        }
      };

      var newArray = [];
      this.props.countries.map(function (country) {
        newArray.push(_shared_countries_json__WEBPACK_IMPORTED_MODULE_10__.options.filter(function (item) {
          return item.value === country;
        }));
      });
      return newArray.map(function (item) {
        return wp.element.createElement("option", {
          selected: selectOption(country, item[0].value),
          value: item[0].value
        }, item[0].label);
      });
    }
    /**
     * Update the selected country dropdown box and recactivate fetching products
     * for the chosen region.
     */

  }, {
    key: "updateCountry",
    value: function updateCountry(e) {
      var _this12 = this;

      var target = e.target;
      this.setState({
        countryValue: Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_5__["cleanInput"])(target[target.selectedIndex].value),
        countryText: target[target.selectedIndex].text,
        totalPosts: '',
        resultsPage: 1,
        totalResultPages: 0
      }, function () {
        _this12.fetchPosts();

        _this12.getStoreFilters();
      });
    }
  }, {
    key: "groupDropdowns",
    value: function groupDropdowns() {
      return [wp.element.createElement("span", {
        className: "dropdown"
      }, wp.element.createElement("p", {
        className: "selection ".concat(this.state.countryValue !== '' ? 'selected' : '')
      }, this.state.countryText), wp.element.createElement("select", {
        className: "gue-dropdown",
        onChange: this.updateCountry
      }, wp.element.createElement("option", null, "Choose a country"), this.countryList())), wp.element.createElement(_shared_components_SelectBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: this.state.orderValue,
        defaultText: this.state.orderText,
        options: [wp.element.createElement("option", {
          value: "desc"
        }, "Newest first"), wp.element.createElement("option", {
          value: "price-asc"
        }, "Cost (Low to High)"), wp.element.createElement("option", {
          value: "price-desc"
        }, "Cost (High to Low)")],
        updateOptions: this.reorderProducts
      })];
    }
    /**
     * Toggle Mobile Filter Open
     */

  }, {
    key: "openFilter",
    value: function openFilter(e) {
      document.querySelector('body').classList.toggle('no-scroll');
      var open = this.state.openFilter;
      this.setState({
        openFilter: open ? false : true
      });
    }
    /**
     * We will only show the load more button if our current results page
     * is less than the total resulsts for the current post type.
     * @param {e} e
     */

  }, {
    key: "nextPage",
    value: function nextPage() {
      var _this13 = this;

      this.state.resultsPage < this.state.totalResultPages && this.setState({
        resultsPage: this.state.resultsPage + 1,
        forceScroll: true
      }, function () {
        _this13.fetchPosts();
      });
    }
    /**
     * We will only show the load more button if our current results page
     * is less than the total resulsts for the current post type.
     * @param {e} e
     */

  }, {
    key: "prevPage",
    value: function prevPage() {
      var _this14 = this;

      this.state.resultsPage > 1 && this.setState({
        resultsPage: this.state.resultsPage - 1,
        forceScroll: true
      }, function () {
        _this14.fetchPosts();
      });
    }
    /**
     * Decide if the loading state is present or not
     * This is based on two factors.  Has the posts data been fetched from the API and
     * has the Fitlers data been fetched from the API (if there are any)
     */

  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.state.postsLoading === false && this.state.filtersLoading === false ? false : this.state.noPosts === true ? false : true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.isLoading();
      return [
      /**
       * Back Button Section
       */
      wp.element.createElement("div", {
        className: "button-section shop-qtr"
      }, wp.element.createElement("a", {
        className: "btn btn__primary btn__icon--back",
        href: "/grown-ups"
      }, "Grown ups")),
      /**
       * Main Title Section
       */
      wp.element.createElement("div", {
        className: "title-section shop-hlf"
      }, this.props.title && wp.element.createElement("h1", null, this.props.title)),
      /**
       * Search Box Section
       */
      wp.element.createElement("div", {
        className: "search-section shop-qtr"
      }, wp.element.createElement(_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
        submit: this.submitSearch,
        update: this.searchField,
        value: this.state.searchText
      })),
      /**
       * Filter Title
       */
      wp.element.createElement("div", {
        className: "filter-title-section shop-qtr"
      }, wp.element.createElement("h2", null, "Filter by"), wp.element.createElement("a", {
        className: "btn btn__primary filter",
        onClick: this.openFilter
      }, "Filter")),
      /**
       * Shop Ordering Options Section
       */
      wp.element.createElement("div", {
        className: "options-section shop-3-qtr"
      }, this.productsFoundCount(), this.groupDropdowns()),
      /**
       * Filter Options Section
       */
      wp.element.createElement("div", {
        className: "filter-sidebar shop-qtr",
        "data-loading": isLoading,
        "data-open": this.state.openFilter
      }, wp.element.createElement("div", {
        className: "active-filters"
      }, wp.element.createElement("h4", null, "Filters"), wp.element.createElement("a", {
        className: "mobile-close-filter",
        onClick: this.openFilter
      }, "close"), this.clearAllFilters(), this.AllSelectedCategories(), this.AllSelectedRetailers()), this.groupDropdowns(), wp.element.createElement(_shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "categories-dropdown",
        title: "Categories",
        content: this.buildCategoryList()
      }), wp.element.createElement(_shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "retailers-dropdown",
        title: "Retailers",
        content: this.buildReatilersList()
      }), wp.element.createElement("div", {
        className: "show-container"
      }, wp.element.createElement("a", {
        className: "btn btn__primary show",
        onClick: this.openFilter
      }, "Show ".concat(this.state.totalPosts, " items")))),
      /**
       * Products Section
       */
      wp.element.createElement("div", {
        className: "shop-grid shop-3-qtr",
        name: "shop-grid",
        "data-loading": isLoading
      }, this.state.noPosts && this.state.searchText !== '' && wp.element.createElement("div", {
        className: "search-no-posts"
      }, wp.element.createElement("p", null, "The term - ", wp.element.createElement("strong", null, this.state.searchText), " - did not find any matches."), wp.element.createElement("p", null, wp.element.createElement("strong", null, "SUGGESTIONS:")), wp.element.createElement("ul", null, wp.element.createElement("li", null, "Make sure that all words are spelled correctly."), wp.element.createElement("li", null, "Try different keywords."), wp.element.createElement("li", null, "Try more general keywords."), wp.element.createElement("li", null, "Try fewer keywords.")), wp.element.createElement("button", {
        class: "clear-all btn btn__primary ",
        onClick: this.clearAllFiltersAction
      }, "Shop all products")), this.getPosts(), isLoading && wp.element.createElement("div", {
        className: "sk-chasing-dots"
      }, wp.element.createElement("div", {
        className: "sk-child sk-dot1"
      }), wp.element.createElement("div", {
        className: "sk-child sk-dot2"
      }))), wp.element.createElement(_pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
        prevPage: this.prevPage,
        nextPage: this.nextPage,
        currentPage: this.state.resultsPage,
        totalPages: this.state.totalResultPages
      })];
    }
  }]);

  return Shop;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/shop/components/pagination.js":
/*!**********************************************!*\
  !*** ./blocks/shop/components/pagination.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Shop — Pagination
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Navigate through the wordpress API pages uses next and previous page buttons.
 * @props {title} this.props.title
 * @props {load} this.props.load
 * @props {order} this.props.order
 * @props {orderby} this.props.orderby
 */
var Pagination = function Pagination(props) {
  var disableMe = function disableMe(type) {
    if (type === 'prev') {
      if (props.currentPage === 1) {
        return 'btn__disabled';
      } else {
        return '';
      }
    }

    if (type === 'next') {
      if (props.currentPage >= props.totalPages) {
        return 'btn__disabled';
      } else {
        return '';
      }
    }
  };

  return props.totalPages > 1 && wp.element.createElement("div", {
    className: "button-group shop-3-qtr"
  }, wp.element.createElement("div", {
    className: "pagination"
  }, wp.element.createElement("button", {
    className: "prev ".concat(disableMe('prev')),
    onClick: props.prevPage
  }, "prev"), wp.element.createElement("p", null, props.currentPage), wp.element.createElement("button", {
    className: "next ".concat(disableMe('next')),
    onClick: props.nextPage
  }, "next"), wp.element.createElement("span", {
    className: "total-page-count"
  }, "of ".concat(null !== props.totalPages ? props.totalPages : 0))), wp.element.createElement("button", {
    className: "next-page btn btn__primary ".concat(disableMe('next')),
    onClick: props.nextPage
  }, "Next"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./blocks/shop/frontend.js":
/*!*********************************!*\
  !*** ./blocks/shop/frontend.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Shop */ "./blocks/shop/components/Shop.js");
/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being redered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var shop = document.getElementById('fe-wp-block-bbc-shop');

  if (!admin && shop) {
    /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.
    var settings = JSON.parse(document.getElementById('fe-wp-block-bbc-shop').getAttribute('data-props'));
    ReactDOM.render(wp.element.createElement(_components_Shop__WEBPACK_IMPORTED_MODULE_0__["default"], settings), document.getElementById('fe-wp-block-bbc-shop'));
  }
});

/***/ }),

/***/ "./blocks/static-events-grid/components/Checkbox.js":
/*!**********************************************************!*\
  !*** ./blocks/static-events-grid/components/Checkbox.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Shop — Filter Checkbox
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Toggle checkboxes to activate filters on the shop grid.
 * @props {string} props.filterType
 * @props {string} props.id
 * @props {string} props.name
 * @props {integer} props.index
 * @props {func} props.filter
 */



var Checkbox = function Checkbox(_ref) {
  var filterType = _ref.filterType,
      id = _ref.id,
      name = _ref.name,
      index = _ref.index,
      filter = _ref.filter,
      activeFilters = _ref.activeFilters,
      amount = _ref.amount;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (id && !activeFilters.includes(id)) {
      setActive(false);
    }
  }, [activeFilters]);

  var handleClick = function handleClick(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();

      if (activeFilters.includes(id)) {
        var update = activeFilters.filter(function (item) {
          return item !== id;
        });
        filter(update);
      } else {
        var _update = _toConsumableArray(activeFilters);

        _update.push(id);

        filter(_update);
      }

      setActive(!active);
    }
  };

  return wp.element.createElement("label", {
    className: "check-parent",
    "data-type": filterType,
    "data-filter-by": id,
    "data-filter-name": name,
    key: index,
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, wp.element.createElement("input", {
    type: "checkbox",
    name: id,
    value: name,
    "data-active": active
  }), wp.element.createElement("span", {
    className: "fancy-check"
  }), amount !== undefined ? "".concat(name, " (").concat(amount, ")") : "".concat(name));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./blocks/static-events-grid/components/EventsGrid.js":
/*!************************************************************!*\
  !*** ./blocks/static-events-grid/components/EventsGrid.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./blocks/static-events-grid/components/Checkbox.js");
/* harmony import */ var _shared_components_EventCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/EventCard */ "./blocks/shared/components/EventCard.js");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Radio */ "./blocks/static-events-grid/components/Radio.js");
/* harmony import */ var _shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/ToggleBox */ "./blocks/shared/components/ToggleBox.js");
/* harmony import */ var _shared_countries_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/countries.json */ "./blocks/shared/countries.json");
var _shared_countries_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/countries.json */ "./blocks/shared/countries.json", 1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var EventsGrid = function EventsGrid(_ref) {
  var events = _ref.events,
      filters = _ref.filters,
      title = _ref.title,
      countries = _ref.countries;
  var eventGrid = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      updateLoading = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(countries.includes(document.querySelector('body').getAttribute('data-country')) ? document.querySelector('body').getAttribute('data-country') : 'all'),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedCountry = _useState4[0],
      updateSelectedCountry = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      activeFilters = _useState6[0],
      updateActiveFilters = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      eventCount = _useState8[0],
      updateEventCount = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      mobileOpen = _useState10[0],
      updateMobileOpen = _useState10[1];

  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      groupedEvents = _useState12[0],
      setGroupedEvents = _useState12[1]; // actions on load


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var found = false;
    var radioButtons = document.querySelectorAll('.check-parent');
    radioButtons && radioButtons.length > 0 && radioButtons.forEach(function (item) {
      var field = item.querySelector('input');

      if (selectedCountry === field.value) {
        field.click();
        found = true;
      }
    });

    if (radioButtons && radioButtons.length > 0 && !found) {
      var field = radioButtons[0].querySelector('input');
      field.click();
    }
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (events && filters) {
      updateLoading(false);
    }

    setTimeout(function () {
      update_event_count();
    }, 500);
  }, [events, filters]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      update_event_count();
    }, 500);
  }, [activeFilters]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    updateActiveFilters([]);
  }, [selectedCountry]);
  /*
   * useEffect hook that sort the cards by year
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (events.length > 0) {
      var grouped = [];
      events.map(function (event) {
        var start_date = event.acf.event_start_date || '';
        var date_array = start_date.split('/');
        var event_year = date_array[date_array.length - 1];

        if (grouped.length > 0) {
          var found = false;
          grouped.forEach(function (group, i) {
            if (group.year === event_year) {
              found = true;
              grouped[i].events = [].concat(_toConsumableArray(grouped[i].events), [event]);
            }
          });

          if (!found) {
            grouped.push({
              year: event_year,
              events: [event]
            });
          }
        } else {
          grouped.push({
            year: event_year,
            events: [event]
          });
        }
      });
      setGroupedEvents(grouped);
    }
  }, [events]);

  var update_event_count = function update_event_count() {
    if (eventGrid && eventGrid.current && eventGrid.current.childNodes) {
      var counter = 0;
      var groups = eventGrid.current.childNodes || [];
      groups.forEach(function (group) {
        if (group.childElementCount) {
          counter += group.childElementCount;
        }
      });
      updateEventCount(counter);
    }
  };
  /*
   * New event cards function in order to group cards by year
   */


  var events_cards = function events_cards(grouped_events) {
    if (grouped_events && grouped_events.length > 0) {
      return grouped_events.map(function (item, index) {
        return wp.element.createElement(_shared_components_EventCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          post: item,
          index: index,
          activeFilters: activeFilters
        });
      });
    }
  };
  /**
   * Countries Dropdown Options
   * The countries dropdown is created using a json list of all countries. We
   * loop over this spitting out an option element for each.
   */


  var countryList = function countryList() {
    var newArray = [];
    countries.map(function (country) {
      newArray.push(_shared_countries_json__WEBPACK_IMPORTED_MODULE_5__.options.filter(function (item) {
        return item.value === country;
      }));
    });
    return newArray.map(function (item) {
      return {
        value: item[0].value,
        name: item[0].label,
        isDefault: selectedCountry === item[0].value
      };
    });
  };

  var countryDropDown = function countryDropDown(id, name, index, filterType) {
    var options = countryList();
    options.unshift({
      value: 'all',
      name: 'Choose a country',
      isDefault: true
    });
    return options.length > 0 && options.map(function (item, index) {
      return wp.element.createElement(_Radio__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: id,
        index: index,
        filterType: filterType,
        setDefault: item.isDefault,
        filter: updateSelectedCountry,
        group: "countries",
        name: item.name,
        value: item.value
      });
    });
  };
  /**
   * This function will build our filter items, this will be used inside
   * another function, looping over the contents of our cats and tags contents
   * in state.
   */


  var listItems = function listItems(id, name, index, filterType, amount) {
    return id > 0 && wp.element.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: id,
      name: name,
      index: index,
      filterType: filterType,
      activeFilters: activeFilters,
      filter: updateActiveFilters,
      amount: amount
    });
  };
  /**
   * We build our filter menu looping over the contents of cats and tags
   * in state and building items for them. These should be included between
   * <nav></nav> in the render method.
   */


  var buildFilters = function buildFilters() {
    return filters && filters.length > 0 && filters.map(function (item) {
      if (item.country === selectedCountry.value) {
        return wp.element.createElement(_shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: item.type,
          title: "State",
          content: item.filters.map(function (filter, index) {
            var filterID = filter.id || filter.term_id;
            return listItems(filterID, filter.name, index, 'statesFilterList', filter.count);
          })
        });
      }
    });
  };

  var all_selected_filters = function all_selected_filters() {
    if (activeFilters && activeFilters.length > 0) {
      return filters.map(function (item) {
        var found = item.filters.filter(function (x) {
          var ID = x.id || x.term_id;

          if (activeFilters.includes(ID)) {
            return x;
          }
        });
        return found.length > 0 && found.map(function (y) {
          var ID = y.id || y.term_id;
          return wp.element.createElement("a", {
            className: "all-selected-buttons",
            "data-filter-by": parseFloat(ID),
            key: ID,
            onClick: function onClick() {
              updateActiveFilters(activeFilters.filter(function (z) {
                return z !== ID;
              }));
            }
          }, y.name);
        });
      });
    }
  };

  var clear_all_filters = function clear_all_filters() {
    if (activeFilters.length > 0) {
      return wp.element.createElement("a", {
        className: "all-selected-buttons clear-all",
        onClick: function onClick() {
          updateActiveFilters([]);
        }
      }, "Clear all");
    }
  };

  var openFilter = function openFilter(e) {
    document.querySelector('body').classList.toggle('no-scroll');
    updateMobileOpen(!mobileOpen);
  };

  return wp.element.createElement("div", {
    className: "static-events-grid__inner"
  }, wp.element.createElement("div", {
    className: "title-section events-full"
  }, title && wp.element.createElement("h1", null, title)), wp.element.createElement("div", {
    className: "filter-title-section events-qtr"
  }, wp.element.createElement("h2", null, "Filter by"), wp.element.createElement("a", {
    className: "btn btn__primary filter",
    onClick: function onClick(e) {
      openFilter(e);
    }
  }, "Filter")), wp.element.createElement("div", {
    className: "options-section events-3-qtr"
  }, eventCount, " Results"), wp.element.createElement("div", {
    className: "filter-sidebar events-qtr",
    "data-open": mobileOpen
  }, wp.element.createElement("div", {
    className: "active-filters"
  }, wp.element.createElement("h4", null, "Filters"), wp.element.createElement("a", {
    className: "mobile-close-filter",
    onClick: function onClick(e) {
      openFilter(e);
    }
  }, "close"), clear_all_filters(), all_selected_filters()), wp.element.createElement(_shared_components_ToggleBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "categories-dropdown",
    title: "Country",
    content: countryDropDown()
  }), buildFilters(), wp.element.createElement("div", {
    className: "show-container"
  }, wp.element.createElement("a", {
    className: "btn btn__primary show",
    onClick: function onClick(e) {
      return openFilter(e);
    }
  }, "Show ".concat(eventCount, " items")))), wp.element.createElement("div", {
    className: "events-grid events-3-qtr",
    name: "events-grid",
    ref: eventGrid
  }, !loading && groupedEvents && groupedEvents.length > 0 ? groupedEvents.map(function (group, index) {
    return wp.element.createElement("div", {
      className: "grouped-events",
      key: index,
      "data-year": group.year
    }, events_cards(group.events));
  }) : wp.element.createElement("div", {
    className: "sk-chasing-dots"
  }, wp.element.createElement("div", {
    className: "sk-child sk-dot1"
  }), wp.element.createElement("div", {
    className: "sk-child sk-dot2"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EventsGrid);

/***/ }),

/***/ "./blocks/static-events-grid/components/Radio.js":
/*!*******************************************************!*\
  !*** ./blocks/static-events-grid/components/Radio.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Events — Filter Radio
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — Toggle radio to activate filters on the events grid.
 * @props {string} props.filterType
 * @props {string} props.id
 * @props {string} props.name
 * @props {integer} props.index
 * @props {func} props.filter
 */
var Radio = function Radio(props) {
  return wp.element.createElement("label", {
    className: "check-parent",
    "data-type": props.filterType,
    "data-filter-by": props.id,
    "data-filter-name": props.name,
    key: props.index,
    onClick: function onClick() {
      props.filter({
        value: props.value || props.name,
        label: props.name
      });
    }
  }, wp.element.createElement("input", {
    type: "radio",
    name: props.group || props.id,
    value: props.value || props.name
  }), wp.element.createElement("span", {
    className: "fancy-radio"
  }), props.name !== undefined ? "".concat(props.name) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./blocks/static-events-grid/frontend.js":
/*!***********************************************!*\
  !*** ./blocks/static-events-grid/frontend.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EventsGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EventsGrid */ "./blocks/static-events-grid/components/EventsGrid.js");
/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being redered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var event = document.getElementById('fe-wp-block-bbc-static-events-grid');

  if (!admin && event) {
    /// attributes - need to be sent as string otherwise react removes them.  use this object to pass the props to the frontend.
    var settings = JSON.parse(document.getElementById('fe-wp-block-bbc-static-events-grid').getAttribute('data-props'));
    ReactDOM.render(wp.element.createElement(_components_EventsGrid__WEBPACK_IMPORTED_MODULE_0__["default"], settings), document.getElementById('fe-wp-block-bbc-static-events-grid'));
  }
});

/***/ }),

/***/ "./blocks/video-player/components/BrightcovePlayer.js":
/*!************************************************************!*\
  !*** ./blocks/video-player/components/BrightcovePlayer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Brightcove Media Player
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — JwPlayer
 * @props {src} props.src
 * @props {poster} props.poster
 * @props {captions} props.captions
 * @props {full} props.full
 * @props {active} props.active
 * @props {play} props.play
 */
var BrightcovePlayer = function BrightcovePlayer(props) {
  /**
   * Either the full layout for the detail page is returned, or the slimmer
   * version of just a video.
   */
  if (props.full) {
    return wp.element.createElement("header", {
      className: "brightcove-header"
    }, wp.element.createElement("iframe", {
      className: "brightcove-player",
      title: props.title,
      src: "//players.brightcove.net/6041795457001/T1Ug9xImb_default/index.html?videoId=".concat(props.src, "&playsinline=true"),
      allowfullscreen: "",
      allow: "encrypted-media",
      playsinline: true
    }));
  } else {
    return wp.element.createElement("header", {
      className: "brightcove-header"
    }, wp.element.createElement("iframe", {
      className: "brightcove-player",
      src: "//players.brightcove.net/6041795457001/T1Ug9xImb_default/index.html?videoId=".concat(props.src),
      allowfullscreen: "",
      allow: "encrypted-media",
      playsinline: true
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BrightcovePlayer);

/***/ }),

/***/ "./blocks/video-player/components/VideoPlayer.js":
/*!*******************************************************!*\
  !*** ./blocks/video-player/components/VideoPlayer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_components_ShareButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/ShareButtons */ "./blocks/shared/components/ShareButtons.js");
/* harmony import */ var _YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YouTube */ "./blocks/video-player/components/YouTube.js");
/* harmony import */ var _BrightcovePlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrightcovePlayer */ "./blocks/video-player/components/BrightcovePlayer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Video Player
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — This block works in two ways.  If used on a watch detail page it will used the current post id passed as a prop
 * to fetch all details from the api.  Otherwise, attributes are used to set the url on poster image.
 * @props {postId} this.props.postId
 * @props {watchDetail} this.props.watchDetail
 * @props {url} this.props.url
 * @props {posterImage} this.props.posterImage
 * @props {videoPlayer} this.props.videoPlayer
 */






var VideoPlayer =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoPlayer, _Component);

  function VideoPlayer(props) {
    var _this;

    _classCallCheck(this, VideoPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoPlayer).call(this, props));
    _this.state = {
      loading: true,
      currentVideo: [],
      currentID: '',
      currentUrl: '',
      videoActive: false
    };
    _this.previous = _this.previous.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.next = _this.next.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.play = _this.play.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.copyLink = _this.copyLink.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * If we are on a watch detail page, the watchDetail prop will be true,
   * so we will proceed with fetching the video details from the api.
   */


  _createClass(VideoPlayer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      {
        this.props.watchDetail ? this.fetchVideoDetails() : this.setState({
          loading: false
        });
      }
    }
    /**
     * Fetch the video details from the api, store this in state to then be used in the block.
     * Once complete we will push the video url to the browser history api.
     */

  }, {
    key: "fetchVideoDetails",
    value: function fetchVideoDetails() {
      var _this2 = this;

      fetch("/wp/v2/videos/".concat(this.state.currentID !== '' ? this.state.currentID : this.props.postId)).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('There was a problem loading the content.');
        }
      }).then(function (video) {
        _this2.setState({
          currentVideo: [video],
          currentID: video.id,
          currentUrl: video.link,
          loading: false
        });
      }).then(function () {
        console.log(_this2.state.currentVideo);
        !Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["isGutenbergActive"])() && history.replaceState(null, null, _this2.state.currentUrl);
      }).catch(function (error) {
        _this2.setState({
          loading: false
        });

        console.log(error);
      });
    }
    /**
     * When the post image is clicked (which is a button), we will change the play state
     * to active, this will then enable the video src to be passed to the iframe.  It is set
     * to auto play, which means the video will start after this event.
     * @param {*} e
     */

  }, {
    key: "play",
    value: function play(e) {
      this.setState({
        videoActive: true
      });
    }
    /**
     * The button will use the previous post id returned in the api on the previous call
     * to make a new call and update the video state, which will then re-render the component.
     * @param {*} e
     */

  }, {
    key: "previous",
    value: function previous(e) {
      var _this3 = this;

      this.state.currentVideo[0].previous !== null && this.setState({
        currentID: this.state.currentVideo[0].previous.id,
        loading: true
      }, function () {
        _this3.fetchVideoDetails();
      });
    }
    /**
     * The button will use the next post id returned in the api on the previous call
     * to make a new call and update the video state, which will then re-render the component.
     * @param {*} e
     */

  }, {
    key: "next",
    value: function next(e) {
      var _this4 = this;

      this.state.currentVideo[0].next !== null && this.setState({
        currentID: this.state.currentVideo[0].next.id,
        loading: true
      }, function () {
        _this4.fetchVideoDetails();
      });
    }
    /**
     * Here we decide if we're using state to populate our iframe, or settings stored in
     * attributes.  This is decided based on whether the current page is a watch detail
     * page or not.
     */

  }, {
    key: "videoType",
    value: function videoType() {
      if (this.props.watchDetail === true && this.state.currentVideo.length > 0) {
        //  Full YouTube of Brightcove Player
        if (this.state.currentVideo[0].acf.video_player === 'youtube') {
          return wp.element.createElement(_YouTube__WEBPACK_IMPORTED_MODULE_3__["default"], {
            active: this.state.videoActive,
            title: this.state.currentVideo[0].title.rendered,
            src: this.state.currentVideo[0].acf.youtube_video_id,
            poster: this.state.currentVideo[0].acf.poster_image,
            play: this.play,
            full: this.props.watchDetail
          });
        } else if (this.state.currentVideo[0].acf.video_player === 'brightcove') {
          return wp.element.createElement(_BrightcovePlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: this.state.currentVideo[0].title.rendered,
            src: this.state.currentVideo[0].acf.brightcove_video_id,
            poster: this.state.currentVideo[0].acf.poster_image,
            full: this.props.watchDetail
          });
        }
      } else {
        // Stripped back Youtube or Brightcove Player
        if (this.props.videoPlayer === 'youtube') {
          return wp.element.createElement(_YouTube__WEBPACK_IMPORTED_MODULE_3__["default"], {
            active: this.state.videoActive,
            src: this.props.url,
            poster: this.props.posterImage,
            play: this.play,
            full: this.props.watchDetail
          });
        } else if (this.props.videoPlayer === 'brightcove') {
          return wp.element.createElement(_BrightcovePlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
            src: this.props.url,
            poster: this.props.posterImage,
            full: this.props.watchDetail
          });
        }
      }
    }
  }, {
    key: "copyLink",
    value: function copyLink(e) {
      e.preventDefault();
      Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_1__["copyingIsntAlwaysCheating"])(e.target);
    }
    /**
     * The final output from our component should be placed inside the
     * render method.
     *
     * Buttons groups and video descriptions will only be displayed if this is a video detail page,
     * otherwise, only the video player itself will be rendered.
     *
     * Do not update any state directly in here, bad things will happen.
     */

  }, {
    key: "render",
    value: function render() {
      var video = this.videoType();
      return wp.element.createElement(React.Fragment, null, this.props.watchDetail && wp.element.createElement("div", {
        className: "top-button-group"
      }, wp.element.createElement("a", {
        className: "btn btn__primary btn__icon btn__icon--back",
        href: "/watch"
      }, "All Episodes")), wp.element.createElement("article", {
        "data-loading": this.state.loading,
        "data-detail-page": this.props.watchDetail
      }, wp.element.createElement(React.Fragment, null, this.props.watchDetail ? this.state.currentVideo.length > 0 && [!this.state.currentVideo[0].do_not_play ? video : wp.element.createElement("header", {
        className: "poster-image",
        style: {
          backgroundImage: "url(".concat(this.state.currentVideo[0].featured_image_url, ")")
        }
      }), wp.element.createElement("div", {
        className: "meta"
      }, wp.element.createElement("h2", null, this.state.currentVideo[0].title.rendered), wp.element.createElement(_shared_components_ShareButtons__WEBPACK_IMPORTED_MODULE_2__["default"], {
        slug: this.state.currentUrl,
        title: this.state.currentVideo[0].title.rendered
      }), wp.element.createElement("p", {
        className: "taxonomies"
      }, this.state.currentVideo[0].post_labels.length > 0 && this.state.currentVideo[0].post_labels[0].name, ", Episode", ' ', this.state.currentVideo[0].acf.episode_number && this.state.currentVideo[0].acf.episode_number), wp.element.createElement("p", {
        className: "description"
      }, this.state.currentVideo[0].acf.description && this.state.currentVideo[0].acf.description))] : video, this.state.loading && wp.element.createElement("div", {
        className: "sk-chasing-dots"
      }, wp.element.createElement("div", {
        className: "sk-child sk-dot1"
      }), wp.element.createElement("div", {
        className: "sk-child sk-dot2"
      })))), this.props.watchDetail && this.state.currentVideo.length > 0 && [wp.element.createElement("div", {
        className: "bottom-button-group"
      }, wp.element.createElement("a", {
        className: "btn btn__primary btn__icon btn__icon--back ".concat(this.state.currentVideo[0].previous === null ? 'btn__disabled' : ''),
        onClick: this.previous
      }, "Previous"), wp.element.createElement("a", {
        className: "btn btn__primary btn__icon btn__icon--forward ".concat(this.state.currentVideo[0].next === null ? 'btn__disabled' : ''),
        onClick: this.next
      }, "Next"))]);
    }
  }]);

  return VideoPlayer;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./blocks/video-player/components/YouTube.js":
/*!***************************************************!*\
  !*** ./blocks/video-player/components/YouTube.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/js/utilities */ "./blocks/shared/js/utilities.js");
/* harmony import */ var _shared_js_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * YouTube Video Player
 * @author — Thomas Jones
 * @group — Guerrilla
 * @description — YouTube Player
 * @props {src} props.src
 * @props {poster} props.poster
 * @props {captions} props.captions
 * @props {full} props.full
 * @props {active} props.active
 * @props {play} props.play
 */


var YouTube = function YouTube(props) {
  /**
   * Either the full layout for the detail page is returned, or the slimmer
   * version of just a video.
   */
  if (props.full) {
    return wp.element.createElement("header", {
      className: "youtube-header"
    }, wp.element.createElement("iframe", {
      className: "youtube-player",
      title: props.title,
      src: props.active ? "https://www.youtube.com/embed/".concat(props.src ? Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_0__["YouTubeGetID"])(props.src) : '', "?rel=0&cc_lang_pref=en&cc_load_policy=1&modestbranding=1&autoplay=1") : '',
      frameborder: "0",
      allow: "autoplay; encrypted-media",
      allowfullscreen: "1"
    }), wp.element.createElement("button", {
      style: {
        backgroundImage: props.poster ? "url(".concat(props.poster.sizes.large, ")") : ''
      },
      "data-active": props.active,
      onClick: props.play
    }, "Play video"));
  } else {
    return wp.element.createElement("header", {
      className: "youtube-header"
    }, wp.element.createElement("iframe", {
      className: "youtube-player",
      src: props.active && props.src ? "https://www.youtube.com/embed/".concat(Object(_shared_js_utilities__WEBPACK_IMPORTED_MODULE_0__["YouTubeGetID"])(props.src), "?rel=0&cc_lang_pref=en&cc_load_policy=1&modestbranding=1&autoplay=1") : '',
      frameborder: "0",
      allow: "autoplay; encrypted-media",
      allowfullscreen: "1"
    }), wp.element.createElement("button", {
      style: {
        backgroundImage: "url(".concat(props.poster, ")")
      },
      "data-active": props.active,
      onClick: props.play
    }, "Play video"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (YouTube);

/***/ }),

/***/ "./blocks/video-player/frontend.js":
/*!*****************************************!*\
  !*** ./blocks/video-player/frontend.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_VideoPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VideoPlayer */ "./blocks/video-player/components/VideoPlayer.js");
/**
 * React Frontend Rendering of Component
 * This component is dynamic and will therefore benefit from
 * being redered as a react componet on the fronted.
 */

document.addEventListener('DOMContentLoaded', function () {
  ///  Check this is not the backend
  var admin = document.querySelector('.wp-admin');
  var isVideo = document.querySelectorAll('.fe-video-player');

  if (!admin && isVideo) {
    for (var index = 0; index < isVideo.length; index++) {
      var video = isVideo[index];
      var settings = JSON.parse(video.getAttribute('data-props'));
      ReactDOM.render(wp.element.createElement(_components_VideoPlayer__WEBPACK_IMPORTED_MODULE_0__["default"], settings), video);
    }
  }
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");
var each = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ "./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ "./node_modules/string-convert/camel2hyphen.js");

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-scroll/modules/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(/*! ./components/Link.js */ "./node_modules/react-scroll/modules/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(/*! ./components/Button.js */ "./node_modules/react-scroll/modules/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(/*! ./components/Element.js */ "./node_modules/react-scroll/modules/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(/*! ./mixins/scroller.js */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(/*! ./mixins/scroll-events.js */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(/*! ./mixins/scroll-spy.js */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(/*! ./mixins/animate-scroll.js */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(/*! ./mixins/scroll-link.js */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(/*! ./mixins/scroll-element.js */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(/*! ./mixins/Helpers.js */ "./node_modules/react-scroll/modules/mixins/Helpers.js");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
            this.registerElems(nextProps.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/animate-scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(/*! ./smooth */ "./node_modules/react-scroll/modules/mixins/smooth.js");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(/*! ./cancel-events */ "./node_modules/react-scroll/modules/mixins/cancel-events.js");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/cancel-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/passive-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.registerElems(nextProps.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-hash.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-spy.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(/*! ./animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    if (_scrollEvents2.default.registered.begin) {
      _scrollEvents2.default.registered.begin(to, target);
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/smooth.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash
    // remove hash
    : loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, '');
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),

/***/ "./node_modules/react-slick/lib/arrows.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/arrows.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PrevArrow =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(PrevArrow).apply(this, arguments));
  }

  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });

      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }

      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames.default)(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = _react.default.cloneElement(this.props.prevArrow, _objectSpread({}, prevArrowProps, customProps));
      } else {
        prevArrow = _react.default.createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }

      return prevArrow;
    }
  }]);

  return PrevArrow;
}(_react.default.PureComponent);

exports.PrevArrow = PrevArrow;

var NextArrow =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(NextArrow).apply(this, arguments));
  }

  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });

      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }

      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames.default)(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = _react.default.cloneElement(this.props.nextArrow, _objectSpread({}, nextArrowProps, customProps));
      } else {
        nextArrow = _react.default.createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }

      return nextArrow;
    }
  }]);

  return NextArrow;
}(_react.default.PureComponent);

exports.NextArrow = NextArrow;

/***/ }),

/***/ "./node_modules/react-slick/lib/default-props.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/default-props.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return _react.default.createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return _react.default.createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/dots.js":
/*!**********************************************!*\
  !*** ./node_modules/react-slick/lib/dots.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);

  function Dots() {
    _classCallCheck(this, Dots);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dots).apply(this, arguments));
  }

  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var dotCount = getDotCount({
        slideCount: this.props.slideCount,
        slidesToScroll: this.props.slidesToScroll,
        slidesToShow: this.props.slidesToShow,
        infinite: this.props.infinite
      }); // Apply join & split to Array to pre-fill it for IE8
      //
      // Credit: http://stackoverflow.com/a/13735425/1849458

      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = Array.apply(null, Array(dotCount + 1).join("0").split("")).map(function (x, i) {
        var leftBound = i * _this.props.slidesToScroll;
        var rightBound = i * _this.props.slidesToScroll + (_this.props.slidesToScroll - 1);
        var className = (0, _classnames.default)({
          "slick-active": _this.props.currentSlide >= leftBound && _this.props.currentSlide <= rightBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: _this.props.slidesToScroll,
          currentSlide: _this.props.currentSlide
        };

        var onClick = _this.clickHandler.bind(_this, dotOptions);

        return _react.default.createElement("li", {
          key: i,
          className: className
        }, _react.default.cloneElement(_this.props.customPaging(i), {
          onClick: onClick
        }));
      });
      return _react.default.cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);

  return Dots;
}(_react.default.PureComponent);

exports.Dots = Dots;

/***/ }),

/***/ "./node_modules/react-slick/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slider = _interopRequireDefault(__webpack_require__(/*! ./slider */ "./node_modules/react-slick/lib/slider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _slider.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/initial-state.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/initial-state.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0
};
var _default = initialState;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/inner-slider.js":
/*!******************************************************!*\
  !*** ./node_modules/react-slick/lib/inner-slider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSlider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _initialState = _interopRequireDefault(__webpack_require__(/*! ./initial-state */ "./node_modules/react-slick/lib/initial-state.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

var _track = __webpack_require__(/*! ./track */ "./node_modules/react-slick/lib/track.js");

var _dots = __webpack_require__(/*! ./dots */ "./node_modules/react-slick/lib/dots.js");

var _arrows = __webpack_require__(/*! ./arrows */ "./node_modules/react-slick/lib/arrows.js");

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InnerSlider, _React$Component);

  function InnerSlider(props) {
    var _this;

    _classCallCheck(this, InnerSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InnerSlider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listRefHandler", function (ref) {
      return _this.list = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillMount", function () {
      _this.ssrInit();

      _this.props.onInit && _this.props.onInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);

      _this.updateState(spec, true, function () {
        _this.adaptHeight();

        _this.props.autoplay && _this.autoPlay("update");
      });

      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }

      _this.ro = new _resizeObserverPolyfill.default(function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });

      _this.ro.observe(_this.list);

      Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      }); // To support server-side rendering

      if (!window) {
        return;
      }

      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }

      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }

      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });

        _this.callbackTimers = [];
      }

      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }

      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillReceiveProps", function (nextProps) {
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, nextProps, _this.state);

      var setTrackStyle = false;

      var _arr = Object.keys(_this.props);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        if (!nextProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }

        if (_typeof(nextProps[key]) === "object" || typeof nextProps[key] === "function") {
          continue;
        }

        if (nextProps[key] !== _this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react.default.Children.count(nextProps.children)) {
          _this.changeSlide({
            message: "index",
            index: _react.default.Children.count(nextProps.children) - nextProps.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }

        if (nextProps.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function () {
      _this.checkImagesLoad();

      _this.props.onReInit && _this.props.onReInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }


      _this.adaptHeight();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash.default)(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);

      _this.debouncedResize();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!_reactDom.default.findDOMNode(_this.track)) return;

      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props, _this.state);

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working


      _this.setState({
        animating: false
      });

      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread({}, spec, updatedState, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread({}, spec, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);

      if (setTrackStyle || _react.default.Children.count(_this.props.children) !== _react.default.Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }

      _this.setState(updatedState, callback);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
            _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread({}, _this.props, _this.state, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread({}, _this.props, _this.state, {
          slideCount: _this.props.children.length
        }));

        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });

        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }

        for (var _i2 = 0; _i2 < postClones; _i2++) {
          _trackWidth += childrenWidths[_i2];
        }

        for (var _i3 = 0; _i3 < _this.state.currentSlide; _i3++) {
          _trackLeft += childrenWidths[_i3];
        }

        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };

        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }

        _this.setState({
          trackStyle: _trackStyle
        });

        return;
      }

      var childrenCount = _react.default.Children.count(_this.props.children);

      var spec = _objectSpread({}, _this.props, _this.state, {
        slideCount: childrenCount
      });

      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }

      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };

      _this.setState({
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkImagesLoad", function () {
      var images = document.querySelectorAll(".slick-slide img");
      var imagesCount = images.length,
          loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };

        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;

          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }

        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();

              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;

            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "progressiveLazyLoad", function () {
      var slidesToLoad = [];

      var spec = _objectSpread({}, _this.props, _this.state);

      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }

      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }

      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });

        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread({
        index: index
      }, _this.props, _this.state, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })),
          state = _slideHandler.state,
          nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

      _this.setState(state, function () {
        asNavFor && asNavFor.innerSlider.state.currentSlide !== _this.state.currentSlide && asNavFor.innerSlider.slideHandler(index);
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));

            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var spec = _objectSpread({}, _this.props, _this.state);

      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;

      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectHandler", function (options) {
      _this.changeSlide(options);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };

      window.ontouchmove = preventDefault;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }

      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread({}, _this.props, _this.state, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;

      if (state["swiping"]) {
        _this.clickable = false;
      }

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread({}, _this.props, _this.state, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];

      _this.setState(state);

      if (triggerSlideHandler === undefined) return;

      _this.slideHandler(triggerSlideHandler);

      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";

      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "play", function () {
      var nextIndex;

      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread({}, _this.props, _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      var autoplaying = _this.state.autoplaying;

      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }

      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

      _this.setState({
        autoplaying: "playing"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }

      var autoplaying = _this.state.autoplaying;

      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var className = (0, _classnames.default)("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });

      var spec = _objectSpread({}, _this.props, _this.state);

      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread({}, trackProps, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect ? _this.selectHandler : null
      });
      var dots;

      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread({}, dotProps, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = _react.default.createElement(_dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = _react.default.createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = _react.default.createElement(_arrows.NextArrow, arrowProps);
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _objectSpread({}, verticalHeightStyle, centerPaddingStyle);

      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.swipeEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr"
      };

      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }

      return _react.default.createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", _react.default.createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), _react.default.createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });

    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread({}, _initialState.default, {
      currentSlide: _this.props.initialSlide,
      slideCount: _react.default.Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    return _this;
  }

  return InnerSlider;
}(_react.default.Component);

exports.InnerSlider = InnerSlider;

/***/ }),

/***/ "./node_modules/react-slick/lib/slider.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/slider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _innerSlider = __webpack_require__(/*! ./inner-slider */ "./node_modules/react-slick/lib/inner-slider.js");

var _json2mq = _interopRequireDefault(__webpack_require__(/*! json2mq */ "./node_modules/json2mq/index.js"));

var _defaultProps = _interopRequireDefault(__webpack_require__(/*! ./default-props */ "./node_modules/react-slick/lib/default-props.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);

      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;

          if (index === 0) {
            bQuery = (0, _json2mq.default)({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq.default)({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering


          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq.default)({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings;
      var newProps;

      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread({}, _defaultProps.default, this.props, newProps[0].settings);
      } else {
        settings = _objectSpread({}, _defaultProps.default, this.props);
      } // force scrolling by one if centerMode is on


      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }

        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on


      if (settings.fade) {
        if (settings.slidesToShow > 1 && "development" !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }

        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child


      var children = _react.default.Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }

        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }

      var newChildren = [];
      var currentWidth = null;

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }

            if (k >= children.length) break;
            row.push(_react.default.cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }

          newSlide.push(_react.default.createElement("div", {
            key: 10 * i + j
          }, row));
        }

        if (settings.variableWidth) {
          newChildren.push(_react.default.createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push(_react.default.createElement("div", {
            key: i
          }, newSlide));
        }
      }

      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return _react.default.createElement("div", {
          className: className
        }, newChildren);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }

      return _react.default.createElement(_innerSlider.InnerSlider, _extends({
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);

  return Slider;
}(_react.default.Component);

exports.default = Slider;

/***/ }),

/***/ "./node_modules/react-slick/lib/track.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/track.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var slickCurrent = index === spec.currentSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    style.WebkitTransition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react.default.Children.count(spec.children);

  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

  _react.default.Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = _react.default.createElement("div", null);
    }

    var childStyle = getSlideStyle(_objectSpread({}, spec, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread({}, spec, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push(_react.default.cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames.default)(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread({
        outline: "none"
      }, child.props.style || {}, childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);

        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread({}, spec, {
          index: key
        }));
        preCloneSlides.push(_react.default.cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames.default)(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread({}, child.props.style || {}, childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread({}, spec, {
          index: key
        }));
        postCloneSlides.push(_react.default.cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames.default)(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread({}, child.props.style || {}, childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, _getPrototypeOf(Track).apply(this, arguments));
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return _react.default.createElement("div", _extends({
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);

  return Track;
}(_react.default.PureComponent);

exports.Track = Track;

/***/ }),

/***/ "./node_modules/react-slick/lib/utils/innerSliderUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-slick/lib/utils/innerSliderUtils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }

  return onDemandSlides;
}; // return list of slides that need to be present


exports.getOnDemandLazySlides = getOnDemandLazySlides;

var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }

  return requiredSlides;
}; // startIndex that needs to be present


exports.getRequiredLazySlides = getRequiredLazySlides;

var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};

exports.lazyStartIndex = lazyStartIndex;

var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};

exports.lazyEndIndex = lazyEndIndex;

var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};

exports.lazySlidesOnLeft = lazySlidesOnLeft;

var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element


exports.lazySlidesOnRight = lazySlidesOnRight;

var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};

exports.getWidth = getWidth;

var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};

exports.getHeight = getHeight;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }

  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }

  return "vertical";
}; // whether or not we can go next


exports.getSwipeDirection = getSwipeDirection;

var canGoNext = function canGoNext(spec) {
  var canGo = true;

  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }

  return canGo;
}; // given an object and a list of keys, return new object with given keys


exports.canGoNext = canGoNext;

var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state


exports.extractObject = extractObject;

var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react.default.Children.count(spec.children);

  var listWidth = Math.ceil(getWidth(_reactDom.default.findDOMNode(spec.listRef)));
  var trackWidth = Math.ceil(getWidth(_reactDom.default.findDOMNode(spec.trackRef)));
  var slideWidth;

  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }

    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }

  var slideHeight = _reactDom.default.findDOMNode(spec.listRef) && getHeight(_reactDom.default.findDOMNode(spec.listRef).querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }

  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides({
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }, spec);
  lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };

  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }

  return state;
};

exports.initializedState = initializedState;

var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
      animating = spec.animating,
      fade = spec.fade,
      infinite = spec.infinite,
      index = spec.index,
      slideCount = spec.slideCount,
      lazyLoadedList = spec.lazyLoadedList,
      lazyLoad = spec.lazyLoad,
      currentSlide = spec.currentSlide,
      centerMode = spec.centerMode,
      slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      useCSS = spec.useCSS;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
      finalSlide,
      animationLeft,
      finalLeft;
  var state = {},
      nextState = {};

  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};

    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }

    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList.push(animationSlide);
    }

    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList
    };
    nextState = {
      animating: false
    };
  } else {
    finalSlide = animationSlide;

    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }

    animationLeft = getTrackLeft(_objectSpread({}, spec, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread({}, spec, {
      slideIndex: finalSlide
    }));

    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }

    lazyLoad && lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread({}, spec, {
      currentSlide: animationSlide
    })));

    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread({}, spec, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread({}, spec, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread({}, spec, {
          left: finalLeft
        })),
        swipeLeft: null
      };
    }
  }

  return {
    state: state,
    nextState: nextState
  };
};

exports.slideHandler = slideHandler;

var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      slideCount = spec.slideCount,
      currentSlide = spec.currentSlide,
      lazyLoad = spec.lazyLoad,
      infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;

    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;

    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;

    if (targetSlide === options.currentSlide) {
      return null;
    }
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;

    if (targetSlide === options.currentSlide) {
      return null;
    }

    if (infinite) {
      var direction = siblingDirection(_objectSpread({}, spec, {
        targetSlide: targetSlide
      }));

      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);

    if (targetSlide === options.currentSlide) {
      return null;
    }
  }

  return targetSlide;
};

exports.changeSlide = changeSlide;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};

exports.keyHandler = keyHandler;

var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && e.preventDefault();
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};

exports.swipeStart = swipeStart;

var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
      animating = spec.animating,
      vertical = spec.vertical,
      swipeToSlide = spec.swipeToSlide,
      verticalSwiping = spec.verticalSwiping,
      rtl = spec.rtl,
      currentSlide = spec.currentSlide,
      edgeFriction = spec.edgeFriction,
      edgeDragged = spec.edgeDragged,
      onEdge = spec.onEdge,
      swiped = spec.swiped,
      swiping = spec.swiping,
      slideCount = spec.slideCount,
      slidesToScroll = spec.slidesToScroll,
      infinite = spec.infinite,
      touchObject = spec.touchObject,
      swipeEvent = spec.swipeEvent,
      listHeight = spec.listHeight,
      listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return e.preventDefault();
  if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
  var swipeLeft,
      state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }

  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;

  if (!infinite) {
    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;

      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }

  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }

  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }

  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }

  state = _objectSpread({}, state, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread({}, spec, {
      left: swipeLeft
    }))
  });

  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }

  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    e.preventDefault();
  }

  return state;
};

exports.swipeMove = swipeMove;

var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
      swipe = spec.swipe,
      touchObject = spec.touchObject,
      listWidth = spec.listWidth,
      touchThreshold = spec.touchThreshold,
      verticalSwiping = spec.verticalSwiping,
      listHeight = spec.listHeight,
      currentSlide = spec.currentSlide,
      swipeToSlide = spec.swipeToSlide,
      scrolling = spec.scrolling,
      onSwipe = spec.onSwipe;

  if (!dragging) {
    if (swipe) e.preventDefault();
    return {};
  }

  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };

  if (scrolling) {
    return state;
  }

  if (!touchObject.swipeLength) {
    return state;
  }

  if (touchObject.swipeLength > minSwipe) {
    e.preventDefault();

    if (onSwipe) {
      onSwipe(swipeDirection);
    }

    var slideCount, newSlide;

    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = currentSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;

      case "right":
      case "down":
        newSlide = currentSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;

      default:
        slideCount = currentSlide;
    }

    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread({}, spec, {
      left: currentLeft
    }));
  }

  return state;
};

exports.swipeEnd = swipeEnd;

var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];

  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }

  return indexes;
};

exports.getNavigableIndexes = getNavigableIndexes;

var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;

  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }

      prevNavigable = navigables[n];
    }
  }

  return index;
};

exports.checkNavigable = checkNavigable;

var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

  if (spec.swipeToSlide) {
    var swipedSlide;

    var slickList = _reactDom.default.findDOMNode(spec.listRef);

    var slides = slickList.querySelectorAll(".slick-slide");
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }

      return true;
    });

    if (!swipedSlide) {
      return 0;
    }

    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};

exports.getSlideCount = getSlideCount;

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};

exports.checkSpecKeys = checkSpecKeys;

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };

  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread({}, style, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }

  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;

var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;

var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }

  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;

  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame


    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }

    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }

  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;

    var trackElem = _reactDom.default.findDOMNode(trackRef);

    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;

      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }

      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};

exports.getTrackLeft = getTrackLeft;

var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  if (spec.variableWidth) {
    return spec.slideCount;
  }

  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};

exports.getPreClones = getPreClones;

var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  return spec.slideCount;
};

exports.getPostClones = getPostClones;

var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};

exports.getTotalSlides = getTotalSlides;

var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }

    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }

    return "left";
  }
};

exports.siblingDirection = siblingDirection;

var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      rtl = _ref.rtl,
      centerPadding = _ref.centerPadding;

  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }

  if (rtl) {
    return 0;
  }

  return slidesToShow - 1;
};

exports.slidesOnRight = slidesOnRight;

var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
      centerMode = _ref2.centerMode,
      rtl = _ref2.rtl,
      centerPadding = _ref2.centerPadding;

  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }

  if (rtl) {
    return slidesToShow - 1;
  }

  return 0;
};

exports.slidesOnLeft = slidesOnLeft;

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};

exports.canUseDOM = canUseDOM;

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/string-convert/camel2hyphen.js":
/*!*****************************************************!*\
  !*** ./node_modules/string-convert/camel2hyphen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });