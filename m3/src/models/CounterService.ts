export interface Subscriber<T> {

    onUpdate: (value: T) => void
    unsubscribe?: () => void

}

export class Observable<T> {

    protected subscribers: Subscriber<T>[] = []
    
    public subscribe(subscriber: Subscriber<T>): Subscriber<T> {
        subscriber.unsubscribe = () => {
            this.subscribers.filter(current => {
                return current === subscriber
            })
        }
        this.subscribers.push(subscriber)
        return subscriber
    }

}

export interface CounterServiceContext {

    getValue: () => number
    setValue: (value: number) => void

}

export class CounterService extends Observable<number> implements CounterServiceContext {

    public static shared: CounterService = new CounterService()

    public static reinstantiate(value: number): CounterService {
        console.log("Reinstantiate")
        const newService = new CounterService()
        newService.subscribers = CounterService.shared.subscribers
        newService.value = value
        CounterService.shared = newService
        return CounterService.shared
    }

    protected value: number = 0

    public getValue(): number {
        return this.value
    }

    public setValue(value: number) {
        console.log("Receive:", value, this.subscribers)

        this.value = value

        for (const subscriber of this.subscribers) {
            subscriber.onUpdate(value)
        }
    }

}