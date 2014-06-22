/**
 * @author Vance
 */

//Information Regarding Character




	/*PLAYER INFORMATION*/
var MyX=1;
var MyY=1;
var MyXed=1;
var MyYed=1;
var Me = new Image();
var MyPhase = 15;
var MyPhaseDirection = 1;
Me.src= "me.png";		//load image source
var MyDirection = 0;
var Still = true;	//Is the character moving or not






	/*DRAW CHARACTER*/
function DrawMe(){
	if (!Still)	{
		MyPhase += 2* MyPhaseDirection;
	}
	
	if (MyPhase>36)	{
		MyPhaseDirection = -1;
	}
	if (MyPhase<16 && MyPhaseDirection === -1){
		MyPhaseDirection = 1;
		Still = true;
	}
	/*
	ctx.fillStyle = "red";
	ctx.font = "30px Arial";
	ctx.fillText("X/Y:" + MyX + "/" + MyY, 360,110);
	ctx.fillText("Phase: " + MyPhase, 360, 130);
	ctx.fillText("left: " + key.left,360, 150);
	ctx.fillText("Direction: " + MyDirection, 360,170);
	ctx.fillText("Still: " + Still, 360, 190);*/
	
	if (MyPhase <15){
		ctx.drawImage(Me,0,(MyDirection*32) + 1,32,32,MyX,MyY,32,32);
	}
	if (MyPhase>14 && MyPhase<30){
		ctx.drawImage(Me,32,(MyDirection*32) + 1,32,32,MyX,MyY,32,32);
	}
	if (MyPhase > 29){
		ctx.drawImage(Me,65,(MyDirection*32) + 1,32,32,MyX,MyY,32,32);
	}
}









	/*MOVE CHARACTER*/
function MoveMe(){
	
		/*IF STILL*/
	if (Still)	{
			/*SNAPPING TO GRID*/
		if (MyX != MyXed){
			if (MyX < MyXed){
				MyX = MyXed-32;
			}
			if (MyX > MyXed){
				MyX = MyXed+32;
			}
			MyXed = MyX;
		}
		if (MyY != MyYed){
			if (MyY < MyYed){
				MyY = MyYed-32;
			}
			if (MyY > MyYed){
				MyY = MyYed+32;
			}
			MyYed = MyY;
		}
		
			/*LISTENING FOR DIRECTION*/
		MyPhase = 15;
		MyPhaseDirection = 1;
		if (key.left && !key.right && !key.up && !key.down)//When Pressing Left
		{
			MyDirection=1;
			Still = false;
			MyPhase = 1;
		}
		if (!key.left && key.right && !key.up && !key.down)//When Pressing Right
		{
			MyDirection=2;
			Still= false;
			MyPhase = 1;
		}
		if (!key.left && !key.right && key.up && !key.down)//When Pressing Up
		{
			MyDirection=3;
			Still= false;
			MyPhase = 1;
		}
		if (!key.left && !key.right && !key.up && key.down)//When Pressing Down
		{
			MyDirection=0;
			Still= false;
			MyPhase = 1;
		}
	}
	
	
		/*IF MOVING*/
	if (!Still){
		if (MyDirection === 0){
			MyY += 32/30;
		}
		if (MyDirection === 3){
			MyY -=32/30;
		}
		if (MyDirection === 1){
			MyX -= 32/30;
		}
		if (MyDirection === 2){
			MyX += 32/30;
		}
	}
}