import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleConfigComponent } from './shedule-config.component';

describe('SheduleConfigComponent', () => {
  let component: SheduleConfigComponent;
  let fixture: ComponentFixture<SheduleConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheduleConfigComponent]
    });
    fixture = TestBed.createComponent(SheduleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
