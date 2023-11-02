const express = require('express');
const {
    getJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobController');
const requireAuth = require('../middleware/requireAuthorization');

const router = express.Router();

router.get('/', getJobs);

router.use(requireAuth);

router.get('/:id', getSingleJob);

router.post('/', createJob);

router.patch('/:id', updateJob);

router.delete('/:id', deleteJob);

module.exports = router;