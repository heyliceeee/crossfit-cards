import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalTrainingComponent } from './global-training/global-training.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TrainingHomepageComponent } from './training-homepage/training-homepage.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';
import { GoComponent } from './go/go.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { GoLegComponent } from './go-leg/go-leg.component';
import { ThreeLegComponent } from './three-leg/three-leg.component';
import { TwoLegComponent } from './two-leg/two-leg.component';
import { OneLegComponent } from './one-leg/one-leg.component';
import { GoUpperBodyComponent } from './go-upper-body/go-upper-body.component';
import { ThreeUpperBodyComponent } from './three-upper-body/three-upper-body.component';
import { TwoUpperBodyComponent } from './two-upper-body/two-upper-body.component';
import { OneUpperBodyComponent } from './one-upper-body/one-upper-body.component';
import { GoCoreComponent } from './go-core/go-core.component';
import { ThreeCoreComponent } from './three-core/three-core.component';
import { TwoCoreComponent } from './two-core/two-core.component';
import { OneCoreComponent } from './one-core/one-core.component';
import { GoCardioComponent } from './go-cardio/go-cardio.component';
import { ThreeCardioComponent } from './three-cardio/three-cardio.component';
import { TwoCardioComponent } from './two-cardio/two-cardio.component';
import { OneCardioComponent } from './one-cardio/one-cardio.component';



const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'login', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'homepage/singleplayer', component: TrainingHomepageComponent},
  {path: 'homepage/singleplayer/global', component: GlobalTrainingComponent},


  {path: 'homepage/singleplayer/goglobal', component: GoComponent},
  {path: 'homepage/singleplayer/3global', component: ThreeComponent},
  {path: 'homepage/singleplayer/2global', component: TwoComponent},
  {path: 'homepage/singleplayer/1global', component: OneComponent},

  {path: 'homepage/singleplayer/goleg', component: GoLegComponent},
  {path: 'homepage/singleplayer/3leg', component: ThreeLegComponent},
  {path: 'homepage/singleplayer/2leg', component: TwoLegComponent},
  {path: 'homepage/singleplayer/1leg', component: OneLegComponent},

  {path: 'homepage/singleplayer/goupperbody', component: GoUpperBodyComponent},
  {path: 'homepage/singleplayer/3upperbody', component: ThreeUpperBodyComponent},
  {path: 'homepage/singleplayer/2upperbody', component: TwoUpperBodyComponent},
  {path: 'homepage/singleplayer/1upperbody', component: OneUpperBodyComponent},

  {path: 'homepage/singleplayer/gocore', component: GoCoreComponent},
  {path: 'homepage/singleplayer/3core', component: ThreeCoreComponent},
  {path: 'homepage/singleplayer/2core', component: TwoCoreComponent},
  {path: 'homepage/singleplayer/1core', component: OneCoreComponent},

  {path: 'homepage/singleplayer/gocardio', component: GoCardioComponent},
  {path: 'homepage/singleplayer/3cardio', component: ThreeCardioComponent},
  {path: 'homepage/singleplayer/2cardio', component: TwoCardioComponent},
  {path: 'homepage/singleplayer/1cardio', component: OneCardioComponent},


  {path: 'homepage/singleplayer/statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
