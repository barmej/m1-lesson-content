// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/logo.svg":[function(require,module,exports) {
module.exports = "/logo.236e4034.svg";
},{}],"js/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("../images/logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function render() {
  var locationHash = window.location.hash;
  return "<div class=\"container\">\n        <button class=\"navbar-burger\">\n            <span class=\"navicon\"></span>\n        </button>\n        <a class=\"navbar-item navbar-logo\" href=\"#/\"><img src=\"".concat(_logo.default, "\" width=\"80\"></a>\n        <ul class=\"navbar-menu\">\n            <li><a class=\"").concat(locationHash === "#/" ? 'navbar-item active' : 'navbar-item', "\" href=\"#/\">\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</a></li>\n            <li><a class=\"").concat(locationHash === "#/movies" ? 'navbar-item active' : 'navbar-item', "\" href=\"#/movies\">\u0623\u0641\u0644\u0627\u0645</a></li>\n            <li><a class=\"").concat(locationHash === "#/shows" ? 'navbar-item active' : 'navbar-item', "\" href=\"#/shows\">\u0645\u0633\u0644\u0633\u0644\u0627\u062A</a></li>\n        </ul>\n        <div class=\"navbar-search\">\n            <input class=\"searchInput\" type=\"text\" name=\"search\" placeholder=\"\u0625\u0628\u062D\u062B \u0639\u0646 \u0641\u064A\u0644\u0645 \u0623\u0648 \u0645\u0633\u0644\u0633\u0644...\" />\n        </div>\n    </div>");
};

var _default = Header;
exports.default = _default;
},{"../images/logo.svg":"images/logo.svg"}],"js/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("../images/logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function render() {
  return "<div class=\"container\">\n        <a class=\"navbar-logo grayscale\" href=\"#/\"><img src=\"".concat(_logo.default, "\" width=\"80\"></a>\n        <ul class=\"navbar-menu\">\n            <li><a class=\"navbar-item\" href=\"#/\">\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</a></li>\n            <li><a class=\"navbar-item\" href=\"#/movies\">\u0623\u0641\u0644\u0627\u0645</a></li>\n            <li><a class=\"navbar-item\" href=\"#/shows\">\u0645\u0633\u0644\u0633\u0644\u0627\u062A</a></li>\n        </ul>\n        <a class=\"navbar-item logout\" href=\"#/logout\">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</a>\n    </div>");
};

