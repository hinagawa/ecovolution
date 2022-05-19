const server = require('../placeController.js');
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
                expect(res.body).to.haveOwnProperty('data');

                done();
            });
    });

    it('should get place by id', (done) => {
        chai
            .request(server)
            .get('/api/place/getPlaceById')
            .query({ id: '62666e53e93cf1dcd9920f03' })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('data');
                expect(res.body.data.id).to.equal('62666e53e93cf1dcd9920f03');

                done();
            });
    });

    it('should not get non-existing place', (done) => {
        chai
            .request(server)
            .get('/api/place/getPlaceById')
            .query({ id: 4 })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.haveOwnProperty('message');

                done();
            });
    });

    it('should create place', (done) => {
        chai
            .request(server)
            .post('/api/place/create')
            .send({
                place: { placeName: 'placeName1', placeDescription: 'placeDescription1', placeLocation: '54 32', placeTags: ['placeTag1'] },
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('message');

                done();
            });
    });
});
