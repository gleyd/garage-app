import { Injectable} from '@angular/core';
import { Car } from '../../../model/car';






@Injectable()
export class CarCollectionService {
  public carCollection: Array<Car>;
  public carByUserIdCollection: Array<Car>; 

  constructor() {
   
    this.carCollection = [];
    this.getCarCollection();
    this.carByUserIdCollection = [];
  }

  /**
   * 
   */
  getCarCollection(): Array<Car> {
    return this.carCollection = [

      new Car(1, 1, "peugeot", "206", "90ch 2L hdi",2005,"BF-205-YG","/image/cartegrise"),
      new Car(1, 1, "renault", "207", "85ch 5L hdi", 2006, "AR-255-FF", "/image/cartegrise"),
      new Car(1, 2, "peugeot", "208", "77ch 4L hdi", 2007, "DC-789-CC", "/image/cartegrise"),    
      new Car(1, 2, "renault", "209", "69ch 3L hdi", 2008, "KO-755-JK", "/image/cartegrise")
    ];

    
  }

  getCarCollectionByUserId(UserID) {

    for (let car of this.carCollection) {
      if (car.user_id == UserID)

        this.carByUserIdCollection.push(car);
    }
    return this.carByUserIdCollection;
  }


  /**
   * 
   */
  addCarToCarCollection(car: Car): any {
    this.carCollection.unshift(car);
   
  }

  
}
