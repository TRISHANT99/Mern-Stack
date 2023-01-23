const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn.js");

app.use(express.json());

app.use(require("./router/auth"));

// const User = require("./model/userSchema");

const PORT = process.env.PORT;

//middleware
// function middleware(req, res, next) {
//   console.log("im middleware");
//   // next();
// }
// middleware();

// app.get("/", (req, res) => {
//   res.send("heiilkachajk woikrl,wefn");
// });
// app.get("/contact", (req, res) => {
//   res.send("contact us now!!");
// });
// app.get("/about", (req, res) => {
//   res.send("about us page!!!!");
// });
// app.get("/login", (req, res) => {
//   res.send("login now");
// });

app.listen(PORT, () => {
  console.log(`start ---${PORT}`);
});