var _default = Footer;
exports.default = _default;
},{"../images/logo.svg":"images/logo.svg"}],"js/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Home = function render() {
  return "<section class=\"section hero featuredMovies has-bullets\">\n    <div class=\"container\">\n        <div class=\"slide featured\">\n            <h2 class=\"featured-title\">Peaky Blinders</h2>\n            <p class=\"featured-overview\">\u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u064A\u062F\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0628\u0637\u0644 \u0643\u0627\u0644\u064A\u0646 \u0645\u0648\u0631\u0641\u064A \u0641\u064A \u062F\u0648\u0631 \u062A\u0648\u0645\u064A \u0634\u064A\u0644\u0628\u064A\u060C \u0642\u0627\u0626\u062F \u0627\u0644\u0639\u0635\u0627\u0628\u0629 \u0628\u0627\u0644\u0623\u0636\u0627\u0641\u0629 \u0625\u0644\u0649\n                \u0633\u0627\u0645 \u0646\u064A\u0644 \u0641\u064A \u062F\u0648\u0631 \u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0642\u0645\u0639 \u0627\u0644\u0639\u0635\u0627\u0628\u0629. \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0645\u0642\u062A\u0628\u0633 \u0639\u0646 \u0639\u0627\u0626\u0644\u0629 \u0627\u0644\u0628\u064A\u0643\u064A \u0628\u0644\u0627\u064A\u0646\u062F\u0631\u0632 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0639\u0631\u0636\n                \u0644\u0627\u0648\u0644 \u0645\u0631\u0647 \u0639\u0644\u064A \u0628\u064A \u0628\u064A \u0633\u064A 2 \u0641\u064A 13 \u0633\u0628\u062A\u0645\u0628\u0631 2013 \u0644\u0645\u062F\u0629 6 \u062D\u0644\u0642\u0627\u062A</p>\n            <p class=\"buttons\">\n                <a href=\"#/details\" class=\"button\">\u0634\u0627\u0647\u062F \u0627\u0644\u0641\u064A\u0644\u0645</a>\n                <a href=\"#/details\" class=\"button is-secondary\">\u0625\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F</a>\n            </p>\n        </div>\n    </div>\n</section>\n<section class=\"section movies slider has-arrows is-suggested\">\n    <div class=\"container\">\n        <h3 class=\"section-title\">\u0625\u0642\u062A\u0631\u0627\u062D\u062A\u0646\u0627 \u0644\u0643</h3>\n        <ul class=\"moviesGrid\">\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Maze Runner\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Breaking Bad\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Peaky Blinders\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Good Doctor\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</section>\n<section class=\"section movies slider has-arrows is-trending\">\n    <div class=\"container\">\n        <h3 class=\"section-title\">\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0634\u0627\u0647\u062F\u0629</h3>\n        <ul class=\"moviesGrid\">\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Breaking Bad\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Peaky Blinders\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Good Doctor\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Maze Runner\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</section>\n<section class=\"section movies slider has-arrows is-series\">\n    <div class=\"container\">\n        <h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A</h3>\n        <ul class=\"moviesGrid\">\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Maze Runner\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Breaking Bad\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Maze Runner\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Breaking Bad\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Peaky Blinders\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Peaky Blinders\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Good Doctor\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Good Doctor\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</section>\n<section class=\"section movies slider has-arrows is-movies\">\n    <div class=\"container\">\n        <h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0644\u0627\u0645</h3>\n        <ul class=\"moviesGrid\">\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Peaky Blinders\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Good Doctor\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Maze Runner\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Breaking Bad\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Breaking Bad\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        Peaky Blinders\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Good Doctor\n                    </span>\n                </a>\n            </li>\n            <li class=\"movie\">\n                <a href=\"#/details\">\n                    <img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n                    <span class=\"movie-description\">\n                        <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                        The Maze Runner\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</section>";
};

var _default = Home;
exports.default = _default;
},{}],"js/Movies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Movies = function render() {
  return "<section class=\"section filter\">\n\t\t<div class=\"container\">\n\t\t\t<form>\n\t\t\t\t<label for=\"movieType\" class=\"movieTypeLabel\">\u0623\u0641\u0644\u0627\u0645</label>\n\t\t\t\t<select id=\"movieType\" class=\"movieTypeSelect\">\n\t\t\t\t\t<option>\u0646\u0648\u0639 \u0627\u0644\u0641\u064A\u0644\u0645</option>\n\t\t\t\t\t<option>\u062F\u0631\u0627\u0645\u0627</option>\n\t\t\t\t\t<option>\u0623\u0643\u0634\u0646</option>\n\t\t\t\t\t<option>\u0627\u0644\u063A\u0645\u0648\u0636</option>\n\t\t\t\t\t<option>\u0643\u0648\u0645\u064A\u062F\u064A\u0627</option>\n\t\t\t\t</select>\n\t\t\t</form>\n\t\t</div>\n\t</section>\n\t<section class=\"section movies slider has-arrows is-suggested\">\n\t\t<div class=\"container\">\n\t\t\t<h3 class=\"section-title\">\u0625\u0642\u062A\u0631\u0627\u062D\u062A\u0646\u0627 \u0644\u0643</h3>\n\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>\n\t<section class=\"section movies slider has-arrows is-trending\">\n\t\t<div class=\"container\">\n\t\t\t<h3 class=\"section-title\">\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0634\u0627\u0647\u062F\u0629</h3>\n\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>\n\t<section class=\"section movies slider has-arrows is-movies\">\n\t\t<div class=\"container\">\n\t\t\t<h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0644\u0627\u0645</h3>\n\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>";
};

