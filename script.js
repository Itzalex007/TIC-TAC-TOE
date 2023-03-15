// console.log("Hi");
const music = new Audio("Break The Glass.mp3")
const audioTurn = new Audio("Message - 1 Second ! Notification.mp3")
const audioGameOver = new Audio("3 Second Bus Horn ! Notification ! Message.mp3")
const mainMusic = new Audio("Intentions Song Justin Bieber.mp3")


turn = "X"
let gameOver = false

const ChangeTurn = ()=>{

    return turn === "X" ? "0" : "X"
}

const checkWin = ()=>{
let boxText = document.querySelectorAll(".boxText") 
    let wins = [

        [0,1,2,74,5],
        [3,4,5,231,6],
        [6,7,8,385,6],
        [0,3,6,230,-145,90],
        [1,4,7,227,6,90],
        [2,5,8,227,156,90],
        [0,4,8,226,4,223],
        [2,4,6,226,8,315],
    ]
wins.forEach(e=>{

    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== ""))
    {
        document.querySelector(".infoBar").innerText = boxText[e[0]].innerText + " Won The Game \n ab party dede ;)"
        gameOver = true
// document.querySelector(".line").style.top = `${[e[3]]}px`
// document.querySelector(".line").style.left = `${[e[4]]}px`
// document.querySelector(".line").style.rotate = `${[e[5]]}deg`

// document.querySelector(".line").style.width = "29vw"
// document.querySelector(".line").style.height = "3px"



        document.querySelector(".img").getElementsByTagName("img")[0].style.width= "177px"
        document.querySelector(".img").getElementsByTagName("img")[0].style.margin = "22px 47px"

//         width: 177px;
// margin-left: 47px;
// margin-top: 22px;

            
        
    
    }


})

}


const boxes = document.querySelectorAll(".box")
Array.from(boxes).forEach(element=>{


        const boxText = element.querySelector(".boxText")
        element.addEventListener("click",()=>{

            if(boxText.innerText===""){

                boxText.innerText = turn;
               turn = ChangeTurn()
                audioTurn.play()
                checkWin()
                if(!gameOver){

                    document.getElementsByClassName("infoBar")[0].innerText = "Turn For " + turn
                }
                

            }

        })

})

reset = document.getElementById("button")
reset.addEventListener("click",()=>{


let boxText=document.querySelectorAll(".boxText")
Array.from(boxText).forEach(element=>{

    element.innerText =""


})

turn = "X"
gameOver = false
document.getElementsByClassName("infoBar")[0].innerText = "Turn For " + turn
document.querySelector(".img").getElementsByTagName("img")[0].style.width= "0px"
document.querySelector(".img").getElementsByTagName("img")[0].style.margin = "0px 0px"

document.querySelector(".line").style.width = "0vw"
document.querySelector(".line").style.height = "0px"


 



})





mainMusic.play()