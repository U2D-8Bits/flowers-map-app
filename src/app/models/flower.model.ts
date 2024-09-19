
export interface Flower {
    name: string,
    description: string,
    leyend: string,
    icon?: string,
    img: string,
    ubicationImg: string,
    ubicationDescription: string,
    ubication: {
        lat: number,
        lng: number
    }
}