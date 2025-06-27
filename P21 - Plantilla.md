# Patrón Plantilla en Typescript

```ts
abstract class DataProcessor {
  process(): void {
    this.readData()
    this.transformData()
    this.saveData()
  }

  abstract readData(): void
  abstract transformData(): void

  saveData(): void {
    console.log("Guardando datos en la base de datos...")
  }
}

class CSVProcessor extends DataProcessor {
  readData(): void {
    console.log("Leyendo datos de archivo CSV")
  }

  transformData(): void {
    console.log("Transformando datos del CSV")
  }
}

// Uso
const processor = new CSVProcessor()
processor.process()
```