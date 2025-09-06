import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

export interface NavigationItem {
  label: string;
  route: string;
  active: boolean;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.header--menu-open]': 'isMenuOpen',
    '[class.header--dark]': 'isDarkMode',
    '[class.header--scrolled]': 'isScrolled',
  },
})
export class Header {
  private router = inject(Router);

  // Propiedades del componente
  isMenuOpen: boolean = false;
  isDarkMode: boolean = false;
  isScrolled: boolean = false;

  navigationItems: NavigationItem[] = [
    { label: 'Inicio', route: '/', active: true },
    { label: 'Proyectos', route: '/proyectos', active: false },
    { label: 'Sobre mí', route: '/about', active: false },
    { label: 'Contacto', route: '/contacto', active: false },
  ];

  // Métodos del componente
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  onScroll(scrollTop: number): void {
    this.isScrolled = scrollTop > 50;
  }

  navigateTo(route: string): void {
    this.isMenuOpen = false;

    this.navigationItems.forEach((item) => {
      item.active = item.route === route;
    });

    this.router.navigate([route]);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.onScroll(scrollTop);
  }
}