var _default = Movies;
exports.default = _default;
},{}],"js/Shows.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Shows = function render() {
  return "<section class=\"section filter\">\n\t<div class=\"container\">\n\t\t<form>\n\t\t\t<label for=\"movieType\" class=\"movieTypeLabel\">\u0645\u0633\u0644\u0633\u0644\u0627\u062A</label>\n\t\t\t<select id=\"movieType\" class=\"movieTypeSelect\">\n\t\t\t\t<option>\u0646\u0648\u0639 \u0627\u0644\u0641\u064A\u0644\u0645</option>\n\t\t\t\t<option>\u062F\u0631\u0627\u0645\u0627</option>\n\t\t\t\t<option>\u0623\u0643\u0634\u0646</option>\n\t\t\t\t<option>\u0627\u0644\u063A\u0645\u0648\u0636</option>\n\t\t\t\t<option>\u0643\u0648\u0645\u064A\u062F\u064A\u0627</option>\n\t\t\t</select>\n\t\t</form>\n\t</div>\n</section>\n<section class=\"section movies slider has-arrows is-suggested\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title\">\u0625\u0642\u062A\u0631\u0627\u062D\u062A\u0646\u0627 \u0644\u0643</h3>\n\t\t<ul class=\"moviesGrid\">\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>\n<section class=\"section movies slider has-arrows is-trending\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title\">\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0634\u0627\u0647\u062F\u0629</h3>\n\t\t<ul class=\"moviesGrid\">\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>\n<section class=\"section movies slider has-arrows is-series\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A</h3>\n\t\t<ul class=\"moviesGrid\">\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>\n<section class=\"section movies slider has-arrows is-movies\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0644\u0627\u0645</h3>\n\t\t<ul class=\"moviesGrid\">\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>";
};

var _default = Shows;
exports.default = _default;
},{}],"js/Details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Details = function render() {
  return "<section class=\"section hero detailsPage\">\n\t<div class=\"container\">\n\t\t<div class=\"movieDetails slide\">\n\t\t\t<div class=\"movieVideo\">\n\t\t\t\t<iframe width=\"1063\" height=\"598\" src=\"https://www.youtube.com/embed/5Hc8tB9uhho?modestbranding=1&rel=0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t\t\t</div>\n\t\t\t<div class=\"movieDescription\">\n\t\t\t\t<h2 class=\"featured-title\">The Dawn Wall</h2>\n\t\t\t\t<p class=\"featured-overview\">\u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u064A\u062F\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0628\u0637\u0644 \u0643\u0627\u0644\u064A\u0646 \u0645\u0648\u0631\u0641\u064A \u0641\u064A \u062F\u0648\u0631 \u062A\u0648\u0645\u064A \u0634\u064A\u0644\u0628\u064A\u060C \u0642\u0627\u0626\u062F \u0627\u0644\u0639\u0635\u0627\u0628\u0629 \u0628\u0627\u0644\u0623\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0633\u0627\u0645 \u0646\u064A\u0644 \u0641\u064A \u062F\u0648\u0631 \u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0642\u0645\u0639 \u0627\u0644\u0639\u0635\u0627\u0628\u0629. \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0645\u0642\u062A\u0628\u0633 \u0639\u0646 \u0639\u0627\u0626\u0644\u0629 \u0627\u0644\u0628\u064A\u0643\u064A \u0628\u0644\u0627\u064A\u0646\u062F\u0631\u0632 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0639\u0631\u0636 \u0644\u0627\u0648\u0644 \u0645\u0631\u0647 \u0639\u0644\u064A \u0628\u064A \u0628\u064A \u0633\u064A 2 \u0641\u064A 13 \u0633\u0628\u062A\u0645\u0628\u0631 2013 \u0644\u0645\u062F\u0629 6 \u062D\u0644\u0642\u0627\u062A</p>\n\t\t\t\t<p class=\"movieGeneralData\">2019 | \u0633\u0627\u0639\u0629 \u0648 40 \u062F\u0642\u064A\u0642\u064A\u0629 | \u0648\u062B\u0627\u0626\u0642\u064A</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"section movieMetaData\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title\">\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644</h3>\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<span class=\"title\">\u0627\u0644\u062C\u0646\u0633 \u0627\u0644\u0623\u062F\u0628\u064A</span>\n\t\t\t\t<span class=\"values\">\u0648\u062B\u0627\u0626\u0642\u064A | \u0645\u063A\u0627\u0645\u0631\u0629 | \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 | \u0631\u064A\u0627\u0636\u0629</span>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<span class=\"title\">\u0627\u0644\u0646\u062C\u0648\u0645</span>\n\t\t\t\t<span class=\"values\">\u0648\u062B\u0627\u0626\u0642\u064A | \u0645\u063A\u0627\u0645\u0631\u0629 | \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 | \u0631\u064A\u0627\u0636\u0629</span>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<span class=\"title\">\u0627\u0644\u0625\u062F\u0627\u0631\u0629</span>\n\t\t\t\t<span class=\"values\">\u0648\u062B\u0627\u0626\u0642\u064A | \u0645\u063A\u0627\u0645\u0631\u0629 | \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 | \u0631\u064A\u0627\u0636\u0629</span>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"plot\">\n\t\t\t<h3 class=\"section-title\">\u0627\u0644\u0642\u0635\u0629</h3>\n\t\t\t<p>\u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u064A\u062F\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0628\u0637\u0644 \u0643\u0627\u0644\u064A\u0646 \u0645\u0648\u0631\u0641\u064A \u0641\u064A \u062F\u0648\u0631 \u062A\u0648\u0645\u064A \u0634\u064A\u0644\u0628\u064A\u060C \u0642\u0627\u0626\u062F \u0627\u0644\u0639\u0635\u0627\u0628\u0629 \u0628\u0627\u0644\u0623\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0633\u0627\u0645 \u0646\u064A\u0644 \u0641\u064A \u062F\u0648\u0631 \u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0642\u0645\u0639 \u0627\u0644\u0639\u0635\u0627\u0628\u0629. \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0645\u0642\u062A\u0628\u0633 \u0639\u0646 \u0639\u0627\u0626\u0644\u0629 \u0627\u0644\u0628\u064A\u0643\u064A \u0628\u0644\u0627\u064A\u0646\u062F\u0631\u0632 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0639\u0631\u0636 \u0644\u0627\u0648\u0644 \u0645\u0631\u0647 \u0639\u0644\u064A \u0628\u064A \u0628\u064A \u0633\u064A 2 \u0641\u064A 13 \u0633\u0628\u062A\u0645\u0628\u0631 2013 \u0644\u0645\u062F\u0629 6 \u062D\u0644\u0642\u0627\u062A</p>\n\t\t</div>\n\t</div>\n</section>";
};

