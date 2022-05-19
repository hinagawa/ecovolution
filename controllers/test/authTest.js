const server = require('../authController.js');
const fs = require('fs');

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect;
(fs), (server);

chai.use(chaiHttp);

describe('Auth API', () => {
    
    it('should create user', (done) => {
        chai
            .request(server)
            .post('/api/sign-up')
            .send({
                user: { name: 'name1', lastname:'lastname1', email: 'email@test.com', password:'testtesttest'  },
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('message');

                done();
            });
    });
    it('should return token', (done) => {
        chai
            .request(server)
            .post('/api/sign-in')
            .send({
                user: { name: 'name1', lastname:'lastname1', email: 'email@test.com', password:'testtesttest'  },
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('token');

                done();
            });
    });
});
