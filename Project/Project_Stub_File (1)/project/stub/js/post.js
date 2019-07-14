function myFunction(button){
    var x =document.getElementsByTagName("p") ;
    if (x.contentEditable == "true"){
        x.contentEditable = "false";
        button.outerHTML="Edit" ;
    } else{
        x.contentEditable = "true" ;
       button.outerHTML="Save";
    }
}

function change(){
    document.getElementById("myButton1").value="Save";
}

function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = + localStorage.clickcount + " people have liked this.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
function getwords() {
  text = words.value;
  document.getElementById("para").innerHTML += '<p>'+text
  document.getElementById("words").value = "comment"
}