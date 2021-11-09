import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { ProgramDataService } from './program-data.service';

describe('ProgramDataService', () => {
  let service: ProgramDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ApiService, AuthService],
    });
    service = TestBed.inject(ProgramDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
