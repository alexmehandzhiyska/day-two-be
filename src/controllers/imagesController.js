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

        let files = req.files;
        
        updateFileProps(files, entryId)
            .then(files => {
                return res.status(200).send(files);
            })
    });
};

const updateFileProps = async (files, entryId) => {
    for (let file of files) {
        // Add "path" property to match db key.
        file.path = `/images/${file.filename}`;

        const img = await imagesService.createOne(file.path, entryId);
        file.id = img.id
    }

    return files;
}

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