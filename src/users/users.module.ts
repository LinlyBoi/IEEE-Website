import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { AuthGuard } from './'
import { APP_GUARD } from '@nestjs/core';
@Module({
	providers: [
		UsersResolver,
		UsersService,
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
						 ],
	exports: [UsersService],
})
export class UsersModule {}
