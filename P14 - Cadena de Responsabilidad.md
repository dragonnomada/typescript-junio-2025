# Patrón Cadena de Responsabilidad en Typescript

```ts
abstract class Handler {
  protected next: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.next = handler;
    return handler;
  }

  handle(request: string): void {
    if (this.next) this.next.handle(request);
  }
}

class AuthHandler extends Handler {
  handle(request: string): void {
    if (request === "auth") {
      console.log("Autenticación completa");
    } else {
      super.handle(request);
    }
  }
}

class LogHandler extends Handler {
  handle(request: string): void {
    if (request === "log") {
      console.log("Registro completo");
    } else {
      super.handle(request);
    }
  }
}

// Uso
const auth = new AuthHandler();
const log = new LogHandler();

auth.setNext(log);

auth.handle("log");   // Registro completo
auth.handle("auth");  // Autenticación completa
```