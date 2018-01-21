import { Component, OnInit, Input } from '@angular/core';
import { UserCollectionService } from '../module/user.module/services/user/user.collection/user.collection.service';
import { User } from '../module/user.module/model/user';
import { Car } from '../module/car.module/model/car';
import { CarCollectionService } from '../module/car.module/services/car/car.collection/car.collection.service';

@Component({
  selector: 'app-usercar',
  templateUrl: './usercar.component.html',
  styleUrls: ['./usercar.component.css']
})
export class UsercarComponent implements OnInit {

  user: User;
  userCollection: Array<User>;

  car: Car;
  carCollection: Array<Car>;

  constructor(UserCollectionService: UserCollectionService, CarCollectionService: CarCollectionService) {

    this.userCollection = UserCollectionService.getUserCollection();
    this.carCollection = CarCollectionService.getCarCollectionByUserId(1);
    console.log(this.carCollection);
  }


  ngOnInit() {
  }

}
