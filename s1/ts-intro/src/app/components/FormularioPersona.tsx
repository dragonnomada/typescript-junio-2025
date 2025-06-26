import { ChangeEvent, ChangeEventHandler, useState } from "react"

export type Genero = "Hombre" | "Mujer" | "Desconocido"

export class Persona {

    private nombre: string
    private edad: number
    private genero: Genero

    public constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
        this.genero = "Desconocido"
    }

    public getNombre(): string {
        return this.nombre
    }

    public setNombre(nombre: string) {
        this.nombre = nombre
    }

    public getEdad(): number {
        return this.edad
    }

    public setEdad(edad: number) {
        if (edad >= 0) {
            this.edad = edad
        }
    }

    public getGenero(): Genero {
        return this.genero
    }

    public setHombre() {
        this.genero = "Hombre"
    }

    public setMujer() {
        this.genero = "Mujer"
    }

    public setDesconocido() {
        this.genero = "Desconocido"
    }

    public copia(): Persona {
        const nuevaPersona = new Persona(this.nombre, this.edad)
        nuevaPersona.genero = this.genero
        return nuevaPersona
    }

}

export default function FormularioPersona() {

    const [persona, setPersona] = useState<Persona>(
        new Persona("Anónimo", 18)
    )

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={persona.getNombre()}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        persona.setNombre(event.target.value)
                        setPersona(persona.copia())
                    }}
                />
                <input
                    type="number"
                    value={persona.getEdad()}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        persona.setEdad(Number(event.target.value))
                        setPersona(persona.copia())
                    }}
                />
                <select
                    value={persona.getGenero()}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        switch (event.target.value) {
                            case "Hombre":
                                persona.setHombre()
                                break;
                            case "Mujer":
                                persona.setMujer()
                                break;
                            default:
                                persona.setDesconocido()
                                break;
                        }
                        setPersona(persona.copia())
                    }}
                >
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Desconocido">Desconocido</option>
                </select>
            </div>
            <div>
                <div>
                    <span>Nombre: {persona.getNombre()}</span>
                </div>
                <div>
                    <span>Edad: {persona.getEdad()}</span>
                </div>
                <div>
                    <span>Género: {persona.getGenero()}</span>
                </div>
            </div>
        </div>
    )

}