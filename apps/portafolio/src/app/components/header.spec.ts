import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Header, NavigationItem } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let mockRouter: Partial<Router>;

  beforeEach(async () => {
    mockRouter = {
      navigate: jest.fn().mockResolvedValue(true),
    };

    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Component Properties', () => {
    it('should have isMenuOpen initialized as false', () => {
      expect(component.isMenuOpen).toBe(false);
    });

    it('should have isDarkMode initialized as false', () => {
      expect(component.isDarkMode).toBe(false);
    });

    it('should have isScrolled initialized as false', () => {
      expect(component.isScrolled).toBe(false);
    });

    it('should have navigationItems array', () => {
      expect(component.navigationItems).toEqual([
        { label: 'Inicio', route: '/', active: true },
        { label: 'Proyectos', route: '/proyectos', active: false },
        { label: 'Sobre mí', route: '/about', active: false },
        { label: 'Contacto', route: '/contacto', active: false },
      ]);
    });
  });

  describe('Template Rendering', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render logo/brand', () => {
      const logoElement = fixture.debugElement.query(By.css('.header__logo'));
      expect(logoElement).toBeTruthy();
      expect(logoElement.nativeElement.textContent.trim()).toBe('PortFolio');
    });

    it('should render navigation menu', () => {
      const navElement = fixture.debugElement.query(By.css('.header__nav'));
      expect(navElement).toBeTruthy();
    });

    it('should render all navigation items', () => {
      const navItems = fixture.debugElement.queryAll(
        By.css('.header__nav-item')
      );
      expect(navItems.length).toBe(4);
    });

    it('should render mobile menu toggle button', () => {
      const toggleButton = fixture.debugElement.query(
        By.css('.header__menu-toggle')
      );
      expect(toggleButton).toBeTruthy();
    });

    it('should render theme toggle button', () => {
      const themeButton = fixture.debugElement.query(
        By.css('.header__theme-toggle')
      );
      expect(themeButton).toBeTruthy();
    });

    it('should have correct CSS classes for header', () => {
      const headerElement = fixture.debugElement.query(By.css('.header'));
      expect(headerElement).toBeTruthy();
    });
  });

  describe('Menu Toggle Functionality', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have toggleMenu method', () => {
      expect(typeof component.toggleMenu).toBe('function');
    });

    it('should toggle isMenuOpen when toggleMenu is called', () => {
      component.toggleMenu();
      expect(component.isMenuOpen).toBe(true);

      component.toggleMenu();
      expect(component.isMenuOpen).toBe(false);
    });

    it('should call toggleMenu when menu button is clicked', () => {
      jest.spyOn(component, 'toggleMenu');

      const toggleButton = fixture.debugElement.query(
        By.css('.header__menu-toggle')
      );
      toggleButton.nativeElement.click();

      expect(component.toggleMenu).toHaveBeenCalled();
    });
  });

  describe('Theme Toggle Functionality', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have toggleTheme method', () => {
      expect(typeof component.toggleTheme).toBe('function');
    });

    it('should toggle isDarkMode when toggleTheme is called', () => {
      component.toggleTheme();
      expect(component.isDarkMode).toBe(true);

      component.toggleTheme();
      expect(component.isDarkMode).toBe(false);
    });

    it('should call toggleTheme when theme button is clicked', () => {
      jest.spyOn(component, 'toggleTheme');

      const themeButton = fixture.debugElement.query(
        By.css('.header__theme-toggle')
      );
      themeButton.nativeElement.click();

      expect(component.toggleTheme).toHaveBeenCalled();
    });
  });

  describe('Scroll Detection', () => {
    it('should have onScroll method', () => {
      expect(typeof component.onScroll).toBe('function');
    });

    it('should set isScrolled to true when scrolled down', () => {
      component.onScroll(100);
      expect(component.isScrolled).toBe(true);
    });

    it('should set isScrolled to false when at top', () => {
      component.isScrolled = true;
      component.onScroll(0);
      expect(component.isScrolled).toBe(false);
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have navigateTo method', () => {
      expect(typeof component.navigateTo).toBe('function');
    });

    it('should call router.navigate when navigateTo is called', () => {
      component.navigateTo('/proyectos');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/proyectos']);
    });

    it('should close mobile menu after navigation', () => {
      component.isMenuOpen = true;
      component.navigateTo('/proyectos');
      expect(component.isMenuOpen).toBe(false);
    });

    it('should update active navigation item', () => {
      component.navigateTo('/proyectos');

      const proyectosItem = component.navigationItems.find(
        (item: NavigationItem) => item.route === '/proyectos'
      );
      const inicioItem = component.navigationItems.find(
        (item: NavigationItem) => item.route === '/'
      );

      expect(proyectosItem?.active).toBe(true);
      expect(inicioItem?.active).toBe(false);
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have proper ARIA labels for buttons', () => {
      const menuToggle = fixture.debugElement.query(
        By.css('.header__menu-toggle')
      );
      const themeToggle = fixture.debugElement.query(
        By.css('.header__theme-toggle')
      );

      expect(menuToggle.nativeElement.getAttribute('aria-label')).toBeTruthy();
      expect(themeToggle.nativeElement.getAttribute('aria-label')).toBeTruthy();
    });

    it('should have navigation landmark', () => {
      const navElement = fixture.debugElement.query(By.css('nav'));
      expect(navElement).toBeTruthy();
    });
  });
});
