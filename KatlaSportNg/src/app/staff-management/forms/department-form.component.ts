import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';
import { LocationListItem } from '../models/location-list-item';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  department = new Department(0, "", "", 0);
  existed = false;
  locationId: number;
  locations: LocationListItem[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(l => this.locations = l);
    this.route.params.subscribe(p => {
      this.locationId = p['locationId'];
      if (p['id'] === undefined) return;
      this.departmentService.getDepartment(p['id']).subscribe(d => this.department = d);
      this.existed = true;
    });
  }

  navigateTo() {
    if (this.locationId === undefined) {
      this.router.navigate(['/departments']);
    } else {
      this.router.navigate([`/location/${this.locationId}/departments`]);
    }
  }

  onCancel() {
    this.navigateTo();
  }

  onSubmit() {
    if (this.existed) {
      this.departmentService.updateDepartment(this.department).subscribe(d => this.navigateTo());
    } else {
      this.departmentService.addDepartment(this.department).subscribe(d => this.navigateTo());
    }
  }

  onPurge() {
    this.departmentService.deleteDepartment(this.department.id).subscribe(d => this.navigateTo());
  }
}
