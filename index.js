const canavs=document.getElementById("canavas");
const ctx=canavs.getContext("2d")
const canavasSize=600;

canavs.height=canavasSize;
canavs. width=canavasSize;

const snakeBox=20;
const totelmoves=canavasSize/snakeBox;

const apple=new Image();
apple.src='Image/apple.png';

let dead=new Audio();
let eat=new Audio();
let up=new Audio();
let down=new Audio();
let left=new Audio();
let right=new Audio();

dead.src="audio/dead.mp3";
eat.src="audio/eat.mp3";
up.src="audio/up.mp3";
down.src="audio/down.mp3";
left.src="audio/left.mp3";
right.src="audio/right.mp3";

//difine snake
let snake=[];
snake[0] = {
    y:9*snakeBox,
    y:10*snakeBox
};

//craete food
let food={};

//score
let score=0;

//snake direction

let dir="";

document.addEventListener('keydown',direction);

function direction(){
    let key=event.keycode;
    if(key==37){
        dir="Left"

    }
    else if(key==38){
        dir="up"
    }
    else if(key==39){
        dir="right"

    }
    else if(key==40){
        dir="down"
        down.play();
    }
    
}

function getFood(){
    food={
        x: Math.floor( Math.random()*(totelmoves-2-3) + 3) *snakeBox,
        y: Math.floor( Math.random()*(totelmoves-2-3) + 3)*snakeBox

    };
}

function  render(){           //display funtion
    ctx.fillStyle="#dcdcdc";
    ctx.fillRect(0,0,canavasSize,canavasSize)

    for(let i=0;i<snake.length;i++){
        ctx.fillStyle=i==0?"#4caf50":"white";
        ctx.fillRect(snake[i].x,snake[i].y,snakeBox,snakeBox);

        ctx.strokeStyle="#E91E63";
        ctx.strokeRect(snake[i].x,snake[i]-y,snakeBox,snakeBox);

    }

    ctx.drawImage*(apple,food.x,food.y,snakeBox,snakeBox);

    let snakeX=snake[0].x;
    let snakeY=snake[0].y;

    if(dir=="LEFT") snakeX-=snakeBox;
    if(dir=="RIGHT") snakeX+=snakeBox;
    if(dir=="up") snakeY-=snakeBox;
    if(dir=="down") snakeY+=snakeBox;


    //snake eat food
    if(snakeX ==food.x && snakeY == food.y){
        score++;
        eat.play();
        getFood();
    }
    else{
        snake.pop();
    }
    let newHead={
        x:snakeX,
        y:snakeY
    }

}

render();
