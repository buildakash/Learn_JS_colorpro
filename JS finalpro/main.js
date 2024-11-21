const colors = ["#E1B9EC","#CF70E6","#D04FDC","#872290","#A25CB4"];
const button = document.getElementById("bt");
const colrna = document.querySelector(".color");
button.addEventListener("click",function(){
    const random = getRandom();
    console.log(random);
    document.body.style.backgroundColor = colors[random];
    colrna.textContent = colors[random];
    

});
function getRandom(){
    return Math.floor(Math.random()* colors.length);
}

