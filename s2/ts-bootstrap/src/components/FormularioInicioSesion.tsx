import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"

export default function FormularioInicioSesion() {

    return (
        <Container
            className="w-100 h-100 p-0"
            fluid
        >
            <Row
                className="w-100 h-100 bg-light"
            >
                <Col
                    className="p-0"
                    xs={12}
                    md={6}
                >
                    <Image
                        className="w-100 h-100 object-fit-cover"
                        src="https://wallpapers.com/images/hd/business-city-view-tt8vcogkrf94giby.jpg"
                        fluid
                    />
                </Col>
                <Col
                    xs={12}
                    md={6}
                >
                    <Form
                        className="d-flex flex-column gap-3 p-3"
                        onSubmit={(event) => {
                            event.preventDefault()
                        }}
                    >
                        <h1>Bienvenido</h1>
                        <h2>Iniciar Sesión</h2>
                        <Form.Group>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ej. alicia@gmail.com"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ej. •••••"
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                        >
                            Iniciar Sesión <FontAwesomeIcon icon={faLock} />
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}