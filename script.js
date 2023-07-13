const boxes=document.getElementsByClassName('box');
let tap=new Audio("/audio/click.mp3");
let won=new Audio("/audio/won.mp3");
let player='1';
let turn='X';
let gamewon=false;
let markArr=[];
let win=document.querySelector('.win');
let res=document.querySelector('.turn');
let boxArr= Array.from(boxes);
const changeTurn=()=>{
    return turn=='X'?'0':'X'; 
}
const changePlayer=()=>{
    return player=='1'?'2':'1';
}
const checkWin=()=>{
   let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ];
   wins.forEach(e=>{
    if((boxes[e[0]].value==boxes[e[1]].value) &&(boxes[e[2]].value==boxes[e[1]].value )&& (boxes[e[0]].value!='' ))
     {
        markArr=[boxes[e[0]],boxes[e[1]],boxes[e[2]]];
        markArr.forEach(e=>{
            e.style.color='#FF52A2';
        })
        win.style.display='block';
        won.play();
        res.innerHTML=` Yahhh!!! Player ${player} Won`;
        gamewon=true;
        boxArr.forEach(boxElement=>{
            boxElement.disabled=true;
        })
     }  
   })
}
const playGame=()=>{
boxArr.forEach(boxElement=>{
     boxElement.addEventListener('click',()=>{
        if(boxElement.value==='')
        {  
            boxElement.value=turn;
            tap.play(); 
            checkWin();
            turn=changeTurn();
            player=changePlayer();
            if(!gamewon)
            {
                res.innerHTML=`Turn for Player ${player}`;
            }
        }   
    })
})
}
document.querySelector('.btn').addEventListener('click',()=>{
       
    boxArr.forEach(boxElement=>{
       boxElement.value='';
       boxElement.disabled=false;
     })
     win.style.display='none';
     player='1';
     turn='X';
     gamewon='false';
     res.innerHTML=`Turn for Player ${player}`;
     markArr.forEach(e=>{
        e.style.color='rgb(59 7 100)';
     })
     playGame();
})
playGame();
