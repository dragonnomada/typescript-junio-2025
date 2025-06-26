import { useEffect, useState } from "react"

import { Button, Stack } from "react-bootstrap"

import { FabricaRelojMarcador } from "../models/FabricaRelojMarcador"

import type { Reloj } from "../models/Reloj"
import type { Marcador } from "../models/Marcador"

const [relojInicial, marcadorInicial] = FabricaRelojMarcador.crearRelojTabla()

export default function RelojTabla() {

    const [reloj, setReloj] = useState<Reloj>(relojInicial)
    const [marcador, setMarcador] = useState<Marcador>(marcadorInicial)

    useEffect(() => {
        const id = setInterval(() => {
            reloj.tic()
            setReloj(reloj.copy())
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <Stack
            className="p-3"
        >
            <Stack
                className="border border-primary"
            >
                <Stack
                    className="bg-dark text-white p-3 align-items-center"
                >
                    <span>{reloj.leftLabel} : {reloj.rightLabel}</span>
                </Stack>
                <Stack
                    className="p-2"
                >
                    {
                        marcador.historialMarcas.map((marca, index) => {

                            return (
                                <Stack
                                    key={index}
                                >
                                    <span>{marca}</span>
                                </Stack>
                            )

                        })
                    }
                    <Button
                        onClick={() => {
                            marcador.registrarMarca(reloj.getTiempo())
                            setMarcador(marcador.copy())
                        }}
                    >
                        Registrar marca
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )

}