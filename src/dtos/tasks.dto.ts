import { IsString, IsNotEmpty, IsBoolean, MaxLength } from 'class-validator';

export class CreateTasksDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  public title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  public description: string;
}

export class UpdateTasksDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  public title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  public description: string;

  @IsBoolean()
  public isCompleted: boolean;
}
