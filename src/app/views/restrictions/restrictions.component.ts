import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restriction } from 'src/app/data/restrictions';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { RestrictionService } from 'src/app/services/restrictions.service';

@Component({
  selector: 'app-restrictions',
  templateUrl: './restrictions.component.html',
  styleUrls: ['./restrictions.component.scss']
})
export class RestrictionsComponent implements OnInit {

  @Input() courses!: Restriction[];
  @Input() showSide = true

  selectedCourse!: Restriction;
  selectedCourses: Restriction[] = []
  @Input() showConfig = false;

  @Output() restrictions = new EventEmitter<Restriction[]>();
  constructor(private restriction: RestrictionService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  saveRestriction(){
    this.restrictions.emit(this.courses)
  }

  getInfo() {
    if (!this.courses) {
      this.restriction.listAll().subscribe({
        next: (value) => {
          this.courses = value.body;
        },
      })
    }
  }

  selectCourse(classroom: any): void {
    this.selectedCourse = classroom;
  }

  drop(event: CdkDragDrop<Restriction[]>) {
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
