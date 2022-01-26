const Joi = require("Joi");

exports.login = Joi.object({
    phone: Joi.number().required(),
    password: Joi.string().required(),
});

exports.signup = Joi.object({
    name: Joi.string().required(),
    email: Joi.string(),
    password: Joi.string().required(),
    phone: Joi.number().required(),
    role: Joi.number(),    
})