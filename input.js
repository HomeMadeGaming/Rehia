/**
 * @author HMG
 */
/*
 * KEYBOARD OBJECT
 */
var key = {
	d:false,
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
	}
};