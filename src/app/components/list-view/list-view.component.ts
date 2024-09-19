import { Component, OnInit } from '@angular/core';
import { Flower } from '../../models/flower.model';
import { FlowerSelectedService } from '../../services/flor-selected.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {

  selectedFlower: Flower | null = null;
  
  constructor(
    private flowerSelectedService: FlowerSelectedService
  ) { }


  ngOnInit(): void {
    
    this.flowerSelectedService.selectedFlower$
    .subscribe(
      flower => {
        this.selectedFlower = flower;
        console.log(flower);
      }
    )

  }



}
