import { Component, Input} from '@angular/core';
import { User } from '../../model/user';
import { UserCollectionService } from '../../services/user/user.collection/user.collection.service';




@Component({
  selector: 'user-collection',
  templateUrl: 'user.collection.html',
})
export class UserCollection {
  @Input() user: User;
  userCollection: Array<User>;
  constructor(UserCollectionService: UserCollectionService) {

    this.userCollection = UserCollectionService.getUserCollection();

    
  }

  ngOnInit() {
  }

}
