export interface IMember {
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
        zipCode: number
        province: string
        country: string
    },
    onlineUrl?: string
    status: string
    beneficiaries: IBeneficiary[]
}

export interface IBeneficiary{
    id: number
    name: string
    surname: string
    identityNo: number
    relationship: string
}