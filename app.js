let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];







let started=false;
let level =0;
let h3= document.querySelector("h3");
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});


    function gameFlash(boxes){

        boxes.classList.add("flash")
        setTimeout(function(){
            boxes.classList.remove("flash");
        },350);
    };

    function userFlash(boxes){

        boxes.classList.add("userFlash")
        setTimeout(function(){
            boxes.classList.remove("userFlash");
        },350);
    };

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;
        
   let randIdx= Math.floor(Math.random()*3);
   let randColor = btns[randIdx];
   let randbtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq)

    gameFlash(randbtn);
    

};
function checkAns(idx){
    // console.log("current level", level);
    

    if (userSeq[idx]===gameSeq[idx]){

        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
     
    }else{
        document.querySelector("body").style.backgroundColor="red";
        h3.innerHTML=`game over! your score was <b>${level}</b><br>Press any key to Start again`;

        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white"}
             ,400)

         
        reset();
    }

}

function btnPress(){
   let btn =this;
   userFlash(btn);
  
   userColor= btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}
  
let allBtns = document.querySelectorAll(".boxes");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}

