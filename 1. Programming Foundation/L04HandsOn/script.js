//Callback
const studentList = ['Callan', 'Britt', 'Ashley'];

const getStudents = () => {
  setTimeout(() => {
    studentList.forEach((student) => {
      console.log(student);
    });
  }, 500);
};

const addStudent = (student, callback) => {
  setTimeout(() => {
    studentList.push(student);
    callback();
  }, 1000);
};

addStudent('Timothy', getStudents);


//Promise
const studentList = ["Callan", "Britt", "Ashley"];

const getStudents = () => {
  setTimeout(() => {
    studentList.forEach((student) => {
      console.log(student);
    });
  }, 500);
};

const addStudent = (student) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      studentList.push(student);
      const error = false
      if (!error) {
        resolve();
      } else {
        reject("Error!");
      }
    }, 2000);
  });
};

addStudent("Timothy").then(getStudents);


//Async/Await

const studentList = ["Callan", "Britt", "Ashley"];

const getStudents = () => {
  setTimeout(() => {
    studentList.forEach((student) => {
      console.log(student);
    });
  }, 500);
};

const addStudent = (student) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      studentList.push(student);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error!");
      }
  }, 1000);
});
};

//Async/Await
const addAndGetStudents = async () => {
  await addStudent("Timothy");
  getStudents();
};

addAndGetStudents();

//
const myArray = ['First', 'Second', 'Third'];

const getItems = () => {
  setTimeout(() => {
    myArray.forEach((item) => {
      console.log(item);
    });
  }, 1000);
};

const addItem = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      myArray.push(item);
      resolve();
    }, 2000);
  });
};

const addAndGetItems = async () => {
  await addItem('Fourth');
  await addItem('Fifth');
  await addItem('Sixth');
  getItems();
};

addAndGetItems();
