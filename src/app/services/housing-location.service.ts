import { Injectable } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Injectable({
  providedIn: 'root'
})

export class HousingLocationService {
  private housingLocationList: HousingLocation[] = [
    {
      id: '1',
      name: "Joseph Fresh Start Housing",
      city: "Davao",
      state: "Davao",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: '2',
      name: "Shai Transitional Housing",
      city: "Dulag",
      state: "Leyte",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: '3',
      name: "Nard Beds Housing Support",
      city: "Cebu",
      state: "Cebu",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  getHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationsById(id: string): HousingLocation | undefined {
    return this.housingLocationList.find(location => location.id===id);
  }
}