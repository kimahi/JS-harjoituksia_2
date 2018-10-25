let vuosi;
vuosi = prompt("Anna vuosi");

if (vuosi%4!=0) {
  alert("Vuosi ei ole karkausvuosi");
}
else if (vuosi%400==0) {
  alert("Vuosi on karkausvuosi");
}
else if (vuosi%100==0){
  alert("Vuosi ei ole karkausvuosi");
}
else {
  alert("Vuosi on karkausvuosi");
}