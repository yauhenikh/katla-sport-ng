import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListItem } from '../models/employee-list-item';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-employee-department-list',
  templateUrl: './employee-department-list.component.html',
  styleUrls: ['./employee-department-list.component.css']
})
export class EmployeeDepartmentListComponent implements OnInit {

  departmentId: number;
  employees: EmployeeListItem[];

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.departmentId = p['id'];
      this.departmentService.getEmployees(p['id']).subscribe(e => this.employees = e);
    });
  }

}
