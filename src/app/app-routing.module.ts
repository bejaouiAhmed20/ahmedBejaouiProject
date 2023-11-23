import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './Screen/home-screen/home-screen.component';
import { AllcardComponent } from './Screen/allcard/allcard.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { authGuard } from './auth.guard';
import { ChangeEventComponent } from './admin/change-event/change-event.component';
import { ContactComponent } from './Screen/contact/contact.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AboutUsComponent } from './Screen/about-us/about-us.component';

const routes: Routes = [
  {path:'home',component:HomeScreenComponent ,children:[
    {path:'events',component:AllcardComponent},
    {path:'aboutUs',component:AboutUsComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'events',pathMatch:'full'}
    ]},
    {path:'admin',component:AdminHomeComponent,canActivate:[authGuard],children:[
      {path:'add',component:AddEventComponent},
      {path:'profile',component:ProfilComponent},
      {path:'contacts',component:AdminContactComponent},
      {path:'edit&delete',component:ChangeEventComponent},
      {path:'',redirectTo:'add',pathMatch:'full'}
    ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'**',component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
