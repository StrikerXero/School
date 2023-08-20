const showMyInfo = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const dateString = `${month}/${day}/${year}`;
  document.getElementById("date").innerHTML = dateString;
  document.getElementById("name").innerHTML = "Jon";
};
