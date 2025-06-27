import type { RandomUser } from "./RandomUser"

import { RandomUserServiceApi, type RandomUserService } from "./RandomUserService"

// Responsabilidad: Almacenar los resultados de la búsqueda
export interface RandomUserRepositoryService extends RandomUserService {

    users: RandomUser[]

}

// Responsabilidad: Retener los usuarios consultados por el API
export class RandomUserRepositoryServiceApi extends RandomUserServiceApi implements RandomUserRepositoryService {

    users: RandomUser[] = []

    async getUsers(): Promise<RandomUser[]> {

        console.log("Los datos del repositorio han sido actualizados")
    
        const users = await super.getUsers()

        this.users = users

        return users

    }

    copy(): RandomUserService {
        const randomUserServiceCopy = new RandomUserRepositoryServiceApi()
        randomUserServiceCopy.users = this.users
        return randomUserServiceCopy
    }

}