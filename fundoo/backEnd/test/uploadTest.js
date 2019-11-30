let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/registration.json");
// let object = JSON.parse(data);
chai.use(chaiHttp);


describe("upload image for negative test Cases", () => {
    it("if all  data of upload image is empty", (done) => {

        chai.request(server)
            .post("/upload")
            .send(object.uploadTest[0].urlEmpty)
            .set(object.uploadTest[0].tokenHeader)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });



    it("if token is invalid", (done) => {

        chai.request(server)
            .post("/upload")
            .send(object.uploadTest[0])
            .set(object.uploadTest[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe("upload images for positive test Cases", () => {
    it("if uploaded sucessfully", (done) => {

        chai.request(server)
            .post("/upload")
            .send("file", fs.readFileSync("/home/admin1/Desktop/kajal/chatApp/FrontEnd/assets/bg.jpg"))
            .set(object.uploadTest[0].tokenHeader)
            .set("Content-Type","file/jpeg")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});