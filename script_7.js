/* Bot */

let userInput = prompt("Parlez au bot !");
if (userInput.endsWith("?")) {
  console.log("Ouais Ouais...");
} else if (userInput === userInput.toUpperCase() && userInput.trim() !== "") {
  console.log("Pwa, calme-toi...");
} else if (userInput.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (userInput.trim() === "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}
