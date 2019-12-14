import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListItem } from '../models/employee-list-item';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-reportsto-list',
  templateUrl: './employee-reportsto-list.component.html',
  styleUrls: ['./employee-reportsto-list.component.css']
})
export class EmployeeReportstoListComponent implements OnInit {

  reportsToId: number;
  employees: EmployeeListItem[];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.reportsToId = p['id'];
      this.employeeService.getSubordinates(p['id']).subscribe(e => this.employees = e);
    });
  }

}
