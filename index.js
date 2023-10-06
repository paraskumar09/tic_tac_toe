const box=document.querySelectorAll(".box")
const player=document.querySelector(".current");
const new_game=document.querySelector(".new_game");

let current_player="";
let game_grid;

const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function init()
{
    current_player="X";
    game_grid=["","","","","","","","",""];
    new_game.classList.remove("active");
    player.innerText="Current player-X";

    box.forEach((b)=>{
        b.style.pointerEvents="all";
        b.classList.remove("win");
        b.innerText="";

    })


}

init();

new_game.addEventListener("click",init);

function swap()
{
    if(current_player==="X")
    {
        current_player="O";
    }
    else
    {
        current_player="X";
    }

    player.innerText=`current-player-${current_player}`;
}

function gameover()
{

    let winner="";
    for(let i=0;i<9;i++){
        const position=winning[i];
        if(game_grid[position[0]]!="" && game_grid[position[0]]===game_grid[position[1]] && game_grid[position[1]]===game_grid[position[2]])
        {
            new_game.classList.add("active");
            box[position[0]].classList.add("win");
            box[position[1]].classList.add("win");
            box[position[2]].classList.add("win");
            
            if(game_grid[position[0]]=="X")
            {
                winner="X";
            }
            else
            {
                winner="O";
            }

            player.innerText=`winner is ${winner}`;

            box.forEach((b)=>{
                b.style.pointerEvents="none";

            })

                return;
        }

        let fill=0;

        game_grid.forEach((box)=>{
            if(box!="")
            {
                fill++;
            }
        })

        if(fill==9)
        {
            new_game.classList.add("active");
            console.log("tie");
           player.innerText="It's a tie";
        }
    }

}

function handle(index)
{
    console.log("Ds");
    if(game_grid[index]=="")
    {
        box[index].innerText=current_player;
        box[index].style.pointerEvents="none";
        game_grid[index]=current_player;
        swap(); 

        gameover();
    }
}

box.forEach((box,index) => {
   box.addEventListener("click",()=>{
   
    handle(index);
   })
    
});

