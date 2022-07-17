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

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

// from(arr).pipe(
//   //pluck('address','geo','lat'),
//   map(val => val?.address?.geo?.lat),
//   tap(console.log)
// ).subscribe();

console.log('INIZIO');
fetch('https://mockend.com/org/repo/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log('FINE');
