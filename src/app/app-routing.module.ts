import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { GetAllDataComponent } from './navbar/get-all-data/get-all-data.component';
import { GetByIdComponent } from './navbar/get-by-id/get-by-id.component';
import { EditDataComponent } from './navbar/edit-data/edit-data.component';
import { DeleteDataComponent } from './navbar/delete-data/delete-data.component';
import { AddDataComponent } from './navbar/add-data/add-data.component';
import { GetDataForEditComponent } from './navbar/get-data-for-edit/get-data-for-edit.component';
import { GetByNameComponent } from './navbar/get-by-name/get-by-name.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductsComponent } from './practice/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'getAllData', component: GetAllDataComponent },
  { path: 'getById', component: GetByIdComponent },
  { path: 'getByName', component: GetByNameComponent },
  { path: 'editData/:id', component: EditDataComponent },
  { path: 'getDataForEdit', component: GetDataForEditComponent },
  { path: 'deleteData', component: DeleteDataComponent },
  { path: 'addData', component: AddDataComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
