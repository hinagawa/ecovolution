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
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['../routes/*.js'],
};