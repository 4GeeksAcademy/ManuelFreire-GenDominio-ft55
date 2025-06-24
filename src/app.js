import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadorDomAleatorio(pronoun, adj, noun) {
  
  let result = []

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        result.push(`${pronoun[a]}${adj[b]}${noun[c]}.com`);
      }
    }
  }
  return result
}

window.onload = function() {

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let armedDomain = generadorDomAleatorio(pronoun, adj, noun);
let message = '';
for (let d = 0; d < armedDomain.length; d++) {
  message += `<li class="list-group-item list-group-item-secondary">${armedDomain[d]}</li>`;
  
}
  document.getElementById("dominio").innerHTML = message;
  console.log(armedDomain);
};