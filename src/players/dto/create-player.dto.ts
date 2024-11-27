import { IsInt, IsString, IsDateString, IsNotEmpty, Min } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(0)
  goalCount: number;

  @IsDateString()
  birthDate: string;

  @IsInt()
  @Min(1)
  teamId: number;
}
