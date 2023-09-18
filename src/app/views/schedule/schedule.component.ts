import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/data/schedule';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { RestrictionEnum } from 'src/global/restriction-enum';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @Input() schedule!: Schedule;
  scheduleTime:string[]=[]
  matrixAssignment:any[]=[]
  showSchedule=true
  showTeacher=false
  showClasses=false
  showArea=false
  showCourse=false

  constructor(private scheduleService: ScheduleService,
    private toast: ToasterService) {

  }

  changeTeacher(){
    this.showSchedule=false
    this.showClasses=false
    this.showArea=false
    this.showCourse=false
    this.showTeacher=true
  }

  changeClasses(){
    this.showSchedule=false
    this.showClasses=true
    this.showArea=false
    this.showCourse=false
    this.showTeacher=false
  }

  changeArea(){
    this.showSchedule=false
    this.showClasses=false
    this.showArea=true
    this.showCourse=false
    this.showTeacher=false
  }

  changeCourse(){
    this.showSchedule=false
    this.showClasses=false
    this.showArea=false
    this.showCourse=true
    this.showTeacher=false
  }

  changeSchedule(){
    this.showSchedule=true
    this.showClasses=false
    this.showArea=false
    this.showCourse=false
    this.showTeacher=false
  }

  ngOnInit(): void {
    this.showSchedule=true
    this.showTeacher=false
    this.showClasses=false
    this.showArea=false
    this.showCourse=false
    this.getInfo();
  }

  getInfo() {
    this.scheduleService.getSchedule().subscribe({
      next: (value) => {
        this.schedule = value.body;
        this.calculateTimes();
      },
    })
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  calculateTimes() {
    var startTime = this.schedule.restrictions.find(element => element.name == RestrictionEnum.SCHEDULE_START_TIME)?.value
    var endTime = this.schedule.restrictions.find(element => element.name == RestrictionEnum.SCHEDULE_END_TIME)?.value
    var period_duration = this.schedule.restrictions.find(element => element.name == RestrictionEnum.PERIODS_DURATION)?.value
    var period_for_lunch = this.schedule.restrictions.find(element => element.name == RestrictionEnum.NO_PERIODS_FOR_LUNCH)?.value
    if (!(startTime && endTime && period_duration && period_for_lunch)) {
      return
    }
    var startTimem = (startTime).split(":"),
        endTimem = (endTime).split(":"),
        periodDuration = (period_duration).split(":"),
        tstartTime = new Date(),
        tendTime = new Date();
    tstartTime.setHours(parseInt(startTimem[0]), parseInt(startTimem[1]), 0);
    tendTime.setHours(parseInt(endTimem[0]), parseInt(endTimem[1]), 0)
    while (tstartTime<tendTime){
      let aux = tstartTime.toTimeString().split(' ')[0];
      tstartTime.setHours(tstartTime.getHours(), tstartTime.getMinutes() + parseInt(periodDuration[1]));
      this.scheduleTime.push(aux+"-"+tstartTime.toTimeString().split(' ')[0])
    }    
  }


}
