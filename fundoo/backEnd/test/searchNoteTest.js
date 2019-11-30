let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");
// let object = JSON.parse(data);
chai.use(chaiHttp);


describe("search Note for negative test Cases", () => {
    it("if all  Note is empty", (done) => {

        chai.request(server)
            .post("/searchNote")
            .send(object.searchNoteTest[0].searchedData)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });



    it("if token is invalid", (done) => {

        chai.request(server)
            .post("/searchNote")
            .send(object.searchNoteTest[0])
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("searched note for positive test Cases", () => {
    it("if searched sucessfully", (done) => {

        chai.request(server)
            .post("/searchNote")
            .send(object.searchNoteTest[0].searchSucessfull)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});