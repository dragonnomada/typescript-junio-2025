import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

import { CounterService, type CounterServiceContext } from "../models/CounterService"

const CounterContext = createContext<CounterServiceContext>(CounterService.shared)

export function useCounterContext() {

    return useContext(CounterContext)

}

export type CounterContextProviderProps = {
    children: ReactNode
}

export function useCounterServiceSubscriber() {

    const [counterService, setCounterService] = useState<CounterServiceContext>(CounterService.shared)

    useEffect(() => {
        const counterSubscriber = CounterService.shared.subscribe({
            onUpdate(value: number) {
                console.log("Update", value)
                setCounterService(CounterService.reinstantiate(value))
            }
        })

        return () => {
            if (counterSubscriber.unsubscribe) counterSubscriber.unsubscribe()
        }
    }, [])

    return counterService

}

export function CounterContextProvider({
    children
}: CounterContextProviderProps) {

    const counterService = useCounterServiceSubscriber()

    return (
        <CounterContext.Provider
            value={counterService}
        >
            {children}
        </CounterContext.Provider>
    )

}