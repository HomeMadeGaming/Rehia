/**
 * @author HMG
 */

var Columns = 23;
var Region = 1;
var TileSet = new Image();
TileSet.src = "tileset.png";

var p = [];
var py = 0;
var px = 0;
var my = 0;
var mx = 0;

	/*DRAW THE MAP*/
function DrawMap(){
	for (i = 0; i<300; i++)	{
		p = layer1[i];
		py = Math.floor(p/Columns);
		px = p%Columns;
		my = Math.floor(i/20);
		mx = i%20;
		
		ctx.drawImage(TileSet, px*32, py*32, 32, 32, mx*32, my*32, 32, 32);
		
//		ctx.font = "10px Arial";
//		ctx.fillStyle = "white";
//		ctx.fillText(p,mx*32+10,my*32+10);
//		ctx.fillText(i,mx*32+10,my*32+20);
	}

	
	
}

