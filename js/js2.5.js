let vast, num;
vast = confirm("Lasketaanko neliöjuuri");

if (vast == true) {
  num = prompt("Anna numero");
 if (num<0) {
   alert("Negatiivisen luvun neliöjuuri ei ole määritelty");
 }
 else {
   alert("Luvun neliöjuuri on " + Math.sqrt(num));
 }
}
else {
  alert("Neliöjuurta ei lasketa");
}