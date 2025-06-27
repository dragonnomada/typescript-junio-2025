# 🔌 Patrón Adaptador en TypeScript

El patrón Adaptador adapta una clase original para apegarse a una nueva clase adaptada.

## 🛡️ Recomendación

✅ Ideal para migración de servicios que funcionan de una nueva forma o definición.

❌ Evita usarlos para cominar servicios (este es el patrón fachada).

## Ejemplo

```tsx
export class OldService {

    ...

    public runTask() { ... }

}

export class ServicesAdapted implements ApiService {

    private oldService: OldService

    ...

    public execute() {

        this.oldService.runTask()
            .then((data: any) => {
                this.success = true
                this.data = data
            })
            .catch((error: Error) => {
                this.error = true
                this.errorMessage = error.message
            })

    }

}
```

## Ejercicio

Diseña una clase llamada `RandomUser` que contenga un método para consultar los usuarios, por ejemplo `fetchUsers()`.

Crea una clase adaptada llamada `Service<RandomUser>` que adapte la clase `RandomUser` con un método llamado `start()` que mande a llamar a `fetchUsers()` de la clase original y retenga los resultados y si hubo error o éxito.

**Avanzado**: Prueba ambos servicios en diferentes componentes y observa cómo se reduce la lógica entre ambos.

