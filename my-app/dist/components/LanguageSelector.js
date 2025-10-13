"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("@chakra-ui/react");
var _constants = require("../constants");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var languages = Object.entries(_constants.LANGUAGE_VERSIONS);
var ACTIVE_COLOR = "blue.400";
var LanguageSelector = function LanguageSelector(_ref) {
  var language = _ref.language,
    onSelect = _ref.onSelect;
  return /*#__PURE__*/React.createElement(_react.Box, {
    ml: 2,
    mb: 4
  }, /*#__PURE__*/React.createElement(_react.Text, {
    mb: 2,
    fontSize: "lg"
  }, "Language:"), /*#__PURE__*/React.createElement(_react.Menu, {
    isLazy: true
  }, /*#__PURE__*/React.createElement(_react.MenuButton, {
    as: _react.Button
  }, language), /*#__PURE__*/React.createElement(_react.MenuList, {
    bg: "#110c1b"
  }, languages.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      lang = _ref3[0],
      version = _ref3[1];
    return /*#__PURE__*/React.createElement(_react.MenuItem, {
      key: lang,
      color: lang === language ? ACTIVE_COLOR : "",
      bg: lang === language ? "gray.900" : "transparent",
      _hover: {
        color: ACTIVE_COLOR,
        bg: "gray.900"
      },
      onClick: function onClick() {
        return onSelect(lang);
      }
    }, lang, "\xA0", /*#__PURE__*/React.createElement(_react.Text, {
      as: "span",
      color: "gray.600",
      fontSize: "sm"
    }, "(", version, ")"));
  }))));
};
var _default = exports["default"] = LanguageSelector;