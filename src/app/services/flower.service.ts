import { Injectable } from '@angular/core';
import { Flower } from '../models/flower.model';

@Injectable({providedIn: 'root'})

export class FlowerService {

    private Flowers: Flower[] = [
        {
            name: 'Girasol',
            description: 'Su gran disco floral amarillo dorado y su tallo alto y fuerte lo hacen inconfundible.',
            leyend: 'Se dice que los girasoles siguen al sol durante todo el día, girando su cabeza para captar la luz. Simbolizan la adoración, la lealtad y la felicidad.',
            icon: 'assets/icons/girasol.png',
            img: 'assets/images/girasol.jpg',
            ubicationImg: 'assets/locations/girasol.png',
            ubication: {
                lat: 44.014, lng: 1.355
            },
        },
        {
            name: 'Narciso',
            description: 'Sus flores solitarias, con pétalos blancos o amarillos y una trompeta central, son muy características.',
            leyend: 'En la mitología griega, Narciso era un joven tan hermoso que se enamoró de su propio reflejo en un estanque. Esta leyenda dio origen a la flor que lleva su nombre, la cual simboliza la vanidad y el egoísmo, pero también la belleza y la nueva vida.',
            icon: 'assets/icons/narciso.png',
            img: 'assets/images/narciso.jpg',
            ubicationImg: 'assets/locations/narciso.png',
            ubication: {
                lat: 46.305, lng: 7.470
            },
        },
        {
            name: 'Margarita amarilla',
            description: 'Son flores compuestas por numerosas florecillas amarillas en el centro y pétalos blancos o amarillos alrededor.',
            leyend: 'En muchas culturas, las margaritas se asocian con la inocencia y la pureza. Se dice que arrancar los pétalos uno por uno mientras se repite "me quiere, no me quiere" puede revelar el amor de alguien.',
            icon: 'assets/icons/margarita.png',
            img: 'assets/images/margarita.jpg',
            ubicationImg: 'assets/locations/margarita.png',
            ubication: {
                lat: 51.478, lng: -0.295
            },
        },
        {
            name: 'Caléndula',
            description: 'Sus flores de color naranja o amarillo intenso tienen pétalos alargados y un centro prominente.',
            leyend: ' En la Edad Media, se creía que la caléndula tenía propiedades mágicas y se usaba para proteger contra el mal de ojo. También se asociaba con la fertilidad y la longevidad.',
            icon: 'assets/icons/calendula.png',
            img: 'assets/images/calendula.jpg',
            ubicationImg: 'assets/locations/calendula.png',
            ubication: {
                lat: 10.8505, lng: 76.2711
            },
        },
        {
            name: 'Mimosa',
            description: 'Es un árbol de hoja perenne con pequeñas flores amarillas agrupadas en espigas.',
            leyend: 'En Australia, la mimosa simboliza el verano y la alegría. Sus flores fragantes y de color amarillo dorado llenan los campos de un aroma dulce.',
            icon: 'assets/icons/mimosa.png',
            img: 'assets/images/mimosa.jpg',
            ubicationImg: 'assets/locations/mimosa.png',
            ubication: {
                lat: -33.8688, lng: 151.2093
            },
        },
        {
            name: 'Dalia',
            description: 'Sus flores grandes y llamativas vienen en una amplia variedad de formas y colores, incluyendo el amarillo.',
            leyend: 'Los aztecas utilizaban las dalias en ceremonias religiosas y como alimento. Simbolizan la elegancia, la creatividad y la fuerza interior.',
            icon: 'assets/icons/dalia.png',
            img: 'assets/images/dalia.jpg',
            ubicationImg: 'assets/locations/dalia.png',
            ubication: {
                lat: 19.285, lng: -99.118
            },
        },
        {
            name: 'Forsitia',
            description: 'Es un arbusto caducifolio que se cubre de pequeñas flores amarillas en forma de campana.',
            leyend: 'La forsitia es una de las primeras flores en florecer en primavera, anunciando la llegada de la nueva estación. Simboliza la esperanza, la renovación y el comienzo de algo nuevo.',
            icon: 'assets/icons/forsitia.png',
            img: 'assets/images/forsitia.jpg',
            ubicationImg: 'assets/locations/forsitia.png',
            ubication: {
                lat: 52.271, lng: 4.548
            },
        },
        {
            name: ' Lirio amarillo',
            description: 'Sus flores grandes y trompetadas tienen pétalos suaves y delicados.',
            leyend: 'En algunas culturas, los lirios se asocian con la resurrección y la vida eterna. Simbolizan la belleza, la pureza y la gracia.',
            icon: 'assets/icons/lirio.png',
            img: 'assets/images/lirio.jpg',
            ubicationImg: 'assets/locations/lirio.png',
            ubication: {
                lat: 40.8626, lng: -73.8801
            },
        },
        {
            name: 'Crocus',
            description: 'Son flores pequeñas y delicadas con forma de copa, que crecen en grupos.',
            leyend: 'El crocus es una de las primeras flores en florecer en primavera, anunciando el fin del invierno. Simboliza la juventud, la alegría y la felicidad.',
            icon: 'assets/icons/crocus.png',
            img: 'assets/images/crocus.jpg',
            ubicationImg: 'assets/locations/crocus.png',
            ubication: {
                lat: 44.8802, lng: 15.6175
            },
        },
        {
            name: 'Buttercup',
            description: 'Son flores pequeñas y brillantes con cinco pétalos brillantes y un centro amarillo dorado.',
            leyend: 'En algunas culturas, se cree que el buttercup puede predecir el clima. Si se coloca debajo del mentón y se ve amarillo, significa que habrá buen tiempo.',
            icon: 'assets/icons/buttercup.png',
            img: 'assets/images/buttercup.jpg',
            ubicationImg: 'assets/locations/buttercup.png',
            ubication: {
                lat: 46.559971, lng: 8.561075
            },
        },
        
    ]


    getFlowers(): Flower[] {
        return this.Flowers;
    }
}