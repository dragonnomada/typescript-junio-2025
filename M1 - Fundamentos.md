# 🧩 Módulo 1. Fundamentos de TypeScript para React Developers

Alan Badillo Salas

---

Objetivo: Dominar los tipos, funciones y estructuras más utilizadas en el desarrollo de interfaces modernas con React.
* ¿Qué es TypeScript y por qué usarlo con React?
* Configuración del entorno (TSConfig, JSX + TSX, linters)
* Tipos básicos y compuestos
* Funciones tipadas, interfaces y tipos literales
* Union, intersection y discriminated unions
* Generics en funciones y componentes
* Utilitarios de TS (Partial, Pick, Record, etc.)
* Narrowing y control de flujo con tipos
* Tipado estricto de props y estados en componentes React

---

## Configuración del proyecto

Existen 3 tipos de proyectos que podemos construir para integrar React y Typescript:

* **Vite**: Configura un proyecto enfocado en el *Frontend* rápido y con aplicaciones de tipo *SPA* (*Single Page Aplication / Aplicación de una Única Página*). Venjas: es rápido y de baja configuración.
* **Next**: Configura un proyecto enfocado al *Fullstack* (*Frontend* y *Backend*) que permite *SSR* (*Server-Side Rendering / Renderizado en el lado del Servidor*). Ventajas: cada ruta es una página y un componente.
* **Webpack**: Configura un proyecto limpio enfocado a al *Testing* que permite mayor configuración y seguridad. Desventajas: alta configuración y desarrollo lento.

### Gestores de Paquetes

Antes de configurar un proyecto, podemos elegir un gestor para los paquetes que integrarán el `node_modules`, estos tienen algunas ventajas y desventajas:

* **npm** - El gestor tradicional.
  * *Ventajas*: es resiliente a librerías mal escritas. 
  * *Desventajas*: es lento y ocupa mucho disco.
* **pnpm** - Es un gestor más moderno que permite *workspaces* y mejora la optimización respecto a *npm*.
  * *Ventajas*: Es rápido y ocupa poco disco. 
  * *Desventajas*: Podría fallar con librerías mal escritas.
* **pnpm** - Es un gestor moderno que en su tiempo mejoró a *npm*.
  * *Ventajas*: Es rápido y permite configuraciones avanzadas. 
  * *Desventajas*: Ya no es mejor respecto a *npm* o *pnpm*.

En este curso usaremos `npm`, además de `npx` para módulos y utilidades globales.

### Vite

> Creación del proyecto

```bash
npm create vite@latest mi-proyecto -- --template react-ts
```

> Instalación de las dependencias

```bash
npm install
```

> Estructura de los archivos

```text
mi-proyecto/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   └── main.tsx
```

### Next.js

> Creación del proyecto

```bash
npm init -y
```

> Instalación de las dependencias

```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install -D webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin
```

> Estructura de los archivos

```text
mi-proyecto/
├── package.json
├── tsconfig.json
├── webpack.config.js
├── public/
│   └── index.html
├── src/
│   ├── index.tsx
│   └── App.tsx
```

> `webpack.config.js`

```javascript
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        static: "./dist",
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    mode: "development"
}
```

> `tsconfig.json`

```json
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "ESNext",
        "jsx": "react-jsx",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "baseUrl": "./",
        "outDir": "dist"
    },
    "include": [
        "src"
    ],
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

> `src/index.tsx`

```tsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const rootElement = document.getElementById("root")

