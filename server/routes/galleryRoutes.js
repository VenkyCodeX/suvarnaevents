const express = require('express');
const router = express.Router();
const { getGallery, createGalleryItem, deleteGalleryItem } = require('../controllers/galleryController');

router.get('/', getGallery);
router.post('/', createGalleryItem);
router.delete('/:id', deleteGalleryItem);

module.exports = router;
