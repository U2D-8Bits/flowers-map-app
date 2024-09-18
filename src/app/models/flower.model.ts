
export interface Flower {
    name: string,
    description: string,
    leyend: string,
    icon?: string,
    ubication: {
        lat: number,
        lng: number
    }
}