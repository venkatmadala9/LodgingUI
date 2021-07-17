import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/hotel/hotel.component';
import { HotelDetailsComponent } from './components/hotel/sections/hotel-details/hotel-details.component';
import { HotelAddComponent } from './components/hotel/sections/hotel-add/hotel-add.component';
import { HotelDeleteComponent } from './components/hotel/sections/hotel-delete/hotel-delete.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelDetailsComponent,
    HotelAddComponent,
    HotelDeleteComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
