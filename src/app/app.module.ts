import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component'
import {AppRoutingModule} from "./app-routing.module";
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import {StorageService} from "./storage.service";
import { OutlineComponent } from './outline/outline.component';





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    HomeComponent,
    OutlineComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,


  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
