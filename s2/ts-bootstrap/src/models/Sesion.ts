import { getUsersApi } from "./api/getUsersApi";
import type { Usuario } from "./Usuario";

// Patrón 1 - Singleton | Proveer una única intancia compartida

export class Sesion {

    // Cualquier componente podrá acceder a esta única sesión
    public static shared: Sesion = new Sesion()

    protected usuario?: Usuario

    public static async iniciarSesion(usuario: Usuario) {
        // Paso 1: Validar los datos
        if (!usuario.getCorreo().includes("@")) throw Error(`El correo ${usuario.getCorreo() || "(vacío)"} no cumple el formato adecuado`)
        if (usuario.getFrase().length <= 2) throw Error(`La contraseña no es válida`)

        // Paso 2: Consumir un API / Base de Datos / Sistema
        console.log("Iniciado sesión...", this)

        const users = await getUsersApi()

        console.log({ users })

        for (const user of users) {
            if (user.email === usuario.getCorreo()) {
                console.log(user.email)
                if (user.login.password === usuario.getFrase()) {
                    
                    usuario.setImagen(user.picture.large)
                    usuario.setNombreCompleto(`${user.name.first} ${user.name.last}`)

                    // TODO: Notificar que la sesión cambió
                    Sesion.shared = new Sesion()
                    Sesion.shared.usuario = usuario.copy()

                    return
                } else throw new Error(`Contraseña es incorrecta`)
            }
        }

        throw new Error(`El usuario no existe`)
    }

    public static cerrarSesion() {

        Sesion.shared = new Sesion()

    }

    public getUsuario(): Usuario {
        if (!this.usuario) throw Error("No se ha iniciado sesión")

        return this.usuario
    }

    public hayUsuario(): boolean {
        return this.usuario !== undefined
    }

}