var database;
var canvas,backGroundImg,playerCount,form,player,game;
var gameState = 0;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.gameState();
    game.start();
}

function draw(){
    background("white");
    drawSprites(); 
  
}

