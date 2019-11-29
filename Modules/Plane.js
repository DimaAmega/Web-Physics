PIXI.utils.skipHello();
var addOnWheel = (elem, handler) => {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", handler);
        } else {
            // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
            elem.addEventListener("MozMousePixelScroll", handler);
        }
    } else { // IE8-
        text.attachEvent("onmousewheel", handler);
    }
};
var createApp = function (parentId) {
    var parent = document.getElementById(parentId);
    var app = new PIXI.Application({
        resizeTo: document.getElementById(parentId),
        antialias: true
    });
    parent.appendChild(app.view);
    return app;
};

var Plane = function (parentId) {
    /////////////////////////////////
    //          PRIVATE POLES
    /////////////////////////////////
    var app = createApp(parentId);
    var stage = document.getElementById(parentId);
    var cw = stage.offsetWidth, ch = stage.offsetHeight;
    var scale = 40;
    var x_off = 0, y_off = 0, o_x_off = 0, o_y_off = 0, start_p;
    var coord_Lines = new PIXI.Graphics();
    /////////////////////////////////
    //          PRIVATE METHODS
    /////////////////////////////////
    var gxc = (x) => {
        return cw / 2 + x * scale + x_off;
    };
    var gyc = (y) => {
        return ch / 2 - y * scale + y_off;
    };
    var gxLeft = () => {
        return - (cw / 2 + x_off) / scale;
    };
    var gxRight = () => {
        return (cw / 2 - x_off) / scale;
    };
    var gyTop = () => {
        return (ch / 2 + y_off) / scale;
    };
    var gyBottom = () => {
        return - (ch / 2 - y_off) / scale;
    };
    var drawPlan = () => {
        var iterxL = Math.floor((cw / 2 + x_off) / scale);
        var iterxR = Math.floor((cw / 2 - x_off) / scale);
        var iteryT = Math.floor((ch / 2 + y_off) / scale);
        var iteryB = Math.floor((ch / 2 - y_off) / scale);
        coord_Lines.clear();
        coord_Lines.lineStyle(3, 0xffffff, .6);
        if (((ch / 2 + y_off) > 0) && ((ch / 2 + y_off) < ch)) { //Добавить Горизонт линию
            coord_Lines.moveTo(0, ch / 2 + y_off).lineTo(cw, (ch / 2) + y_off);
        }
        if (((cw / 2 + x_off) > 0) && ((cw / 2 + x_off) < cw)) { //Добавить Вертик линию
            coord_Lines.moveTo(cw / 2 + x_off, 0).lineTo(cw / 2 + x_off, ch);
        }
        coord_Lines.lineStyle(1, 0xffffff, .212);
        for (var i = -iterxL; i <= iterxR; i++) //Добавить Вертик линию
            coord_Lines.moveTo(x_off + ((cw) / 2) + i * scale, 0).lineTo(x_off + ((cw) / 2) + i * scale, ch);

        for (var i = -iteryT; i <= iteryB; i++) //Добавить Горизонт линию
            coord_Lines.moveTo(0, y_off + ch / 2 + i * scale).lineTo(cw, y_off + ch / 2 + i * scale);
    };
    /////////////////////////////////
    //          CONSTRUCTOR
    /////////////////////////////////
    app.stage.addChild(coord_Lines);
    new ResizeSensor(stage, function () {
        cw = stage.offsetWidth;
        ch = stage.offsetHeight;
        drawPlan();
    });
    addOnWheel(app.view, (e) => {
        var delta = e.deltaY || e.detail || e.wheelDelta;

        var coords = stage.getBoundingClientRect()
        var X = (e.clientX - coords.x - cw / 2 - x_off) / scale;
        var Y = (ch / 2 + y_off - e.clientY + coords.y) / scale;

        if ((scale <= 30) && (delta > 0)) scale = 30; else
            if ((scale >= 300) && (delta < 0)) scale = 300; else
                if (delta > 0) scale -= 2;
                else scale += 2;
        if (delta > 0) {
            x_off += 2 * X;
            y_off -= 2 * Y;
        } else {
            x_off -= 2 * X;
            y_off += 2 * Y;
        }
        drawPlan();
        e.preventDefault();
    });
    var mousemove = (e) => {
        var dx = e.clientX - start_p.x;
        var dy = e.clientY - start_p.y;
        x_off = o_x_off + dx;
        y_off = o_y_off + dy;
        drawPlan();
    };
    app.view.addEventListener("mousedown", (e) => {
        start_p = { x: e.clientX, y: e.clientY };
        o_x_off = x_off;
        o_y_off = y_off;
        app.view.addEventListener("mousemove", mousemove);
    });
    app.view.addEventListener("mouseup", (e) => {
        app.view.removeEventListener("mousemove", mousemove);
    });
    drawPlan();
    /////////////////////////////////
    //          PUBLIC
    /////////////////////////////////
    return this;
}

export { Plane }

