song=""
function preload(){
    song=loadSound("bekhayali.mp3");
}
function setup(){

}
function draw(){

}
function start(){
document.getElementById("msg").innerHTML="Sorry and Thank You" 
song.play()
song.setVolume(1);
    song.rate(1);

}