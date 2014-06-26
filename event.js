/**
 * @author Vance
 * 
 * 		EVENTS
 * 			Listen for certain events, like walking through doors, talking to characters, etc.
 */

var Detection = false;

function Detect(X,Y){
	if (Player.x > (X*32)-16 && Player.x < (X*32)+16 && Player.y > (Y*32)-32 && Player.y < (Y*32)){
		//ctx.font = "20px Arial"; ctx.fillStyle = "white";
		//ctx.fillText("Detection",20,20);
		Detection = true;
	}
	else{
		Detection = false;
	}
}

function Warp(X,Y,ToX,ToY,ToRegion){
	if (Player.x > (X*32)-16 && Player.x < (X*32)+16 && Player.y > (Y*32)-32 && Player.y < (Y*32)){
		Player.x = ToX*32; Player.y = ToY*32;
		Map.Region = ToRegion;
		LoadMap();
	}	
}

function GameEvents(){
	switch (Map.Region){
		case 1:
			Warp(6,9,5,14,2);
		break;
		
		case 2:
			Warp(7,0.2,6,13,1);
		break;
		
		case 3:
		
		break;
	}

}
