import { Test, TestingModule } from '@nestjs/testing';
import { ExtraReportsController } from './extra-reports.controller';
import { ExtraReportsService } from './extra-reports.service';

describe('ExtraReportsController', () => {
  let controller: ExtraReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtraReportsController],
      providers: [ExtraReportsService],
    }).compile();

    controller = module.get<ExtraReportsController>(ExtraReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
