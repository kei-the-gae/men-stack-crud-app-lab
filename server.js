const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

const cowsCtrl = require('./controllers/cows');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

// routes go here
app.get('/', cowsCtrl.home);
app.get('/cows', cowsCtrl.index);
app.get('/cows/new', cowsCtrl.new);
app.post('/cows', cowsCtrl.create);
app.get('/cows/:cowId', cowsCtrl.show);
app.get('/cows/:cowId/edit', cowsCtrl.edit);
app.put('/cows/:cowId', cowsCtrl.update);
app.delete('/cows/:cowId', cowsCtrl.delete);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});