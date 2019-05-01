"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.add = function (x, y) {
        return x + y;
    };
    App.prototype.sub = function (x, y) {
        return x - y;
    };
    App.prototype.tm = function (x, y) {
        /*here is a multiline comment
        inside a function*/
        console.log('before call');
        return x * y;
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=App.js.map