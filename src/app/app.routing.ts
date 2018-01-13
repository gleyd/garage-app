import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './module/user.module/users/users.component';
import { CarsComponent } from './module/car.module/car/cars.component';
import { UsercarComponent } from './usercar/usercar.component';


const routes: Routes = [
  
  { path: 'users', component: UsersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'usercars', component: UsercarComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
