// const { expect } = require("chai");
// let chai = require("chai")
// let chaiHttp = require("chai-http")
let app = require("../apptest");
const User = require('../models/user')
const request = require("supertest");
const mongoose = require("mongoose")
const {connectTestDb} = require("../testDb");
const { response } = require("../apptest");
const { deleteOne } = require("../models/user");
let token;
    // SIGNUP TEST
    describe("When using the auth functions",(req, res)=>{
        test("it should create signup for user", async ()=>{
           const res = await request(app)
            .post('/user/signup')
            .send(
              {name:"micheal",
               username:"mike",
               password:"123456789"
            }
          )
             expect(200)
             expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        }) 
    });

// LOGIN TEST
    test('Should login user and return auth token', async () => {
      const res = await request(app)
          .post('/user/signin')
          .send({
            username:"mike",
            password:"123456789"
          })
          token = res.body.token 
          // .end((err,response)=>{
          //   token = response.body.token;
          //   done();
          // });
          expect(200)
          expect(res.body).toHaveProperty('token');
      });   


