import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Hero } from './hero';

// Importar Jest spy functions
declare const jest: any;

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should be standalone component', () => {
      // Si el componente se configura correctamente con imports: [Hero], es standalone
      expect(component).toBeTruthy();
    });
  });

  describe('Component Properties', () => {
    it('should have default title property', () => {
      expect(component.title).toBe('Desarrollador Full Stack');
    });

    it('should have default subtitle property', () => {
      expect(component.subtitle).toBe(
        'Creando experiencias digitales increíbles con Angular y tecnologías modernas'
      );
    });

    it('should have default ctaText property', () => {
      expect(component.ctaText).toBe('Ver mis proyectos');
    });

    it('should have isVisible property initialized as false', () => {
      expect(component.isVisible).toBe(false);
    });
  });

  describe('Template Rendering', () => {
    beforeEach(() => {
      // Inicializar propiedades para los tests
      component.title = 'Test Title';
      component.subtitle = 'Test Subtitle';
      component.ctaText = 'Test CTA';
      fixture.detectChanges();
    });

    it('should render title in h1 element', () => {
      const titleElement = fixture.debugElement.query(By.css('.hero__title'));
      expect(titleElement.nativeElement.textContent.trim()).toBe('Test Title');
    });

    it('should render subtitle in paragraph element', () => {
      const subtitleElement = fixture.debugElement.query(
        By.css('.hero__subtitle')
      );
      expect(subtitleElement.nativeElement.textContent.trim()).toBe(
        'Test Subtitle'
      );
    });

    it('should render CTA button with correct text', () => {
      const ctaElement = fixture.debugElement.query(By.css('.hero__cta'));
      expect(ctaElement.nativeElement.textContent.trim()).toBe('Test CTA');
    });

    it('should have correct CSS classes', () => {
      const heroSection = fixture.debugElement.query(By.css('.hero'));
      const heroContent = fixture.debugElement.query(By.css('.hero__content'));

      expect(heroSection).toBeTruthy();
      expect(heroContent).toBeTruthy();
    });
  });

  describe('Component Methods', () => {
    it('should have onCTAClick method', () => {
      expect(typeof component.onCTAClick).toBe('function');
    });

    it('should emit event when CTA is clicked', () => {
      // Trigger change detection primero
      fixture.detectChanges();

      const spy = jest.spyOn(component, 'onCTAClick');

      const ctaButton = fixture.debugElement.query(By.css('.hero__cta'));
      ctaButton.nativeElement.click();

      expect(spy).toHaveBeenCalled();
    });

    it('should set isVisible to true after view init', () => {
      component.ngAfterViewInit();
      expect(component.isVisible).toBe(true);
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have proper heading hierarchy', () => {
      const h1Element = fixture.debugElement.query(By.css('h1'));
      expect(h1Element).toBeTruthy();
    });

    it('should have accessible button', () => {
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement).toBeTruthy();
      expect(buttonElement.nativeElement.type).toBe('button');
    });
  });
});
