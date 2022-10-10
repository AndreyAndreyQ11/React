// console.log('helloy world');

const Joi = require('joi');
const randomString = require('shortid');

// const passwordSchema = Joi.string().min(3).max(11).alphanum();
// console.log(passwordSchema.validate('213'));

// console.log(randomString.generate());

const a = randomString.generate();
console.log(a);

