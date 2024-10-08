import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { SetMetadata } from '@nestjs/common';
require('dotenv').config();

@Module({
	imports: [
		UsersModule,
		JwtModule.register({
			global: true,
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '60s' }, //This value should be modified depending on website needs
		}),
	],
	providers: [AuthService],
	controllers: [AuthController],
	exports: [AuthService],
})
export class AuthModule {}
