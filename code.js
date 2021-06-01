var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["758292a2-99ff-4f10-9e5e-34d561011730"],"propsByKey":{"758292a2-99ff-4f10-9e5e-34d561011730":{"name":"Striker","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XgzG3Gmnf6pR2MgJfHMinTMDXAfsL_9G","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/758292a2-99ff-4f10-9e5e-34d561011730.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1 = createSprite(200,28,100,20);
goal1.shapeColor = "yellow";
var goal2 = createSprite(200,372,100,20);
goal2.shapeColor = "yellow";
var line1 = createSprite(390,200,5,400);
line1.shapeColor = "white";
var line2 = createSprite(200,10,400,5);
line2.shapeColor = "white";
var line3 = createSprite(10,200,5,400);
line3.shapeColor = "white";
var line4 = createSprite(200,390,400,5);
line4.shapeColor = "white";
var line6 = createSprite(200,135,400,5);
line6.shapeColor = "white";
var line7 = createSprite(200,265,400,5);
line7.shapeColor = "white";
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
var playermallet = createSprite(200,50,60,10);
playermallet.shapeColor = "black";
var computermallet = createSprite(200,350,60,10);
computermallet.shapeColor = "black";
var gamestate = "serve";
var computerscore = 0;
var playerscore = 0;

function draw() {
background("green");  
 
 
 createEdgeSprites(); 
 for(var i = 0; i < 400; i=i+20) {
   line(i,200,i+10,200);
 }
  if(keyDown("left")){
    playermallet.x = playermallet.x -10;
  }
  if(keyDown("right")){
    playermallet.x = playermallet.x +10;
  }
  if(keyDown("up")){
    if(playermallet.y>25){
    playermallet.y = playermallet.y -10;
  }
    }
    if(keyDown("down")){
     if(playermallet.y < 130){
       playermallet.y = playermallet.y +10;
     }
  }
  if (keyDown("space") &&  gamestate === "serve") {
    serve();
    striker.velocityX = striker.velocityX -1;
    striker.velocityY = striker.velocityY -1;
    gamestate = "play";
  }
   
  if(striker.isTouching(goal1) || striker.isTouching(goal2) ){
    if(striker.isTouching(goal2)){ 
        computerscore = computerscore + 1;
      }
      if(striker.isTouching(goal1)){
        playerscore = playerscore + 1;
      }
      reset();
      gamestate = "serve";
  }
  
  playermallet.bounceOff(edges);
  
  striker.bounceOff(line1);
  striker.bounceOff(line2);
  striker.bounceOff(line3);
  striker.bounceOff(line4);
  striker.bounceOff(computermallet);
  striker.bounceOff(playermallet);
  
  computermallet.x = striker.x;
   stroke("maroon") ;
   fill("maroon");
   textSize(16);
  text(computerscore,23,174);
  text(playerscore,23,226);
   
  if (playerscore === 5 || computerscore === 5){
    gamestate = "end";
    
    textSize(16);
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
    playermallet.x = 200;
    playermallet.y = 40;
  }
   if (gamestate === "serve") {
    textSize(16);
    
    text("Press Space to Strike",120,180);
    computermallet.x = 200;
    computermallet.y = 350;
  }

  if (keyDown("r") && gamestate === "end") {
    gamestate = "serve";
    computerscore = 0;
    playerscore = 0;}
  drawSprites();
}
function serve(){
striker.velocityX=10;
striker.velocityY=7;
   
}
function reset(){
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
