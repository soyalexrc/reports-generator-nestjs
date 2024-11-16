import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { employees, PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer/printer.service';
import { getCountryReport, getHelloWorldReport } from '../reports';
import {
  getEmploymentLetterReport,
  getEmploymentLetterByIdReport,
} from '../reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Connected to the database');
  }

  async hello(): Promise<employees[]> {
    return this.employees.findMany();
  }

  helloWorld() {
    const docDefinition = getHelloWorldReport();
    return this.printerService.createPdf(docDefinition);
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetterReport();
    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async employmentLetterById(employeeId: number) {
    const employee = await this.employees.findUnique({
      where: { id: employeeId },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const docDefinition = getEmploymentLetterByIdReport({
      employerName: 'Alex Rodriguez',
      employerPosition: 'CTO',
      employeeHours: employee.hours_per_day,
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'Solumina Tech',
    });
    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async getCountries() {
    const countries = await this.countries.findMany({
      where: {
        local_name: {
          not: null,
        },
      },
    });

    const docDefinition = getCountryReport({ countries });

    return this.printerService.createPdf(docDefinition);
  }
}
