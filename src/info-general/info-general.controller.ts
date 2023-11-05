

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfoGeneralService } from './info-general.service';
import { CreateInfoGeneralDto } from './dto/create-info-general.dto';
import { UpdateInfoGeneralDto } from './dto/update-info-general.dto';

@Controller('info-general')
export class InfoGeneralController {
  constructor(private readonly infoGeneralService: InfoGeneralService) {}

  @Post()
  create(@Body() createInfoGeneralDto: CreateInfoGeneralDto) {
    return this.infoGeneralService.create(createInfoGeneralDto);
  }

  @Get()
  findAll() {
    return this.infoGeneralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.infoGeneralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInfoGeneralDto: UpdateInfoGeneralDto) {
    return this.infoGeneralService.update(+id, updateInfoGeneralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.infoGeneralService.remove(+id)
    
  }
  
}
