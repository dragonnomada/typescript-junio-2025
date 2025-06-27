// SOLID

import type { RandomUser, RandomUserApiResponse } from "./RandomUser"

import { RandomUsersExample1 } from "./mockup/RandomUsersExample1"

// Responsabilidad: Consultar a los usuarios del API y devolverlos
export interface RandomUserService {

    getUsers(): Promise<RandomUser[]>

}

export class RandomUserServiceMokup implements RandomUserService {

    getUsers(): Promise<RandomUser[]> {

        const users: RandomUser[] = RandomUsersExample1

        return Promise.resolve(users)

    }

}

export class RandomUserServiceApi implements RandomUserService {

    constructor() {
        console.log("Se ha creado una instnacia del Servicio de Consulta de Usuarios vía API")
    }

    async getUsers(): Promise<RandomUser[]> {

        const response = await fetch("https://randomuser.me/api?seed=123&results=5")

        if (response.ok) {
            const data: RandomUserApiResponse = await response.json()

            return data.results
        }

        const error = await response.text()

        throw new Error(error)

    }

}