let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv1 = require('uuidv1'),
    router = express.Router();

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv1() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

const { postImage, getImage } = require('../controllers/uploadController');
// User model

router.post('/upload-images', upload.array('imgCollection', 6),postImage)

router.get("/", getImage);


module.exports = router;