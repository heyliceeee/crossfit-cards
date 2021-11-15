import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalTrainingComponent } from './global-training/global-training.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TrainingHomepageComponent } from './training-homepage/training-homepage.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'homepage/singleplayer', component: TrainingHomepageComponent},
  {path: 'homepage/singleplayer/global', component: GlobalTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
