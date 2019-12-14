import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { EmployeeListItem } from '../models/employee-list-item';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = environment.apiUrl + 'api/employees/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<EmployeeListItem>> {
    return this.http.get<Array<EmployeeListItem>>(this.url);
  }

  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}${employeeId}`);
  }

  getSubordinates(employeeId: number): Observable<Array<EmployeeListItem>> {
    return this.http.get<Array<EmployeeListItem>>(`${this.url}${employeeId}/subordinates`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}${employee.id}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${employeeId}`);
  }
}
