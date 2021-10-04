const express = require('express');
const router = express.Router();

// Load Article model
const Submission = require('../../models/Submission.js');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('Submission route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Submission.find()
    .then(submission => res.json(submission))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Submission found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Submission.create(req.body)
    .then(submission => res.json({ msg: 'Submission added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Submission' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Submission.findByIdAndUpdate(req.params.id, req.body)
    .then(submission => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Submission.findByIdAndRemove(req.params.id, req.body)
    .then(submission => res.json({ mgs: 'Submission entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an article' }));
});

module.exports = router;