const nodemailer = require('nodemailer');
const config = require('config');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: config.service,
            auth: {
                user: config.mailUser,
                password: config.mailPassword
            },
            secure: true
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
        console.log('Error' + e.message);
    }
};

module.exports = sendEmail;
