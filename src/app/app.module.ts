import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import 'hammerjs/hammer';

import {CourseDialogComponentComponent} from './course-dialog-component/course-dialog-component.component';


@NgModule({
  declarations: [
    AppComponent, CourseDialogComponentComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule,
    MatFormFieldModule,MatSelectModule, MatInputModule, MatSliderModule,
    FormsModule, MatToolbarModule, MatCheckboxModule, MatDialogModule,
    MatCardModule

    
  ],
  entryComponents: [CourseDialogComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
