import { Test, TestingModule } from '@nestjs/testing';
import { ExtraReportsService } from './extra-reports.service';

describe('ExtraReportsService', () => {
  let service: ExtraReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtraReportsService],
    }).compile();

    service = module.get<ExtraReportsService>(ExtraReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
