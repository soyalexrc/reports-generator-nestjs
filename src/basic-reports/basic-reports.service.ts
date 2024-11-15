import { Injectable, OnModuleInit } from '@nestjs/common';
import { employees, PrismaClient } from '@prisma/client';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('Connected to the database');
  }

  async hello(): Promise<employees[]> {
    return this.employees.findMany();
  }
}
