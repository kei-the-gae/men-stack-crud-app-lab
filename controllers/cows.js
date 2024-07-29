// import model here
const Cow = require('../models/cow.js');

const home = async (req, res) => {
    res.render('index.ejs');
};
const index = async (req, res) => {
    const allCows = await Cow.find();
    res.render('cows/index.ejs', { cows: allCows });
};
const newCow = async (req, res) => {
    res.render('cows/new.ejs');
};
const create = async (req, res) => {
    await Cow.create(req.body);
    res.redirect('/cows');
};
const show = async (req, res) => {
    const foundCow = await Cow.findById(req.params.cowId);
    res.render('cows/show.ejs', { cow: foundCow });
};
const edit = async (req, res) => {
    const foundCow = await Cow.findById(req.params.cowId);
    console.log(foundCow);
    res.render('cows/edit.ejs', { cow: foundCow });
};
const update = async (req, res) => {
    await Cow.findByIdAndUpdate(req.params.cowId, req.body);
    res.redirect(`/cows/${req.params.cowId}`);
};
const deleteCow = async (req, res) => {
    await Cow.findByIdAndDelete(req.params.cowId);
    res.redirect('/cows');
};

module.exports = {
    home,
    index,
    new: newCow,
    create,
    show,
    edit,
    update,
    delete: deleteCow,
};