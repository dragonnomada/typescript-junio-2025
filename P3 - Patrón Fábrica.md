# 🏭 Patrón Fábrica en TypeScript

El patrón Fábrica tiene el objetivo de ocultar la instanciación de una clase o componente.

Su principal uso es poder resolver a través de los parámetros, la instancia final.

## 🛡️ Recomendación

✅ Ideal para diferentes subtipos de una clase o componente.

❌ Evita usarlo para resolver clases base distintas.

## Ejemplo

```tsx
export interface UserConfirm {

    approve(): Promise<boolean>

}

export class AlertUserConfirm implements UserConfirm {

    private message: string
    
    public constructor(message: string) {
        this.message = message
    }

    public approve(): Promise<boolean> {
        
        const response: boolean = confirm(this.message)

        return Promise.resolve(response)

    }

}

export type ModalOnCompleteCallback = (isApproved: boolean) => void

export type ModalHandler = (onComplete: ModalOnCompleteCallback) => void

export class ModalUserConfirm implements UserConfirm {

    private presentModal: ModalHandler
    
    public constructor(handler: ModalHandler) {
        this.presentModal = handler
    }

    public async approve(): Promise<boolean> {
        
        const isApproved: boolean = await new Promise((resolve: (value: boolean) => void) => {

            const onComplete: ModalOnCompleteCallback = (isApproved: boolean) => { resolve(isApproved) }

            this.presentModal(onComplete)

        })

        return isApproved

    }

}

export class UserConfirmFabric {

    public static createAlert(message: string) {

        return new AlertUserConfirm(message)

    }
    
    public static createModal(handler: ModalHandler) {

        return new ModalUserConfirm(handler)

    }

}
```

## Ejercicio

Diseña una interfaz `IniciarSesion` que permita iniciar sesión, luego implementa dos clases `IniciarSesionCredenciales` e `IniciarSesionToken` que permitan iniciar sesión con correo y contraseña o por medio del token de la sesión respectivamente.

Crea componentes de prueba distintos para validar su funcionamiento.

**Avanzado**: Diseña un contexto que retenga un objeto de sesión y permita iniciar y cerrar sesión guardando los resultados en *localStorage*, al iniciar la sesión guarda los datos en el navegador y al cerrar la sesión limpia los datos. Cada que se cargue el contexto verifica si hay una sesión y valida el *token* o presenta el formulario para iniciar sesión con las credenciales (correo y contraseña).