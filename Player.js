class Player{
   constructor(x,y){
      this.x = x;
      this.y = y; 
      this.spt=createSprite(tiis.x, this.y, 50,50)
   }


    move(xdir,ydir){
        this.spt.x +=xdir*grid
        this.spt.y +=ydir*grid
}

}

