var ushala, ushalaRunning;
var pista, pistaImg;
var bomb, bombImg;
var explosion, explosionBlowing;
var bau, bauImg;


function preload(){
ushalaRunning = loadAnimation(
"../assets/ushala1.png",
"../assets/ushala2.png",
"../assets/ushala3.png",
"../assets/ushala4.png",
"../assets/ushala5.png",
"../assets/ushala6.png"
)
pistaImg = loadImage(
"../assets/pista.png"
)
bombImg = loadImage(
"../assets/bomb.png"
)
explosionBlowing = loadAnimation(
"../assets/explosion1.png",
"../assets/explosion2.png",
"../assets/explosion3.png",
"../assets/explosion4.png"
)
bauImg = loadImage(
"../assets/bau.png"
)
}




function setup() {
  createCanvas(600,800);
  ushala = createSprite(300, 400);
  ushala.addAnimation("running", ushalaRunning);
}

function draw() {
background(225);
  
  drawSprites();
}