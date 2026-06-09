// email-sender.js
const nodemailer = require('nodemailer');


const SENDER_EMAIL = 'email@gmail.com';      // ← REMPLACEZ
const SENDER_PASSWORD = 'mot-de-passe-app';    // ← REMPLACEZ (mot de passe d'application)
const RECIPIENT_EMAIL = 'destinataire@example.com';  // ← REMPLACEZ

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD
    }
});

const mailOptions = {
    from: SENDER_EMAIL,
    to: RECIPIENT_EMAIL,
    subject: 'Test d\'envoi d\'email avec Node.js',
    text: 'Bonjour ! Ceci est un email envoyé depuis Node.js avec Nodemailer.',
    html: '<h2>Bonjour !</h2><p>Ceci est un email envoyé depuis <b>Node.js</b> avec Nodemailer.</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Erreur lors de l\'envoi:', error);
    } else {
        console.log('Email envoyé avec succès !');
        console.log('ID du message:', info.messageId);
        console.log('Réponse du serveur:', info.response);
    }
});