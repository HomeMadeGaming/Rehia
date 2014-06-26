/**
 * @author HMG
 * 
 * 		GENERATE ENVIRONMENT
 * 			DrawMap() procedurally selects tiles from a tileset and places them on the canvass. Tiles that are outside of player's sight
 * 				are skipped.
 * 			Collision{} houses functions for collision detection with the edge of the screen and the map.
 */
var Columns = 23; //number of columns in current tileset.
var TileSet = new Image(); TileSet.src = "tileset.png";


function DrawMap(){
	for (i=0; i<Map.Width; i++){
		for (j=0; j<Map.Height; j++){
			if (i>((Player.x/32)-15) && i<((Player.x/32)+15) && j>((Player.y/32)-9) && j<((Player.y/32)+9)){
			var n = i+(j*Map.Width);
			var p = Map.Layer1[n];
			var py = Math.floor(p/Columns);
			var px = p%Columns;
			var CameraX = (Player.x - (9.5*32));
			var CameraY = (Player.y - (7*32));
			ctx.drawImage(TileSet, px*32,py*32,32,32,(i*32) - CameraX,(j*32) - CameraY,32,32);
			}
			if (i<((Player.x/32)-15)){
				i = Math.floor(Player.x/32)-15;
			}
			if (i>((Player.x/32)+15)){
				i=Map.Width;
			}
			if (j<((Player.y/32)-8)){
				j = Math.floor(Player.y/32) -8;
			}
			if(j>((Player.y/32)+8)){
				j=Map.Height;
			}
		}
	}
}
var Collision = {
	Edge: function(){
		if (Player.x <=0){
			Player.x = 1;
		}
		if (Player.x >=(32 * Map.Width)-32){
			Player.x = (32 * Map.Width)-33;
		}
		if (Player.y <=0){
			Player.y = 1;
		}
		if (Player.y >=(32 * Map.Height)-32){
			Player.y = (32 * Map.Height)-33;
		}
	},
	Map: function(){
		for (i=0; i<Map.Solid.length; i++){
			var ProxyXLeft = (Math.floor((Player.x+10)/32));
			var ProxyXRight = (Math.floor((Player.x+22)/32));
			var ProxyYUp = (Math.floor((Player.y+24)/32));
			var ProxyYDown = (Math.floor((Player.y+32)/32));
			var ProxyLeftUp =  ProxyXLeft + (ProxyYUp * Map.Width);
			var ProxyRightUp =  ProxyXRight + (ProxyYUp * Map.Width);
			var ProxyLeftDown = ProxyXLeft + (ProxyYDown * Map.Width);
			var ProxyRightDown = ProxyXRight + (ProxyYDown * Map.Width);
			if (Map.Layer1[ProxyLeftUp] === Map.Solid[i]){
				Player.x += Player.Speed;
				Player.y += Player.Speed;
			}
			if (Map.Layer1[ProxyRightUp] === Map.Solid[i]){
				Player.x -= Player.Speed;
				if (Map.Layer1[ProxyLeftUp] != Map.Solid[i]){
					Player.y += Player.Speed;
				}
			}
			if (Map.Layer1[ProxyLeftDown] === Map.Solid[i]){
				Player.y -= Player.Speed;
				if (Map.Layer1[ProxyLeftUp] != Map.Solid[i]){
					Player.x +=Player.Speed;
				}
			}
			if (Map.Layer1[ProxyRightDown] === Map.Solid[i]){
				if (Map.Layer1[ProxyLeftDown] != Map.Solid[i]){
					Player.y -= Player.Speed;
				}	
				if (Map.Layer1[ProxyRightUp] != Map.Solid[i]){
					Player.x -= Player.Speed;
				}
			}
			/**
			 * Extra coding to prevent glitching around corners.
			 */
			if (Map.Layer1[ProxyRightDown] == Map.Solid[i] && Map.Layer1[ProxyRightUp] === Map.Solid[i] && Map.Layer1[ProxyLeftUp] === Map.Solid[i]){
				Player.x -= Player.Speed;
				Player.y += Player.Speed;
			}
			if (Map.Layer1[ProxyLeftDown] == Map.Solid[i] && Map.Layer1[ProxyRightUp] === Map.Solid[i] && Map.Layer1[ProxyLeftUp] === Map.Solid[i]){
				Player.x += Player.Speed;
				Player.y += Player.Speed;
			}
			if (Map.Layer1[ProxyLeftDown] == Map.Solid[i] && Map.Layer1[ProxyRightDown] === Map.Solid[i] && Map.Layer1[ProxyLeftUp] === Map.Solid[i]){
				Player.x += Player.Speed;
				Player.y -= Player.Speed;
			}
			if (Map.Layer1[ProxyLeftDown] == Map.Solid[i] && Map.Layer1[ProxyRightDown] === Map.Solid[i] && Map.Layer1[ProxyRightUp] === Map.Solid[i]){
				Player.x -= Player.Speed;
				Player.y -= Player.Speed;
			}
		}
	}
};
