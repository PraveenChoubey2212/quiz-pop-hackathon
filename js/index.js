let musicButton=document.getElementById("musicButton");
let ModernArtButton=document.getElementById("ModernArtButton");
let codingButton=document.getElementById("codingButton");
let musicAnchor=document.getElementById("musicPageAnchor");
let ModernArtAnchor=document.getElementById("ModernArtPageAnchor");
let codingAnchor=document.getElementById("codingPageAnchor");
let musicScore = document.querySelector("#musicScore");
let ModernArtScore = document.getElementById("ModernArtScore");
let codingScore = document.getElementById("codingScore");
let scoreCard=document.getElementById("scoreCard");
function checkScore(){
    let final_Music = Number(localStorage.final_Music);
    if(final_Music===1){
      musicScore.innerHTML=Number(localStorage.score_Music);
      scoreCard.classList.remove("scoreCard");
      musicAnchor.setAttribute("href","index.html");
      musicButton.disabled=true;
    }
    else {
      scoreCard.classList.add("scoreCard");
    }
//modern art button
    let final_ModernArt = Number(localStorage.final_ModernArt);
    if(final_ModernArt===1){
      scoreCard.classList.remove("scoreCard");
      ModernArtScore.innerHTML=Number(localStorage.score_ModernArt);
      ModernArtAnchor.setAttribute("href","index.html");
      ModernArtButton.disabled=true;
    }
    else {
        scoreCard.classList.add("scoreCard");
    }

//coding Button

let final_coding = Number(localStorage.final_coding);
    if(final_coding===1){
      scoreCard.classList.remove("scoreCard");
      codingScore.innerHTML=Number(localStorage.score_coding);
      codingAnchor.setAttribute("href","index.html");
      codingButton.disabled=true;
    }
    else {
      scoreCard.classList.add("scoreCard");
    }
}