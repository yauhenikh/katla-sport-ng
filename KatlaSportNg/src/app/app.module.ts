import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { HiveFormComponent } from 'app/hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from 'app/hive-management/forms/hive-section-form.component';
import { HiveListComponent } from 'app/hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from 'app/hive-management/lists/hive-section-list.component';
import { HiveSectionService } from 'app/hive-management/services/hive-section.service';
import { HiveService } from 'app/hive-management/services/hive.service';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { ProductCategoryFormComponent } from 'app/product-management/forms/product-category-form.component';
import { ProductFormComponent } from 'app/product-management/forms/product-form.component';
import { ProductCategoryListComponent } from 'app/product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from 'app/product-management/lists/product-category-product-list.component';
import { ProductListComponent } from 'app/product-management/lists/product-list.component';
import { ProductCategoryService } from 'app/product-management/services/product-category.service';
import { ProductService } from 'app/product-management/services/product.service';
import { LocationListComponent } from './staff-management/lists/location-list.component';
import { LocationFormComponent } from './staff-management/forms/location-form.component';
import { LocationService } from './staff-management/services/location.service';
import { PositionListComponent } from './staff-management/lists/position-list.component';
import { PositionFormComponent } from './staff-management/forms/position-form.component';
import { PositionService } from './staff-management/services/position.service';
import { DepartmentListComponent } from './staff-management/lists/department-list.component';
import { DepartmentFormComponent } from './staff-management/forms/department-form.component';
import { DepartmentService } from './staff-management/services/department.service';
import { DepartmentLocationListComponent } from './staff-management/lists/department-location-list.component';
import { EmployeeService } from './staff-management/services/employee.service';
import { EmployeeFormComponent } from './staff-management/forms/employee-form.component';
import { EmployeeListComponent } from './staff-management/lists/employee-list.component';
import { EmployeeReportstoListComponent } from './staff-management/lists/employee-reportsto-list.component';
import { EmployeeDepartmentListComponent } from './staff-management/lists/employee-department-list.component';
import { EmployeePositionListComponent } from './staff-management/lists/employee-position-list.component';
import { DocumentListComponent } from './staff-management/lists/document-list.component';
import { DocumentEmployeeListComponent } from './staff-management/lists/document-employee-list.component';
import { DocumentService } from './staff-management/services/document.service';
import { DocumentFormComponent } from './staff-management/forms/document-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductCategoryListComponent,
    ProductCategoryFormComponent,
    ProductCategoryProductListComponent,
    ProductListComponent,
    ProductFormComponent,
    HiveListComponent,
    HiveFormComponent,
    HiveSectionFormComponent,
    HiveSectionListComponent,
    LocationListComponent,
    LocationFormComponent,
    PositionListComponent,
    PositionFormComponent,
    DepartmentListComponent,
    DepartmentFormComponent,
    DepartmentLocationListComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeReportstoListComponent,
    EmployeeDepartmentListComponent,
    EmployeePositionListComponent,
    DocumentListComponent,
    DocumentEmployeeListComponent,
    DocumentFormComponent
  ],
  imports: [
    // Angular imports
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgbCollapseModule,
    // Application imports
    AppRoutingModule,
  ],
  providers: [
    // Angular providers
    HttpClient,
    // Application providers
    ProductService,
    ProductCategoryService,
    HiveService,
    HiveSectionService,
    LocationService,
    PositionService,
    DepartmentService,
    EmployeeService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
