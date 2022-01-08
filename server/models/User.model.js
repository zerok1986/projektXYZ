const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    },
    name: {
      type: String,
      default: 'New User',
    },
    image: {
      type: String,
      default:
        'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png',
    },
  },
  {
    timestamps: true,
  }
)

const User = model('User', userSchema)
module.exports = User
