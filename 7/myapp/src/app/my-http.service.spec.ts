import { TestBed, inject } from '@angular/core/testing';

import { MyHttpService } from './my-http.service';

describe('MyHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHttpService]
    });
  });

  it('should be created', inject([MyHttpService], (service: MyHttpService) => {
    expect(service).toBeTruthy();
  }));
});
