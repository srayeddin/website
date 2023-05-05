// html varibal
let Score =  document.getElementById("scoreSpan")


// button listeneer
document.getElementById("search-btn").addEventListener("click", btnClicked);
// function btn clicked
function btnClicked() {
// score 
let score = 0;
  

  let ans1 = document.getElementById("answer1").value.toLowerCase();
  if (ans1 === "gumball" || ans1 === "gumball waterson") {
    document.getElementById("out1").innerHTML = `<h2>right</h2>`;
    score++;
    Score.innerHTML= score;
  } else {
    document.getElementById("out1").innerHTML = `<h2>wrong</h2>`;
  }

   let ans2 = document.getElementById("answer2").value.toLowerCase();
   if ( ans2 === "elmore junior high"){
    document.getElementById("out2").innerHTML = `<h2>right</h2>`;
    score++;
    Score.innerHTML= score;
   }else{
    document.getElementById("out2").innerHTML = `<h2>wrong</h2>`;
   }

 let ans3 = document.getElementById("answer3").value.toLowerCase();
 if ( ans3=== "rabbits" || ans3 === "bunnys"){
  document.getElementById("out3").innerHTML = `<h2>right</h2>`;
  score++;
  Score.innerHTML= score;
   }else {
  document.getElementById("out3").innerHTML = `<h2>wrong</h2>`;
  }
   let ans4 = document.getElementById("answer4").value.toLowerCase();
   if ( ans4 === "fish"){
    document.getElementById("out4").innerHTML = `<h2>right</h2>`;
    score++;
    Score.innerHTML= score;
   }else{
    document.getElementById("out4").innerHTML = `<h2>wrong</h2>`;
   }
}
