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
                url: 'https://ecovolution.herokuapp.com',
            }
        ]
    },
    apis: ['swagger\\routes\\authRoutesInfo.js']

};
