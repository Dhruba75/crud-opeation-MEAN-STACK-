const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydata', function (err, done) {
    if (err) {
        console.log('error occur');
    } else {
        console.log('database connected');
    }
})