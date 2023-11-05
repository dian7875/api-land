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

  create(createInfoGeneralDto: CreateInfoGeneralDto) {
    var addedInfo = this.infoRepository.create(createInfoGeneralDto);
    this.infoRepository.save(addedInfo);
    return addedInfo;
  }

  findAll() {
    return this.infoRepository.find();
  }

  findOne(id: number) {
    return this.infoRepository.findOneBy({id});
  }

  async update(id: number, updateInfoGeneralDto: UpdateInfoGeneralDto) {
    var updateInfo = await this.infoRepository.update({id},updateInfoGeneralDto);
    return updateInfo;
  }

  remove(id: number) {
    return this.infoRepository.delete(id);
  }
}
