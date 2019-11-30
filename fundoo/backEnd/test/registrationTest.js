let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/registration.json");

chai.use(chaiHttp);
console.log(object.registerTest[0].registrationSuccessfull);


describe("Regisration for negative test Cases", () => {
    it("if all registration is empty", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if registration firstName is empty", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationFirstNameEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if registration lastName is empty", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationlastNameEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if registration Email is empty", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationEmailEmpty)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if registration Password Length is exceeds", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationPasswordExceeds)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if  registration Password Length is small", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationPasswordSmall)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if registration email is Invalid", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registrationEmailInvalid)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if registration email is already exist", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationEmailExist)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
    describe("Regisration for positive test Cases", () => {
    it("if registration Successfull", (done) => {

        chai.request(server)
            .post("/registration")
            .send(object.registerTest[0].registrationSuccessfull)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
