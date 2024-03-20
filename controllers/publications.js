const Publication = require('../models/Publication.js')

const getAllPublications = (req, res) => {
    Publication.find()
        .then(publications => res.status(200).send({ success: true, msg: 'all publications', data: publications}))
        .catch(error => res.status(500).send({ success: false, msg: error}))
}

const searchPublications = (req, res) => {
    Publication.find({ content: { $regex: req.query.search, $options: 'i'}})
        .then(publications => {
            if (!publications.length) {
                return res.status(400).send({ success: false, msg: 'no publications matches query'})
            }
            res.status(200).send({ success: true, msg: 'found publications', data: publications})
        })
        .catch(error => res.status(500).send({ success: false, msg: error}))
}

const getPublicationById = (req, res) => {
    Publication.findById(req.params.id)
        .then(publication => {
            if (!publication) {
                return res.status(404).send({ success: false, msg: 'id introuvable'})
            }
            res.status(200).send({ success: true, msg: 'one publication', data: publication})
        })
        .catch(error => res.status(500).send({ success: false, msg: error}))
}

const createPublication = (req, res) => {
    Publication.create(req.body)
        .then(publication => res.status(201).send({ success: true, msg: 'publication created', data: publication}))
        .catch(error => res.status(500).send({ success: false, msg: error}))
}

const editPublication = (req, res) => {
    Publication.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(publication => {
            if (!publication) {
                return res.status(404).send({ success: false, msg: 'id introuvable'})
            }
            res.status(200).send({ success: true, msg: 'publication edited', data: publication})
        })
        .catch(error => res.status(500).send({ success: false, msg: error}))
}

const deletePublication = (req, res) => {
    Publication.findByIdAndDelete(req.params.id)
        .then(publication => {
            if (!publication) {
                return res.status(404).send({ success: false, msg: 'id introuvable'})
            }
            res.status(200).send({ success: true, msg: 'publication deleted', data: publication})
        })
        .catch(error => res.status(500).send({ success: false, msg: error}))
}

module.exports = {getAllPublications, searchPublications, getPublicationById, createPublication, editPublication, deletePublication}