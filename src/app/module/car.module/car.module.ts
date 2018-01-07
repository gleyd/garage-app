import { CarForm } from "./forms/car.form/car.form";
import { CarCollection } from "./templates/car.collection/car.collection";
import { CarsComponent } from "./car/cars.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CarService } from "./services/car/car/car.service";
import { CarCollectionService } from "./services/car/car.collection/car.collection.service";
import { NgModule } from "@angular/core";







@NgModule({
  declarations: [

    CarForm,
    CarCollection,
    CarsComponent,

  ],
  exports: [CarsComponent],
  imports: [CommonModule,FormsModule],
  providers: [CarService, CarCollectionService],
 
})
export class CarModule { }
