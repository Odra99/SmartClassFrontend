import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassConfigComponent } from './class-config.component';

describe('ClassConfigComponent', () => {
  let component: ClassConfigComponent;
  let fixture: ComponentFixture<ClassConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassConfigComponent]
    });
    fixture = TestBed.createComponent(ClassConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
