import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
	@Field(type => Int, {description: 'id of user'})
	userId: number;

	@Field({ nullable: false })
	name: string;

	@Field({ nullable: false })
	password: string;
}
