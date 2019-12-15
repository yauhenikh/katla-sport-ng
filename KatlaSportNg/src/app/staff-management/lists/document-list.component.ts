import { Component, OnInit } from '@angular/core';
import { DocumentListItem } from '../models/document-list-item';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: DocumentListItem[];

  constructor(private documentService : DocumentService) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe(d => this.documents = d);
  }

}
