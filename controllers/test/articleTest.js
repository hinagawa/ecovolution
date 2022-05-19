const server = require('../articleController.js');
const fs = require('fs');

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect;
(fs), (server);

chai.use(chaiHttp);

describe('Articles API', () => {
    it('should get all articles', (done) => {
        chai
            .request(server)
            .get('/api/article/getArticles')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('data');

                done();
            });
    });

    it('should get article by id', (done) => {
        chai
            .request(server)
            .get('/api/article/getArticleById')
            .query({ id: '6266ea7a9a71ffa53db82484' })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('data');
                expect(res.body.data.id).to.equal('6266ea7a9a71ffa53db82484');

                done();
            });
    });

    it('should not get non-existing article', (done) => {
        chai
            .request(server)
            .get('/api/article/getArticleById')
            .query({ id: 4 })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.haveOwnProperty('message');

                done();
            });
    });

    it('should create article', (done) => {
        chai
            .request(server)
            .post('/api/article/create')
            .send({
                article: { articleName: 'articleName1', articleText: 'articleText1', articleTags: ['articleTag1', 'articleTag2'], articleAuthorId: 'id1' },
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.haveOwnProperty('message');

                done();
            });
    });
});
