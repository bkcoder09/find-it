status = "";
objects = [];

function setup(){
    canvas = createCanvas(350, 300);

    video = createCapture(VIDEO);
    video.size(350,300);
    video.hide();
}

function start(){
    model = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status - Detecting Objects :D ";
    hehe = document.getElementById("input").Value;
}

function modelLoaded(){
    console.log(" The Model is Loaded ");
    status = true;
}

function draw(){
    image(video, 0, 0, 350, 300);

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            if(text == hehe){
                videoLiveView.stop();
                objectDetector.detect(gotResult);
                document.getElementById("ohno").innerHTML = hehe+" is Found";
                synth = window.speechSynthesis;
                utterThis = new SpeechSynthesisUtterance(hehe);
                synth.speak(utterThis);
            }
            else{
                document.getElementById("ohno").innerHTML = hehe+" is not Found";
            }
        }
    }
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}