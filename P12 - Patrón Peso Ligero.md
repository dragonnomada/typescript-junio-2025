# 🪶 Patrón Peso Ligero en TypeScript

El patrón Peso Ligero mantiene en memoria configuraciones complejas reutilizables para no crear muchas instancias de esas configuraciones.

## 🛡️ Recomendación

✅ Ideal para reutilizar un objeto de configuraciones comunes que será consumido muchas veces.

❌ Evita usarlo para objetos que poseen muchas configuraciones distintas.

## Ejemplo

```tsx
export class RandomUserInfoType {

    ...

}

export class RandomUserInfo {

    public constructor(user: RandomUser, infoType: RandomUserInfoType) { ... }

}

export class RandomUserReport {

    private infoTypes: Record<string, RandomUserInfoType>
    private users: RandomUserInfo[]

    ...

    public addUserInfo(user: RandomUser, infoType: string) {

        const userInfo = new RandomUserInfo(user, this.infoTypes[infoType])

        this.users.push(userInfo)
        
    }

    public getReport(): RowData[] { ... }

}
```

## Ejercicio

Diseña una clase llamada `RandomUserInfoType` que defina los elementos necesarios para generar una tarjeta de información del usuario, por ejemplo, una tarjeta de hombres y otra de mujeres.

Diseña una clase llamada `RandomUserInfo` que genere los datos de la tarjeta de información del usuario, por ejemplo, colores y organización visual.

Diseña una clase llamada `RandomUserReport` que genere configuraciones comunes de diferentes tarjetas de usuario.

**Avanzado**: Crea un componente que consuma las tarjetas de los usuarios agregados al reporte.