import {Component} from '@angular/core';
import { Car } from '../../model/car';
import { CarService } from '../../services/car/car/car.service';



@Component({
    selector: 'car-form',
    templateUrl: 'car.form.html'
})
export class CarForm {
    private car: Car;
    private CarService: CarService;

    constructor(CarService: CarService) {
        this.CarService = CarService;
        this.resetCar();
    }

    resetCar() {
        this.car = this.CarService.createNewCar();
    }

  createCar() {
    
      this.CarService.addCarToCarCollection(this.car);
        this.resetCar();
    }
}
