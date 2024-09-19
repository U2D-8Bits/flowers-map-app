import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flower } from '../models/flower.model';

@Injectable({providedIn: 'root'})
export class FlowerSelectedService {
    
    private flowerSelectedSubject = new BehaviorSubject<Flower | null>(null);

    selectedFlower$ = this.flowerSelectedSubject.asObservable();

    selectFlower( flower: Flower){
        this.flowerSelectedSubject.next(flower);
    }
    
}