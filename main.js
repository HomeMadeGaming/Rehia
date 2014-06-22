/**
 * @author HMG
 */
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var FPS = 60;
var GameMode = 1;

function ClearScreen(){				//Clears the Screen
	ctx.clearRect(0,0,640,480);	
}

function Update(){					//Update Values
	
};

function Draw(){					//Animation and Motion
	DrawMap();
	DrawMe();
	MoveMe();
};

function tick() {				//Game Tick
	ClearScreen();
	Update();
	Draw();
};


window.setInterval(tick, 1000/FPS);		//Set Interval