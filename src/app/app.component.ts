import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard_Bialjomla';


  widthSidebar: string = '244px'; // القيمة المبدئية
  isSlimSidebar: boolean = false; // الحالة المبدئية (هل الـ sidebar slim أم لا)

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    // الاشتراك في تغييرات الـ slimSidebar
    this.sidebarService.slimSidebar$.subscribe(isSlim => {
      this.isSlimSidebar = isSlim;
      this.widthSidebar = isSlim ? '100px' : '244px'; // تحديث العرض بناءً على الحالة
    });

    // فحص الـ media query بشكل مباشر عند تحميل الصفحة
    this.handleMediaQuery();

    // استماع لتغييرات الحجم بشكل ديناميكي
    window.addEventListener('resize', this.handleMediaQuery.bind(this)); // إعادة فحص عند تغيير حجم الشاشة
  }

  // فحص إذا كانت الشاشة صغيرة (تطبيق slim)
  handleMediaQuery() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches; // أو الحجم الذي تريدينه
    this.isSlimSidebar = isMobile; // إذا كانت الشاشة صغيرة، سيتم تفعيل slimSidebar
    this.widthSidebar = isMobile ? '100px' : '244px'; // إذا كانت الشاشة صغيرة، يتم تعيين عرض slim
    this.sidebarService.setSlimSidebar(this.isSlimSidebar); // تحديث قيمة الـ slimSidebar في الخدمة
  }


}
