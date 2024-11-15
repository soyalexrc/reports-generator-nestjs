import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BasicReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
