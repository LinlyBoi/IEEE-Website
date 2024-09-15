import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SkipAuth } from './decorators/skipauth.decorator';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@SkipAuth()
	@HttpCode(HttpStatus.OK)
	@Post('login')
	signIn(@Body() signInDto: Record<string, any>) {
		return this.authService.signIn(signInDto.username, signInDto.password);
	}

	@Get('profile') //This is just for testing
	getProfile(@Request() req: any) {
		return req.user;
	}
}
