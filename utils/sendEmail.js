const nodemailer = require('nodemailer');

const keys = require('../config/keys');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: keys.mailService,
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
    }
    catch (e) {
        console.log(e.message);
        throw new Error(`Send email error ${e.message}`);
    }
};

module.exports = sendEmail;
