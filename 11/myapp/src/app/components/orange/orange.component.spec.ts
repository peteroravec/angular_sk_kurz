import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeComponent } from './orange.component';

describe('OrangeComponent', () => {
  let component: OrangeComponent;
  let fixture: ComponentFixture<OrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
