
const btn=document.querySelector(".roll");
const who_won=document.querySelector(".who_won");
const plr1_img=document.querySelector(".img1")
const plr2_img=document.querySelector(".img2")

const random_num=()=>{
    let ran1=Math.random()*6;
    let ran2=Math.random()*6;
    let plr1=Math.floor(ran1)+1;
    let plr2=Math.floor(ran2)+1;
    console.log(plr1,plr2);
    plr1_img.setAttribute("src",`./assets/images/dice${plr1}.png`)
    plr2_img.setAttribute("src",`./assets/images/dice${plr2}.png`)
    if(plr1<plr2){
        who_won.innerHTML="PLAYER 2 WINS";
    }
    else if(plr1>plr2){
        who_won.innerHTML="PLAYER 1 WINS";
    }
    else{
        who_won.innerHTML="DRAW";
    }
    
}

btn.addEventListener('click',random_num);