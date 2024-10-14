import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { Comp1Component } from './sibling/comp1/comp1.component';
import { Comp2Component } from './sibling/comp2/comp2.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ParentComponent } from './child-to-parent/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildToParentComponent,
    ParentToChildComponent,
    Comp1Component,
    Comp2Component,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
