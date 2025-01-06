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
        expect(response.statusCode).to.equal(201);
        // expect(body).to.equal("Data added successfully");
        done();
    });
  });
});

