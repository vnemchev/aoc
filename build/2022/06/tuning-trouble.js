"use strict";
function signalFinder(input) {
    // for (let i = 3; i < input.length; i++) {
    for (var i = 13; i < input.length; i++) {
        // const lastFour = input.substring(i - 3, i + 1);
        var lastThirteen = input.substring(i - 13, i + 1);
        // if (allUnique(lastFour)) {
        if (allUnique(lastThirteen)) {
            return i + 1;
        }
    }
}
function allUnique(string) {
    return new Set(string).size === string.length;
}
//# sourceMappingURL=tuning-trouble.js.map