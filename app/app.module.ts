import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTowComponent } from './comp-two/comp-tow.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';
import { CompFiveComponent } from './comp-five/comp-five.component';
import { CompSexComponent } from './comp-sex/comp-sex.component';
import { CompSevenComponent } from './comp-seven/comp-seven.component';
import { CompEightComponent } from './comp-eight/comp-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTowComponent,
    CompThreeComponent,
    CompFourComponent,
    CompFiveComponent,
    CompSexComponent,
    CompSevenComponent,
    CompEightComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
