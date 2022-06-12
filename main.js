leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0
scoreleftwrist=0
scorerightwrist=0
songstatus=""
songstatusR=""
function setup(){
    canvas=createCanvas(600, 500)
    canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video, modelloaded)
posenet.on('pose', gotposes)
}
function modelloaded (){
    console.log("model is loaded")
}

function preload(){
    song=loadSound(music.mp3)
        song2=loadSound(music2.mp3)
}

function draw(){
    song_songstatus.isPlaying()
    image(video, 0, 0, 600, 500)
    circle(leftwristx, leftwristy, 20)
    fill("black")
    stroke("black")
    if (scoreleftwrist>0.2){
        circle(leftwristx, lefttwristy, 20)
        song2.Stop()
        if (songstatus=false){
            loadSound(song)
            document.getElementById("song status").innerHTML=songstatus
        }
        
        
    }
   song2_songstatusR.isPlaying()
   if(scorerightwrist>0.2){
    image(video, 0, 0, 600, 500)
    circle(rightwristx, rightwristy, 20)
    fill("black")
    stroke("black")
    song.Stop()
    if(songstatusR=false)
    loadSound(song2)
    document.getElementById("song status").innerHTML=songstatusR

   }
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y 
        scoreleftwrist=results[0].pose.keypoints[9].score
        scorerightwrist=results[0].pose.keypoints[10].score
        console.log("leftwristx=" + leftwristx + "and leftwristy=" + leftwristy)
        console.log("rightwristx=" + rightwristx + "and rightwristy=" + rightwristy)
    }
}