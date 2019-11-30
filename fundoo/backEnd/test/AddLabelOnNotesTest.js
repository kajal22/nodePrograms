
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

chai.use(chaiHttp);


describe("add Label on note of negative test Cases", () => {
    it("if all label is empty", (done) => {

        chai.request(server)
            .post("/addLabelOnNote")
            .send(object.addLabelOnNoteTest[0].noteAllEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if label id is empty", (done) => {
        chai.request(server)

            .post("/addLabelOnNote")
            .send(object.addLabelOnNoteTest[0].noteLabelIdEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if token is invalid", (done) => {

        chai.request(server)
            .post("/addLabelOnNote")
            .send(object.addLabelOnNoteTest[0].noteLabelIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("add label on note for positive test Cases", () => {
    it("if added  sucessfully", (done) => {

        chai.request(server)
            .post("/addLabelOnNote")
            .send(object.addLabelOnNoteTest[0].addedSucessfull)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});