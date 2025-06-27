import { useEffect, useState } from "react"
import { useRandomUser } from "../ViewModels/useRandomUser"
import type { RandomUser } from "../Models/RandomUser"
import { Image } from "react-bootstrap"

export default function RandomUserList() {

    const randomUser = useRandomUser()

    const [users, setUsers] = useState<RandomUser[]>([])

    useEffect(() => {
        randomUser.getUsers().then(users => {
            setUsers(users)
        })
    }, [])

    return (
        <div>
            {
                users.length === 0 ? (
                    <div><span>Esperando a los usuarios...</span></div>
                ) : (
                    users.map((user, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <span>{user.getName()}</span>
                                </div>
                                <div>
                                    <span>{user.getGender()}</span>
                                </div>
                                <div>
                                    <Image
                                        src={user.getPicture()}
                                    />
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    )

}