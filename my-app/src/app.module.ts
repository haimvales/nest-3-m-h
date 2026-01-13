import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { AuthMiddleware } from './auth/middlewares/auth.middleware';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [AppController],
  imports: [
    AuthModule,
    UsersModule,
    ShiftsModule,
    AssignmentsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('auth')
      .forRoutes('(.*)');
  }
}

