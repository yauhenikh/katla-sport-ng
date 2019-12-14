import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDepartmentListComponent } from './employee-department-list.component';

describe('EmployeeDepartmentListComponent', () => {
  let component: EmployeeDepartmentListComponent;
  let fixture: ComponentFixture<EmployeeDepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDepartmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
