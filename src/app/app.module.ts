import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { TrainingHomepageComponent } from './training-homepage/training-homepage.component';
import { GlobalTrainingComponent } from './global-training/global-training.component';
import { HttpClientModule } from '@angular/common/http';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';
import { GoComponent } from './go/go.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { OneLegComponent } from './one-leg/one-leg.component';
import { TwoLegComponent } from './two-leg/two-leg.component';
import { ThreeLegComponent } from './three-leg/three-leg.component';
import { GoLegComponent } from './go-leg/go-leg.component';
import { GoUpperBodyComponent } from './go-upper-body/go-upper-body.component';
import { ThreeUpperBodyComponent } from './three-upper-body/three-upper-body.component';
import { TwoUpperBodyComponent } from './two-upper-body/two-upper-body.component';
import { OneUpperBodyComponent } from './one-upper-body/one-upper-body.component';
import { OneCoreComponent } from './one-core/one-core.component';
import { TwoCoreComponent } from './two-core/two-core.component';
import { ThreeCoreComponent } from './three-core/three-core.component';
import { GoCoreComponent } from './go-core/go-core.component';
import { GoCardioComponent } from './go-cardio/go-cardio.component';
import { ThreeCardioComponent } from './three-cardio/three-cardio.component';
import { TwoCardioComponent } from './two-cardio/two-cardio.component';
import { OneCardioComponent } from './one-cardio/one-cardio.component';
import { LegTrainingComponent } from './leg-training/leg-training.component';
import { UpperBodyTrainingComponent } from './upper-body-training/upper-body-training.component';
import { CoreTrainingComponent } from './core-training/core-training.component';
import { CardioTrainingComponent } from './cardio-training/cardio-training.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomepageComponent,
    SigninComponent,
    RegisterComponent,
    TrainingHomepageComponent,
    GlobalTrainingComponent,
    ThreeComponent,
    TwoComponent,
    OneComponent,
    GoComponent,
    StatisticsComponent,
    OneLegComponent,
    TwoLegComponent,
    ThreeLegComponent,
    GoLegComponent,
    GoUpperBodyComponent,
    ThreeUpperBodyComponent,
    TwoUpperBodyComponent,
    OneUpperBodyComponent,
    OneCoreComponent,
    TwoCoreComponent,
    ThreeCoreComponent,
    GoCoreComponent,
    GoCardioComponent,
    ThreeCardioComponent,
    TwoCardioComponent,
    OneCardioComponent,
    LegTrainingComponent,
    UpperBodyTrainingComponent,
    CoreTrainingComponent,
    CardioTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
