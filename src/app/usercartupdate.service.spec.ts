import { TestBed } from '@angular/core/testing';

import { UsercartupdateService } from './usercartupdate.service';

describe('UsercartupdateService', () => {
  let service: UsercartupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercartupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
