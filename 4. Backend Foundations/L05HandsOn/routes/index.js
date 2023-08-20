var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models');
var Sequalize = require('sequelize');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('i  dex', { title: 'Express' });
});*/

router.get('/categories', function(req, res, next) {
  models.category.findAll({}).then(categoriesFound => {
    res.render('categories', {
      category: categoriesFound
    });
  });
});

router.post('/category', (req, res) => {
  models.category.findOrCreate(
    {
      where: {
        name: req.body.name,
        default_price: req.body.default_price
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/categories');
      } else {
        res.send('This category already exists!');
      }
    });
});


router.get('/specificCategory/:id', function(req, res, next) {
  let CategoryId = parseInt(req.params.id);
  models.category.findOne({
    where: {
      category_id: CategoryId
    }
  })
  .then(category => {
    res.render('specificCategory', {
      category: category
    });
  });
});

/*
router.get('/category/:id', function(req, res, next) {
  let catId = parseInt(req.params.id);
  models.category.findOne({
    where: {
      category_id: catId
    }
  })
  .then(category => {
    res.render('category', {
      names: category
    });
  });
});
*/
module.exports = router;
