import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentListItem } from '../models/department-list-item';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-department-location-list',
  templateUrl: './department-location-list.component.html',
  styleUrls: ['./department-location-list.component.css']
})
export class DepartmentLocationListComponent implements OnInit {

  locationId: number;
  departments: DepartmentListItem[];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.locationId = p['id'];
      this.locationService.getDepartments(p['id']).subscribe(d => this.departments = d);
    });
  }

}
