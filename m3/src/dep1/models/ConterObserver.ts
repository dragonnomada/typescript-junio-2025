export type CounterSubscriber = {

    getId: () => string
    onUpdate: (value: number) => void
    unsubscribe: () => void
    changeValue: (value: number) => void

}

export class CounterObserver {

    public static shared: CounterObserver = new CounterObserver()

    protected value: number = 0

    protected subscribers: CounterSubscriber[] = []

    public getValue(): number {
        return this.value
    }

    private remove(subscriber: CounterSubscriber) {
        this.subscribers = this.subscribers.filter(currentSubscriber => {
            return currentSubscriber.getId() === subscriber.getId()
        })
    }

    public subscribe(subscriber: CounterSubscriber) {

        console.log("Suscrito:", subscriber.getId())

        // this.remove(subscriber)

        const lastUnsubscribe = subscriber.unsubscribe

        subscriber.unsubscribe = () => {
            console.log("Desuscrito:", subscriber.getId())
            this.remove(subscriber)
            lastUnsubscribe()
        }

        const lastChangeValue = subscriber.changeValue

        subscriber.changeValue = (value: number) => {
            this.changeValue(value)
            lastChangeValue(value)
        }

        this.subscribers.push(subscriber)

        return subscriber

    }

    public changeValue(value: number) {

        console.log("Change value", this.value, value)

        this.value = value

        for (const subscriber of this.subscribers) {
            subscriber.onUpdate(value)
        }

    }

    public getReport(): string {

        return `[${this.subscribers.length}]`

    }
    
}