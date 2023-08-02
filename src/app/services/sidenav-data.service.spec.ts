import { TestBed } from '@angular/core/testing';

import { SidenavDataService } from './sidenav-data.service';

describe('SidenavDataService', () => {
  let service: SidenavDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
