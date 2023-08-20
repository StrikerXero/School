const axios = require("axios"); //Link axios

//Variables
let url = "https://jsonplaceholder.typicode.com/users"; //Json data to use
const postData = {
  name: "Drogon",
  username: "dragons4Life",
  email: "dragon@dragons4Life.GOT",
}; //Create entry that will later be deleted
const putData = {
  name: "Apple Bee",
}; //Data to update

//Post
axios.post(url, postData).then(function (res) {
  console.log(res);
});

//Read
axios
    .get(url)
    .then(function (res){
        console.log(res);
});


//Update
urlEntry = url + "/1"; //append url to target id:1
axios.put(urlEntry, putData).then(function (res) {  
    console.log(res);
  });


//Only console logs status and statusText
axios.put(urlEntry, putData).then(function (res) {
  axios.get(urlEntry, putData).then(function(res) {
    console.log(res.status, res.statusText);
  }) 
});


//Delete
urlDelete = url + "/2"; //append url to target id:1
axios.delete(urlDelete).then(function(res){
  console.log(res);
  //return res; //Can return be used instead
});



