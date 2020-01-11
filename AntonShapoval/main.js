var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "blue";

var cx = innerWidth/2;

var cy =  innerHeight/2;


ctx.fillStyle = "red";
ctx.fillRect(cx-100,cy-100,200,200);

ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(420,420);
ctx.lineTo(400,300);
ctx.lineTo(250,250);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(210,210);
ctx.lineTo(400,300);
ctx.lineTo(250,250);
ctx.stroke();
ctx.closePath();

