let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let fs = require("fs");
let object = require("../json/label.json");

chai.use(chaiHttp);

describe(" note for negative test Cases", () => {
   
  
    

    it("if token is invalid", (done) => {
        chai.request(server)
            .get("/getAllNote")
            .send()
            .set(object.token[0].emptyToken)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
    describe("note for positive test Cases", () => {
        it("get all sucessfully", (done) => {
    
            chai.request(server)
                .get("/getAllNote")
                .send()
                .set(object.token[0].tokenHeader)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });