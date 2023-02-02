const router = require('express').Router();
const entriesService = require('../services/entriesService');

const getAll = async(req, res) => {
    try {
        const entries = await entriesService.getAll();

        res.status(200).json(entries);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getOne = async(req, res) => {
    const entryId = req.params.entryId;

    try {
        const entry = await entriesService.getOne(entryId);

        res.status(200).json(entry);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const createOne = async(req, res) => {
    try {
        const entry = await entriesService.createOne();
        res.status(201).json(entry);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

const updateOne = async(req, res) => {
    const entryId = req.params.entryId;
    const { content } = req.body;

    try {
        const result = await entriesService.updateOne(entryId, content);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

const deleteOne = async(req, res) => {
    const entryId = req.params.entryId;

    try {
        const result = await entriesService.deleteOne(entryId);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}


router.get('/', getAll);
router.post('/', createOne);
router.get('/:entryId', getOne);
router.patch('/:entryId', updateOne);
router.delete('/:entryId', deleteOne);


module.exports = router;