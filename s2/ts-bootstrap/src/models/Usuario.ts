// Filosofía 0 - Ir de lo funcional a lo sofisticado

import { getUsersApi } from "./api/getUsersApi"

// Filosofía 1 - La mayoría de los atributos deberían ser opcionales
// Filosofía 2 - Todos los atributos deberían ser privados o protegidos

// Patrón 1 - Singleton | Proveer una única intancia compartida
// Patrón 2 - Prototipo | Proveer un método de clonación / copia
// Patrón 3 - Constructor | Proveer un método para contruir una nueva instancia

export class Usuario {

    // Atributos
    protected correo: string
    protected frase: string
    protected nombreCompleto?: string = "(vacío)"
    protected imagen?: string = "https://placehold.co/200"

    // Constructor
    protected constructor(correo: string, frase: string) {
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

    public setCorreo(correo: string) {
        this.correo = correo
    }
    
    public setFrase(frase: string) {
        this.frase = frase
    }

    public async iniciarSesion() {
        if (!this.correo.includes("@")) throw Error(`El correo ${this.correo || "(vacío)"} no cumple el formato adecuado`)

        console.log("Iniciado sesión...", this)

        const users = await getUsersApi()

        console.log({ users })

        for (const user of users) {
            if (user.email === this.correo) {
                console.log(user.email)
                if (user.login.password === this.frase) {
                    alert("Bienvenido")
                    return // TODO BIEN
                }
            }
        }

        alert("No se pudo iniciar sesión")

        return // TODO MAL

        // TODO: Verificar si el correo y contraseña corresponden a 
        // un usuario real de https://randomuser.me
    }

    // Patrón Prototipo
    public copy(): Usuario {
        const usuarioCopia: Usuario = new Usuario(this.correo, this.frase)

        usuarioCopia.imagen = this.imagen
        usuarioCopia.nombreCompleto = this.nombreCompleto
        
        return usuarioCopia
    }

}

// Nota: Los constructores siempre se devuelven a sí mismos para
// continuar con la construicción en forma de cadena (contrucción encadenada)

export class UsuarioBuilder extends Usuario {

    public static create(): UsuarioBuilder {
        return new UsuarioBuilder("", "")
    }
    
    public static createAnonimo(): UsuarioBuilder {
        return new UsuarioBuilder("anonimo@example.com", "123")
    }

    private constructor(correo: string, frase: string) {
        super(correo, frase)

        return this // nos develvemos para continuar la construcción
    }

    public ajustarCorreo(correo: string): UsuarioBuilder {
        this.correo = correo
        return this // continuamos con el encademiento de la instancia
    }
    
    public ajustarFrase(frase: string): UsuarioBuilder {
        this.frase = frase
        return this // continuamos con el encademiento de la instancia
    }
    
    public ajustarNombreCompleto(nombreCompleto: string): UsuarioBuilder {
        this.nombreCompleto = nombreCompleto
        return this // continuamos con el encademiento de la instancia
    }
    
    public ajustarImagen(imagen: string): UsuarioBuilder {
        this.imagen = imagen
        return this // continuamos con el encademiento de la instancia
    }

}