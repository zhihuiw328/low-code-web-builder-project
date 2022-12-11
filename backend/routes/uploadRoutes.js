const express = require('express')
const multer = require('multer')
const path = require('path')
const {uploadFile} = require('../s3')
const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, callback){
        callback(null, 'uploads/')
    },
    filename(req, file, callback){
        callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file, callback){
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(extname && mimetype){
        return callback(null, true)
    }else{
        callback('Images only!')
    }
}

const upload = multer({
    storage,
    fileFilter: function(req, file, callback){
        checkFileType(file, callback)
    }
})

router.post('/', upload.single('image'), async (req, res) => {
    console.log("inside uploadRoutes")
    res.send(`/${req.file.path}`) // path
    const result = await uploadFile(req.file)
    console.log(result)

})


module.exports = router