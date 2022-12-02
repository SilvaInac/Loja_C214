import { Test, TestingModule } from '@nestjs/testing';
import { ShoeServices } from './shoe.services';

describe('ShoeServices', () => {
  let provider: ShoeServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoeServices],
    }).compile();

    provider = module.get<ShoeServices>(ShoeServices);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
