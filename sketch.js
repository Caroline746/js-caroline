function setup() {
    createCanvas(470, 470);
    background("cyan");
  }
  
  function draw() {
   
    stroke("white");
    fill("orange");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 40);
    }
  }
  