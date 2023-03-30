const router = require('express').Router();
const imagesService = require('../services/imagesService');

const getByEntryId = async(req, res) => {
    const entryId = req.params.entryId;

    try {
        const images = await imagesService.getByEntryId(entryId);
        res.status(200).json(images);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

const addImages = async(req, res) => {
    const entryId = req.params.entryId;
    let filePath = '';

    imagesService.uploadImages(req, res, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        const files = req.files;
        
        files.forEach(file => {
            // Add "path" property to match db key.
            file.path = `/images/${file.filename}`;

            imagesService.createOne(file.path, entryId);
        });

        return res.status(200).send(files);
    });
};

router.post('/:entryId', addImages);
router.get('/:entryId', getByEntryId);

module.exports = router;