import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetParamsComponent } from './get-params.component';

describe('GetParamsComponent', () => {
  let component: GetParamsComponent;
  let fixture: ComponentFixture<GetParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
