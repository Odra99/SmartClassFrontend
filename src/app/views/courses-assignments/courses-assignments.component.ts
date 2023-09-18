import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Area } from 'src/app/data/area';
import { CourseAssignment } from 'src/app/data/assignment';
import { AreaService } from 'src/app/services/areas.service';
import { CourseService } from 'src/app/services/course.service';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';

@Component({
  selector: 'app-courses-assignments',
  templateUrl: './courses-assignments.component.html',
  styleUrls: ['./courses-assignments.component.scss']
})
export class CoursesAssignmentsComponent  implements OnInit {

  @Input() areas!: CourseAssignment[];

  selectedArea!: CourseAssignment;
  @Input() showSide = true

  selectedAreas:CourseAssignment[]=[]
  @Input() showConfig=false;  
  @Output() areass = new EventEmitter<CourseAssignment[]>();


  constructor(private courseService: CourseService,
    private toast: ToasterService) {

  }

  selectAll(){
    this.selectedAreas = [...this.areas]
    this.areas =[]
  }

  ngOnInit(): void {
    this.getInfo();
  }

  saveAreas(){
    this.areass.emit(this.selectedAreas)
  }

  getInfo() {
    if(this.showConfig){
      if(this.areas){

        this.selectedAreas = [...this.areas];
        }
      this.courseService.listAllAssignments().subscribe({
        next: (value) => {
          this.areas = value.body;
        },
      })

    }else if  (!this.areas) {
      this.courseService.listAllAssignments().subscribe({
        next: (value) => {
          this.areas = value.body;
        },
      })
    }
  }

  selectArea(area: any): void {
    this.selectedArea = area;
  }


  drop(event: CdkDragDrop<CourseAssignment[]>) {
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
