const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

//Assertion Style

chai.should();
chai.use(chaiHttp);

describe('Users API', ()=>{

    /**
     * Test the GET route
     */

    describe("GET/server/users/", ()=>{
        it("It should GET all the users", (done)=>{
            chai.request(server)
                .get("/server/users")
                .end((err,response) => {
                    response.should.have.status('200');
                    response.body.should.be.a('array');
                    //response.should.have.property("name")
                })
                done();
                   
            })

            it("it should not GET users", ()=>{
                chai.request(server)
                .get("/user")
            })
    })
    /**
     * Test the GET (by id) route
     */

    describe("GET/server/users/:id", ()=>{
        it("It should GET a single user by its id", (done)=>{
            const userId = request.user.userId
            chai.request(server)
                .get("/server/users/"+ userId)
                .end((err,response) => {
                    response.should.have.status(200);
                    response.should.have.property("name");
                  
                })
               done();
            }) 
            
            
        })

    /**
     * Test the POST route
     */
    describe("Post/server/users/", ()=>{
        it("It should UPDATE a single user by its id", (done)=>{
            chai.request(server)
                .put("/server/users/:id")
                .end((err,response) => {
                    response.should.have.status(200);
                    response.should.have.property("name");
                  
                })
               done();
            }) 
            
            
        })


    /**
     * Test the PUT route
     */

    /**
     * Test the DELETE route
     */



})