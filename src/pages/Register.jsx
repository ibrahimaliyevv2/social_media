import React, { Component } from 'react'
import Header from '../components/Header';
import { Container, Row, Col } from 'reactstrap';
import "./Login.css";

class Register extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className='wrapper'>
                            <form>
                                <h3>New account</h3>
                                <div className="mb-3">
                                    <label className='login-form' >Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='login-form' >Surname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='login-form' >Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='login-form' >Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='login-form'>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='login-form'>Again Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="remember-me-checkbox"
                                        />
                                        <label className="remember-me" htmlFor="customCheck1">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="lost-password">
                                        <a href="/login" className="lost-password-link">Already registered? Login</a>
                                    </div>
                                </div>
                                
                                <div className="d-grid">
                                    <button type="submit" className="login-btn">
                                        Register
                                    </button>
                                </div>
                              
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;