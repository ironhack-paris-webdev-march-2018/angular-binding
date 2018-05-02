import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ImageSwitcherComponent } from './image-switcher/image-switcher.component';
import { CounterComponent } from './counter/counter.component';
import { CommentComponent } from './comment/comment.component';
import { FoodSelectComponent } from './food-select/food-select.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageSwitcherComponent,
    CounterComponent,
    CommentComponent,
    FoodSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
