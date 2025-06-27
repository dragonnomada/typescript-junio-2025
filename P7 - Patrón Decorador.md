# 💐 Patrón Decorador en TypeScript

El patrón Decorador modifica los resultados de una clase base preservando la misma clase.

## 🛡️ Recomendación

✅ Ideal para aumentar funcionalidad cuándo sea requerida.

❌ Evita usarlos para aumentar funcionalidad.

## Ejemplo

```tsx
export interface Sushi {

    ...

    getPrice: () => number

}

export class SushiDecorator implements Sushi {

    protected sushi: Sushi

    public constructor(sushi: Sushi) {
        this.sushi = sushi
    }

    ...

    getPrice(): number {
        return this.sushi.getPrice()
    }

}

export class SushiConTocino extends SushiDecorator {

    ...

    getPrice(): number {
        return this.sushi.getPrice() + 40
    }

}

export class SushiConMiel extends SushiDecorator {

    ...

    getPrice(): number {
        return this.sushi.getPrice() + 60
    }

}

export class SushiConCocaCola extends SushiDecorator {

    ...

    getPrice(): number {
        return this.sushi.getPrice() + 55
    }

}

// ...

const sushi1 = new Sushi(...)

const sushi2 = new SushiConTocino(sushi1)

const sushi3 = new SushiConCocaCola(sushi2)

// sushi3.getPrice() // -> (((precio) + 40) + 55)
```

## Ejercicio

Diseña una clase llamada `RandomUser` que contenga un método para extraer los usuarios consultados, por ejemplo `getUsers()`.

Crea una clase decorada llamada `RandomUserFilterMale` que al llamar a `getUsers()` solo extraiga los que son hombres.

Crea una clase decorada llamada `RandomUserFilterFemale` que al llamar a `getUsers()` solo extraiga los que son mujeres.

Crea una clase decorada llamada `RandomUserFilterUK` que al llamar a `getUsers()` solo extraiga los que son de nacionalidad de Reino Unido.

**Avanzado**: Prueba en un componente la aplicación de los diferentes decoradores de filtro en una tabla.

