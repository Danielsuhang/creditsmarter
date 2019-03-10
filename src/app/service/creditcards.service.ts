import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  constructor(public db: AngularFirestore) { }
  getCreditCards(){
    return this.db.collection('creditcards').valueChanges();
  }
}
