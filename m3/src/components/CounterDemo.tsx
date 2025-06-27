import { useCounterContext } from "./CounterContext"

export default function CounterDemo() {

    const counterContext = useCounterContext()

    return (
        <div>
            <div>Counter: {counterContext.getValue()}</div>
            <button
                onClick={() => {
                    const value = counterContext.getValue() + 1
                    counterContext.setValue(value)
                }}
            >
                Increment
            </button>
        </div>
    )

}