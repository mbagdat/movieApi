const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb://movie_user:admin123@ds249718.mlab.com:49718/movie-api');
    mongoose.connection.on('open', () => {
        console.log('MongoDb : Connected');
    });
    mongoose.connection.on('error',(err) => {
        console.log('MongoDb : Error',err);
    });

    mongoose.Promise = global.Promise;
};