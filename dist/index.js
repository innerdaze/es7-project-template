"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _betterReactSpinkit = require("better-react-spinkit");

var _fonts = _interopRequireDefault(require("./assets/css/fonts.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var modalStyle = {
  overlay: {
    backgroundColor: 'rgba(255, 102, 0, 1)'
  },
  content: {
    background: 'transparent',
    border: 0,
    padding: 0,
    top: 0,
    left: 15,
    right: 15,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
var modalInnerStyle = {
  color: 'white',
  fontFamily: 'Montserrat',
  fontStyle: 'bold',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};
var modalTitleStyle = {
  marginBottom: '1em',
  letterSpacing: '6px',
  textTransform: 'uppercase'
};
var modalSubtitleStyle = {
  marginTop: '1.2em',
  letterSpacing: '0.1px',
  wordWrap: 'wrap',
  fontStyle: 'italic',
  fontFamily: 'EB Garamond'
};
var theme = {
  modal: modalStyle,
  inner: modalInnerStyle,
  title: modalTitleStyle,
  subTitle: modalSubtitleStyle
};

var LoadingModal = function LoadingModal(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["children", "title", "subTitle", "theme"]);

  return _react.default.createElement(_reactModal.default, _extends({}, props, {
    style: theme.modal,
    ariaHideApp: false
  }), _react.default.createElement("div", {
    style: theme.inner
  }, _react.default.createElement("h1", {
    style: theme.title
  }, title), _react.default.createElement(_betterReactSpinkit.CubeGrid, {
    name: "line-scale-pulse-out",
    color: "white"
  }), _react.default.createElement("h2", {
    style: theme.subTitle
  }, subTitle), children));
};

LoadingModal.defaultProps = {
  theme: theme
};
var _default = LoadingModal;
exports.default = _default;
