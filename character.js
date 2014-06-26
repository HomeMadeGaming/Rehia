/**
 * @author HMG
 * 		Object Player:
 * 			Phase is percentage of the walking animation completed. Automatically resets once reaching 100%. Sprite is 
 * 			the image used. Direction code for which way the player is facing. Speed can be set to increase speed of character animation.
 * 			When ever you walk the phase increase by a set percentage (determined by speed).
 */

var Player = {
	Phase: 0, PhaseDirection: 1,
	Sprite: new Image(),
	Direction: 1,
	Speed: 1,
	x: 32,
	y: 32,
	Draw: function(){
		if (this.Phase>100){								//Reset Cycle
			this.Phase = 1;		
		}
		if (this.Phase===0){										//Stand
			ctx.drawImage(this.Sprite,33,(this.Direction*32)+1,32,32,304,224,32,32);
		}
		if (this.Phase>0 && this.Phase<=50){						//Left Foot
			ctx.drawImage(this.Sprite,0,(this.Direction*32)+1,32,32,304,224,32,32);
		}
		if (this.Phase>50 && this.Phase<=100){						//Right Foot
			ctx.drawImage(this.Sprite,64,(this.Direction*32)+1,32,32,304,224,32,32);
		}
	},
	Update: function(){
		if (!key.up && !key.down && !key.left && !key.right){		//still
			this.Phase=0;
			
		}
		if (key.up && !key.down && !key.left && !key.right){		//up
			this.Phase += this.Speed*3;
			this.Direction = 3;
			this.y -= this.Speed;
		}
		if (!key.up && key.down && !key.left && !key.right){		//down
			this.Phase += this.Speed*3;
			this.Direction = 0;
			this.y += this.Speed;
		}
		if (!key.up && !key.down && key.left && !key.right){		//left
			this.Phase += this.Speed*3;
			this.Direction = 1;
			this.x -= this.Speed;
		}
		if (!key.up && !key.down && !key.left && key.right){		//right
			this.Phase += this.Speed*3;
			this.Direction = 2;
			this.x +=this.Speed;
		}
		if (key.up && !key.down && key.left && !key.right){			//up left
			this.Phase += this.Speed*3;
			this.Direction = 1;
			this.x -=this.Speed;
			this.y -=this.Speed;
		}
		if (key.up && !key.down && !key.left && key.right){			//up right
			this.Phase += this.Speed*3;
			this.Direction = 2;
			this.x +=this.Speed;
			this.y -=this.Speed;
		}
		if (!key.up && key.down && key.left && !key.right){			//down left
			this.Phase += this.Speed*3;
			this.Direction = 1;
			this.x -=this.Speed;
			this.y +=this.Speed;
		}
		if (!key.up && key.down && !key.left && key.right){			//down right
			this.Phase += this.Speed*3;
			this.Direction = 2;
			this.x +=this.Speed;
			this.y +=this.Speed;
		}
		if (key.shift){
			this.Speed = 2;
		}
		else
		{
			this.Speed = 1;
		}
	}
};
Player.Sprite.src = "me.png";
