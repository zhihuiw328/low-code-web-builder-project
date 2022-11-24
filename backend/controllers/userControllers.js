const asyncHandler = require('express-async-handler');
const User = require('../models/user');

exports.registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, passwordSecond} = req.body;
    
    if (!name || !email || !password) {
        throw new Error("Invalid name or email or password!");
    }

    if (password !== passwordSecond) {
        throw new Error('password does not match');
    }

    //  check email unique
    const existUser = await user.findOne({'email': email});
    if (existUser) {
        res.status(500);
        throw new Error("Email Exists");
    }

    const user = await User.insertMany([{
        'name': name,
        'email': email,
        'password': password,
        'dateCreated': Date.now()
    }]);

    if (user) {
        res.status(201);
        res.json({
            'message': 'OK',
            'data': user[0]
        });
    } else {
        res.status(500);
        throw new Error('Created user failed');
    }
})


exports.getUser = asyncHandler (async(req, res) => {
    const arg = url.parse(req.url).query;
    // const param = querystring.parse(arg);
    const user = await User.findById(req.params.id);
    if(user){
        res.status(200);
        res.json({
            'message': 'OK',
            'data': user[0]
        })
    } else{
        res.status(404);
        throw new Error('No User')
    }
})


exports.deleteUser = asyncHandler (async(req, res) => {
    const user = await User.deleteOne({"_id":req.params.id});
    
    if(user.ok !== 0){
        res.status(200);
        res.json({
            'message': 'OK',
            'data': user
        })
    } else{
        res.status(500);
        throw new Error('Delete User Failed')
    }
})