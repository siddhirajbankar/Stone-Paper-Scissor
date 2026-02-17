let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#computer-score");


const gencomputerchoice=()=>{
    const options=["rock","paper","scissors"]
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawgame=()=>{
    msg.innerText="The Game is Draw..."
    msg.style.backgroundColor="Gray";
}

const showWninner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        user.innerText=userscore;
        msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="Green";
    }else{
        computerscore++;
        comp.innerText=computerscore;
        msg.innerText=`You lose... ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
}

const playgame=(userchoice)=>{

    const compchoice=gencomputerchoice();

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice===rock){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showWninner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute('id');
        playgame(userchoice);
    });

});
