"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.jsx"));
var _react2 = require("@chakra-ui/react");
var _theme = _interopRequireDefault(require("./theme.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_client["default"].createRoot(document.getElementById('root')).render(/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_react2.ChakraProvider, {
  theme: _theme["default"]
}, /*#__PURE__*/_react["default"].createElement(_App["default"], null))));