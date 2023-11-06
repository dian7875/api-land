import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository (Photo)
  private PhotoRepository: Repository<Photo>
  ){}
  create(createPhotoDto: CreatePhotoDto) {
  var addedPhoto = this.PhotoRepository.create(createPhotoDto)
  this.PhotoRepository.save(addedPhoto);
  return addedPhoto;

  }

  findAll() {
    return this.PhotoRepository.find();
  }

  findOne(id: number) {
    return this.PhotoRepository.findOne({where:{id},relations:['galery']});
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    var updateGaleryDto = await this.PhotoRepository.update({id},updatePhotoDto)
    return updatePhotoDto;
  }

  remove(id: number) {
    return this.PhotoRepository.delete(id);
  }
}
