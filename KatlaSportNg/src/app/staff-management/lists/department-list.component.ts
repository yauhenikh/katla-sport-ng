import { Component, OnInit } from '@angular/core';
import { DepartmentListItem } from '../models/department-list-item';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: DepartmentListItem[];

  constructor(private departmentService : DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(d => this.departments = d);
  }

}
