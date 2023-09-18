import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritiesComponent } from './priorities.component';

describe('PrioritiesComponent', () => {
  let component: PrioritiesComponent;
  let fixture: ComponentFixture<PrioritiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrioritiesComponent]
    });
    fixture = TestBed.createComponent(PrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
