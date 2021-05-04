import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../io/repository/user.repository';

@Injectable()
export class AppService {
  constructor(private usersRepository: UsersRepository) {}

  getHello(): string {
    this.usersRepository.create({
      firstName: 'FirstName',
      lastName: 'LastName',
    });

    return 'Hello World!';
  }
}
