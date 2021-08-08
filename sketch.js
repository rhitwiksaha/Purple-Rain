let drops;
let colors = 0;
let forward = true;

function setup() {
  // createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(1366, 768);
  drops = new Array(1000);
  for(let i = 0; i < drops.length ; i++){
    drops[i] = new Drop();
  }
  d = new Drop();
}

function draw() {
  if(forward){
    colors+=0.5;
    if(colors == 60){
      forward = false;
    }
  }
  else{
    colors-=0.5;
    if(colors == 0){
      forward = true;
    }
  }
  background(colors);
  for(let i = 0; i < drops.length ; i++){
    drops[i].fall();
    drops[i].show();
  }
}
