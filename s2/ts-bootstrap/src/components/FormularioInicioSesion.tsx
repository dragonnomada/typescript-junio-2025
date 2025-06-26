import { Button, Col, Container, Form, Image, Row, Stack } from "react-bootstrap"

import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { UsuarioBuilder, type Usuario } from "../models/Usuario"
import { Sesion } from "../models/Sesion"

export type FormularioInicioSesionProps = {
    
    onSesion: (sesion: Sesion) => void

}

export default function FormularioInicioSesion({
    onSesion
}: FormularioInicioSesionProps) {

    const [usuario, setUsuario] = useState<Usuario>(
        UsuarioBuilder.create()
        // .ajustarImagen("https://placehold.co/800")
    )

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
                        <Stack
                            className="d-flex flex-column align-items-center"
                        >
                            <Image
                                className="w-25 object-fit-cover"
                                src={usuario.getImagen()}
                                fluid
                                roundedCircle
                            />
                        </Stack>
                        <Form.Group>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ej. alicia@gmail.com"
                                value={usuario.getCorreo()}
                                onChange={(event) => {
                                    usuario.setCorreo(event.target.value)
                                    // Los estados solo cambian para nuevas instancias
                                    setUsuario(usuario.copy())
                                }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ej. •••••"
                                value={usuario.getFrase()}
                                onChange={(event) => {
                                    usuario.setFrase(event.target.value)
                                    // Los estados solo cambian para nuevas instancias
                                    setUsuario(usuario.copy())
                                }}
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            onClick={() => {
                                Sesion.iniciarSesion(usuario)
                                    .then(() => {
                                        onSesion(Sesion.shared)
                                    })
                                    .catch((error: Error) => {
                                        alert(error.message)
                                    })

                                // usuario.iniciarSesion().catch(error => {
                                //     alert(`${error}`)
                                // })
                            }}
                        >
                            Iniciar Sesión <FontAwesomeIcon icon={faLock} />
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}