import { Injectable } from '@angular/core';
import { CarCollectionService } from '../car.collection/car.collection.service';
import { Car } from '../../../model/car';




@Injectable()
export class CarService {
  public CarCollectionService: CarCollectionService;

  constructor(CarCollectionService: CarCollectionService) {
    this.CarCollectionService = CarCollectionService;
  }

  /**
   * 
   */
  addCarToCarCollection(car: Car): void {
    this.CarCollectionService.addCarToCarCollection(car);
  }

  /**
   * 
   */
  createNewCar(): Car {
    return new Car(null, null, null, null, null, null, null, null);
  }

}
