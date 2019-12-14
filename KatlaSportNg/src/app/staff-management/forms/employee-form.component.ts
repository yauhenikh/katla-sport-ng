import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Employee } from '../models/employee';
import { DepartmentListItem } from '../models/department-list-item';
import { PositionListItem } from '../models/position-list-item';
import { EmployeeService } from '../services/employee.service';
import { DepartmentService } from '../services/department.service';
import { PositionService } from '../services/position.service';
import { EmployeeListItem } from '../models/employee-list-item';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee = new Employee(0, "", "", new Date(2000, 1, 1), new Date(2000, 1, 1), null, "", 0, null, 0, 0);
  existed = false;
  positionId: number;
  departmentId: number;
  repotsToId: number;
  employees: EmployeeListItem[];
  departments: DepartmentListItem[];
  positions: PositionListItem[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private positionService: PositionService
  ) { }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(d => this.departments = d);
    this.positionService.getPositions().subscribe(p => this.positions = p);
    this.employeeService.getEmployees().subscribe(e => this.employees = e);
    this.route.params.subscribe(p => {
      this.departmentId = p['departmentId'];
      this.positionId = p['positionId'];
      if (p['id'] === undefined) return;
      this.employeeService.getEmployee(p['id']).subscribe(e => this.employee = e);
      this.existed = true;
    });
  }

  navigateTo() {
    if (this.departmentId !== undefined) {
      this.router.navigate([`/department/${this.departmentId}/employees`]);
    } else if (this.positionId !== undefined) {
      this.router.navigate([`/position/${this.positionId}/employees`]);
    } else {
      this.router.navigate(['/employees']);
    }
  }

  onCancel() {
    this.navigateTo();
  }

  onSubmit() {
    if (this.existed) {
      this.employeeService.updateEmployee(this.employee).subscribe(e => this.navigateTo());
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(e => this.navigateTo());
    }
  }

  onPurge() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(e => this.navigateTo());
  }
}
