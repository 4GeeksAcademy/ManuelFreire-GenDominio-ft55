import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function genDominios(pronoun, adj, noun, result = []) {
  
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
let resultDomain = genDominios(pronoun, adj, noun);
let parteUno = '';
for (let d = 0; d < resultDomain.length; d++) {
  parteUno += `<li class="list-group-item list-group-item-secondary">${resultDomain[d]}</li>`;
  
}
  document.getElementById("dominio").innerHTML = parteUno;
  console.log(resultDomain);
};