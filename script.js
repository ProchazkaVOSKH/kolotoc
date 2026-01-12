function vykresliKarty() {
    var html = "";
    for (var i = 0; i < karty.length; i++) {
        html += '<img src="img/' + karty[i] + '">';
    }
    displej.innerHTML = html;
}
function provedPosun() {
    // vyjmeme poslední prvek a vložíme ho na začátek
    var posledni = karty.pop();
    if (posledni !== undefined) {
        karty.unshift(posledni);
    }
    vykresliKarty();
}
// funkce pro náhodné zamíchání pole (Fisher-Yates shuffle)
function zamichejKarty() {
    for (var i = karty.length - 1; i > 0; i--) {
        // vybere se náhodný index od 0 do i
        var j = Math.floor(Math.random() * (i + 1));
        // prohození prvků na pozici i a j
        var temp = karty[i];
        karty[i] = karty[j];
        karty[j] = temp;
    }
}
// připravíme si pole s názvy obrázků karet
var karty = ["card1.png", "card2.png", "card3.png", "card4.png", "card5.png", "card6.png"];
// získáme přístup k prvkům na stránce
var displej = document.getElementById('displej');
var tlacitko = document.getElementById('spinBtn');
zamichejKarty();
vykresliKarty();
