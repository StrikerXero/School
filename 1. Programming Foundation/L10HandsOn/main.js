//json obj example:  {
//   "title": "title 1",
//   "creator": "creator 1",
//   "owner": "owner 1",
//   "start": 1668143709,
//   "deadline": 1668143709,
//   "progress": 92,
//   "tasks": {},
//   "id": "1"
//  }
//import axios from 'axios';
const URL = "https://636dd1dcb567eed48aca08e1.mockapi.io/api/cards/v1/cards";

//get
let getData = () => {
  axios.get(URL).then((res) => {
    console.log(res);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });
};
//push
function postData() {
  let title = document.getElementById("title").value;
  let owner = document.getElementById("owner").value;
  let start = document.getElementById("start").value;
  let deadLine = document.getElementById("deadLine").value;
  let tasks = document.getElementById("tasks").value;
  axios
    .post(URL, {
      title: title,
      owner: owner,
      start: start,
      deadLine: deadLine,
      tasks: tasks,
    })
    .then((res) => {
      console.log(res.status);
    });
}
//put
//Update
function updateCard() {
  let cardId = document.getElementById("cardIdInput").value;
  urlEntry = URL + "/" + cardId;
  console.log(urlEntry);
  let title = document.getElementById("title").value;
  let owner = document.getElementById("owner").value;
  let start = document.getElementById("start").value;
  let deadLine = document.getElementById("deadLine").value;
  let tasks = document.getElementById("tasks").value;
  
  axios
    .put(urlEntry, {
      title: title,
      owner: owner,
      start: start,
      deadLine: deadLine,
      tasks: tasks,
    })
    .then(function (res) {
      console.log(res.status);
    });
}

//delete
function deleteCard() {
  let cardId = document.getElementById("cardIdInput").value;
  urlDelete = URL + "/" + cardId;
  axios.delete(urlDelete).then(function (res) {
    console.log(res.status);
  });
}
