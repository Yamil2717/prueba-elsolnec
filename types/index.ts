
export interface User {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    address: Address
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}

export interface Company {
    name: string
    bs: string
    catchPhrase: string
}

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface Comment {
    id: number
    name: string
    email: string
    body: string
}