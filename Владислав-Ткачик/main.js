var box = document.getElementById("box")
var rand = Math.random() * 500;

var randr = Math.random() * 255 
var randg = Math.random() * 255
var randb = Math.random() * 255


box.style.width = rand + "px"
box.style.height = "200px"
box.style.backgroundColor ="rgb("+randr+","+randg+","+randb+")"

for (var i = 0; i <100; i++) {
   box.innerHTML += '<div class="box"></div>'
}
// alert("3+2=5")
// console.log("hello")
// console.log("How are you?")
// console.log("I'm okay. How are you?")
// console.log("I,m fine.")





