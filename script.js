/* add interaction to website */

var facts = ["Every Shen Yun ticket sold helps fund anti-science and anti-LGBTQ+ ideologies promoted by Falun Gong.", 
"Shen Yun performers live under strict control, separated from the outside world and constantly surveilled, even by each other.",
"Former members of Falun Gong have reported psychological trauma, family estrangement, and coercion, especially when leaving the group.",
'Despite its image of tolerance, Falun Gong teachings reject interracial marriage, calling them "impure."', 
"Falun Gong’s founder denounces medicine, telling followers to rely on “spiritual cleansing” instead, which lead to multiple preventable deaths."];

var fact = document.getElementById("fact");
var funfact = document.getElementById("funfact");
var count = 0;

funfact.addEventListener("click", displayfact);

function displayfact() {
  fact.innerHTML = facts[count];
  count += 1;
  if (count == 6) {
    fact.innerHTML = "Shen Yun is a recruitment tool for Falun Gong, a group labeled a cult by former practitioners, scholars, and journalists.";
               count = 0;
  }
}
