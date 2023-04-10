const Image = require('../../models/index').Image;
const multer = require('multer');
const path = require('path');

const getByEntryId = async (entryId) => {
    const data = await Image.findAll({ 
        where: { entry_id: entryId }, 
        order: [
            ['id', 'DESC'],
        ]
    });
    return data.map(img => img.dataValues);
}

const createOne = async (filePath, entryId) => {
    const image = await Image.create({ path: filePath, entry_id: entryId });
    return image;
}

const deleteOne = async (imgId) => {
    await Image.destroy({ where: { id: imgId } });
    return { status: 'success' };
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/'));
    },
    filename: async (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);
        req.filePath = `/images/${fileName}`;
        cb(null, fileName);
    }
});

const uploadImages = multer({ storage }).array('entry-img');

module.exports = { getByEntryId, uploadImages, createOne, deleteOne };