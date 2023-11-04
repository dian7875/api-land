import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private ServiceRepository: Repository<Service>,
  ) { }
  create(createServiceDto: CreateServiceDto) {
    var addedService = this.ServiceRepository.create(createServiceDto);
    this.ServiceRepository.save(addedService);
    return addedService;

  }

  findAll() {
    return this.ServiceRepository.find();
  }

  findOne(id: number) {
    return this.ServiceRepository.findOneBy({ id });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    var updatedServiceDto = await this.ServiceRepository.update({ id }, updateServiceDto)
    return updatedServiceDto;
  }

  remove(id: number) {
    return this.ServiceRepository.delete(id);
  }
}