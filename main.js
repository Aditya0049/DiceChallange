//Dice 1
var r = Math.floor(Math.random()*6)+1;
var diceimage = "images/dice"+r+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", diceimage);
//Dice 2
var r2 = Math.floor(Math.random()*6)+1;
var diceimage2 = "images/dice"+r2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", diceimage2);

if (r2 < r) {
  document.querySelector("h1").innerHTML="Player 1 Win";
}else if (r2 > r) {
  document.querySelector("h1").innerHTML="Player 2 Win";
}else{
    document.querySelector("h1").innerHTML="Refrash Again";
}
