import { createContext, useContext, useState, type ReactNode } from "react"

import { AppServiceShared, type AppService } from "../Models/AppService"

// Primera Pieza: El contexto

// La instancia del contexto
const AppContext = createContext<AppService>(
    AppServiceShared.shared
)

// El hook del contexto (acceso a la instancia)
export function useAppContext(): AppService {

    const context = useContext<AppService>(AppContext)

    return context

}

// Segunda Pieza: Proveedor del contexto

export type AppContextProviderProps = { 
    children: ReactNode 
}

// Componente que provea el contexto en general (estado del contexto)
export function AppContextProvider({
    children
}: AppContextProviderProps) {

    // PASO FUNDAMENTAL: Reaccionar a los cambios del servicio
    const [service, setService] = useState<AppService>(
        AppServiceShared.shared
    )

    service.setListener(() => {
        setService(AppServiceShared.refresh())
    })

    return (
        <AppContext.Provider
            value={service}
        >
            {children}
        </AppContext.Provider>
    )

}