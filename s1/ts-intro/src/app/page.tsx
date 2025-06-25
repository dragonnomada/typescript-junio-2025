"use client" // Solo en Next en page.tsx
import Contador from "./components/Contador";

export default function Home() {

    return (
        <div>
            <Contador 
                valorInicial={10}
            />
            <Contador 
                valorInicial={5}
                maximo={10}
            />
        </div>
    )

}
