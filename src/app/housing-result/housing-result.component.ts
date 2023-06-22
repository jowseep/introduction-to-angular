import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationService } from '../services/housing-location.service';

@Component({
  selector: 'app-housing-result',
  templateUrl: './housing-result.component.html',
  styleUrls: ['./housing-result.component.css']
})
export class HousingResultComponent{

  selectedLocation: HousingLocation | undefined;

  constructor(private route: ActivatedRoute, private housingLocationService: HousingLocationService) {};

   ngOnInit(): void {
    const locationId = this.route.snapshot.paramMap.get('id');
    if(locationId!==null) {
      this.selectedLocation = this.housingLocationService.getHousingLocationsById(locationId);
    }
  }

}
