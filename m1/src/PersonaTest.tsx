import { useState } from "react";
import { Persona } from "./Persona";

export default function PersonaTest() {

    const [persona, setPersona] = useState<Persona>(new Persona("Ana Ming", "women", 1))

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
            }}
        >

            <img
                src={persona.getImagen()}
                style={{
                    borderRadius: "50%"
                }}
            />

            <span>Nombre: {persona.getNombre()}</span>
            <span>Género: {persona.getGenero()}</span>

            <button
                onClick={() => {

                    const personaCopia = persona.clone()

                    personaCopia.setImagenId(Math.floor(Math.random() * 100))

                    setPersona(personaCopia)

                }}
            >
                Cambiar imagen
            </button>
            
            <button
                onClick={() => {

                    const personaCopia = persona.clone()

                    if (personaCopia.getGenero() == "women") {
                        personaCopia.setGenero("men")
                    } else {
                        personaCopia.setGenero("women")
                    }


                    setPersona(personaCopia)

                }}
            >
                Cambiar género
            </button>

        </div>
    )

}