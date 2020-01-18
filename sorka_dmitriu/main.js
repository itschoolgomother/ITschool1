var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var ran = Math.round(Math.random() * 12)
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "blue";
function triangle(x1,y1,x2,y2,x3,y3) {
ctx.beginPath()
ctx.moveTo(x1,y1)
ctx.lineTo(x2,y2)
ctx.lineTo(x3,y3)
ctx.lineTo(x1,y1)
ctx.fill();
ctx.closePath()
}
var a87 = innerWidth/2;
var s87 = innerHeight/2;
function equalside(x,y,size) {
ctx.lineWidth=10	
ctx.beginPath()
ctx.moveTo(x-size/2,y+size/2)
ctx.lineTo((x-size/2)+size,y+size/2)
ctx.lineTo(x,(y+size/2)-size)
ctx.lineTo(x-size/2,y+size/2)
ctx.fill();
ctx.closePath()
}
equalside(a,s,500);
//triangle(300,300,400,100,500,300);
/*ctx.beginPath()
ctx.moveTo(300,300)
ctx.lineTo(600,300)
ctx.stroke();
ctx.closePath()

ctx.beginPath()
ctx.moveTo(300,300)
ctx.lineTo(500,300)
ctx.stroke();
ctx.closePath()
/*
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
*/
