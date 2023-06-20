import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: "Joseph Fresh Start Housing",
      city: "Davao",
      state: "Davao",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "Shai Transitional Housing",
      city: "Dulag",
      state: "Leyte",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Nard Beds Housing Support",
      city: "Cebu",
      state: "Cebu",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];
}
