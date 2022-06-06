module.exports = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'EcoRevolution API',
            version: '1.0.0',
            description: 'Ecology web-platform'
        },
        servers: [
            {
                url: 'https://ecovolution.herokuapp.com',
            }
        ]
    },
    apis: [
        'swagger\\routes\\authRoutesInfo.js',
        'swagger\\routes\\articleRoutesInfo.js',
        'swagger\\routes\\placeRoutesInfo.js',
        'swagger\\routes\\userRoutesInfo.js',
    ]

};
