let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/registration.json");
// let object = JSON.parse(data);
chai.use(chaiHttp);

console.log(object.resetTest[0].resetPassEmpty);

describe("reset password for negative test Cases", () => {
    it("if reset password is empty", (done) => {

        chai.request(server)
            .post("/resetPassword")
            .send(object.resetTest[0].resetPassEmpty)
            .set(object.resetTest[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if reset data of password is Invalid", (done) => {

        chai.request(server)

            .post("/resetPassword")
            .send(object.resetTest[0].resetPassInvalid)
            .set(object.resetTest[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });

    });
    it("if request send without token", (done) => {

        chai.request(server)

            .post("/resetPassword")
            .send(object.resetTest[0].resetPassInvalid)
            .set(object.resetTest[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("reset data for positive test Cases", () => {
    it("password updated successfully", (done) => {

        chai.request(server)
            .post("/resetPassword")
            .send(object.resetTest[0].resetSucessfull)
            .set(object.resetTest[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

});

