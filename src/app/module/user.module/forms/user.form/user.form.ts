import {Component} from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user/user/user.service';



@Component({
    selector: 'user-form',
    templateUrl: 'user.form.html'
})
export class UserForm {
    private user: User;
    private UserService: UserService;

    constructor(UserService: UserService) {
        this.UserService = UserService;
        this.resetUser();
    }

    resetUser() {
        this.user = this.UserService.createNewUser();
    }

  createUser() {
    
      this.UserService.addUserToUserCollection(this.user);
        this.resetUser();
    }
}
