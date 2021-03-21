import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AngularStartPageComponent } from './angular-start-page/angular-start-page.component';
import { LayoutComponent } from "./layout/layout.component";
import { AddUserComponent } from "./add-user/add-user.component";
const routes: Routes = [
{ path:'', component: LayoutComponent},
{ path:'users', component: UserComponent},
{ path:'angular', component: AngularStartPageComponent},
{ path:'addUser', component: AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
