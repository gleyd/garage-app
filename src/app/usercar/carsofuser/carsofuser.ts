import { Component, Input, OnInit } from "@angular/core";
import { User } from "../../module/user.module/model/user";
import { Car } from "../../module/car.module/model/car";
import { CarCollectionService } from "../../module/car.module/services/car/car.collection/car.collection.service";








@Component({
  selector: 'carsofuser',
  templateUrl: './carsofuser.html',
  styleUrls: ['./carsofuser.css']
})
export class CarsOfUser implements OnInit{

  @Input() user: User;
  carCollection: Array<Car>;
  CarCollectionService : CarCollectionService;
 
  getCarsOfUser(userID) {

    this.carCollection = CarCollectionService.getCarCollectionByUserId(1);
  }

  ngOnInit() {

    this.getCarsOfUser(this.user.id);
    
  }

}
