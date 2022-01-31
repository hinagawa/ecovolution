const nodemailer = require('nodemailer');

const config = require('../config/dev');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: config.service,
            auth: {
                user: config.mailUser,
                pass: config.mailPassword
            }
        });
        await transporter.sendMail({
            from: config.mailUser,
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
