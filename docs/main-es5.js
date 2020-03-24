function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"title-bar\">\n\t<div class=\"title-bar-left\">\n\t\t<a routerLink=\"/welcome\">\n\t\t\t<i class=\"material-icons md-36\" style=\"vertical-align: middle;\">home</i> \n\t\t\t<img src=\"./assets/images/rallyman-gt-logo.png\" id=\"logo\">\n\t\t</a>\n\t\t\n\t</div>\n</div>\n\n<router-outlet></router-outlet>\n\n<hr>\n<div class=\"grid-container\">\n\t<small>Made for the Fans of Rallyman GT, by a fan of Rallyman GT. Images used with permission of Holy Grail Games.</small>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/configure-race/configure-race.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configure-race/configure-race.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfigureRaceConfigureRaceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell large-6 large-offset-3 screen-light\">\n\n      <h1>Race Details</h1>\n\n      <form [formGroup]=\"raceDetailsForm\" (ngSubmit)=\"saveDetails()\">\n\n        <label for=\"name\">\n          Name\n          <input id=\"name\" type=\"text\" name=\"raceName\" formControlName=\"name\" placeholder=\"Name\"/>\n        </label>\n\n        <label for=\"special\">\n          Special\n          <input id=\"special\" type=\"text\" name=\"special\" formControlName=\"special\" placeholder=\"Special\"/>\n        </label>\n\n        <fieldset>\n          <label for=\"class\">Class</label>\n          <input type=\"radio\" name=\"class\" formControlName=\"class\" value=\"GT6\" id=\"class-GT6\"><label for=\"class-GT6\">GT6</label>\n          <input type=\"radio\" name=\"class\" formControlName=\"class\" value=\"GT5\" id=\"class-GT5\"><label for=\"class-GT5\">GT5</label>\n          <input type=\"radio\" name=\"class\" formControlName=\"class\" value=\"GT4\" id=\"class-GT4\"><label for=\"class-GT4\">GT4</label>\n        </fieldset>\n\n        <fieldset *ngIf=\"raceDetailsForm.value.class == 'GT6' || raceDetailsForm.value.class == 'GT5'\">\n          <input type=\"checkbox\" name=\"bop\" formControlName=\"bop\" id=\"class-bop\"><label for=\"class-bop\">Balance of Power (BOP)</label>\n        </fieldset>\n\n        <fieldset>\n          <label for=\"class\">Starting Weather</label>\n          <input type=\"radio\" name=\"weather\" formControlName=\"weather\" value=\"dry\" id=\"weather-dry\"><label for=\"weather-dry\">Dry</label>\n          <input type=\"radio\" name=\"weather\" formControlName=\"weather\" value=\"rain\" id=\"weather-rain\"><label for=\"weather-rain\">Rain</label>\n         </fieldset>\n\n        <fieldset>\n          <label for=\"class\">Changeable Weather</label>\n          <input type=\"radio\" name=\"changeableWeather\" formControlName=\"changeableWeather\" [value]=\"false\" id=\"changeable-false\"><label for=\"changeable-false\">No</label>\n          <input type=\"radio\" name=\"changeableWeather\" formControlName=\"changeableWeather\" [value]=\"true\" id=\"changeable-true\"><label for=\"changeable-true\">Yes</label>\n        </fieldset>\n\n        <fieldset>\n          <label for=\"class\">Starting Tyres</label>\n          <input type=\"radio\" name=\"tyres\" formControlName=\"tyres\" value=\"asphalt\" id=\"tyres-asphalt\"><label for=\"tyres-asphalt\">Asphalt</label>\n          <input type=\"radio\" name=\"tyres\" formControlName=\"tyres\" value=\"rain\" id=\"tyres-rain\"><label for=\"tyres-rain\">Rain</label>\n          <input type=\"radio\" name=\"tyres\" formControlName=\"tyres\" value=\"soft\" id=\"tyres-soft\"><label for=\"tyres-soft\">Soft</label>\n        </fieldset>\n\n        <fieldset>\n          <label for=\"class\">Pit Stops</label>\n          <input type=\"radio\" name=\"pits\" formControlName=\"pits\" [value]=\"false\" id=\"pits-no\"><label for=\"pits-no\">No</label>\n          <input type=\"radio\" name=\"pits\" formControlName=\"pits\" [value]=\"true\" id=\"pits-yes\"><label for=\"pits-yes\">Yes</label>\n        </fieldset>\n\n        <fieldset>\n          <label for=\"class\">ISGOYTRA Timing (00 = 30 seconds)</label>\n          <input type=\"radio\" name=\"isgoytra\" formControlName=\"isgoytra\" [value]=\"false\" id=\"isgoytra-no\"><label for=\"isgoytra-no\">No</label>\n          <input type=\"radio\" name=\"isgoytra\" formControlName=\"isgoytra\" [value]=\"true\" id=\"isgoytra-yes\"><label for=\"isgoytra-yes\">Yes</label>\n        </fieldset>\n        \n        <button type=\"submit\" class=\"button small expanded\">Race!</button>\n        <button type=\"button\" class=\"button small expanded clear secondary\" (click)=\"cancelForm()\">Cancel</button>\n      </form>\n      \n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/race/race.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/race/race.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRaceRaceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"grid-container screen-light\">\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell small-8\">\n      <h1 class=\"\">{{race.details.name}}</h1>\n    </div>\n\n    <div class=\"cell small-4\">\n      <h1 class=\"digit text-right\">{{formatTime(this.race.dashboard.totalTime - race.dashboard.focusTokens)}}</h1>\n    </div>\n  </div>\n\n  <p>Class: {{race.dashboard.class}} | Gear: {{race.dashboard.gear}} | Focus Tokens: {{race.dashboard.focusTokens}} | Gear Damage: {{race.dashboard.gearDamage}} | Brake Damage: {{race.dashboard.brakeDamage}} | Coast Damage: {{race.dashboard.coastDamage}} | Weather: {{race.dashboard.weather}} | Tyres: {{race.dashboard.tyres}}</p>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell shrink\">\n      <button class=\"button gear die digit g0\" [disabled]=\"race.dashboard.gear != '00'\" type=\"button\" [ngClass]=\"{'selected':gear0.selected}\" (click)=\"dieSelected(gear0)\">{{gear0.label}}</button>\n    </div>\n<!--     <div class=\"cell shrink\">\n      <button class=\"button gear die digit g00\" type=\"button\" [ngClass]=\"{'selected':gear00.selected}\" (click)=\"dieSelected(gear00)\">{{gear00.label}}</button>\n    </div> -->\n    <div *ngFor=\"let gear of gears\" class=\"cell shrink\">\n      <button class=\"button gear die digit\" [disabled]=\"race.dashboard.gear == '00'\" type=\"button\" [ngClass]=\"{'selected':gear.selected}\" [class]=\"'g'+gear.label\" (click)=\"dieSelected(gear)\">{{gear.label}}</button>\n    </div>\n     <div *ngFor=\"let brake of brakes\" class=\"cell shrink\">\n      <button class=\"button brake die digit\" [disabled]=\"race.dashboard.gear == '00'\" type=\"button\" [ngClass]=\"{'selected':brake.selected}\" (click)=\"dieSelected(brake)\"></button>\n    </div>\n    <div *ngFor=\"let coast of coasts\" class=\"cell shrink\">\n      <button class=\"button coast die digit\" [disabled]=\"race.dashboard.gear == '00'\" type=\"button\" [ngClass]=\"{'selected':coast.selected}\" (click)=\"dieSelected(coast)\"></button>\n    </div>\n    <div *ngFor=\"let boostDice of boost\" class=\"cell shrink\">\n      <button class=\"button boost die digit\" [disabled]=\"race.dashboard.gear == '00'\" type=\"button\" [ngClass]=\"{'selected':boostDice.selected}\" (click)=\"dieSelected(boostDice)\"></button>\n    </div>\n  </div>\n\n  <label for=\"focus\">Focus:</label>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell auto\">\n      <button type=\"button\" [disabled]=\"race.dashboard.gear == '00'\" class=\"button warning expanded\" [ngClass]=\"{'selected':turn.flatOut}\" (click)=\"flatOut()\">Flat Out!</button>\n    </div>\n\n    <div class=\"cell auto\">\n      <select name=\"focusTokens\" *ngIf=\"(!turn.flatOut && race.dashboard.gear != '00')\" [(ngModel)]=\"spendFocus\" (ngModelChange)=\"focusSpentSelect($event)\">\n        <option *ngFor=\"let option of spendFocusOptions\" [ngValue]=\"option.value\">{{option.label}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell small-4\">\n      <label>Loss Of Control:</label>\n      <div class=\"expanded button-group\">\n        <button type=\"button\" class=\"button alert digit\" [disabled]=\"race.dashboard.gear == '00'\" [ngClass]=\"{'selected':turn.locGear == '0'}\" (click)=\"lossOfControl('0')\">0</button>\n        <button type=\"button\" class=\"button alert digit\" [disabled]=\"race.dashboard.gear == '00'\" [ngClass]=\"{'selected':turn.locGear == '00'}\" (click)=\"lossOfControl('00')\">00</button>\n      </div>\n\n      <div *ngIf=\"turn.loc\" class=\"grid-x grid-padding-x\">\n        <div class=\"cell shrink\">\n          <button type=\"button\" class=\"button gear die expanded digit\" (click)=\"addDamage('gear')\">-G</button>\n        </div>\n        <div class=\"cell shrink\">\n          <button type=\"button\" class=\"button brake die expanded digit\" (click)=\"addDamage('brake')\">-B</button>\n        </div>\n        <div class=\"cell shrink\">\n          <button type=\"button\" class=\"button coast die expanded digit\" (click)=\"addDamage('coast')\">-C</button>\n        </div>\n\n        <div class=\"cell auto\">\n          <button type=\"button\" class=\"button expanded secondary hollow\" (click)=\"clearDamage()\">Clear</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cell small-4\" *ngIf=\"race.details.changeableWeather\">\n      <label>Weather:</label>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"cell auto\">\n          <!-- <input type=\"image\" src=\"../../assets/images/weather-change-token.png\" id=\"weather-change\" alt=\"Weather Change\" class=\"token\" (click)=\"weatherChange()\"> -->\n          <input type=\"button\" class=\"button expanded\" value=\"Change\" (click)=\"weatherChange()\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cell small-4\" *ngIf=\"race.details.pitStops\">\n      <label>Pit Stop:</label>\n      <div class=\"expanded button-group\">\n        <button type=\"button\" [disabled]=\"turn.gear != '1'\" class=\"button secondary digit\" [ngClass]=\"{'selected':turn.pitGear == '0'}\" (click)=\"pitstop('0')\">0</button>\n        <button type=\"button\" [disabled]=\"turn.gear != '1'\" class=\"button secondary digit\" [ngClass]=\"{'selected':turn.pitGear == '00'}\" (click)=\"pitstop('00')\">00</button>\n      </div>\n      <select name=\"tyreOptions\" *ngIf=\"turn.pitstop\" [(ngModel)]=\"tyreSelect\" (ngModelChange)=\"tyreChange($event)\">\n        <option *ngFor=\"let option of tyreOptions\" [ngValue]=\"option\">{{option}}</option>\n      </select>\n    </div>\n\n  </div>\n\n  \n  <label>Turn:</label>\n  <div class=\"grid-x grid-margin-x\">\n    <div class=\"cell auto\">\n      <p><strong>{{turn.entry}}</strong></p>\n    </div>\n    <div class=\"cell small-6\">\n      <button type=\"submit\" class=\"button success expanded\" value=\"Submit\" (click)=\"submitLogEntry()\">Submit</button>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"grid-x grid-padding-x\" *ngFor=\"let turn of race.log; let i = index\">\n    <div class=\"cell small-3 medium-1\">Turn {{i+1}}:</div>\n    <div class=\"cell small-5 medium-2\">{{turn.entry}}</div>\n    <div class=\"cell small-2 medium-2 digit\">{{formatTime(turn.time)}}</div>\n    <div class=\"cell small-2 medium-1 text-center\" [hidden]=\"i != race.log.length-1\" (click)=\"removeLogEntry(i)\"><span>&times;</span></div>\n  </div>\n    \n  <hr>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell small-8 medium-3\">Time:</div>\n    <div class=\"cell small-4 medium-3\"><span class=\"digit\">{{formatTime(this.race.dashboard.totalTime)}}</span></div>\n  </div>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell small-8 medium-3\">Focus:</div>\n    <div class=\"cell small-4 medium-3\"><span class=\"digit\">{{race.dashboard.focusTokens}}</span></div>\n  </div>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell small-8 medium-3\">Total:</div>\n    <div class=\"cell small-4 medium-3\"><span class=\"digit\">{{formatTime(this.race.dashboard.totalTime - race.dashboard.focusTokens)}}</span></div>\n  </div>\n\n  <label>Log Output:</label>\n  \n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell auto\">\n      <textarea #output>{{logOutput}}</textarea>\n      <button type=\"button\" class=\"button secondary hollow\" (click)=\"copyOutput(output)\">Copy Log</button>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-container\">\n\t<div class=\"grid-x grid-padding-x\">\n    \t<div class=\"cell large-6 large-offset-3\">\n\n\t\t\t<button type=\"button\" class=\"button small expanded\" routerLink=\"/configure-race\">Start New Race</button>\n\t\t\t<button *ngIf=\"raceExists\" type=\"button\" class=\"button small expanded alert\" routerLink=\"/race\">Continue Previous Race</button>\n\n\t\t</div>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _race_race_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./race/race.component */
    "./src/app/race/race.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _configure_race_configure_race_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configure-race/configure-race.component */
    "./src/app/configure-race/configure-race.component.ts");

    var routes = [{
      path: 'race',
      component: _race_race_component__WEBPACK_IMPORTED_MODULE_3__["RaceComponent"]
    }, {
      path: 'welcome',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }, {
      path: 'configure-race',
      component: _configure_race_configure_race_component__WEBPACK_IMPORTED_MODULE_5__["ConfigureRaceComponent"]
    }, {
      path: '',
      redirectTo: '/welcome',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title-bar {\n  background-color: white;\n  color: #333333;\n  height: 48px;\n}\n.title-bar img {\n  margin: 6px 24px;\n  max-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZHJlZXMvRG9jdW1lbnRzL2FwcHMvUmFsbHltYW5HVC9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRDtBRENDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWJhciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRjb2xvcjogIzMzMzMzMztcblx0aGVpZ2h0OiA0OHB4O1xuXG5cdGltZyB7XG5cdFx0bWFyZ2luOiA2cHggMjRweDtcblx0XHRtYXgtaGVpZ2h0OiAzNnB4O1xuXHR9XG59IiwiLnRpdGxlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzMzMzMzMztcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLnRpdGxlLWJhciBpbWcge1xuICBtYXJnaW46IDZweCAyNHB4O1xuICBtYXgtaGVpZ2h0OiAzNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angulartics2/ga */
    "./node_modules/angulartics2/ga/fesm2015/angulartics2-ga.js");
    /* harmony import */


    var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./localstorage.service */
    "./src/app/localstorage.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(angulartics2GoogleAnalytics, localstorage) {
        _classCallCheck(this, AppComponent);

        this.localstorage = localstorage;
        this.title = 'Rallyman GT Solo';
        angulartics2GoogleAnalytics.startTracking();
      } // initialise app


      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__["Angulartics2GoogleAnalytics"]
      }, {
        type: _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angulartics2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angulartics2 */
    "./node_modules/angulartics2/fesm2015/angulartics2.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _race_race_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./race/race.component */
    "./src/app/race/race.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _configure_race_configure_race_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./configure-race/configure-race.component */
    "./src/app/configure-race/configure-race.component.ts"); // tracking


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _race_race_component__WEBPACK_IMPORTED_MODULE_7__["RaceComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"], _configure_race_configure_race_component__WEBPACK_IMPORTED_MODULE_9__["ConfigureRaceComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angulartics2__WEBPACK_IMPORTED_MODULE_4__["Angulartics2Module"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/carClasses.ts":
  /*!*******************************!*\
    !*** ./src/app/carClasses.ts ***!
    \*******************************/

  /*! exports provided: DiceType, GT6, GT6BOP, GT5, GT5BOP, GT4 */

  /***/
  function srcAppCarClassesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiceType", function () {
      return DiceType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GT6", function () {
      return GT6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GT6BOP", function () {
      return GT6BOP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GT5", function () {
      return GT5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GT5BOP", function () {
      return GT5BOP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GT4", function () {
      return GT4;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DiceType;

    (function (DiceType) {
      DiceType["gear"] = "gear";
      DiceType["coast"] = "coast";
      DiceType["brake"] = "brake";
      DiceType["boost"] = "boost";
    })(DiceType || (DiceType = {}));

    var DiceBuilder =
    /*#__PURE__*/
    function () {
      function DiceBuilder(count, name, label) {
        _classCallCheck(this, DiceBuilder);

        this.dice = [];

        for (var i = 0; i < count; ++i) {
          var n = i + 1;
          this.dice.push({
            id: name + n.toString(),
            type: name,
            label: label ? label : n.toString(),
            selected: false
          });
        }
      }

      _createClass(DiceBuilder, [{
        key: "get",
        value: function get() {
          return this.dice;
        }
      }]);

      return DiceBuilder;
    }();

    var GT6 = {
      asphalt: {
        dry: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(3, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      },
      rain: {
        dry: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      },
      soft: {
        dry: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(3, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      }
    };
    var GT6BOP = {
      asphalt: {
        dry: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(3, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      },
      rain: {
        dry: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(0, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      },
      soft: {
        dry: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(3, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(6, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      }
    };
    var GT5 = {
      asphalt: {
        dry: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(3, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        }
      },
      rain: {
        dry: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        }
      },
      soft: {
        dry: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(3, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        }
      }
    };
    var GT5BOP = {
      asphalt: {
        dry: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        }
      },
      rain: {
        dry: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(1, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(1, DiceType.boost, 'a')
        }
      },
      soft: {
        dry: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(3, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(5, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      }
    };
    var GT4 = {
      asphalt: {
        dry: {
          gears: new DiceBuilder(4, DiceType.gear),
          coasts: new DiceBuilder(3, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(4, DiceType.gear),
          coasts: new DiceBuilder(3, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      },
      rain: {
        dry: {
          gears: new DiceBuilder(4, DiceType.gear),
          coasts: new DiceBuilder(2, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(4, DiceType.gear),
          coasts: new DiceBuilder(3, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      },
      soft: {
        dry: {
          gears: new DiceBuilder(4, DiceType.gear),
          coasts: new DiceBuilder(3, DiceType.coast, 'c'),
          brakes: new DiceBuilder(2, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        },
        rain: {
          gears: new DiceBuilder(4, DiceType.gear),
          coasts: new DiceBuilder(3, DiceType.coast, 'c'),
          brakes: new DiceBuilder(1, DiceType.brake, 'b'),
          boost: new DiceBuilder(0, DiceType.boost, 'a')
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/configuration.ts":
  /*!**********************************!*\
    !*** ./src/app/configuration.ts ***!
    \**********************************/

  /*! exports provided: Weather, CarClass, Tyres, timing, damage, Dashboard */

  /***/
  function srcAppConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Weather", function () {
      return Weather;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarClass", function () {
      return CarClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tyres", function () {
      return Tyres;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timing", function () {
      return timing;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "damage", function () {
      return damage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dashboard", function () {
      return Dashboard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _carClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./carClasses */
    "./src/app/carClasses.ts");

    var Weather;

    (function (Weather) {
      Weather["dry"] = "dry";
      Weather["wet"] = "rain";
    })(Weather || (Weather = {}));

    var CarClass;

    (function (CarClass) {
      CarClass["gt6"] = "GT6";
      CarClass["gt5"] = "GT5";
      CarClass["gt4"] = "GT4";
    })(CarClass || (CarClass = {}));

    var Tyres;

    (function (Tyres) {
      Tyres["soft"] = "soft";
      Tyres["asphalt"] = "asphalt";
      Tyres["rain"] = "rain";
    })(Tyres || (Tyres = {})); // export enum PitStops {
    // 	true = 'Yes',
    // 	false = 'No'
    // }


    var timing = {
      standardRules: {
        '6': 10,
        '5': 15,
        '4': 20,
        '3': 30,
        '2': 40,
        '1': 50,
        '0': 60,
        '00': 120
      },
      isgoytraRules: {
        '6': 10,
        '5': 15,
        '4': 20,
        '3': 30,
        '2': 40,
        '1': 50,
        '0': 60,
        '00': 30
      }
    };
    var damage = [{
      id: 'G',
      label: 'Gear Damage'
    }, {
      id: 'B',
      label: 'Brake Damage'
    }, {
      id: 'C',
      label: 'Coast Damage'
    }];

    var Dashboard =
    /*#__PURE__*/
    function () {
      function Dashboard(carClass, bop, tyres, weather) {
        _classCallCheck(this, Dashboard);

        this.class = carClass;
        this.bop = bop;
        this.tyres = tyres;
        this.weather = weather;
        this.focusTokens = 0;
        this.gearDamage = 0;
        this.brakeDamage = 0;
        this.coastDamage = 0;
        this.gear = '0';
        this.totalTime = 0;
      }

      _createClass(Dashboard, [{
        key: "getDice",
        value: function getDice(carClass, bop, tyres, weather) {
          var gears;
          var coasts;
          var brakes;
          var boosts;
          console.log(bop);

          if (carClass == CarClass.gt6) {
            if (bop) {
              gears = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6BOP"][tyres][weather].gears.dice;
              coasts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6BOP"][tyres][weather].coasts.dice;
              brakes = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6BOP"][tyres][weather].brakes.dice;
              boosts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6BOP"][tyres][weather].boost.dice;
            } else {
              gears = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6"][tyres][weather].gears.dice;
              coasts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6"][tyres][weather].coasts.dice;
              brakes = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6"][tyres][weather].brakes.dice;
              boosts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT6"][tyres][weather].boost.dice;
            }
          } else if (carClass == CarClass.gt5) {
            if (bop) {
              gears = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5BOP"][tyres][weather].gears.dice;
              coasts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5BOP"][tyres][weather].coasts.dice;
              brakes = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5BOP"][tyres][weather].brakes.dice;
              boosts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5BOP"][tyres][weather].boost.dice;
            } else {
              gears = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5"][tyres][weather].gears.dice;
              coasts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5"][tyres][weather].coasts.dice;
              brakes = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5"][tyres][weather].brakes.dice;
              boosts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT5"][tyres][weather].boost.dice;
            }
          } else if (carClass == CarClass.gt4) {
            gears = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT4"][tyres][weather].gears.dice;
            coasts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT4"][tyres][weather].coasts.dice;
            brakes = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT4"][tyres][weather].brakes.dice;
            boosts = _carClasses__WEBPACK_IMPORTED_MODULE_1__["GT4"][tyres][weather].boost.dice;
          }

          return {
            gears: gears,
            coasts: coasts,
            brakes: brakes,
            boost: boosts
          };
        }
      }]);

      return Dashboard;
    }();
    /***/

  },

  /***/
  "./src/app/configure-race/configure-race.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/configure-race/configure-race.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigureRaceConfigureRaceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyZS1yYWNlL2NvbmZpZ3VyZS1yYWNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/configure-race/configure-race.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/configure-race/configure-race.component.ts ***!
    \************************************************************/

  /*! exports provided: ConfigureRaceComponent */

  /***/
  function srcAppConfigureRaceConfigureRaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigureRaceComponent", function () {
      return ConfigureRaceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angulartics2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angulartics2 */
    "./node_modules/angulartics2/fesm2015/angulartics2.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../localstorage.service */
    "./src/app/localstorage.service.ts");

    var ConfigureRaceComponent =
    /*#__PURE__*/
    function () {
      function ConfigureRaceComponent(angulartics2, localstorage, fb, router) {
        _classCallCheck(this, ConfigureRaceComponent);

        this.angulartics2 = angulartics2;
        this.localstorage = localstorage;
        this.fb = fb;
        this.router = router; // DEFAULTS

        this.setup = new _configuration__WEBPACK_IMPORTED_MODULE_5__["Dashboard"](_configuration__WEBPACK_IMPORTED_MODULE_5__["CarClass"].gt6, false, _configuration__WEBPACK_IMPORTED_MODULE_5__["Tyres"].asphalt, _configuration__WEBPACK_IMPORTED_MODULE_5__["Weather"].dry);
        this.race = {
          details: {
            name: '',
            special: '',
            class: this.setup.class,
            bop: this.setup.bop,
            weather: this.setup.weather,
            changeableWeather: false,
            tyres: this.setup.tyres,
            pitStops: false,
            isgoytra: {
              spareTyre: false
            }
          },
          dashboard: this.setup,
          log: []
        };
        this.raceDetailsForm = this.fb.group({
          name: [this.race.details.name],
          special: [this.race.details.special],
          class: [this.race.details.class],
          bop: [this.race.details.bop],
          weather: [this.race.details.weather],
          changeableWeather: [this.race.details.changeableWeather],
          tyres: [this.race.details.tyres],
          pits: [this.race.details.pitStops],
          isgoytra: [this.race.details.isgoytra.spareTyre]
        });
      } // ==========================================
      // METRICS


      _createClass(ConfigureRaceComponent, [{
        key: "metrics",
        value: function metrics(action) {
          this.angulartics2.eventTrack.next({
            action: action,
            properties: {
              category: this.race.details.class,
              label: this.race.details.isgoytra.spareTyre.toString()
            }
          });
        } // ==========================================

      }, {
        key: "cancelForm",
        value: function cancelForm() {
          this.metrics('cancel new race');
          this.router.navigate(['/', 'welcome']);
        } // Submit Race Details Form

      }, {
        key: "saveDetails",
        value: function saveDetails() {
          // Update the dashboard setup
          this.setup.class = this.raceDetailsForm.value.class;
          this.setup.bop = this.raceDetailsForm.value.bop;
          this.setup.weather = this.raceDetailsForm.value.weather;
          this.setup.tyres = this.raceDetailsForm.value.tyres;
          this.race = {
            details: {
              name: this.raceDetailsForm.value.name,
              special: this.raceDetailsForm.value.special,
              class: this.raceDetailsForm.value.class,
              bop: this.raceDetailsForm.value.bop,
              weather: this.raceDetailsForm.value.weather,
              changeableWeather: this.raceDetailsForm.value.changeableWeather,
              tyres: this.raceDetailsForm.value.tyres,
              pitStops: this.raceDetailsForm.value.pits,
              isgoytra: {
                spareTyre: this.raceDetailsForm.value.isgoytra
              }
            },
            dashboard: this.setup,
            log: []
          };
          this.metrics('save new race');
          this.localstorage.save(this.race);
          this.router.navigate(['/', 'race']);
        } // Initialise app

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.metrics('create new race');
        }
      }]);

      return ConfigureRaceComponent;
    }();

    ConfigureRaceComponent.ctorParameters = function () {
      return [{
        type: angulartics2__WEBPACK_IMPORTED_MODULE_4__["Angulartics2"]
      }, {
        type: _localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ConfigureRaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configure-race',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configure-race.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/configure-race/configure-race.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configure-race.component.scss */
      "./src/app/configure-race/configure-race.component.scss")).default]
    })], ConfigureRaceComponent);
    /***/
  },

  /***/
  "./src/app/localstorage.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/localstorage.service.ts ***!
    \*****************************************/

  /*! exports provided: LocalstorageService */

  /***/
  function srcAppLocalstorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalstorageService", function () {
      return LocalstorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocalstorageService =
    /*#__PURE__*/
    function () {
      function LocalstorageService() {
        _classCallCheck(this, LocalstorageService);

        this.localStorage = window.localStorage;
        this.raceKey = 'RallymanGT Log';
      }

      _createClass(LocalstorageService, [{
        key: "save",
        value: function save(race) {
          localStorage.setItem(this.raceKey, JSON.stringify(race));
        }
      }, {
        key: "isSaved",
        value: function isSaved() {
          if (localStorage.getItem(this.raceKey)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "load",
        value: function load() {
          if (localStorage.getItem(this.raceKey)) {
            return JSON.parse(localStorage.getItem(this.raceKey));
          }
        }
      }, {
        key: "remove",
        value: function remove() {
          localStorage.removeItem(this.raceKey);
        }
      }, {
        key: "clear",
        value: function clear() {
          localStorage.clear();
        }
      }]);

      return LocalstorageService;
    }();

    LocalstorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalstorageService);
    /***/
  },

  /***/
  "./src/app/race/race.component.scss":
  /*!******************************************!*\
    !*** ./src/app/race/race.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppRaceRaceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".die {\n  border-radius: 3px;\n  border: none;\n  color: #FFFFFF;\n  min-width: 36px;\n  min-height: 36px;\n  box-shadow: 0 3px 6px #222222;\n}\n.die.gear {\n  background-color: #1b1b19;\n}\n.die.gear.g1 {\n  color: #00a025;\n}\n.die.gear.g2 {\n  color: #bbd000;\n}\n.die.gear.g3 {\n  color: #f5be00;\n}\n.die.gear.g4 {\n  color: #ff8e00;\n}\n.die.gear.g5 {\n  color: #ef3800;\n}\n.die.gear.g6 {\n  color: #e5000f;\n}\n.die.brake {\n  background-color: #d31e0e;\n}\n.die.coast {\n  background-color: #FAFAFA;\n  color: #555555;\n}\n.die.boost {\n  background-color: #00a025;\n}\n.selected {\n  background-color: #999999;\n  opacity: 0.6;\n  color: #FFFFFF;\n}\n.digit {\n  font-family: \"Fira Code\", monospace;\n  font-weight: bold;\n}\n#weather-change {\n  max-width: 48px;\n  max-height: 48px;\n}\ntextarea {\n  height: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZHJlZXMvRG9jdW1lbnRzL2FwcHMvUmFsbHltYW5HVC9hcHAvc3JjL2FwcC9yYWNlL3JhY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JhY2UvcmFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFJQSw2QkFBQTtBQ0ZEO0FESUM7RUFDQyx5QkFBQTtBQ0ZGO0FESUU7RUFDQyxjQUFBO0FDRkg7QURLRTtFQUNDLGNBQUE7QUNISDtBRE1FO0VBQ0MsY0FBQTtBQ0pIO0FET0U7RUFDQyxjQUFBO0FDTEg7QURRRTtFQUNDLGNBQUE7QUNOSDtBRFNFO0VBQ0MsY0FBQTtBQ1BIO0FEV0M7RUFDQyx5QkFBQTtBQ1RGO0FEWUM7RUFDQyx5QkFBQTtFQUNBLGNBQUE7QUNWRjtBRGFDO0VBQ0MseUJBQUE7QUNYRjtBRGdCQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNiRDtBRGdCQTtFQUNDLG1DQUFBO0VBQ0EsaUJBQUE7QUNiRDtBRGlCQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ2REO0FEaUJBO0VBQ0MsYUFBQTtBQ2REIiwiZmlsZSI6InNyYy9hcHAvcmFjZS9yYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGllIHtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3JkZXI6IG5vbmU7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXG5cdG1pbi13aWR0aDogMzZweDtcblx0bWluLWhlaWdodDogMzZweDtcblxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDZweCAjMjIyMjIyO1xuXHQtbW96LWJveC1zaGFkb3c6IDAgM3B4IDZweCAjMjIyMjIyO1xuXHRib3gtc2hhZG93OiAwIDNweCA2cHggIzIyMjIyMjtcblxuXHQmLmdlYXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsMjcsMjUsMSk7XG5cblx0XHQmLmcxIHtcblx0XHRcdGNvbG9yOiByZ2JhKDAsMTYwLDM3LDEpO1xuXHRcdH1cblxuXHRcdCYuZzIge1xuXHRcdFx0Y29sb3I6IHJnYmEoMTg3LDIwOCwwLDEpO1xuXHRcdH1cblxuXHRcdCYuZzMge1xuXHRcdFx0Y29sb3I6IHJnYmEoMjQ1LDE5MCwwLDEpO1xuXHRcdH1cblxuXHRcdCYuZzQge1xuXHRcdFx0Y29sb3I6IHJnYmEoMjU1LDE0MiwwLDEpO1xuXHRcdH1cblxuXHRcdCYuZzUge1xuXHRcdFx0Y29sb3I6IHJnYmEoMjM5LDU2LDAsMSk7XG5cdFx0fVxuXG5cdFx0Ji5nNiB7XG5cdFx0XHRjb2xvcjogcmdiYSgyMjksMCwxNSwxKTtcblx0XHR9XG5cdH1cblxuXHQmLmJyYWtlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwzMCwxNCwxKTtcblx0fVxuXG5cdCYuY29hc3Qge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG5cdFx0Y29sb3I6ICM1NTU1NTU7XG5cdH1cblxuXHQmLmJvb3N0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMTYwLDM3LDEpO1xuXHR9XG5cdFxufVxuXG4uc2VsZWN0ZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuXHRvcGFjaXR5OiAwLjY7XG5cdGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZGlnaXQge1xuXHRmb250LWZhbWlseTogJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7IFxuXHQvLyBmb250LXN0eWxlOiBpdGFsaWM7ICBcbn1cblxuI3dlYXRoZXItY2hhbmdlIHtcblx0bWF4LXdpZHRoOiA0OHB4O1xuXHRtYXgtaGVpZ2h0OiA0OHB4O1xufVxuXG50ZXh0YXJlYSB7XG5cdGhlaWdodDogMjIwcHg7XG59XG5cbiIsIi5kaWUge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1pbi13aWR0aDogMzZweDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA2cHggIzIyMjIyMjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA2cHggIzIyMjIyMjtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4ICMyMjIyMjI7XG59XG4uZGllLmdlYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjE5O1xufVxuLmRpZS5nZWFyLmcxIHtcbiAgY29sb3I6ICMwMGEwMjU7XG59XG4uZGllLmdlYXIuZzIge1xuICBjb2xvcjogI2JiZDAwMDtcbn1cbi5kaWUuZ2Vhci5nMyB7XG4gIGNvbG9yOiAjZjViZTAwO1xufVxuLmRpZS5nZWFyLmc0IHtcbiAgY29sb3I6ICNmZjhlMDA7XG59XG4uZGllLmdlYXIuZzUge1xuICBjb2xvcjogI2VmMzgwMDtcbn1cbi5kaWUuZ2Vhci5nNiB7XG4gIGNvbG9yOiAjZTUwMDBmO1xufVxuLmRpZS5icmFrZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzFlMGU7XG59XG4uZGllLmNvYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG4uZGllLmJvb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTAyNTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbiAgb3BhY2l0eTogMC42O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmRpZ2l0IHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN3ZWF0aGVyLWNoYW5nZSB7XG4gIG1heC13aWR0aDogNDhweDtcbiAgbWF4LWhlaWdodDogNDhweDtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDIyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/race/race.component.ts":
  /*!****************************************!*\
    !*** ./src/app/race/race.component.ts ***!
    \****************************************/

  /*! exports provided: RaceComponent */

  /***/
  function srcAppRaceRaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RaceComponent", function () {
      return RaceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var angulartics2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angulartics2 */
    "./node_modules/angulartics2/fesm2015/angulartics2.js");
    /* harmony import */


    var _carClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../carClasses */
    "./src/app/carClasses.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../localstorage.service */
    "./src/app/localstorage.service.ts"); //declare var $:any


    var RaceComponent =
    /*#__PURE__*/
    function () {
      // TODO
      // ==============================================
      // braking to reduce gear automatically?
      // validation?
      // Save races?
      // prevent page zoom on mobile
      // Add Specials to a race 
      function RaceComponent(angulartics2, localstorage, router) {
        _classCallCheck(this, RaceComponent);

        this.angulartics2 = angulartics2;
        this.localstorage = localstorage;
        this.router = router;
        this.tyreOptions = [_configuration__WEBPACK_IMPORTED_MODULE_6__["Tyres"].asphalt, _configuration__WEBPACK_IMPORTED_MODULE_6__["Tyres"].rain, _configuration__WEBPACK_IMPORTED_MODULE_6__["Tyres"].soft];
      } // ==========================================
      // METRICS
      // ==========================================


      _createClass(RaceComponent, [{
        key: "metrics",
        value: function metrics(action) {
          this.angulartics2.eventTrack.next({
            action: action,
            properties: {
              category: this.race.details.class,
              label: this.race.details.isgoytra.spareTyre.toString()
            }
          });
        } // ==========================================
        // FOCUS
        // ==========================================

      }, {
        key: "resetFocusSpend",
        value: function resetFocusSpend() {
          // reset the focus spend options to none
          this.spendFocus = this.spendFocusOptions[0].value;
        }
      }, {
        key: "setupFocusOptions",
        value: function setupFocusOptions() {
          this.spendFocusOptions = [];
          var n = 0;

          for (var i = 0; i < this.gears.length + this.brakes.length + this.coasts.length + this.boost.length; ++i) {
            n += i;
            var label = i == 0 ? 'None' : i + ' Dice ' + '(-' + n + ' Focus)';
            this.spendFocusOptions.push({
              label: label,
              value: n
            });
          }

          this.resetFocusSpend();
        }
      }, {
        key: "focusSpentSelect",
        value: function focusSpentSelect(focusSpent) {
          this.turn.focus = focusSpent;
          this.entry();
        }
      }, {
        key: "gainFocus",
        value: function gainFocus() {
          var focusGained = 0;

          for (var i = 0; i < this.turn.dice.length; ++i) {
            // add focus only if its a gear or coast die
            if (this.turn.dice[i].type == _carClasses__WEBPACK_IMPORTED_MODULE_5__["DiceType"].gear || this.turn.dice[i].type == _carClasses__WEBPACK_IMPORTED_MODULE_5__["DiceType"].coast) {
              focusGained++;
            }
          }

          return focusGained;
        } // ==========================================
        // LOCAL STORAGE
        // ==========================================
        // Save log to local storage

      }, {
        key: "saveRace",
        value: function saveRace(race) {
          this.localstorage.save(race);
        } // Get log from local storage

      }, {
        key: "loadRace",
        value: function loadRace() {
          this.race = this.localstorage.load();
          this.dashboard = new _configuration__WEBPACK_IMPORTED_MODULE_6__["Dashboard"](this.race.dashboard.class, this.race.dashboard.bop, this.race.dashboard.tyres, this.race.dashboard.weather);
          this.tyreSelect = this.race.dashboard.tyres;
          this.getDicePool();
          this.metrics('load race');
          this.setupFocusOptions();
          this.totalTime();
          this.output();
        } // ==========================================
        // TURN ENTRY
        // ==========================================
        // update the turn log entry

      }, {
        key: "entry",
        value: function entry() {
          this.turn.entry = '';

          for (var i = 0; i < this.turn.dice.length; ++i) {
            this.turn.entry = this.turn.entry.concat(this.turn.dice[i].label); // set turns gear only if its a gear die

            if (this.turn.dice[i].type == _carClasses__WEBPACK_IMPORTED_MODULE_5__["DiceType"].gear) {
              this.turn.gear = this.turn.dice[i].label;
            }
          } // uh oh, Loss of Control


          if (this.turn.loc) {
            // append loc gear to entry
            this.turn.entry = this.turn.entry.concat(this.turn.locGear); // set gear to LOC 

            this.turn.gear = this.turn.locGear;
          } // if pit stop


          if (this.turn.pitstop) {
            // append pit gear to entry
            this.turn.entry = this.turn.entry.concat(this.turn.pitGear + ''); // set gear to LOC 

            this.turn.gear = this.turn.pitGear;
          } // if flat out


          if (this.turn.flatOut) {
            // show focus token adjustment in parentheses (duplicate code above!)
            this.turn.entry = this.turn.entry.concat('(' + this.gainFocus() + ')');
          } else if (this.turn.focus != 0) {
            this.turn.entry = this.turn.entry.concat('(' + -this.turn.focus + ')');
          } // append Gear damage


          if (this.turn.loc) {
            this.turn.entry = this.turn.entry.concat('!');

            for (var i = 0; i < this.turn.damage.gear; ++i) {
              this.turn.entry = this.turn.entry.concat('G');
            } // append Brake damage


            for (var i = 0; i < this.turn.damage.brake; ++i) {
              this.turn.entry = this.turn.entry.concat('B');
            } // append Coast damage


            for (var i = 0; i < this.turn.damage.coast; ++i) {
              this.turn.entry = this.turn.entry.concat('C');
            }
          }

          if (this.turn.pitstop) {
            this.turn.entry = this.turn.entry.concat('[pit=' + this.tyreSelect + ']');
          } // weather change


          if (this.turn.weatherChange) {
            this.turn.entry = this.turn.entry.concat('[weather=' + this.race.dashboard.weather + ']');
          } // apply timing with this turns gear


          if (this.race.details.isgoytra.spareTyre) {
            this.turn.time = _configuration__WEBPACK_IMPORTED_MODULE_6__["timing"].isgoytraRules[this.turn.gear];
          } else {
            this.turn.time = _configuration__WEBPACK_IMPORTED_MODULE_6__["timing"].standardRules[this.turn.gear];
          }
        } // ==========================================
        // TIME FORMATTING
        // ==========================================

      }, {
        key: "formatTime",
        value: function formatTime(seconds) {
          var minuteValue = Math.floor(seconds / 60);
          var secondsValue = seconds % 60;
          var duration = moment__WEBPACK_IMPORTED_MODULE_3__().second(secondsValue).minute(minuteValue);
          return duration.format("mm:ss");
        } // total the time (seconds) not including focus token reduction
        // - focus token bonus is displayed at the end of the outputs

      }, {
        key: "totalTime",
        value: function totalTime() {
          var time = 0;

          for (var i = 0; i < this.race.log.length; ++i) {
            time += this.race.log[i].time;
          }

          this.race.dashboard.totalTime = time;
        } // ==========================================
        // DICE
        // ==========================================

      }, {
        key: "getDicePool",
        value: function getDicePool() {
          var availableDice = this.dashboard.getDice(this.race.dashboard.class, this.race.dashboard.bop, this.race.dashboard.tyres, this.race.dashboard.weather);
          this.gears = availableDice.gears;
          this.brakes = availableDice.brakes;
          this.coasts = availableDice.coasts;
          this.boost = availableDice.boost;

          for (var i = 0; i < this.gears.length; ++i) {
            this.gears[i].selected = false;
          }

          for (var i = 0; i < this.brakes.length; ++i) {
            this.brakes[i].selected = false;
          }

          for (var i = 0; i < this.coasts.length; ++i) {
            this.coasts[i].selected = false;
          }

          for (var i = 0; i < this.boost.length; ++i) {
            this.boost[i].selected = false;
          }

          this.gear0 = {
            id: '0',
            type: _carClasses__WEBPACK_IMPORTED_MODULE_5__["DiceType"].gear,
            label: '0',
            selected: false
          };
        } // select a gear

      }, {
        key: "dieSelected",
        value: function dieSelected(die) {
          die.selected = !die.selected;

          if (die.selected) {
            var d = {
              id: die.id,
              type: die.type,
              label: die.label,
              selected: die.selected
            };
            this.turn.dice.push(d);
          } else {
            var result = this.turn.dice.findIndex(function (element) {
              return element === die;
            });
            this.turn.dice.splice(result, 1);
          }

          this.entry();
        } // ==========================================
        // FLAT OUT
        // ==========================================
        // going flat out!

      }, {
        key: "flatOut",
        value: function flatOut() {
          this.turn.flatOut = !this.turn.flatOut;

          if (this.turn.flatOut) {
            this.turn.focus = this.gainFocus();
          } else {
            this.turn.focus = 0;
          }

          this.entry();
        } // ==========================================
        // LOSS OF CONTROL
        // ==========================================
        // oops. loss of control!

      }, {
        key: "lossOfControl",
        value: function lossOfControl(loc) {
          this.metrics('loc');
          this.turn.loc = !this.turn.loc;

          if (this.turn.loc) {
            this.turn.locGear = loc;
          } else {
            this.turn.locGear = '';
          }

          this.entry();
        } // ==========================================
        // ADD DAMAGE
        // ==========================================
        // add damage from damage tokens

      }, {
        key: "addDamage",
        value: function addDamage(type) {
          switch (type) {
            case 'gear':
              this.turn.damage.gear++;
              break;

            case 'brake':
              this.turn.damage.brake++;
              break;

            case 'coast':
              this.turn.damage.coast++;
              break;

            default:
              break;
          }

          this.entry();
        } // clear the damage - keep this???

      }, {
        key: "clearDamage",
        value: function clearDamage() {
          this.turn.damage.gear = 0;
          this.turn.damage.brake = 0;
          this.turn.damage.coast = 0;
          this.entry();
        } // ==========================================
        // RESET TURN
        // ==========================================
        // Reset the turn object for a new turn

      }, {
        key: "resetTurn",
        value: function resetTurn() {
          // reset the focus spend options
          this.resetFocusSpend();
          this.turn = {
            dice: [],
            loc: false,
            locGear: '',
            flatOut: false,
            focus: 0,
            damage: {
              gear: 0,
              brake: 0,
              coast: 0
            },
            time: 0,
            entry: '',
            gear: this.race.dashboard.gear,
            weatherChange: false,
            pitstop: false,
            pitGear: ''
          };
          this.getDicePool();
        } // ==========================================
        // LOG ENTRY
        // ==========================================
        // submitLogEntry the turn entry to the log

      }, {
        key: "submitLogEntry",
        value: function submitLogEntry() {
          // update the entry once more
          this.entry();
          this.metrics('submit entry'); // update the race log

          this.race.log.push(this.turn); // update dashboard

          if (this.turn.flatOut) {
            this.race.dashboard.focusTokens += this.turn.focus;
          } else if (this.turn.focus > 0) {
            this.race.dashboard.focusTokens -= this.turn.focus;
          }

          this.race.dashboard.gear = this.turn.gear;

          if (this.turn.pitstop) {
            this.race.dashboard.tyres = this.tyreSelect;

            if (this.turn.pitGear === '00') {
              this.race.dashboard.gearDamage = 0;
              this.race.dashboard.brakeDamage = 0;
              this.race.dashboard.coastDamage = 0;
            } else {
              this.race.dashboard.gearDamage += this.turn.damage.gear;
              this.race.dashboard.brakeDamage += this.turn.damage.brake;
              this.race.dashboard.coastDamage += this.turn.damage.coast;
            }
          }

          this.totalTime(); // save to local storage

          this.saveRace(this.race);
          this.resetTurn();
          this.output();
        } // remove a log entry

      }, {
        key: "removeLogEntry",
        value: function removeLogEntry(index) {
          var deletedEntry = this.race.log.splice(index, 1);

          if (deletedEntry[0].flatOut) {
            this.race.dashboard.focusTokens -= deletedEntry[0].focus;
          } else if (deletedEntry[0].focus > 0) {
            this.race.dashboard.focusTokens += deletedEntry[0].focus;
          }

          this.race.dashboard.gearDamage -= deletedEntry[0].damage.gear;
          this.race.dashboard.brakeDamage -= deletedEntry[0].damage.brake;
          this.race.dashboard.coastDamage -= deletedEntry[0].damage.coast; // find the last gear entry (regardless which entry was deleted)

          this.race.dashboard.gear = this.race.log[this.race.log.length - 1].gear; // find the lastest weather condition

          if (deletedEntry[0].weatherChange) {
            // switch the weather dashboard
            if (this.race.dashboard.weather == _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].dry) {
              this.race.dashboard.weather = _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].wet;
            } else if (this.race.dashboard.weather == _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].wet) {
              this.race.dashboard.weather = _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].dry;
            }

            this.getDicePool();
          }

          this.totalTime();
          this.saveRace(this.race);
          this.output();
        }
      }, {
        key: "output",
        value: function output() {
          this.logOutput = '';
          this.logOutput = (this.race.details.isgoytra.spareTyre ? 'ISGOYTRA: ' : '') + (this.race.details.name ? this.race.details.name : '') + (this.race.details.special ? '\nSpecial: ' + this.race.details.special : '') + '\nClass: ' + this.race.details.class + (this.race.details.bop ? ' BOP' : '') + '\nPit Stops: ' + (this.race.details.pitStops ? 'Yes' : 'No') + '\nStarting Weather: ' + this.race.details.weather + '\nChangeable Weather: ' + (this.race.details.changeableWeather ? 'Yes' : 'No') + '\nStarting Tyres: ' + this.race.details.tyres + '\n(' + this.formatTime(this.race.dashboard.totalTime) + '-' + this.formatTime(this.race.dashboard.focusTokens) + ') = ' + this.formatTime(this.race.dashboard.totalTime - this.race.dashboard.focusTokens) + '\n';

          for (var i = 0; i < this.race.log.length; ++i) {
            this.logOutput = this.logOutput.concat(this.race.log[i].entry + (i < this.race.log.length - 1 ? ':' : ''));
          }
        } // Copy Race log to clipboard

      }, {
        key: "copyOutput",
        value: function copyOutput(outputElement) {
          this.metrics('copy output');
          outputElement.focus();
          outputElement.select();

          try {
            var successful = document.execCommand('copy');

            if (successful) {
              alert('Race Log copied to clipboard!');
            }
          } catch (err) {
            alert('Sorry, unable to copy text. Try selecting the text, right click and "copy" or CTRL (CMD on Mac) + "C"');
          }
        } // ==========================================
        // WEATHER CHANGE
        // ==========================================

      }, {
        key: "weatherChange",
        value: function weatherChange() {
          this.metrics('weather change');
          this.turn.weatherChange = !this.turn.weatherChange; // switch the weather dashboard

          if (this.race.dashboard.weather == _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].dry) {
            this.race.dashboard.weather = _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].wet;
          } else if (this.race.dashboard.weather == _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].wet) {
            this.race.dashboard.weather = _configuration__WEBPACK_IMPORTED_MODULE_6__["Weather"].dry;
          }

          this.entry();
        } // ==========================================
        // PITSTOP
        // ==========================================

      }, {
        key: "pitstop",
        value: function pitstop(gear) {
          this.metrics('pit stop');
          this.turn.pitstop = !this.turn.pitstop;

          if (this.turn.pitstop) {
            this.turn.pitGear = gear;
          } else {
            this.turn.pitGear = '';
          }

          this.entry();
        }
      }, {
        key: "tyreChange",
        value: function tyreChange(tyres) {
          this.tyreSelect = tyres;
          this.entry();
        } // ==========================================
        // INIT APP
        // ==========================================

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.localstorage.isSaved()) {
            this.loadRace();
            this.resetTurn();
          } else {
            this.router.navigate(['/', 'welcome']);
          }
        }
      }]);

      return RaceComponent;
    }();

    RaceComponent.ctorParameters = function () {
      return [{
        type: angulartics2__WEBPACK_IMPORTED_MODULE_4__["Angulartics2"]
      }, {
        type: _localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-race',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./race.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/race/race.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./race.component.scss */
      "./src/app/race/race.component.scss")).default]
    })], RaceComponent);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.scss":
  /*!************************************************!*\
    !*** ./src/app/welcome/welcome.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angulartics2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angulartics2 */
    "./node_modules/angulartics2/fesm2015/angulartics2.js");
    /* harmony import */


    var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../localstorage.service */
    "./src/app/localstorage.service.ts");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent(angulartics2, localstorage) {
        _classCallCheck(this, WelcomeComponent);

        this.angulartics2 = angulartics2;
        this.localstorage = localstorage;
        this.raceExists = false;
      } // ==========================================
      // METRICS


      _createClass(WelcomeComponent, [{
        key: "metrics",
        value: function metrics(action) {
          this.angulartics2.eventTrack.next({
            action: action,
            properties: {
              category: '',
              label: ''
            }
          });
        } // ==========================================

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.localstorage.isSaved()) {
            this.raceExists = true;
            this.metrics('welcome back');
          } else {
            this.metrics('welcome new driver');
          }
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ctorParameters = function () {
      return [{
        type: angulartics2__WEBPACK_IMPORTED_MODULE_2__["Angulartics2"]
      }, {
        type: _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]
      }];
    };

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.scss */
      "./src/app/welcome/welcome.component.scss")).default]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/ddrees/Documents/apps/RallymanGT/app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map