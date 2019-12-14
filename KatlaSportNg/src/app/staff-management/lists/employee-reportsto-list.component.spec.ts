import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportstoListComponent } from './employee-reportsto-list.component';

describe('EmployeeReportstoListComponent', () => {
  let component: EmployeeReportstoListComponent;
  let fixture: ComponentFixture<EmployeeReportstoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportstoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportstoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
