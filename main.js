music1 = "";
music2 = "";

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}