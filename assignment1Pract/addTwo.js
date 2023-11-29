function addTwo (num){
    return num + 2;

}
export(addtwo);

import{addTwo} from './addTwo.js';
console.log(addTwo(4));