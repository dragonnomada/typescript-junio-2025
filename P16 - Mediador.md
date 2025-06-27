# Patrón Medidador en Typescript

```ts
interface Mediator {
  notify(sender: object, event: string): void
}

class ChatRoom implements Mediator {
  userA!: User
  userB!: User

  notify(sender: object, event: string): void {
    if (sender === this.userA) {
      this.userB.receive(event)
    } else {
      this.userA.receive(event)
    }
  }
}

class User {
  constructor(public name: string, private mediator: Mediator) {}

  send(message: string) {
    console.log(`${this.name} dice: ${message}`)
    this.mediator.notify(this, message)
  }

  receive(message: string) {
    console.log(`${this.name} recibe: ${message}`)
  }
}

// Uso
const chat = new ChatRoom()
const user1 = new User("Alice", chat)
const user2 = new User("Bob", chat)

chat.userA = user1
chat.userB = user2

user1.send("Hola, Bob!")
user2.send("Hola, Alice!")
```