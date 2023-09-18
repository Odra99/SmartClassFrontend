import { Component, Input, OnInit } from '@angular/core';
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
  showConfig=true;

  constructor(private areaService: AreaService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
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
}
