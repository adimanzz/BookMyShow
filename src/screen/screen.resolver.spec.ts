import { Test, TestingModule } from '@nestjs/testing';
import { ScreenResolver } from './screen.resolver';

describe('ScreenResolver', () => {
  let resolver: ScreenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScreenResolver],
    }).compile();

    resolver = module.get<ScreenResolver>(ScreenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
