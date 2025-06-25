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