// console.log(words.charCodeAt(0));
// alertI(String.fromCharCode(168));
 // var words = ""
 function code(type, words){
 var word = words.split("");
var shifr = [];


 for(var i =0;i<word.length;i++){
 	var code = (word[i].charCodeAt(0)+3)
 	shifr.push(String.fromCharCode(code))
 }



console.log(shifr);
}

code(1,"sdgfdr")
