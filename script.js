const arr = ['paper','scissor','rock']


if(localStorage.length == 0){
    localStorage.setItem("computer_score",0)
    localStorage.setItem("user_score",0)
}

document.addEventListener('DOMContentLoaded', function () {
    let comp = localStorage.getItem('computer_score'); 
    let user = localStorage.getItem('user_score'); 
    let comp_s = document.getElementById('comp');
    let user_s = document.getElementById('user');
    comp_s.textContent = `${comp}`
    user_s.textContent = `${user}`
});

function press(userChoice){
    let main = document.querySelectorAll(".action")

    const randomIndex = Math.floor(Math.random() * arr.length)
    let compChoice = arr[randomIndex]
    console.log(userChoice)
    console.log(compChoice)
    console.log("-------")
    for(let i=0;i<main.length;i++){
        main[i].style.display = "none"
    }
    if(compChoice == userChoice){
        var con = document.querySelectorAll(".con")
        for(let i=0;i<con.length;i++){
            con[i].style.display = "block"
        }
        if(compChoice == 'rock'){
            con[2].outerHTML = "<div  class='con rc-same'><img class='' src='icon-rock.svg' alt='rock'></img> </div>"
            con[3].innerHTML = "<h1>TIE UP<h1><button onclick='replay()'>replay</button>"
            con[4].outerHTML = "<div  class='con rc-same'><img class='' src='icon-rock.svg' alt='rock'></img> </div>"
        }
        else if(compChoice == 'paper'){
            con[2].outerHTML = "<div  class='con pp-same'><img class='' src='icon-paper.svg' alt='paper'></img> </div>"
            con[3].innerHTML = "<h1>TIE UP<h1><button onclick='replay()'>replay</button>"
            con[4].outerHTML = "<div  class='con pp-same'><img class='' src='icon-paper.svg' alt='paper'></img> </div>"
        }else{
            con[2].outerHTML = "<div  class='con ss-same'><img class='' src='icon-scissors.svg' alt='scissor'></img> </div>"
            con[3].innerHTML = "<h1>TIE UP<h1><button onclick='replay()'>replay</button>"
            con[4].outerHTML = "<div  class='con ss-same'><img class='' src='icon-scissors.svg' alt='scissor'></img> </div>"
        }
    }else{
        let con = document.querySelectorAll(".con")
        let comp_s = document.getElementById('comp')
        let user_s = document.getElementById('user')
        let comp = Number(localStorage.getItem("computer_score"))
        let user = Number(localStorage.getItem("user_score"))
        let next = document.getElementById("next")
        // comp = Number(comp)
        // comp = comp + 2
        // console.log(comp)
        for(let i=0;i<con.length;i++){
            con[i].style.display = "block"
        }
        if(userChoice === 'rock'){
            if(compChoice === 'paper'){
                con[2].outerHTML = "<div  class='con rc-same'><img class='' src='icon-rock.svg' alt='rock'></img> </div>"
                con[3].innerHTML = "<span id='l-font'>YOU LOST</span><br><span id='font'>AGAINST PC</span><br><button onclick='replay()'>PLAY AGAIN</button>"
               // con[3].outerHTML = "<div class='con' style='display: none;'>YOU LOST<br>AGAINST PC<br><button onclick='replay()''>PLAY AGAIN</button></div>"
                con[4].outerHTML = "<div  class='con pp-same'><img class='' src='icon-paper.svg' alt='paper'></img> </div>"
                comp++;
            }else{
                con[2].outerHTML = "<div  class='con rc-same'><img class='' src='icon-rock.svg' alt='rock'></img> </div>"
                con[3].innerHTML = "<span id='l-font'>YOU WON</span><br><span id='font'>AGAINST PC</span><br><button onclick='replay()'>PLAY AGAIN</button>"
                con[4].outerHTML = "<div  class='con ss-same'><img class='' src='icon-scissors.svg' alt='scissor'></img> </div>"
                user++;
                next.style.display = "block"
            }
        }else if(userChoice === 'paper'){
            if(compChoice === 'rock'){
                con[2].outerHTML = "<div  class='con pp-same'><div class='con1'><div class='con2'><img class='' src='icon-paper.svg' alt='paper'></img></div></div></div>"
                con[3].innerHTML = "<span id='l-font'>YOU WON</span><br><span id='font'>AGAINST PC</span><br><button onclick='replay()'>PLAY AGAIN</button>"
                con[4].outerHTML = "<div  class='con rc-same'><img class='' src='icon-rock.svg' alt='rock'></img></div>"
                user++;
                next.style.display = "block"
            }else{
                con[2].outerHTML = "<div  class='con pp-same'><img class='' src='icon-paper.svg' alt='paper'></img> </div>"
                con[3].innerHTML = "<span id='l-font'>YOU LOST</span><br><span id='font'>AGAINST PC</span><br><button onclick='replay()'>PLAY AGAIN</button>"
                con[4].outerHTML = "<div  class='con ss-same'><img class='' src='icon-scissors.svg' alt='scissor'></img> </div>"
                comp++;
            }
        }else{
            if(compChoice === 'rock'){
                con[2].outerHTML = "<div  class='con ss-same'><img class='' src='icon-scissors.svg' alt='scissor'></img> </div>"
                con[3].innerHTML = "<span id='l-font'>YOU LOST</span><br><span id='font'>AGAINST PC</span><br><button onclick='replay()'>PLAY AGAIN</button>"
                con[4].outerHTML = "<div  class='con rc-same'><img class='' src='icon-rock.svg' alt='rock'></img> </div>"
                comp++;
            }else{
                con[2].outerHTML = "<div  class='con ss-same'><img class='' src='icon-scissors.svg' alt='scissor'></img> </div>"
                con[3].innerHTML = "<span id='l-font'>YOU WON</span><br><span id='font'>AGAINST PC</span><br><button onclick='replay()'>PLAY AGAIN</button>"
                con[4].outerHTML = "<div  class='con pp-same'><img class='' src='icon-paper.svg' alt='paper'></img> </div>"
                user++;
                next.style.display = "block"
            }
        }
        localStorage.setItem("computer_score",comp)
        localStorage.setItem("user_score",user)
        // comp_s.innerHTML = comp
        // user_s.innerHTML = user
        comp_s.textContent = `${comp}`
        user_s.textContent = `${user}`
    }
}

function replay(){
    let con = document.querySelectorAll(".con")
    for(let i=0;i<con.length;i++){
        con[i].style.display = "none"
    }
    let main = document.querySelectorAll(".action")
    for(let i=0;i<main.length;i++){
        main[i].style.display = "block"
    }
    let next = document.getElementById("next")
    next.style.display = "none"
}

function display(){
    const rulesBox = document.getElementById('rulesBox');
    rulesBox.style.display = 'block';
}

function removeit(){
    const rulesBox = document.getElementById('rulesBox');
   // console.log("close")
    rulesBox.style.display = 'none';
}

function next(){
    window.location.href = "hurray.html";
}

function playAgain(){
    // let next = document.getElementById("next")
    // next.style.display = "none"
    window.location.href = "index.html";
}