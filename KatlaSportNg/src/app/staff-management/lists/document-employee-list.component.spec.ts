import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEmployeeListComponent } from './document-employee-list.component';

describe('DocumentEmployeeListComponent', () => {
  let component: DocumentEmployeeListComponent;
  let fixture: ComponentFixture<DocumentEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
