import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  constructor(public db: AngularFirestore) { }
  getCreditCards(){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/people').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }
}
