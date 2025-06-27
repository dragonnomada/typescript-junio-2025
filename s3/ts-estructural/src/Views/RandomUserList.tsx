import { useEffect, useState } from "react"
import { RandomUserServiceApi, type RandomUserService } from "../Models/RandomUserService"
import type { RandomUser } from "../Models/RandomUser"
import { Image } from "react-bootstrap"

export default function RandomUserList() {

    // Error 1: Necesitamos una instancia del Servicio
    // Corrección:
    // - Patrón Contructor (Builder) - Crea la instancia del servicio
    // - Patrón Singletón (Singleton) - Compartir el mismo servicio (la misma instancia)
    // - Patrón Prototipo (Prototype) - Refresque o copie las instancias (a nuevas)
    // - Vista Modelo - Mantener el servicio y reaccionar a los cambios
    const randomUserService: RandomUserService = new RandomUserServiceApi()

    // Error 2: Necesitamos retener los resultados del servicio
    // Correción:
    // - Vista Modelo - Mantiene los datos que necesita la vista
    const [users, setUsers] = useState<RandomUser[]>([])
    // Error 2: Continúa la lógica de obtener los usuarios dentro de la vista
    useEffect(() => {
        randomUserService.getUsers().then(users => {
            setUsers(users)
        })
    }, [])

    return (
        <div>
            {
                users.map(user => {
                    return (
                        <div 
                            key={user.login.uuid}
                            className="d-flex flex-row gap-3 border-bottom"
                        >
                            <div>
                                <Image
                                    src={user.picture.thumbnail}
                                />
                            </div>
                            <div>
                                <div>
                                    <span>{user.name.first} {user.name.last}</span>
                                </div>
                                <div className="text-muted">
                                    <span>{user.gender}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}