const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        password: {
            type: String,
        },
        email: {
            type: String,
        },
        token: {
            type: String,
        }
    },
    {
        timestamps: true
    },
);
// mongoose schema pre middleware functions are executed one after another, when each middleware calls next
/* schema.pre('save', async function() {
    await doStuff();
    await doMoreStuff();
  }); */
userSchema.pre('save', async function (next) {
    //"this" is the document about to be saved
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
})
//scheman.methods.toJSON() method of the Mongoose API is used on the Document model
userSchema.methods.toJSON = function () {
    //"this" is the document about to be saved
    const user = this;
    const userObject = user.toObject();
    // when displaying user it should not show the password
    delete userObject.password;
    return userObject;
}

userSchema.methods.generateAuthToken = async function () {
//"this" is the document about to be saved
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.ACCESS_SECRET, { expiresIn: '48h' });
    user.token = token;
    await user.save();
    return user;
}


const User = mongoose.model('User', userSchema);
module.exports = User;