var _default = Details;
exports.default = _default;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Header = _interopRequireDefault(require("./Header.js"));

var _Footer = _interopRequireDefault(require("./Footer.js"));

var _Home = _interopRequireDefault(require("./Home.js"));

var _Movies = _interopRequireDefault(require("./Movies.js"));

var _Shows = _interopRequireDefault(require("./Shows.js"));

var _Details = _interopRequireDefault(require("./Details.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.querySelector("header").innerHTML = (0, _Header.default)();
document.querySelector("footer").innerHTML = (0, _Footer.default)();
document.querySelector(".navbar-burger").addEventListener("click", function () {
  return document.querySelector("header").classList.toggle('is-active');
});

function renderPage() {
  var ret;

  switch (window.location.hash) {
    case "#/":
    case "":
      ret = (0, _Home.default)();
      break;

    case "#/movies":
      ret = (0, _Movies.default)();
      break;

    case "#/shows":
      ret = (0, _Shows.default)();
      break;

    case "#/details":
      ret = (0, _Details.default)();
      break;

    default:
      ret = "<h1>لن نستطيع إيجاد هذه الصفحة</h1>";
      break;
  }

  document.querySelector("header").innerHTML = (0, _Header.default)();
  document.querySelector("#root").innerHTML = ret;
  return ret;
}

window.onhashchange = renderPage;
renderPage();
},{"./Header.js":"js/Header.js","./Footer.js":"js/Footer.js","./Home.js":"js/Home.js","./Movies.js":"js/Movies.js","./Shows.js":"js/Shows.js","./Details.js":"js/Details.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58035" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map