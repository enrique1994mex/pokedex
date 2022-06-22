import React from 'react';
import { useState } from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';

const Login = () => {

    //Componentes controlados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = ({ target }) => {
        setEmail(target.value);
    }

    const handlePassword = ({ target }) => {
        setPassword(target.value);
    }

    //Simular el inicio de sesión con localStorage
    const handleSubmit = async (e) => {
        const user = { email, password };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "/"
        e.preventDefault();
    }
    return (
        <Container>
            <Row className="vh-100 justify-content-center align-items-center">
                <Col md={4}>
                    <Form onSubmit={handleSubmit} className="bg-transparent">

                        <h1 className='mb-5 text-center text-secondary'>Pokedex</h1>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control type="email" className='form-control' value={email}
                                onChange={handleEmail} required placeholder='Correo Electrónico' />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control type="password" className='form-control' minLength="8" value={password}
                                onChange={handlePassword} required placeholder='Contraseña' />
                        </Form.Group>

                        <Button type="submit" variant="secondary" className="d-block mx-auto">Iniciar Sesión</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;  