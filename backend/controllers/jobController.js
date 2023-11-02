const mongoose = require('mongoose');
const Job = require('../models/jobModel');

const getJobs = async(req, res) => {
    try {
        const jobs = await Job.find({}).sort({ createdAt: -1 });
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

const getSingleJob = async(req, res) => {
    const { id } = req.params;
    if (!id) {
        throw Error('Job does not exist');
    }
    try {
        const job = await Job.findById(id);
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Job does not exist' });
    }
}

const createJob = async(req, res) => {
    const { title, description, comp, location } = req.body;
    try {
        const creator_id = req.user._id;
        const job = await Job.create({ title, description, comp, location, creator_id });
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

const updateJob = async(req, res) => {
    const { id } = req.params;
    if (!id) {
        throw Error('Job does not exist');
    }
    try {
        const job = await Job.findByIdAndUpdate(id);
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

const deleteJob = async(req, res) => {
    const { id } = req.params;
    if (!id) {
        throw Error('Job does not exist');
    }
    try {
        const job = await Job.findByIdAndDelete(id);
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob
}