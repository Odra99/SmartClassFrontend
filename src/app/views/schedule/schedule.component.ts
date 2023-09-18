import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaConfiguration, Schedule } from 'src/app/data/schedule';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { RestrictionEnum } from 'src/global/restriction-enum';
import { ToasterEnum } from 'src/global/toaster-enum';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @Input() schedule!: Schedule;
  matrixAssignment: any[] = []
  showSchedule = true
  showTeacher = false
  showClasses = false
  showArea = false
  showCourse = false
  showRestriction = false
  showPriority = false
  showConfig = false
  showAssigments = false
  id!: string | null

  constructor(private scheduleService: ScheduleService,
    private toast: ToasterService,
    private activatedRoute: ActivatedRoute,) {

  }

  changeTeacher() {
    this.showSchedule = false
    this.showClasses = false
    this.showArea = false
    this.showCourse = false
    this.showRestriction = false
    this.showPriority = false
    this.showTeacher = true
    this.showAssigments = false
  }

  changeClasses() {
    this.showSchedule = false
    this.showClasses = true
    this.showArea = false
    this.showCourse = false
    this.showTeacher = false
    this.showRestriction = false
    this.showPriority = false
    this.showAssigments = false
  }

  changeArea() {
    this.showSchedule = false
    this.showClasses = false
    this.showArea = true
    this.showCourse = false
    this.showTeacher = false
    this.showRestriction = false
    this.showPriority = false
    this.showAssigments = false
  }

  changeCourse() {
    this.showSchedule = false
    this.showClasses = false
    this.showArea = false
    this.showCourse = true
    this.showTeacher = false
    this.showRestriction = false
    this.showPriority = false
    this.showAssigments = false
  }

  changeSchedule() {
    this.showSchedule = true
    this.showClasses = false
    this.showArea = false
    this.showCourse = false
    this.showTeacher = false
    this.showRestriction = false
    this.showPriority = false
    this.showAssigments = false
  }

  changeRestriction() {
    this.showSchedule = false
    this.showClasses = false
    this.showArea = false
    this.showCourse = false
    this.showTeacher = false
    this.showRestriction = true
    this.showPriority = false
    this.showAssigments = false
  }
  changePriority() {
    this.showSchedule = false
    this.showClasses = false
    this.showArea = false
    this.showCourse = false
    this.showTeacher = false
    this.showRestriction = false
    this.showPriority = true
    this.showAssigments = false
  }

  changeAssignment() {
    this.showSchedule = false
    this.showClasses = false
    this.showArea = false
    this.showCourse = false
    this.showTeacher = false
    this.showRestriction = false
    this.showPriority = false
    this.showAssigments = true
  }

  ngOnInit(): void {
    this.showSchedule = true
    this.showTeacher = false
    this.showClasses = false
    this.showArea = false
    this.showCourse = false
    this.showAssigments = false

    this.id = this.activatedRoute.snapshot.paramMap.get('hashId');

    if (this.id == null) {
      this.getInfo();
    }
    else {

    }
  }

  getInfo() {
    this.scheduleService.getSchedule().subscribe({
      next: (value) => {
        this.schedule = value.body;
        if (!this.schedule || !this.schedule.id) {
          this.showConfig = true
        }
      },
    })
  }

  finish() {
    this.scheduleService.finishSchedule().subscribe({
      next: (value) => { 
        this.getInfo();
      },
    })
  }

  generateSchedule() {
    if (this.schedule && this.schedule.area_configurations && this.schedule.areas && this.schedule.classes_configurations
      && this.schedule.courses && this.schedule.priority_criterias && this.schedule.restrictions && this.schedule.teachers && this.schedule.course_assignment) {
      this.scheduleService.generateSchedule(this.schedule).subscribe({
        next: (value) => {
          this.toast.show({ message: "Horario generado", type: ToasterEnum.SUCCESS })
          this.showConfig = false;
          this.schedule = value.body;
          this.changeSchedule();
        },
        error: () => {
          this.toast.show({ message: "Horario no generado", type: ToasterEnum.ERROR })
        },
      })
    } else {
      this.toast.show({ message: "Configuraciones no cargadas", type: ToasterEnum.ERROR })
    }
  }



  getInfoById() {
    if (this.id) {
      this.scheduleService.getScheduleById(this.id).subscribe({
        next: (value) => {
          this.schedule = value.body;
        },
      })
    }
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  // calculateTimes() {
  //   var startTime = this.schedule.restrictions.find(element => element.name == RestrictionEnum.SCHEDULE_START_TIME)?.value
  //   var endTime = this.schedule.restrictions.find(element => element.name == RestrictionEnum.SCHEDULE_END_TIME)?.value
  //   var period_duration = this.schedule.restrictions.find(element => element.name == RestrictionEnum.PERIODS_DURATION)?.value
  //   var period_for_lunch = this.schedule.restrictions.find(element => element.name == RestrictionEnum.NO_PERIODS_FOR_LUNCH)?.value
  //   if (!(startTime && endTime && period_duration && period_for_lunch)) {
  //     return
  //   }
  //   var startTimem = (startTime).split(":"),
  //     endTimem = (endTime).split(":"),
  //     periodDuration = (period_duration).split(":"),
  //     tstartTime = new Date(),
  //     tendTime = new Date();
  //   tstartTime.setHours(parseInt(startTimem[0]), parseInt(startTimem[1]), 0);
  //   tendTime.setHours(parseInt(endTimem[0]), parseInt(endTimem[1]), 0)
  //   while (tstartTime < tendTime) {
  //     let aux = tstartTime.toTimeString().split(' ')[0];
  //     tstartTime.setHours(tstartTime.getHours(), tstartTime.getMinutes() + parseInt(periodDuration[1]));
  //     this.scheduleTime.push(aux + "-" + tstartTime.toTimeString().split(' ')[0])
  //   }
  // }

  savePriorities(priorities: any) {
    this.changeSchedule();
    this.schedule.priority_criterias = priorities
    for (let index = 0; index < this.schedule.priority_criterias.length; index++) {
      this.schedule.priority_criterias[index].order = index;
    }
    this.toast.show({ message: "Datos guardados", type: ToasterEnum.INFO })
  }

  saveRestrictions(restriction: any) {
    this.changeSchedule();
    this.schedule.restrictions = restriction
    this.toast.show({ message: "Datos guardados", type: ToasterEnum.INFO })

  }

  saveTeachers(teachers: any) {
    this.changeSchedule();
    this.schedule.teachers = teachers
    this.toast.show({ message: "Datos guardados", type: ToasterEnum.INFO })
  }

  saveAssignments(course_assignment: any) {
    this.changeSchedule();
    this.schedule.course_assignment = course_assignment
    this.toast.show({ message: "Datos guardados", type: ToasterEnum.INFO })
  }

  saveClases(clases: any) {
    this.changeSchedule();
    this.schedule.classes_configurations = clases
    this.toast.show({ message: "Datos guardados", type: ToasterEnum.INFO })
  }

  saveCourses(course: any) {
    this.changeSchedule();
    this.schedule.courses = course
    this.toast.show({ message: "Datos guardados", type: ToasterEnum.INFO })
  }


  saveAreas(areas: any) {
    this.changeSchedule();
    this.schedule.areas = areas
    this.schedule.area_configurations = []
    for (let index = 0; index < this.schedule.areas.length; index++) {
      let areaConf = new AreaConfiguration()
      areaConf.area_name = this.schedule.areas[index].name;
      areaConf.order = index
      this.schedule.area_configurations.push(areaConf)
    }
    this.toast.show({ message: "Datos guardados", type: ToasterEnum.INFO })
  }


}
