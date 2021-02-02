import { Test, TestingModule } from '@nestjs/testing';
import { ShowsResolver } from './shows.resolver';

describe('ShowsResolver', () => {
  let resolver: ShowsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowsResolver],
    }).compile();

    resolver = module.get<ShowsResolver>(ShowsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
