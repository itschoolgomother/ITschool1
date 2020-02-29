//function setup(){
 //   createCanvas(innerWidth, innerHeight,WEBGL);
 //   background(70,70,200);
//}
//function draw(){
//	background(70,70,200);
//	rotateY(mouseX / 500);
//	rotateX(mouseY / 500);
//	ambientLight(1000);
//	ambientMaterial(200, 20, 10);
//	box(200);
//}
// slide to see how detailY works
let detailY;
function setup() {
  createCanvas(1300, 1000, WEBGL);
  detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(205, 102, 94);
  rotateY(millis() / 1000);
  cone(30, 65, 16, detailY.value());
}