let raha, hinta;
raha = prompt("Paljonko lompakossa on rahaa?");
hinta = prompt("Paljonko on bussilipun hinta?");

if (hinta>raha) {
  alert("Rahasi eivät riitä bussimatkaan! Tarvitset " + (hinta-raha) + " euroa lisää!");
}
else if (hinta<=raha) {
  alert("Hyvää matkaa! Rahaa jäi " + (raha-hinta) +  " euroa.");
}