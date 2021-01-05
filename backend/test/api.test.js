let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing My Rest Api',() => {
    it('Should return status as 200  fro health check',(done) =>{
        chai.request('http://localhost:7800')
        .get('/health')
        .then((res) => {
            expect(res).to.have.status(200)
            done()
        })
        .catch((err) => {
            throw err;
        })
    })

    it('Should return status as 200  for location check',(done) =>{
        chai.request('http://localhost:7800')
        .get('/location')
        .then((res) => {
            expect(res).to.have.status(200)
            done()
        })
        .catch((err) => {
            throw err;
        })
    })
})