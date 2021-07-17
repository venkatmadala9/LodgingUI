import { Component, OnInit } from '@angular/core';
import { RestService, Hotel } from '../../../../rest.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel!: Hotel;

  constructor(public rest: RestService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.rest.getHotelDetails(this.route.snapshot.params.id).subscribe(
      (data: Hotel) => this.hotel = {...data}
    );
  }

}
