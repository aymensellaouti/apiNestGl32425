import { PartialType } from '@nestjs/mapped-types';
import { AddPersonDto } from './add-person.dto';

export class UpdatePersonDto extends PartialType(AddPersonDto) {}
