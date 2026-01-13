import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {usersService.findAll()}
  
  login(loginDto: LoginDto) {
    return {
      accessToken: 'fake-jwt-token',
      name: loginDto.name,
      role: 'soldier',
    };
  }

  register(registerDto: RegisterDto) {
    let len = this.usersService.findAll().length;
    this.usersService.create({id:len += 1,name:registerDto.name,role:registerDto.role})
    return {
    id:len += 1,name:registerDto.name,role:registerDto.role
    };
  }
}





