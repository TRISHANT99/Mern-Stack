const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Backend Started!!");
});

router.get("/contact", (req, res) => {
  // res.cookie("testToken", "thapa");
  res.send("contact us now!!");
});

router.get("/about", (req, res) => {
  res.send("about us page!!!!");
});

router.get("/login", (req, res) => {
  res.send("login now");
});

// using promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "fill the field first!!" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email exists already!!" });
//       }
//       const user = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });
//       user.save().then(() => {
//         res
//           .status(201)
//           .json({
//             message: "user registered successfuly!!",
//           })
//           .catch((err) => {
//             res.status(500).json({ err: "failed registered" });
//           });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//using async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "fill the field first!!" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email exists already!!" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "password are not matching!" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      await user.save();

      res.status(201).json({
        message: "user registered successfuly!!",
      });
    }
  } catch (err) {
    console.log(`${err} + Failed to save on database!`);
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    let token;
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "fill the field first!!" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      //creating web token by using jwt
      token = await userLogin.generateAuthToken();

      res.cookie("jwtToken", token, {
        expires: new Date(Date.now() + 10000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "login failed!! " });
      } else {
        res.json({ message: "login successfully!! " });
      }
    } else {
      res.status(400).json({ error: "invalid credientials" });
    }

    console.log(name, email);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
