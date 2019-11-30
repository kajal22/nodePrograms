let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

chai.use(chaiHttp);

describe(" label for negative test Cases", () => {

    it("if label user id is empty", (done) => {

        chai.request(server)
            .post("/deleteLabel")
            .send(object.deleteLabelTest[0].labelIdEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if token is invalid", (done) => {
        chai.request(server)
            .post("/deleteLabel")
            .send(object.deleteLabelTest[0].labelIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("label for positive test Cases", () => {
    it("if label deleted sucessfully", (done) => {

        chai.request(server)
            .post("/deleteLabel")
            .send(object.deleteLabelTest[0].deletedSucessfull)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});