(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./handlers/CardButtons", "./handlers/CardBadges", "./handlers/BoardButtons"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var CardButtons_1 = require("./handlers/CardButtons");
    var CardBadges_1 = require("./handlers/CardBadges");
    var BoardButtons_1 = require("./handlers/BoardButtons");
    var Recipes = /** @class */ (function () {
        function Recipes(powerUp) {
            this.powerUp = powerUp;
            this.powerUp.initialize({
                "card-buttons": function (trello) { return new CardButtons_1.CardButtons(trello).render(); },
                "card-badges": function (trello) { return new CardBadges_1.CardBadges(trello).render(); },
                "board-buttons": function (trello) { return new BoardButtons_1.BoardButtons(trello).render(); }
            });
        }
        return Recipes;
    }());
    exports.Recipes = Recipes;
});
//# sourceMappingURL=Recipes.js.map