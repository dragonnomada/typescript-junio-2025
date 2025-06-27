# Patrón Memento en Typescript

```ts
class EditorMemento {
  constructor(public content: string) {}
}

class Editor {
  private content: string = ""

  type(words: string) {
    this.content += words
  }

  save(): EditorMemento {
    return new EditorMemento(this.content)
  }

  restore(memento: EditorMemento) {
    this.content = memento.content
  }

  getContent() {
    return this.content
  }
}

// Uso
const editor = new Editor()
editor.type("Hola ")
editor.type("mundo")

const saved = editor.save() // guarda estado

editor.type(" cruel")
console.log(editor.getContent()) // Hola mundo cruel

editor.restore(saved) // restaurar
console.log(editor.getContent()) // Hola mundo
```