import { Injectable } from '@nestjs/common';
import { CreateGaleryDto } from './dto/create-galery.dto';
import { UpdateGaleryDto } from './dto/update-galery.dto';
import { Galery } from './entities/galery.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GaleryService {
  constructor(
    @InjectRepository(Galery)
    private GaleryRepository: Repository<Galery>

  ){}
  create(createGaleryDto: CreateGaleryDto) {
    var addedGalery = this.GaleryRepository.create(createGaleryDto);
    this.GaleryRepository.save(addedGalery);
    return addedGalery;
  }

  findAll() {
    return this.GaleryRepository.find();
  }

  findOne(id: number) {
   return this.GaleryRepository.findOne({where:{id}, relations:['photos']});
  }

  async update(id: number, updateGaleryDto: UpdateGaleryDto) {
  var updatedServiceDto = await this.GaleryRepository.update({ id }, updateGaleryDto)
    return updatedServiceDto;
  }

  remove(id: number) {
    return this.GaleryRepository.delete(id);
  }
}
