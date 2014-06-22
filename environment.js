/**
 * @author HMG
 */

var Columns = 23;
var Region = 1;
var TileSet = new Image();
TileSet.src = "tileset.png";


	/*DRAW THE MAP*/

function DrawMap(){
	for (i = 0; i<300; i++)	{
		var p = array[i];
		var py = Math.floor(p/Columns);
		var px = p%Columns;
		var my = Math.floor(i/20);
		var mx = i%20;
		
		ctx.drawImage(TileSet, px*32, py*32, 32, 32, mx*32, my*32, 32, 32);
	}

	
	
}

