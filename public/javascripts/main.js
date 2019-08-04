///////////////////////////
//    GLOBAL VARIABLES
///////////////////////////
PIXI.utils.skipHello();
function gxc(x) {
    return windowWidth/2 + x;
};
function gyc(y) {
    return windowHeight/2 - y;
};
var createApp = function(parentId){	
	var parent  = document.getElementById(parentId);
	var app = new PIXI.Application({
		backgroundColor: 0x000000,
		width: parent.offsetWidth,
		resolution:1,
		height: parent.offsetHeight});
		app.view.setAttribute("id","view");
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

var g = new PIXI.Graphics();
g.beginFill(0xFF3300);
g.x = document.documentElement.clientWidth/2;
g.y = document.documentElement.clientHeight/2;

var c1 = g.drawCircle(0,0,100)
app.stage.addChild(c1);
var y = Zele(c1,1.1);

document.getElementById("view").style.display = "none";

createVideo("stage","/Scene1/example.mp4")
.addEventListener("ended",(e)=>{
	e.target.remove();
	console.log("END");
	document.getElementById("view").style.display = "";
});

window.addEventListener("resize",(e)=>{
	var view = document.getElementById("view"),
	parent = document.getElementById("stage");
	view.setAttribute("width",`${parent.offsetWidth}px`);
	view.setAttribute("height",`${parent.offsetHeight}px`);
})

// window.addEventListener("load",()=>{document.querySelector("video").play();});
///////////////////////////////////////////////

// function Lim(x){
// 	var N = Math.floor(x);
// 	var sum = 0;
// 	for( var n = 1; n<N; n++) sum+= 1/(n**2);
// 	return sum;
// };

// const worker = new Worker('javascripts/LimitsWorkers/limitsToInf.js');
// var a = 2;
// worker.postMessage("var N = Math.floor(x); var sum = 0; for( var n = 1; n<N; n++) sum+= 1/n**2; return sum;");
// worker.addEventListener('message',e=>{
// 	alert(e.data);
// 	worker.terminate();
// },false);









