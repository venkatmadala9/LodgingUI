import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, Routes } from '@angular/router';
import { HotelComponent } from '../components/hotel/hotel/hotel.component'; 
import { HotelDetailsComponent } from '../components/hotel/sections/hotel-details/hotel-details.component';
import { HotelAddComponent } from '../components/hotel/sections/hotel-add/hotel-add.component';
import { HotelDeleteComponent } from '../components/hotel/sections/hotel-delete/hotel-delete.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: HotelComponent,
    data: {title: 'Hotels List'}
  },
  {
    path: 'hotels/detail/:id',
    component: HotelDetailsComponent,
    data: {title: 'Hotel Details'}
  },
  {
    path: 'hotels/add',
    component: HotelAddComponent,
    data: {title: 'Add Hotel'}

  },
  {
    path: 'hotels/delete/:id',
    component: HotelDeleteComponent,
    data: {title: 'Hotel Delete'}
  },
  { path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  }
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
