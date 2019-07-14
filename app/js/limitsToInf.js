function getLimToInf(Lim){
	var x = 100;
	var h = 1000;
	var X_MAX = 5000000;
	var eps = 1e-9;
	var prev = Math.abs( Lim(x)- Lim(x-h) );
	var cur = Math.abs( Lim(x)- Lim(x+h) );
	while (cur < prev && x!=X_MAX && cur > eps) { x+=h; prev = cur; cur = Math.abs( Lim(x)- Lim(x+h) )  };
	if (x<X_MAX && cur < prev) {
		console.log(`Достигли разности ${Math.abs( Lim(x)- Lim(x+h) )} на x = ${x}`); 
		return `Достигли разности ${Math.abs( Lim(x)- Lim(x+h) )} на x = ${x} \n ОТВЕТ ${Lim(x+h)}`;
	}
	else {
		if (cur >= prev && x<X_MAX  ) console.log('Расходимся)');
		if (x>=X_MAX) console.log('Расходимся скорее всего, x вышел за X_MAX');
	};
};

self.addEventListener('message',e=>{
    var lim = new Function("x",e.data);
    self.postMessage(String(getLimToInf(lim)));
},false);



