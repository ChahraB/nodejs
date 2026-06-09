// filesystem.js
const fs = require('fs');

// Première partie : Créer le fichier welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error('Erreur lors de la création du fichier:', err);
        return;
    }
    console.log('Fichier welcome.txt créé avec succès !');

    // Deuxième partie : Lire le fichier welcome.txt
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier:', err);
            return;
        }
        console.log('Contenu du fichier :', data);
    });
});