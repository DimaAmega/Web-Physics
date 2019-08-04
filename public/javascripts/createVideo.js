function createVideo(parentId,videoUrl){
    var parent = document.getElementById(parentId);
    var video = document.createElement("video");
    video.setAttribute("autoplay","true");
    video.setAttribute("preload","auto");
    video.setAttribute("src",videoUrl);
    parent.appendChild(video);   
    return video;
};