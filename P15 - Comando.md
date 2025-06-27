# Patrón Comando en Typescript

```ts
interface Command {
  execute(): void;
}

class Light {
  turnOn() {
    console.log("Luz encendida");
  }

  turnOff() {
    console.log("Luz apagada");
  }
}

class TurnOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}

class TurnOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}

class RemoteControl {
  private commands: Command[] = [];

  addCommand(command: Command) {
    this.commands.push(command);
  }

  run() {
    for (const command of this.commands) {
      command.execute();
    }
  }
}

// Uso
const light = new Light();
const on = new TurnOnCommand(light);
const off = new TurnOffCommand(light);

const control = new RemoteControl();
control.addCommand(on);
control.addCommand(off);
control.run();
```