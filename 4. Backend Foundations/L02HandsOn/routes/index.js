var express = require('express');
var router = express.Router();


let flowers = ["Orchid", "Iris", "Hydrangea", "Amaryllis", "Dahlia", "Daffodil", "Bleeding Heart"];
/* GET home page. */
router.get('/', function(req, res, next) {
  let queryFlower = req.query.flower;
  if(flowers.includes(queryFlower)) {
    res.send("Yes, we have " + queryFlower + " in our garden");
  }
  else {
    res.send("Nope, we do not have " + queryFlower + " in our garden");
  }
});

router.post('/', function (req, res, next) {
  let bodyFlower = req.body;
  if(flowers.includes(bodyFlower.flower)) {
    res.send("we Already have that flower no need to add if");
  }
  else {
    flowers.push(bodyFlower.flower);
      res.send(flowers);
  }
  });

module.exports = router;
