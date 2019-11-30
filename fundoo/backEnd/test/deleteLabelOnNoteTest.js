
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

chai.use(chaiHttp);


describe("delete Label on note of negative test Cases", () => {
    it("if all label is empty", (done) => {

        chai.request(server)
            .post("/deleteLabelOnNote")
            .send(object.deleteLabelOnNoteTest[0].noteAllEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if label id is empty", (done) => {
        chai.request(server)

            .post("/deleteLabelOnNote")
            .send(object.deleteLabelOnNoteTest[0].noteLabelIdEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if token is invalid", (done) => {

        chai.request(server)
            .post("/deleteLabelOnNote")
            .send(object.deleteLabelOnNoteTest[0].noteLabelIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("delete label on note for positive test Cases", () => {
    it("if deleted sucessfully", (done) => {

        chai.request(server)
            .post("/deleteLabelOnNote")
            .send(object.deleteLabelOnNoteTest[0].deleteLabelSucessfull)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});