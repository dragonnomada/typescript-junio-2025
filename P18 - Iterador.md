# Patrón Iterador en Typescript

```ts
class NameCollection {
  private names: string[] = []

  add(name: string) {
    this.names.push(name)
  }

  getIterator(): Iterator<string> {
    let index = 0
    const names = this.names

    return {
      next(): IteratorResult<string> {
        if (index < names.length) {
          return { value: names[index++], done: false }
        } else {
          return { value: undefined, done: true }
        }
      }
    }
  }
}

// Uso
const collection = new NameCollection()
collection.add("Ana")
collection.add("Luis")
collection.add("Marta")

const iterator = collection.getIterator()
let result = iterator.next()
while (!result.done) {
  console.log(result.value)
  result = iterator.next()
}
```