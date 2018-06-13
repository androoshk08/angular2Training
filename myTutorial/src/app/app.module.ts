import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ContentComponent} from "./content/content.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import { ProductChildComponent } from './product-child/product-child.component';
import { VoterParentComponent } from './voter-parent/voter-parent.component';
import { VoterChildComponent } from './voter-child/voter-child.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormEgComponent } from './reactive-form-eg/reactive-form-eg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProductComponent,
    ProductChildComponent,
    VoterParentComponent,
    VoterChildComponent,
    HeroFormComponent,
    ReactiveFormEgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"content/:id", component: ContentComponent},
      {path:"product", component: ProductComponent},
      {path: "voter", component: VoterParentComponent, children: [
        {path:'', redirectTo:'overview', pathMatch: 'full'},
        {path:'child', component:VoterChildComponent}
        ]},
      {path:'', component: HeaderComponent},
      {path:'**', redirectTo: `', pathMatch:' full`}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
