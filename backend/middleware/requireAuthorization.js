const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async(req, res, next) => {
    //verify if user is authenticated
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'User Not Authorized' });
    }
    //retrieve token 
    const token = authorization.split(' ')[1];
    console.log(token);

    try {
        const { id } = jwt.verify(token, process.env.SECRET);
        console.log(jwt.verify(token, process.env.SECRET))
        req.user = await User.findOne({ _id: id }).select('_id');
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Unauthorized Request' });
    }
}

module.exports = requireAuth