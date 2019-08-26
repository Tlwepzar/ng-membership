export interface IEvent {
    id: number
    name: string
    surname: string
    memberNo: string
    identityNo: number
    date: Date
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    },
    onlineUrl?: string
    status: string
    sessions: ISession[]
}

export interface ISession{
    id: number
    name: string
    presenter: string
    duration: number
    level: string
    abstract: string
    voters: string[]
}