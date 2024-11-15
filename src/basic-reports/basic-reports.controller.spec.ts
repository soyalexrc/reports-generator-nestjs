import { Test, TestingModule } from '@nestjs/testing';
import { BasicReportsController } from './basic-reports.controller';
import { BasicReportsService } from './basic-reports.service';

describe('BasicReportsController', () => {
  let controller: BasicReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasicReportsController],
      providers: [BasicReportsService],
    }).compile();

    controller = module.get<BasicReportsController>(BasicReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
