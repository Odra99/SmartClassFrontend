import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Priority } from 'src/app/data/priorities';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { PriorityService } from 'src/app/services/priorities.service';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss']
})
export class PrioritiesComponent implements OnInit {

  @Input() courses!: Priority[];
  @Input() showSide=true

selectedCourse!: Priority;
selectedCourses:Priority[]=[]
showConfig=false;
constructor(private priorityService: PriorityService,
  private toast: ToasterService) {

}

ngOnInit(): void {
  this.getInfo();
}

getInfo() {
  if(!this.courses){
    this.priorityService.listAll().subscribe({
      next: (value) => {
        this.courses = value.body;
      },
    })
  }
}

selectCourse(classroom: any): void {
  this.selectedCourse = classroom;
}

drop(event: CdkDragDrop<Priority[]>) {
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
