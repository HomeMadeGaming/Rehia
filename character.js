/**
 * @author Vance
 */

//Information Regarding Character

var MyX=1;
var MyY=1;
var Me = new Image();
var MyPhase = 1;
var MyPhaseDirection = 1;
Me.src= "me.png";
var MyDirection = 0;


Me.onload = function(){
	
};

function DrawMe(){
	MyPhase += MyPhaseDirection;
	if (MyPhase>37)
	{
		MyPhaseDirection = -1;
	}
	if (MyPhase<0)
	{
		MyPhaseDirection = 1;
	}
	//ctx.fillStyle = "red";
	//ctx.font = "60px Arial";
	//ctx.fillText("Phase: " + MyPhase, 360, 130);
	if (MyPhase <15)
	{
		ctx.drawImage(Me,0,(MyDirection*32) + 1,32,32,0,0,32,32);
	}
	if (MyPhase>14 && MyPhase<30)
	{
		ctx.drawImage(Me,32,(MyDirection*32) + 1,32,32,0,0,32,32);
	}
	if (MyPhase > 29)
	{
		ctx.drawImage(Me,65,(MyDirection*32) + 1,32,32,0,0,32,32);
	}
	
	
}