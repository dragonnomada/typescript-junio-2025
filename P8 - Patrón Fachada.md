# 🪟 Patrón Fachada en TypeScript

El patrón Fachada integra diferentes objetos en un método de uso simplificado.

## 🛡️ Recomendación

✅ Ideal para consumir un servicio complejo que integra diferentes componentes de forma sencilla.

❌ Evita usarlo para determinar configuraciones específicas al consumir el servicio directo.

## Ejemplo

```tsx
export class RandomUserSearchService {

    ...

    public search(filters: RandomUserFilter[]): RandomUserSearchResult { ... }

}

export class RandomUserReportService {

    ...

    public report(pairs: RandomUserPair[]): RandomUserReport { ... }

}

export class RandomUserFecade {

    ...

    public getFemaleReport(): RandomUserReport {

        const searchService = new RandomUserSearchService()

        const filters = [
            RandomUserFilter.filterByFemale()
        ]

        const users = searchService.search(filters)

        const reportService = new RandomUserReportService(users)

        const pairs = [
            RandomUserPair.pairFullName(),
            RandomUserPair.pairGender(),
            RandomUserPair.pairPicture(),
        ]

        return reportServices.report(pairs)

    }

}
```

## Ejercicio

Diseña una clase llamada `RandomUserFilter` que permita crear filtros aplicables a los usuarios en la búsqueda.

Diseña una clase llamada `RandomUserSearchService` que permita consultar los usuarios usando los filtros.

Diseña una clase llamada `RandomUserPair` que permita crear parejas aplicables al reporte en la búsqueda.

Diseña una clase llamada `RandomUserReportService` que permita generar un reporte usando las parejas de etiquetas y valores.

**Avanzado**: Prueba en un componente que muestre el reporte generado directamente por la fachada.

