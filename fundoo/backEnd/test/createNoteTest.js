let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

chai.use(chaiHttp);
console.log("token", object.token[0].tokenHeader);

describe("create Note for negative test Cases", () => {
    it("if all  Note is empty", (done) => {

        chai.request(server)
            .post("/createNote")
            .send(object.createLabelTest[0])
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if note title is empty", (done) => {
        chai.request(server)

            .post("/createNote")
            .send(object.createLabelTest[0].updateNoteTitleEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if token is invalid", (done) => {

        chai.request(server)
            .post("/createNote")
            .send(object.createLabelTest[0].labelIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("note for positive test Cases", () => {
    it("if note created sucessfully", (done) => {

        chai.request(server)
            .post("/createNote")
            .send(object.createLabelTest[0].successfull)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});