(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Recipes"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Recipes_1 = require("./Recipes");
    new Recipes_1.Recipes(window.TrelloPowerUp);
});
//# sourceMappingURL=index.js.map