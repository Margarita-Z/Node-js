const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true //zadolzitelno pole require
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
    },
    selection: {
        type: String
    }
});

module.exports = mongoose.model('employee', employeeSchema);