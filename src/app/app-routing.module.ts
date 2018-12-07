import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from "./event/event.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ConvComponent} from "./conv/conv.component";
import {InscriComponent} from "./inscri/inscri.component";
import {AdminComponent} from "./admin/admin.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {UsersComponent} from "./users/users.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddFournComponent} from "./add-fourn/add-fourn.component";
import {FournsComponent} from "./fourns/fourns.component";
import {EditFournComponent} from "./edit-fourn/edit-fourn.component";
import {AddConvComponent} from "./add-conv/add-conv.component";
import {EditConvComponent} from "./edit-conv/edit-conv.component";
import {ConvsComponent} from "./convs/convs.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {CategoriesComponent} from "./categories/categories.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {UpdateProfilComponent} from "./update-profil/update-profil.component";
import {AddEventComponent} from "./add-event/add-event.component";

const routes: Routes = [
    {path: "", component : HomeComponent},
    {path: "event", component : EventComponent},
    {path: "login", component : LoginComponent},
    {path: "conv", component : ConvComponent},
    {path: "inscri", component : InscriComponent},
    {path: "admin", component : AdminComponent},
    {path: "admin/addUser", component : AddUserComponent},
    {path: "admin/Users", component : UsersComponent},
    {path: "admin/Users/:email", component: EditUserComponent},
    {path: "admin/addFourn", component : AddFournComponent},
    {path: "admin/Fourns", component : FournsComponent},
    {path: "admin/Fourns/:id", component : EditFournComponent},
    {path: "admin/addConv", component : AddConvComponent},
    {path: "admin/Convs", component : ConvsComponent},
    {path: "admin/Convs/:id", component : EditConvComponent},
    {path: "admin/addCategory", component : AddCategoryComponent},
    {path: "admin/Categories", component : CategoriesComponent},
    {path: "admin/Categories/:id", component : EditCategoryComponent},
    {path: "updateProfil", component : UpdateProfilComponent},
    {path: "admin/addEvent", component : AddEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
