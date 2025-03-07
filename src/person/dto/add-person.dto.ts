import { Type } from 'class-transformer';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class AddPersonDto {
  @IsString()
  @MinLength(5)
  name: string;
  @IsNumber()
  @Type(() => Number)
  age: number;
}
