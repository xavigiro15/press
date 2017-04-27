// const mongoose = require('mongoose')
// const db = require('../db')
//
// const scoreSchema = mongoose.Schema({
//   name: String,
//   value: Number,
// })
//
// const Score = db.model('Score', scoreSchema);
// module.exports = Score;
// module.exports.isValid = (data) => {
//   console.log(data);
//   return data.hasOwnProperty('name')
//     && data.hasOwnProperty('value')
// }
// module.exports.validatedData = (data) => {
//   if(!module.exports.isValid(data)) throw new Error('Data has no valid format');
//   return {
//     name: data.name,
//     value: data.value
//   }
// }



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pressParty');

const scoreSchema = mongoose.Schema({
  name: String,
  value: Number,
})

const Score = mongoose.model('Score', scoreSchema);

var kitty = new Score({
  name: 'Zildjian',
  value: '300'
  });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('yay');
  }
});
