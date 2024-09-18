import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../../services/flower.service';
import { Flower } from '../../models/flower.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

  flores: Flower[] = [];
  
  constructor(
    private flowerService: FlowerService
  ){}
  
      // Ubicación inicial del mapa
      center = { lat: -0.258968, lng: -79.176320 };
      zoom = 2;


  ngOnInit(): void {
    this.flores = this.flowerService.getFlowers();
  }

  showInfo(flor: Flower){
    console.log(flor);
  }

}
