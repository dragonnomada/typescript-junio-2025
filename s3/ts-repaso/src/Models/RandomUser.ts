// Promise<T>
// .then(callback(value: T)) -> await
// .catch(callback(error: Error)) -> try-catch

// Modelo de Datos
export interface RandomUser {

    // 1. Reterner los datos de un usuario
    getName(): string
    getPicture(): string
    getGender(): string

    // 2. Adquirir los datos del API (SRP)
    getUsers(): Promise<RandomUser[]>

    // Prototipo
    copy(): RandomUser

}

// Implementación de un modelo de datos
export class SimpleRandomUser implements RandomUser {

    protected name: string
    protected picture: string
    protected gender: string

    protected constructor(name: string, picture: string, gender: string) {
        this.name = name
        this.picture = picture
        this.gender = gender
    }

    public static createRandomUser(name: string, picture: string, gender: string): RandomUser {
        const randomUser = new SimpleRandomUser(name, picture, gender)
        return randomUser
    }

    getName(): string {
        return this.name
    }

    getPicture(): string {
        return this.picture
    }

    getGender(): string {
        return this.gender
    }

    async getUsers(): Promise<RandomUser[]> {
        
        const response = await fetch("https://randomuser.me/api?seed=123&results=100")

        if (response.ok) {
            const data: Record<string, any> = await response.json()

            const results: Record<string, any>[] = data.results

            const users = []

            for (const user of results) {
                const name: Record<string, string> = user.name
                const picture: Record<string, string> = user.picture

                const userName = `${name.first} ${name.last}`
                const userGender: string = user.gender
                const userPicture: string = picture.large

                const randomUser = SimpleRandomUser.createRandomUser(userName, userPicture, userGender)

                users.push(randomUser)

            }

            return users
        } else {
            const error = await response.text()

            console.log("Error getUsers", error)

            return []
        }

    }

    copy(): RandomUser {
        return SimpleRandomUser.createRandomUser(this.name, this.picture, this.gender)
    }

}