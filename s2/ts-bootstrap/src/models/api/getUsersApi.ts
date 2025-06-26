export type UserName = {
    title: string
    first: string
    last: string
}

export type UserLogin = {
    
    password: string

}

export type UserPicture = {

    large: string

}

export type RandomUser = {

    name: UserName
    email: string
    login: UserLogin
    picture: UserPicture
    
}

export type RandomUserApiRespose = {

    results: RandomUser[]

}

export async function getUsersApi(seed?: number, results?: number): Promise<RandomUser[]> {

    const url = `https://randomuser.me/api?seed=${seed || 123}&results=${results || 100}`

    const response = await fetch(url)

    if (response.ok) {
        const data: RandomUserApiRespose = await response.json()

        return data.results

    } else {

        const error = await response.text()

        console.warn(error)

        return []

    }

}