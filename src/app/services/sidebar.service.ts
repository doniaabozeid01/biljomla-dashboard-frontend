import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private slimSidebarSource = new BehaviorSubject<boolean>(false);
  slimSidebar$ = this.slimSidebarSource.asObservable();

  toggleSlimSidebar() {
    this.slimSidebarSource.next(!this.slimSidebarSource.value);
  }

  setSlimSidebar(value: boolean) {
    this.slimSidebarSource.next(value);
  }}
