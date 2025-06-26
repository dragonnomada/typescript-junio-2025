export interface Reloj {

    leftValue: number
    leftLabel: string

    rightValue: number
    rightLabel: string

    detailValue?: number
    detailLabel?: string

    tacLimit?: number
    ticLimit: number
    tocLimit: number

    tac?: () => void
    tic: () => void
    toc: () => void

    getTiempo: () => number

    copy(): Reloj

}

export class RelojHoraMinuto implements Reloj {

    leftValue: number = 0
    leftLabel: string = "00"

    rightValue: number = 0
    rightLabel: string = "00"

    ticLimit: number = 60
    tocLimit: number = 60

    tic() {
        this.rightValue += 1
        if (this.rightValue >= this.ticLimit) {
            this.toc()
            this.rightValue = 0
        }
        this.rightLabel = `00${this.rightValue}`.slice(-2)
    }

    toc() {
        this.leftValue += 1
        if (this.leftValue >= this.tocLimit) {
            this.leftValue = 0
        }
        this.leftLabel = `00${this.leftValue}`.slice(-2)
    }

    // Tiempo en minutos
    getTiempo(): number {
        return this.leftValue * 60 + this.rightValue
    }

    copy(): Reloj {
        const relojCopia = new RelojHoraMinuto()
        relojCopia.leftLabel = this.leftLabel
        relojCopia.leftValue = this.leftValue
        relojCopia.rightLabel = this.rightLabel
        relojCopia.rightValue = this.rightValue
        relojCopia.ticLimit = this.ticLimit
        relojCopia.tocLimit = this.tocLimit
        return relojCopia
    }

}


export class RelojCronometro implements Reloj {

    leftValue: number = 0
    leftLabel: string = "00"

    rightValue: number = 0
    rightLabel: string = "00"

    detailValue?: number = 0
    detailLabel?: string = "000"

    tacLimit?: number = 1000
    ticLimit: number = 60
    tocLimit: number = 100

    tac() {
        if (this.detailValue === undefined) this.detailValue = 0

        this.detailValue += 17
        if (this.detailValue >= (this.tacLimit || 0)) {
            this.tic()
            this.detailValue = 0
        }
        this.detailLabel = `000${this.detailValue}`.slice(-3)
    }

    tic() {
        this.rightValue += 1
        if (this.rightValue >= this.ticLimit) {
            this.toc()
            this.rightValue = 0
        }
        this.rightLabel = `00${this.rightValue}`.slice(-2)
    }

    toc() {
        this.leftValue += 1
        if (this.leftValue >= this.tocLimit) {
            this.leftValue = 0
        }
        this.leftLabel = `00${this.leftValue}`.slice(-2)
    }

    // Tiempo en milisegundos
    getTiempo(): number {
        return this.leftValue * 60 * 1000 + this.rightValue * 1000 + (this.detailValue || 0)
    }

    copy(): Reloj {
        const relojCopia = new RelojCronometro()
        relojCopia.detailValue = this.detailValue
        relojCopia.detailLabel = this.detailLabel
        relojCopia.leftLabel = this.leftLabel
        relojCopia.leftValue = this.leftValue
        relojCopia.rightLabel = this.rightLabel
        relojCopia.rightValue = this.rightValue
        relojCopia.tacLimit = this.tacLimit
        relojCopia.ticLimit = this.ticLimit
        relojCopia.tocLimit = this.tocLimit
        return relojCopia
    }

}