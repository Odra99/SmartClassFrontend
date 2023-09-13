import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/data/area';
import { AreaService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit{

  areas!:Area[];

  selectedArea!:Area;

  constructor(private areaService:AreaService){

  }

  ngOnInit(): void {
    this.areaService.listAll().subscribe({
      next:(value) =>{
        this.areas = value.body;
      },
    })
  }

  selectArea(area:any): void{
    this.selectedArea = area;
  }

  save(){
  }
}
