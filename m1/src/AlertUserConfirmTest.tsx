import { useState } from "react"
import { UserConfirmFabric } from "./UserConfirm"

const alertUserConfirm = UserConfirmFabric.createAlert("¿Desea aprobarlo?")

export default function AlertUserConfirmTest() {

    const [approved, setApproved] = useState<boolean | null>(null)

    if (approved === null) {

        return (
            <button
                onClick={() => {
                    alertUserConfirm.approve().then((isApproved: boolean) => {
                        setApproved(isApproved)
                    })
                }}
            >
                Aprobar
            </button>
        )

    }

    if (approved) {

        return (
            <span>Aprobado ✅</span>
        )

    }

    return (
        <span>Rechazado ❌</span>
    )

}