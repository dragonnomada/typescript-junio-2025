# 🧩 Patrón Singleton en TypeScript

El patrón Singleton comparte una instancia global y proporciona un punto de acceso a ella.

## 🛡️ Recomendación

✅ Ideal para servicios que no dependen del estado reactivo o del ciclo de renderizado.

❌ Evita usarlos para manejar estado compartido mutable entre componentes, en ese caso usa:
* Context API
* zustand, jotai o Redux
* o incluso useContext + useReducer

## Ejemplo

```tsx
export class LocalStore {

    // private static instance: LocalStore
    private static readonly instance: LocalStore = new LocalStore("localStore/global")

    private namespace: string
    private data: Record<string, any>

    private constructor(namespace: string) {

        this.namespace = namespace

        this.data = {}

        this.reloadData()        

    }

    public static getInstance(): LocalStore {
        
        return this.instance

    }

    public getData(): Record<string, any> {

        return this.data

    }

    public updateData(partial: Record<string, any>) {

        for (const key in partial) {
            this.data[key] = partial[key]
        }

        this.saveData()

    }

    public saveData() {

        localStorage.setItem(this.namespace, JSON.stringify(this.data))

    }
    
    public reloadData() {

        this.data = JSON.parse(localStorage.getItem(this.namespace) || "{}")

    }

}
```

## Ejercicio

Diseña una clase llamada `Sesion` que implemente el patrón Singleto y retenga los datos opcionales de un usuario (diseña también la clase `Usuario`).

Agrega los métodos convenientes para iniciar sesión y cerrar sesión.

**Avanzado**: Usa el API de *http://randomuser.me* para hacer un inicio de sesión real usando `fetch`.

