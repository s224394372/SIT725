import { expect } from 'chai';
import request from 'request';

let url = "http://localhost:8080/admin/submit";
let user = {
  "firstName": "mehul",
  "lastName": "cc",
  "email": "dd@123456.com",
  "phone": "1023456789",
  "address": "ss"
}

describe('test POST api', function(){
  it('post test to DB', function(done){
      request.post({url:url,form:user}, function (error, response, body) {
        console.log("--------------------------------------------> "+ JSON.parse(body).message);
        expect(response.statusCode).to.equal(201);
        // expect(body).to.equal("Data added successfully");
        done();
    });
  });
});


let user1 = {
  "firstName": "mehul",
  "lastName": "cc",
  "email": "dd@123456com",
  "phone": "1023456789",
  "address": "ss"
}

describe('test false case for email in POST api', function(){
  it('post test false case for email to DB', function(done){
      request.post({url:url,form:user1}, function (error, response, body) {
        console.log("--------------------------------------------> "+ JSON.parse(body).message);
        expect(response.statusCode).to.equal(500);
        done();
    });
  });
});


let user2 = {
  "firstName": "mehul",
  "lastName": "cc",
  "email": "dd@123456.com",
  "phone": "5522",
  "address": "ss"
}

describe('test false case for phoneNumber in POST api', function(){
  it('post test false case for phoneNumber to DB', function(done){
      request.post({url:url,form:user2}, function (error, response, body) {
        console.log("--------------------------------------------> "+ JSON.parse(body).message);
        expect(response.statusCode).to.equal(500);
        done();
    });
  });
});


let user3 = ''; 

describe('test empty obj in POST api', function(){
  it('test empty obj to DB', function(done){
      request.post({url:url,form:user3}, function (error, response, body) {
        console.log("--------------------------------------------> "+ JSON.parse(body).message);
        expect(response.statusCode).to.equal(500);
        done();
    });
  });
});

let user4 = null; 

describe('test null obj in POST api', function(){
  it('test null obj to DB', function(done){
      request.post({url:url,form:user4}, function (error, response, body) {
        console.log("--------------------------------------------> "+ JSON.parse(body).message);
        expect(response.statusCode).to.equal(500);
        done();
    });
  });
});