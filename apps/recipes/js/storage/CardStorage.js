var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Storage"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Storage_1 = require("./Storage");
    var CardStorage = /** @class */ (function (_super) {
        __extends(CardStorage, _super);
        function CardStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CardStorage.prototype.getScope = function () {
            return "card";
        };
        return CardStorage;
    }(Storage_1.Storage));
    exports.CardStorage = CardStorage;
});
//# sourceMappingURL=CardStorage.js.map