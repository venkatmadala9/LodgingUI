import { Component, OnInit } from '@angular/core';
import { RestService, Hotel } from '../../../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(
    public rest:RestService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void
  {
    this.rest.getHotels().subscribe((resp: any) => 
    {
      this.hotels = resp;
      console.log(this.hotels);
    })
  }

  addHotel(): void {
    this.router.navigate(['hotels/add']);
  }

  delete(id: string): void {
    this.rest.deleteHotel(id)
      .subscribe(() => {
          this.getHotels();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
