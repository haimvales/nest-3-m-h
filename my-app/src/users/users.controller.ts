import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ParamsTokenFactory } from '@nestjs/core/pipes';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getMe() {
    return this.usersService.getMe();
  }
  @Get('all')
  findAll(){
    return this.usersService.findAll()
  }
  @Get(':id')
  findById(@Param() userId){
    return this.usersService.findById(userId.id)
  }
}



