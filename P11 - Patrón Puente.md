# 🌉 Patrón Puente en TypeScript

El patrón Puente divide una clase en una secuencia de clases puente que dependen de la anterior.

## 🛡️ Recomendación

✅ Ideal para separar la lógica y funcionalidad entre clases complejas que tengan múltiples variantes.

❌ Evita usarlo para objetos que no poseen jerarquía directa.

## Ejemplo

```tsx
export class SushiProteina {

    ...

}

export class Sushi {

    private proteina: SushiProteina

    constructor(proteina: SushiProteina) {
        this.proteina = proteina
    }

    ...

}
```

## Ejercicio

Diseña una clase llamada `RandomUserSearchService` que se construya a partir de una clase llamada `RandomUserFilters` que contenga todos los filtros.

Compara la lógica de tener los filtros dentro de `RandomUserSearchService` a ser solo el puente para los filtros.

**Avanzado**: Crea un componente que consuma la búsqueda de usuarios y filtros.