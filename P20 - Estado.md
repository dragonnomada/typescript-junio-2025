# Patrón Estado en Typescript

```ts
interface State {
  handle(): void
}

class HappyState implements State {
  handle() {
    console.log("😊 Estoy feliz")
  }
}

class SadState implements State {
  handle() {
    console.log("😢 Estoy triste")
  }
}

class PersonContext {
  private state: State

  constructor(state: State) {
    this.state = state
  }

  setState(state: State) {
    this.state = state
  }

  behave() {
    this.state.handle()
  }
}

// Uso
const person = new PersonContext(new HappyState())
person.behave() // 😊 Estoy feliz

person.setState(new SadState())
person.behave() // 😢 Estoy triste
```