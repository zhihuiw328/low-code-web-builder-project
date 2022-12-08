const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
    userId: String,
    state: String, 
    name: String,
    template: String,
});

module.exports = mongoose.model('Template', TemplateSchema);