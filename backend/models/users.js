const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema= new schema({
    name:{
        type: String
    },
    email: {
        type: String
     },
     designation: {
        type: String
     },
     phoneNumber: {
        type: Number
     }
  }, {
     collection: 'employees'
})
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;