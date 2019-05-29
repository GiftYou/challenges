// import { Module } from "module";

// let nod = (function(exports, require, module, __filename, __dirname) {
//     module.exports.filename = './Run.js';
// });
export default class MesinHitung{
    
    constructor(){
        this.x = 1;
    }
    
    add(param){
        // let asd = MesinHitung.add();
        // module.filename = './Run.js'

        this.x += param;
        return this;
        
    }
    substract(param){
        this.x -= param;
        return this;
    }

    multiply(param){
        this.x *= param;
        return this;
    }

    divide(param){
        this.x /= param;
        return this;
    }

    result(){
        console.log(this.x);
        return this;
    }

}

console.log('hai');