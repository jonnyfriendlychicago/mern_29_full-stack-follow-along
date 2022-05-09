// line below required on both model and config
const mongoose = require('mongoose');

const rockOutNewCollection = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('person', rockOutNewCollection);