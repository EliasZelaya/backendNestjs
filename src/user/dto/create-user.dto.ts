import { IsNotEmpty, Length, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @Length(4, 16)
  readonly name: string;

  @IsNotEmpty()
  @Length(4, 16)
  readonly lastName: string;

  @IsNotEmpty()
  @Length(10, 24)
  readonly email: string;

  @IsNotEmpty()
  @MinLength(5)
  readonly password: string;
}