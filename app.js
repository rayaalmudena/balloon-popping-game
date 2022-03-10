// tu código aquí
const balloons = document.querySelectorAll('.balloon');
let numBallons =balloons.length;


balloons.forEach(balloon => {
    balloon.addEventListener("mouseenter", function pop (event) {
    
        balloon.innerHTML="POP!";
        event.target.style.background = 'transparent';
        event.target.removeEventListener("mouseenter", pop) ;

        numBallons--;
        if(numBallons==0){
            setTimeout(congratzs, 500);           
        }
    });
});

function congratzs(){
    document.querySelector("#yay-no-balloons").style.display = "block";
    document.querySelector("#balloon-gallery").style.display = "none";
}

