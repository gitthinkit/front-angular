import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ConvComponent } from './conv/conv.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InscriComponent } from './inscri/inscri.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddFournComponent } from './add-fourn/add-fourn.component';
import { FournsComponent } from './fourns/fourns.component';
import { EditFournComponent } from './edit-fourn/edit-fourn.component';
import { AddConvComponent } from './add-conv/add-conv.component';
import { ConvsComponent } from './convs/convs.component';
import { EditConvComponent } from './edit-conv/edit-conv.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import {ConventionService} from "./services/convention.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EventComponent,
    ConvComponent,
    InscriComponent,
    AdminComponent,
    NavbarComponent,
    AdminNavComponent,
    AdminSidebarComponent,
    AddUserComponent,
    UsersComponent,
    EditUserComponent,
    AddFournComponent,
    FournsComponent,
    EditFournComponent,
    AddConvComponent,
    ConvsComponent,
    EditConvComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    CategoriesComponent,
    UpdateProfilComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [
      ConventionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{


}
