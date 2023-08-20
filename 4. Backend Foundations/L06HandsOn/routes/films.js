const express = require("express");
var router = express.Router();
const models = require("../models");

router.get("/", function (req, res, next) {
  models.film.findAll({}).then((filmsFound) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(filmsFound));
  });
});

router.get("/:id", function (req, res, next) {
  models.film
    .findByPk(parseInt(req.params.id), {
      include: [{ model: models.actor }],
    })
    .then((filmsFound) => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(filmsFound));
    });
});

router.put("/:id", function (req, res, next) {
    let filmId = parseInt(req.params.id);
  models.film
    .update(req.body, { where: { film_id: filmId } })
    .then((result) => res.redirect("/films/" + filmId))
    .catch((err) => {
      res.status(400);
      res.send(
        "There was a problem updating the film.  Please check the film information."
      );
    });
});

// OOPS!!! thought it wanted all of them....
// router.post("/", function (req, res, next) {
//   models.film
//     .findOrCreate({
//       where: {
//         title: req.body.title,
//         release_year: req.body.release_year,
//       },
//     })
//     .spread(function (result, created) {
//       if (created) {
//         res.redirect("/films/", + result.film_id);
//       } else {
//         res.status(400)
//         res.send("This film already exists.");
//       }
//     });
// });

router.delete("/:id", function (req, res) {});

module.exports = router;
