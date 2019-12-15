import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Document } from '../models/document';
import { DocumentListItem } from '../models/document-list-item';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private url = environment.apiUrl + 'api/documents/';

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<Array<DocumentListItem>> {
    return this.http.get<Array<DocumentListItem>>(this.url);
  }

  getDocument(documentId: number): Observable<Document> {
    return this.http.get<Document>(`${this.url}${documentId}`);
  }

  addDocument(document: Document): Observable<Document> {
    return this.http.post<Document>(`${this.url}`, document);
  }

  updateDocument(document: Document): Observable<Object> {
    return this.http.put<Object>(`${this.url}${document.id}`, document);
  }

  deleteDocument(documentId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${documentId}`);
  }
}
