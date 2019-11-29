
PIXI.utils.skipHello();
var createApp = function(parentId){	
	var parent = document.getElementById(parentId);
	var app = new PIXI.Application({
		resizeTo:document.getElementById(parentId),
		antialias:true});	
		parent.appendChild(app.view);
	 return app;
};
var app = createApp('stage');
/* 
const worker = new Worker('javascripts/LimitsWorkers/limitsToInf.js');
var a = 2;
worker.postMessage("var N = Math.floor(x); var sum = 0; for( var n = 1; n<N; n++) sum+= 1/n**2; return sum;");
worker.addEventListener('message',e=>{
	alert(e.data);
	worker.terminate();
},false);
*/
