import { Injectable } from '@nestjs/common';
import { CreateInfoGeneralDto } from './dto/create-info-general.dto';
import { UpdateInfoGeneralDto } from './dto/update-info-general.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfoGeneral } from './entities/info-general.entity';

@Injectable()
export class InfoGeneralService {

  constructor(@InjectRepository(InfoGeneral)
  private infoRepository: Repository<InfoGeneral>
  ){}
/*
  create(createInfoGeneralDto: CreateInfoGeneralDto) {
    return 'This action adds a new infoGeneral';
  }*/

  findAll() {
    return this.infoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} infoGeneral`;
  }

  update(id: number, updateInfoGeneralDto: UpdateInfoGeneralDto) {
    return `This action updates a #${id} infoGeneral`;
  }

  remove(id: number) {
    return `This action removes a #${id} infoGeneral`;
  }
}
