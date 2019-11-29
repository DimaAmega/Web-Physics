function createVideo(parentId,videoUrl){
    var parent = document.getElementById(parentId);
    var video = document.createElement("video");
    video.setAttribute("autoplay","");
    video.setAttribute("muted","");
    video.setAttribute("preload","auto");
    video.setAttribute("src",videoUrl);
    parent.appendChild(video);   
    return video;
};


/*
// createVideo("stage","/Scene1/example.mp4")
// .addEventListener("ended",(e)=>{
// 	e.target.remove();
// 	console.log("END");
// 	document.getElementById("view").style.display = "";
// });
*/