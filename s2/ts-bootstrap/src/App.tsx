import { faMouse, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Stack } from "react-bootstrap"

// alt + shift + f -> Autoformato
export default function App() {

    return (
        <Stack
            direction="horizontal"
            className="justify-content-between p-2 bg-secondary"
            gap={2}
        >
            <h1>
                Hola <FontAwesomeIcon icon={faSmile} />
            </h1>
            <h2>mundo</h2>
            <Button
                className="d-flex align-items-center gap-2"
            >
                Pulsame <FontAwesomeIcon icon={faMouse} />
            </Button>
        </Stack>
    )

}