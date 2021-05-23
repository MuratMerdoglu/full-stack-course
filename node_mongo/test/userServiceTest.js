const mongoose = require('mongoose');
const User = require('../src/models/Users');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const assert = require('assert');
const should = chai.should();

chai.use(chaiHttp);



describe('basit testimiz', () => {
    it('esitlik testi', (done) => {
        assert.equal(true, true);
        done();
    });
});

describe('USERS Service', () => {
    beforeEach((done) => {
        User.deleteMany({}, (err) => {
            done();
        });
    });

    describe('/GET Users', () => {
        it('should get all users', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        });
    });

    describe('/POST User', () => {
        it('should return user data with its _id', (done) => {
            const user = {
                username: "selim",
                email: "selim@gmail.com",
                password: "12345"
            };

            chai.request(server)
                .post('/users/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('username');
                    res.body.should.have.property('email');
                    res.body.should.have.property('createdDate');
                    done();
                })
        });

        it('should not save the user data', (done) => {
            const user = {
                Username: "selim",
                email: "selim@gmail.com",
                password: "12345"
            };

            chai.request(server)
                .post('/users/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.should.have.property('message', 'User could not created.');
                    done();
                })
        });
    });

    describe('/DELETE User', () => {
        it('should delete user', (done) => {
            const user = {
                username: "selim",
                email: "selim@gmail.com",
                password: "12345"
            };

            chai.request(server)
                .post('/users/register')
                .send(user)
                .end((err, res) => {
                    const { _id } = res.body;

                    chai.request(server)
                        .delete('/users/' + _id)
                        .send(user)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('n', 1);
                            res.body.should.have.property('ok', 1);
                            res.body.should.have.property('deletedCount', 1);
                            done();
                        })
                });
        });
    });

    describe('/LOGIN User', () => {
        it('should login user', (done) => {
            const user = {
                username: "selim",
                email: "selim@gmail.com",
                password: "12345"
            };

            chai.request(server)
                .post('/users/register')
                .send(user)
                .end((err, res) => { });


            chai.request(server)
                .post('/users/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                    res.body.should.have.property("user");
                    done();
                })
        });

        it('login service should return error (password is incorrect) ', (done) => {
            const user = {
                username: "selim",
                email: "selim@gmail.com",
                password: "12345"
            };

            chai.request(server)
                .post('/users/register')
                .send(user)
                .end((err, res) => { });

            const fakeUser = {
                username: "selim",
                password: "123456"
            };


            chai.request(server)
                .post('/users/login')
                .send(fakeUser)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.body.should.be.a('object');
                    res.body.should.have.property("message", 'The password is incorrect');
                    done();
                })
        });

        it('login service should return error (user is not found) ', (done) => {
            const user = {
                username: "selim",
                email: "selim@gmail.com",
                password: "12345"
            };

            chai.request(server)
                .post('/users/register')
                .send(user)
                .end((err, res) => { });

            const fakeUser = {
                username: "selim_2000",
                password: "12345"
            };


            chai.request(server)
                .post('/users/login')
                .send(fakeUser)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property("message", 'User can\'t found');
                    done();
                })
        });
    });

});

