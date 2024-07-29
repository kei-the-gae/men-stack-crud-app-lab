// import model here
const Cow = require('../models/cow.js');

const home = async (req, res) => {
    res.render('index.ejs');
};
const newCow = async (req, res) => {
    res.render('cows/new.ejs');
};
const create = async (req, res) => {
    await Cow.create(req.body);
    res.redirect('/cows');
};
const index = async (req, res) => {
    const allCows = await Cow.find();
    res.render('cows/index.ejs', { cows: allCows });
};

module.exports = {
    home,
    new: newCow,
    create,
    index,
};