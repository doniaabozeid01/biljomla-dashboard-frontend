import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // متغيرات للتحكم في ظهور كل نوع من الـ notifications
  showBellNotifications: boolean = false;
  showEnvelopeNotifications: boolean = false;
  showSearch: boolean = false;
  showProfile: boolean = false;



    constructor(private sidebarService: SidebarService) { }
  
    
  // دالة لتبديل حالة الـ notifications
  toggleNotifications(type: string) {
    if (type === 'bell') {
      this.showBellNotifications = !this.showBellNotifications;
      if (this.showEnvelopeNotifications) {
        this.showEnvelopeNotifications = false; // إخفاء الرسائل لو كانت مفتوحة
      }
      if (this.showProfile) {
        this.showProfile = false; // إخفاء الرسائل لو كانت مفتوحة
      }
      if (this.showSearch) {
        this.showSearch = false; // إخفاء الرسائل لو كانت مفتوحة
      }
    } else if (type === 'envelope') {
      this.showEnvelopeNotifications = !this.showEnvelopeNotifications;
      if (this.showBellNotifications) {
        this.showBellNotifications = false; // إخفاء الإشعارات لو كانت مفتوحة
      }
      if (this.showProfile) {
        this.showProfile = false; // إخفاء الرسائل لو كانت مفتوحة
      }
      if (this.showSearch) {
        this.showSearch = false; // إخفاء الرسائل لو كانت مفتوحة
      }
    }
    else if (type === 'profile') {
      this.showProfile = !this.showProfile;
      if (this.showBellNotifications) {
        this.showBellNotifications = false; // إخفاء الإشعارات لو كانت مفتوحة
      }
      if (this.showEnvelopeNotifications) {
        this.showEnvelopeNotifications = false; // إخفاء الرسائل لو كانت مفتوحة
      }
      if (this.showSearch) {
        this.showSearch = false; // إخفاء الرسائل لو كانت مفتوحة
      }
    }
  }



  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (this.showEnvelopeNotifications) {
      this.showEnvelopeNotifications = false; // إخفاء الرسائل لو كانت مفتوحة
    }
    if (this.showProfile) {
      this.showProfile = false; // إخفاء الرسائل لو كانت مفتوحة
    }
    if (this.showBellNotifications) {
      this.showBellNotifications = false; // إخفاء الإشعارات لو كانت مفتوحة
    }
  }
  


  isSlimSidebar: boolean = false;


  slimSidebar() {
    this.isSlimSidebar = !this.isSlimSidebar;
    this.sidebarService.toggleSlimSidebar();
  }
}
