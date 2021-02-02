import { Test, TestingModule } from '@nestjs/testing';
import { CinemaResolver } from './cinema.resolver';

describe('CinemaResolver', () => {
  let resolver: CinemaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CinemaResolver],
    }).compile();

    resolver = module.get<CinemaResolver>(CinemaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
