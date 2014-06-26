/**
 * @author HMG
 */

var Music = {
	Track1: new Audio,
	Track2: new Audio,
	Slider: 100,
	State: 1,
	Volume: 100,
	Start: function(){
		this.Track1.play();
		this.Track2.play();
	},
	Dynamics: function(){
		this.Track1.volume = (this.Slider/100)*(this.Volume/100);
		this.Track2.volume = (1-(this.Slider/100))*(this.Volume/100);
		if (this.State === 1 && this.Slider <100){
			this.Slider +=1;
		}
		if (this.State === 2 && this.Slider > 0){
			this.Slider -=1;
		}
		if (key.enter===true){
			this.State = 2;
		}
		if (key.p === true){
			this.State = 1;
		}
		if (key.rightbracket === true && this.Volume <100){
			this.Volume += 1;
		}
		if (key.leftbracket === true && this.Volume >0){
			this.Volume-=1;
		}
	}
};
Music.Track1.src = "hero1.mp3";
Music.Track2.src = "hero2.mp3";
