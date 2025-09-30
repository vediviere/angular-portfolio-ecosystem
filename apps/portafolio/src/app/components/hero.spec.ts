import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Rolodex Properties', () => {
    it('should have currentProject initialized to 0', () => {
      expect(component.currentProject).toBe(0);
    });

    it('should have projects array with 5 projects', () => {
      expect(component.projects.length).toBe(5);
    });

    it('should have isFlipping initialized as false', () => {
      expect(component.isFlipping).toBe(false);
    });

    it('should have isShootingAnimation initialized as false', () => {
      expect(component.isShootingAnimation).toBe(false);
    });
  });

  describe('Navigation Methods', () => {
    it('should navigate to next project', () => {
      component.currentProject = 0;
      component.nextProject();
      expect(component.currentProject).toBe(1);
    });

    it('should wrap to first project from last', () => {
      component.currentProject = 4;
      component.nextProject();
      expect(component.currentProject).toBe(0);
    });

    it('should navigate to previous project', () => {
      component.currentProject = 2;
      component.prevProject();
      expect(component.currentProject).toBe(1);
    });

    it('should wrap to last project from first', () => {
      component.currentProject = 0;
      component.prevProject();
      expect(component.currentProject).toBe(4);
    });
  });

  describe('Project Type Method', () => {
    it('should return correct type for web', () => {
      expect(component.getProjectType('web')).toBe('WEB APP');
    });

    it('should return correct type for mobile', () => {
      expect(component.getProjectType('mobile')).toBe('MOBILE APP');
    });

    it('should return correct type for fullstack', () => {
      expect(component.getProjectType('fullstack')).toBe('FULL STACK');
    });
  });

  describe('Flip Animation Methods', () => {
    it('should set isFlipping to true during flip', () => {
      component.flipToNext();
      expect(component.isFlipping).toBe(true);
    });

    it('should reset isFlipping after timeout', (done) => {
      component.flipToNext();
      setTimeout(() => {
        expect(component.isFlipping).toBe(false);
        done();
      }, 250);
    });
  });
});
