import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLocationListComponent } from './department-location-list.component';

describe('DepartmentLocationListComponent', () => {
  let component: DepartmentLocationListComponent;
  let fixture: ComponentFixture<DepartmentLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
