
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}
// usersService.findAll()

  loginFirst(loginDto: LoginDto) {
    const user = this.usersService.findByIdAndPasswordId(loginDto.id,loginDto.idPassword);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const payload = { id: user.id, name: user.name, role: user.role };
    const secret = jwtConstants.secret
    const token = this.jwtService.sign(payload,{secret:secret})

    return {
      accessToken: token,
      user,
    };
  }
//   sign<T extends object = any>(payload: T, options?: JwtSignOptions): string;//
// verify<T extends object = any>(token: string, options?: JwtVerifyOptions): T;//
  login(loginDto: LoginDto) {
    const user = this.usersService.findById(loginDto.id);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const payload = { id: user.id, name: user.name, role: user.role };
    const secret = jwtConstants.secret
    const token = this.jwtService.verify(user.token,{secret:secret})
    console.log(token)
    return {
      accessToken: token,
      user,
    };
  }
  
    register(registerDto: RegisterDto) {
    let len = this.usersService.findAll().length;

    const user = {
      id:len + 1,
      name: registerDto.name,
      role: registerDto.role,
      idPassword: registerDto.idPassword
    }
    const payload = { id: user.id, name: user.name, role: user.role };
    let token = this.jwtService.sign(payload,{secret:jwtConstants.secret})
    const newUser = {
      id:len += 1,
      name: registerDto.name,
      role: registerDto.role,
      idPassword: registerDto.idPassword,
      token: token
    }
    this.usersService.create(newUser);
    return newUser;
  }
}



