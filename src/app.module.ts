import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from './services/services.module';
import { InfoGeneralModule } from './info-general/info-general.module';
import { GaleryModule } from './galery/galery.module';


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

      ServicesModule,
      InfoGeneralModule,
      GaleryModule,
     

    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
