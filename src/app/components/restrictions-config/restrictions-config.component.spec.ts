import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictionsConfigComponent } from './restrictions-config.component';

describe('RestrictionsConfigComponent', () => {
  let component: RestrictionsConfigComponent;
  let fixture: ComponentFixture<RestrictionsConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrictionsConfigComponent]
    });
    fixture = TestBed.createComponent(RestrictionsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
