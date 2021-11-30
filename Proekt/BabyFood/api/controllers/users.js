const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()

module.exports = {
    register: async (req, res) => {
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.send({
                    error: true,
                    message: 'Email is already in use'
                });
            }

            if (!req.body.password || req.body.password != req.body.confirmationPassword) {
                return res.send({
                    error: true,
                    message: 'The password does not match'
                });
            }
            req.body.password = bcrypt.hashSync(req.body.password);
            user = await User.create(req.body);
            res.send({
                error: false,
                message: 'New user record created!',
                user: user
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                throw new Error('Email does not exite');
            }
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                throw new Error('Passwords do not match');
            }
            const payload = {
                id: user._id,
                email: user.email
            }
            const token = jwt.sign(payload, process.env.AUTH_SECRET, {
                expiresIn: '50m'
            });
            res.send({
                error: false,
                message: 'User logged in',
                token: token
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    logout: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        try {
            const paylod = {
                id: user._id,
                email: user.email
            }
            const token = jwt.sign(paylod, 'Invalid secret key', {
                expiresIn: '1'
            });
            res.send({
                error: false,
                message: 'You have been logged out',
                token: token
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });

        }
    },
    MyProfile: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)

            res.send({
                err: false,
                message: 'My profile',
                user: user
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
}