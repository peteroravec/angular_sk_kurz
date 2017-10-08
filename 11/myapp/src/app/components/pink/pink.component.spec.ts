import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkComponent } from './pink.component';

describe('PinkComponent', () => {
  let component: PinkComponent;
  let fixture: ComponentFixture<PinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
