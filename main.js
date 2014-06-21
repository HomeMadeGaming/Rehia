/**
 * @author HMG
 */
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var FPS = 60;
var GameMode = 1;

function ClearScreen(){
	ctx.clearRect(0,0,640,480);
}

function Update(){
	
};

function Draw(){
	
};

function tick() {
	ClearScreen();
	Update();
	Draw();
	DrawMe();
	MoveMe();
};


window.setInterval(tick, 1000/FPS);