import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [{
    id: 1,
    name: 'חייל א׳',
    role: 'soldier',
    idPassword: '273',
    token:"22"
  }];
  
  private user: User = {
    id: 2,
    name: 'חייל א׳',
    role: 'soldier',
    idPassword: '999',
    token:"dd"
  };

  create(user: User) {
    this.users.push(user);
    return user;
  }
  findAll(): User[] {
    return this.users;
  }  
  findByIdAndPasswordId(userId,passwordId): User|undefined {
    const user = this.users.find(user => user.id === Number(userId) && user.idPassword === passwordId)
    return user;
  }
  findById(userId): User|undefined {
    const user = this.users.find(user => user.id === Number(userId))
    return user;
  }
  getMe() {
    return {
      id: this.user.id,
      name: this.user.name,
      role: this.user.role,
    };
  }
}


  




  // getLength(){
  //   return this.users.length + 1
  // }
  // addRole(password){
  //   if(password === 1234)
  //       return `ch`
  //   if(password === 2468)
  //       return `me`
  //   else
  //       return `kl`
  // }


