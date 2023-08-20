var express = require("express");
var router = express.Router();
var models = require("../models");
const authService = require("../services/auth");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/profile", function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token).then((user) => {
      if (user) {
        res.send(JSON.stringify(user));
      } else {
        res.status(401);
        res.send("Invalid authentication token");
      }
    });
  } else {
    res.status(401);
    res.send("Must be logged in");
  }
});

//Create if user doesnt exist
router.post("/signup", function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username,
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: authService.hashPassword(req.body.password),
      },
    })
    .spread(function (result, created) {
      if (created) {
        res.send("User created successfully");
      } else {
        res.send("This user already exists");
      }
    });
});

//Login with jwt cookie
router.post("/login", function (req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username
      },
    })
    .then((user) => {
      if (!user) {
        console.log("User not found");
        return res.status(401).json({
          message: "Login failed",
        });
      } else {
        let passwordMatch = authService.comparePasswords(
          req.body.password,
          user.Password
        );
        if (passwordMatch) {
          let token = authService.signUser(user);
          res.cookie("jwt", token);
          res.send("Login successful");
        } else {
          console.log("Wrong Password");
          res.send("Wrong Password");
        }
      }
    });
});

//login jwt nullify
router.get("/logout", function (req, res, next) {
  res.cookie("jwt", "", { expires: new Date(0) });
  res.send("Logged out");
});

module.exports = router;
