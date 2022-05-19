var admin = require('firebase-admin');
const uuid = require('uuid-v4');

const keys = require('../config/keys');


const firebaseConfig = {
    type: keys.type,
    project_id: keys.project_id,
    private_key_id: keys.private_key_id,
    private_key: keys.private_key,
    client_email: keys.client_email,
    client_id: keys.client_id,
    auth_uri: keys.auth_uri,
    token_uri: keys.token_uri,
    auth_provider_x509_cert_url: keys.auth_provider_x509_cert_url,
    client_x509_cert_url: keys.client_x509_cert_url,
};

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    storageBucket: keys.storageBucket
});

var bucket = admin.storage().bucket();

const createPersistentDownloadUrl = (bucket, pathToFile, downloadToken) => {
    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
        pathToFile
    )}?alt=media&token=${downloadToken}`;
};

async function uploadFile(filePath) {

    const metadata = {
        metadata: {
            // This line is very important. It's to create a download token.
            firebaseStorageDownloadTokens: uuid()
        },
        contentType: 'image/png',
        cacheControl: 'public, max-age=31536000',
    };

    const filename = filePath.split('//').slice(-1)[0];
    const url = await bucket.upload(filePath, {
        gzip: true,
        metadata: metadata,
    });
    const refUrl = createPersistentDownloadUrl(keys.storageBucket, filename, url[1].metadata.firebaseStorageDownloadTokens);
    return refUrl;
}

module.exports = { uploadFile };