let etudiants_delib = [
    {
        ID: 1000,
        nom: "JOHN",
        prenom: "DOE",
        note: 14.5
    },
    {
        ID: 2000,
        nom: "BOB",
        prenom: "CARLTON",
        note: 7.1
    },
    {
        ID: 3000,
        nom: "RAYANE",
        prenom: "SMITH",
        note: 13.3
    }
];

// Function B
function delib(note) {
    if (note >= 10) {
        return true;
    } else {
        return false;
    }
}

// Function A
function fff1() {
    for (let i = 0; i < etudiants_delib.length; i++) {
        if (delib(etudiants_delib[i].note)) {
            console.log(etudiants_delib[i].ID + ": ADMIS");
        } else {
            console.log(etudiants_delib[i].ID + ": AJOURNÉ");
        }
    }
}
