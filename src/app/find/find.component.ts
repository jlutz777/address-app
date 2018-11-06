import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { BehaviorSubject, Observable, of, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Address } from '../models/address';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
    private filterVal: BehaviorSubject<string>;
    items$: Observable<any[]>;

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.filterVal = new BehaviorSubject('');
    }

    ngOnInit() {
      this.items$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return combineLatest(
              this.db.list('users/' + user.uid + '/addresses').valueChanges(),
              this.filterVal.asObservable()
            ).pipe(
              map(([addresses, val]) => {
                return addresses.filter((address: Address) => {
                    return val === '' || (address.first_name + ' ' + address.last_name).toLowerCase().indexOf(val.toLowerCase()) !== -1;
                });
              }));
          } else {
            return of([]);
          }
        })
      );

      this.afAuth.auth.signInWithEmailAndPassword('jlutz777@gmail.com', 'passw0rd');
    }

    filter(val: string) {
        this.filterVal.next(val);
    }
}
