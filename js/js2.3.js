let sukup, hemo;
sukup = prompt("Mies vai nainen?");


if (sukup=="nainen" || sukup=="Nainen") {
  hemo = prompt("Hemoglobiiniarvosi (g/l)");
  if (hemo<117) {
    alert("Hemoglobiinisi on liian alhainen");
  }
  else if (hemo>175) {
    alert("Hemoglobiinisi on liian korkea");
  }
  else {
    alert("Hemoglobiinisi on normaali");
  }
}
else if (sukup=="mies" || sukup=="Mies") {
  hemo = prompt("Hemoglobiiniarvosi (g/l)");
  if (hemo<134) {
    alert("Hemoglobiinisi on liian alhainen");
  }
  else if (hemo>195) {
    alert("Hemoglobiinisi on liian korkea");
  }
  else {
    alert("Hemoglobiinisi on normaali");
  }
}
else {
  alert("En tunne kyseistä sukupuolta");
}