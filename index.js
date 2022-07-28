//variable declaration

const cvs=document.getElementById("canvas").getContext("2d");





//onload funtion
window.onload=function(){
    mainGame();
}






//main game funtion
function mainGame(){
    

    //game area

    //background colour
    cvs.fillstyle="black";
    cvs.fillRect(0,0,400,400);

   //gridline

   for(let cl=0;cl<400;cl+=20){
    cvs.moveTo(cl,0);
    cvs.lineTo(cl,400);
   }
   for(let rl=0;rl<400;rl+=20){
    cvs.moveTo(rl,0);
    cvs.lineTo(rl,400);
   }
   cvs.strokestyle="grey"
   cvs.stroke();
}




//input control funtion
