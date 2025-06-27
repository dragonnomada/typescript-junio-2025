import type { RandomUser } from "./RandomUser"
import { RandomUserRepositoryServiceApi } from "./RandomUserRepositoryService"
import type { RandomUserService } from "./RandomUserService"

// 1. Modelo del servicio
export interface AppService extends RandomUserService {

    // Responsabilidad 1: Obtener los usuarios consultados
    getRecentUsers(): RandomUser[]
    
    // Responsabilidad 2: Buscar a los usuarios (hacer la consulta)
    searchUsers(search: string): Promise<RandomUser[]>

}

// 2. La implementación por defecto del servicio
// Responsabilidad: Filtrar los usuarios consultados
export class AppServiceDefault extends RandomUserRepositoryServiceApi implements AppService {

    getRecentUsers(): RandomUser[] {
        return this.users
    }

    async searchUsers(search: string): Promise<RandomUser[]> {
        
        const filterdUsers: RandomUser[] = []
        
        const users = await super.getUsers()

        for (const user of users) {
            if (user.name.first.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.name.last.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.email.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.gender.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.cell.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.phone.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.city.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.country.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.state.includes(search)) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.street.name.includes(search)) {
                filterdUsers.push(user)
                continue
            }
        }

        this.users = filterdUsers

        return this.users

    }

    copy(): RandomUserService {
        const instance = new AppServiceDefault()
        instance.users = this.users
        return instance
    }

}

// 3. La instancia compartida del servicio
export class AppServiceShared {

    public static shared: AppService = new AppServiceDefault()

    public static refresh(): AppService {

        // Substitución de Liskov !!!
        AppServiceShared.shared = AppServiceShared.shared.copy() as AppService

        return AppServiceShared.shared

    }

}