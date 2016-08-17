'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (urls) {
  var hosts = urls.map(function (url) {
    return _removePortAndProtocol(url);
  });
  if (hosts.length < 2) {
    return hosts;
  }
  var domain = hosts.slice(1).reduce(function (el, acc) {
    return _commonPart(acc, el);
  }, hosts[0]);
  if (domain.length === 0) {
    return hosts;
  }
  return [domain];
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _removePortAndProtocol = function _removePortAndProtocol(url) {
  var reg = /http(|s):\/\//i;
  return url.replace(reg, '').replace(/:[0-9]{4}/i, '');
};

var _zip = function _zip(array, otherArray) {
  return array.map(function (el, index) {
    return [el, otherArray[index]];
  });
};

var _uniq = function _uniq(array) {
  return [].concat(_toConsumableArray(new Set(array)));
};
var _disassemble = function _disassemble(str) {
  return str.split('.').reverse();
};
var _assemble = function _assemble(str) {
  return str.reverse().join('.');
};

var _commonPart = function _commonPart(url, otherUrl) {
  var _map = [url, otherUrl].map(_disassemble);

  var _map2 = _slicedToArray(_map, 2);

  var that = _map2[0];
  var other = _map2[1];

  return _assemble(_uniq(_zip(that, other).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var a = _ref2[0];
    var b = _ref2[1];
    return a === b ? a : null;
  })));
};