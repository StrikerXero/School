/*AJAX pull repos from github JSON*/
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        for (i = 0; i < myObj.length; i++) {
            const node = document.createElement("li");
            const textnode = document.createTextNode(myObj[i].name);
            node.appendChild(textnode);
            document.getElementById("repoList").appendChild(node);
        }
    }
    else {
        console.log("readyState:" + this.readyState + " " + "status:" + this.status);
    }
};
xhttp.open("GET", "https://api.github.com/users/StrikerXero/repos", true);
xhttp.send();



/*Hover for social media icons*/
$(".fa").hover(function () {
    $(this).css("background-color", "black");
}, function () {
    $(this).css("background-color", "white");
});