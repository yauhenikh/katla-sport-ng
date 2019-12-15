import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { HiveFormComponent } from './hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from './hive-management/forms/hive-section-form.component';
import { HiveListComponent } from './hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from './hive-management/lists/hive-section-list.component';
import { ProductCategoryFormComponent } from './product-management/forms/product-category-form.component';
import { ProductFormComponent } from './product-management/forms/product-form.component';
import { ProductCategoryListComponent } from './product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from './product-management/lists/product-category-product-list.component';
import { ProductListComponent } from './product-management/lists/product-list.component';
import { LocationListComponent } from './staff-management/lists/location-list.component';
import { LocationFormComponent } from './staff-management/forms/location-form.component';
import { PositionListComponent } from './staff-management/lists/position-list.component';
import { PositionFormComponent } from './staff-management/forms/position-form.component';
import { DepartmentListComponent } from './staff-management/lists/department-list.component';
import { DepartmentFormComponent } from './staff-management/forms/department-form.component';
import { DepartmentLocationListComponent } from './staff-management/lists/department-location-list.component';
import { EmployeeFormComponent } from './staff-management/forms/employee-form.component';
import { EmployeeListComponent } from './staff-management/lists/employee-list.component';
import { EmployeeReportstoListComponent } from './staff-management/lists/employee-reportsto-list.component';
import { EmployeeDepartmentListComponent } from './staff-management/lists/employee-department-list.component';
import { EmployeePositionListComponent } from './staff-management/lists/employee-position-list.component';
import { DocumentListComponent } from './staff-management/lists/document-list.component';
import { DocumentFormComponent } from './staff-management/forms/document-form.component';
import { DocumentEmployeeListComponent } from './staff-management/lists/document-employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'categories', component: ProductCategoryListComponent },
  { path: 'category', component: ProductCategoryFormComponent },
  { path: 'category/:id', component: ProductCategoryFormComponent },
  { path: 'category/:id/products', component: ProductCategoryProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductFormComponent },
  { path: 'category/:categoryId/product/:id', component: ProductFormComponent },
  { path: 'hives', component: HiveListComponent },
  { path: 'hive', component: HiveFormComponent },
  { path: 'hive/:id', component: HiveFormComponent },
  { path: 'hive/:id/sections', component: HiveSectionListComponent },
  { path: 'hive/:hiveId/section', component: HiveSectionFormComponent },
  { path: 'hive/:hiveId/section/:id', component: HiveSectionFormComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'location', component: LocationFormComponent },
  { path: 'location/:id', component: LocationFormComponent },
  { path: 'location/:id/departments', component: DepartmentLocationListComponent },
  { path: 'location/:locationId/department', component: DepartmentFormComponent },
  { path: 'location/:locationId/department/:id', component: DepartmentFormComponent },
  { path: 'positions', component: PositionListComponent },
  { path: 'position', component: PositionFormComponent },
  { path: 'position/:id', component: PositionFormComponent },
  { path: 'position/:id/employees', component: EmployeePositionListComponent },
  { path: 'position/:positionId/employee', component: EmployeeFormComponent },
  { path: 'position/:positionId/employee/:id', component: EmployeeFormComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'department', component: DepartmentFormComponent },
  { path: 'department/:id', component: DepartmentFormComponent },
  { path: 'department/:id/employees', component: EmployeeDepartmentListComponent },
  { path: 'department/:departmentId/employee', component: EmployeeFormComponent },
  { path: 'department/:departmentId/employee/:id', component: EmployeeFormComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee', component: EmployeeFormComponent },
  { path: 'employee/:id', component: EmployeeFormComponent },
  { path: 'employee/:id/subordinates', component: EmployeeReportstoListComponent },
  { path: 'employee/:id/documents', component: DocumentEmployeeListComponent },
  { path: 'employee/:employeeId/document', component: DocumentFormComponent },
  { path: 'employee/:employeeId/document/:id', component: DocumentFormComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'document', component: DocumentFormComponent },
  { path: 'document/:id', component: DocumentFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
