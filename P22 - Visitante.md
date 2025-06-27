# Patrón Visitante en Typescript

```ts
// 1. Interfaces base
interface Product {
  name: string;
  price: number;
  accept(visitor: TaxVisitor): number;
}

interface TaxVisitor {
  visitFood(food: Food): number;
  visitElectronics(electronics: Electronics): number;
}

// 2. Productos concretos
class Food implements Product {
  constructor(public name: string, public price: number) {}

  accept(visitor: TaxVisitor): number {
    return visitor.visitFood(this);
  }
}

class Electronics implements Product {
  constructor(public name: string, public price: number) {}

  accept(visitor: TaxVisitor): number {
    return visitor.visitElectronics(this);
  }
}

// 3. Visitante concreto (estrategia fiscal)
class TaxCalculator implements TaxVisitor {
  visitFood(food: Food): number {
    console.log(`Calculando impuesto para alimento: ${food.name}`);
    return food.price * 0.08; // 8%
  }

  visitElectronics(electronics: Electronics): number {
    console.log(`Calculando impuesto para electrónico: ${electronics.name}`);
    return electronics.price * 0.16; // 16%
  }
}

// 4. Uso
const products: Product[] = [
  new Food("Pan", 20),
  new Electronics("Laptop", 15000),
  new Food("Leche", 18),
  new Electronics("Celular", 9000),
];

const taxCalculator = new TaxCalculator();

for (const product of products) {
  const tax = product.accept(taxCalculator);
  console.log(`${product.name}: $${product.price} + impuesto $${tax.toFixed(2)}\n`);
}
```