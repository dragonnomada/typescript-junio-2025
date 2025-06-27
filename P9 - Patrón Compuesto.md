# 🍱 Patrón Compuesto en TypeScript

El patrón Compuesto integra una misma base a diferentes clases compuestas.

## 🛡️ Recomendación

✅ Ideal para unificar elementos y grupos al mismo tiempo, como jerarquías o menús.

❌ Evita usarlo para diferencias entre elementos y grupos.

## Ejemplo

```tsx
export interface Item {

    getLabel: () => string
    expand?: () => void
    collapse?: () => void
    getItems?: () => Item[]

}

export class MenuItem {

    ...

    public getLabel(): string { ... }

}

export class MenuGroupItem {

    private items: Item[]

    ...

    public getLabel(): string { ... }
    public expand() { ... }
    public collapse() { ... }
    public getItems(): Item[] { ... }

}
```

## Ejercicio

Diseña una interfaz llamada `Item` que sea usada en los componentes para mostrar un elemento del menú o un grupo de elementos.

Diseña una clase llamada `MenuItem` que implemente un elemento simple en el menú.

Diseña una clase llamada `MenuGroupItem` que implemente un grupo de elementos en el menú.

**Avanzado**: Crea un menu anidado con elementos simples y agrupados y muestra el componente que permita colapsar y expandir los menús.

