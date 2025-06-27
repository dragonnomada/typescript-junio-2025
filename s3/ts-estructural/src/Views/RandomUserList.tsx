import { Image } from "react-bootstrap"
import { useAppContext } from "../Context/AppContext"
// import type { RandomUser } from "../Models/RandomUser"
// import useRandomUserList from "../ViewModels/useRandomUserList"

// Responsabilidad: Mostrar la lista de usuarios
export default function RandomUserList() {

    // const users: RandomUser[] = useRandomUserList()

    const appService = useAppContext()

    const users = appService.getRecentUsers()

    return (
        <div>
            {
                users.length === 0 ? (
                    <span className="text-muted">No hay usuarios todavía...</span>
                ) : null
            }
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
                            <div className="d-flex flex-column flex-grow-1">
                                <div>
                                    <span>{user.name.first} {user.name.last}</span>
                                </div>
                                <div className="text-muted d-flex flex-grow-1 justify-content-between gap-2">
                                    <span>{user.gender}</span>
                                    <span>{user.location.country}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}