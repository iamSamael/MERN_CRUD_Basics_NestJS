import {IsNumber, IsString, IsEmail, IsPositive, IsNotEmpty} from "class-validator"



export class CreateUserDto{
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  age: number

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string
}