import { useMemo, useRef, useState } from "react"
import { ModalHandler, ModalOnCompleteCallback, UserConfirm, UserConfirmFabric } from "./UserConfirm"

export default function ModalUserConfirmTest() {

    const [approved, setApproved] = useState<boolean | null>(null)
    const [open, setOpen] = useState(false)

    const onCompleteRef = useRef<ModalOnCompleteCallback | null>(null)

    const modalUserConfirm = useMemo<UserConfirm>(() => {
        return UserConfirmFabric.createModal((onComplete: ModalOnCompleteCallback) => {

            setOpen(true)

            onCompleteRef.current = onComplete

        })
    }, [])

    if (open) {

        return (
            <div>
                <h2>¿Desea confirmar?</h2>
                <div
                    style={{
                        display: "flex",
                        gap: "1rem"
                    }}
                >
                    <button
                        onClick={() => {
                            if (onCompleteRef.current) {
                                onCompleteRef.current(true)
                                setOpen(false)
                            } else {
                                alert("No hay referencia onComplete")
                            }
                        }}
                    >
                        Sí 👍
                    </button>
                    <button
                        onClick={() => {
                            if (onCompleteRef.current) {
                                onCompleteRef.current(false)
                                setOpen(false)
                            } else {
                                alert("No hay referencia onComplete")
                            }
                        }}
                    >
                        No 👎
                    </button>
                </div>
            </div>
        )

    }

    if (approved === null) {
        return (
            <button
                onClick={async () => {
                    const isApproved = await modalUserConfirm.approve()

                    setApproved(isApproved)
                }}
            >
                Confirmar
            </button>
        )
    }

    if (approved) {

        return (
            <span>Aprobado 🥹</span>
        )

    }

    return (
        <span>Rechazado 🙅</span>
    )


}