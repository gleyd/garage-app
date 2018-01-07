import { Injectable} from '@angular/core';
import { User } from '../../../model/user';





@Injectable()
export class UserCollectionService {
  public userCollection: Array<User>;
  

  constructor() {
   
    this.userCollection = [];
    this.getUserCollection();
    
  }

  /**
   * 
   */
  getUserCollection():Array<User> {
    return this.userCollection = [new User(1, "jean", "torres", "06855542", "torres@gmail.com"),
                             new User(2, "jean", "torres", "06855542", "torres@gmail.com"),
                             new User(3, "jean", "torres", "06855542", "torres@gmail.com")];

    
  }

  /**
   * 
   */
  addUserToUserCollection(user: User): any {
    this.userCollection.unshift(user);
   
  }

  
}
