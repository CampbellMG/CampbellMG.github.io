(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Icons = {
        dark: "https://cmgcode.com/apps/recipes/assets/icon-dark.svg",
        light: "https://cmgcode.com/apps/recipes/assets/icon-lite.svg"
    };
});
//# sourceMappingURL=Icons.js.map