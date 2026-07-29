// ==========================================
// LOLA'S BLOCK PUZZLE
// EFFECTS.JS
// Visual Effects Manager
// ==========================================


// ==========================================
// FLOATING SCORE
// ==========================================

function showFloatingScore(points, x, y){

    const text = document.createElement("div");

    text.className = "floating-score";

    text.innerHTML = `+${points}`;


    text.style.left = `${x}px`;

    text.style.top = `${y}px`;


    document.body.appendChild(text);



    setTimeout(()=>{

        text.remove();

    },1000);

}



// ==========================================
// COMBO MESSAGE
// ==========================================

function showCombo(combo){


    if(combo <= 1)
        return;



    const message =
    document.createElement("div");

    message.className =
    "combo-message";


    let text="";


    if(combo === 2){

        text="🔥 Nice Combo!";

    }
    else if(combo === 3){

        text="💥 Amazing!";

    }
    else{

        text="🌸 Lola is on Fire!";

    }



    message.innerHTML=text;


    document.body.appendChild(message);



    setTimeout(()=>{

        message.remove();

    },1200);


}



// ==========================================
// CONFETTI EFFECT
// ==========================================

function createConfetti(){


    for(let i=0;i<40;i++){


        const confetti =
        document.createElement("div");


        confetti.className =
        "confetti";


        confetti.style.left =
        Math.random()*100+"vw";


        confetti.style.animationDuration =
        (Math.random()*2+1)+"s";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },3000);


    }


}



// ==========================================
// SCREEN SHAKE
// ==========================================

function screenShake(){


    const container =
    document.querySelector(
        ".game-container"
    );


    if(!container)
        return;



    container.classList.add(
        "shake"
    );


    setTimeout(()=>{

        container.classList.remove(
            "shake"
        );

    },300);


}



// ==========================================
// LINE CLEAR EFFECT
// ==========================================

function lineClearEffect(){


    screenShake();

    createConfetti();


}



// ==========================================
// WELCOME MESSAGE
// ==========================================

function showLolaMessage(){

    const messages=[
        "🌸 Good Luck Nay!",
        "💖 You can do it!",
        "✨ Have fun!",
        "😊 Enjoy playing!"
    ];

    const random =
    messages[Math.floor(Math.random()*messages.length)];

    const msg = document.createElement("div");

    msg.className = "combo-message";

    msg.textContent = random;

    document.body.appendChild(msg);

    setTimeout(()=>{
        msg.remove();
    },2000);

}

function boardPop(){

    const board =
    document.getElementById("board");

    board.animate(

        [

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.03)"
            },

            {
                transform:"scale(1)"
            }

        ],

        {

            duration:150

        }

    );

}