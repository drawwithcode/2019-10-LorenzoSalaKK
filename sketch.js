var porygon, portex;

function preload(){
  porygon = loadModel("./assets/porygon.obj", true)
  portex = loadImage('./assets/porygon4.png')
  substitute = loadModel("./assets/Substitute.obj", true)
  subtex = loadImage("./assets/glitch.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL)
  angleMode(DEGREES)

}

function draw() {
  background('black')
  var locx = mouseX - windowWidth / 2;
  var locy = mouseY - windowHeight / 2;
  // background('black')


  ambientLight(15, 15, 15)
  pointLight(200, 255, 255, locx, locy, 1000)
  noStroke()

  push()
  rotateY(180 + frameCount * 0.5)
  rotateX(120 + frameCount * 0.65)
  rotateZ(- 15 + frameCount * 0.33)
  scale(2)
  texture(portex)
  model(porygon)
  pop()
  rotateZ(frameCount)

  translate(0,windowHeight/2.5,0)
  rotateY(frameCount*3)
  scale(0.5)

  texture(subtex)
  model(substitute)
}
