import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  slimSidebar$: Observable<boolean>;

  constructor(private sidebarService: SidebarService) {
    this.slimSidebar$ = this.sidebarService.slimSidebar$;

   }



  openSection: string = '';
  popupTop: number = 0;

  toggleSection(sectionName: string, event?: MouseEvent) {
    if (this.openSection === sectionName) {
      this.openSection = '';
    } else {
      this.openSection = sectionName;
      if (event) {
        const target = event.target as HTMLElement;
        const buttonOffsetTop = target.closest('div')?.offsetTop || 0;
        this.popupTop = buttonOffsetTop;
      }
    }
  }

  slimSidebar() {
    this.sidebarService.toggleSlimSidebar();
  }


}
