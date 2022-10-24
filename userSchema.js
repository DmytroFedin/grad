const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Created date is required']
  },
  isActivated:{
    type:Boolean,
    default: false
  },
  activationLink:{
    type:String
  }
})

module.exports = model('User', UserSchema)