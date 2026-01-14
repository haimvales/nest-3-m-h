import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { AuthMiddleware } from './auth/middlewares/auth.middleware';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service'
import { JwtService } from '@nestjs/jwt';


@Module({
  providers: [AuthService, JwtService],
  controllers: [AppController, AuthController],
  imports: [
    AuthModule,
    UsersModule,
    ShiftsModule,
    AssignmentsModule,
  ],
})
export class AppModule {
  // constructor(private readonly authController: AuthController) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      // .exclude('auth')
      //   .forRoutes({
      //   path: 'auth/register',
      //   method: RequestMethod.POST,
      // })
      .forRoutes('auth/register');
  }

}

