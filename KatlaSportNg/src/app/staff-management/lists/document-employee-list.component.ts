import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentListItem } from '../models/document-list-item';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-document-employee-list',
  templateUrl: './document-employee-list.component.html',
  styleUrls: ['./document-employee-list.component.css']
})
export class DocumentEmployeeListComponent implements OnInit {

  employeeId: number;
  documents: DocumentListItem[];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.employeeId = p['id'];
      this.employeeService.getDocuments(p['id']).subscribe(d => this.documents = d);
    });
  }

}
