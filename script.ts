function vykresliKarty() {
    let html = "";
    for (let i = 0; i < karty.length; i++) {
        html += '<img src="' + karty[i] + '">';
    }
    displej.innerHTML = html;
}

function provedPosun() {
    // vyjmeme poslední prvek a vložíme ho na začátek
    const posledni = karty.pop();
    if (posledni !== undefined) {
        karty.unshift(posledni);
    }
    vykresliKarty();
}

// funkce pro náhodné zamíchání pole (Fisher-Yates shuffle)
function zamichejKarty() {
    for (let i = karty.length - 1; i > 0; i--) {
        // vybere se náhodný index od 0 do i
        const j = Math.floor(Math.random() * (i + 1));
        // prohození prvků na pozici i a j
        let temp = karty[i];
        karty[i] = karty[j];
        karty[j] = temp;
    }
}

// připravíme si pole s názvy obrázků karet
const karty: string[] = ["card1.png", "card2.png", "card3.png", "card4.png", "card5.png", "card6.png"];

// získáme přístup k prvkům na stránce
const displej = document.getElementById('displej') as HTMLElement;
const tlacitko = document.getElementById('spinBtn') as HTMLButtonElement;

zamichejKarty();
vykresliKarty();