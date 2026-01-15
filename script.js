// obecná funkce, která sestaví HTML text obrázků hracích karet: "<img src="obr1.png"><img src="obr2.png">..."
function vykresliKarty(k) {
    var html = "";
    for (var i = 0; i < k.length; i++) {
        html += '<img src="img/' + k[i] + '">';
    }
    var displej = document.getElementById('displej');
    displej.innerHTML = html;
}
// obecná funkce, která podle funkcionality posuvného registru otočí o jeden krok pole doprava
function provedPosun(k) {
    // vyjmeme poslední prvek a vložíme ho na začátek
    var posledni = k.pop();
    if (posledni !== undefined) {
        k.unshift(posledni);
    }
}
// obecná funkce pro náhodné zamíchání pole (algoritmus Fisher-Yates shuffle)
function zamichejKarty(k) {
    for (var i = k.length - 1; i > 0; i--) {
        // vybere se náhodný index od 0 do i
        var j = Math.floor(Math.random() * (i + 1));
        // prohození prvků na pozici i a j
        var temp = k[i];
        k[i] = k[j];
        k[j] = temp;
    }
}
// událostní funkce od kliknutí na tlačítko
function zmena() {
    provedPosun(karty);
    vykresliKarty(karty);
}
// připravíme si pole s názvy obrázků karet
var karty = ["card1.png", "card2.png", "card3.png", "card4.png", "card5.png", "card6.png"];
// inicializace katet (výchozí zobrazení)
zamichejKarty(karty);
vykresliKarty(karty);
