import { useState } from "react"

import { SimpleRandomUser, type RandomUser } from "../Models/RandomUser"

export function useRandomUser(): RandomUser {

    const [randomUser, setRandomUser] = useState<RandomUser>(
        SimpleRandomUser.createRandomUser("-", "-", "-")
    )

    return {
        getGender() {
            return randomUser.getGender()
        },
        getName() {
            return randomUser.getName()
        },
        getPicture() {
            return randomUser.getPicture()
        },
        getUsers() {
            return randomUser.getUsers()
        },
        copy() { // El estado ya cambió
            const newRandomUser = randomUser.copy()
            setRandomUser(newRandomUser) // !!
            return newRandomUser
        },
    }

}