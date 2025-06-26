export interface Marcador {

    historialMarcas: string[]

    reiniciarMarcas?: () => void

    registrarMarca: (tiempo: number) => void

    copy: () => Marcador

}

export class MarcadorTiempos implements Marcador {

    historialMarcas: string[] = []

    registrarMarca(tiempo: number) {

        const horas: number = Math.floor(tiempo / 60)
        const minutos: number = tiempo % 60

        const marca: string = `00${horas}`.slice(-2) + ":" + `00${minutos}`.slice(-2)

        this.historialMarcas.push(marca)

    }

    copy() {
        const marcadorCopia = new MarcadorTiempos()
        marcadorCopia.historialMarcas = this.historialMarcas
        return marcadorCopia
    }

}

export class MarcadorPistas implements Marcador {

    historialMarcas: string[] = []

    private ultimoTiempo: number = 0

    registrarMarca(tiempo: number) {

        console.log({ tiempo })

        const transcurrido: number = tiempo - this.ultimoTiempo

        this.ultimoTiempo = tiempo

        const minutos: number = Math.floor(transcurrido / 1000 / 60)
        const segundos: number = Math.floor(transcurrido / 1000) % 60
        const milisegundos: number = transcurrido % 1000

        console.log({ minutos, segundos, milisegundos })

        const marca: string = `00${minutos}`.slice(-2) + "min " + `00${segundos}`.slice(-2) + "seg " + `000${milisegundos}`.slice(-3) + "ms"

        this.historialMarcas.push(marca)

    }

    copy() {
        const marcadorCopia = new MarcadorPistas()
        marcadorCopia.historialMarcas = this.historialMarcas
        marcadorCopia.ultimoTiempo = this.ultimoTiempo
        return marcadorCopia
    }

}