let pituus;
pituus = prompt("Kerro saamasi kuhan pituus");

if (pituus<37) {
  alert("Kuha on alimittainen, päästä kuha takaisin uimaan. Kuhan kuha olisi ollut " +  (37-pituus) + " senttiä pidempi, olisi se kelvannut.");
} else {
  alert("Kuha on oikean mittainen!");
}