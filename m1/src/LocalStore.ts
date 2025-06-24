export class LocalStore {

    // private static instance: LocalStore
    private static readonly instance: LocalStore = new LocalStore("localStore/global")

    private namespace: string
    private data: Record<string, any>

    private constructor(namespace: string) {

        this.namespace = namespace

        this.data = {}

        this.reloadData()        

    }

    public static getInstance(): LocalStore {
        
        return this.instance

    }

    public getData(): Record<string, any> {

        return this.data

    }

    public updateData(partial: Record<string, any>) {

        for (const key in partial) {
            this.data[key] = partial[key]
        }

        this.saveData()

    }

    public saveData() {

        localStorage.setItem(this.namespace, JSON.stringify(this.data))

    }
    
    public reloadData() {

        this.data = JSON.parse(localStorage.getItem(this.namespace) || "{}")

    }

}