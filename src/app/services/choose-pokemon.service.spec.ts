import { TestBed } from '@angular/core/testing';

import { ChoosePokemonService } from './choose-pokemon.service';

describe('ChoosePokemonService', () => {
  let service: ChoosePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoosePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
