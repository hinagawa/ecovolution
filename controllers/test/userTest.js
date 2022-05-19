const server = require('../userController.js');
const fs = require('fs');

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect;
(fs), (server);

chai.use(chaiHttp);

describe('Users API', () => {
    it('should get all users', (done) => {
        chai
            .request(server)
            .get('/api/user/getUsers')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('data');

                done();
            });
    });

    it('should get user by id', (done) => {
        chai
            .request(server)
            .get('/api/user/getById')
            .query({ id: '61ee7f441597e80ab21f2abf' })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('data');
                expect(res.body.data.id).to.equal('61ee7f441597e80ab21f2abf');

                done();
            });
    });
});
