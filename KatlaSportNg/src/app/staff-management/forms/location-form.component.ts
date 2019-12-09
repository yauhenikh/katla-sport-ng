import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {

  location = new Location(0, "", "", "", "");
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.locationService.getLocation(p['id']).subscribe(l => this.location = l);
      this.existed = true;
    });
  }

  navigateToLocations() {
    this.router.navigate(['/locations']);
  }

  onCancel() {
    this.navigateToLocations();
  }

  onSubmit() {
    if (this.existed) {
      this.locationService.updateLocation(this.location).subscribe(l => this.navigateToLocations());
    } else {
      this.locationService.addLocation(this.location).subscribe(l => this.navigateToLocations());
    }
  }

  onPurge() {
    this.locationService.deleteLocation(this.location.id).subscribe(h => this.navigateToLocations());
  }
}
