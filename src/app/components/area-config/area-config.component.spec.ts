import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaConfigComponent } from './area-config.component';

describe('AreaConfigComponent', () => {
  let component: AreaConfigComponent;
  let fixture: ComponentFixture<AreaConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaConfigComponent]
    });
    fixture = TestBed.createComponent(AreaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
