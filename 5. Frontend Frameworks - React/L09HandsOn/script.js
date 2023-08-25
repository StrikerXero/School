let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("birthday").innerHTML = myObj.birthday;
    }
    else {
        console.log("readyState:" + this.readyState + " " + "status:" + this.status);
    }
};
xhttp.open("GET", "einstein.json", true);
xhttp.send();

function getBio() {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            console.log(myObj);

            const node = document.createElement("p");
            const textnode = document.createTextNode(myObj.bio);
            node.appendChild(textnode);
            document.getElementById("albertInfo").appendChild(node);

            //document.getElementById("bio").innerHTML = myObj.bio;

        }

    };
    xhttp.open("GET", "einstein.json", true);
    xhttp.send();
};