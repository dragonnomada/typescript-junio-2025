import type { RandomUser } from "./RandomUser"
import { RandomUserRepositoryServiceApi } from "./RandomUserRepositoryService"
import type { RandomUserService } from "./RandomUserService"

// 1. Modelo del servicio
export interface AppService extends RandomUserService {

    // Responsabilidad 1: Obtener los usuarios consultados
    getRecentUsers(): RandomUser[]
    
    // Responsabilidad 2: Buscar a los usuarios (hacer la consulta)
    searchUsers(search: string): Promise<RandomUser[]>

    // Resposabilidad 3: Retener a una función que escucha cuando hay cambios
    setListener(listener: () => void): void

}

// 2. La implementación por defecto del servicio
// Responsabilidad: Filtrar los usuarios consultados
export class AppServiceDefault extends RandomUserRepositoryServiceApi implements AppService {

    private listener?: () => void

    setListener(listener: () => void): void {
        this.listener = listener
    }

    getRecentUsers(): RandomUser[] {
        return this.users
    }

    async searchUsers(search: string): Promise<RandomUser[]> {
        
        const filterdUsers: RandomUser[] = []
        
        const users = await super.getUsers()

        for (const user of users) {
            if (user.name.first.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (user.name.last.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (user.email.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (["male", "female"].includes(search.toLowerCase())) {
                if (user.gender === search.toLowerCase()) {
                    filterdUsers.push(user)
                    continue
                }
            }
            // if (user.gender.toLocaleLowerCase().includes(search.toLowerCase())) {
            //     filterdUsers.push(user)
            //     continue
            // }
            if (user.cell.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (user.phone.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.city.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.country.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.state.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
            if (user.location.street.name.toLocaleLowerCase().includes(search.toLowerCase())) {
                filterdUsers.push(user)
                continue
            }
        }

        this.users = filterdUsers

        if (this.listener) {
            this.listener()
        }

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