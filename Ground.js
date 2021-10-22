class Ground {
    constructor(x, y, width, height) {
        
        let options ={
            isStatic:true
        }
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options)
        World.add(world, this.body)
    }

    display() {
        push();
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        fill(255,0,0);
        rect()
        pop();
    }
}