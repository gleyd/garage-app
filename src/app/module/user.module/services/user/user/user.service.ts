import { Injectable } from '@angular/core';
import { UserCollectionService } from '../user.collection/user.collection.service';
import { User } from '../../../model/user';



@Injectable()
export class UserService {
  public UserCollectionService: UserCollectionService;

  constructor(UserCollectionService: UserCollectionService) {
    this.UserCollectionService = UserCollectionService;
  }

  /**
   * 
   */
  addUserToUserCollection(user: User): void {
    this.UserCollectionService.addUserToUserCollection(user);
  }

  /**
   * 
   */
  createNewUser(): User {
    return new User(null, null, null, null, null);
  }

}
