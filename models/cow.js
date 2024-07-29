const mongoose = require('mongoose');

const cowSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    isHighland: Boolean,
    description: { type: String, required: true },
    image: String,
});

const Cow = mongoose.model('Cow', cowSchema);
module.exports = Cow;