const Entry = require('../models/index').Entry;

const getAll = async () => {
    const data = await Entry.findAll({});
    const entries = data
        .map(entry => entry.dataValues)
        .sort((a, b) => b.id - a.id);
    return entries;
}

const getOne = async (entryId) => {
    const data = await Entry.findByPk(entryId);
    return data.dataValues;
}

const createOne = async () => {
    const entry = await Entry.create({content: ''});
    return entry.dataValues;
}

const updateOne = async (entryId, content) => {
    const exam = await Entry.update({ content }, { where: { id: entryId }, returning: true });
    return exam[1][0].dataValues;
}

module.exports = { getAll, getOne, createOne, updateOne };