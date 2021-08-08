class Drop{
    constructor(){
        this.x = random(width);
        this.y = (-500, -300);
        this.ySpeed = random(4, 10);
        this.len = random(20, 40);
        this.gravity = 0.2;
        this.windSpeed = 0.1;
        this.color = random(120,255);
    }

    fall(){
        this.x += this.windSpeed;

        this.y += this.ySpeed;
        this.ySpeed += this.gravity;
        if(this.y > height){
            this.color = random(120,255);
            this.x = random(width);
            this.y = random(-200, -100);
            this.ySpeed = random(4, 10);
        }
    }

    show(){ 
        stroke(this.color, 0 , this.color);
        strokeWeight(3);
        line(this.x, this.y, this.x, this.y + this.len);
    }
};