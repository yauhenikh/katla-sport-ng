import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../models/document';
import { EmployeeListItem } from '../models/employee-list-item';
import { DocumentService } from '../services/document.service';
import { EmployeeService } from '../services/employee.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {

  document = new Document(0, "", "", 0);
  existed = false;
  employeeId: number;
  employees: EmployeeListItem[];
  fileToUpload: File = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private documentService: DocumentService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(e => this.employees = e);
    this.route.params.subscribe(p => {
      this.employeeId = p['employeeId'];
      if (p['id'] === undefined) return;
      this.documentService.getDocument(p['id']).subscribe(d => this.document = d);
      this.existed = true;
    });
  }

  navigateTo() {
    if (this.employeeId === undefined) {
      this.router.navigate(['/documents']);
    } else {
      this.router.navigate([`/employee/${this.employeeId}/documents`]);
    }
  }

  onCancel() {
    this.navigateTo();
  }

  onSubmit() {
    this.documentService.uploadFile(this.fileToUpload);

    if (this.existed) {
      this.documentService.updateDocument(this.document).subscribe(d => this.navigateTo());
    } else {
      this.documentService.addDocument(this.document).subscribe(d => this.navigateTo());
    }
  }

  onPurge() {
    this.documentService.deleteDocument(this.document.id).subscribe(d => this.navigateTo());
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
