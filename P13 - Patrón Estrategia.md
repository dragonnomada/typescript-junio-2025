# Patrón Estrategia en Typescript

```ts
// Estrategia
interface SortStrategy {
  sort(data: number[]): number[];
}

class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Usando Bubble Sort");
    return [...data].sort(); // simplificado
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Usando Quick Sort");
    return [...data].sort(); // simplificado
  }
}

// Contexto
class Sorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sortData(data: number[]) {
    return this.strategy.sort(data);
  }
}

// Uso
const sorter = new Sorter(new BubbleSort());
console.log(sorter.sortData([3, 1, 4]));

sorter.setStrategy(new QuickSort());
console.log(sorter.sortData([5, 2, 7]));
```