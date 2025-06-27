import { useFormProduct } from "../ViewModels/useFormProduct"

// Vista
export default function FormProduct() {

    const product = useFormProduct()

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={product.getName()}
                    onChange={(event) => {
                        product.setName(event.target.value)
                    }}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Precio"
                    value={product.getPrice()}
                    onChange={(event) => {
                        product.setPrice(Number(event.target.value))
                    }}
                />
            </div>
            <div>
                <button
                    onClick={() => {
                        alert(`
                            Producto
                            
                            Nombre: ${product.getName()}
                            Precio: ${product.getPrice().toFixed(2)}
                        `)
                    }}
                >
                    enviar
                </button>
            </div>
        </div>
    )

}