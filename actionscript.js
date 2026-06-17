/* add interaction to website */

var displayname = document.getElementById("name");
var displayplace = document.getElementById("place");

var button = document.getElementById("mybutton");

button.addEventListener("click", displaytext);

function displaytext() {
  var yourname = document.getElementById("yourname").value;
  displayname.innerHTML = yourname;
  
  var yourcity = document.getElementById("yourcity").value;
  var yourstate = document.getElementById("yourstate").value;

  displayplace.innerHTML = yourcity + ", " + yourstate;
  
}
