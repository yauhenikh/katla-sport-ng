import { Component, OnInit } from '@angular/core';
import { LocationListItem } from '../models/location-list-item';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations: LocationListItem[];

  constructor(private locationService : LocationService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locationService.getLocations().subscribe(l => this.locations = l);
  }

}
