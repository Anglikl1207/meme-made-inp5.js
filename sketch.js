var img;
var img2;
var song;
let smallPoint, largePoint;
let page = 1;

function preload() {
  img = loadImage ('cat.gif')
  song= loadSound ("techno.mp3")
 img2 = loadImage ('catvs2.png')

}


function setup() {
  createCanvas(400, 400);
  song.play();
  smallPoint = 10;
  largePoint = 50;
  noStroke();
 
  
}

function draw() {
  
  if (page == 1) {
  background(img);
    
//text propeties 
  textSize(20)
  fill(0,0,0)
  text("How I want my saturdays night ",40,03,290,150);
    
  //lights
   let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(random(255), random(255), random(255));
  ellipse(x, y, pointillize, pointillize);
  }
  
  else if(page == 2){
  console.log(mouseX + "," + mouseY);
  background(img2);
  
  //text propeties  
  strokeWeight(1); 
  textSize(22)
  fill(0,0,0)
  text("How they are ",140,03,290,150);
  
  //Draw Glasses
  stroke(0,0,0);
  strokeWeight(3);
  noFill();
  ellipse(mouseX,mouseY,30,30,);
  line(mouseX+15,mouseY,mouseX+25,mouseY);
  ellipse(mouseX+40,mouseY,30,30,);
    

}

}
  function mousePressed(){
    page = 2;
  }