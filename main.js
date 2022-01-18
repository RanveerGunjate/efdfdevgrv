canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var nasa_images_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
var random_nim=Math.floor(Math.random()*4);

var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var background_image=nasa_images_array[random_nim];
var rover_image="rover.png";

function add(){
    background_img_tag=new Image();
background_img_tag.onload=uploadBackground;
background_img_tag.src=background_image;
rover_img_tag=new Image();
rover_img_tag.onload=uploadRover;
rover_img_tag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);

}

function uploadRover(){
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keyDown)
function my_keyDown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed)

    if (keyPressed=='38'){
        console.log("Up Key Is Pressed");
        up();
    }

    if (keyPressed=='40'){
        console.log("Down Key Is Pressed");
        down();
    }

    if (keyPressed=='39'){
        console.log("Right Key Is Pressed");
        right();
    }

    if (keyPressed=='37'){
        console.log("Left Key Is Pressed");
        left();
    }

    

}

function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
    
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow is pressed x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}