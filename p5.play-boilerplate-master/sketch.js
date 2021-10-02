var bg;
 var astronaut;

   function preload(){ 
       //Background 
    bg= loadImage("images/iss.png"); 
      //Astronaut
     // sleep = loadAnimation("images/sleep.png");
    }

     function setup() {
      createCanvas(600, 500);

      astronaut = createSprite(300,230);
     // astronaut.addAnimation("sleeping", sleep);
      astronaut.scale = 0.1;
     } 

     function draw() { 
      background(bg); 
      drawSprites();


}