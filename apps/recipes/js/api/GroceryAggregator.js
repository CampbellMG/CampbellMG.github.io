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
    var GroceryAggregator = /** @class */ (function () {
        function GroceryAggregator(listItems) {
            var _this = this;
            this.results = [];
            this.quantityMap = {};
            this.ingredientRegexp = /(\d+)(.*)/g;
            this.parseIngredients = function (ingredient) {
                var match = _this.ingredientRegexp.exec(ingredient);
                if (match == null) {
                    _this.results.push(ingredient);
                }
                while (match != null) {
                    if (match.length === 3) {
                        if (match[2] in _this.quantityMap) {
                            _this.quantityMap[match[2]] += parseFloat(match[1]);
                        }
                        else {
                            _this.quantityMap[match[2]] = parseFloat(match[1]);
                        }
                    }
                    else {
                        _this.results.push(ingredient);
                    }
                    match = _this.ingredientRegexp.exec(ingredient);
                }
            };
            this.listItems = listItems;
        }
        GroceryAggregator.prototype.getListItems = function () {
            this.listItems.forEach(this.parseIngredients);
            this.mapQuantityMapToResults();
            this.results.sort();
            return this.results;
        };
        GroceryAggregator.prototype.mapQuantityMapToResults = function () {
            var _this = this;
            Object.keys(this.quantityMap).forEach(function (ingredient) {
                _this.results.push(_this.quantityMap[ingredient] + ingredient);
            });
        };
        return GroceryAggregator;
    }());
    exports.GroceryAggregator = GroceryAggregator;
});
//# sourceMappingURL=GroceryAggregator.js.map