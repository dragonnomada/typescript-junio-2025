// Filosofía 0 - Ir de lo funcional a lo sofisticado

// Filosofía 1 - La mayoría de los atributos deberían ser opcionales
// Filosofía 2 - Todos los atributos deberían ser privados o protegidos

export class Usuario {

    // Atributos
    private correo: string
    private frase: string
    private nombreCompleto?: string = "(vacío)"
    private imagen?: string = "https://placehold.co/200"

    // Constructor
    constructor(correo: string, frase: string) {
        this.correo = correo
        this.frase = frase
    }

    // Métodos (Acceso / Transaccional)
    public getCorreo(): string { // () => string
        return this.correo
    }

    public getFrase(): string { // () => string
        return this.frase
    }

    public getNombreCompleto(): string | undefined { // () => string | undefined
        return this.nombreCompleto
    }

    public getImagen(): string | undefined { // () => string | undefined
        return this.imagen
    }

}