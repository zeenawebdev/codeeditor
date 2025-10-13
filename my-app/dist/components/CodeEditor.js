"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("@chakra-ui/react");
var _react2 = require("@monaco-editor/react");
var _react3 = require("react");
var _LanguageSelector = _interopRequireDefault(require("./LanguageSelector"));
var _constants = require("../constants");
var _Output = _interopRequireDefault(require("./Output"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CodeEditor = function CodeEditor() {
  var editorRef = (0, _react3.useRef)();
  var _useState = (0, _react3.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react3.useState)("javascript"),
    _useState4 = _slicedToArray(_useState3, 2),
    language = _useState4[0],
    setLanguage = _useState4[1];
  var onMount = function onMount(editor) {
    editorRef.current = editor;
    editor.focus();
  };
  var onSelect = function onSelect(language) {
    setLanguage(language);
    setValue(_constants.CODE_SNIPPETS[language]);
  };
  return /*#__PURE__*/React.createElement(_react.Box, null, /*#__PURE__*/React.createElement(_react.HStack, {
    spacing: 4
  }, /*#__PURE__*/React.createElement(_react.Box, {
    w: "50%"
  }, /*#__PURE__*/React.createElement(_LanguageSelector["default"], {
    language: language,
    onSelect: onSelect
  }), /*#__PURE__*/React.createElement(_react2.Editor, {
    options: {
      minimap: {
        enabled: false
      }
    },
    height: "75vh",
    theme: "vs-dark",
    language: language,
    defaultValue: _constants.CODE_SNIPPETS[language],
    onMount: onMount,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    }
  })), /*#__PURE__*/React.createElement(_Output["default"], {
    editorRef: editorRef,
    language: language
  })));
};
var _default = exports["default"] = CodeEditor;