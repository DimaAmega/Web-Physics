function createAudio(){
    var context;
    var self;
    var sources = [], destination; 
    this.initializate = ()=>{ if(!context) context = new window.AudioContext(); self = this; return this};
    this.audio = (url)=>{ return new Promise((resolve,reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function() {
                context.decodeAudioData(this.response,(decodedArrayBuffer)=>{
                    sources.push(context.createBufferSource());
                    sources[sources.length-1].buffer = decodedArrayBuffer;
                    destination = context.destination;
                    sources[sources.length-1].connect(destination);
                    resolve(self);
                },(e)=>{reject(e)});
            };
            xhr.send();
    }) };
    this.play = (ind)=>{ sources[ind].start(0); };
    this.stop = (ind)=>{ sources[ind].stop(0); };
};

/* 
USEGE
var audioPlayer = new createAudio().initializate();

audioPlayer.audio("/Scene1/example1.mp3") -> URL
.then((res)=>{console.log("загрузили!");});

*/
