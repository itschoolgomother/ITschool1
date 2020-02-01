var box = document.getElementById("gark")
window.addEventListener("scroll",function(eeeeeeeeeeeeeeee){
	console.log(pageYOffset);
	box.style.opacity=pageYOffset/3000;
if(pageYOffset<=500){
box.style.backgroundColor="blue";
}else if(pageYOffset<=1500){
box.style.backgroundColor="red";
}else if(pageYOffset>2000){
box.style.backgroundColor="green";
}
if (pageYOffset==1330){
	alert("я хочу жрать")
}
});


box.style.height="140px";
box.style.width="120px";
box.style.position="fixed";
