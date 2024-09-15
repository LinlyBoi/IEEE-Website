import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
	//#TODO THIS SHOULD BE A DATABASE LOL
	private readonly users = [
		{
			userId: 1,
			username: 'john',
			password: 'changeme',
		},
		{
			userId: 2,
			username: 'maria',
			password: 'guess', //GUESS GUESS GUESS GUESS
		},
	];

	create(createUserInput: CreateUserInput) {
		return 'This action adds a new user';
	}
	findAll() {
		return `This action returns all users`;
	}

	findOne(username: string) {
		return this.users.find(user => user.username === username);
	}

	update(id: number, updateUserInput: UpdateUserInput) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
