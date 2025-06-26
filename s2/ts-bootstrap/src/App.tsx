import { useState } from "react"
import FormularioInicioSesion from "./components/FormularioInicioSesion"
import { Sesion } from "./models/Sesion"
import { Button, Image, Stack } from "react-bootstrap"

// alt + shift + f -> Autoformato
export default function App() {

    const [sesion, setSesion] = useState<Sesion>(Sesion.shared)

    if (!sesion.hayUsuario()) {
        return (
            <FormularioInicioSesion
                onSesion={(nuevaSesion: Sesion) => {
                    setSesion(nuevaSesion)
                }}
            />
        )
    }

    return (
        <Stack
            className="p-3"
        >
            <Stack
                className="gap-3 p-3"
                direction="horizontal"
            >
                <Image
                    src={sesion.getUsuario().getImagen()}
                    roundedCircle
                />
                <Stack
                    className="justify-content-center"
                >
                    <span>{sesion.getUsuario().getNombreCompleto()}</span>
                    <span>{sesion.getUsuario().getCorreo()}</span>
                </Stack>
            </Stack>
            <Button 
                onClick={() => {
                    Sesion.cerrarSesion()
                    setSesion(Sesion.shared)
                }}
            >
                Cerrar Sesión
            </Button>
        </Stack>
    )

}