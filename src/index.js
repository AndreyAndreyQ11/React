import q1 from './js/module_1';
console.log(q1('dsa'));

import q2 from './js/module_2';

console.log(q2.m3(3));

import { q3 as value, q4 } from './js/module_3';

console.log(value);
console.log(q4);

import * as _server_ from './js/module_4';
console.log(_server_);

import Joi from "joi";

console.log(Joi);