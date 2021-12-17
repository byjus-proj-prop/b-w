var ball;
var db;
var pos;
var imgP,imgBg;
function preload() {
    imgP = loadImage("hotairballoon1.png");
    imgBg = loadImage("cityimage.png");
}
function setup(){
    createCanvas(500,500)
    ball = createSprite(250,250,10,10)
    ball.addImage(imgP);
    ball.scale = 0.3;
}

function draw(){
    background(imgBg);
    if(keyDown(LEFT_ARROW)){
        changePos(-1,0)
    } else if(keyDown(RIGHT_ARROW)){
        changePos(1,0)
    } else if(keyDown(UP_ARROW)){
        changePos(0,-1)
    } else if(keyDown(DOWN_ARROW)){
        changePos(0,1)
    }
    
    drawSprites();
}
function changePos(x,y){
    ball.x+=x;
    ball.y+=y;
}