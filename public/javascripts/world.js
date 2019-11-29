var stage = document.getElementById("stage");
var cw = stage.offsetWidth,ch = stage.offsetHeight,scale = 40;
var x_off = 0,y_off = 0;
var o_x_off = 0, o_y_off = 0;

window.addEventListener("   ",()=>{
    cw = stage.offsetWidth;
    ch = stage.offsetHeight;
});
var gxc = (x) => {
    return cw/2 + x*scale + x_off;
};
var gyc = (y) => {
    return ch/2 - y*scale + y_off;
};
var gxLeft = () => {
    return - (cw/2+x_off)/scale;
};
var gxRight = () => {
    return (cw/2-x_off)/scale;
};
var gyTop = () => {
    return (ch/2+y_off)/scale;
};
var gyBottom = () => {
    return - (ch/2-y_off)/scale; 
};