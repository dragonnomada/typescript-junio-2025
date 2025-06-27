import { faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useAppContext } from "../Context/AppContext";
import { useState } from "react";

export default function RandomUserSearch() {

    const appService = useAppContext()

    const [search, setSearch] = useState<string>("")

    return (
        <div>
            <div>
                <InputGroup>
                    <Button
                        variant="info"
                        onClick={() => {
                            alert(`
                                Escribe la búsqueda por:

                                * Nombre
                                * Género (male, female)
                                * Correo
                                * Nacionalidad (mx, uk, gm, etc)
                            `)
                        }}
                    >
                        <div>
                            <FontAwesomeIcon 
                                icon={faInfoCircle}
                            />
                        </div>
                    </Button>
                    <Form.Control 
                        placeholder="Buscar... (nombre, correo, etc)"
                        value={search}
                        onChange={event => {
                            setSearch(event.target.value)
                        }}
                        onKeyDown={event => {
                            if (event.key === "Enter") {
                                appService.searchUsers(search)
                            } else if (event.key === "Escape") {
                                setSearch("")
                                appService.searchUsers("")
                            }
                        }}
                    />
                    <Button
                        onClick={() => {
                            appService.searchUsers(search)
                        }}
                    >
                        <FontAwesomeIcon 
                            icon={faSearch}
                        />
                    </Button>
                </InputGroup>
            </div>
        </div>
    )

}