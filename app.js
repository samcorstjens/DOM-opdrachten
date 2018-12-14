//Exercise 1
document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");

document.getElementById("first-paragraph").classList.remove("bg-lime", "gray");
document.getElementById("first-paragraph").classList.add("aqua");


function myFunction1() {
    var x = document.querySelectorAll(".bg-silver");
    console.log(x);
    for(i=0;i<x.length;i++){
    x[i].classList.add("bg-teal");
    x[i].classList.remove("bg-silver");
    }

}
myFunction1();

function myFunction2(){
var block = document.querySelectorAll("blockquote");
console.log(block);
for (i=0;i<block.length;i++){
  block[i].classList.add("bg-white");
}
}

myFunction2();

//Exercise 2
var query = document.querySelector("#my-table");
console.log(query);
query.classList.add("bg-purple");

var queryselect = document.querySelectorAll(".container");
console.log(queryselect);
for (i=0;i<queryselect.length;i++){
  queryselect[i].classList.add("shadow");
}

//Exercise 3
var pre = document.querySelectorAll("pre");
console.log(pre);
for (i=0;i<pre.length;i++){
  pre[i].style.color ="blue";
  pre[i].style.backgroundColor = "green";
  pre[i].style.borderTop= "3px solid red";
  pre[i].style.borderBottom = "3px solid red";
}

var h3eerste = document.querySelector("h3");
console.log(h3eerste);
h3eerste.innerHTML="<em>Italic title ! yeah !</em>";

var h2eerste = document.querySelector("h2");
console.log(h2eerste);
h2eerste.innerHTML = "<strong> HTML doesn't work ! </strong>";

//Exercise 4
var elementli = document.createElement("li");
//var litext = document.createTextNode("My best friend is <a href='http://www.google.com'>Google</a>");
elementli.innerHTML = "My best friend is <a href='http://www.google.com'>Google</a>"
document.querySelector("ul").appendChild(elementli);
console.log(elementli);
document.querySelector("li a").style.color="red";

//Exercise 5
var ollijst = document.querySelector("ol");
var olkinderen = document.querySelector("ol").children;
console.log(olkinderen);
while(ollijst.hasChildNodes()){
  ollijst.removeChild(ollijst.firstChild);

}

var lijstAray = ["My best friend is <a href='http://silentteacher.toxicode.fr/'>Silent Teach</a>","My best friend is <a href='https://www.playcodemonkey.com/'>Code Monkey</a>","My best friend is <a href='https://codecombat.com/'>CodeCombat</a>"];

for(i=0;i<lijstAray.length;i++){
  var createLi = document.createElement("li");
  createLi.innerHTML=lijstAray[i];
  ollijst.appendChild(createLi);
}
