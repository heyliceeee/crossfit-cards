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
    GoComponent
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
