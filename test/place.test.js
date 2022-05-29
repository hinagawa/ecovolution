const server = 'http://localhost:5000';
const Place = require('../models/Place.js');
const fs = require('fs');

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect;
(fs), (server);

chai.use(chaiHttp);

describe('Places API', () => {
    it('should get all places', (done) => {
        chai
            .request(server)
            .get('/api/place/getPlaces')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.not.be.null;

                done();
            });
    });

    it('should get place by id', (done) => {
        chai
            .request(server)
            .get('/api/place/getPlaceById?placeId=62666e53e93cf1dcd9920f03')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('message');
                expect(res.body.message._id).to.equal('62666e53e93cf1dcd9920f03');

                done();
            });
    });

    it('should not get non-existing place', (done) => {
        chai
            .request(server)
            .get('/api/place/getPlaceById?placeId=4')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                expect(res.body).to.haveOwnProperty('message');

                done();
            });
    });

    it('should create place', (done) => {
        chai
            .request(server)
            .post('/api/place/create')
            .send({ 
                    placeName: 'placeName1',
                    placeDescription: 'placeDescription1',
                    placeLocation: '54 32',
                    placeTags: ['placeTag1'] }
            )
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('message');

                done();
            });
    });
});
