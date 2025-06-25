import { useState } from "react"

// <MiComponent
//      propiedad1={valor1}
//      propiedad2={valor2}
//      ...
//      propiedadN={valorN}
// >
//      { children }
// </MiComponent>

// Componente: function (props?) { return ReactNode }

// type Tipo = <construcción>
// <contrucción> - Unión: A | B
// <contrucción> - Intersección: A & B
// <contrucción> - Profundidad: { <valor>: T }

// type - Restricción sobre los tipos
// interface - Prototipo de tipos

export type ContadorProps = {

    valorInicial: number
    maximo?: number
    // maximo: number | undefined

}

export default function Contador(props: ContadorProps) {

    // const [getter, setter] = useState<T>(defaultValue typeof T)

    const [contador, setContador] = useState<number>(props.valorInicial)

    return (
        <div>
            <span>Contador: {contador}</span>
            <button
                onClick={
                    () => {
                        setContador(contador + 1)
                    }
                }
            >
                Incrementar
            </button>
        </div>
    )

}