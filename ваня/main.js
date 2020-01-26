var text = "sobolev loh"
var letters = text.split("");
var shifr = []
var option = prompt("1 or 2","1");


for(var i = 0; i<letters.length;i++){
	var code = letters[i].charCodeAt(0)
	if(option =="1"){
        code += 10
	}else if(option == "2"){
		code -= 10
	}else{
		alert("error")
	}
	shifr.push(String.fromCharCode(code))
}
alert(shifr)

//text.charCodeAt(0)
//String.fromCharCode(97) // text.charCodeAt(0)
//String.fromCharCode(97)