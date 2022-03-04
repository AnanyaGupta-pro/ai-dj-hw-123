leftWrist_score=0
rightWrist_score=0
 dance_monkey="";
 dont_let_me_down="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song1_status=""
song2_status=""

function preload(){
    dance_monkey=loadSound("dance mokey.mp3")
   dont_let_me_down=loadSound(" don't let me down.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center()

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)

}
function draw(){
    image(video,0,0,600,500);
    fill("red")
stroke("white")

}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWrist_score=results[0].pose.keypoints[10].score;
       leftWrist_score=results[0].pose.keypoints[9].score;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}