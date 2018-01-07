import { Component, Input} from '@angular/core';
import { Car } from '../../model/car';
import { CarCollectionService } from '../../services/car/car.collection/car.collection.service';




@Component({
  selector: 'car-collection',
  templateUrl: 'car.collection.html',
})
export class CarCollection {
  @Input() car: Car;
  carCollection: Array<Car>;
  constructor(CarCollectionService: CarCollectionService) {

    this.carCollection = CarCollectionService.getCarCollection();

    
  }

  ngOnInit() {
  }

}
