import { Col, Container, Row } from "react-bootstrap"

export default function FormularioInicioSesion() {

    return (
        <Container>
            <Row>
                <Col xs={12} sm={8} md={6} className="bg-primary">A</Col>
                <Col xs={6} sm={4} md={3} className="bg-success">B</Col>
                <Col xs={6} sm={12} md={3} className="bg-danger">C</Col>
            </Row>
        </Container>
    )

}