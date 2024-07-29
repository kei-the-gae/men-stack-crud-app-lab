// import model here
const Cow = require('../models/cow.js');

const home = async (req, res) => {
    res.render('index.ejs');
};
const newCow = async (req, res) => {
    res.render('cows/new.ejs');
};

module.exports = {
    home,
    new: newCow,
};