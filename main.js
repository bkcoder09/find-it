status = "";

function setup(){
    canvas = createCanvas(350, 300);

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function start(){
    model = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status - Detecting Objects :D ";
    hehe = document.getElementById("input").Value;
}

function modelLoaded(){
    console.log(" English - The Model is Loaded ");
    status = true;
}

function draw(){
    image(video, 0, 0, 300, 300);
}