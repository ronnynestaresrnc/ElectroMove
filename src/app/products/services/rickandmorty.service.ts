import { Injectable } from '@angular/core';
import {Apollo,gql} from "apollo-angular";
import { take ,tap} from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
const QUERY = gql`{
  characters {

    results {
      name
      status
      image
      gender
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
 
  private charactersSubject = new BehaviorSubject<any>(null);
characters$ = this.charactersSubject.asObservable();
  constructor(public apollo:Apollo) {
    this.getDataApi();
   }

  getDataApi():void{
this.apollo.watchQuery<any>({
  query:QUERY
}).valueChanges.pipe(
  take(1),
  tap(({data})=>{
const {characters} = data;

   this.charactersSubject.next(characters.results);

    })
  ).subscribe();



  }
}
