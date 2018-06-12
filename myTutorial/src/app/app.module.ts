import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ContentComponent} from "./content/content.component";
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import { ProductChildComponent } from './product-child/product-child.component';
import { VoterParentComponent } from './voter-parent/voter-parent.component';
import { VoterChildComponent } from './voter-child/voter-child.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProductComponent,
    ProductChildComponent,
    VoterParentComponent,
    VoterChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
