import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePositionListComponent } from './employee-position-list.component';

describe('EmployeePositionListComponent', () => {
  let component: EmployeePositionListComponent;
  let fixture: ComponentFixture<EmployeePositionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePositionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
