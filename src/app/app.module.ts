import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { ImoHeaderModule } from '@imo/ng-ui';
import { ImoButtonModule } from '@imo/ng-ui';
import { ToastrModule } from 'toastr-ng2';

import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { SocketDemoComponent } from './socket-demo/socket-demo.component';
import { MouseEventDemoComponent } from './mouse-event-demo/mouse-event-demo.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'mouse-event-demo', component: MouseEventDemoComponent},
  { path: 'socket-demo', component: SocketDemoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SocketDemoComponent,
    MouseEventDemoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImoHeaderModule,
    ImoButtonModule,
    HttpModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
