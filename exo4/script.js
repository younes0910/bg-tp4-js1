
//qst1

const produit1 = {
    nom_prod: "ton",
    prix: 100,
    quantite: 3
};

const valeur = produit1.prix * produit1.quantite;

console.log("nom:", produit1.nom_prod);
console.log("valeur du stock:", valeur);


//qst2

const produits = [
    { nome: "produit2", prix: 50, quantity: 10 },
    { nome: "produit3", prix: 210, quantity: 4 },
    { nome: "produit4", prix: 10, quantity: 25 },
    { nome: "produit5", prix: 90, quantity: 8 },
    { nome: "produit6", prix: 270, quantity: 5 }
];

let sum_prod = 0;

for (let i = 0; i < produits.length; i++) {
    sum_prod += produits[i].prix;
}

const prix_moy = sum_prod / produits.length;

console.log("Prix moyen:", prix_moy);

for (let i = 0; i < produits.length; i++) {
    if (produits[i].prix > prix_moy) {
        console.log(produits[i]);
    }
}


//qst3

const totalArticles = produits.reduce(
    (total, p) => total + p.quantity, 0
);

const valeurGlobale = produits.reduce(
    (total, p) => total + p.prix * p.quantity, 0
);

console.log("Total articles:", totalArticles);
console.log("Valeur globale:", valeurGlobale);


//qst4

function calculerValStock(produit) {
    return produit.prix * produit.quantity;
}

for (let i = 0; i < produits.length; i++) {
    console.log(
        produits[i].nome,
        ":",
        calculerValStock(produits[i])
    );
}


//qst5

function appliquerauProduits(produits, callback) {
    produits.forEach(callback);
}


appliquerauProduits(produits, function(p) {
    console.log(p.nome);
});


appliquerauProduits(produits, function(p) {
    console.log(p.prix);
});


appliquerauProduits(produits, function(p) {
    console.log(p.nome + " : " + p.prix + " DA");
});
