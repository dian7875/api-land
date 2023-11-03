import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoGeneralModule } from './info-general/info-general.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password:'root',
        database:'companyryc',
        autoLoadEntities: true,
        synchronize: true
      }),
      InfoGeneralModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
