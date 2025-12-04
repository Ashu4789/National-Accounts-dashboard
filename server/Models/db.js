const mogoose = require('mongoose');

const mongoURI = process.env.MONGO_CONN;

mogoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});