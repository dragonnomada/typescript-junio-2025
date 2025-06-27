// SOLID

import type { RandomUser, RandomUserApiResponse } from "./RandomUser"

import { RandomUsersExample1 } from "./mockup/RandomUsersExample1"

// Responsabilidad: Consultar a los usuarios devolverlos
export interface RandomUserService {

    getUsers(): Promise<RandomUser[]>

    copy(): RandomUserService

}

// Responsabilidad: Consultar a los usuarios de prueba devolverlos
export class RandomUserServiceMokup implements RandomUserService {

    getUsers(): Promise<RandomUser[]> {

        const users: RandomUser[] = RandomUsersExample1

        return Promise.resolve(users)

    }

    copy(): RandomUserService {
        return new RandomUserServiceMokup()
    }

}

// Responsabilidad: Consultar a los usuarios desde el API devolverlos
export class RandomUserServiceApi implements RandomUserService {

    constructor() {
        console.log("Se ha creado una instnacia del Servicio de Consulta de Usuarios vía API")
    }

    async getUsers(): Promise<RandomUser[]> {

        const response = await fetch("https://randomuser.me/api?seed=123&results=100")

        if (response.ok) {
            const data: RandomUserApiResponse = await response.json()

            return data.results
        }

        const error = await response.text()

        throw new Error(error)

    }

    copy(): RandomUserService {
        return new RandomUserServiceApi()
    }

}