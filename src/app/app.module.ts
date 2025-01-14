import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { GetAllDataComponent } from './navbar/get-all-data/get-all-data.component';
import { GetByIdComponent } from './navbar/get-by-id/get-by-id.component';
import { EditDataComponent } from './navbar/edit-data/edit-data.component';
import { DeleteDataComponent } from './navbar/delete-data/delete-data.component';
import { AddDataComponent } from './navbar/add-data/add-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetDataForEditComponent } from './navbar/get-data-for-edit/get-data-for-edit.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GetByNameComponent } from './navbar/get-by-name/get-by-name.component';
import { ProductsComponent } from './practice/products/products.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GetAllDataComponent,
    GetByIdComponent,
    EditDataComponent,
    DeleteDataComponent,
    AddDataComponent,
    GetDataForEditComponent,
    ParentComponent,
    ChildComponent,
    GetByNameComponent,
    ProductsComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
