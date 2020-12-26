
class Slingshot{
    constructor(bodyA,pointB){
 var options ={
     bodyA:bodyA,
     pointB:pointB,
     stiffness:0.04,
     length:10
 }
 this.sling=Constraint.create(options)
 World.add(world,this.sling)
 this.pointB=pointB
 this.sling1=loadImage("sprites/sling1.png")
 this.sling2=loadImage("sprites/sling2.png")
 this.sling3=loadImage("sprites/sling3.png")
    }
    display(){
        if(this.sling.bodyA){
            strokeWeight(4)
        line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }

        
        
    }
    fly(){
     this.sling.bodyA=null   
    }
}