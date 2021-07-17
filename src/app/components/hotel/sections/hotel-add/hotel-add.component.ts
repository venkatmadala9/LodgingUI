import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../../../rest.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'create-hotel',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
  @Output() add: EventEmitter<any> = new EventEmitter();
  hotelForm = new FormGroup(
    {
      name: new FormControl('Swagath'),
      hotelRooms: new FormControl('2'),
      hotelNumber: new FormControl('205'),
      facilityCode: new FormControl('52646'),
      address: new FormGroup(
        {
          street: new FormControl('Kukatpally'),
          city: new FormControl('Hyderabad'),
          state: new FormControl('Telangana'),
          zipcode: new FormControl('500090'),
        }
      )
    }
  );

  /** @Input() hotelData = {
                        name: '',
                        address: '',
                        hotelNumber: '',
                        hotelRooms: '',
                        facilityCode: ''
                        };*/

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.hotelForm.value);
    this.addHotel(this.hotelForm.value);
  }

  addHotel(hotelForm: any): void {
    this.add.emit(hotelForm);
  }
}
