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
  { path: 'departments', component: DepartmentListComponent },
  { path: 'department', component: DepartmentFormComponent },
  { path: 'department/:id', component: DepartmentFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
