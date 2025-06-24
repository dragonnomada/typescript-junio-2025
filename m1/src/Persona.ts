export interface Clonable<T> {

    clone(): T

}

export type Genero = "women" | "men"

export class Persona implements Clonable<Persona> {

    private nombre: string
    private genero: Genero
    private imagenId: number
    private imagen: string

    public constructor(nombre: string, genero: Genero, imagenId: number) {

        this.nombre = nombre
        this.genero = genero
        this.imagenId = imagenId
        this.imagen = `https://randomuser.me/api/portraits/${genero}/${imagenId}.jpg`

    }

    public getNombre(): string {
        return this.nombre
    }
    
    public getGenero(): Genero {
        return this.genero
    }
    
    public getImagenId(): number {
        return this.imagenId
    }
    
    public getImagen(): string {
        return this.imagen
    }

    public setImagenId(imagenId: number) {
        this.imagenId = imagenId
        this.imagen = `https://randomuser.me/api/portraits/${this.genero}/${this.imagenId}.jpg`
    }

    public setGenero(genero: Genero) {
        this.genero = genero
        this.imagen = `https://randomuser.me/api/portraits/${this.genero}/${this.imagenId}.jpg`
    }

    public clone(): Persona {

        return new Persona(this.nombre, this.genero, this.imagenId)

    }

}