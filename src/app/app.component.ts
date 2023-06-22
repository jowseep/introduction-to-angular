import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingLocationService } from './services/housing-location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HousingLocationService]
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [];

  constructor(private housingLocationService: HousingLocationService, private router: Router) {}

  ngOnInit(): void {
    this.housingLocationList = this.housingLocationService.getHousingLocations();
  }
  
  updateSelectedLocation(location: HousingLocation) {
    const locationId: string = location.id;
    this.router.navigate(['housing-result', locationId]);
  }


}
