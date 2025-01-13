document.addEventListener("DOMContentLoaded", (event) => {
    const mtg = 20
    // const edh = 40
    // const ygo = 80

    const buttons = [
        'P1Up', 
        'P1Down', 
        'P2Up', 
        'P2Down', 
        'Reset', 
//      'ResetCancel', 
//      'ResetConfirm'
    ];
    
    const text_p1Score = document.querySelector('#p1Score');
    const text_p2Score = document.querySelector('#p2Score');
    const btn_p1Up = document.querySelector('#btn_p1Up');
    const btn_p1Down = document.querySelector('#btn_p1Down');
    const btn_p2Up = document.querySelector('#btn_p2Up');
    const btn_p2Down = document.querySelector('#btn_p2Down');
    const btn_reset = document.querySelector('#btn_reset');

    btn_p1Up.addEventListener("click", () => {
        buttonPress(buttons[0])
    });
    
    btn_p1Down.addEventListener("click", () => {
        buttonPress(buttons[1])
    });
    
    btn_p2Up.addEventListener("click", () => {
        buttonPress(buttons[2])
    });
    
    btn_p2Down.addEventListener("click", () => {
        buttonPress(buttons[3])
    });
    
    btn_reset.addEventListener("click", () => {
        buttonPress(buttons[4])
    });

    let player1Score = mtg;
    let player2Score = mtg;

    function buttonPress(button){
        if (button == buttons[0]) { // P1Up
            player1Score += 1;

        }
        if (button == buttons[1]) { // P1Down
            player1Score -= 1;

        }
        if (button == buttons[2]) { // P2Up
            player2Score += 1;

        }
        if (button == buttons[3]) { // P2Down
            player2Score -= 1;

        }
        if (button == buttons[4]) { // Reset
            player1Score = mtg;
            player2Score = mtg;

        }
        /*
        if (button == buttons[5]) { // ResetCancel

        }
        if (button == buttons[6]) { // ResetConfirm

        }
        */
        text_p1Score.innerHTML = player1Score;
        text_p2Score.innerHTML = player2Score;
    }
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}
