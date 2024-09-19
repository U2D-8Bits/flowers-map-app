import { Component, OnInit, ViewChild } from '@angular/core';
import { FlowerService } from '../../services/flower.service';
import { Flower } from '../../models/flower.model';
import { MapInfoWindow } from '@angular/google-maps';
import { FlowerSelectedService } from '../../services/flor-selected.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

  flores: Flower[] = [];
  selectedFlor: Flower | null = null; 


  constructor(
    private flowerService: FlowerService,
    private flowerSelectedService: FlowerSelectedService
  ){}
  
      // Ubicación inicial del mapa
      center = { lat: -0.258968, lng: -79.176320 };
      zoom = 2;

    


  ngOnInit(): void {
    this.flores = this.flowerService.getFlowers();
  }

  selectFlower(flower: Flower){
    this.flowerSelectedService.selectFlower(flower);
  }

}
