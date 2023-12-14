"use strict";
let primeNo = 11;
let check = 0;
for (let i = 2; i < primeNo; i++) {
    //console.log("divisor ", primeNo % i);
    //console.log(i);
    if (primeNo % i == 0) {
        check = 1;
        break;
    }
}
if (check == 1) {
    console.log(`Not Prime No ${primeNo}`);
}
else {
    console.log(`Prime No ${primeNo}`);
}
