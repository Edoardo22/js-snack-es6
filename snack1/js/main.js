//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let bici = [
    {
        nome: "Bici da corsa",
        peso: "6kg"
    },
    {
        nome: "Bici da DH",
        peso: "18kg"
    },
    {
        nome: "Bici da Trial",
        peso: "8kg"
    },
    {
        nome: "Bici da MTB",
        peso: "14kg"
    }
]

let pesoMinore = parseInt(bici[0].peso);
indice = 0;

for (let i = 1; i < bici.length; i++) {

    let pesoBici = parseInt(bici[i].peso)
    if (pesoBici < pesoMinore) {
        pesoMinore = pesoBici;
        indice = i;
    }
}
const biciNome = document.getElementById('nomeBici');
const biciPeso = document.getElementById('pesoBici');
biciNome.innerHTML = bici[indice].nome;
biciPeso.innerHTML = bici[indice].peso;

console.log(`La bici con peso minore è ${bici[indice].nome}`);