import { useEffect, useState } from "react"

import type { RandomUser } from "../Models/RandomUser"
import type { RandomUserService } from "../Models/RandomUserService"
import { RandomUserServiceShared } from "../Models/RandomUserServiceShared"
import type { RandomUserRepositoryService } from "../Models/RandomUserRepositoryService"

// Responsabilidad: Recuperar la lista de usuarios consultados
export default function useRandomUserList(): RandomUser[] {

    // Paso 1: Retenemos el servicio compartido
    const [randomUserService, setRandomUserService] = useState<RandomUserService>(
        RandomUserServiceShared.shared
    )

    // Error: Segunda responsabilidad sobre hacer la búsqueda
    useEffect(() => {
        // Paso 2: Después de actualizar los usuarios
        randomUserService.getUsers().then(() => {
            // Paso 3: Actualizamos el servicio compartido retenido
            setRandomUserService(
                RandomUserServiceShared.refreshShared()
            )
        })
    }, [])

    const repostory = randomUserService as RandomUserRepositoryService

    return repostory.users

}