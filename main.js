function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes)

}
function gotposes(results){
if(results.length>0) {
    console.log(results);
    console.log("lipsx = " + results[0].pose.lips.x);
    console.log("lipsy = " + results[0].pose.lips.y);
}
}
function modelloaded(){
    console.log("Model has been initalized")
}
function take_snapshot_filter(){
    save('mustache.png')
}
function draw(){
    image(video,0,0,300,300);
}
