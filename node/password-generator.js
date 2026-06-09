// password-generator.js
const generator = require('generate-password');

function generateRandomPassword() {
    const password = generator.generate({
        length: 12,          // Longueur du mot de passe
        numbers: true,       // Inclure des chiffres
        symbols: true,       // Inclure des symboles
        uppercase: true,     // Inclure des majuscules
        lowercase: true,     // Inclure des minuscules
        strict: true         // Au moins un de chaque type
    });
    
    console.log('Mot de passe généré :', password);
    return password;
}

generateRandomPassword();