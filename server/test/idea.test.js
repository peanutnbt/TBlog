//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../../app');


chai.use(chaiHttp);
//Our parent block
describe('Ideas', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('GET /api/v1/idea', () => {
        it('it should GET all the ideas', (done) => {
            chai.request(server)
                .get('/api/v1/idea')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.ideas.should.be.a('array');
                    res.body.ideas.length.should.be.eql(19); // fixme :)
                    done();
                });
        });
    });
    describe('/POST /api/v1/idea', () => {
        it('it should POST a idea', (done) => {
            let idea = {
                content: "ahihi"
            };
            chai.request(server)
                .post('/api/v1/idea')
                .send(idea)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.createIdea.newIdea.should.have.property('content');
                    res.body.createIdea.newIdea.should.have.property('content').eql(idea.content);
                    done();
                });
        });
        it('it should not POST a book without content field', (done) => {
            let idea = {
                content: ""
            };
            chai.request(server)
                .post('/api/v1/idea')
                .send(idea)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});