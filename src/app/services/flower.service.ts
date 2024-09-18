import { Injectable } from '@angular/core';
import { Flower } from '../models/flower.model';

@Injectable({providedIn: 'root'})

export class FlowerService {

    Flowers: Flower[] = [
        {
            name: 'Girasol',
            description: 'Su gran disco floral amarillo dorado y su tallo alto y fuerte lo hacen inconfundible.',
            leyend: 'Se dice que los girasoles siguen al sol durante todo el día, girando su cabeza para captar la luz. Simbolizan la adoración, la lealtad y la felicidad.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Narciso',
            description: 'Sus flores solitarias, con pétalos blancos o amarillos y una trompeta central, son muy características.',
            leyend: 'En la mitología griega, Narciso era un joven tan hermoso que se enamoró de su propio reflejo en un estanque. Esta leyenda dio origen a la flor que lleva su nombre, la cual simboliza la vanidad y el egoísmo, pero también la belleza y la nueva vida.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Margarita amarilla',
            description: 'Son flores compuestas por numerosas florecillas amarillas en el centro y pétalos blancos o amarillos alrededor.',
            leyend: 'En muchas culturas, las margaritas se asocian con la inocencia y la pureza. Se dice que arrancar los pétalos uno por uno mientras se repite "me quiere, no me quiere" puede revelar el amor de alguien.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Caléndula',
            description: 'Sus flores de color naranja o amarillo intenso tienen pétalos alargados y un centro prominente.',
            leyend: ' En la Edad Media, se creía que la caléndula tenía propiedades mágicas y se usaba para proteger contra el mal de ojo. También se asociaba con la fertilidad y la longevidad.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Mimosa',
            description: 'Es un árbol de hoja perenne con pequeñas flores amarillas agrupadas en espigas.',
            leyend: 'En Australia, la mimosa simboliza el verano y la alegría. Sus flores fragantes y de color amarillo dorado llenan los campos de un aroma dulce.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Dalia',
            description: 'Sus flores grandes y llamativas vienen en una amplia variedad de formas y colores, incluyendo el amarillo.',
            leyend: 'Los aztecas utilizaban las dalias en ceremonias religiosas y como alimento. Simbolizan la elegancia, la creatividad y la fuerza interior.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Forsitia',
            description: 'Es un arbusto caducifolio que se cubre de pequeñas flores amarillas en forma de campana.',
            leyend: 'La forsitia es una de las primeras flores en florecer en primavera, anunciando la llegada de la nueva estación. Simboliza la esperanza, la renovación y el comienzo de algo nuevo.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: ' Lirio amarillo',
            description: 'Sus flores grandes y trompetadas tienen pétalos suaves y delicados.',
            leyend: 'En algunas culturas, los lirios se asocian con la resurrección y la vida eterna. Simbolizan la belleza, la pureza y la gracia.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Crocus',
            description: 'Son flores pequeñas y delicadas con forma de copa, que crecen en grupos.',
            leyend: 'El crocus es una de las primeras flores en florecer en primavera, anunciando el fin del invierno. Simboliza la juventud, la alegría y la felicidad.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        {
            name: 'Buttercup',
            description: 'Son flores pequeñas y brillantes con cinco pétalos brillantes y un centro amarillo dorado.',
            leyend: 'En algunas culturas, se cree que el buttercup puede predecir el clima. Si se coloca debajo del mentón y se ve amarillo, significa que habrá buen tiempo.',
            icon: '',
            ubication: {
                lat: 0,
                lng: 0
            },
        },
        
    ]


    getFlowers() {
        return this.Flowers;
    }
    
}