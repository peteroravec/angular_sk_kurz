import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOutletsComponent } from './multiple-outlets.component';

describe('MultipleOutletsComponent', () => {
  let component: MultipleOutletsComponent;
  let fixture: ComponentFixture<MultipleOutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleOutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
