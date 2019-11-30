let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

chai.use(chaiHttp);

describe(" note for negative test Cases", () => {
    it("if note id is empty", (done) => {

        chai.request(server)
            .post("/deleteNote")
            .send(object.deleteNoteTest[0].noteIdEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if token is invalid", (done) => {
        chai.request(server)
            .post("/deleteNote")
            .send(object.deleteNoteTest[0].noteIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("note for positive test Cases", () => {
    it("if note deleted sucessfully", (done) => {

        chai.request(server)
            .post("/deleteNote")
            .send(object.deleteNoteTest[0].deletedSucessfull)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});