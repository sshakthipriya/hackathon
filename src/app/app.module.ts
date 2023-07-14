import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule }   from '@angular/forms'
import { AuthService }   from './auth/auth.service';
import { LoadingComponent } from './shared/loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { SearchComponent } from './search/search.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EnrollBookComponent } from './enroll-book/enroll-book.component';

const appRoutes: Routes = [
 { path : '', component: HomeComponent},
 { path : 'mybooks', component: MybooksComponent},
 { path : 'search', component: SearchComponent},
 { path : 'login', component: AuthComponent},
  {path:'enroll',component:EnrollBookComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoadingComponent,
    HeaderComponent,
    MybooksComponent,
    SearchComponent,
    HomeComponent,
    EnrollBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
