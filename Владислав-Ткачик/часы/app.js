var line = document.getElementById("line-m");
var lineh = document.getElementById("line-h");
var timer = document.getElementById("time")

setInterval(function() {
    
	var time = new Date();
	var min = time.getMinutes()*6;
	var hours = time.getHours()*30;
	
	line.style.transform = "rotate("+min+"deg)";
    lineh.style.transform = "rotate("+hours+"deg)";
    timer.innerHTML = time.getHours()+":"+time.getMinutes();
}, 100);


