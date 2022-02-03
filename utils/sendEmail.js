const nodemailer = require('nodemailer');

const keys = require('../config/keys');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: keys.service,
            auth: {
                user: keys.mailUser,
                pass: keys.mailPassword
            }
        });
        await transporter.sendMail({
            from: keys.mailUser,
            to: email,
            subject: subject,
            text: text
        });
        console.log('Email sent successfully');
    }
    catch (e) {
        console.log('Send email error ', e.message);
    }
};

module.exports = sendEmail;
