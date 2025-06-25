"use client" // Solo en Next en page.tsx
import Contador from "./components/Contador";
import FormularioPersona from "./components/FormularioPersona";
import FormularioProducto from "./components/FormularioProducto";

export default function Home() {

    return (
        <div>
            {/* <FormularioProducto 
                onCompletar={(imagen: string, nombre: string, precio: number) => {
                    alert(`
                        Imagen: ${imagen}   
                        Nombre: ${nombre}
                        Precio: ${precio}   
                    `)
                }}
            /> */}
            <FormularioPersona />
        </div>
    )

}
