var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var ran = Math.round(Math.random() * 12)
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "blue";


ctx.beginPath()
ctx.lineWidth = 10;
ctx.arc (canvas.width/4,273,50,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 10;
ctx.arc (canvas.width/4*2,273,50,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 10;
ctx.arc (canvas.width/5 *2,300,400,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 12;
ctx.arc (canvas.width/5 *2,400,200,0,Math.PI,false);
ctx.stroke();
ctx.closePath()
var cors=["red","green","black"];
var run = Math.round(Math.random()*2);
for (var i = 0; i < 600; i+=20) {
	ctx.beginPath()
	ctx.strokeStyle = cors[run];
	ctx.moveTo(220+i,0);
	ctx.lineTo(195+i,100);
	ctx.lineWidth = ran;
	ctx.stroke();
	ctx.closePath()
}
