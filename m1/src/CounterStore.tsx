import { useEffect, useState } from "react"
import { LocalStore } from "./LocalStore"

const localStore: LocalStore = LocalStore.getInstance()

export default function CounterStore() {

    const [count, setCount] = useState(localStore.getData().count || 0)

    useEffect(() => {

        localStore.updateData({
            count: count
        })

    }, [count])

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "2rem",
            border: "1px solid gainsboro"
        }}>
            <span>Count: {count}</span>
            <div
                style={{
                    display: "flex",
                    gap: "1rem"
                }}
            >
                <button
                    onClick={() => {
                        setCount(0)
                    }}
                >
                    Reset
                </button>
                <button
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    Increment
                </button>
            </div>
        </div>
    )

}