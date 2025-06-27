import type { RandomUser } from "./RandomUser"

import { RandomUserServiceApi, type RandomUserService } from "./RandomUserService"

// Responsabilidad: Almacenar los resultados de la búsqueda
export interface RandomUserRepositoryService extends RandomUserService {

    users: RandomUser[]

}

export class RandomUserRepositoryServiceApi extends RandomUserServiceApi implements RandomUserRepositoryService {

    users: RandomUser[] = []

    async getUsers(): Promise<RandomUser[]> {
    
        const users = await super.getUsers()

        this.users = users

        return users

    }

}