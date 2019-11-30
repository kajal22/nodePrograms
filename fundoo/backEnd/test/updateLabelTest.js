let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

// let object = JSON.parse(data);
chai.use(chaiHttp);

describe("updated label for negative test Cases", () => {
    it("if all label is empty", (done) => {

        chai.request(server)
            .post("/updateLabel")
            .send(object.updateLabelTest[0].updateLabelEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
  
    it("if label name is empty", (done) => {
        chai.request(server)

            .post("/updateLabel")
            .send(object.updateLabelTest[0].updateLabelNameEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if label user id is empty", (done) => {

        chai.request(server)
            .post("/updateLabel")
            .send(object.updateLabelTest[0].labelUserIdEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
    it("if token is invalid", (done) => {
        chai.request(server)
            .post("/updateLabel")
            .send(object.updateLabelTest[0].labelIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
    describe("updated label for positive test Cases", () => {
        it("if label updated sucessfully", (done) => {
    
            chai.request(server)
                .post("/updateLabel")
                .send(object.updateLabelTest[0].updatedSuccessfull)
                .set(object.token[0].tokenHeader)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });