import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import "./Login.css";

class Forgot extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className='wrapper'>
                            <form>
                                <h3>Forgot password?</h3>
                                <div className="mb-3">
                                    <label className='login-form' >Username or email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="login-btn">
                                        Search for account
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

export default Forgot;