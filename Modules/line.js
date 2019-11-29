var data1 = [{x:-200, y:0, }, {x:0, y:-200, }, {x:200, y:0, },{x:-200, y:0, },{x:-200, y:0, },];
// var data2 = [{x:-200, y:0, }, {x:-200, y:-200, }, {x:200, y:-200, }];

function LinearEasing(h){
    var res = 0;
    return ()=>{res+=h; return res;};
};

function Sigm(h){
    var res = 0;
    return ()=>{res+=h; return 0.7*Math.atan(15*res);};
};

function Path(style,data){
    /////////////////////
    //     PRIVATE
    /////////////////////
    var st = style;
    var l = new PIXI.Graphics();
    /////////////////////
    //     PUBLIC
    /////////////////////
    this.Draw = (new_data)=>{
        l.lineStyle(st.width,st.color,st.opacity);
        var copy_data =new_data.slice(1);
        l.moveTo(new_data[0].x,new_data[0].y);
        copy_data.forEach((el)=>{
            l.lineTo(el.x,el.y);
        });
    };
    this.animate = ()=>{
        t_i = this.easing();
        var data_i = this.interpolate(c_data,this.new_data,t_i);
        this.clear();
        this.Draw(data_i);
        if(t_i>=1) {
            this.DeleteAnimate();
            if(this.flag_sub) for(var i = 0; i<this.flag_sub;i++) this.new_data.pop();
            c_data = this.new_data;
        };
    };
    this.DeleteAnimate = ()=>{
        app.ticker.remove(this.animate,this);
    };
    this.interpolate = (d1,d2,t) =>{
        var copy = [];
        for(var i = 0;i<d1.length;i++) copy.push({x:d1[i].x,y:d1[i].y});
    
        for(var i = 0; i<copy.length;i++){
            copy[i].x= (1-t)*d1[i].x + t*d2[i].x;
            copy[i].y= (1-t)*d1[i].y + t*d2[i].y;
        }
        return copy;
    };
    this.clear = ()=>{l.clear()};
    this.Update = (new_data,easing_Initializate) =>{
        this.new_data = new_data;
        if(!easing_Initializate) {this.clear(); this.Draw(this.new_data); c_data = this.new_data;}
        else{
            if(c_data.length>this.new_data.length){
                var sub = c_data.length - this.new_data.length;
                for(var i = 0; i<sub;i++) this.new_data.push(this.new_data[this.new_data.length-1]);
                this.flag_sub = sub;
            }
            else{
                var sub = this.new_data.length - c_data.length;
                for(var i = 0; i<sub;i++) c_data.push(c_data[c_data.length-1]);
                this.flag_sub=undefined;
            };
            var t_i;
            var h = 0.005;
            this.easing = easing_Initializate(h);
            app.ticker.add(this.animate,this);
        }
    };
    this.changeStyle = (style)=>{st = style; return this};
    /////////////////////
    // START CONSTRUCTOR
    /////////////////////
    this.Draw(data);
    var c_data = data;
    app.stage.addChild(l);
    return this;
}
