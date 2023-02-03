"use strict";
function kgToLPs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLPs(10);
kgToLPs('10kg');
console.log("aaa", kgToLPs(10));
//# sourceMappingURL=union-types.js.map