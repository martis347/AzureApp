import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
  constructor() {  }

  static getAllUsers(): User[]{
    const result: User[] = [{
      firstName: 'Martynas',
      lastName: 'Kanapinskas',
      id: 1
    }, {
      firstName: 'Tomas',
      lastName: 'Dabašinskas',
      id: 2
    }, {
      firstName: 'John',
      lastName: 'Doe',
      id: 3
    }];

    return result;
  }
}

interface User {
  firstName: string;
  lastName: string;
  id: number;
}
