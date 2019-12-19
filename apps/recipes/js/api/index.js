(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ChecklistBuilder"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var ChecklistBuilder_1 = require("./ChecklistBuilder");
    new ChecklistBuilder_1.ChecklistBuilder(window.Trello, window.TrelloPowerUp.iframe({
        appKey: "6890595d33d989e3c7c373b127a68cb7",
        appName: "Recipes"
    })).addList();
});
//# sourceMappingURL=index.js.map