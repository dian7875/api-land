import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoGeneralDto } from './create-info-general.dto';

export class UpdateInfoGeneralDto extends PartialType(CreateInfoGeneralDto) {}
