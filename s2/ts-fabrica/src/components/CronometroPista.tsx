import { useEffect, useState } from "react"

import { Button, Stack } from "react-bootstrap"

import { FabricaRelojMarcador } from "../models/FabricaRelojMarcador"

import type { Reloj } from "../models/Reloj"
import type { Marcador } from "../models/Marcador"

const [relojInicial, marcadorInicial] = FabricaRelojMarcador.crearCronometroPista()

export default function CronometroPista() {

    const [reloj, setReloj] = useState<Reloj>(relojInicial)
    const [marcador, setMarcador] = useState<Marcador>(marcadorInicial)

    useEffect(() => {
        const id = setInterval(() => {
            if (reloj.tac) {
                reloj.tac()
                setReloj(reloj.copy())
            }
        }, 17)

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
                    <Stack
                        className="gap-3"
                    >
                        <Button
                            variant="outline-danger"
                            onClick={() => {
                                if (marcador.reiniciarMarcas) {
                                    marcador.reiniciarMarcas()
                                    setMarcador(marcador.copy())
                                }
                            }}
                        >
                            Reiniciar
                        </Button>
                        <Button
                            variant="warning"
                            onClick={() => {
                                marcador.registrarMarca(reloj.getTiempo())
                                setMarcador(marcador.copy())
                            }}
                        >
                            Vuelta
                        </Button>
                    </Stack>
                </Stack>
                <Stack
                    className="bg-light text-body p-3 align-items-center"
                >
                    <span>{reloj.leftLabel} : {reloj.rightLabel} ({reloj.detailLabel})</span>
                </Stack>
            </Stack>
        </Stack>
    )

}