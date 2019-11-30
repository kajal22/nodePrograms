let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

// let object = JSON.parse(data);
chai.use(chaiHttp);
console.log("token",object.token[0].tokenHeader);

describe("label for negative test Cases", () => {
    it("if all label is empty", (done) => {

        chai.request(server)
            .post("/createLabel")
            .send(object.createLabelTest[0].labelEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });
  
    it("if label name is empty", (done) => {
        chai.request(server)

            .post("/createLabel")
            .send(object.createLabelTest[0].labelNameEmpty)
            .set(object.token[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(422);
                done();
            });
    });

    it("if token is invalid", (done) => {

        chai.request(server)
            .post("/createLabel")
            .send(object.createLabelTest[0].labelIdEmpty)
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
    describe("label for positive test Cases", () => {
        it("if label created sucessfully", (done) => {
            
            chai.request(server)
                .post("/createLabel")
                .send(object.createLabelTest[0].successfull)
                .set(object.token[0].tokenHeader)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });