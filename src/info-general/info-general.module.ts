import { Module } from '@nestjs/common';
import { InfoGeneralService } from './info-general.service';
import { InfoGeneralController } from './info-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoGeneral } from './entities/info-general.entity';

@Module({
  imports:[TypeOrmModule.forFeature([InfoGeneral])],
  controllers: [InfoGeneralController],
  providers: [InfoGeneralService],
})
export class InfoGeneralModule {}
