import {
  Controller,
  Post,
  Body, Get, Param, Delete, Put
} from "@nestjs/common";
import { AppService } from './app.service';
import {CreateUserDto} from './dtos/users.dto'

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService,) {

  }

  @Get('/user')
  getAllUsers(){
    return this.appService.findAllUsers()

  }

  @Get('/user/:id')
  getUserById(@Param('id') id: string){
  return this.appService.findOneUser(id)
  }

  @Post('post')
  createUser(@Body() body: CreateUserDto){
    return this.appService.createUser(body)
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') id: string){
    return this.appService.deleteUser(id)
  }

  @Put('/post/:id')
  updateUser(@Param('id') id: string, @Body() body: any){
    return this.appService.updateUser(id, body)
  }




}