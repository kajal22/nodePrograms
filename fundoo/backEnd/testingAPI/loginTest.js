let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let fs = require('fs')
let data = fs.readFileSync('/home/admin1/Desktop/kajal/fundoo/backEnd/testingAPI/registration.json')
let object = JSON.parse(data)
chai.use(chaiHttp);

describe('login for negative test Cases', () => {
    it('if all login email is empty', (done) => {

        chai.request(server)
            .post('/login')
            .send(object.loginTest[0].loginEmailEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
  
    it('if login email is Invalid', (done) => {

        chai.request(server)

            .post('/login')
            .send(object.loginTest[0].loginEmailInvalid)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it('if login email is empty', (done) => {

        chai.request(server)
            .post('/login')
            .send(object.loginTest[0].loginEmailEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it('if login password is empty', (done) => {

        chai.request(server)
            .post('/login')
            .send(object.loginTest[0].loginPasswordEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it('if login Password Length exceeds', (done) => {

        chai.request(server)
            .post('/login')
            .send(object.loginTest[0].loginPasswordExceeds)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it('if login Password Length small', (done) => {

        chai.request(server)
            .post('/login')
            .send(object.loginTest[0].loginPasswordSmall)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

})
    describe('login for positive test Cases', () => {
    it('if matched login successfull', (done) => {

        chai.request(server)
            .post('/login')
            .send(object.loginTest[0].loginSucessfull)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
})


