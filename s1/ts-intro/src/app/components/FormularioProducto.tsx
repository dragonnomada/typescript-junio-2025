import { ChangeEvent, useState } from "react"

export type FormularioProductoProps = {

    // Delegate | Handler | Callback | EventHandler
    onCompletar: (imagen: string, nombre: string, precio: number) => void

}

export default function FormularioProducto({
    onCompletar
}: FormularioProductoProps) {

    const [nombre, setNombre] = useState<string>("")
    const [imagen, setImagen] = useState<string>("")
    const [precio, setPrecio] = useState<number>(0)

    return (
        <div>
            <div>
                <div>
                    <span>Imagen (URL):</span>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Ej. https://..."
                        value={imagen}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const nuevaImagen: string = event.target.value
                            setImagen(nuevaImagen)
                        }}
                    />
                </div>
                <div>
                    <span style={{ fontSize: "0.5rem", color: "grey" }}>🏞️ {imagen || "(vacío)"}</span>
                </div>
                {
                    imagen.startsWith("http") ? (
                        <div>
                            <img width={"150px"} height={"150px"} src={imagen} />
                        </div>
                    ) : null
                }
            </div>
            <div>
                <div>
                    <span>Nombre del producto:</span>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Ej. Coca-Cola"
                        value={nombre}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const nuevoNombre: string = event.target.value
                            setNombre(nuevoNombre)
                        }}
                    />
                </div>
                <div>
                    <span style={{ fontSize: "0.5rem", color: "grey" }}>🍶 {nombre || "(vacío)"}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Precio:</span>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Ej. 23.50"
                        value={precio}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const nuevoPrecio: number = Number(event.target.value) || 0
                            setPrecio(nuevoPrecio)
                        }}
                    />
                </div>
                <div>
                    <span style={{ fontSize: "0.5rem", color: "grey" }}>💰 {precio || "(vacío)"}</span>
                </div>
            </div>
            <div>
                <button
                    disabled={!nombre || !imagen || precio <= 0}
                    onClick={() => {
                        onCompletar(imagen, nombre, precio)
                    }}
                >
                    Completar
                </button>
            </div>
        </div>
    )

}