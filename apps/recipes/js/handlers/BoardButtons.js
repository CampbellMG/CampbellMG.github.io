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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./CapabilityHandler", "../storage/CardStorage", "./TextInput", "../util/Icons"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var CapabilityHandler_1 = require("./CapabilityHandler");
    var CardStorage_1 = require("../storage/CardStorage");
    var TextInput_1 = require("./TextInput");
    var Icons_1 = require("../util/Icons");
    var BoardButtons = /** @class */ (function (_super) {
        __extends(BoardButtons, _super);
        function BoardButtons() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reduceCardsToEnergy = function (energyListId) {
                return function (sum, card) {
                    if (card.idList === energyListId && card.energy) {
                        return sum += card.energy;
                    }
                    return sum;
                };
            };
            _this.renderListSelect = function (onSelect) { return function (trello) { return __awaiter(_this, void 0, void 0, function () {
                var lists;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, trello.lists('id', 'name')];
                        case 1:
                            lists = _a.sent();
                            return [2 /*return*/, trello.popup({
                                    title: 'Select a source list',
                                    items: lists.map(function (list) { return _this.renderListItem(list, onSelect); })
                                })];
                    }
                });
            }); }; };
            _this.getGoalInputText = function (newGoal) {
                return isNaN(parseFloat(newGoal)) ? 'Enter a number to set energy' : "Set goal to " + newGoal + " " + _this.energyLabel;
            };
            _this.onSubmit = function (newGoal) { return function (trello) { return __awaiter(_this, void 0, void 0, function () {
                var parsedGoal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            parsedGoal = parseFloat(newGoal);
                            return [4 /*yield*/, this.boardStorage.setValue("energyGoal", isNaN(parsedGoal) ? 0 : parsedGoal)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.refresh()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, trello.closePopup()];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }; };
            _this.getBoardButton = function (title, callback) { return ({
                icon: Icons_1.Icons,
                text: " " + title,
                callback: callback
            }); };
            return _this;
        }
        BoardButtons.prototype.render = function () {
            return __awaiter(this, void 0, void 0, function () {
                var energyListId, _a, _b, listEnergyButton, remainingEnergyButton, addGroceryButton, refreshButton;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            console.log('Render called');
                            return [4 /*yield*/, this.boardStorage.getValue("energyList")];
                        case 1:
                            energyListId = _c.sent();
                            _a = this;
                            return [4 /*yield*/, this.getEnergyLabel()];
                        case 2:
                            _a.energyLabel = _c.sent();
                            if (!energyListId) return [3 /*break*/, 4];
                            _b = this;
                            return [4 /*yield*/, this.getEnergyTotal(energyListId)];
                        case 3:
                            _b.energyTotal = _c.sent();
                            _c.label = 4;
                        case 4: return [4 /*yield*/, this.getListEnergyButton()];
                        case 5:
                            listEnergyButton = _c.sent();
                            return [4 /*yield*/, this.getRemainingEnergyButton()];
                        case 6:
                            remainingEnergyButton = _c.sent();
                            addGroceryButton = this.getAddGroceryButton();
                            refreshButton = this.getRefreshButton();
                            return [2 /*return*/, [
                                    listEnergyButton,
                                    remainingEnergyButton,
                                    addGroceryButton,
                                    refreshButton
                                ]];
                    }
                });
            });
        };
        BoardButtons.prototype.getListEnergyButton = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getBoardButton(this.energyTotal !== undefined ? "Total: " + this.energyTotal + " " + this.energyLabel : "Select list", this.renderListSelect(function (id, trello) {
                            _this.boardStorage.setValue("energyList", id);
                            trello.closePopup();
                        }))];
                });
            });
        };
        BoardButtons.prototype.getRemainingEnergyButton = function () {
            return __awaiter(this, void 0, void 0, function () {
                var energyInput, energyGoal, text;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            energyInput = new TextInput_1.TextInput("Set energy goal", this.getGoalInputText, this.onSubmit);
                            return [4 /*yield*/, this.boardStorage.getValue("energyGoal")];
                        case 1:
                            energyGoal = _a.sent();
                            text = "Set energy goal";
                            if (this.energyTotal !== undefined && energyGoal !== undefined) {
                                text = "Remaining: " + (energyGoal - this.energyTotal) + " " + this.energyLabel;
                            }
                            return [2 /*return*/, this.getBoardButton(text, energyInput.render)];
                    }
                });
            });
        };
        BoardButtons.prototype.getAddGroceryButton = function () {
            return this.getBoardButton("Create grocery list", this.renderListSelect(function (id, trello) { return trello.popup({
                url: './authorize.html',
                title: 'Authorise',
                args: { listId: id }
            }); }));
        };
        BoardButtons.prototype.getRefreshButton = function () {
            var _this = this;
            return this.getBoardButton("Refresh", function () { return _this.refresh(); });
        };
        BoardButtons.prototype.getEnergyTotal = function (energyListId) {
            return __awaiter(this, void 0, void 0, function () {
                var cards, cardsWithEnergy;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.trello.cards('id', 'idList')];
                        case 1:
                            cards = _a.sent();
                            return [4 /*yield*/, Promise.all(cards.map(function (card) { return __awaiter(_this, void 0, void 0, function () {
                                    var _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                _a = [__assign({}, card)];
                                                _b = {};
                                                return [4 /*yield*/, new CardStorage_1.CardStorage(this.trello, card.id).getValue("energy")];
                                            case 1: return [2 /*return*/, (__assign.apply(void 0, _a.concat([(_b.energy = _c.sent(), _b)])))];
                                        }
                                    });
                                }); }))];
                        case 2:
                            cardsWithEnergy = _a.sent();
                            return [2 /*return*/, cardsWithEnergy.reduce(this.reduceCardsToEnergy(energyListId), 0)];
                    }
                });
            });
        };
        BoardButtons.prototype.renderListItem = function (list, onSelect) {
            var _this = this;
            return {
                text: list.name,
                callback: function (trello) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        onSelect(list.id, trello);
                        return [2 /*return*/];
                    });
                }); }
            };
        };
        return BoardButtons;
    }(CapabilityHandler_1.CapabilityHandler));
    exports.BoardButtons = BoardButtons;
});
//# sourceMappingURL=BoardButtons.js.map