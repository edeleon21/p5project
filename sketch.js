let x = 400
let y = 350

let furby

function preload(){
furby = loadImage('furby.png')

}



function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  imageMode(CENTER)
}

function draw() {
  
  //mouseIsPressed
  if(keyIsPressed == true){
    x = 100
      fill(255, 0, 0)
       background(58, 166, 105)
     }else{
       background(45, 90, 200)
       x=600
     }

image(furby, windowWidth/2, windowHeight/2)
     
  point(350, 250)
  line(0,0, 300, 500)
  //print(mouseX)
  //print(mouseY)
  
  fill(50, 92, 58, 100)
  stroke(100, 20, 50)
  strokeWeight(10)
  ellipse(x, y, 100, 150)
  
  fill(42, 128, 80)
  noStroke()
  rect(mouseX, mouseY, 150, 50)
  console.log(mouseX)
  
  noFill()
  stroke(100)
  strokeWeight(5)
  triangle(500, 400, 650, 300, 680, 450)
}