import { Controller, Get } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { employees } from '@prisma/client';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  async hello(): Promise<employees[]> {
    return this.basicReportsService.hello();
  }
}
