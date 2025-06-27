# 🔐 Patrón Proxy en TypeScript

El patrón Proxy controla el objeto de una clase y decide cuando construirlo o consumirlo.

## 🛡️ Recomendación

✅ Ideal para asegurar que el objeto no se cree si no se usa o libere sus recursos al dejar de ser usado.

❌ Evita usarlo para controlar más de un objeto.

## Ejemplo

```tsx
export class RandomUserService {

    ...

    public initialize() { ... }

}

export class RandomUserServerProxy extends RandomUserService {

    private service?: RandomUserService

    public getUsers() {

        if (!this.service) {
            this.service = new RandomUserService()
            this.service.initialize()
        }

        return this.service.getUsers()

    }

}
```

## Ejercicio

Diseña una interfaz llamada `RandomUserService` que requiera ser inicializado, por ejemplo, para fijar la semilla que será usada almacenada en localStorage.

Diseña una clase llamada `RandomUserServerProxy` que mande a instanciar e inicializar el servicio hasta que se consume.

**Avanzado**: Crea un componente que consuma a los usuarios y muestra en consola cuándo este es inicializado.