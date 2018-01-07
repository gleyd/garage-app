import { UserService } from "./services/user/user/user.service";
import { UserCollectionService } from "./services/user/user.collection/user.collection.service";
import { FormsModule } from "@angular/forms";
import { UserCollection } from "./templates/user.collection/user.collection";
import { UserForm } from "./forms/user.form/user.form";
import { NgModule } from "@angular/core";
import { UsersComponent } from './users/users.component';
import { CommonModule } from "@angular/common";





@NgModule({
  declarations: [

    UserForm,
    UserCollection,
    UsersComponent,

  ],
  exports: [UsersComponent],
  imports: [CommonModule,FormsModule],
  providers: [UserService, UserCollectionService],
 
})
export class UserModule { }
