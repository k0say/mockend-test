import './style.css';
import { arr } from './data';
import {
  of,
  map,
  Observable,
  from,
  pluck,
  tap,
  firstValueFrom,
  EMPTY,
} from 'rxjs';

// from(arr).pipe(
//   //pluck('address','geo','lat'),
//   map(val => val?.address?.geo?.lat),
//   tap(console.log)
// ).subscribe();

console.log('INIZIO');
fetch('https://mockend.com/org/repo/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
