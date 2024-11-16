import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { ConfigModule } from '@nestjs/config';
import { PrinterModule } from './printer/printer.module';
import { StoreReportsModule } from './store-reports/store-reports.module';
import { ExtraReportsModule } from './extra-reports/extra-reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BasicReportsModule,
    PrinterModule,
    StoreReportsModule,
    ExtraReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
