//:id ;id delete admin list clickable list


var express = require("express");
var router = express.Router();
var models = require("../models");
var passport = require("../services/passport");

/* GET users listing. */
router.get("/", function (req, res, next) {
  if (req.isAuthenticated("local", { failureRedirect: "/users/login"})) {
  models.users.findAll({}).then(usersFound => {
  res.render("users", {
    userid: usersFound.UserId,
    firstname: usersFound.FirstName,
    lastname: usersFound.LastName,
    email: usersFound.Email,
    username: usersFound.Username,
    admin: usersFound.Admin
  });
});
} else {
  res.redirect('/users/login');
}
});


//Signup
router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.post("/signup", function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username,
      },
      defaults: {
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        Email: req.body.email,
        Password: req.body.password,
      },
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect("login");
      } else {
        res.send("This user already exists");
      }
    });
});

//Login
router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/login",
  passport.authenticate("local", { failureRedirect: "/users/login" }),
  function (req, res, next) {
    res.redirect("profile");
  }
);

router.get('/profile', function(req, res, next){
 if (req.isAuthenticated("local", { failureRedirect: "/users/login" })) {
  if (req.user) {
        models.users.findByPk(parseInt(req.user.UserId)).then((user) => {
          if (user) {
            res.render("profile", {
              firstname: user.firstname,
              lastname: user.LastName,
              email: user.Email,
              username: user.Username,
              admin: user.Admin
            });
          } else {
            res.send("User not found");
          }
        });
 }
}});



router.get("/:id", function (req, res, next) {
  if (req.isAuthenticated("local", { failureRedirect: "/users/login" })) {
  models.users
    .findByPk(parseInt(req.params.id))
    .then(user => {
      if (user) {
        res.render('profile', {
          userid: user.UserId,
          firstname: user.FirstName,
          lastname: user.LastName,
          email: user.Email,
          username: user.Username,
          admin: user.Admin
        });
      } else {
        res.send('User not found');
      }
  });
} else {
  res.redirect('/users/login');
}
});


//delete user



module.exports = router;

// router.get('/:id', function (req, res, next) {
//   if (req.user) {
//   models.users
//     .findByPk(parseInt(req.params.id))
//     .then(user => {
//       if (user) {
//         res.render('profile', {
//           firstname: user.FirstName,
//           lastname: user.LastName,
//           email: user.Email,
//           username: user.Username,
//           admin: user.Admin
//         });
//       } else {
//         res.send('User not found');
//       }
//     });
//   } else {
//     res.redirect('/users/login');
//   }
//   });




// router.get('/:id', function(req, res, next) {
//   passport.authenticate("local", { failureRedirect: "/users/login" }),
//   function(req, res, next) {
//     models.users
//       .findByPk(req.params.pk)
//       .then(users => {
//         if (user) {
//           res.render('profile', {
//             res.render('profile', {
//               firstname: user.FirstName,
//               lastname: user.LastName,
//               email: user.Email,
//               username: user.Username,
//               admin: user.Admin
//           });
//         } else {
//           res.send('User not found');
//         }
//       })
//   };
// });

// router.get("/profile", function (req, res, next) {
//   if (req.user) {
//     models.users.findByPk(parseInt(req.user.UserId)).then((user) => {
//       if (user) {
//         res.render("profile", {
//           firstname: user.FirstName,
//           lastname: user.LastName,
//           email: user.Email,
//           username: user.Username,
//           admin: user.Admin
//         });
//       } else {
//         res.send("User not found");
//       }
//     });
//   } else {
//     res.redirect("/users/login");
//   }
// });
