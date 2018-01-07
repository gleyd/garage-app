import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './module/user.module/users/users.component';
import { CarsComponent } from './module/car.module/car/cars.component';


const routes: Routes = [
  
  { path: 'users', component: UsersComponent },
  { path: 'cars', component: CarsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
