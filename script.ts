// obecná funkce, která sestaví HTML text obrázků hracích karet: "<img src="obr1.png"><img src="obr2.png">..."
function vykresliKarty(k: string[]) {
    let html = "";
    for (let i = 0; i < k.length; i++) {
        html += '<img src="img/' + k[i] + '">';
    }
    const displej = document.getElementById('displej') as HTMLElement;
    displej.innerHTML = html;
}

// obecná funkce, která podle funkcionality posuvného registru otočí o jeden krok pole doprava
function provedPosun(k: string[]) {
    // vyjmeme poslední prvek a vložíme ho na začátek
    const posledni = k.pop();
    if (posledni !== undefined) {
        k.unshift(posledni);
    }
}

// obecná funkce pro náhodné zamíchání pole (algoritmus Fisher-Yates shuffle)
function zamichejKarty(k: string[]) {
    for (let i = k.length - 1; i > 0; i--) {
        // vybere se náhodný index od 0 do i
        const j = Math.floor(Math.random() * (i + 1));
        // prohození prvků na pozici i a j
        let temp = k[i];
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
const karty: string[] = ["card1.png", "card2.png", "card3.png", "card4.png", "card5.png", "card6.png"];

// inicializace katet (výchozí zobrazení)
zamichejKarty(karty);
vykresliKarty(karty);