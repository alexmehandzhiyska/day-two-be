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

const createMany = async(req, res) => {
    const entryId = req.params.entryId;

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

const deleteOne = async(req, res) => {
    const imgId = req.params.imgId;

    try {
        const result = await imagesService.deleteOne(imgId);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

router.post('/:entryId', createMany);
router.get('/:entryId', getByEntryId);
router.delete('/:imgId', deleteOne);

module.exports = router;