import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SetMetadata } from '@nestjs/common';


async function bootstrap() {
	require('dotenv').config();
	export const IS_PUBLIC_KEY = 'isPublic';
	export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
