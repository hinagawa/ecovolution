const nodemailer = require('nodemailer');

const config = require('../config/dev');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: config.mailService,
            port: 465,
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
    }
    catch (e) {
        console.log(e.message);
        throw new Error(`Send email error ${e.message}`);
    }
};

module.exports = sendEmail;
