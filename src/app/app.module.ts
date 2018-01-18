import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/app.module.material.';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
