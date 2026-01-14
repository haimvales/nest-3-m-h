import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/first')
  loginFirst(@Body() loginDto: LoginDto) {
    return this.authService.loginFirst(loginDto);
  }
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    
    return this.authService.register(registerDto);
  }
  


  
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Body() Body) {
    return Body.user; 
  }
}



// import { Controller, Get } from '@nestjs/common';

// @Controller('auth')
// export class AuthController {

//   @Get('ping')
//   ping() {
//     return 'auth alive';
//   }

// }


