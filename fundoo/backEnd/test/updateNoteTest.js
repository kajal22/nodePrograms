let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");
// let object = JSON.parse(data);
chai.use(chaiHttp);

describe("updated note for negative test Cases", () => {
    it("if all note is empty", (done) => {

        chai.request(server)
            .post("/updateNote")
            .send(object.updateLabelTest[0].updateNoteAllEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if note title is empty", (done) => {
        chai.request(server)

            .post("/updateNote")
            .send(object.updateNoteTest[0].updateNoteTitleEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("if note id is empty", (done) => {

        chai.request(server)
            .post("/updateNote")
            .send(object.updateNoteTest[0].updateNoteIdEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if token is invalid", (done) => {
        chai.request(server)
            .post("/updateNote")
            .send(object.updateNoteTest[0].updateNoteIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("updated note for positive test Cases", () => {
    it("if label updated sucessfully", (done) => {

        chai.request(server)
            .post("/updateNote")
            .send(object.updateNoteTest[0].updatedSuccessfull)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});