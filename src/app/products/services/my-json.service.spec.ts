import { TestBed } from '@angular/core/testing';

import { MyJsonService } from './my-json.service';

describe('MyJsonService', () => {
  let service: MyJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
