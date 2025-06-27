import { useEffect, useState } from "react"
import type { RandomUser } from "../Models/RandomUser"
import { RandomUserServiceApi, type RandomUserService } from "../Models/RandomUserService"

export default function useRandomUserList(): RandomUser[] {

    // Error 1: Necesitamos una instancia del Servicio
    // Corrección:
    // - Patrón Contructor (Builder) - Crea la instancia del servicio
    // - Patrón Singletón (Singleton) - Compartir el mismo servicio (la misma instancia)
    // - Patrón Prototipo (Prototype) - Refresque o copie las instancias (a nuevas)
    const randomUserService: RandomUserService = new RandomUserServiceApi()

    // Error 2: Necesitamos retener los resultados del servicio
    // Correción:
    // - Necesitamos un repositorio que almacene los resultados por nosotros
    const [users, setUsers] = useState<RandomUser[]>([])
    
    useEffect(() => {
        randomUserService.getUsers().then(users => {
            setUsers(users)
        })
    }, [])

    return users

}