const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

//Assertion Style

chai.should();
chai.use(chaiHttp);

describe('Posts API', ()=>{

    /**
     * Test the GET route
     */

    describe("GET/server/posts", ()=>{
        it("It should GET all the posts", (done)=>{
            chai.request(server)
                .get("/server/posts")
                .end((err,response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');                 
                })
                done();
            })
    })
    /**
     * Test the GET (by id) route
     */
        


    /**
     * Test the POST route
     */


    /**
     * Test the PUT route
     */

    /**
     * Test the DELETE route
     */



})