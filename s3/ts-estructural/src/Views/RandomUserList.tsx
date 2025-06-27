import { Image } from "react-bootstrap"
import type { RandomUser } from "../Models/RandomUser"
import useRandomUserList from "../ViewModels/useRandomUserList"

// Responsabilidad: Mostrar la lista de usuarios
export default function RandomUserList() {

    const users: RandomUser[] = useRandomUserList()

    return (
        <div>
            {
                users.map(user => {
                    return (
                        <div 
                            key={user.login.uuid}
                            className="d-flex flex-row gap-3 border-bottom"
                        >
                            <div>
                                <Image
                                    src={user.picture.thumbnail}
                                />
                            </div>
                            <div>
                                <div>
                                    <span>{user.name.first} {user.name.last}</span>
                                </div>
                                <div className="text-muted">
                                    <span>{user.gender}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}