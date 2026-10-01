/* OBJECTIVE: Move the frog when player inputs arrow keys */

//----------VARIABLES
const player = {
    elem: document.getElementById("player"),
    order: 1,
};
const tiles = {
    tileTwo: {
        elem: document.getElementById("tileTwo"),
    },
    tileThree: {
        elem: document.getElementById("tileThree"),
    },
    tileFour: {
        elem: document.getElementById("tileFour"),
    }
};


//---------LISTEN for PLAYER KEY INPUT
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (player.order == 3) {
                player.order = 1;
                player.elem.style.order = 1;
                tiles.tileTwo.elem.style.order = 2;
                tiles.tileThree.elem.style.order = 3;
                tiles.tileFour.elem.style.order = 4;
            } else if (player.order == 4){
                player.order = 2;
                player.elem.style.order = 2;
                tiles.tileTwo.elem.style.order = 1;
                tiles.tileThree.elem.style.order = 3;
                tiles.tileFour.elem.style.order = 4;
            };
            break;
        case "ArrowDown":
            if (player.order == 1) {
                player.order = 3;
                player.elem.style.order = 3;
                tiles.tileTwo.elem.style.order = 1;
                tiles.tileThree.elem.style.order = 2;
                tiles.tileFour.elem.style.order = 4;
            } else if (player.order == 2){
                player.order = 4;
                player.elem.style.order = 4;
                tiles.tileTwo.elem.style.order = 1;
                tiles.tileThree.elem.style.order = 2;
                tiles.tileFour.elem.style.order = 3;
            };
            break;
        case "ArrowRight":
            if (player.order == 1) {
                player.order = 2;
                player.elem.style.order = 2;
                tiles.tileTwo.elem.style.order = 1;
                tiles.tileThree.elem.style.order = 3;
                tiles.tileFour.elem.style.order = 4;
            } else if (player.order == 3){
                player.order = 4;
                player.elem.style.order = 4;
                tiles.tileTwo.elem.style.order = 1;
                tiles.tileThree.elem.style.order = 2;
                tiles.tileFour.elem.style.order = 3;
            };
            break;
        case "ArrowLeft":
            if (player.order == 2) {
                player.order = 1;
                player.elem.style.order = 1;
                tiles.tileTwo.elem.style.order = 2;
                tiles.tileThree.elem.style.order = 3;
                tiles.tileFour.elem.style.order = 4;
            } else if (player.order == 4){
                player.order = 3;
                player.elem.style.order = 3;
                tiles.tileTwo.elem.style.order = 1;
                tiles.tileThree.elem.style.order = 2;
                tiles.tileFour.elem.style.order = 4;
            };
            break;
    }
});