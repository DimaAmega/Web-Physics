////////////////////////////*
//    GLOBAL VARIABLES
////////////////////////////*
var windowHeight = document.documentElement.clientHeight;
var windowWidth = document.documentElement.clientWidth;
document.getElementById('stage').style.height = windowHeight + 'px';
document.getElementById('stage').style.width = windowWidth + 'px';
function gxc(x) {
    return windowWidth/2 + x;
}
function gyc(y) {
    return windowHeight/2 - y;
}
var createApp = function(parentId){	
	var parent  = document.getElementById(parentId);
	var app = new PIXI.Application({
		backgroundColor: 0x1099bb,
		width: parent.offsetWidth,
		height: parent.offsetHeight}); 

	 parent.appendChild(app.view);
	 return app;
};


function Zele(obj,t){
	var i = -Math.PI/2;
	var y = app.ticker.add((deltaTime) => {
	obj.transform.scale.x =1 + (t-1)*(1+Math.sin(0.15*i))/2;
	obj.transform.scale.y =1 + (t-1)*(1+Math.sin(0.1771*i))/2;
	i++;
	});
	return y;
};


var app = createApp('stage');
var ALL_SPRITES = { };
var g = PIXI.Graphics;

// PIXI.loader
//   .add("images/bact.png")
//   .load(setup);

// function setup() {
// 	var bact  = new PIXI.Sprite(PIXI.loader.resources["images/bact.png"].texture);
// 	ALL_SPRITES.cat = bact;
// 	bact.scale.set(0.7,0.7);
// 	bact.anchor.set(0.5,0.5);


var g = new PIXI.Graphics();
g.beginFill(0xFF3300);
g.x = document.documentElement.clientWidth/2;
g.y = document.documentElement.clientHeight/2;

var c1 = g.drawCircle(0,0,100)
app.stage.addChild(c1);

var y = Zele(c1,1.1);







