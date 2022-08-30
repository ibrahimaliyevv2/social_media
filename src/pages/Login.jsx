import React, { Component } from 'react'
import Header from '../components/Header';
import { Container, Row, Col } from 'reactstrap';
import "./Login.css";

class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className='wrapper'>
                            <form>
                                <h3>Login</h3>
                                <div className="mb-3">
                                    <label className='login-form' >Username or email</label>
                                    <input
                                        type="text"
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
                                        <a href="/forgot" className="lost-password-link">Forgot password</a>
                                        <a href="/register" className="lost-password-link ms-2">New? Register</a>
                                    </div>
                                </div>
                                
                                <div className="d-grid">
                                    <button type="submit" className="login-btn">
                                        Login
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

export default Login;