if (!rootElement) {
    throw new Error("No se encontró el elemento con id 'root'")
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
```

> `src/App.tsx`

```tsx
export default function App() {

    return (
        <span>Hello React</span>
    )
    
}
```

> `package.json`

```json
{
    "scripts": {
        "start": "webpack serve --mode development --open",
        "build": "webpack --mode production"
    },
}
```

> `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

## ¿Qué es TypeScript y por qué usarlo con React?

Typescript es un potente tipador de objetos que reduce los errores de programación, exigiendo la conformación de tipos en el código y permitiendo la documentación de los mismos.

### Ejemplo de un componente tipado

Veamos el ejemplo de un componente tipado que indica los tipos de datos esperados en sus parámetros y exige el cumplimiento de los mismos para una correcta compilación:

```jsx
/**
 * Propiedades del componente Hello
 * 
 * @property {string} title - El título que se mostrará en el encabezado.
 * @property {Date} date - La fecha que se mostrará debajo del título.
 */
export interface HelloProps {

    /**
     * Título del componente
     */
    title: string

    /**
     * Fecha que se mostrará
     */
    date: Date

}

/**
 * Componente que muestra un título y una fecha formateada.
 * 
 * @param {HelloProps} props - Las propiedades del componente.
 * @returns {JSX.Element} Elemento JSX con título y fecha.
 */
export default function Hello({
    title,
    date
}: HelloProps) {

    return (
        <div>
            <h1>{title}</h1>
            <span>{date.toLocaleString()}</span>
        </div>
    )

}
```

## Tipos básicos y compuestos en Typescript

### 📋 Tabla de Tipos en TypeScript

| Tipo           | Categoría        | Descripción                                        | Ejemplo                                |
|----------------|------------------|----------------------------------------------------|----------------------------------------|
| `string`       | Básico           | Texto plano                                        | `"Hola"`                               |
| `number`       | Básico           | Números (enteros, decimales, NaN, etc.)            | `42`, `3.14`                           |
| `boolean`      | Básico           | Verdadero o falso                                  | `true`, `false`                        |
| `null`         | Básico           | Ausencia intencionada de valor                     | `null`                                 |
| `undefined`    | Básico           | Valor no definido                                  | `undefined`                            |
| `bigint`       | Básico           | Enteros grandes (ES2020+)                          | `123n`                                 |
| `symbol`       | Básico           | Identificadores únicos                             | `Symbol("id")`                         |
| `any`          | Especial         | Omite verificación de tipo                         | `let x: any = 42`                      |
| `unknown`      | Especial         | Como `any` pero más seguro                         | `let x: unknown = valor`               |
| `void`         | Especial         | No retorna valor (funciones)                       | `function log(): void { ... }`         |
| `never`        | Especial         | Nunca retorna (errores o bucles infinitos)         | `function error(): never { throw ... }`|
| `object`       | Básico           | Cualquier objeto que no sea primitivo              | `{}`, `[]`, `new Date()`               |
| `Array<T>`     | Compuesto        | Arreglo de elementos del tipo `T`                  | `string[]`, `Array<number>`            |
| `[T1, T2]`     | Compuesto (tupla)| Arreglo de longitud y tipo fijo                    | `[string, number]`                     |
| `{ ... }`      | Compuesto        | Objeto tipado                                      | `{ name: string; age: number }`        |
| `enum`         | Compuesto        | Conjunto de constantes con nombre                  | `enum Color { Red, Green }`            |
| `type`         | Alias / Compuesto| Alias de tipo, permite uniones, intersecciones     | `type A = B \| C` o `type A = B & C`   |
| `interface`    | Compuesto        | Definición de estructura de objetos extensible     | `interface User { name: string }`      |
| `T \| U`       | Unión            | Puede ser uno u otro                               | `string \| number`                     |
| `T & U`        | Intersección     | Debe cumplir ambos tipos                           | `A & B`                                |
| `() => T`      | Función          | Función que retorna tipo `T`                       | `() => string`                         |
| `{ [key: string]: T }` | Índice | Objeto con claves dinámicas                          | `{ [key: string]: number }`            |
| `Partial<T>`   | Utilitario       | Todas las propiedades opcionales                   | `Partial<User>`                        |
| `Readonly<T>`  | Utilitario       | Todas las propiedades de solo lectura              | `Readonly<User>`                       |
| `Record<K, T>` | Utilitario       | Mapea claves `K` a valores `T`                     | `Record<string, number>`               |