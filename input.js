/**
 * @author HMG
 * 
 * 		KEYBOARD LISTENER
 * 
 * Listen to keystrokes and assign true or false values to different variables.
 */

var key = {						//for simplicity sake, values are stored in the "key" object
	d:false,					//and each property should match the key pressed in real life
	left: false,
	right: false,
	up:  false,
	down: false,
	enter: false,
	p: false,
};

window.onkeydown = function(e){			//listen for key press
	e = e || window.event;
	var getKey = e.keyCode;
	switch (getKey){		
		case 68:
		key.d = true;
		break;
		
		case 37:
		key.left = true;
		break;
		
		case 38:
		key.up = true;
		break;
		
		case 39:
		key.right = true;
		break;
		
		case 40:
		key.down = true;
		break;
		
		case 13://START
		key.enter = true;
		break;
		
		case 80://PAUSE
		key.p = true;
		break;
		
		case 16:
		key.shift = true;
		break;
		
		case 219:
		key.leftbracket = true;
		break;
		
		case 221:
		key.rightbracket = true;
		break;
	}
};

window.onkeyup = function(e){ 			//listen for key release
	e = e || window.event;
	var getKey = e.keyCode;
	switch (getKey)	{
		case 68:
		key.d = false;
		break;
		
		case 37:
		key.left = false;
		break;
		
		case 38:
		key.up = false;
		break;
		
		case 39:
		key.right = false;
		break;
		
		case 40:
		key.down = false;
		break;
		
		case 13://START
		key.enter = false;
		break;
		
		case 80://PAUSE
		key.p = false;
		break;
		
		case 16:
		key.shift = false;
		break;
		
		case 219:
		key.leftbracket = false;
		break;
		
		case 221:
		key.rightbracket = false;
		break;
	}
};