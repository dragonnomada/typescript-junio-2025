# 🧬 Patrón Prototipo en TypeScript

El patrón Prototipo tiene el objetivo de devolver una copia o clon de un objeto instanciado.

Su principal uso es poder modificar el objeto copiado de forma segura sin alterar el original.

## 🛡️ Recomendación

✅ Ideal para objetos complejos a los que se les quiera crear una copia profunda aislada de la otra.

❌ Evita usarlos para crear nuevos objetos diferentes.

## Ejemplo

```tsx
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
```

## Ejercicio

Implementa en la clase `Sesion` y `Usuario` la interfaz `Conable` para permitir copiar los datos de un usuario y de una sesión.

Piensa en un caso de uso donde copiar la sesión y modificarla sea necesario.

**Avanzado**: Diseña un componente que reciba la sesión, cree una copia, presente un formulario para iniciar sesión y devuelva otra copia de la sesión ya iniciada como resultado del componente. Agrega un ID aleatorio a la sesión para ir trazando los cambios.