import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard'
import { CallbackComponent } from './callback/callback.component';

//You now have an application with two components that are used as routes i.e Home Page and Profile Page

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
},
{
  path: 'profile',
  component: ProfileComponent,
  //This adds the AuthGuard to that route, meaning that if the AuthGuard service returns 
  //true when called, the user will be able to continue on to the route. If it returns false, 
  //they will be redirected to log in.
  canActivate: [AuthGuard]
},  
{ path: 'callback', 
  component: CallbackComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
