leftwristx = 0;
rightwristx = 0;
difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(700,380);
    canvas.position(550,180);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#93a1b8');
    fill('#fc6f17');
    stroke('#fc6f17');
    text('Jack Rose',10,200);
    textSize(difference);

    
}

function modelLoaded(){
    console.log("PoseNet is intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;

        console.log("LEFT WRIST X = " + leftwristx);
        console.log("RIGHT WRIST X = " + rightwristx);

        difference = floor(leftwristx - rightwristx);
        console.log("Font size - " + difference);
    }
}