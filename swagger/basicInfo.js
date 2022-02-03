const keys = require('../config/keys');

const host = keys.host;
module.exports = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ecovolution API',
            version: '1.0.0',
            description: 'Ecology web-platform'
        },
        servers: [
            {
                url: host
            }
        ]
    },
    apis: ['swagger\\routes\\authRoutesInfo.js']

};
