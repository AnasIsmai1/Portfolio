import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  // BehaviorSubject allows us to maintain and observe the current state
  private booleanSubject = new BehaviorSubject<boolean>(true);

  // Observable to expose the boolean value
  booleanValue$ = this.booleanSubject.asObservable();

  // Method to toggle the boolean value
  toggleBoolean() {
    const currentValue = this.booleanSubject.getValue();
    this.booleanSubject.next(!currentValue); // Toggle value
  }
}
