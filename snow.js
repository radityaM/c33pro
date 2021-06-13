class Snow{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            friction:0.6,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        if(Math.round(random(1,2))===1){
            this.image=loadImage("snow4.webp");
        }else{
            this.image=loadImage("snow5.webp");
        }

		this.body=Bodies.circle(this.x,this.y,this.r/2,options)
		World.add(world, this.body);
    }	
    display()
	{
			var snowpos=this.body.position;		
			push();
			translate(snowpos.x, snowpos.y);
			rotate(this.body.angle);
			fill(255,0,255);
			imageMode(CENTER);
			ellipseMode(RADIUS);
			image(this.image, 0,0,this.r*2, this.r*2);
			pop();
			
	}
}