import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityCriteriaConfigComponent } from './priority-criteria-config.component';

describe('PriorityCriteriaConfigComponent', () => {
  let component: PriorityCriteriaConfigComponent;
  let fixture: ComponentFixture<PriorityCriteriaConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriorityCriteriaConfigComponent]
    });
    fixture = TestBed.createComponent(PriorityCriteriaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
