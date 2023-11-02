const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

//create jwt token
const createJwtToken = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: '2d' });
    return token;
}

const signup = async(req, res) => {
    const { email, full_name, usf_id, phone_num, password } = req.body;
    try {
        validateUser({ email, full_name, usf_id, phone_num, password });

        const existedUser = await User.findOne({ email });
        if (existedUser) {
            throw Error('Account Already Existed!');
        }
        //create salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create user using hashedPassword
        const user = await User.create({ email, full_name, usf_id, phone_num, password: hashedPassword });
        //create token
        const token = createJwtToken(user._id);

        res.status(200).json({ email, full_name, usf_id, phone_num, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const existedUser = await User.findOne({ email });
        if (!existedUser) {
            throw Error('Incorrect Email or Password!')
        }
        const matchedUser = await bcrypt.compare(password, existedUser.password);
        if (!matchedUser) {
            throw Error('Incorrect Email or Password');
        }
        const token = createJwtToken(existedUser._id);
        const { full_name, usf_id, phone_num } = existedUser;
        res.status(200).json({ email, full_name, usf_id, phone_num, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUser = async(req, res) => {
    const { id } = req.params;
    if (!id) {
        throw Error('Job does not exist');
    }
    try {
        const user = await User.findById({ _id: id });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Job does not exist' });
    }
}

//user validation
const validationSchema = Joi.object({
    email: Joi.string().email().required(),
    full_name: Joi.string().required(),
    usf_id: Joi.number().required(),
    phone_num: Joi.number().required(),
    password: Joi.string().min(8).alphanum().required()
})

function validateUser(email, usf_id, phone_num, password) {
    const { error } = validationSchema.validate(email, usf_id, phone_num, password);
    if (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    login,
    signup,
    getUser
}