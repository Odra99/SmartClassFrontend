import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Area } from 'src/app/data/area';
import { AreaService } from 'src/app/services/areas.service';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  @Input() areas!: Area[];

  selectedArea!: Area;
  @Input() showSide = true

  selectedAreas:Area[]=[]
  @Input() showConfig=false;  
  @Output() areass = new EventEmitter<Area[]>();


  constructor(private areaService: AreaService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  saveAreas(){
    this.areass.emit(this.selectedAreas)
  }

  getInfo() {
    if (!this.areas) {
      this.areaService.listAll().subscribe({
        next: (value) => {
          this.areas = value.body;
        },
      })
    }
  }

  selectArea(area: any): void {
    this.selectedArea = area;
  }

  save() {
    this.areaService.save(this.selectedArea).subscribe({
      next: () => {
        this.toast.show({ message: 'Cambios guardados', type: ToasterEnum.SUCCESS })
        this.getInfo()
      }, error: () => {
        this.toast.show({ message: 'Error', type: ToasterEnum.ERROR })
      },
    })
  }

  drop(event: CdkDragDrop<Area[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
