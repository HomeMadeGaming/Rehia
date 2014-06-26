/**
 * @author HMG
 * 
 * Most variables are capital letter first. Variables that are a combination of words
 * capitalize for the first letter in each word. Variables that are single letters or
 * not an english word are usually no caps, with a few exception. The context for the
 * canvas is abbreviates "ctx". We try to keep good comments to help make the code as
 * clear as possible.
 * 
 *		MAIN GAME ENGINE 
 *
 * Functions are divided and written in seperate .js files. This file runs those functions
 * and is responsible for determining when to run those functions.
 */

var c = document.getElementById("canvas");	//Find the canvas
var ctx = c.getContext("2d");				//Get 2d context for canvas
var FPS = 60;
var TICK = 60;
var GameMode = 1;
var PIXELS = 32;

function ClearScreen(){				//Clears the Screen
	ctx.clearRect(0,0,640,480);	
}

function Update(){					//Update Values
	Player.Update();
	Collision.Edge();
	Collision.Map();
	Music.Dynamics();
	GameEvents();
};

function Draw(){					//Animation and Motion
	ClearScreen();
	DrawMap();
	Player.Draw();
};

Music.Start();
window.setInterval(Draw, 1000/FPS);		//Set Interval
window.setInterval(Update,1000/TICK);
