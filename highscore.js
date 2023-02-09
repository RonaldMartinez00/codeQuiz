storedScore = localStorage.getItem("score") || 0;
function displayScore(){
    document.getElementById("displayScore").innerHTML = storedScore;
    
}
window.addEventListener("load", function() {
    storedScore = localStorage.getItem("score") || 0;
    displayScore();
  });