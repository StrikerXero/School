// const { query } = require('express');
var express = require('express');
var app = express();
var router = express.Router();
var story = require('../models/storyline');
const PORT = 3000;

// app.listen(PORT, function(err){
//   if (err) console.log ("Error in server setup")
//   console.log("server listening on Port", PORT);
// });

/* GET home page. */
router.get('/', function(req,res,next) {
  res.render('index');
});

router.get('/beginning', function(req,res,next){
  let details = story.storyLine.find((deets)=>{
    return deets.storyPart === 'beginning'
  });
  
  res.render('beginning', { details });
  console.log(req.url);
});

router.get('/middle', function(req,res,next){
  let details = story.storyLine.find((deets)=>{
    return deets.storyPart === 'middle'
  });
  
  res.render('middle', { details });
  console.log(req.url);
});

router.get('/end', function(req,res,next){
  let details = story.storyLine.find((deets)=>{
    return deets.storyPart === 'end'
  });
  
  res.render('end', { details });
  console.log(req.url);
});

// router.get('/beginning', function(req, res, next) {
//   //get object that matches the id
//   let storyInfo = storyQuery.storyline.find( stor => {
//     return story === req.query.id(beginning);
//   });
//   res.render('beginning', { title: 'Express' });
// });

// router.get('/person/:id', function(req, res, next) {
//   //get object that matches the id
//   let person = users.people.find(peep => {
//     return peep.id === parseInt(req.params.id);
//   });
//   res.render('index', { title: 'Express' });
// });

// router.get('/beginning', function(req, res, next) {
//   let story = storyQuery.storyLine.find(store => {
//     return store === query("beginning");
//   });
//   res.render('beginning', { story });
// });


// router.get('/', function(req, res, next) {
//   let storyInfo = storyLine.stories.find(story => { return story.storyPart === query{storyPart: "beginning"}});
  
// });

// router.get(/middle, function(req, res, nest){
//   res.render('middle', { title: 'storyPart'});
// });


module.exports = router;