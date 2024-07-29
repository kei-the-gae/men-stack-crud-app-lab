// import model here
const Cow = require('../models/cow.js');

const home = async (req, res) => {
    res.render('index.ejs');
};
const newCow = async (req, res) => {
    res.send('This route sends the user a form page');
};

module.exports = {
    home,
    new: newCow,
};