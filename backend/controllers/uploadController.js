let User = require('../models/User');
const mongoose=require('mongoose')
exports.postImage=(req, res, next) => {
    const reqFiles = [];
    if(req.files.length===0){
        return res.json({error:'Please add some files'})
    }
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        imgCollection: reqFiles
    });

    user.save().then(result => {
        res.status(201).json({
            message: "Done upload!",
            userCreated: {
                _id: result._id,
                imgCollection: result.imgCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
}
exports.getImage=(req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
}