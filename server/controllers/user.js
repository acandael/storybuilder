const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signUp(req, res) {
  const user = await User.find({
    email: req.body.email,
  });
  if (user.length >= 1) {
    return res.status(409).json({
      message: 'email exists',
    });
  } else {
    await bcrypt.hash(req.body.password, 10, (err, hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      try {
        const result = user.save();
        console.log(result);
        return res.status(201).json({
          message: 'user created',
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
          error: err,
        });
      }
    });
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user.length < 1) {
      return res.status(401).json({
        message: 'Auth failed',
      });
    }
    const result = await bcrypt.compare(req.body.password, user.password);
    if (result) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user._id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: '1h',
        }
      );
      return res.status(200).json({
        message: 'Auth successfull',
        token: token,
      });
    } else {
      return res.status(401).json({
        message: 'Auth failed',
      });
    }
  } catch (err) {
    return res.status(401).json({
      error: err,
    });
  }
}

async function remove(req, res) {
  try {
    await User.findOneAndRemove({ _id: req.params.id });
    return res.status(200).json({
      message: 'user deleted',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
}

module.exports = {
  signUp,
  remove,
  login,
};
