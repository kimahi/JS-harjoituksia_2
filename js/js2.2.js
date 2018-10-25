let nimi, num;
num = (Math.random() * ( 4 - 1 ) + 1).toFixed();
nimi = prompt("Kerro nimesi");

if (num==1) {
  alert(nimi + ", olet Rohkelikko!");
}
else if (num==2) {
  alert(nimi + ", olet Luihunen!");
}
else if (num==3) {
  alert(nimi + ", olet Korpinkynsi!");
}
else {
  alert(nimi + ", olet Puuskupuh!");
}