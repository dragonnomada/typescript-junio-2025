# Patrón Observador en Typescript

```ts
interface Observer {
  update(data: string): void;
}

class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(data: string) {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}

class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  update(data: string): void {
    console.log(`${this.name} recibió: ${data}`);
  }
}

// Uso
const subject = new Subject();
const obs1 = new ConcreteObserver("Observer 1");
const obs2 = new ConcreteObserver("Observer 2");

subject.addObserver(obs1);
subject.addObserver(obs2);

subject.notify("Nuevo evento disponible");
```