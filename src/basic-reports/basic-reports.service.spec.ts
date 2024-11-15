import { Test, TestingModule } from '@nestjs/testing';
import { BasicReportsService } from './basic-reports.service';

describe('BasicReportsService', () => {
  let service: BasicReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicReportsService],
    }).compile();

    service = module.get<BasicReportsService>(BasicReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
