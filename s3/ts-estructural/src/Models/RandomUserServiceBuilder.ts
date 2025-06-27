import { RandomUserServiceApi, RandomUserServiceMokup, type RandomUserService } from "./RandomUserService";

// Responsabilidad: Crear instancias de los servicios de manera ordenada
export class RandomUserServiceBuilder {

    static createServiceByMockup(): RandomUserService {
        const randomUserService: RandomUserService = new RandomUserServiceMokup()
        return randomUserService
    }

    static createServiceByApi(): RandomUserService {
        const randomUserService: RandomUserService = new RandomUserServiceApi()
        return randomUserService
    }

}