import { useEffect, useState } from "react";
import { CounterObserver, type CounterSubscriber } from "../models/ConterObserver";

export type CounterProps = {
    id?: string
}

export default function Counter({
    id
}: CounterProps) {

    const [value, setValue] = useState<number>(CounterObserver.shared.getValue())

    const [counterSubscriber, setCounterSubscriber] = useState<CounterSubscriber | null>(null)

    useEffect(() => {
        const subscriber = CounterObserver.shared.subscribe({
            getId: () => id || Math.random().toString(10).slice(2, 6),
            onUpdate: (value: number) => {
                setValue(value)
            },
            unsubscribe: () => {
                console.log("By", subscriber.getId())
            },
            changeValue(value: number) {
                console.log("Update:", value, subscriber.getId())
            }
        })

        setCounterSubscriber(subscriber)

        return () => {
            subscriber.unsubscribe()
        }

    }, [])

    if (!counterSubscriber) return "..."

    return (
        <div
            style={{
                padding: "3rem"
            }}
        >
            <div>
                <span>Subscribers: {CounterObserver.shared.getReport()}</span>
            </div>
            <br />
            <div>
                <span>Counter ID: {counterSubscriber.getId()}</span>
            </div>
            <br />
            <div>
                <span>Counter: {value}</span>
            </div>
            <br />
            <button
                onClick={() => {
                    counterSubscriber.changeValue(value + 1)
                }}
            >
                Increment
            </button>
        </div>
    )

}