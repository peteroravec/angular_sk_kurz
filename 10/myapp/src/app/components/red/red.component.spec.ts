import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedComponent } from './red.component';

describe('RedComponent', () => {
  let component: RedComponent;
  let fixture: ComponentFixture<RedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
