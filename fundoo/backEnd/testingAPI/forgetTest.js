let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let fs = require('fs')
let data = fs.readFileSync('/home/admin1/Desktop/kajal/fundoo/backEnd/testingAPI/registration.json')
let object = JSON.parse(data)
chai.use(chaiHttp);


describe('forget password for negative test Cases', () => {
    it('if all forget data of email is empty', (done) => {

        chai.request(server)
            .post('/forgetPassword')
            .send(object.forgetTest[0].forgetEmailEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
  
    it('if forget data of email is Invalid', (done) => {

        chai.request(server)
            .post('/forgetPassword')
            .send(object.forgetTest[0].forgetEmailInvalid)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
   
    describe('forget data for positive test Cases',() => {
    it('mail sent successfully', (done) => {

        chai.request(server)
            .post('/forgetPassword')
            .send(object.forgetTest[0].sentSucessfull)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});


})