import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListItem } from '../models/employee-list-item';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-employee-position-list',
  templateUrl: './employee-position-list.component.html',
  styleUrls: ['./employee-position-list.component.css']
})
export class EmployeePositionListComponent implements OnInit {

  positionId: number;
  employees: EmployeeListItem[];

  constructor(
    private route: ActivatedRoute,
    private positionService: PositionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.positionId = p['id'];
      this.positionService.getEmployees(p['id']).subscribe(e => this.employees = e);
    });
  }

}
