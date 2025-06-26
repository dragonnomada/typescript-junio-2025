import { faCocktail, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Alert, Button, Stack } from "react-bootstrap";

export default function App() {

    const [showAlert, setShowAlert] = useState<boolean>(false)
        
    return (
        <Stack className="p-2">
            <Alert
                show={showAlert}
                variant="primary"
                dismissible
                onClose={() => {
                    setShowAlert(false)
                }}
            >
                <Alert.Heading>Bienvenido</Alert.Heading>
                <hr />
                <p>Hi there!</p>
                <p>
                    <FontAwesomeIcon 
                        icon={faCocktail}
                    />
                </p>
            </Alert>
            <Button
                disabled={showAlert}
                onClick={() => {
                    setShowAlert(true)
                }}
            >
                <Stack
                    direction="horizontal"
                    className="justify-content-between px-1"
                    gap={3}
                >
                    Hello world
                    <FontAwesomeIcon
                        icon={faGlobe}
                        size="lg"
                    />
                </Stack>
            </Button>
        </Stack>
    )

}