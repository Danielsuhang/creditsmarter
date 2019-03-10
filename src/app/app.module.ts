import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

//Angular Material Design imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';

import 'hammerjs/hammer';

//Hosting imports
import {FirebaseModule, FirebaseProvider} from 'angular-firebase'

//Database imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//Dialog Component
import {CourseDialogComponentComponent} from './course-dialog-component/course-dialog-component.component';




@NgModule({
  declarations: [
    AppComponent, CourseDialogComponentComponent
  ],
  imports: [
    FirebaseModule, BrowserModule, BrowserAnimationsModule, MatButtonModule,
    MatFormFieldModule,MatSelectModule, MatInputModule, MatSliderModule,
    FormsModule, MatToolbarModule, MatCheckboxModule, MatDialogModule,
    MatCardModule, MatChipsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, MatExpansionModule

    
  ],
  entryComponents: [CourseDialogComponentComponent],
  providers: [FirebaseProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
