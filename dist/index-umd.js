(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.GpPrettyPrint = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Printer =
  /*#__PURE__*/
  function () {
    function Printer() {
      _classCallCheck(this, Printer);

      this.indent = "";
    }

    _createClass(Printer, [{
      key: "print",
      value: function print(node) {
        var _this = this;

        var result = [];

        switch (node.type) {
          case "source":
            node.children.forEach(function (child) {
              result.push(_this.print(child));
            });
            break;

          case "line":
            node.children.forEach(function (child) {
              result.push(_this.print(child));
            });
            result.push("\n");
            break;

          case "indent":
            this.indent += "    ";
            node.children.forEach(function (child) {
              if (child.type !== "indent") {
                result.push(_this.indent);
              }

              result.push(_this.print(child));
            });
            this.indent = this.indent.substring(0, this.indent.length - 4);
            break;

          case "text":
            return node.value;

          default:
            throw new TypeError("unrecognized node type: ".concat(node.type));
        }

        return result.join("");
      }
    }]);

    return Printer;
  }();

  exports.Printer = Printer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
