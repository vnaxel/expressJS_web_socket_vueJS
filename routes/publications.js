const express = require('express')
const router = express.Router()

const {
    getAllPublications,
    searchPublications,
    getPublicationById,
    createPublication,
    editPublication,
    deletePublication
} = require('../controllers/publications.js')

router.get('/', getAllPublications)

router.get('/query?', searchPublications)

router.get('/:id', getPublicationById)

router.post('/', createPublication)

router.patch('/:id', editPublication)

router.delete('/:id', deletePublication)

module.exports = router