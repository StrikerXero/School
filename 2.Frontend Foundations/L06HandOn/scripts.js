

console.log("js loaded");
/*AJAX pull repos from github JSON*/
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        myObj = JSON.parse(this.responseText);
    }
    else {
        console.log("readyState:" + this.readyState + " " + "status:" + this.status);
    }
};
xhttp.open("GET", "https://api.github.com/users/StrikerXero/repos", true);
xhttp.send();



/*StickyFooter*/
/*
$(window).load(function() {
	$("#footer").stickyFooter();
});
*/