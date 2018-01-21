import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './module/user.module/user.module';
import { routing } from './app.routing';
import { CarModule } from './module/car.module/car.module';
import { UsercarComponent } from './usercar/usercar.component';
import { CarsOfUser } from './usercar/carsofuser/carsofuser';




@NgModule({
  declarations: [
    AppComponent,
    UsercarComponent,
    CarsOfUser,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    CarModule,
    routing,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
