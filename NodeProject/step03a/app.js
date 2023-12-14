"use strict";
// import a from "./first";
// import { b, c as d } from "./second";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(a + b + d);
const first_js_1 = __importDefault(require("./first.js"));
const second_js_1 = require("./second.js");
console.log(first_js_1.default + second_js_1.b + second_js_1.c);
