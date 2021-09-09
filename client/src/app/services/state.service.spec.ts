import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Role } from '../models/role.enum';
import { Tag } from '../models/tag.enum';
import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  let route: ActivatedRoute;

  const mockParams = {
    role: Role.HQ,
    tag: Tag.data,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of(mockParams),
          },
        },
      ],
    });
    route = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the "role"-filter to the predefined value', () => {
    expect(service.filters.role).toBe(Role.HQ);
  });

  it('should set the "tag"-filter to the predefined value', () => {
    expect(service.filters.tag).toBe(Tag.data);
  });
});
